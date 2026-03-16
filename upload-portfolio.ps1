git --version 2>$null
git remote remove origin 2>$null
git remote add origin https://github.com/amir-bemani/Portfolio.git
git add -A
git config --global credential.helper manager-core
# Upload portfolio interactive script
# Usage: Run in PowerShell (non-admin) with: powershell -ExecutionPolicy Bypass -File .\upload-portfolio.ps1

$repoPath = "D:\Documents\Portfolio"

if (-not (Test-Path $repoPath)) {
    Write-Error "Repo path not found: $repoPath"
    exit 1
}

Set-Location $repoPath

# Check git
& git --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Error "git is not installed or not on PATH. Install Git and retry."
    exit 1
}

# Initialize repo if missing
if (-not (Test-Path ".git")) {
    Write-Output "Initializing git repository and creating branch 'main'..."
    & git init
    & git checkout -b main
}

# Configure minimal user info if missing
if (-not ( (& git config user.name) -and (& git config user.email) )) {
    if (-not (& git config user.name)) { & git config user.name "Portfolio Upload" }
    if (-not (& git config user.email)) { & git config user.email "noreply@example.com" }
}

# Stage and commit
& git add -A
$staged = (& git diff --cached --name-only)
if ($staged) {
    & git commit -m "Initial commit: upload portfolio"
} else {
    Write-Output "No changes to commit."
}

& git branch -M main

# Set HTTPS remote (will switch to SSH later)
& git remote remove origin 2>$null
& git remote add origin https://github.com/amir-bemani/Portfolio.git

# Configure credential helper (Windows)
& git config --global credential.helper manager-core

Write-Output "Attempting HTTPS push (may prompt for credentials)..."
try {
    $pushOutput = & git push -u origin main 2>&1
} catch {
    $pushOutput = $_.Exception.Message
}
Write-Output $pushOutput

if ($LASTEXITCODE -eq 0) {
    Write-Output "PUSH_SUCCESS"
    exit 0
}

# If network problem
if ($pushOutput -match "Could not resolve host|unable to access 'https://github.com'|Could not resolve proxy") {
    Write-Output "NETWORK_ERROR: cannot reach github.com"
    Write-Output "Run 'ping github.com' and 'nslookup github.com' and ensure internet/DNS works, then retry."
    exit 2
}

# If authentication problem, prepare SSH fallback but require you to add the public key to GitHub
if ($pushOutput -match "Authentication failed|401|403|Permission to .* denied to") {
    Write-Output "AUTHENTICATION_ERROR: HTTPS push denied. Preparing SSH key for fallback."

    $sshDir = Join-Path $env:USERPROFILE ".ssh"
    if (-not (Test-Path $sshDir)) { New-Item -ItemType Directory -Path $sshDir | Out-Null }

    $sshKey = Join-Path $sshDir "id_ed25519"
    $emailForKey = Read-Host "Enter your email for the SSH key (or press Enter to use noreply@example.com)"
    if ([string]::IsNullOrWhiteSpace($emailForKey)) { $emailForKey = "noreply@example.com" }

    if (-not (Test-Path $sshKey)) {
        Write-Output "Generating SSH key at $sshKey (no passphrase)..."
        # Use call operator with argument array to avoid quoting problems
        & ssh-keygen -q -t ed25519 -f $sshKey -N "" -C $emailForKey
    } else {
        Write-Output "SSH key already exists at $sshKey"
    }

    $pubPath = "$sshKey.pub"
    if (Test-Path $pubPath) {
        Write-Output "--- PUBLIC SSH KEY (copy this to GitHub -> Settings -> SSH and GPG keys) ---"
        Get-Content $pubPath | ForEach-Object { Write-Output $_ }
        Write-Output "--- end public key ---"
    } else {
        Write-Output "Public key not found at $pubPath. Aborting."
        exit 5
    }

    Write-Output "
Please open https://github.com/settings/ssh/new, paste the public key shown above, and save it.
After adding the key on GitHub, press Enter here to continue."
    Read-Host -Prompt "Press Enter after you've added the SSH key to GitHub"

    # Try to add GitHub host key to known_hosts to avoid host verification prompt
    try {
        if (Get-Command ssh-keyscan -ErrorAction SilentlyContinue) {
            ssh-keyscan github.com 2>$null | Out-File -FilePath (Join-Path $sshDir "known_hosts") -Append -Encoding ascii
        } else {
            Write-Output "ssh-keyscan not available; if you get a host verification prompt, type 'yes' to continue when asked."
        }
    } catch {
        # ignore
    }

    # Start ssh-agent and add key
    try {
        Start-Service ssh-agent -ErrorAction SilentlyContinue
    } catch {
        # ignore
    }
    & ssh-add $sshKey 2>$null | Out-Null

    Write-Output "Switching remote to SSH and attempting push..."
    & git remote set-url origin git@github.com:amir-bemani/Portfolio.git

    try {
        $pushOutput2 = & git push -u origin main 2>&1
    } catch {
        $pushOutput2 = $_.Exception.Message
    }
    Write-Output $pushOutput2
    if ($LASTEXITCODE -eq 0) {
        Write-Output "PUSH_SUCCESS_SSH"
        exit 0
    } else {
        Write-Output "PUSH_FAILED_AFTER_SSH"
        exit 3
    }
}

Write-Output "UNKNOWN_PUSH_FAILURE"
exit 4

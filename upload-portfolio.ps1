# Upload portfolio script
# Usage: Run in PowerShell (non-admin) with: powershell -ExecutionPolicy Bypass -File .\upload-portfolio.ps1

$repoPath = "D:\Documents\Portfolio"

if (-not (Test-Path $repoPath)) {
    Write-Error "Repo path not found: $repoPath"
    exit 1
}

Set-Location $repoPath

# Check git
git --version 2>$null
if ($LASTEXITCODE -ne 0) {
    Write-Error "git is not installed or not on PATH. Install Git and retry."
    exit 1
}

# Initialize repo if missing
if (-not (Test-Path ".git")) {
    Write-Output "Initializing git repository and creating branch 'main'..."
    git init
    git checkout -b main
}

# Configure minimal user info if missing
if (-not (git config user.name)) { git config user.name "Portfolio Upload" }
if (-not (git config user.email)) { git config user.email "noreply@example.com" }

# Set remote
git remote remove origin 2>$null
git remote add origin https://github.com/amir-bemani/Portfolio.git

# Stage and commit
git add -A
$staged = git diff --cached --name-only
if ($staged) {
    git commit -m "Initial commit: upload portfolio"
} else {
    Write-Output "No changes to commit."
}

git branch -M main

# Configure credential helper (Windows)
git config --global credential.helper manager-core

# Attempt push
Write-Output "Attempting to push to https://github.com/amir-bemani/Portfolio.git (origin/main)..."
$pushOutput = git push -u origin main 2>&1
$pushRc = $LASTEXITCODE
Write-Output $pushOutput

if ($pushRc -eq 0) {
    Write-Output "PUSH_SUCCESS"
    exit 0
}

# Analyze failure
if ($pushOutput -match "Could not resolve host|unable to access 'https://github.com'|Could not resolve proxy") {
    Write-Output "NETWORK_ERROR: cannot reach github.com"
    Write-Output "Running diagnostics: ping and nslookup"
    Write-Output "--- ping github.com ---"
    ping github.com | ForEach-Object { Write-Output $_ }
    Write-Output "--- nslookup github.com ---"
    nslookup github.com | ForEach-Object { Write-Output $_ }
    exit 2
}

if ($pushOutput -match "Authentication failed|401|403|remote: Invalid username or password|fatal: Authentication failed") {
    Write-Output "AUTHENTICATION_ERROR: push failed due to auth. Trying SSH fallback..."

    $sshKey = "$env:USERPROFILE\.ssh\id_ed25519"
    if (-not (Test-Path $sshKey)) {
        Write-Output "Generating SSH key at $sshKey (no passphrase)"
        ssh-keygen -t ed25519 -f $sshKey -N "" -C "noreply@example.com" | Out-Null
    }

    Write-Output "--- PUBLIC SSH KEY (copy this to GitHub -> Settings -> SSH and GPG keys) ---"
    Get-Content "$sshKey.pub" | ForEach-Object { Write-Output $_ }
    Write-Output "--- end public key ---"

    Write-Output "Setting remote to SSH and attempting push (will succeed after you add key to GitHub)"
    git remote set-url origin git@github.com:amir-bemani/Portfolio.git

    # Ensure ssh-agent running
    try {
        Start-Service ssh-agent -ErrorAction SilentlyContinue
    } catch {
        # ignore
    }
    ssh-add $sshKey 2>$null | Out-Null

    $pushOutput2 = git push -u origin main 2>&1
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

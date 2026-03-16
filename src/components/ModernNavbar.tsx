export default function ModernNavbar() {
  return (
    <header className="sticky top-0 z-50 bg-gradient-to-b from-black/40 to-transparent backdrop-blur-sm">
      <div className="container mx-auto px-6 md:px-12 py-4 flex items-center justify-between">
        <div className="text-xl font-semibold text-white">Amir Bemani</div>
        <nav className="space-x-6 hidden md:flex">
          <a href="#about" className="text-slate-300 hover:text-white">About</a>
          <a href="#projects" className="text-slate-300 hover:text-white">Projects</a>
          <a href="#contact" className="text-slate-300 hover:text-white">Contact</a>
        </nav>
        <div className="md:hidden text-slate-300">☰</div>
      </div>
    </header>
  )
}

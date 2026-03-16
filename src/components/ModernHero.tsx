export default function ModernHero() {
  return (
    <section className="pt-20 pb-16">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-tight">Hi, I'm Amir.<br/>I build modern web experiences.</h1>
          <p className="mt-6 text-slate-300 max-w-xl">I design and build performant, accessible, and modern front-end applications. Currently focused on React, 3D visuals, and clean UX.</p>
          <div className="mt-8 flex items-center gap-4">
            <a href="#projects" className="inline-block bg-slate-900 text-white px-5 py-3 rounded-md">See projects</a>
            <a href="#contact" className="inline-block text-slate-300 hover:text-white">Contact me</a>
          </div>
        </div>

        <div className="relative">
          <div className="w-full h-72 md:h-96 rounded-xl bg-gradient-to-br from-indigo-600 via-pink-600 to-amber-500 shadow-2xl transform-gpu hover:scale-[1.02] transition">
            {/* Decorative 3D-like panel */}
            <div className="p-6 text-white opacity-90">
              <div className="font-mono text-xs uppercase tracking-wider">Featured</div>
              <h3 className="mt-3 text-2xl font-bold">Interactive 3D UI</h3>
              <p className="mt-2 text-sm text-white/90">A modern portfolio layout with 3D accents and simple, readable content.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

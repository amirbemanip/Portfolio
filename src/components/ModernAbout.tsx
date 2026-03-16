export default function ModernAbout() {
  return (
    <section id="about" className="py-16">
      <div className="max-w-3xl">
        <h2 className="text-3xl font-bold text-white">About</h2>
        <p className="mt-4 text-slate-300">I am a developer focused on building responsive, accessible and fast web apps. I prefer simple interfaces, clean code and meaningful interactions. I enjoy combining visual polish with practical engineering.</p>
        <ul className="mt-4 grid grid-cols-2 gap-2 text-slate-400">
          <li>React / TypeScript</li>
          <li>Three.js / 3D</li>
          <li>Node.js / APIs</li>
          <li>Data Science</li>
        </ul>
      </div>
    </section>
  )
}

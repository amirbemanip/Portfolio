export default function ModernProjects() {
  const samples = [
    { title: '3D Portfolio', desc: 'Interactive portfolio with 3D elements.' },
    { title: 'Data Viz', desc: 'Visualizations combining data and UX.' },
    { title: 'Web App', desc: 'Modern full-stack project with React and Node.' },
  ]

  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-white">Projects</h2>
      <div className="mt-6 grid md:grid-cols-3 gap-6">
        {samples.map((p) => (
          <article key={p.title} className="rounded-lg bg-slate-900/30 p-4">
            <h3 className="font-semibold text-white">{p.title}</h3>
            <p className="text-slate-300 mt-2 text-sm">{p.desc}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

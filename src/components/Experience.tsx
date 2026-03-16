import { motion } from 'framer-motion';

const EXPERIENCES = [
  {
    title: 'HSE Specialist',
    company: 'Teen Dairy Co. (Damdaran)',
    location: 'Tehran, Iran',
    period: 'Nov 2023 – Sep 2024',
    type: 'Full-Time · Food Production',
    points: [
      'Ensured ISO and 5S compliance across a large-scale food production facility with 200+ staff.',
      'Conducted regular safety audits, risk assessments, and incident investigations.',
      'Led staff training programs on safety protocols and hygiene procedures.',
      'Prepared management reports and KPI dashboards for executive review.',
    ],
  },
  {
    title: 'HSE Engineer',
    company: 'Omran Azarestan Co.',
    location: 'Tehran, Iran',
    period: 'Aug 2021 – Jul 2022',
    type: 'Full-Time · Construction',
    points: [
      'Monitored occupational safety compliance on high-rise construction sites.',
      'Implemented risk mitigation protocols in coordination with project engineers and site managers.',
      'Performed regular safety inspections and reported findings to senior management.',
    ],
  },
  {
    title: 'HSE Intern — Hospital Environment',
    company: 'Kasra Hospital',
    location: 'Tehran, Iran',
    period: 'Mar 2021 – Jul 2021',
    type: 'Internship · Healthcare',
    points: [
      'Supported implementation of hygiene and safety protocols in a clinical hospital environment.',
      'Assisted in risk assessments, safety inspections and compliance monitoring per healthcare regulations.',
    ],
  },
  {
    title: 'Working Student — Kitchen Assistant',
    company: 'Dönerladen (Local Restaurant)',
    location: 'Nuremberg, Germany',
    period: 'Sep 2024 – Present',
    type: 'Working Student · Germany',
    points: [
      'Supporting kitchen operations while pursuing M.Sc. studies at SRH University.',
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-28 px-6 md:px-16 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">04 — Experience</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          
          {/* Left: section title */}
          <motion.div
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8 }}
          >
            <h2
              className="font-heading font-black text-white uppercase tracking-tighter leading-[0.88] sticky top-28"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)' }}
            >
              CAREER<br />TRAJECTORY
            </h2>
          </motion.div>

          {/* Right: experience list */}
          <div className="lg:col-span-8 flex flex-col">
            {EXPERIENCES.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1 * i }}
                className="relative pl-8 md:pl-16 py-12 border-l border-white/5 group first:pt-0"
              >
                {/* Timeline dot */}
                <div className="absolute left-0 top-0 md:top-12 -translate-x-1/2 w-3 h-3 bg-black border border-white/20 rounded-full group-hover:scale-150 group-hover:bg-white group-hover:border-white transition-all duration-500 z-10"></div>

                <div className="flex flex-col md:flex-row md:justify-between md:items-baseline gap-4 mb-8">
                  <div>
                    <h3 className="font-heading font-black text-white text-3xl md:text-4xl tracking-tightest mb-2 uppercase group-hover:text-white transition-colors">
                      {e.title}
                    </h3>
                    <p className="font-mono text-[10px] tracking-widest text-white/30 uppercase">{e.company} · {e.location}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
                    <span className="font-mono text-[10px] tracking-[0.2em] text-white/50 uppercase bg-white/5 px-3 py-1 rounded-full whitespace-nowrap">{e.period}</span>
                  </div>
                </div>

                <ul className="space-y-4 max-w-2xl">
                  {e.points.map((pt, j) => (
                    <li key={j} className="flex gap-4 text-base text-white/40 font-light leading-relaxed group-hover:text-white/60 transition-colors">
                      <span className="font-mono text-[9px] text-white/20 mt-1.5">0{j+1}</span>
                      {pt}
                    </li>
                  ))}
                </ul>

                {/* Decorative background number */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 font-heading font-black text-white/[0.02] text-9xl pointer-events-none select-none">
                  0{i+1}
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

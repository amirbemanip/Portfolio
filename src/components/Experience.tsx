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
          <div className="lg:col-span-8 flex flex-col divide-y divide-white/10">
            {EXPERIENCES.map((e, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: 0.08 * i }}
                className="py-10 group first:pt-0"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-3 mb-5">
                  <div>
                    <h3 className="font-heading font-black text-white text-2xl md:text-3xl tracking-tighter mb-1">
                      {e.title}
                    </h3>
                    <p className="font-sans text-base text-white/55">{e.company} · {e.location}</p>
                  </div>
                  <div className="flex flex-col items-start md:items-end gap-1 flex-shrink-0">
                    <span className="font-mono text-xs tracking-[0.1em] text-white/50 whitespace-nowrap">{e.period}</span>
                    <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">{e.type}</span>
                  </div>
                </div>

                <ul className="space-y-2.5">
                  {e.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm md:text-base text-white/55 font-light leading-relaxed">
                      <span className="text-white/30 flex-shrink-0 mt-1 text-xs">▸</span>
                      {pt}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

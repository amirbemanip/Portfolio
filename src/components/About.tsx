const STATS = [
  { label: 'Education', value: 'M.Sc. Data Science', sub: 'SRH University · Digital Health' },
  { label: 'Background', value: 'B.Sc. OHS', sub: 'Occupational Health & Safety' },
  { label: 'Location', value: 'Nuremberg, DE', sub: 'Open to Remote & Relocation' },
  { label: 'Languages', value: 'EN · DE · FA', sub: 'Fluent · A2 Active · Native' },
];

import { motion } from 'framer-motion';

export const About = () => {
  return (
    <section id="about" className="py-28 px-6 md:px-16 border-t border-white/10 bg-black">
      <div className="max-w-7xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">01 — About</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* ── LEFT: Bio ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-black text-white uppercase tracking-tighter leading-[0.88] mb-10"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              BRIDGING<br />DATA &amp;<br />ENGINEERING.
            </h2>
            <div className="space-y-5 text-white/65 text-base md:text-lg font-light leading-relaxed">
              <p>
                I'm a Data Science M.Sc. student at SRH University Heidelberg, specializing in Digital Health. My background in Occupational Health &amp; Safety gives me a uniquely analytical, compliance-driven view of system architecture and human-centered design.
              </p>
              <p>
                Currently based in Nuremberg, I architect full-stack applications and ML data pipelines — from PostgreSQL schema design and NestJS APIs to React frontends and PyTorch training loops.
              </p>
              <p className="text-white/90 font-medium border-l-2 border-white/30 pl-4">
                Actively seeking a <strong>Working Student / Junior role</strong> in Data Science or Fullstack Engineering.
              </p>
            </div>
          </motion.div>

          {/* ── RIGHT: Stat Grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="grid grid-cols-2 gap-px bg-white/10"
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="bg-black p-6 md:p-8 flex flex-col justify-between min-h-[140px] hover:bg-white/5 transition-colors duration-500 group"
              >
                <span className="font-mono text-[10px] tracking-[0.25em] text-white/35 uppercase mb-4">{s.label}</span>
                <div>
                  <div className="font-heading font-black text-xl md:text-2xl text-white tracking-tighter mb-1">{s.value}</div>
                  <div className="font-mono text-xs text-white/40">{s.sub}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

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

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-y-16 items-start">

          {/* Headline spans 8 cols */}
          <motion.div
            className="md:col-span-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2 className="font-heading font-black text-white uppercase tracking-tightest leading-[0.8] mb-6 text-giant">
              BRIDGING<br />DATA &amp;<br />ENGINEERING<span className="text-white/20">.</span>
            </h2>
          </motion.div>

          {/* Bio spans 4 cols but offset or on next row */}
          <motion.div
            className="md:col-start-8 md:col-span-5 md:-mt-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="space-y-6 text-white/50 text-base md:text-lg font-light leading-relaxed">
              <p className="text-white/80">
                I'm a Data Science M.Sc. student at SRH University Heidelberg, specializing in Digital Health. My background in Occupational Health & Safety gives me a uniquely analytical view of system architecture.
              </p>
              <p>
                Based in Nuremberg, I architect full-stack applications and ML pipelines — from PostgreSQL and NestJS to React and PyTorch.
              </p>
              <p className="text-white font-medium border-l border-white/30 pl-6 py-2">
                Seeking <strong>Working Student / Junior roles</strong> in Data Science or Fullstack Engineering.
              </p>
            </div>
          </motion.div>

          {/* Stats Grid spans full width but in editorial style */}
          <motion.div
            className="md:col-span-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12 md:mt-24"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {STATS.map((s, i) => (
              <div
                key={i}
                className="group relative border border-white/5 bg-white/[0.02] p-8 transition-all duration-500 hover:border-white/20 hover:bg-white/[0.04]"
              >
                <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700"></div>
                <span className="block font-mono text-[9px] tracking-widest text-white/25 uppercase mb-8">[{s.label}]</span>
                <div className="font-heading font-black text-2xl text-white tracking-tighter mb-2 uppercase">{s.value}</div>
                <div className="font-mono text-[10px] text-white/30 leading-relaxed uppercase tracking-wider">{s.sub}</div>
              </div>
            ))}
          </motion.div>
        </div>

      </div>
    </section>
  );
};

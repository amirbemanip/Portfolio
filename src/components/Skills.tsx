import { motion } from 'framer-motion';

const TECH = [
  'Python 3', 'PyTorch', 'scikit-learn', 'Pandas', 'NumPy', 'Matplotlib', 'Seaborn',
  'React', 'Next.js 14', 'TypeScript', 'Tailwind CSS', 'Framer Motion',
  'Node.js', 'NestJS', 'PostgreSQL', 'Prisma ORM', 'Supabase', 'JWT / Auth',
  'Docker', 'AWS S3', 'GitHub CI/CD', 'Flutter', 'GSAP',
];

const DOMAINS = [
  { name: 'Healthcare AI & Digital Health', num: '01' },
  { name: 'Medical Informatics', num: '02' },
  { name: 'E-Commerce & Multi-Vendor Platforms', num: '03' },
  { name: 'Restaurant & Food Tech', num: '04' },
  { name: 'Occupational Safety Systems', num: '05' },
  { name: 'Data Pipelines & ML Ops', num: '06' },
];

export const Skills = () => {
  return (
    <section id="skills" className="py-28 px-6 md:px-16 border-t border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">02 — Skills</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">

          {/* ── Tech Stack ── */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-heading font-black text-white uppercase tracking-tightest leading-none mb-12 text-giant">
              TECH<br />ARSENAL<span className="text-white/20">.</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-px bg-white/10 border border-white/10">
              {TECH.map((t, i) => (
                <motion.div
                  key={t}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.02 * i }}
                  className="bg-black aspect-square sm:aspect-video flex items-center justify-center p-4 group hover:bg-white transition-colors duration-500"
                >
                  <span className="font-mono text-[10px] tracking-widest uppercase text-white/50 group-hover:text-black group-hover:font-bold transition-colors text-center">
                    {t}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Domains ── */}
          <motion.div
            className="lg:col-span-5 lg:pt-32"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="font-heading font-black text-white uppercase tracking-tightest leading-none mb-12"
              style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
            >
              DOMAIN<br />EXPERTISE
            </h2>
            <div className="space-y-1">
              {DOMAINS.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                  className="group flex items-center justify-between py-6 border-b border-white/5 hover:border-white/20 transition-colors"
                >
                  <div className="flex items-center gap-6">
                    <span className="font-mono text-[9px] text-white/20 group-hover:text-white/60 transition-colors tracking-widest">[{d.num}]</span>
                    <span className="font-heading font-bold text-lg md:text-xl text-white/40 group-hover:text-white transition-all duration-300 uppercase tracking-tighter italic group-hover:not-italic">
                      {d.name}
                    </span>
                  </div>
                  <div className="w-1.5 h-1.5 rounded-full bg-white opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">

          {/* ── Tech Stack ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-heading font-black text-white uppercase tracking-tighter mb-10"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              TECH<br />ARSENAL
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {TECH.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: 0.03 * i }}
                  className="hover-target font-mono text-xs tracking-widest uppercase px-4 py-2.5 border border-white/25 text-white/70 hover:border-white hover:text-white transition-all duration-300 cursor-default"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>

          {/* ── Domains ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2 className="font-heading font-black text-white uppercase tracking-tighter mb-10"
              style={{ fontSize: 'clamp(2rem, 5vw, 4rem)' }}
            >
              DOMAIN<br />EXPERTISE
            </h2>
            <div className="flex flex-col">
              {DOMAINS.map((d, i) => (
                <motion.div
                  key={d.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.08 * i }}
                  className="hover-target border-b border-white/10 py-5 flex justify-between items-center group last:border-b-0"
                >
                  <span className="font-sans text-base text-white/65 group-hover:text-white transition-colors duration-300">{d.name}</span>
                  <span className="font-mono text-xs text-white/25 group-hover:text-white/60 transition-colors">{d.num}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

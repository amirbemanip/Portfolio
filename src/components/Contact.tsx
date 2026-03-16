import { motion } from 'framer-motion';

const CONTACTS = [
  { label: 'Email', value: 'amir@bemani.me', href: 'mailto:amir@bemani.me', num: '01' },
  { label: 'LinkedIn', value: 'linkedin.com/in/amirbemani', href: 'https://linkedin.com/in/amirbemani', num: '02' },
  { label: 'GitHub', value: 'github.com/amir-bemani', href: 'https://github.com/amir-bemani', num: '03' },
  { label: 'Phone / WhatsApp', value: '+49 157 5570 9315', href: 'tel:+4915755709315', num: '04' },
];

export const Contact = () => {
  return (
    <section id="contact" className="py-28 px-6 md:px-16 border-t border-white/10 bg-[#080808]">
      <div className="max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-16">
          <span className="font-mono text-xs tracking-[0.3em] text-white/40 uppercase">05 — Contact</span>
          <div className="flex-1 h-px bg-white/10"></div>
        </div>

        {/* Giant CTA headline */}
        <motion.h2
          className="font-heading font-black text-white uppercase tracking-tighter leading-[0.85] mb-16"
          style={{ fontSize: 'clamp(3rem, 10vw, 9rem)' }}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.9 }}
        >
          LET'S<br />WORK<br />TOGETHER.
        </motion.h2>

        {/* Contact links */}
        <div className="flex flex-col">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-30px' }}
              transition={{ duration: 0.5, delay: 0.07 * i }}
              className="hover-target border-b border-white/10 py-7 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-3 group"
            >
              <div className="flex items-center gap-5">
                <span className="font-mono text-xs text-white/25 w-5">{c.num}</span>
                <span className="font-heading font-black text-white/50 group-hover:text-white transition-colors duration-300 uppercase tracking-tighter"
                  style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
                >
                  {c.label}
                </span>
              </div>
              <div className="flex items-center gap-4 pl-10 sm:pl-0">
                <span className="font-mono text-sm text-white/40 group-hover:text-white/70 transition-colors">{c.value}</span>
                <div className="w-10 h-10 rounded-full border border-white/15 flex items-center justify-center text-white/25 group-hover:border-white group-hover:bg-white group-hover:text-black transition-all duration-300 text-base flex-shrink-0">
                  ↗
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* CTA invite */}
        <motion.div
          className="mt-20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8 pt-12 border-t border-white/10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="font-sans text-base text-white/50 font-light max-w-sm leading-relaxed">
            Open to Working Student, Junior, and Freelance roles in Data Science or Fullstack Engineering. Remote-friendly.
          </p>
          <a
            href="mailto:amir@bemani.me"
            className="hover-target flex-shrink-0 inline-flex items-center gap-4 border border-white px-8 py-4 font-mono text-xs tracking-[0.25em] uppercase text-white hover:bg-white hover:text-black transition-all duration-300 font-bold"
          >
            Send Message →
          </a>
        </motion.div>

      </div>
    </section>
  );
};

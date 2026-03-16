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
        <div className="overflow-hidden mb-20">
          <motion.h2
            className="font-heading font-black text-white uppercase tracking-tightest leading-[0.8] text-huge"
            initial={{ y: '100%' }}
            whileInView={{ y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            LET'S<br />WORK<br />TOGETHER<span className="text-white/20">.</span>
          </motion.h2>
        </div>

        {/* Contact links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-white/10 border-y border-white/10">
          {CONTACTS.map((c, i) => (
            <motion.a
              key={c.label}
              href={c.href}
              target={c.href.startsWith('http') ? '_blank' : undefined}
              rel="noreferrer"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 * i }}
              className="hover-target bg-black p-8 md:p-12 flex flex-col justify-between group transition-colors duration-500 hover:bg-white"
            >
              <div className="flex justify-between items-start mb-12">
                <span className="font-mono text-[9px] tracking-widest text-white/20 group-hover:text-black/40 uppercase">[{c.num}]</span>
                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/40 group-hover:border-black/10 group-hover:text-black transition-all duration-500">
                  ↗
                </div>
              </div>
              <div>
                <span className="block font-mono text-[10px] tracking-widest text-white/30 group-hover:text-black/40 uppercase mb-2">{c.label}</span>
                <span className="font-heading font-black text-2xl md:text-3xl text-white group-hover:text-black uppercase tracking-tightest transition-colors">
                  {c.value}
                </span>
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

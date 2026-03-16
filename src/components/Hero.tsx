import { motion } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between bg-black px-6 md:px-16 pt-24 pb-10 overflow-hidden">
      
      {/* GSAP Fluid shader is behind; all content is above */}
      <div className="relative z-10 flex flex-col h-full min-h-screen justify-between">
        
        {/* ── TOP META BAR ── */}
        <motion.div
          className="flex justify-between items-start pt-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
        >
          <div className="flex flex-col gap-1">
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase">Nuremberg, Germany</span>
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/30 uppercase">M.Sc. Data Science · Fullstack Engineer</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/50 uppercase">Available for Work</span>
          </div>
        </motion.div>

        {/* ── MASSIVE NAME ── */}
        <div className="flex flex-col my-auto py-12">
          <div className="overflow-hidden">
            <motion.h1
              className="font-heading font-black text-white uppercase tracking-tighter leading-[0.85] select-none"
              style={{ fontSize: 'clamp(3.5rem, 13vw, 13rem)' }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
            >
              AMIRHOSSEIN
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              className="font-heading font-black text-white uppercase tracking-tighter leading-[0.85] select-none"
              style={{ fontSize: 'clamp(3.5rem, 13vw, 13rem)' }}
              initial={{ y: '100%', opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1.1, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              BEMANI<span className="text-white/30">.</span>
            </motion.h1>
          </div>
        </div>

        {/* ── BOTTOM ROW ── */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-4"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 2.0 }}
        >
          <p className="font-sans text-sm md:text-base text-white/60 font-light max-w-md leading-relaxed">
            I build intelligent systems — from PyTorch ML models to high-performance 
            Next.js & NestJS web architectures.
          </p>

          <a
            href="#about"
            className="hover-target flex-shrink-0 group inline-flex items-center gap-4 border border-white/30 px-7 py-4 hover:bg-white hover:text-black transition-all duration-400 font-mono text-xs tracking-[0.25em] uppercase text-white font-bold"
          >
            Explore Work
            <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
          </a>
        </motion.div>
        
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2.5 }}
      >
        <div className="w-px h-12 bg-gradient-to-b from-transparent to-white/30"></div>
      </motion.div>

    </section>
  );
};

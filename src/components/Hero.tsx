import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

const SplitText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
  return (
    <div className="flex flex-wrap">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          initial={{ y: '100%', opacity: 0, filter: 'blur(10px)' }}
          animate={{ y: 0, opacity: 1, filter: 'blur(0px)' }}
          transition={{
            duration: 1.2,
            delay: delay + i * 0.04,
            ease: [0.22, 1, 0.36, 1]
          }}
          className="inline-block whitespace-pre"
        >
          {char}
        </motion.span>
      ))}
    </div>
  );
};

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section ref={containerRef} className="relative min-h-[110vh] flex flex-col justify-between bg-black px-6 md:px-16 pt-24 pb-20 overflow-hidden">
      
      <motion.div style={{ opacity }} className="relative z-10 flex flex-col h-full min-h-screen justify-between">
        
        {/* ── TOP META BAR ── */}
        <motion.div
          className="flex justify-between items-start pt-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 2.2 }}
        >
          <div className="flex flex-col gap-1.5">
            <span className="font-mono text-[10px] tracking-widest text-white/50 uppercase">Nuremberg, DE</span>
            <div className="h-px w-8 bg-white/20"></div>
            <span className="font-mono text-[10px] tracking-widest text-white/30 uppercase">M.Sc. Data Science · Fullstack Engineer</span>
          </div>
          <motion.div
            className="flex items-center gap-3 px-4 py-2 border border-white/10 rounded-full bg-white/5 backdrop-blur-sm"
            whileHover={{ scale: 1.05, backgroundColor: 'rgba(255,255,255,0.1)' }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_8px_rgba(74,222,128,0.5)]"></span>
            <span className="font-mono text-[9px] tracking-widest text-white/70 uppercase font-bold">Available for Work</span>
          </motion.div>
        </motion.div>

        {/* ── MASSIVE NAME ── */}
        <div className="flex flex-col my-auto py-12 relative">
          <motion.div style={{ y: y1 }} className="overflow-visible">
            <h1 className="font-heading font-black text-white uppercase tracking-tightest leading-[0.8] select-none text-huge">
              <SplitText text="AMIRHOSSEIN" delay={1.2} />
            </h1>
          </motion.div>
          <motion.div style={{ y: y2 }} className="overflow-visible ml-[5vw] md:ml-[10vw]">
            <h1 className="font-heading font-black text-white/90 uppercase tracking-tightest leading-[0.8] select-none text-huge">
              <SplitText text="BEMANI" delay={1.6} />
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.5 }}
                className="text-white/20"
              >.</motion.span>
            </h1>
          </motion.div>

          {/* Abstract geometric element */}
          <motion.div
            className="absolute -right-20 top-1/2 -translate-y-1/2 w-[40vw] h-[40vw] border border-white/5 rounded-full"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 2, delay: 1, ease: [0.16, 1, 0.3, 1] }}
          />
        </div>

        {/* ── BOTTOM ROW ── */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 pb-4"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 2.4, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="max-w-md space-y-6">
            <p className="font-sans text-base md:text-lg text-white/50 font-light leading-relaxed">
              Architecting <span className="text-white">intelligent systems</span> — bridging the gap between deep learning models and high-performance web architectures.
            </p>
            <div className="flex gap-4">
              <span className="font-mono text-[10px] tracking-widest text-white/20 uppercase underline decoration-white/10 underline-offset-8 italic">Based in Germany</span>
            </div>
          </div>

          <a
            href="#about"
            className="hover-target group relative overflow-hidden border border-white/20 px-10 py-5 transition-all duration-500 hover:border-white"
          >
            <span className="relative z-10 font-mono text-[10px] tracking-widest uppercase text-white transition-colors duration-500 group-hover:text-black">
              Scroll to Explore
            </span>
            <div className="absolute inset-0 z-0 translate-y-full bg-white transition-transform duration-500 ease-[0.76,0,0.24,1] group-hover:translate-y-0"></div>
          </a>
        </motion.div>
        
      </motion.div>

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

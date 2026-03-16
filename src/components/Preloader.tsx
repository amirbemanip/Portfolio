import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BOOT_LINES = [
  '> INITIALIZING A.B. PROTOCOL...',
  '> LOADING NEURAL MODULES...',
  '> COMPILING PYTORCH TENSORS...',
  '> CONNECTING POSTGRESQL CLUSTER...',
  '> RENDERING INTERFACES...',
  '> ESTABLISHING FULLSTACK BRIDGE...',
  '> SYSTEM READY.',
];

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [lines, setLines] = useState<string[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let p = 0;
    let lineIdx = 0;
    const interval = setInterval(() => {
      p += Math.random() * 6 + 2;
      if (p >= 100) {
        p = 100;
        clearInterval(interval);
        setDone(true);
        setTimeout(onComplete, 900);
      }
      setProgress(p);
      const threshold = Math.floor((lineIdx + 1) * (100 / BOOT_LINES.length));
      if (p >= threshold && lineIdx < BOOT_LINES.length) {
        setLines(prev => [...prev, BOOT_LINES[lineIdx]]);
        lineIdx++;
      }
    }, 80);
    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!done ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[99998] bg-black flex flex-col justify-between p-8 md:p-16"
          exit={{ y: '-100%', transition: { duration: 0.9, ease: [0.76, 0, 0.24, 1] } }}
        >
          {/* Top bar */}
          <div className="flex justify-between items-center">
            <span className="font-heading font-black text-xl tracking-tighter text-white">A.B.</span>
            <span className="font-mono text-xs text-white/30 tracking-widest uppercase">PORTFOLIO SYSTEM</span>
          </div>

          {/* Center: giant counter */}
          <div className="flex flex-col items-center justify-center flex-1">
            <motion.div
              className="font-heading font-black text-white leading-none"
              style={{ fontSize: 'clamp(6rem, 25vw, 20rem)' }}
              animate={{ opacity: 1 }}
            >
              {Math.floor(progress)}
            </motion.div>
          </div>

          {/* Bottom: terminal log + progress bar */}
          <div className="space-y-6">
            <div className="h-20 overflow-hidden flex flex-col justify-end gap-1">
              <AnimatePresence>
                {lines.slice(-4).map((line, i) => (
                  <motion.div
                    key={line + i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="font-mono text-xs text-white/40 tracking-widest"
                  >
                    {line}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="w-full h-px bg-white/10 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-white"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.08 }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

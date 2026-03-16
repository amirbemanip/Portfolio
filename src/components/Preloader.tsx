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
          <div className="flex flex-col items-center justify-center flex-1 relative">
            <motion.div
              className="font-heading font-black text-white leading-none tracking-tightest select-none"
              style={{ fontSize: 'clamp(8rem, 35vw, 25rem)' }}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              {Math.floor(progress)}
            </motion.div>
            <motion.div
              className="absolute font-mono text-[10px] tracking-widest text-white/20 uppercase"
              style={{ bottom: '15%' }}
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              System Authorization in Progress
            </motion.div>
          </div>

          {/* Bottom: terminal log + progress bar */}
          <div className="space-y-10 max-w-xl mx-auto w-full">
            <div className="h-24 overflow-hidden flex flex-col justify-end gap-1.5 px-4">
              <AnimatePresence mode="popLayout">
                {lines.slice(-5).map((line, i) => (
                  <motion.div
                    key={line + i}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                    className="font-mono text-[10px] text-white/40 tracking-widest uppercase"
                  >
                    <span className="text-white/20 mr-2">[{new Date().toLocaleTimeString([], { hour12: false, hour: '2-digit', minute: '2-digit', second: '2-digit' })}]</span>
                    {line}
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
            <div className="w-full h-[2px] bg-white/5 relative overflow-hidden">
              <motion.div
                className="absolute left-0 top-0 h-full bg-white"
                animate={{ width: `${progress}%` }}
                transition={{ ease: 'linear', duration: 0.1 }}
              />
            </div>
          </div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
};

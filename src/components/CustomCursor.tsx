import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export const CustomCursor = () => {
  const [mouse, setMouse] = useState({ x: -100, y: -100 });
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });

    const checkHover = (e: MouseEvent) => {
      const el = e.target as HTMLElement;
      const isInteractive =
        el.tagName === 'A' || el.tagName === 'BUTTON' ||
        !!el.closest('a') || !!el.closest('button') ||
        el.classList.contains('hover-target') || !!el.closest('.hover-target');
      setHovering(isInteractive);
    };

    window.addEventListener('mousemove', move);
    window.addEventListener('mouseover', checkHover);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseover', checkHover);
    };
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none z-[99999] flex items-center justify-center overflow-hidden"
      animate={{
        x: mouse.x - (hovering ? 40 : 6),
        y: mouse.y - (hovering ? 40 : 6),
        width: hovering ? 80 : 12,
        height: hovering ? 80 : 12,
      }}
      transition={{ type: 'spring', stiffness: 1500, damping: 60, mass: 0.1 }}
    >
      {hovering && (
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          className="font-mono text-[10px] font-bold text-black uppercase"
        >
          View
        </motion.span>
      )}
    </motion.div>
  );
};

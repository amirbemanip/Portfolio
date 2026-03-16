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
      className="fixed top-0 left-0 rounded-full bg-white mix-blend-difference pointer-events-none z-[99999]"
      animate={{
        x: mouse.x - (hovering ? 20 : 6),
        y: mouse.y - (hovering ? 20 : 6),
        width: hovering ? 40 : 12,
        height: hovering ? 40 : 12,
      }}
      transition={{ type: 'spring', stiffness: 900, damping: 40, mass: 0.08 }}
    />
  );
};

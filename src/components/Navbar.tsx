import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { MagneticButton } from './MagneticButton';

const NAV_LINKS = [
  { label: 'ABOUT', href: '#about' },
  { label: 'SKILLS', href: '#skills' },
  { label: 'WORK', href: '#projects' },
  { label: 'EXPERIENCE', href: '#experience' },
  { label: 'CONTACT', href: '#contact' },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, delay: 2.5, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-[200] transition-all duration-500 ${
          scrolled ? 'py-4 border-b border-white/10 bg-black/50 backdrop-blur-2xl' : 'py-8'
        }`}
      >
        <div className="px-6 md:px-12 flex items-center justify-between">
          <a href="#" className="hover-target font-heading font-black text-xl tracking-tighter text-white">
            A<span className="text-white/40">.</span>B<span className="text-white/40">.</span>
          </a>

          {/* Desktop */}
          <nav className="hidden md:flex items-center gap-6">
            {NAV_LINKS.map(link => (
              <MagneticButton key={link.label}>
                <a
                  href={link.href}
                  className="hover-target px-4 py-2 font-mono text-xs tracking-[0.2em] text-white/40 hover:text-white transition-colors duration-300"
                >
                  {link.label}
                </a>
              </MagneticButton>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-4">
            <MagneticButton>
              <a href="https://github.com/amir-bemani" target="_blank" rel="noreferrer"
                className="hover-target p-2 font-mono text-xs tracking-widest text-white/40 hover:text-white transition-colors">
                GH
              </a>
            </MagneticButton>
            <MagneticButton>
              <a href="https://linkedin.com/in/amirbemani" target="_blank" rel="noreferrer"
                className="hover-target p-2 font-mono text-xs tracking-widest text-white/40 hover:text-white transition-colors">
                LI
              </a>
            </MagneticButton>
          </div>

          {/* Mobile burger */}
          <button
            className="hover-target md:hidden text-white"
            onClick={() => setOpen(v => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="fixed inset-0 z-[190] bg-black flex flex-col items-center justify-center gap-10 md:hidden"
          >
            {NAV_LINKS.map((link, i) => (
              <motion.a
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.07 }}
                className="hover-target font-heading font-black text-5xl text-white hover:text-white/50 transition-colors"
              >
                {link.label}
              </motion.a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

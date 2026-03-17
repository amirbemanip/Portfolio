import { useState, useEffect } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);
import { Preloader } from './components/Preloader';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import StarsCanvas from './components/StarsCanvas';
import { BackgroundCanvas } from './components/BackgroundCanvas';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';

function App() {
  const [loading, setLoading] = useState(true);

  useLenis(() => {
    ScrollTrigger.update();
  });

  useEffect(() => {
    ScrollTrigger.refresh();
  }, [loading]);

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <div className="bg-primary min-h-screen text-white relative z-0 overflow-x-hidden">
        {/* Grain Overlay */}
        <div className="fixed inset-0 z-[99999] pointer-events-none opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay"></div>

        <CustomCursor />
        
        <AnimatePresence>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>
        
        {!loading && (
          <>
            <BackgroundCanvas />
            <StarsCanvas />
          </>
        )}

        <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
            <Navbar />
            <Hero />
          </div>
          <main>
            <About />
            <Skills />
            <Experience />
            <Projects />
            <div className='relative z-0'>
              <Contact />
            </div>
          </main>
          <footer className="py-12 border-t border-white/10 bg-black/20">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="flex flex-col gap-2">
                <p className="font-mono text-xs text-white/30 tracking-widest uppercase">
                  © {new Date().getFullYear()} Amirhossein Bemani Vandish
                </p>
                <p className="font-mono text-xs text-white/20 tracking-widest uppercase text-center md:text-left">
                  Data Science · Fullstack Engineering
                </p>
              </div>

              <div className="flex items-center gap-6">
                <a href="https://github.com/amir-bemani" target="_blank" rel="noreferrer"
                  className="hover-target text-white/20 hover:text-white transition-colors duration-300">
                  <FaGithub size={24} />
                </a>
                <a href="https://linkedin.com/in/amirbemani" target="_blank" rel="noreferrer"
                  className="hover-target text-white/20 hover:text-white transition-colors duration-300">
                  <FaLinkedin size={24} />
                </a>
              </div>
            </div>
          </footer>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;

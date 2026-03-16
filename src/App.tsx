import { useState } from 'react';
import { ReactLenis } from 'lenis/react';
import { AnimatePresence } from 'framer-motion';
import { Preloader } from './components/Preloader';
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

  return (
    <ReactLenis root options={{ lerp: 0.08, duration: 1.5, smoothWheel: true }}>
      <div className="bg-black min-h-screen text-white relative overflow-x-hidden">
        <CustomCursor />
        
        <AnimatePresence>
          {loading && <Preloader onComplete={() => setLoading(false)} />}
        </AnimatePresence>
        
        {!loading && <BackgroundCanvas />}

        <div className={`transition-opacity duration-700 ${loading ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Projects />
            <Experience />
            <Contact />
          </main>
          <footer className="py-8 border-t border-white/10">
            <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="font-mono text-xs text-white/30 tracking-widest uppercase">
                © {new Date().getFullYear()} Amirhossein Bemani Vandish
              </p>
              <p className="font-mono text-xs text-white/20 tracking-widest uppercase">
                Data Science · Fullstack Engineering
              </p>
            </div>
          </footer>
        </div>
      </div>
    </ReactLenis>
  );
}

export default App;

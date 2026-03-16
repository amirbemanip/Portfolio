import React from 'react';
import ModernNavbar from './components/ModernNavbar';
import ModernHero from './components/ModernHero';
import ModernAbout from './components/ModernAbout';
import ModernProjects from './components/ModernProjects';
import ModernContact from './components/ModernContact';

function App() {
  return (
    <div className="bg-white/5 min-h-screen text-slate-100 relative overflow-x-hidden">
      <ModernNavbar />
      <main className="container mx-auto px-6 md:px-12">
        <ModernHero />
        <ModernAbout />
        <ModernProjects />
        <ModernContact />
      </main>

      <footer className="py-8 mt-12 border-t border-slate-800">
        <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© {new Date().getFullYear()} Amir Bemani</p>
          <p className="text-sm text-slate-500">Built with React + Vite + Tailwind</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

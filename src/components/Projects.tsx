import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  {
    num: '01',
    title: 'Heart Disease Prediction',
    category: 'Machine Learning · University Project',
    year: '2026',
    description:
      'Evaluated Logistic Regression, KNN, SVM & Random Forest models on UCI Heart Disease data. Achieved >80% accuracy and AUC >0.85. Includes full EDA, cross-validation, and ROC curve analysis.',
    stack: ['Python', 'scikit-learn', 'PyTorch', 'Pandas', 'Seaborn'],
  },
  {
    num: '02',
    title: 'Dönerhaus Nürnberg',
    category: 'Full-Stack Web Platform',
    year: '2026',
    description:
      'Complete restaurant web platform: marketing site, digital loyalty club with QR membership cards, admin panel, and seller dashboard. Multi-role JWT auth, animated UI, fully responsive.',
    stack: ['Next.js 14', 'TypeScript', 'Supabase', 'Prisma', 'Tailwind CSS'],
  },
  {
    num: '03',
    title: 'Persia Market',
    category: 'Multi-Role E-Commerce Ecosystem',
    year: '2025–2026',
    description:
      'Multi-platform marketplace with separate admin, seller, buyer & courier interfaces. Real-time inventory, payment tracking, GPS store finder. PostgreSQL schema with automated Prisma migrations.',
    stack: ['NestJS', 'Next.js', 'Flutter', 'PostgreSQL', 'Prisma ORM'],
  },
];

export const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      ScrollTrigger.refresh();
      const scrollPx = track.scrollWidth - window.innerWidth;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: `+=${scrollPx}`,
          pin: true,
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            // Velocity-based skew effect
            const skew = self.getVelocity() / 300;
            gsap.to(track, { skewX: skew, duration: 0.5, ease: 'power2.out' });
          }
        },
      });

      tl.to(track, {
        x: -scrollPx,
        ease: 'none',
      });

      // Parallax effect for project numbers
      PROJECTS.forEach((_, i) => {
        gsap.fromTo(`.project-num-${i}`,
          { x: 100 },
          {
            x: -100,
            ease: 'none',
            scrollTrigger: {
              trigger: `.project-card-${i}`,
              containerAnimation: tl,
              start: 'left right',
              end: 'right left',
              scrub: true
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="projects" className="relative overflow-hidden bg-black">
      {/* Section label */}
      <div className="absolute top-8 left-6 md:left-16 z-30 flex items-center gap-4">
        <span className="font-mono text-xs tracking-[0.3em] text-white/50 uppercase">03 — Work</span>
        <div className="w-12 h-px bg-white/20"></div>
      </div>

      {/* Horizontal scroll container */}
      <div
        ref={trackRef}
        className="flex h-screen"
        style={{ width: `${PROJECTS.length * 100}vw` }}
      >
        {PROJECTS.map((p, i) => (
          <div
            key={p.num}
            className={`project-card-${i} relative w-screen h-screen flex-shrink-0 flex flex-col justify-between px-6 md:px-16 pt-32 pb-16 border-r border-white/5 bg-[#050505]`}
          >
            {/* Giant semi-transparent number — pushed to background */}
            <div
              className={`project-num-${i} absolute bottom-0 right-0 font-heading font-black text-white/[0.03] leading-none select-none pointer-events-none`}
              style={{ fontSize: 'clamp(15rem, 45vw, 40rem)', lineHeight: 0.7 }}
            >
              {p.num}
            </div>

            {/* Top: category + year */}
            <div className="flex justify-between items-start z-10 mt-8">
              <span className="font-mono text-xs tracking-[0.2em] text-white/50 uppercase">{p.category}</span>
              <span className="font-mono text-xs tracking-[0.2em] text-white/35">{p.year}</span>
            </div>

            {/* Middle: big title + description */}
            <div className="z-10 max-w-5xl">
              <div className="overflow-hidden mb-6">
                <motion.h3
                  className="font-heading font-black text-white uppercase tracking-tightest leading-[0.8] text-huge"
                  initial={{ y: '100%' }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  {p.title}
                </motion.h3>
              </div>
              <p className="font-sans text-base md:text-xl text-white/40 font-light leading-relaxed max-w-2xl">
                {p.description}
              </p>
            </div>

            {/* Bottom: stack tags */}
            <div className="z-10 flex flex-wrap gap-3">
              {p.stack.map(t => (
                <span
                  key={t}
                  className="font-mono text-xs tracking-widest uppercase border border-white/20 text-white/55 px-4 py-2.5 hover:border-white/60 hover:text-white transition-all duration-300 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 right-6 md:right-16 z-30 hidden md:flex items-center gap-3">
        <span className="font-mono text-[10px] tracking-[0.3em] text-white/35 uppercase">Scroll to explore</span>
        <div className="w-8 h-px bg-white/25"></div>
        <span className="text-white/35">→</span>
      </div>
    </section>
  );
};

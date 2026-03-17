import { motion } from 'framer-motion';
import { Suspense, lazy, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const HeroCanvas = lazy(() => import('./HeroCanvas'));

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Entrance Animation
      gsap.from(".hero-title", {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.5,
      });

      gsap.from(".hero-subtitle", {
        y: 50,
        opacity: 0,
        duration: 1.5,
        ease: "power4.out",
        delay: 0.8,
      });

      gsap.from(".hero-pin", {
        scaleY: 0,
        transformOrigin: "top",
        duration: 1.5,
        ease: "power4.out",
        delay: 0.2,
      });

      // Scroll Animations
      gsap.to(textRef.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "30% top",
          scrub: 1,
        },
        y: 100,
        opacity: 0,
      });

      gsap.to(".hero-canvas-container", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
        scale: 0.9,
        opacity: 0.7,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative w-full h-screen mx-auto overflow-hidden">
      <div ref={textRef} className="absolute inset-0 top-[120px] lg:top-[180px] max-w-7xl mx-auto px-6 flex flex-row items-start gap-5 z-10 pointer-events-none">
        <div className="flex flex-col justify-center items-center mt-5 hero-pin">
          <div className="w-5 h-5 rounded-full bg-[#915eff]" />
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>

        <div className="bg-black/20 backdrop-blur-xl border border-white/10 p-6 md:p-10 rounded-3xl max-w-[90%] md:max-w-full">
          <h1 className="hero-title text-white font-black lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2 tracking-tightest">
            Hi, I'm <span className="text-[#915eff]">Amirhossein</span>
          </h1>
          <p className="hero-subtitle text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px] mt-2 tracking-tight">
            I develop <span className='text-white'>intelligent systems</span>, bridging deep learning <br className='sm:block hidden' /> models and high-performance web architectures.
          </p>
        </div>
      </div>

      <div className="hero-canvas-container w-full h-full absolute inset-0 z-0">
        <Suspense fallback={null}>
          <HeroCanvas />
        </Suspense>
      </div>

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

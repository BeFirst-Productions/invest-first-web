'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from '@/components/layout/SectionContainer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Hero() {
  const containerRef  = useRef(null);
  const stickyRef     = useRef(null);
  const skyRef        = useRef(null);
  const buildingRef   = useRef(null);
  const heroTextRef   = useRef(null);
  const scrollHintRef = useRef(null);
  const cloudRightRef = useRef(null);
  const cloudLeftRef  = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1.4,
          pin: false,
          invalidateOnRefresh: true,
        },
      });

      // Navbar fade
      const globalNavbar = document.getElementById('global-navbar');
      if (globalNavbar) {
        tl.to(globalNavbar, {
          y: -12,
          scale: 0.96,
          opacity: 0,
          duration: 0.5,
          ease: 'power2.inOut',
        }, 0);
      }

      // Hero text rises and fades
      tl.to(heroTextRef.current, {
        y: -80,
        opacity: 0,
        duration: 0.45,
        ease: 'power2.inOut',
      }, 0);

      // Scroll hint fades
      tl.to(scrollHintRef.current, {
        opacity: 0,
        y: 10,
        duration: 0.2,
        ease: 'power1.in',
      }, 0);

      // Sky slow parallax
      tl.to(skyRef.current, {
        y: '-12%',
        scale: 1.1,
        duration: 1,
        ease: 'none',
      }, 0);

      // Buildings rise from below
      tl.fromTo(
        buildingRef.current,
        { y: '30vh', scale: 1 },
        { y: '0vh',  scale: 1, duration: 1, ease: 'power2.out' },
        0
      );

      // Clouds drift gently
      tl.to(cloudRightRef.current, {
        x: '3%',
        y: '-6%',
        duration: 1,
        ease: 'none',
      }, 0);

      tl.to(cloudLeftRef.current, {
        x: '-3%',
        y: '-6%',
        duration: 1,
        ease: 'none',
      }, 0);

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.35; transform: scaleY(0.85); }
          50%       { opacity: 1;    transform: scaleY(1.1);  }
        }
      `}</style>
      
      <section
        ref={containerRef}
        className="relative h-[400vh] w-full"
        aria-label="Hero section"
      >
        <div ref={stickyRef} className="sticky top-0 left-0 w-full h-[100vh] overflow-hidden">

          <SectionContainer 
            as="div"
            className="h-full bg-transparent"
            containerClassName="h-full flex flex-col items-center justify-start pointer-events-none"
            background={
              <>
                {/* ── Sky layer ─────────────────────────────────────────────── */}
                <div ref={skyRef} className="absolute inset-[-10%_0_-10%_0] z-0 transform-gpu will-change-transform">
                  <Image
                    src="/images/hero/sky.jpg"
                    alt=""
                    fill
                    priority
                    quality={85}
                    sizes="100vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* ── Left Cloud ──────────────────────────────────────────────── */}
                <div 
                  ref={cloudLeftRef} 
                  className="absolute left-[-5%] md:left-[-3%] top-[14%] md:top-[18%] w-[54%] md:w-[42%] lg:w-[30%] aspect-auto z-[3] pointer-events-none will-change-transform bg-transparent [isolation:isolate] overflow-visible" 
                  aria-hidden="true"
                >
                  <Image
                    src="/images/hero/cloud-left.svg"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain object-center"
                  />
                </div>

                {/* ── Right Cloud ─────────────────────────────────────────────── */}
                <div 
                  ref={cloudRightRef} 
                  className="absolute right-[-8%] md:right-[-2%] top-[6%] md:top-[8%] w-[72%] md:w-[58%] lg:w-[44%] aspect-auto z-[3] pointer-events-none will-change-transform bg-transparent [isolation:isolate] overflow-visible" 
                  aria-hidden="true"
                >
                  <Image
                    src="/images/hero/cloud-right.svg"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain object-center"
                  />
                </div>

                {/* ── Building layer ────────────────────────────────────────── */}
                <div 
                  ref={buildingRef} 
                  className="absolute bottom-[clamp(-250px,-12vh,-180px)] left-[14vw] w-[85vw] z-[2] origin-bottom transform-gpu will-change-transform"
                >
                  <img
                    src="/images/hero/building.png"
                    alt="City skyline with modern skyscrapers"
                    className="block w-full h-auto min-h-[480px] object-cover object-bottom"
                    loading="eager"
                  />
                </div>
              </>
            }
          >
            {/* ── Hero Text ─────────────────────────────────────────────── */}
            <div ref={heroTextRef} className="relative w-full pt-[clamp(90px,12vh,140px)] z-10 will-change-[transform,opacity] flex flex-col items-center text-center pointer-events-auto px-4">
              <h1 className="font-sans text-[clamp(24px,7vw,48px)] md:text-[clamp(22px,5.2vw,64px)] font-bold leading-[1.1] tracking-tight text-[#333333] max-w-[90vw] md:max-w-full">
                Porem <span className="text-[#c1121f]">ipsum dolor</span>{' '}sit&nbsp;consectetur
              </h1>
              <p className="mt-[clamp(5px,1vh,2px)] font-sans text-[clamp(14px,1.6vw,20px)] font-medium text-[#333333] tracking-wide max-w-[800px] leading-relaxed">
                Horem ipsum dolor sit libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>

            {/* ── Scroll Hint ───────────────────────────────────────────── */}
            <div ref={scrollHintRef} className="absolute bottom-[clamp(20px,4vh,40px)] left-1/2 -translate-x-1/2 z-[20] flex flex-col items-center gap-2 will-change-[opacity,transform] pointer-events-none" aria-hidden="true">
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-white/65 font-sans">Scroll</span>
              <span 
                className="block w-[1.5px] h-[44px] origin-top opacity-35" 
                style={{ 
                  background: 'linear-gradient(to bottom, rgba(255, 255, 255, 0.7), rgba(255, 255, 255, 0))',
                  animation: 'scrollPulse 2s ease-in-out infinite'
                }}
              />
            </div>
          </SectionContainer>

        </div>
      </section>
    </>
  );
}
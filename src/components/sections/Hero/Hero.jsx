'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SectionContainer from '@/components/layout/SectionContainer';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

/**
 * Hero — Cinematic 3-stage scroll sequence
 *
 * INITIAL  : Sky + clouds + buildings peeking from bottom + hero text
 *
 * STAGE 1  (0 → 0.38)
 *   Buildings rise, clouds exit, text + navbar fade
 *
 * STAGE 2a (0.38 → 0.68)  WHITE DOME GROWS
 *   Solid white half-ellipse dome grows from bottom-centre upward
 *
 * STAGE 2b (0.68 → 1.0)   WHITE FADES → IMAGE REVEALS
 *   White overlay fades out, hero-img2 de-zooms into view
 *   At end: full-screen arch filled with hero-img2
 *
 * CRITICAL CENTERING FIX:
 *   Never mix CSS transform (translateX) with GSAP transforms on the
 *   same element. GSAP owns ALL transforms via xPercent, scaleX, scaleY.
 *   The arch wrapper uses left:50% + xPercent:-50 (both via GSAP.set)
 *   so GSAP's matrix is the single source of truth.
 */

export default function Hero() {
  const containerRef  = useRef(null);
  const skyRef        = useRef(null);
  const buildingRef   = useRef(null);
  const heroTextRef   = useRef(null);
  const scrollHintRef = useRef(null);
  const cloudRightRef = useRef(null);
  const cloudLeftRef  = useRef(null);
  const archWrapRef   = useRef(null);
  const archImgRef    = useRef(null);
  const whiteRef      = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      // ── Initial arch state — GSAP owns every transform property ──
      // xPercent: -50 centres the 120vw element (like translateX(-50%))
      // scaleY/scaleX: 0 hides it; transformOrigin bottom-centre grows upward
      gsap.set(archWrapRef.current, {
        xPercent: -50,
        scaleY: 0,
        scaleX: 0.28,
        transformOrigin: '50% 100%',
        force3D: true,
      });

      gsap.set(archImgRef.current, {
        scale: 1.18,
        yPercent: 6,
      });

      gsap.set(whiteRef.current, {
        opacity: 1,
      });

      // ── Master scroll-driven timeline ────────────────────────────
      const master = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      /* ═══════════════════════════════════════════
         STAGE 1  (0 → 0.38)
      ═══════════════════════════════════════════ */
      const navbar = document.getElementById('global-navbar');
      if (navbar) {
        master.to(navbar, {
          y: -14, scale: 0.96, opacity: 0,
          duration: 0.30, ease: 'power2.inOut',
        }, 0);
      }

      master.to(heroTextRef.current, {
        y: -110, opacity: 0,
        duration: 0.30, ease: 'power2.inOut',
      }, 0);

      master.to(scrollHintRef.current, {
        opacity: 0, y: 10,
        duration: 0.13, ease: 'power1.in',
      }, 0);

      master.to(skyRef.current, {
        y: '-15%', scale: 1.12,
        duration: 0.38, ease: 'none',
      }, 0);

      master.fromTo(
        buildingRef.current,
        { y: '30vh' },
        { y: '0vh', duration: 0.38, ease: 'power2.out' },
        0
      );

      master.to(cloudLeftRef.current, {
        x: '-20%', y: '-14%', opacity: 0,
        duration: 0.38, ease: 'power1.inOut',
      }, 0);

      master.to(cloudRightRef.current, {
        x: '20%', y: '-12%', opacity: 0,
        duration: 0.38, ease: 'power1.inOut',
      }, 0);

      /* ═══════════════════════════════════════════
         STAGE 2a  (0.38 → 0.68)
         White dome grows from bottom
      ═══════════════════════════════════════════ */
      master.to(archWrapRef.current, {
        scaleY: 1,
        scaleX: 1,
        // xPercent stays -50 — never change it, it's our centering anchor
        duration: 0.30,
        ease: 'power3.out',
      }, 0.38);

      master.to(buildingRef.current, {
        y: '-5vh',
        duration: 0.30,
        ease: 'power1.inOut',
      }, 0.38);

      /* ═══════════════════════════════════════════
         STAGE 2b  (0.68 → 1.0)
         White fades → hero-img2 reveals
      ═══════════════════════════════════════════ */
      master.to(whiteRef.current, {
        opacity: 0,
        duration: 0.32,
        ease: 'power2.inOut',
      }, 0.68);

      master.to(archImgRef.current, {
        scale: 1.0,
        yPercent: 0,
        duration: 0.32,
        ease: 'power2.out',
      }, 0.68);

      master.to(skyRef.current, {
        y: '-22%',
        duration: 0.32,
        ease: 'none',
      }, 0.68);

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
        className="relative h-[500vh] w-full"
        aria-label="Hero section"
      >
        <div className="sticky top-0 left-0 w-full h-screen overflow-hidden">

          <SectionContainer
            as="div"
            className="h-full bg-transparent"
            containerClassName="h-full flex flex-col items-center justify-start pointer-events-none"
            background={
              <>
                {/* Sky */}
                <div
                  ref={skyRef}
                  className="absolute z-0 transform-gpu will-change-transform"
                  style={{ inset: '-10% 0 -10% 0' }}
                >
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

                {/* Left Cloud */}
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

                {/* Right Cloud */}
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

                {/* Buildings */}
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

                {/*
                  ══════════════════════════════════════════════════════
                  ARCH WRAPPER
                  ──────────────────────────────────────────────────────
                  • width: 120vw — bleeds past viewport edges on both sides
                  • height: 108vh — tall enough to cover screen at scaleY=1
                  • left: 50% — the pivot point; xPercent:-50 (via gsap.set)
                    keeps it perfectly centred without any CSS transform
                  • bottom: 0 — anchored to bottom edge
                  • transformOrigin: 50% 100% — scales upward from bottom
                  • GSAP controls: xPercent, scaleY, scaleX
                    (NO CSS translate/transform on this element)

                  ARCH CLIP DIV (inside wrapper)
                  ──────────────────────────────────────────────────────
                  • border-radius: "50% 50% 0 0 / 60% 60% 0 0"
                    → horizontal radius 50% each side (full width)
                    → vertical radius 60% (dome height relative to own height)
                    → produces a wide, shallow dome arch
                  • overflow: hidden clips children to the arch shape
                  • inset box-shadow = thin white border ring

                  LAYERS inside clip div (bottom to top):
                  1. archImgRef  — hero-img2, always present
                  2. whiteRef    — solid white, fades in stage 2b
                  ══════════════════════════════════════════════════════
                */}
                <div
                  ref={archWrapRef}
                  className="absolute z-[6] transform-gpu will-change-transform pointer-events-none"
                  style={{
                    width: '120vw',
                    height: '108vh',
                    bottom: 0,
                    left: '50%',
                    // NO CSS transform here — GSAP owns it via gsap.set xPercent:-50
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{
                      borderRadius: '50% 50% 0 0 / 60% 60% 0 0',
                      boxShadow: 'inset 0 0 0 3px rgba(255,255,255,0.85)',
                    }}
                  >
                    {/* hero-img2 — behind white overlay */}
                    <div
                      ref={archImgRef}
                      className="absolute inset-0 transform-gpu will-change-transform"
                    >
                      <Image
                        src="/images/hero/hero-img2.jpg"
                        alt="Luxury residential towers at dusk"
                        fill
                        priority
                        quality={90}
                        sizes="120vw"
                        className="object-cover object-top"
                      />
                    </div>

                    {/* White overlay — fades out in stage 2b revealing image */}
                    <div
                      ref={whiteRef}
                      className="absolute inset-0 will-change-[opacity]"
                      style={{
                        backgroundColor: '#ffffff',
                        zIndex: 2,
                      }}
                    />
                  </div>
                </div>
                {/* End Arch */}

              </>
            }
          >
            {/* Hero Text */}
            <div
              ref={heroTextRef}
              className="relative w-full pt-[clamp(90px,12vh,140px)] z-10 will-change-[transform,opacity] flex flex-col items-center text-center pointer-events-auto px-4"
            >
              <h1 className="font-sans text-[clamp(24px,7vw,48px)] md:text-[clamp(22px,5.2vw,64px)] font-bold leading-[1.1] tracking-tight text-[#333333] max-w-[90vw] md:max-w-full">
                Porem <span className="text-[#c1121f]">ipsum dolor</span>{' '}sit&nbsp;consectetur
              </h1>
              <p className="mt-[clamp(5px,1vh,12px)] font-sans text-[clamp(14px,1.6vw,20px)] font-medium text-[#333333] tracking-wide max-w-[800px] leading-relaxed">
                Horem ipsum dolor sit libero et velit interdum, ac aliquet odio mattis.
              </p>
            </div>

            {/* Scroll Hint */}
            <div
              ref={scrollHintRef}
              className="absolute bottom-[clamp(20px,4vh,40px)] left-1/2 -translate-x-1/2 z-[20] flex flex-col items-center gap-2 will-change-[opacity,transform] pointer-events-none"
              aria-hidden="true"
            >
              <span className="text-[10px] font-semibold tracking-[3px] uppercase text-white/65 font-sans">
                Scroll
              </span>
              <span
                className="block w-[1.5px] h-[44px] origin-top opacity-35"
                style={{
                  background: 'linear-gradient(to bottom, rgba(255,255,255,0.7), rgba(255,255,255,0))',
                  animation: 'scrollPulse 2s ease-in-out infinite',
                }}
              />
            </div>

          </SectionContainer>
        </div>
      </section>
    </>
  );
}
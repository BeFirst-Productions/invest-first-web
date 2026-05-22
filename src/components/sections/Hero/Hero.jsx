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
 * LAYER STACK (bottom → top):
 *   z-[0]  Sky
 *   z-[2]  Buildings (hero-building.png) — parallax
 *   z-[3]  Clouds — parallax
 *   z-[5]  hero-img2.png — full screen, clipped to arch-hole shape via clip-path
 *   z-[6]  Arch ring — white CSS border only, hollow/transparent interior
 *   z-[10] Hero text / scroll hint
 *
 * HOW THE REVEAL WORKS:
 *   hero-img2.png starts with clip-path: circle(0vw at 50vw 100vh) → invisible.
 *   The arch ring (white frame) and clip-path circle grow together in perfect sync.
 *   Outside the ring  → original sky + building shows (hero-img2 is clipped away).
 *   Inside the hole   → hero-img2 shows (clip-path circle matches inner arch radius).
 *   Stage 3 end       → circle grows to 150vw, covering full screen. Arch ring fades.
 *
 * SCROLL STAGES:
 *   0%  → 30%   Stage 1 : Hero UI exits, parallax (sky / buildings / clouds)
 *   30% → 60%   Stage 2 : Arch + clip-path grow together (window reveal)
 *   60% → 100%  Stage 3 : Both expand → ring exits screen → hero-img2 fills viewport
 */

export default function Hero() {
  const containerRef  = useRef(null);
  const skyRef        = useRef(null);
  const buildingRef   = useRef(null);
  const heroTextRef   = useRef(null);
  const scrollHintRef = useRef(null);
  const cloudRightRef = useRef(null);
  const cloudLeftRef  = useRef(null);

  /** Full-screen reveal image — clipped to arch hole via CSS clip-path */
  const bgImgRef      = useRef(null);

  /** Arch wrapper — GSAP scales this from bottom-center */
  const archWrapRef   = useRef(null);

  /** White ring frame — CSS borders only, interior is transparent */
  const archFrameRef  = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {

      // ── Initial states ────────────────────────────────────────

      // Arch starts fully collapsed — invisible
      gsap.set(archWrapRef.current, {
        xPercent       : -50,
        scale          : 0,
        transformOrigin: '50% 100%', // grow upward from bottom-center
        force3D        : true,
      });

      // hero-img2: full screen but FULLY CLIPPED to a zero-radius circle
      // centered at screen bottom-center (matches arch transform-origin).
      // This keeps it invisible until Stage 2 starts growing the clip circle.
      gsap.set(bgImgRef.current, {
        clipPath: 'circle(0vw at 50% 100%)',
      });

      // ── Master scroll timeline ─────────────────────────────────
      const master = gsap.timeline({
        scrollTrigger: {
          trigger            : containerRef.current,
          start              : 'top top',
          end                : 'bottom bottom',
          scrub              : 2,
          invalidateOnRefresh: true,
        },
      });

      /* ──────────────────────────────────────────────────────────
         STAGE 1  (0 → 0.30)
         Hero UI exits. Clouds / sky / buildings parallax.
         hero-img2 clip-path stays at 0 — still invisible.
      ────────────────────────────────────────────────────────── */
      const navbar = document.getElementById('global-navbar');
      if (navbar) {
        master.to(navbar, {
          y: -16, scale: 0.95, opacity: 0,
          duration: 0.25, ease: 'power2.inOut',
        }, 0);
      }

      master.to(heroTextRef.current, {
        y: -80, opacity: 0,
        duration: 0.25, ease: 'power2.inOut',
      }, 0);

      master.to(scrollHintRef.current, {
        opacity: 0, y: 6,
        duration: 0.10, ease: 'power1.in',
      }, 0);

      master.to(cloudLeftRef.current, {
        x: '-20%', y: '-10%', opacity: 0,
        duration: 0.30, ease: 'power1.inOut',
      }, 0);

      master.to(cloudRightRef.current, {
        x: '20%', y: '-8%', opacity: 0,
        duration: 0.30, ease: 'power1.inOut',
      }, 0);

      master.to(skyRef.current, {
        y: '-10%', scale: 1.08,
        duration: 0.30, ease: 'none',
      }, 0);

      master.fromTo(
        buildingRef.current,
        { y: () => window.innerWidth <= 768 ? '8vh' : '26vh', scale: 1 },
        { y: () => window.innerWidth <= 768 ? '-5vh' : '-14vh', scale: 1.03, duration: 0.30, ease: 'power2.out' },
        0
      );

      /* ──────────────────────────────────────────────────────────
         STAGE 2  (0.30 → 0.60)
         Arch ring and clip-path circle grow together in sync.

         Arch inner radius at scale 1:
           archWrap = 140vw wide → half = 70vw
           border thickness = 20.3vw
           inner radius = 70vw − 20.3vw = 49.7vw
         So clip-path circle radius = 49.7vw at scale 1.

         Outside the arch ring  → sky + building still visible
         Inside the arch hole   → hero-img2 reveals through clip-path
      ────────────────────────────────────────────────────────── */
      master.to(archWrapRef.current, {
        scale   : () => window.innerWidth <= 768 ? 1.5 : 1.0,
        duration: 0.30,
        ease    : 'power3.out',
      }, 0.30);

      // Clip-path grows to match inner arch hole radius
      master.to(bgImgRef.current, {
        clipPath: () => window.innerWidth <= 768 ? 'circle(74.6vw at 50% 100%)' : 'circle(49.7vw at 50% 100%)',
        duration: 0.30,
        ease    : 'power3.out',
      }, 0.30);

      master.to(buildingRef.current, {
        y: () => window.innerWidth <= 768 ? '-2vh' : '-4vh', duration: 0.30, ease: 'power1.inOut',
      }, 0.30);

      master.to(skyRef.current, {
        y: '-15%', duration: 0.30, ease: 'none',
      }, 0.30);

      /* ──────────────────────────────────────────────────────────
         STAGE 3  (0.60 → 1.0)
         Both arch and clip-path expand until ring exits screen.

         At arch scale 3.0:
           inner radius = 49.7vw × 3 = 149.1vw ≈ 150vw
           A circle of radius 150vw centered at bottom covers the full viewport.
         → White ring borders move off all screen edges.
         → hero-img2 fills entire screen.
         → Arch ring fades at ~82% for a clean dissolve.
      ────────────────────────────────────────────────────────── */
      master.to(archWrapRef.current, {
        scale   : () => window.innerWidth <= 768 ? 6.0 : 3.0,
        duration: 0.40,
        ease    : 'power1.inOut',
      }, 0.60);

      master.to(bgImgRef.current, {
        clipPath: () => window.innerWidth <= 768 ? 'circle(250vw at 50% 100%)' : 'circle(150vw at 50% 100%)',
        duration: 0.40,
        ease    : 'power1.inOut',
      }, 0.60);

      // Fade the ring just before it completely exits screen
      master.to(archFrameRef.current, {
        opacity : 0,
        duration: 0.15,
        ease    : 'power2.in',
      }, 0.82);

      master.to(skyRef.current, {
        y: '-28%', duration: 0.40, ease: 'none',
      }, 0.60);

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
                {/* ── z-[0] Sky ── */}
                <div
                  ref={skyRef}
                  className="absolute z-0 transform-gpu will-change-transform"
                  style={{ inset: '-10% 0 -10% 0' }}
                >
                  <Image
                    src="/images/hero/sky.jpg"
                    alt="" fill priority quality={85} sizes="100vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* ── z-[3] Left Cloud ── */}
                <div
                  ref={cloudLeftRef}
                  className="absolute left-[-5%] md:left-[-3%] top-[14%] md:top-[18%] w-[54%] md:w-[42%] lg:w-[30%] aspect-[529/309] z-[3] pointer-events-none will-change-transform bg-transparent [isolation:isolate] overflow-visible"
                  aria-hidden="true"
                >
                  <Image
                    src="/images/hero/clouds-png-.png"
                    alt="" fill unoptimized
                    className="object-contain object-center"
                  />
                </div>

                {/* ── z-[3] Right Cloud ── */}
                <div
                  ref={cloudRightRef}
                  className="absolute right-[-8%] md:right-[-2%] top-[6%] md:top-[8%] w-[72%] md:w-[58%] lg:w-[44%] aspect-[472/276] z-[3] pointer-events-none will-change-transform bg-transparent [isolation:isolate] overflow-visible"
                  aria-hidden="true"
                >
                  <Image
                    src="/images/hero/clouds-png-.png"
                    alt="" fill unoptimized
                    className="object-contain object-center"
                  />
                </div>

                {/* ── z-[2] Buildings ── */}
                <div
                  ref={buildingRef}
                  className="absolute bottom-[clamp(-200px,-15vh,-150px)] md:bottom-[clamp(-380px,-20vh,-280px)] left-0 w-full z-[2] origin-bottom transform-gpu will-change-transform"
                >
                  <img
                    src="/images/hero/hero-building.png"
                    alt="City skyline with modern skyscrapers"
                    className="block w-full h-auto min-h-[480px] object-cover object-bottom"
                    loading="eager"
                  />
                </div>

                {/* ── z-[5] Reveal image ───────────────────────────────────
                    Full viewport. Starts fully clipped (circle 0vw).
                    GSAP grows clip-path in sync with arch inner hole.
                    Only visible through the arch hollow — never bleeds outside.
                ──────────────────────────────────────────────────────────── */}
                <div
                  ref={bgImgRef}
                  className="absolute z-[5] pointer-events-none will-change-[clip-path]"
                  style={{
                    top      : 0,
                    left     : '50%',
                    transform: 'translateX(-50%)',
                    width    : '100vw',
                    height   : '100vh',
                  }}
                  aria-hidden="true"
                >
                  <Image
                    src="/images/hero/hero-img2.png"
                    alt="Luxury residential towers at dusk"
                    fill priority quality={90} sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* ══════════════════════════════════════════════════════════
                    z-[6] ARCH WRAPPER
                    width: 140vw, height: 70vw → perfect semicircle box.
                    Contains ONLY the white CSS border ring.
                    Interior is transparent — no image, no background.
                    clip-path on bgImgRef ensures image only shows through hole.
                ═══════════════════════════════════════════════════════════ */}
                <div
                  ref={archWrapRef}
                  className="absolute z-[6] transform-gpu will-change-transform pointer-events-none"
                  style={{
                    width          : '140vw',
                    height         : '70vw',
                    bottom         : 0,
                    left           : '50%',
                    transform      : 'translateX(-50%) scale(0)',
                    transformOrigin: '50% 100%',
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ borderRadius: '50% 50% 0 0 / 100% 100% 0 0' }}
                  >
                    {/* White ring — CSS borders only, background: transparent */}
                    <div
                      ref={archFrameRef}
                      className="absolute inset-0 will-change-[opacity]"
                      style={{
                        borderTop   : '20.3vw solid #ffffff',
                        borderLeft  : '20.3vw solid #ffffff',
                        borderRight : '20.3vw solid #ffffff',
                        borderBottom: 'none',
                        borderRadius: '50% 50% 0 0 / 100% 100% 0 0',
                        background  : 'transparent',
                      }}
                    />
                  </div>
                </div>
                {/* End Arch */}
              </>
            }
          >
            {/* ── Hero Text ── */}
            <div
              ref={heroTextRef}
              className="relative w-full pt-[clamp(140px,20vh,220px)] z-10 will-change-[transform,opacity] flex flex-col items-center text-center pointer-events-auto px-4"
            >
              <h1 className="font-sans text-[clamp(24px,7vw,48px)] md:text-[clamp(22px,5.2vw,64px)] font-bold leading-[1.1] tracking-tight text-[#333333] max-w-[90vw] md:max-w-full">
                Business <span className="text-[#660033]">Setup Services</span>{' '}in Dubai &amp; UAE
              </h1>
              <p className="mt-[clamp(12px,2vh,24px)] font-sans text-[clamp(14px,1.6vw,20px)] font-medium text-[#333333] tracking-wide max-w-[800px] leading-relaxed">
               Business setup in Dubai made it simple for startups& entrepreneurs.
              </p>
            </div>

            {/* ── Scroll hint ── */}
            <div
              ref={scrollHintRef}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="w-[2px] h-10 bg-[#333333] origin-top"
                style={{ animation: 'scrollPulse 1.6s ease-in-out infinite' }}
              />
            </div>
          </SectionContainer>
        </div>
      </section>
    </>
  );
}
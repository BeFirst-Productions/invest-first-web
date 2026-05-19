'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

/**
 * PageLoader
 *
 * ANIMATION (original — do not change):
 *   1. Bloom pulse rises behind logo
 *   2. Logo springs in  (back.out)
 *   3. Tagline fades up
 *   4. Progress bar sweeps L→R to ~78%
 *   EXIT triggered by window.load:
 *   5. Bar rushes to 100%
 *   6. Logo / tagline / bloom / bar fade out
 *   7. TOP curtain slides UP, BOTTOM curtain slides DOWN simultaneously
 *
 * THEME (white — matches hero brightness, seam invisible):
 *   Both curtains → pure white (seam disappears against white wrapper bg)
 *   Bloom          → sky-blue radial (matches hero sky.jpg palette)
 *   Logo           → full company PNG (dark text readable on white)
 *   Divider        → maroon 1px line (brand accent)
 *   Progress bar   → maroon → crimson → pink gradient with glow
 */
export default function PageLoader() {
  const topRef     = useRef(null);
  const botRef     = useRef(null);
  const logoRef    = useRef(null);
  const tagRef     = useRef(null);
  const bloomRef   = useRef(null);
  const barFillRef = useRef(null);
  const barWrapRef = useRef(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setMounted(false); return; }

    const tl = gsap.timeline();

    // ── 1. Bloom pulse ─────────────────────────────────────────
    tl.fromTo(bloomRef.current,
      { scale: 0.6, opacity: 0 },
      { scale: 1.4, opacity: 1, duration: 1.8, ease: 'power2.out' },
      0
    );

    // ── 2. Logo springs in ─────────────────────────────────────
    tl.fromTo(logoRef.current,
      { y: 28, opacity: 0, scale: 0.85 },
      { y: 0,  opacity: 1, scale: 1,   duration: 0.7, ease: 'back.out(1.6)' },
      0.15
    );

    // ── 3. Tagline fades up ────────────────────────────────────
    tl.fromTo(tagRef.current,
      { opacity: 0, y: 10 },
      { opacity: 1, y: 0,  duration: 0.5, ease: 'power2.out' },
      0.55
    );

    // ── 4. Progress bar sweeps to 78% ─────────────────────────
    tl.fromTo(barFillRef.current,
      { scaleX: 0 },
      { scaleX: 0.78, duration: 1.5, ease: 'power2.out' },
      0.35
    );

    let timeoutId;

    // ── EXIT on window.load ───────────────────────────────────
    const exit = () => {
      if (!bloomRef.current || !logoRef.current || !tagRef.current || !barWrapRef.current || !topRef.current || !botRef.current) {
        return;
      }
      const et = gsap.timeline({ onComplete: () => setMounted(false) });

      // 5. Bar to 100%
      et.to(barFillRef.current, {
        scaleX: 1, duration: 0.3, ease: 'power3.inOut',
      });

      // Micro pause
      et.to({}, { duration: 0.12 });

      // 6. Fade centre content
      et.to(
        [bloomRef.current, logoRef.current, tagRef.current, barWrapRef.current],
        { opacity: 0, y: -10, duration: 0.3, ease: 'power2.in', stagger: 0.04 },
        '>'
      );

      // 7. Theatre curtain split — TOP up, BOTTOM down (simultaneous)
      et.to(topRef.current, { yPercent: -100, duration: 0.7, ease: 'power3.inOut' }, '>-0.08');
      et.to(botRef.current, { yPercent:  100, duration: 0.7, ease: 'power3.inOut' }, '<');
    };

    if (document.readyState === 'complete') {
      timeoutId = setTimeout(exit, 900);
    } else {
      window.addEventListener('load', exit, { once: true });
      timeoutId = setTimeout(exit, 5000);
    }

    return () => {
      window.removeEventListener('load', exit);
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
    };
  }, []);

  if (!mounted) return null;

  return (
    /* White wrapper — makes both curtain halves' seam invisible */
    <div className="fixed inset-0 z-[9999] overflow-hidden pointer-events-none bg-white">

      {/* TOP curtain — white, covers top half */}
      <div
        ref={topRef}
        className="absolute top-0 left-0 w-full bg-white"
        style={{ height: '50.5%', transformOrigin: 'top center' }}
      />

      {/* BOTTOM curtain — white, covers bottom half */}
      <div
        ref={botRef}
        className="absolute bottom-0 left-0 w-full bg-white"
        style={{ height: '50.5%', transformOrigin: 'bottom center' }}
      />

      {/* ── Centre content (sits above both curtains) ── */}
      <div className="absolute inset-0 z-10 flex flex-col items-center justify-center">

        {/* Sky-blue bloom — matches hero sky palette */}
        <div
          ref={bloomRef}
          className="absolute pointer-events-none"
          style={{
            width       : '320px',
            height      : '320px',
            borderRadius: '50%',
            background  : 'radial-gradient(circle, rgba(130,190,230,0.22) 0%, rgba(100,160,220,0.08) 55%, transparent 75%)',
            opacity     : 0,
          }}
        />

        {/* Company logo */}
        <div
          ref={logoRef}
          className="relative z-10"
          style={{
            width  : 'clamp(180px, 26vw, 270px)',
            height : 'clamp(58px, 8vw, 90px)',
            opacity: 0,
          }}
        >
          <Image
            src="/images/logos/investfirst-loader-logo.png"
            alt="Invest First Business Services"
            fill priority
            className="object-contain object-center"
            sizes="(max-width: 768px) 200px, 270px"
          />
        </div>

        {/* Maroon divider — brand accent */}
        <div className="mt-[18px] mb-[13px] z-10" style={{
          width     : '40px',
          height    : '1.5px',
          background: 'linear-gradient(to right, transparent, #660033, transparent)',
        }} />

        {/* Tagline */}
        <p
          ref={tagRef}
          className="z-10 font-sans text-[11px] tracking-[0.22em] uppercase font-semibold"
          style={{ color: '#999999', opacity: 0 }}
        >
          Business Setup · Dubai &amp; UAE
        </p>
      </div>

      {/* ── Progress bar ── */}
      <div
        ref={barWrapRef}
        className="absolute bottom-0 left-0 w-full z-20"
        style={{ height: '3px', background: 'rgba(0,0,0,0.07)' }}
      >
        <div
          ref={barFillRef}
          className="h-full origin-left"
          style={{
            background: 'linear-gradient(90deg, #660033 0%, #cc0066 55%, #ff4da6 100%)',
            boxShadow : '0 0 12px rgba(204,0,102,0.65)',
            transform : 'scaleX(0)',
          }}
        />
      </div>
    </div>
  );
}

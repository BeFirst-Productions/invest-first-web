'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function PageLoader() {
  const topRef  = useRef(null);
  const botRef  = useRef(null);
  const logoRef = useRef(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setMounted(false); return; }

    const tl = gsap.timeline();

    // Logo springs in
    tl.fromTo(logoRef.current,
      { y: 20, opacity: 0, scale: 0.9 },
      { y: 0,  opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' },
      0.2
    );

    let timeoutId;

    // ── EXIT on window.load ───────────────────────────────────
    const exit = () => {
      if (!logoRef.current || !topRef.current || !botRef.current) {
        return;
      }
      const et = gsap.timeline({ onComplete: () => setMounted(false) });

      // Fade out logo and split curtains simultaneously
      et.to(logoRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: 'power2.inOut'
      }, 0);

      et.to(topRef.current, {
        yPercent: -100,
        duration: 0.8,
        ease: 'power3.inOut'
      }, 0.1);

      et.to(botRef.current, {
        yPercent: 100,
        duration: 0.8,
        ease: 'power3.inOut'
      }, 0.1);
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
    /* Transparent wrapper — reveals the page underneath during curtain split */
    <div className="fixed inset-0 z-[9999] overflow-hidden bg-transparent">

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
      <div className="absolute inset-0 z-10 flex items-center justify-center">
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
      </div>
    </div>
  );
}

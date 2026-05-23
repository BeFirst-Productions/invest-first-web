'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function PageLoader() {
  const containerRef = useRef(null);
  const logoRef      = useRef(null);
  const [mounted, setMounted] = useState(true);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) { setMounted(false); return; }

    // 1. Entrance animation: Logo fades and pops in
    const entranceTl = gsap.timeline();
    entranceTl.fromTo(logoRef.current,
      { opacity: 0, scale: 0.9 },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power2.out' }
    );

    // 2. Infinite pulse loop (starts after entrance animation completes)
    const pulseTween = gsap.to(logoRef.current, {
      scale: 1.06,
      duration: 0.9,
      repeat: -1,
      yoyo: true,
      ease: 'power1.inOut',
      delay: 0.6,
    });

    let timeoutId;

    // 3. Exit sequence
    const exit = () => {
      if (!containerRef.current || !logoRef.current) return;
      
      // Kill the infinite pulse tween to prevent conflicting scale animations
      pulseTween.kill();

      const exitTl = gsap.timeline({
        onStart: () => {
          if (typeof window !== 'undefined') {
            window.__loaderExit = true;
            window.dispatchEvent(new Event('loaderExit'));
          }
        },
        onComplete: () => setMounted(false)
      });

      // Smooth fade-out of logo and overlay background
      exitTl.to(logoRef.current, {
        opacity: 0,
        scale: 0.95,
        duration: 0.4,
        ease: 'power2.inOut'
      }, 0);

      exitTl.to(containerRef.current, {
        opacity: 0,
        duration: 0.6,
        ease: 'power2.inOut'
      }, 0.1);
    };

    if (document.readyState === 'complete') {
      timeoutId = setTimeout(exit, 1200); // 1.2s minimum display time
    } else {
      window.addEventListener('load', exit, { once: true });
      timeoutId = setTimeout(exit, 5000); // 5s safety fallback
    }

    return () => {
      window.removeEventListener('load', exit);
      if (timeoutId) clearTimeout(timeoutId);
      pulseTween.kill();
    };
  }, []);

  if (!mounted) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-white"
    >
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
  );
}

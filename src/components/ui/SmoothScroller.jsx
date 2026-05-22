'use client';

import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';
import { gsap } from '@/lib/gsap';
import { ScrollTrigger } from '@/lib/gsap';

/**
 * SmoothScroller
 * Mounts Lenis globally for momentum-based (inertia) scrolling.
 * Syncs Lenis's scroll position with GSAP ScrollTrigger so all
 * existing scroll-triggered animations keep working correctly.
 *
 * Tuning knobs:
 *   duration  – how long the momentum "tail" lasts (seconds)
 *   easing    – the deceleration curve (expo-out = heavy slipperiness)
 *   lerp      – 0…1, lower = smoother / more floaty (overrides duration when set)
 */
export default function SmoothScroller() {
  useEffect(() => {
    const lenis = new Lenis({
      // ─── Silky momentum glide feel ─────────────────────────────────────────
      // lerp (linear interpolation) — lower = smoother, floatier lag behind scroll.
      // 0.05 provides a beautiful, modern momentum tail that continues coasting
      // and gently slows down after the user stops scrolling.
      // (Note: when lerp is set, duration and easing parameters are ignored by Lenis)
      lerp: 0.05,

      smoothWheel: true,        // smooth mouse-wheel scrolling
      smoothTouch: false,       // keep native inertia on mobile (already slippery)
      wheelMultiplier: 1.1,     // slightly higher multiplier gives more momentum/distance
      touchMultiplier: 1.5,
    });

    // Keep GSAP ScrollTrigger in sync with Lenis
    lenis.on('scroll', ScrollTrigger.update);

    // Hook Lenis into GSAP's ticker for perfectly frame-synced updates
    const rafCallback = (time) => lenis.raf(time * 1000);
    gsap.ticker.add(rafCallback);
    gsap.ticker.lagSmoothing(0); // prevent GSAP from skipping frames

    return () => {
      gsap.ticker.remove(rafCallback);
      lenis.destroy();
    };
  }, []);

  return null; // renders nothing, only side-effects
}

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
      // ─── Slippery momentum feel ────────────────────────────────────────────
      // duration controls how long the deceleration "tail" lasts.
      // Higher = more slippery coasting before stopping.
      duration: 1.8,

      // Quintic-out: accelerates instantly, then decelerates veeery slowly.
      // This creates the "ice-skating" / slippery glide effect you want.
      easing: (t) => 1 - Math.pow(1 - t, 5),

      // lerp (linear interpolation) — lower = more floaty lag behind cursor.
      // 0.075 gives a silky smooth, slightly delayed response.
      lerp: 0.075,

      smoothWheel: true,        // smooth mouse-wheel scrolling
      smoothTouch: false,       // keep native inertia on mobile (already slippery)
      wheelMultiplier: 0.9,     // slightly slower scroll = feels heavier / premium
      touchMultiplier: 2,
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

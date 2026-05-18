import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '@/lib/gsap';

export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    if (!ref.current) return;

    const ctx = gsap.context(() => {
      gsap.from(ref.current, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 85%',
          once: true,         // fires once — avoids re-triggering on scroll up
        },
        ...options,
      });
    });

    return () => ctx.revert(); // critical cleanup — prevents memory leaks
  }, []);

  return ref;
}
'use client';

import { useEffect, useRef, useState, useCallback } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// ─── Data ──────────────────────────────────────────────────────────────────────
const WORDS = ['Medication', 'Supervision', 'Hygiene'];

// Timing constants (fraction of total scroll)
const WORDS_COUNT  = WORDS.length;
const TOTAL        = 5; // Long runway for 3 words to ensure final word stays

// ─── Sub-components ────────────────────────────────────────────────────────────

function ProgressDots({ activeIndex }) {
  return (
    <div className="absolute right-5 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-30">
      {WORDS.map((_, i) => (
        <div
          key={i}
          className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
            i === activeIndex
              ? 'bg-black scale-150 dark:bg-white'
              : 'bg-black/25 dark:bg-white/25'
          }`}
        />
      ))}
    </div>
  );
}

// ─── Main Component ────────────────────────────────────────────────────────────
export default function ScrollWordReveal() {
  const driverRef  = useRef(null);
  const stageRef   = useRef(null);
  const wordRefs   = useRef([]);
  const tlRef      = useRef(null);

  const [activeWord, setActiveWord]   = useState(0);

  // ── set driver scroll height
  const setHeight = useCallback(() => {
    if (driverRef.current) {
      driverRef.current.style.height = `${TOTAL * window.innerHeight}px`;
    }
  }, []);

  useEffect(() => {
    setHeight();

    const ctx = gsap.context(() => {
      const seg = 1 / TOTAL;

      // Initial state: first word sharp, others small and blurred
      gsap.set(wordRefs.current, { opacity: 0, scale: 0.8, filter: 'blur(12px)' });
      gsap.set(wordRefs.current[0], { opacity: 1, scale: 1, filter: 'blur(0px)' });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: driverRef.current,
          start: 'top top',
          end: `+=${TOTAL * 100}%`,
          scrub: 1.2,
          pin: stageRef.current,
          anticipatePin: 1,
          onUpdate(self) {
            // Mapping progress to 3 active dots based on the word timings
            let idx = 0;
            if (self.progress > seg * 1.5) idx = 1;
            if (self.progress > seg * 3.0) idx = 2;
            setActiveWord(idx);
          },
        },
      });

      tlRef.current = tl;

      // ── Word 0: exit (seg 0.2 → 1.2)
      tl.to(wordRefs.current[0],
        { scale: 3.5, opacity: 0, filter: 'blur(40px)', ease: 'power2.in', duration: seg },
        seg * 0.2
      );

      // ── Word 1: enter (seg 0.8 → 1.8) → exit (seg 2.2 → 3.2)
      tl.fromTo(wordRefs.current[1],
        { scale: 0.8, opacity: 0, filter: 'blur(12px)' },
        { scale: 1,  opacity: 1, filter: 'blur(0px)', ease: 'power2.out', duration: seg },
        seg * 0.8
      ).to(wordRefs.current[1],
        { scale: 3.5, opacity: 0, filter: 'blur(40px)', ease: 'power2.in', duration: seg },
        seg * 2.2
      );

      // ── Word 2 (Final): enter (seg 2.8 → 3.8) → hold → exit (seg 4.2 → 5.0)
      tl.fromTo(wordRefs.current[2],
        { scale: 0.8, opacity: 0, filter: 'blur(12px)' },
        { scale: 1,  opacity: 1, filter: 'blur(0px)', ease: 'power2.out', duration: seg },
        seg * 2.8
      ).to(wordRefs.current[2],
        { scale: 3.5, opacity: 0, filter: 'blur(40px)', ease: 'power2.in', duration: seg * 0.8 },
        seg * 4.2
      );
    }, driverRef);

    const handleResize = () => {
      setHeight();
      ScrollTrigger.refresh();
    };

    let tid;
    window.addEventListener('resize', () => { clearTimeout(tid); tid = setTimeout(handleResize, 200); });

    return () => {
      ctx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [setHeight]);

  return (
    <>
      {/* ── Scroll driver ── */}
      <div ref={driverRef} className="relative w-full">

        {/* ── Sticky stage ── */}
        <div
          ref={stageRef}
          className="sticky top-0 w-full h-screen flex items-center justify-center bg-white overflow-hidden"
        >
          {/* Words layer */}
          <div className="absolute inset-0 flex items-center justify-center">
            {WORDS.map((word, i) => (
              <div
                key={word}
                ref={el => { wordRefs.current[i] = el; }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none"
                style={{ opacity: 0, willChange: 'opacity,transform,filter' }}
              >
                <span
                  className="select-none text-black leading-none whitespace-nowrap"
                  style={{
                    fontFamily: "Georgia, 'Times New Roman', serif",
                    fontSize: 'clamp(44px,10vw,128px)',
                    fontWeight: 400,
                    letterSpacing: '-0.03em',
                  }}
                >
                  {word}
                </span>
              </div>
            ))}
          </div>

          {/* Progress dots */}
          <ProgressDots activeIndex={activeWord} />
        </div>
      </div>
    </>
  );
}
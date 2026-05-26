'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';
import SectionContainer from '@/components/layout/SectionContainer';
import { ArrowUpRight } from 'lucide-react';
import { licenses } from '@/data/licenseData';


export default function LicenseCategory() {
  const sectionRef = useRef(null);
  const cardsWrapRef = useRef(null);
  const cardsRef = useRef([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => { setIsMounted(true); }, []);

  useEffect(() => {
    if (!isMounted) return;
    let ctx;

    const init = async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      let mm = gsap.matchMedia();

      ctx = mm.add({
        isDesktop: "(min-width: 768px)",
        isMobile: "(max-width: 767px)"
      }, (context) => {
        let { isDesktop } = context.conditions;
        const cards = cardsRef.current.filter(Boolean);
        const wrapper = cardsWrapRef.current;
        if (!wrapper || cards.length < 2) return;

        // Reset inline styles in case of resize
        gsap.set(cards, { clearProps: "all" });

        cards.forEach((card, i) => {
          if (i === 0) return;
          gsap.set(card, {
            y: "100vh",
            scale: 1,
            opacity: 1
          });
        });

        // Increase scroll distance based on number of cards to make it smoother
        const endDistance = cards.length * 100;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${endDistance}%`,
            pin: true,
            pinSpacing: true,
            scrub: 1,
            anticipatePin: 1,
            invalidateOnRefresh: true,
          },
        });

        cards.forEach((card, i) => {
          if (i === 0) return;
          const prev = cards[i - 1];
          const offset = i - 1;

          // New card slides up from the bottom
          tl.to(card, {
            y: 0, 
            duration: 1, 
            ease: 'none',
          }, offset);

          // Previous card scales down and moves up slightly to look pushed back
          tl.to(prev, {
            scale: 0.92,
            y: isDesktop ? -30 : -20,
            opacity: 0.4,
            duration: 1, 
            ease: 'none',
          }, offset);
        });

        // Add a small empty tween at the end so the last card stays pinned for a moment
        tl.to({}, { duration: 0.2 });

        if (!isDesktop) ScrollTrigger.refresh();
      }, sectionRef);
    };

    init();
    return () => ctx?.revert();
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <section ref={sectionRef} className="relative z-10 bg-white overflow-hidden">
      <SectionContainer
        id="licenses"
        className="h-screen"
        containerClassName="px-[20px] md:px-[60px] lg:px-[100px] flex flex-col items-center justify-center h-full"
      >
        {/* ── Header ── */}
        <div className="text-center mb-[24px] md:mb-[40px] lg:mb-[60px] w-full max-w-[900px]">
          <div className="flex justify-center mb-[12px] md:mb-[20px]">
            <SectionBadge label="License category" />
          </div>
          <h2 className="font-sans text-[20px] md:text-[32px] lg:text-[40px] font-bold leading-[1.15] text-[#111111] tracking-[-0.02em]">
            Choose Business License <br className="hidden md:block" /> Leading UAE Company Setup Experts
          </h2>
        </div>

        {/* ── Cards Wrapper ── */}
        <div
          ref={cardsWrapRef}
          className="license-cards-wrap relative w-full max-w-[938px] mx-auto rounded-[24px] md:rounded-[32px]"
        >
          <style>{`
            .license-cards-wrap {
              height: auto;
              min-height: 420px;
            }
            @media (min-width: 480px) {
              .license-cards-wrap { min-height: 440px; }
            }
            @media (min-width: 768px) {
              .license-cards-wrap {
                height: clamp(360px, 46vw, 440px);
                min-height: unset;
              }
            }
            @media (min-width: 1024px) {
              .license-cards-wrap {
                height: clamp(380px, 40vw, 440px);
              }
            }
            @media (min-width: 1280px) {
              .license-cards-wrap {
                height: clamp(380px, 38vw, 460px);
              }
            }
          `}</style>

          {licenses.map((license, index) => {
            const cardColors = ['#8A1A62', '#111D59'];
            const currentBg = cardColors[index % cardColors.length];

            return (
              <div
                key={license.id}
                ref={(el) => { cardsRef.current[index] = el; }}
                className="absolute inset-0 will-change-transform"
                style={{ zIndex: index + 1 }}
              >
                <div
                  className="relative w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] flex flex-col"
                  style={{
                    backgroundColor: currentBg,
                    padding: 'clamp(20px, 3vw, 56px)',
                  }}
                >
                  {/* ── Top Header ── */}
                  <div className="flex items-start justify-between w-full mb-[8px] md:mb-[10px] flex-shrink-0">
                    <h3
                      className="font-sans font-bold text-white leading-[1.2]"
                      style={{
                        fontSize: 'clamp(20px, 3.5vw, 44px)',
                        maxWidth: '70%',
                      }}
                    >
                      {license.title}
                    </h3>
                    <div
                      className="font-sans font-extrabold text-white/[0.18] leading-none select-none mt-[-4px]"
                      style={{ fontSize: 'clamp(32px, 7vw, 84px)' }}
                    >
                      {license.number}
                    </div>
                  </div>

                  {/* ── Body: mobile = column, desktop = row ── */}
                  <div className="flex-1 flex flex-col md:flex-row min-h-0 gap-[12px] md:gap-[32px] lg:gap-[48px]">

                    {/* Left: Description & Button */}
                    <div className="md:w-[55%] flex flex-col gap-[10px] md:gap-0 md:justify-between min-h-0">
                      <p
                        className="font-sans text-white/70 leading-[1.6]"
                        style={{ fontSize: 'clamp(12px, 1.3vw, 16px)' }}
                      >
                        {license.description}
                      </p>

                      <button className="group flex items-center gap-[10px] md:gap-[16px] w-fit transition-all duration-300 flex-shrink-0">
                        <span
                          className="font-sans font-bold text-white tracking-tight"
                          style={{ fontSize: 'clamp(13px, 1.5vw, 18px)' }}
                        >
                          View Details
                        </span>
                        <div
                          className="rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 flex-shrink-0"
                          style={{
                            backgroundColor: currentBg === '#111D59' ? '#8A1A62' : '#FFFFFF',
                            width: 'clamp(34px, 4vw, 52px)',
                            height: 'clamp(34px, 4vw, 52px)',
                          }}
                        >
                          <ArrowUpRight
                            className="transition-transform duration-500 group-hover:rotate-[45deg]"
                            style={{
                              width: 'clamp(16px, 1.6vw, 20px)',
                              height: 'clamp(16px, 1.6vw, 20px)',
                              color: currentBg === '#111D59' ? '#FFFFFF' : '#8A1A62'
                            }}
                          />
                        </div>
                      </button>
                    </div>

                    {/* Right: Image */}
                    <div className="md:w-[45%] flex-shrink-0">
                      <div
                        className="relative w-full rounded-[14px] md:rounded-[20px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
                        style={{
                          /* Mobile: fixed compact height; desktop: fill available */
                          height: 'clamp(130px, 22vw, 220px)',
                        }}
                      >
                        <Image
                          src={license.image}
                          alt={license.title}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, 450px"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </SectionContainer>
    </section>
  );
}
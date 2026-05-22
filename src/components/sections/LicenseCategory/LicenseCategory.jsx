'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';
import SectionContainer from '@/components/layout/SectionContainer';
import { ArrowUpRight } from 'lucide-react';
import { licenses } from '@/data/LicenseData';


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

        const wh = wrapper.offsetHeight;
        
        // Position all non-first cards
        // Desktop: wh + 100 | Mobile: 800 (for stability)
        cards.forEach((card, i) => {
          if (i === 0) return;
          gsap.set(card, { 
            y: isDesktop ? (wh + 100) : 800, 
            scale: 0.9, 
            opacity: 0 
          });
        });

        // Desktop: 150vh | Mobile: 80vh
        const SCROLL_PER_CARD = isDesktop ? 150 : 80;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: () => `+=${(cards.length - 1) * SCROLL_PER_CARD}vh`,
            pin: true,
            pinSpacing: true,
            scrub: 1.2,
            anticipatePin: 1,
            invalidateOnRefresh: true,
            refreshPriority: 1,
          },
        });

        cards.forEach((card, i) => {
          if (i === 0) return;
          const prev = cards[i - 1];
          const offset = i - 1;

          tl.to(card, {
            y: 0,
            scale: 1,
            opacity: 1,
            duration: 1,
            ease: 'power2.inOut',
          }, offset);

          tl.to(prev, {
            scale: 0.95,
            y: isDesktop ? -12 : -10,
            opacity: isDesktop ? 0.4 : 0.3,
            duration: 1,
            ease: 'power2.inOut',
          }, offset);
        });

        if (!isDesktop) {
          ScrollTrigger.refresh();
        }
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
        <div className="text-center mb-[40px] lg:mb-[60px] w-full max-w-[900px]">
          <div className="flex justify-center mb-[16px] md:mb-[20px]">
            <SectionBadge label="License category" />
          </div>
          <h2 className="font-sans text-[28px] md:text-[32px] lg:text-[40px] font-bold leading-[1.15] text-[#111111] tracking-[-0.02em]">
            Choose Business License <br className="hidden md:block" /> Leading UAE Company Setup Experts
          </h2>
        </div>

        <div
          ref={cardsWrapRef}
          className="relative w-full max-w-[938px] mx-auto rounded-[24px] md:rounded-[32px] h-[540px] md:h-[419px]"
          style={{ height: 'var(--wrap-height)' }}
        >
          <style jsx>{`
            div { --wrap-height: 540px; }
            @media (min-width: 768px) {
              div { --wrap-height: clamp(340px, 44vw, 419px); }
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
                  className="relative w-full h-full rounded-[24px] md:rounded-[32px] overflow-hidden shadow-[0_20px_60px_rgba(0,0,0,0.15)] p-[24px] sm:p-[32px] md:p-[48px] lg:p-[56px] flex flex-col"
                  style={{ backgroundColor: currentBg }}
                >
                  
                  {/* ── Top Header ── */}
                  <div className="flex items-start justify-between w-full mb-[16px] md:mb-[10px]">
                    <h3 className="font-sans text-[22px] md:text-[36px] lg:text-[44px] font-bold text-white leading-[1.2] max-w-[75%]">
                      {license.title}
                    </h3>
                    <div className="font-sans font-extrabold text-white/[0.18] leading-none select-none mt-[-4px]"
                      style={{ fontSize: 'clamp(40px, 8vw, 84px)' }}>
                      {license.number}
                    </div>
                  </div>

                  {/* ── Body ── */}
                  <div className="flex-1 flex flex-col md:flex-row items-stretch justify-between gap-[20px] md:gap-[48px] overflow-hidden">
                    
                    {/* Left: Description & Button */}
                    <div className="w-full md:w-[55%] flex flex-col justify-between h-full">
                      <p className="font-sans text-[12px] md:text-[14px] lg:text-[16px] text-white/70 leading-[1.6] md:leading-[1.7] max-w-[480px]">
                        {license.description}
                      </p>

                      <button className="group flex items-center gap-[12px] md:gap-[16px] w-fit transition-all duration-300 mt-[12px] md:mt-auto">
                        <span className="font-sans text-[14px] md:text-[18px] font-bold text-white tracking-tight">
                          View Details
                        </span>
                        {/* Dynamic Button Circle & Arrow Colors */}
                        <div 
                          className="w-[36px] h-[36px] md:w-[52px] md:h-[52px] rounded-full flex items-center justify-center shadow-lg transition-all duration-500 group-hover:scale-110 flex-shrink-0"
                          style={{ 
                            backgroundColor: currentBg === '#111D59' ? '#8A1A62' : '#FFFFFF' 
                          }}
                        >
                          <ArrowUpRight
                            className="transition-transform duration-500 group-hover:rotate-[45deg]"
                            style={{ 
                              width: 18, 
                              height: 18, 
                              color: currentBg === '#111D59' ? '#FFFFFF' : '#8A1A62' 
                            }}
                          />
                        </div>
                      </button>
                    </div>

                  {/* Right: Image */}
                  <div className="w-full md:w-[45%] flex h-full">
                    <div
                      className="relative w-full h-full min-h-[160px] md:min-h-[180px] rounded-[16px] md:rounded-[24px] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
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
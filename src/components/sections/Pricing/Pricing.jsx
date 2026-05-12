'use client';

import React, { useEffect, useRef } from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import PricingCard from '@/components/ui/PricingCard';
import { pricingPlans } from '@/data/pricingData';
import { gsap } from '@/lib/gsap';

export default function Pricing() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        // Desktop Spread Animation
        const cards = cardsRef.current;
        if (cards.length >= 3) {
          gsap.fromTo(cards[0], 
            { x: '100px', y: '20px', rotate: -5, opacity: 0 },
            { x: 0, y: 0, rotate: 0, opacity: 1, duration: 1.5, ease: "power4.out", 
              scrollTrigger: {
                trigger: cards[0],
                start: "top 95%",
              }
            }
          );
          gsap.fromTo(cards[2], 
            { x: '-100px', y: '20px', rotate: 5, opacity: 0 },
            { x: 0, y: 0, rotate: 0, opacity: 1, duration: 1.5, ease: "power4.out",
              scrollTrigger: {
                trigger: cards[2],
                start: "top 95%",
              }
            }
          );
          gsap.fromTo(cards[1], 
            { y: '40px', opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power4.out",
              scrollTrigger: {
                trigger: cards[1],
                start: "top 95%",
              }
            }
          );
        }
      });

      mm.add("(max-width: 1023px)", () => {
        // Mobile simple entry
        cardsRef.current.forEach((card) => {
          gsap.fromTo(card, 
            { y: 40, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: card,
                start: "top 95%",
              }
            }
          );
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="py-[60px] lg:py-[100px] px-[20px] md:px-[40px] lg:px-[80px] bg-white overflow-hidden">
      {/* Section Header — centred */}
      <div className="flex flex-col items-center text-center mb-[48px] md:mb-[64px]">
        <SectionBadge label="Pricing Plan" className="mb-[20px]" />
        <h2 className="font-sans text-[28px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.25] text-[#111111] tracking-tight max-w-[620px]">
          License Packages dolor sit amet, consecteturadipiscing elit.
        </h2>
      </div>

      {/* Cards grid — 1 col on mobile, 3 cols on lg+ */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[24px] items-stretch max-w-[1200px] mx-auto">
        {pricingPlans.map((plan, index) => (
          <div 
            key={plan.id} 
            ref={el => cardsRef.current[index] = el}
            className="opacity-0" // Prevent flash before GSAP kicks in
          >
            <PricingCard
              title={plan.title}
              description={plan.description}
              price={plan.price}
              features={plan.features}
              featured={plan.featured}
              ctaText={plan.ctaText}
              ctaHref={plan.ctaHref}
            />
          </div>
        ))}
      </div>
    </section>
  );
}


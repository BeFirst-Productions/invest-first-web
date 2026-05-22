'use client';

import React from 'react';
import SectionContainer from '@/components/layout/SectionContainer';

const FreezoneCostSection = ({ data }) => {
  if (!data) return null;

  const { titleHighlight, titleRest, description, cards } = data;

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Subtle visual glow in the background to keep the premium feel */}
      <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-[#0099CC]/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-[#0099CC]/5 blur-3xl pointer-events-none" />

      <SectionContainer
        id="freezone-cost-section"
        className="bg-white"
        containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
      >
        <div className="w-full max-w-[1240px] mx-auto">
          {/* Section Header */}
          <h2 className="text-[#000F2B] text-2xl sm:text-3xl lg:text-[2.25rem] font-bold font-montserrat mb-5 tracking-tight leading-tight text-left">
            Cost of <span className="text-[#0099CC]">{titleHighlight || "Free Zone"}</span> {titleRest || "Company Setup"}
          </h2>

          {/* Section Description */}
          {description && (
            <p className="text-[#333333] text-sm sm:text-base md:text-lg leading-relaxed mb-8 md:mb-12 font-sans opacity-90 max-w-[1120px] text-left">
              {description}
            </p>
          )}

          {/* Grid Layout (2 columns on tablet/desktop, 1 on mobile) */}
          {cards && cards.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {cards.map((cardText, index) => (
                <div
                  key={index}
                  className="
                    group
                    relative
                    flex items-center
                    border-2 border-[#0099CC]
                    rounded-[20px]
                    p-6 sm:p-7 md:p-8
                    bg-white
                    shadow-sm
                    transition-all duration-300 ease-out
                    hover:-translate-y-1
                    hover:shadow-[0_10px_25px_rgba(0,153,204,0.15)]
                    cursor-default
                  "
                >
                  <p className="text-[#000F2B] text-sm sm:text-base leading-relaxed font-sans font-normal text-left">
                    {cardText}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </SectionContainer>
    </section>
  );
};

export default FreezoneCostSection;

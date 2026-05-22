'use client';

import React from 'react';
import SectionContainer from '@/components/layout/SectionContainer';

const FreezoneSetupProcessGrid = ({ data }) => {
  if (!data) return null;

  const { titleHighlight, titleRest, steps } = data;

  return (
    <section className="bg-white py-12 md:py-20 lg:py-24 relative overflow-hidden">
      {/* Background visual detail: Subtle blue radial glow in corner */}
      <div className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-[#0099CC]/10 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-[#0099CC]/8 blur-3xl pointer-events-none" />

      <SectionContainer
        id="jafza-setup-process"
        className="bg-white"
        containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
      >
        {/* Main outer card with rounded corner and dark background */}
        <div 
          className="
            relative
            w-full max-w-[1240px] mx-auto
            rounded-[32px] md:rounded-[40px]
            bg-[#000B1E]
            pt-12 pb-14 px-6 sm:px-10 md:px-12 lg:px-16
            shadow-2xl
          "
        >
          {/* Header */}
          <h2 className="text-center text-white text-xl sm:text-2xl md:text-3xl lg:text-[2rem] font-bold font-montserrat mb-10 md:mb-14 tracking-tight leading-tight">
            <span>{titleHighlight}</span>{' '}
            <span className="text-[#0099CC]">{titleRest}</span>
          </h2>

          {/* Grid Layout (4 columns on desktop, 2 on tablet, 1 on mobile) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps && steps.map((step) => (
              <div
                key={step.id || step.title}
                className="
                  group
                  relative
                  flex flex-col
                  bg-white
                  rounded-[24px]
                  p-6 sm:p-8
                  shadow-md
                  transition-all duration-300 ease-out
                  hover:-translate-y-1.5
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.2)]
                  cursor-default
                "
              >
                {/* Card Title (Magenta/Burgundy) */}
                <h3 
                  className="
                    text-[#B91C56]
                    text-base sm:text-lg
                    font-bold
                    font-montserrat
                    mb-4
                    leading-snug
                    tracking-tight
                    transition-colors duration-200
                  "
                >
                  {step.title}
                </h3>

                {/* Card Description */}
                <p 
                  className="
                    text-[#4F4F4F]
                    text-xs sm:text-sm
                    leading-relaxed
                    font-normal
                    font-sans
                  "
                >
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default FreezoneSetupProcessGrid;

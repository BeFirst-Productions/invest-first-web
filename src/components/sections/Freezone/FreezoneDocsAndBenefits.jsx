'use client';

import React from 'react';
import SectionContainer from '@/components/layout/SectionContainer';

const FreezoneDocsAndBenefits = ({ data }) => {
  if (!data) return null;

  const { subzoneName, documentsText, benefitsList } = data;

  return (
    <section className="bg-white py-12 md:py-16 lg:py-20 relative overflow-hidden">
      {/* Dynamic background glow details to retain premium aesthetics */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-72 h-72 rounded-full bg-[#0099CC]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-72 h-72 rounded-full bg-[#6B0E37]/5 blur-3xl pointer-events-none" />

      <SectionContainer
        id="freezone-docs-benefits"
        className="bg-white"
        containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
      >
        <div className="flex flex-col lg:flex-row items-stretch justify-center gap-8 w-full max-w-[1240px] mx-auto">
          
          {/* Left Card: Documents Required */}
          <div 
            className="
              flex-1
              bg-white
              border-2 border-[#0099CC]
              rounded-[28px] md:rounded-[36px]
              p-8 sm:p-10 md:p-12
              shadow-md
              transition-all duration-300 ease-out
              hover:-translate-y-1.5
              hover:shadow-[0_15px_30px_rgba(0,153,204,0.15)]
              flex flex-col
            "
          >
            <h3 className="text-[#000F2B] text-xl sm:text-2xl lg:text-[1.75rem] font-bold font-montserrat mb-6 leading-snug tracking-tight">
              {subzoneName || "Free Zone"} Documents Required
            </h3>
            <p className="text-[#333333] text-sm sm:text-base leading-relaxed font-sans opacity-95">
              {documentsText}
            </p>
          </div>

          {/* Right Card: Benefits */}
          <div 
            className="
              flex-1
              bg-[#6B0E37]
              rounded-[28px] md:rounded-[36px]
              p-8 sm:p-10 md:p-12
              shadow-lg
              transition-all duration-300 ease-out
              hover:-translate-y-1.5
              hover:shadow-[0_15px_35px_rgba(107,14,55,0.25)]
              flex flex-col
            "
          >
            <h3 className="text-white text-xl sm:text-2xl lg:text-[1.75rem] font-bold font-montserrat mb-6 leading-snug tracking-tight">
              <span className="text-[#0099CC]">Benefits</span> of {subzoneName || "Free Zone"} Company Setup
            </h3>
            
            {benefitsList && benefitsList.length > 0 && (
              <ul className="space-y-4 flex-1 flex flex-col justify-center">
                {benefitsList.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3 text-white text-sm sm:text-base leading-relaxed font-sans">
                    <span className="w-2 h-2 rounded-full bg-white mt-2 shrink-0" />
                    <span className="opacity-95">{benefit}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </SectionContainer>
    </section>
  );
};

export default FreezoneDocsAndBenefits;

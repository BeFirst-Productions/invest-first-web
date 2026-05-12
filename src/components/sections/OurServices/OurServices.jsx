'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { services } from '@/data/serviceData';
import SectionBadge from '@/components/ui/SectionBadge';
import SectionContainer from '@/components/layout/SectionContainer';

const ArrowDiagonal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SectionContainer
      id="our-services"
      className="py-[60px] md:py-[100px] lg:py-[140px] bg-white"
      containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
    >
      {/* ── Header ── */}
      <div className="mb-[48px] md:mb-[64px] lg:mb-[80px]">
        <div className="flex mb-[16px] md:mb-[24px]">
          <SectionBadge label="Our Services" />
        </div>
        <h2 className="font-sans text-[28px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-[#111111] tracking-[-0.03em] max-w-[800px]">
          Porem ipsum dolor sit <br className="hidden md:block" />
          amet, consecteturadipiscing elit.
        </h2>
      </div>

      {/* ── Services Rows ── */}
      <div className="border-t border-[#D9D9D9] border-dashed">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="relative group border-b border-[#D9D9D9] border-dashed cursor-pointer"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex flex-col md:flex-row md:items-center py-[24px] md:py-[40px] lg:py-[52px] transition-all duration-500 relative z-10">
              {/* Title */}
              <div className="w-full md:w-[35%] lg:w-[40%] mb-[12px] md:mb-0">
                <h3 className="text-[22px] md:text-[28px] lg:text-[34px] font-bold text-[#111111] leading-[1.2] font-sans transition-colors duration-300 group-hover:text-[#660033]">
                  {service.title}
                </h3>
              </div>

              {/* Description */}
              <div className="w-full md:w-[45%] lg:w-[40%]">
                <p className="text-[14px] md:text-[15px] lg:text-[16px] text-[#666666] leading-[1.6] font-sans max-w-[450px]">
                  {service.description}
                </p>
              </div>

              {/* ── Animation: "Inside to Outside" (Scale & Fade) ── */}
              <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none">
                <div 
                  className={`relative w-[280px] h-[180px] rounded-[24px] overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.15)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] transform
                    ${hoveredIndex === index 
                      ? 'opacity-100 scale-100 translate-y-0' 
                      : 'opacity-0 scale-75 translate-y-[10px]'}`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="280px"
                  />
                </div>
              </div>

              {/* Mobile/Tablet Image */}
              <div className="lg:hidden mt-[20px] md:mt-[24px] relative w-full h-[200px] sm:h-[260px] md:h-[300px] rounded-[16px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
            </div>
            
            {/* Highlight background on hover */}
            <div className="absolute inset-0 bg-[#F9F9F9] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-0 hidden md:block" />
          </div>
        ))}
      </div>

      {/* ── View More Button ── */}
      <div className="flex justify-center mt-[48px] md:mt-[64px] lg:mt-[80px]">
        <button className="group flex items-center gap-[12px] md:gap-[16px] no-underline">
          <span className="text-[16px] md:text-[18px] font-bold text-[#111111] font-sans uppercase tracking-wider">View More</span>
          <div className="w-[44px] h-[44px] md:w-[54px] md:h-[54px] bg-[#660033] text-white rounded-full flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] shadow-[0_8px_24px_rgba(102,0,51,0.2)]">
            <ArrowDiagonal />
          </div>
        </button>
      </div>
    </SectionContainer>
  );
}
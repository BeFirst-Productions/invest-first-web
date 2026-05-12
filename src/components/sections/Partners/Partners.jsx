'use client';

import React from 'react';
import Image from 'next/image';
import SectionContainer from '@/components/layout/SectionContainer';
import { partners } from '@/data/partnersData';



export default function Partners() {
  return (
    <SectionContainer
      id="partners"
      className="py-[30px] md:py-[50px] bg-white border-y border-[#F5F5F5] overflow-hidden"
      containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
    >

      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-scroll-infinite {
          animation: scroll 30s linear infinite;
        }
      `}</style>

      <div className="flex flex-col lg:flex-row items-center gap-[30px] lg:gap-[80px]">
        {/* Title Section */}
        <div className="flex-shrink-0 w-full lg:w-auto text-center lg:text-left pb-[20px] lg:pb-0">
          <h2 className="font-sans text-[18px] md:text-[22px] lg:text-[26px] font-medium text-[#111111] leading-[1.2] max-w-[280px] mx-auto lg:mx-0">
            Our Trusted <br /> Freezone Partnerships
          </h2>
        </div>

        {/* Slider Section */}
        <div
          className="relative flex-grow overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)'
          }}
        >
          <div className="flex w-full overflow-hidden">
            <div className="flex w-max animate-scroll-infinite hover:[animation-play-state:paused] will-change-[transform]">
              {/* Double the array for seamless loop */}
              {[...partners, ...partners].map((partner, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 flex items-center justify-center px-3 md:px-6 transition-transform duration-300 hover:scale-110"
                >
                  <div className="relative w-[100px] h-[45px] md:w-[140px] md:h-[60px]">
                    <Image
                      src={partner.logo}
                      alt={partner.name}
                      fill
                      className="object-contain cursor-pointer"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

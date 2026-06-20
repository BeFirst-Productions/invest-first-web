'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SectionContainer from '@/components/layout/SectionContainer';

export default function SetupCost() {
  return (
    <section className="bg-white py-[60px] md:py-[100px]">
      <SectionContainer
        id="setup-cost"
        containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
      >
        {/* ── Main Banner Container ── */}
        <div className="relative w-full rounded-[32px] md:rounded-[48px] overflow-hidden min-h-[480px] lg:h-[520px] flex items-stretch shadow-[0_40px_100px_rgba(0,0,0,0.2)] bg-[#3D0823]">
          
          {/* ── Background Layer ── */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/calculator/coastCal-bg.png"
              alt="Background"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* ── Content Layout ── */}
          <div className="relative z-10 w-full flex flex-col md:flex-row items-center">
            
            {/* Left Side: Visual Elements */}
            <div className="w-full md:w-[50%] h-full relative flex items-center justify-center p-[40px] md:p-[60px] overflow-hidden min-h-[380px] md:min-h-full">
              <div className="relative w-[100%] h-[100%] md:scale-[0.95] lg:scale-[1.05] md:translate-x-[-2%]">
                <Image
                  src="/images/calculator/elements.png"
                  alt="Business Setup Visuals"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Right Side: Information & Action */}
            <div className="w-full md:w-[50%] flex flex-col justify-center px-[32px] md:px-[60px] lg:pr-[80px] py-[40px] md:py-[60px] text-center md:text-left">
              
              <h2 className="font-sans font-semibold text-white tracking-normal mb-[16px] md:mb-[24px]"
                  style={{ 
                    fontSize: 'clamp(28px, 3.2vw, 40px)',
                    lineHeight: 'clamp(34px, 3.8vw, 46px)'
                  }}>
                Estimate Your UAE <br className="hidden md:block" /> Business Setup Costs
              </h2>
              
              <p className="font-sans font-normal text-white/80 mb-[32px] md:mb-[40px] max-w-[541px] mx-auto md:mx-0"
                 style={{ 
                    fontSize: 'clamp(14px, 1.1vw, 16px)',
                    lineHeight: 'clamp(20px, 1.4vw, 22px)'
                  }}>
                Invest First's cost calculator helps entrepreneurs estimate Dubai 
                and UAE business setup expenses accurately. Understand licensing, 
                visa, office, and government fees instantly. Make informed 
                decisions, compare options, plan budgets confidently, and choose 
                the right company structure.
              </p>

              <div className="flex justify-center md:justify-start">
                <Link href="/cost-calculator" className="bg-white text-[#3D0823] px-[36px] md:px-[48px] py-[14px] md:py-[16px] rounded-[10px] font-sans font-bold text-[14px] md:text-[16px] transition-all duration-300 hover:bg-[#f8f8f8] hover:shadow-2xl active:scale-[0.98] whitespace-nowrap">
                  Cost Calculator
                </Link>
              </div>
            </div>

          </div>
        </div>
      </SectionContainer>
    </section>
  );
}
'use client';

import React from 'react';
import Image from 'next/image';
import SectionContainer from '@/components/layout/SectionContainer';

const CommonHerosection = ({ title, description, cardTitle, cardDescription }) => {
  return (
    <SectionContainer 
      className="pt-40 pb-20 bg-[#062137] relative overflow-hidden"
      background={
        <div className="absolute top-0 right-0 w-full h-full opacity-20 pointer-events-none">
          <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#00a3ff] blur-[150px] rounded-full opacity-30" />
        </div>
      }
    >
      <div className="flex flex-col lg:flex-row gap-16 items-center relative z-10">
        <div className="w-full lg:w-3/5">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 leading-[1.1]">
            {title}
          </h1>
          <p className="text-xl md:text-2xl text-white/60 leading-relaxed max-w-2xl">
            {description}
          </p>
        </div>

        {cardTitle && (
          <div className="w-full lg:w-2/5">
            <div className="p-8 md:p-10 rounded-[32px] bg-white/5 border border-white/10 backdrop-blur-xl relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-[#00a3ff] to-[#00a3ff]/0 rounded-[33px] opacity-20 group-hover:opacity-40 transition-opacity" />
              <div className="relative">
                <h3 className="text-2xl font-bold text-white mb-4">{cardTitle}</h3>
                <p className="text-white/60 mb-8">{cardDescription}</p>
                <button className="w-full py-4 bg-white text-[#062137] font-bold rounded-xl hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                  Get Started
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <line x1="5" y1="12" x2="19" y2="12"></line>
                    <polyline points="12 5 19 12 12 19"></polyline>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionContainer>
  );
};

export default CommonHerosection;

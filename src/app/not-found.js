import React from 'react';
import Link from 'next/link';
import SectionContainer from '@/components/layout/SectionContainer';
import RedHoverButton from '@/components/Common/Buttons/RedHoverButton';

export default function NotFound() {
  return (
    <SectionContainer
      className="pt-32 pb-[24px] bg-white"
      containerClassName="w-full"
    >
      <title>Page Not Found | Invest First</title>
      <div 
        className="relative flex flex-col items-center justify-center min-h-[70vh] py-24 px-6 text-center rounded-[24px] overflow-hidden"
        style={{
          backgroundImage: "url('/images/error/sky-background.png'), url('/images/404-bg.jpg'), linear-gradient(to bottom, #0099ff, #80d4ff, #e6f7ff)",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="max-w-2xl mx-auto flex flex-col items-center relative z-10">
          {/* Large 404 Number */}
          <h1 
            className="text-[120px] sm:text-[160px] md:text-[220px] font-black leading-none select-none tracking-tight flex items-center justify-center"
            style={{
              background: 'linear-gradient(to right, #A2064F 0%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            404
          </h1>

          {/* Title */}
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#030B1B] tracking-tight">
            Page Not Found
          </h2>

          {/* Message */}
          <p className="mt-4 text-[#030B1B]/80 text-base sm:text-lg md:text-xl font-medium max-w-md leading-relaxed font-outfit">
            We're sorry but we can't seem to find the page you requested. This might be because you have typed the web address incorrectly.
          </p>

          {/* Button */}
   <div className='mt-8 flex gap-4'>
                                <RedHoverButton
                                  url="/"
                                  text="Back To Home"
                                />
                              </div>
        </div>
      </div>
    </SectionContainer>
  );
}

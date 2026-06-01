import React from 'react';
import SectionContainer from '@/components/layout/SectionContainer';
import RedHoverButton from '@/components/Common/Buttons/RedHoverButton';

export const metadata = {
  title: 'Service Unavailable | Invest First',
  description: 'The service is temporarily unavailable. We are performing scheduled maintenance.',
  robots: {
    index: false,
    follow: false
  }
};

export default function ServiceUnavailable() {
  return (
    <SectionContainer
      className="pt-32 pb-[24px] bg-white"
      containerClassName="w-full"
    >
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
          {/* Large 503 Number */}
          <h1 
            className="text-[120px] sm:text-[160px] md:text-[220px] font-black leading-none select-none tracking-tight flex items-center justify-center"
            style={{
              background: 'linear-gradient(to right, #A2064F 0%, #000000 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}
          >
            503
          </h1>

          {/* Title */}
          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl font-bold text-[#030B1B] tracking-tight">
            Service Unavailable
          </h2>

          {/* Message */}
          <p className="mt-4 text-[#030B1B]/80 text-base sm:text-lg md:text-xl font-medium max-w-md leading-relaxed font-outfit">
            Service Temporarily Unavailable. We're sorry, but our servers are currently undergoing maintenance or are temporarily overloaded. Please try again later.
          </p>

          {/* Button */}
        <div className="mt-8 flex gap-4">
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

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import SectionBadge from '@/components/ui/SectionBadge';
import { testimonialsData } from '@/data/testimonialData';
import SplitText from '@/components/ui/SplitText';




export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fadeState, setFadeState] = useState('opacity-100 translate-y-0');
  const [isAnimating, setIsAnimating] = useState(false);

  const changeSlide = useCallback((newIndex) => {
    if (isAnimating || newIndex === currentIndex) return;
    setIsAnimating(true);
    setFadeState('opacity-0 translate-y-4');

    setTimeout(() => {
      setCurrentIndex(newIndex);
      setFadeState('opacity-100 translate-y-0');

      setTimeout(() => {
        setIsAnimating(false);
      }, 500); // Transition duration cooldown
    }, 400); // Wait for fade out before changing data
  }, [currentIndex, isAnimating]);

  useEffect(() => {
    const timer = setInterval(() => {
      changeSlide((currentIndex + 1) % testimonialsData.length);
    }, 6000); // Give it a bit more time for comfortable reading

    return () => clearInterval(timer);
  }, [currentIndex, changeSlide]);

  const activeTestimonial = testimonialsData[currentIndex];
  const progressPercentage = ((currentIndex + 1) / testimonialsData.length) * 100;

  return (
    <section className="py-[40px] lg:py-[60px] px-[20px] md:px-[40px] lg:px-[60px] bg-white flex justify-center">
      <div className="bg-[#F5F5F5] rounded-[18px] md:rounded-[24px] p-[24px] md:p-[40px] lg:p-[50px] lg:px-[60px] w-full max-w-[1391px]">
        {/* Top Header */}
        <div className="mb-[24px] md:mb-[36px]">
          <SectionBadge label="Testimonials" className="mb-[14px]" />
          <SplitText
            tag="h2"
            className="font-sans text-[28px] md:text-[36px] lg:text-[42px] font-bold leading-[1.2] text-black tracking-tight"
            text="What Our Clients Say"
            delay={30}
            duration={0.8}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="left"
          />
        </div>

        {/* Content Layout — image and right col share a row, heights locked via items-stretch */}
        <div className="flex flex-col lg:flex-row gap-[32px] lg:gap-[60px] items-stretch">

          {/* Left Image */}
          {/* <div className="w-full lg:w-[300px] xl:w-[340px] flex-shrink-0 flex">
            <div className={`relative w-full rounded-[18px] overflow-hidden bg-[#EAEAEA] transition-all duration-500 ease-in-out ${fadeState}`}
              style={{ aspectRatio: '1 / 1' }}
            >
              <Image
                src={activeTestimonial.image}
                alt={`${activeTestimonial.name} Testimonial`}
                fill
                className="object-cover object-bottom"
                sizes="(max-width: 1024px) 100vw, 340px"
              />
            </div>
          </div> */}

          {/* Right Content — progress bar spans full column height to match image */}
          <div className="flex-1 flex">
            {/* Progress bar column — full height of the row */}
            <div className="relative w-[2px] self-stretch flex-shrink-0 mr-[20px] md:mr-[36px]">
              {/* Track */}
              <div className="absolute inset-0 bg-[#E0E0E0] rounded-full"></div>
              {/* Fill from bottom */}
              <div
                className="absolute left-0 bottom-0 w-full bg-[#8B1D41] rounded-full transition-all duration-[800ms] ease-out"
                style={{ height: `${progressPercentage}%` }}
              ></div>
            </div>

            {/* Text content */}
            <div className={`flex-1 flex flex-col justify-center transition-all duration-500 ease-in-out ${fadeState}`}>
              <p className="text-[15px] md:text-[17px] lg:text-[18px] text-[#333333] leading-[1.7] md:leading-[1.8] font-medium mb-[28px] md:mb-[40px] min-h-[290px] sm:min-h-[220px] md:min-h-[180px] lg:min-h-[130px]">
                {activeTestimonial.text}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-[16px]">
                {/* Author Info */}
                <div>
                  <h4 className="text-[14px] md:text-[15px] font-bold text-[#111111] mb-[3px]">{activeTestimonial.name}</h4>
                  {/* <p className="text-[12px] md:text-[13px] text-[#888888]">{activeTestimonial.role}</p> */}
                </div>

                {/* Avatars */}
                {/* <div className="flex items-center -space-x-3">
                  {testimonialsData.map((t, i) => (
                    <button
                      key={t.id}
                      onClick={() => changeSlide(i)}
                      disabled={isAnimating}
                      className={`relative w-[30px] h-[30px] md:w-[38px] md:h-[38px] rounded-full overflow-hidden bg-[#EBEBEB] transition-all duration-300 ${currentIndex === i
                          ? 'border-[2px] border-[#8B1D41] z-10 scale-110 shadow-md opacity-100'
                          : 'border-[2px] border-white z-0 opacity-60 hover:opacity-100 hover:z-10 cursor-pointer'
                        }`}
                      aria-label={`View testimonial from ${t.name}`}
                    >
                      <Image
                        src={t.avatar}
                        alt={t.name}
                        fill
                        className="object-cover"
                        sizes="38px"
                      />
                    </button>
                  ))}
                </div> */}
              </div>
            </div>
          </div>

        </div>

        {/* Pagination Dots */}
        <div className="flex justify-center items-center gap-[8px] mt-[32px]">
          {testimonialsData.map((_, i) => (
            <button
              key={i}
              onClick={() => changeSlide(i)}
              disabled={isAnimating}
              className={`h-[8px] rounded-full transition-all duration-300 ${
                currentIndex === i
                  ? 'w-[24px] bg-[#8B1D41]'
                  : 'w-[8px] bg-[#D1D1D6] hover:bg-[#8B1D41]/50 cursor-pointer'
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}




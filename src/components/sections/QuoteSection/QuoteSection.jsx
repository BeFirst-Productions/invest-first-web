'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import SectionContainer from '@/components/layout/SectionContainer';
import { gsap } from '@/lib/gsap';

export default function QuoteSection() {
  const containerRef = useRef(null);
  const leftCardRef = useRef(null);
  const rightCardRef = useRef(null);
  const middleCardRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      let mm = gsap.matchMedia();

      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          }
        });

        // Animation: Glide from behind (stacked) to spread position
        tl.fromTo(leftCardRef.current,
          { x: '180px', opacity: 0, scale: 0.92 },
          { x: 0, opacity: 1, scale: 1, duration: 2.2, ease: "power4.out" },
          0.1
        )
          .fromTo(rightCardRef.current,
            { x: '-180px', opacity: 0, scale: 0.92 },
            { x: 0, opacity: 1, scale: 1, duration: 2.2, ease: "power4.out" },
            0.1
          )
          .fromTo(middleCardRef.current,
            { scale: 0.96, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1.8, ease: "power4.out" },
            0
          );
      });

      mm.add("(max-width: 1023px)", () => {
        // Mobile simple entry
        gsap.from([middleCardRef.current, leftCardRef.current, rightCardRef.current], {
          y: 40,
          opacity: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 85%",
          }
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionContainer
      className="py-[60px] lg:py-[100px] bg-white overflow-hidden"
      containerClassName="px-[20px] md:px-[40px] lg:px-[20px] xl:px-[100px]"
    >
      <div
        ref={containerRef}
        className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-[50px] lg:gap-[20px] xl:gap-[40px]"
      >

        {/* Left Card - Heritage (Order 1) */}
        <div
          ref={leftCardRef}
          className="order-1 relative w-full max-w-[320px] lg:w-[200px] xl:w-[280px] flex-shrink-0 aspect-[4/5] lg:aspect-auto rounded-[32px] z-0 overflow-hidden"
        >
          <div className="relative w-full h-full">
            <Image
              src="/images/founders/we-start.png"
              alt="Since 2018"
              fill
              className="object-cover grayscale"
            />
          </div>
        </div>

        {/* Middle Card - Quote (Order 2) */}
        <div
          ref={middleCardRef}
          className="order-2 relative z-20 w-full max-w-[600px] lg:max-w-[440px] xl:max-w-[600px] bg-[#F2F2F2] rounded-[32px] p-[35px] md:p-[45px] lg:p-[40px] pb-[65px] lg:pb-[75px] shadow-[0_25px_60px_rgba(0,0,0,0.06)] border border-white/60"
        >
          <div className="mb-[15px] flex justify-start">
            <Image
              src="/images/founders/double-quote-vector.svg"
              alt="Quote"
              width={38}
              height={28}
              className="object-contain"
            />
          </div>

          <div className="pl-[20px] md:pl-[25px]">
            <p className="text-[14px] md:text-[16px] lg:text-[15px] xl:text-[17px] text-[#333333] text-left leading-[1.6] font-medium font-sans mb-[35px] tracking-tight">
              At Invest First, we are committed to providing exceptional service to our clients. We understand that starting a business can be daunting, and we are here to support you every step of the way. Our team of experts is dedicated to delivering high-quality services that meet your unique needs and help you achieve your business objectives.
            </p>

            <div className="flex flex-col items-end">
              <h4 className="text-[17px] md:text-[19px] lg:text-[17px] xl:text-[19px] font-bold text-[#111111] font-sans tracking-tight">Mr. Rasheeq Abdurahman</h4>
              <p className="text-[12px] text-[#666666] font-medium mt-1 uppercase tracking-wider">Founder & MD</p>
            </div>
          </div>

          {/* Logo Ornament (Pin) */}
          <div className="absolute bottom-[20px] right-[25px] md:bottom-[30px] md:right-[35px] lg:bottom-[30px] lg:right-[40px]">
            <Image
              src="/images/founders/pin-vector.svg"
              alt="Invest First Logo"
              width={42}
              height={42}
              className="object-contain"
            />
          </div>
        </div>

        {/* Right Card - Founder (Order 3) */}
        <div
          ref={rightCardRef}
          className="order-3 relative w-full max-w-[320px] lg:w-[200px] xl:w-[280px] flex-shrink-0 aspect-[4/5] lg:aspect-auto rounded-[32px] overflow-hidden shadow-[0_15px_40px_rgba(0,0,0,0.12)] z-0"
        >
          <Image
            src="/images/founders/founder-img.jpg"
            alt="Founder"
            fill
            className="object-cover grayscale brightness-105"
          />
        </div>

      </div>
    </SectionContainer>
  );
}

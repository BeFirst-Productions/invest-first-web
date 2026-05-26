"use client";

import React, { useState } from "react";
import Image from "next/image";
import { services } from "@/data/serviceData";
import SectionBadge from "@/components/ui/SectionBadge";
import SectionContainer from "@/components/layout/SectionContainer";
import ViewMoreButton from "@/components/ui/ViewMoreButton";
import SplitText from "@/components/ui/SplitText";

export default function OurServices() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <SectionContainer
      id="our-services"
      className="py-[60px] md:py-[100px] lg:py-[140px] bg-white"
      containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
    >
      {/* ── Header ── */}
      <div className="mb-[48px] md:mb-[64px] lg:mb-[80px] flex flex-col items-center text-center">
        <div className="flex mb-[16px] md:mb-[24px] justify-center">
          <SectionBadge label="Our Services" />
        </div>
        <SplitText
          tag="h2"
          className="font-sans text-[28px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-[#111111] tracking-[-0.03em] max-w-[800px] mx-auto"
          text={
            <>
              Complete Business Setup
              <br className="hidden md:block" />
              Solutions in Dubai.
            </>
          }
          delay={50}
          duration={1.25}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="center"
        />
      </div>

      {/* ── Services Rows ── */}
      <div className="border-t border-[#D9D9D9] border-dashed">
        {services.map((service, index) => (
          <div
            key={service.id}
            className="relative group border-b border-[#D9D9D9] border-dashed cursor-pointer overflow-hidden"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* ── Row content ── */}
            <div className="flex flex-col lg:flex-row lg:items-center py-[24px] md:py-[32px] lg:py-[40px] xl:py-[48px] relative z-10">
              {/* Title — 36% on lg, 35% on xl */}
              <div className="w-full lg:w-[36%] xl:w-[35%] shrink-0 mb-[10px] lg:mb-0 lg:pr-[24px]">
                <h3 className="text-[22px] md:text-[24px] lg:text-[26px] xl:text-[32px] font-bold text-[#111111] leading-[1.2] font-sans transition-colors duration-300 group-hover:text-[#660033]">
                  {service.title}
                </h3>
              </div>

              {/* Description — flex-1 fills remaining space, pr prevents bleeding into image */}
              <div className="w-full lg:flex-1 lg:pr-[24px] xl:pr-[40px]">
                <p className="text-[14px] lg:text-[14px] xl:text-[15px] text-[#666666] leading-[1.65] font-sans">
                  {service.description}
                </p>
              </div>

              {/* Mobile/Tablet thumbnail — below text, hidden on lg+ */}
              <div className="lg:hidden mt-[16px] relative w-full h-[180px] md:h-[220px] rounded-[14px] overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
              </div>

              {/* Desktop image column — lg: 180×115, xl: 240×155, fades in on hover */}
              <div className="hidden lg:flex lg:w-[190px] lg:shrink-0 xl:w-[260px] items-center justify-end">
                <div
                  className={`relative lg:w-[175px] lg:h-[115px] xl:w-[240px] xl:h-[155px] rounded-[14px] xl:rounded-[18px] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.10)] xl:shadow-[0_16px_48px_rgba(0,0,0,0.12)] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] ${
                    hoveredIndex === index
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-90"
                  }`}
                >
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1280px) 240px, 180px"
                  />
                </div>
              </div>
            </div>

            {/* Hover background tint */}
            <div className="absolute inset-0 bg-[#F9F9F9] opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
          </div>
        ))}
      </div>

      <ViewMoreButton label="View More" href="/services" />
    </SectionContainer>
  );
}

"use client";
import React from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";

const FreezoneOverview = () => {
  return (
    <section className="py-12 md:py-20 lg:py-24 bg-white overflow-hidden">
      <SectionContainer
        id="about-company"
        className="bg-white"
        containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image with modern shadow and floating visual elements */}
          <div className="lg:col-span-6 w-full flex justify-center items-center">
            <div className="relative group/img w-full max-w-[540px] aspect-[461/344]">
              {/* Decorative background shape */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-[#0099CC]/10 to-[#0099CC]/5 rounded-[32px] blur-xl -rotate-1 pointer-events-none"></div>

              {/* Main Image Card with a very clean, premium shadow */}
              <div className="relative w-full h-full overflow-hidden rounded-[24px] border border-[#0099CC]/20 bg-white shadow-2xl transition-all duration-500 group-hover/img:shadow-[#0099CC]/25 group-hover/img:translate-y-[-4px]">
                <Image
                  src="/images/freezone/freezone.png"
                  alt="Freezone Company Setup"
                  fill
                  className="object-cover transition-transform duration-700 group-hover/img:scale-103"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Right Column: Clean Modern Typography & Key Highlights */}
          <div className="lg:col-span-6 flex flex-col text-left space-y-6">
            {/* Upper category tag */}
            <div className="inline-flex items-center gap-2">
              <span className="w-8 h-px bg-[#0099CC]"></span>
              <span className="text-[#0099CC] text-sm font-semibold tracking-wider uppercase font-outfit">
                Company Formation
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl md:text-4xl lg:text-[2.75rem] font-bold text-[#000F2B] leading-tight font-outfit">
              About <span className="text-[#0099CC]">Free Zone</span> Company
              Formation
            </h2>

            {/* Description Paragraphs */}
            <div className="space-y-4 text-base md:text-lg leading-relaxed font-outfit text-gray-600">
              <p>
                Free zone company formation in Dubai provides 100% foreign
                ownership, full profit repatriation, and exemption from import
                and export duties within the free zone. These companies can
                conduct business globally and within the free zone and can work
                with UAE mainland companies through authorized distributors or
                by obtaining the required permits.
              </p>
              <p>
                Dubai offers multiple free zones catering to different
                industries such as trading, consultancy, technology, media,
                logistics, and manufacturing. Each free zone provides flexible
                office solutions including flexi desks, co-working spaces, and
                private offices.
              </p>
            </div>

            {/* Key Benefits Bullet Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6 border-t border-gray-100">
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0099CC]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#0099CC]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-outfit text-sm md:text-base font-semibold text-[#000F2B]">
                  100% Foreign Ownership
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0099CC]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#0099CC]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-outfit text-sm md:text-base font-semibold text-[#000F2B]">
                  100% Capital Repatriation
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0099CC]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#0099CC]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-outfit text-sm md:text-base font-semibold text-[#000F2B]">
                  0% Import & Export Duties
                </span>
              </div>
              <div className="flex items-center gap-3">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#0099CC]/10 flex items-center justify-center">
                  <svg
                    className="w-4 h-4 text-[#0099CC]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2.5"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <span className="font-outfit text-sm md:text-base font-semibold text-[#000F2B]">
                  Flexible Office Solutions
                </span>
              </div>
            </div>
          </div>
        </div>
      </SectionContainer>
    </section>
  );
};

export default FreezoneOverview;

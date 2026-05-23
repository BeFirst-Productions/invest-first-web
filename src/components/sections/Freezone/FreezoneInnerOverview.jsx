"use client";
import React from 'react';
import Image from 'next/image';
import SectionContainer from '@/components/layout/SectionContainer';

const FreezoneInnerOverview = ({ data }) => {
    if (!data) return null;

    const intro = data.intro;
    const image = intro?.image || "/images/freezone/freezone.png";
    const titleHighlight = intro?.titleHighlight || data.bannerTitle || "Free Zone";
    const titleRest = "Company Setup";

    const description1 = intro?.description1 || "";
    const description2 = intro?.description2 || "";

    return (
        <section className="py-12 md:py-20 bg-white">
            <SectionContainer
                id="freezone-inner-overview"
                className="bg-white"
                containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
            >
                <div className="flex flex-col items-center">
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-bold text-[#000F2B] mb-12 text-center leading-tight">
                        About <span className="text-[#0099CC]">{titleHighlight}</span> {titleRest}
                    </h2>

                    {/* Large Container Box with #000F2B Border and White Background */}
                    <div className="w-full max-w-[1200px] mx-auto border-2 border-[#000F2B] bg-white rounded-[24px] md:rounded-[32px] overflow-hidden flex flex-col lg:flex-row items-stretch shadow-xl transition-all duration-300 hover:shadow-2xl">

                        {/* Left Side: Image Container */}
                        <div className="w-full lg:w-1/2 p-5 md:p-6 flex items-center justify-center">
                            <div className="relative w-full h-[280px] sm:h-[350px] md:h-[400px] rounded-[18px] md:rounded-[24px] overflow-hidden shadow-md">
                                <Image
                                    // src={image}
                                    src="/images/freezone/zone-img.jpg"
                                    alt={`About ${titleHighlight}`}
                                    fill
                                    className="object-cover transition-transform duration-700 hover:scale-105"
                                    sizes="(max-width: 1024px) 100vw, 50vw"
                                    priority
                                />
                            </div>
                        </div>

                        {/* Middle vertical line divider for large screens */}
                        <div className="hidden lg:block w-[2px] bg-[#000F2B]/10 my-8"></div>

                        {/* Right Side: Text Content Container */}
                        <div className="w-full lg:w-1/2 p-6 md:p-8 lg:p-10 flex flex-col justify-center">
                            <div className="space-y-5 text-[#000F2B] text-base md:text-lg leading-relaxed font-outfit">
                                {description1 && (
                                    <p className="opacity-90 font-medium">
                                        {description1}
                                    </p>
                                )}
                                {description2 && (
                                    <p className="opacity-80">
                                        {description2}
                                    </p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default FreezoneInnerOverview;

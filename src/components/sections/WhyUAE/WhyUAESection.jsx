import React from 'react';
import SectionContainer from '@/components/layout/SectionContainer';
import Image from 'next/image';

const WhyUAESection = () => {
    return (
        <section className="overflow-hidden">
            <SectionContainer
                id="why-uae"
                className="py-[60px] md:py-[100px] lg:py-[120px]"
                containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
            >
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">

                    {/* Left Column: Full Image */}
                    <div id="DEBUG_ME" className="relative w-full lg:w-[48%] shrink-0">
                        <Image
                            src="/images/about/why-uae.png"
                            alt="Why UAE - Dubai Skyline"
                            width={1200}
                            height={800}
                            className="w-full h-auto rounded-[24px] block"
                            priority
                        />
                    </div>

                    {/* Right Column: Content */}
                    <div className="flex flex-col gap-6 lg:w-[52%]">
                        <h2 className="text-[36px] md:text-[48px] font-bold text-[#111111] tracking-tight leading-tight">
                            Why <span className="text-[#0099CC]">UAE?</span>
                        </h2>

                        <div className="flex flex-col gap-6 text-[#444444] text-[16px] md:text-[18px] leading-relaxed">
                            <p>
                                The United Arab Emirates has become one of the most attractive destinations for business setup and investment. Positioned at the crossroads of East and West, it offers unmatched global connectivity and access to major markets.
                            </p>
                            <p>
                                The UAE provides tax-free benefits, dedicated free zones, and world-class infrastructure that make business formation simple and rewarding. Entrepreneurs also gain access to skilled talent, modern technology, and a strong legal framework that supports innovation.
                            </p>
                        </div>
                    </div>

                </div>
            </SectionContainer>
        </section>
    );
};

export default WhyUAESection;

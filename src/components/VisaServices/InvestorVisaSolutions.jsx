"use client";
import React from 'react';
import Image from 'next/image';
import SectionContainer from '../layout/SectionContainer';

const InvestorVisaSolutions = ({ data }) => {
    if (!data) return null;

    const {
        title = "UAE Investor Visa solutions aligned with business setup & residency regulations.",
        description1 = "The UAE Investor Visa is a long-term residency option designed for entrepreneurs, shareholders, and business owners who establish or invest in licensed entities.",
        description2 = "Invest First provides professional UAE investor visa services that align business licensing, ownership structure, and immigration approvals under one regulated framework.",
        label = "Investor Visa",
        image = "/images/visaServices/investor-visa.png"
    } = data;

    return (
        <SectionContainer
            className="py-10 md:py-20"
            background={
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#003366]/20 to-transparent blur-[120px] pointer-events-none" />
            }
        >
            {/* Heading */}
            <div className="text-center mb-16 md:mb-24 px-4 relative z-10">
                <h2
                    className="text-3xl md:text-4xl font-semibold text-black max-w-5xl mx-auto leading-[1.2] tracking-tight"
                    dangerouslySetInnerHTML={{ __html: title }}
                />
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center relative z-10">

                {/* Left: Description Text */}
                <div className="space-y-8 px-2 lg:px-0">
                    <p
                        className="text-black text-base md:text-lg font-normal leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: description1 }}
                    />
                    <p
                        className="text-black text-base md:text-lg font-normal leading-relaxed"
                        dangerouslySetInnerHTML={{ __html: description2 }}
                    />
                </div>

                {/* Right: Visa Service Image */}
                <div className="relative group mx-auto lg:ml-auto w-full max-w-[550px]">
                    <div className="rounded-[29px] overflow-hidden relative aspect-[1.4/1]">
                        <Image
                            src={image}
                            alt={label}
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-105"
                            priority
                        />
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default InvestorVisaSolutions;

"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';
import { offshoreData } from '@/data/OffshoreData';

const ArrowIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 w-5 h-5 md:w-6 md:h-6">
        <path d="M24 12L12.3871 0V7.2H0V16.8H12.3871V24L24 12Z" fill="#61053D"/>
    </svg>
);

const OffshoreFeatures = () => {
    return (
        <section className="py-10 md:py-20 ">
            <Container>
                <div className="flex flex-col items-start px-4 md:px-0">
                    {/* Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10 md:mb-14 leading-tight">
                        <span className="text-[#0099CC]">Key Features</span> of UAE Offshore Companies
                    </h2>
                    
                    {/* Features List */}
                    <div className="flex flex-col gap-6 md:gap-8 w-full max-w-5xl">
                        {offshoreData.keyFeatures.map((feature, idx) => (
                            <div 
                                key={idx} 
                                className="flex items-center gap-4 group transition-all duration-300"
                            >
                                <ArrowIcon />
                                <p className="text-white text-lg md:text-xl font-medium tracking-tight opacity-90 group-hover:opacity-100 transition-opacity">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OffshoreFeatures;

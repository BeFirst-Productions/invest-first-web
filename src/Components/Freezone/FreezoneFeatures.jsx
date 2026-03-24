"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';
import { freezoneData } from '@/data/FreezoneData';

const FreezoneFeatures = () => {
    return (
        <section className="py-10 md:py-20">
            <Container>
                <div className="flex flex-col items-center">
                    {/* Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 text-center leading-tight">
                        <span className="text-[#0099CC]">Key Features of</span> a Free Zone Company in UAE
                    </h2>
                    
                    {/* Features Grid */}
                    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        {freezoneData.keyFeatures.map((feature, idx) => (
                            <div 
                                key={idx} 
                                className={`border border-[#0099CC] rounded-2xl p-6 flex items-center bg-[#000F2B] backdrop-blur-sm transition-all duration-300 hover:bg-[#0099CC]/5 
                                    ${idx === freezoneData.keyFeatures.length - 1 && freezoneData.keyFeatures.length % 2 !== 0 ? 'md:col-span-1' : ''}`}
                            >
                                <p className="text-white text-base md:text-lg  font-medium">
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

export default FreezoneFeatures;

"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';
import { offshoreData } from '@/data/OffshoreData';

const OffshoreBenefits = () => {
    return (
        <section className="py-10 md:py-20">
            <Container>
                <div className="flex flex-col items-start px-4 md:px-0">
                    {/* Section Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-10 md:mb-14 leading-tight">
                        <span className="text-[#0099CC]">Benefits of</span> Offshore Company Formation
                    </h2>
                    
                    {/* Benefits Layout */}
                    <div className="flex flex-wrap justify-center gap-6 w-full max-w-7xl mx-auto">
                        {offshoreData.benefits.map((benefit, idx) => (
                            <div 
                                key={idx} 
                                className={`w-full md:w-[calc(50%-12px)] lg:w-[calc(50%-12px)] p-6 md:p-8 rounded-[20px] bg-[#660033] flex flex-col justify-center min-h-[120px] transition-transform duration-300 hover:scale-[1.02] ${
                                    idx === offshoreData.benefits.length - 1 && offshoreData.benefits.length % 2 !== 0 ? 'md:max-w-xl' : ''
                                }`}
                            >
                                <p className="text-white text-base md:text-lg leading-relaxed">
                                    <span className="text-[#0099CC] font-semibold">{benefit.title}</span> – {benefit.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OffshoreBenefits;
 
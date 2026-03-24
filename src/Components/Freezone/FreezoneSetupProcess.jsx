"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';
import { freezoneData } from '@/data/FreezoneData';

const FreezoneSetupProcess = () => {
    // Data extraction from FreezoneData.js
    const { titleHighlight, titleRest, description, steps } = freezoneData.setupProcess;

    return (
        <section className="py-10 md:py-20 relative overflow-hidden">
            <Container>
                {/* Section Header */}
                <div className="flex flex-col items-center mb-16 px-4">
                    <h2 className="text-3xl md:text-4xl  font-semibold text-white mb-6 text-center leading-tight">
                        <span className="text-[#0099CC]">{titleHighlight}</span>{' '}{titleRest}
                    </h2>
                    <p className=" text-center max-w-3xl text-sm md:text-base leading-relaxed px-4">
                        {description}
                    </p>
                </div>

                {/* Staggered Setup Process Cards */}
                <div className="space-y-6 md:space-y-10">
                    {steps.map((step, idx) => (
                        <div 
                            key={step.id} 
                            // Staggering effect: Even boxes shift right on desktop
                            className={`border border-[#0099CC] rounded-[30px] p-8 md:p-10 lg:p-12 bg-[#000F2B] backdrop-blur-sm transition-all duration-700 hover:bg-[#0099CC]/5 shadow-2xl w-full max-w-[850px]
                                ${idx % 2 === 0 
                                    ? 'mr-auto' 
                                    : 'ml-auto'}`}
                        >
                            {/* Step Title in Teal */}
                            <h3 className="text-[#0099CC] text-base md:text-xl lg:text-2xl  font-semibold mb-5 tracking-tight">
                                {step.title}
                            </h3>
                            
                            {/* Step Description */}
                            <p className="text-gray-300 text-base md:text-lg lg:text-xl mb-8 leading-relaxed font-outfit">
                                {step.description}
                            </p>
                            
                            {/* Sub-items List with decorative dots */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8">
                                {step.subItems?.map((item, i) => (
                                    <div key={i} className="flex items-center gap-3.5 group">
                                        {/* Glowing Maroon Dot */}
                                        <div className="w-3.5 h-3.5 rounded-full bg-[#660033] border-[1px] border-[#0099CC]  shrink-0 group-hover:scale-125 transition-transform duration-300"></div>
                                        <span className="text-gray-200 text-sm md:text-base font-medium leading-tight">
                                            {item}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            {/* Subtle background decorative shapes could go here for extra premium feel */}
        </section>
    );
};

export default FreezoneSetupProcess;

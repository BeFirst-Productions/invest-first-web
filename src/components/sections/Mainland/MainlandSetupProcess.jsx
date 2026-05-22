"use client";
import SectionContainer from '@/components/layout/SectionContainer';
import React from 'react';


const MainlandSetupProcess = ({ data }) => {
    if (!data?.steps) return null;

    const { titleHighlight, titleRest, steps } = data;

    return (
        <section className="py-12 md:py-28">
                  <SectionContainer
                            id="about-company"
                            className="py-[48px] md:py-[80px] lg:py-[120px] bg-white"
                            containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
                          >
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 leading-snug">
                    <span className="text-[#0099CC]">{titleHighlight}</span>{' '}{titleRest}
                </h2>

                {/* Numbered Steps List */}
                <ol className="space-y-4">
                    {steps.map((step, idx) => (
                        <li key={idx} className="flex items-start gap-4 group">
                            {/* Number */}
                            <span className="shrink-0 text-[#0099CC] text-lg md:text-xl font-medium w-7 text-right tabular-nums">
                                {idx + 1}.
                            </span>
                            {/* Step text */}
                            <span className="text-[#0099CC] text-base md:text-xl font-medium leading-relaxed group-hover:text-white transition-colors duration-200">
                                {step}
                            </span>
                        </li>
                    ))}
                </ol>
            </SectionContainer>
        </section>
    );
};

export default MainlandSetupProcess;

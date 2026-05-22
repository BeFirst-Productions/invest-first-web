"use client";
import React from 'react';
import SectionContainer from '../layout/SectionContainer';

const GovernmentApprovalsProcess = ({ data }) => {
    if (!data) return null;

    return (
        <SectionContainer
            className="py-10 md:py-20  text-black relative"
            background={
                <div className="absolute inset-0  pointer-events-none" />
            }
        >
            <div className="relative z-10">
                {/* Header */}
                <div className="text-center mb-16 md:mb-24">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                        <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleRest}
                    </h2>
                    <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </div>

                {/* Stepper Timeline */}
                <div className="relative max-w-5xl mx-auto">
                    {/* Vertical Connecting Line (Desktop) */}
                    <div className="absolute left-1/2 -translate-x-1/2 top-8 bottom-8 w-1 bg-gradient-to-b from-[#0099CC] via-[#0099CC]/50 to-[#0099CC]/10 hidden md:block" />

                    <div className="space-y-12 md:space-y-20">
                        {data.steps.map((step, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div
                                    key={step.id}
                                    className={`flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative w-full ${isEven ? '' : 'md:flex-row-reverse'}`}
                                >
                                    {/* Content Card */}
                                    <div className="w-full md:w-[45%]">
                                        <div className="bg-white border border-gray-100 rounded-3xl p-6 md:p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1">
                                            <div className="flex items-center gap-4 mb-4">
                                                {/* Number Badge (mobile) */}
                                                <span className="flex md:hidden w-8 h-8 items-center justify-center rounded-full bg-[#0099CC]/10 text-[#0099CC] font-bold text-sm">
                                                    {step.id}
                                                </span>
                                                <h3 className="text-xl md:text-2xl font-semibold text-black group-hover:text-[#0099CC] transition-colors duration-300">
                                                    {step.title}
                                                </h3>
                                            </div>
                                            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
                                                {step.description}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Timeline Circle Center (Desktop) */}
                                    <div className="absolute left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-white border-4 border-[#0099CC] shadow-md items-center justify-center z-10 hidden md:flex">
                                        <span className="text-sm font-extrabold text-[#0099CC]">{step.id}</span>
                                    </div>

                                    {/* Spacer/Empty side (Desktop) */}
                                    <div className="w-full md:w-[45%] hidden md:block" />
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </SectionContainer>
    );
};

export default GovernmentApprovalsProcess;

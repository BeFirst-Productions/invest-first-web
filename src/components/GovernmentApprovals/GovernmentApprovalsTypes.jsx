"use client";
import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import { FileText, Building2, ShieldCheck, ClipboardCheck } from 'lucide-react';

const iconMap = {
    "01": FileText,
    "02": Building2,
    "03": ShieldCheck,
    "04": ClipboardCheck
};

const GovernmentApprovalsTypes = ({ data }) => {
    if (!data) return null;

    return (
        <SectionContainer
            className="py-10 md:py-20 relative overflow-hidden"
            background={
                <>
                    <div className="absolute top-20 right-[5%] w-64 h-64 bg-[#0099CC]/5 rounded-full blur-3xl -z-10" />
                    <div className="absolute bottom-40 left-[5%] w-80 h-80 bg-blue-500/5 rounded-full blur-3xl -z-10" />
                </>
            }
        >
            <div>
                {/* Section Header */}
                <div className="text-center mb-16 md:mb-20">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                        <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleRest}
                    </h2>
                    <p className="mt-4 text-gray-600 text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
                        {data.description}
                    </p>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10">
                    {data.items.map((item) => {
                        const IconComponent = iconMap[item.id] || FileText;
                        return (
                            <div
                                key={item.id}
                                className="bg-[#000F2B] backdrop-blur-sm border border-[#0099CC]/20 rounded-3xl p-8 md:p-10 hover:border-[#0099CC]/50 transition-all duration-500 shadow-xl group flex flex-col justify-between"
                            >
                                <div>
                                    {/* Icon & ID Row */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="w-14 h-14 rounded-2xl bg-[#0099CC]/10 border border-[#0099CC]/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <IconComponent className="w-7 h-7 text-[#0099CC]" />
                                        </div>
                                        <span className="text-5xl font-black text-white/5 select-none transition-colors duration-300 group-hover:text-[#0099CC]/10">
                                            {item.id}
                                        </span>
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-white text-xl md:text-2xl font-bold mb-4 leading-tight group-hover:text-[#0099CC] transition-colors duration-300">
                                        {item.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </SectionContainer>
    );
};

export default GovernmentApprovalsTypes;

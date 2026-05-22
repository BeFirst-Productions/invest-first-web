"use client";
import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import { Award, Compass, Shield, Zap } from 'lucide-react';

const iconMap = [
    Award,
    Compass,
    Shield,
    Zap
];

const GovernmentApprovalsWhyChoose = ({ data }) => {
    if (!data) return null;

    return (
        <SectionContainer className="py-10 md:py-20 text-black">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                
                {/* Left Column: Heading and Main Info */}
                <div className="space-y-6">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                        <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleRest}
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg leading-relaxed font-light">
                        {data.description}
                    </p>
                </div>

                {/* Right Column: Key Pillars (Grid or List of cards) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {data.points.map((point, index) => {
                        const IconComponent = iconMap[index % iconMap.length];
                        return (
                            <div 
                                key={index}
                                className="p-6 bg-gradient-to-br from-[#000F2B] to-[#001D4C] rounded-2xl shadow-lg border border-[#0099CC]/20 hover:border-[#0099CC]/50 transition-all duration-300 group"
                            >
                                <div className="w-12 h-12 rounded-xl bg-[#0099CC]/10 border border-[#0099CC]/30 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    <IconComponent className="w-6 h-6 text-[#0099CC]" />
                                </div>
                                <p className="text-white text-sm md:text-base leading-relaxed font-medium">
                                    {point}
                                </p>
                            </div>
                        );
                    })}
                </div>

            </div>
        </SectionContainer>
    );
};

export default GovernmentApprovalsWhyChoose;

"use client";
import React from 'react';
import { Check } from 'lucide-react';

const ProcessCard = ({ step }) => {
    return (
        <div className="relative group h-full min-h-[280px] md:min-h-[320px]">
            {/* SVG Card with U-Shaped Notch in Top-Left */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 290 330"
                preserveAspectRatio="none"
                style={{ zIndex: 0 }}
            >
                <defs>
                    {/* Border Gradient - Pink/Purple to Blue */}
                    <linearGradient id={`borderGradient-${step.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(180, 20, 100, 0.9)" />
                        <stop offset="50%" stopColor="rgba(120, 50, 150, 0.7)" />
                        <stop offset="100%" stopColor="rgba(40, 120, 200, 0.9)" />
                    </linearGradient>

                    {/* Background Gradient - Dark Blue */}
                    <linearGradient id={`bgGradient-${step.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#2a3f5f" />
                        <stop offset="100%" stopColor="#1a2838" />
                    </linearGradient>

                    {/* Hover Glow Gradient */}
                    <linearGradient id={`glowGradient-${step.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(180, 20, 100, 0.2)" />
                        <stop offset="100%" stopColor="rgba(40, 120, 200, 0.2)" />
                    </linearGradient>
                </defs>

                {/* Main Card Shape with U-Shaped Notch */}
                <path
                    d="M 25 15
                       L 25 55
                       Q 25 65 35 65
                       Q 50 75 60 50
                       Q 70 45 85 35
                       L 270 35
                       Q 290 35 290 55
                       L 290 310
                       Q 290 330 270 330
                       L 20 330
                       Q 0 330 0 310
                       L 0 35
                       Q 0 15 20 15
                       Z"
                    fill={`url(#bgGradient-${step.id})`}
                    stroke={`url(#borderGradient-${step.id})`}
                    strokeWidth="2.5"
                    className="transition-all duration-300 group-hover:stroke-[3]"
                />

                {/* Hover Glow Overlay */}
                <path
                    d="M 25 15
                       L 25 55
                       Q 25 65 35 65
                       Q 50 65 60 50
                       Q 70 35 85 35
                       L 270 35
                       Q 290 35 290 55
                       L 290 310
                       Q 290 330 270 330
                       L 20 330
                       Q 0 330 0 310
                       L 0 35
                       Q 0 15 20 15
                       Z"
                    fill={`url(#glowGradient-${step.id})`}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
            </svg>

            {/* Decorative Icon Outline in Notch Area */}
     

            {/* Card Content */}
            <div className="relative z-10 p-5 md:p-7 h-full flex flex-col pt-20 md:pt-24">
                {/* Large Step Number Background */}
                <div className="absolute top-4 md:top-6 right-4 md:right-8 text-[80px] md:text-[120px] lg:text-[140px] font-bold text-white/[0.08] leading-none select-none pointer-events-none">
                    {step.id}
                </div>

                {/* Icon with Checkmark Badge - Positioned in Notch */}
                <div className="absolute top-4 md:top-5 left-4 md:left-5 w-fit">
                    {/* Icon Container */}
                    <div className="relative w-14 h-14 md:w-7 md:h-7 rounded-xl bg-gradient-to-br from-[#2563eb] to-[#1e40af] border-2 border-[rgba(37,99,235,0.5)] flex items-center justify-center text-white shadow-xl group-hover:scale-105 transition-transform duration-300">
                        <div className="scale-90 md:scale-100">
                            {step.icon}
                        </div>

                        {/* Checkmark Badge */}
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 md:w-7 md:h-7 rounded-lg bg-[#0ea5e9] border-2 border-[#1a2838] flex items-center justify-center shadow-lg">
                            <Check className="w-3.5 h-3.5 md:w-4 md:h-4 text-white" strokeWidth={3} />
                        </div>
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-3 md:gap-4 flex-1">
                    {/* Title */}
                    <h3 className="text-white text-xl md:text-2xl lg:text-[26px] font-semibold leading-tight">
                        {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-300/90 text-sm md:text-base lg:text-[15px] leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProcessCard;


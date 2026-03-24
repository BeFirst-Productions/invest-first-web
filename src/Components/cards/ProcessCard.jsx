"use client";
import React from 'react';
import { Check } from 'lucide-react';

const ProcessCard = ({ step }) => {
    return (
        <div className="relative group h-full min-h-[260px] md:min-h-[280px]">
            {/* SVG Card Shape */}
            <svg
                className="absolute inset-0 w-full h-full"
                viewBox="0 0 289 218"
                preserveAspectRatio="none"
                style={{ zIndex: 0 }}
            >
                <defs>
                    {/* Unique Mask ID for each step */}
                    <mask id={`mask-${step.id}`} fill="white">
                        <path d="M289 202C289 210.837 281.837 218 273 218H16C7.16344 218 0 210.837 0 202V13.7285C0 6.14647 6.14647 0 13.7285 0C21.3106 0 27.457 6.14647 27.457 13.7285V37C27.457 45.8366 34.6205 53 43.457 53H66.3633C75.1998 53 82.3633 45.8366 82.3633 37V16C82.3633 7.16344 89.5267 0 98.3633 0H273C281.837 0 289 7.16344 289 16V202Z" />
                    </mask>

                    {/* Gradient for Border */}
                    <linearGradient id={`borderGradient-${step.id}`} x1="0" y1="119.371" x2="289" y2="119.371" gradientUnits="userSpaceOnUse">
                        <stop stopColor="#780343" />
                        <stop offset="1" stopColor="#00335A" />
                    </linearGradient>

                    {/* Hover Glow Gradient */}
                    <linearGradient id={`glowGradient-${step.id}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="rgba(120, 3, 67, 0.2)" />
                        <stop offset="100%" stopColor="rgba(0, 51, 90, 0.2)" />
                    </linearGradient>
                </defs>

                {/* Main Card Fill */}
                <path
                    d="M289 202C289 210.837 281.837 218 273 218H16C7.16344 218 0 210.837 0 202V13.7285C0 6.14647 6.14647 0 13.7285 0C21.3106 0 27.457 6.14647 27.457 13.7285V37C27.457 45.8366 34.6205 53 43.457 53H66.3633C75.1998 53 82.3633 45.8366 82.3633 37V16C82.3633 7.16344 89.5267 0 98.3633 0H273C281.837 0 289 7.16344 289 16V202Z"
                    fill="#263A50"
                    className="transition-all duration-300 group-hover:fill-[#2a415a]"
                />

                {/* Border Path with Gradient and Mask */}
                <path
                    d="M273 218V216H16V218V220H273V218ZM0 202H2V13.7285H0H-2V202H0ZM27.457 13.7285H25.457V37H27.457H29.457V13.7285H27.457ZM43.457 53V55H66.3633V53V51H43.457V53ZM82.3633 37H84.3633V16H82.3633H80.3633V37H82.3633ZM98.3633 0V2H273V0V-2H98.3633V0ZM289 16H287V202H289H291V16H289ZM273 0V2C280.732 2 287 8.26801 287 16H289H291C291 6.05887 282.941 -2 273 -2V0ZM82.3633 16H84.3633C84.3633 8.26801 90.6313 2 98.3633 2V0V-2C88.4222 -2 80.3633 6.05888 80.3633 16H82.3633ZM66.3633 53V55C76.3044 55 84.3633 46.9411 84.3633 37H82.3633H80.3633C80.3633 44.732 74.0953 51 66.3633 51V53ZM27.457 37H25.457C25.457 46.9411 33.5159 55 43.457 55V53V51C35.725 51 29.457 44.732 29.457 37H27.457ZM13.7285 0V2C20.206 2 25.457 7.25104 25.457 13.7285H27.457H29.457C29.457 5.0419 22.4151 -2 13.7285 -2V0ZM0 13.7285H2C2 7.25104 7.25104 2 13.7285 2V0V-2C5.0419 -2 -2 5.0419 -2 13.7285H0ZM16 218V216C8.26801 216 2 209.732 2 202H0H-2C-2 211.941 6.05887 220 16 220V218ZM273 218V220C282.941 220 291 211.941 291 202H289H287C287 209.732 280.732 216 273 216V218Z"
                    fill={`url(#borderGradient-${step.id})`}
                    mask={`url(#mask-${step.id})`}
                    className="transition-all duration-300 group-hover:opacity-80"
                />

                {/* Hover Glow Overlay */}
                <path
                    d="M289 202C289 210.837 281.837 218 273 218H16C7.16344 218 0 210.837 0 202V13.7285C0 6.14647 6.14647 0 13.7285 0C21.3106 0 27.457 6.14647 27.457 13.7285V37C27.457 45.8366 34.6205 53 43.457 53H66.3633C75.1998 53 82.3633 45.8366 82.3633 37V16C82.3633 7.16344 89.5267 0 98.3633 0H273C281.837 0 289 7.16344 289 16V202Z"
                    fill={`url(#glowGradient-${step.id})`}
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                />
            </svg>

            {/* Decorative Icon Outline in Notch Area */}


            {/* Card Content */}
            <div className="relative z-10 p-5 md:p-7 h-full flex flex-col pt-20 md:pt-24">
                {/* Large Step Number Background */}
                <div className="absolute top-4 md:top-6 right-4 md:right-8 text-4xl lg:text-6xl font-bold text-white/10 leading-none select-none pointer-events-none">
                    {step.id}
                </div>

                {/* Icon Positioned in Notch */}
                <div className="absolute top-[2px] left-[19%] -translate-x-1/2 w-[45px] h-[45px] flex items-center justify-center">
                    {/* Pulsing Back Glow for Notch Icon */}
                    <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-md animate-pulse" />

                    {/* Icon Container */}
                    <div className="relative flex items-center justify-center text-blue-400 group-hover:text-white transition-colors duration-300 group-hover:scale-110 transition-transform duration-300">
                        {step.icon}
                    </div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col gap-3 md:gap-4 flex-1">
                    {/* Title */}
                    <h3 className="text-white text-xl md:text-2xl lg:text-[26px] font-semibold leading-tight">
                        {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-sm md:text-base lg:text-[15px] leading-relaxed">
                        {step.description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProcessCard;


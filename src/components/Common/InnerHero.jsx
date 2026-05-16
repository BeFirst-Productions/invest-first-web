"use client";
import React from 'react';
import Link from 'next/link';
import SectionContainer from '../layout/SectionContainer';
import { ChevronRight } from 'lucide-react';

const InnerHero = ({
    title = "Contact Us",
    subtitle = "Get in touch with our expert consulting team",
    bgImage = "/images/hero/sky.jpg"
}) => {
    return (
        <SectionContainer
            id="inner-hero"
            className="relative min-h-[300px] md:min-h-[350px] flex items-center pt-[80px] pb-[40px] md:pt-[100px] md:pb-[60px] lg:pt-[160px] lg:pb-[100px] overflow-hidden"
            background={
                <>
                    {/* Background Image with Overlay */}
                    <div
                        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                        style={{ backgroundImage: `url(${bgImage})` }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/90 to-transparent" />
                    <div className="absolute inset-0 bg-[#020617]/40" />

                    {/* Decorative Elements */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-linear-to-l from-[#0099CC]/10 to-transparent pointer-events-none" />
                    <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#BE185D]/10 rounded-full blur-[120px] pointer-events-none" />
                </>
            }
        >
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
                <div className="flex flex-col items-start">
                    {/* Breadcrumbs */}
                    <nav className="flex items-center gap-2 mb-6 animate-fade-in">
                        <Link href="/" className="text-gray-400 hover:text-white transition-colors text-sm md:text-base font-medium">
                            Home
                        </Link>
                        <ChevronRight className="w-4 h-4 text-gray-500" />
                        <span className="text-[#0099CC] text-sm md:text-base font-medium">
                            {title}
                        </span>
                    </nav>

                    {/* Title */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
                        {title.split(' ').map((word, i) => (
                            <span key={i} className={i === title.split(' ').length - 1 ? "text-[#0099CC]" : ""}>
                                {word}{' '}
                            </span>
                        ))}
                    </h1>

                    {/* Subtitle */}
                    <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl animate-slide-up [animation-delay:200ms]">
                        {subtitle}
                    </p>

                    {/* Decorative bar */}
                    <div className="mt-8 h-1 w-24 bg-gradient-to-r from-[#0099CC] to-[#BE185D] rounded-full animate-scale-in" />
                </div>
                
                {/* Right side empty to keep content on the left */}
                <div className="hidden lg:block" />
            </div>
        </SectionContainer>
    );
};

export default InnerHero;

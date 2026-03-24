"use client"
import { useLayoutEffect, useRef,React, useState, useEffect } from "react"; // Changed useEffect to useLayoutEffect for better GSAP init
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LicenseCategoryMobile from "./LicenseCategoryMobile";
import { licenseSectionData } from "@/data/LicenseData";
import Container from "../Common/Layout/Contianer";
import Image from "next/image";
import Banner from "./Banner";
import SectionTag from "../Common/SectionTag";

const LicenseCategorySection = () => {
    const containerRef = useRef(null);
    const sectionRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            setIsVisible(entry.isIntersecting);
        }, { threshold: 0.05 });
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (containerRef.current) {
            const cards = containerRef.current.children;

            Array.from(cards).forEach((card, index) => {
                const isEven = index % 2 === 0;

                gsap.fromTo(
                    card,
                    {
                        opacity: 0,
                        x: isEven ? -100 : 100, // Reduced slide distance for smoothness
                    },
                    {
                        opacity: 1,
                        x: 0,
                        duration: 1.5, // Slower duration
                        ease: "power4.out", // Smoother easing
                        willChange: "transform, opacity",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            once: true
                        },
                    }
                );
            });
        }
    }, []);

    return (
        <section ref={sectionRef} className="relative w-full py-10 md:py-20   overflow-hidden">
            {/* Decorative Top-Left Shape - Hidden on sm/md */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-hidden">
                {/* Top-Left Big Circle */}
                <div className="absolute top-10 left-20">
                    <div className="relative w-32 h-32 flex items-center justify-center animate-pulse-slow">
                        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#780343] to-[#00335A]">
                            <div className="w-full h-full bg-[#00040F] rounded-full" />
                        </div>
                        <div className="w-20 h-20 bg-[#1C7998] rounded-full shadow-lg opacity-80" />
                    </div>
                </div>

                {/* Bottom-Left Small Circle (Concentric) */}
                <div className="absolute top-52 left-10">
                    <div className="relative w-20 h-20 flex items-center justify-center animate-pulse-slow">
                        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-r from-[#780343] to-[#00335A]">
                            <div className="w-full h-full bg-[#00040F] rounded-full" />
                        </div>
                        <div className="w-12 h-12 bg-[#1C7998] rounded-full shadow-lg opacity-80" />
                    </div>
                </div>

                {/* Extra Small Solid Circle 1 */}
                <div className="absolute top-36 left-8 w-8 h-8 bg-[#1C7998] rounded-full opacity-60 animate-pulse-slow" />

                {/* Extra Small Solid Circle 2 */}
                <div className="absolute top-44 left-36 w-6 h-6 bg-[#1C7998] rounded-full opacity-40 mix-blend-screen animate-pulse-slow" />
            </div>

            <Container>
                {/* Header */}
                <div className="text-center mb-16 relative z-10">
                    <div className="flex items-center justify-center">

                        <SectionTag text="License category" />

                    </div>

                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight max-w-lg mx-auto">
                        {licenseSectionData.heading}
                    </h2>
                </div>

                {/* Mobile/Tablet View (sm/md) */}
                <LicenseCategoryMobile data={licenseSectionData.licenseList} />

                {/* Desktop View (lg+) */}
                <div ref={containerRef} className="hidden lg:flex flex-col gap-6  relative z-10">
                    {licenseSectionData.licenseList.map((item) => (
                        <div
                            key={item.id}
                            className="group flex flex-col md:flex-row items-stretch rounded-3xl overflow-hidden"
                        >
                            {/* LEFT — TITLE */}
                            <div className="flex-[0.3] animate-width-left rounded-t-3xl flex items-center px-8 md:px-12 py-16 bg-[#000F2B] group-hover:bg-[#660033] transition-colors duration-300">
                                <h3 className="text-xl md:text-2xl font-semibold text-white whitespace-nowrap">
                                    {item.title}
                                </h3>
                            </div>

                            {/* CENTER — IMAGE */}
                            <div className="flex-[0.2] flex items-center   justify-center bg-[#000F2B] group-hover:bg-[#660033] transition-colors duration-300">
                                <div className="w-full h-full mb-5  flex  justify-center items-center bg-black rounded-b-3xl">
                                    <div className="relative w-52  h-32  rounded-2xl overflow-hidden transition-transform duration-300">
                                        <Image
                                            src={item.image}
                                            alt={item.title}
                                            fill
                                            className="object-cover p-1 rounded-3xl"
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* RIGHT — DESCRIPTION */}
                            <div className="flex-[0.5] animate-width-right flex justify-center items-center rounded-t-3xl px-8 py-6 bg-[#000F2B] group-hover:bg-[#660033] transition-colors duration-300 overflow-hidden">
                                <p className="text-sm md:text-base  leading-relaxed max-w-sm flex-none text-center">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>

            <div className="absolute right-0 bottom-0 pointer-events-none hidden xl:block">
                <svg width="182" height="800" viewBox="0 0 182 930" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                    <path d="M185.5 928.5H100.577C94.848 927.503 83.5923 919.824 84.4011 897.082V256.708C84.2326 248.978 80.5593 233.068 67.2143 231.273H1.49999V306.846H122.819C126.863 307.61 134.951 305.014 134.951 288.525V178.601C135.793 169.186 133.232 150.356 116.247 150.356H43.456C36.5476 149.847 22.7308 142.875 22.7308 119.058C22.7308 95.2413 22.7308 46.0297 22.7308 24.401C21.8883 16.7673 23.7417 1.5 37.8956 1.5H184.489" stroke="url(#paint0_linear_2284_8598)" strokeWidth="3" />

                    {/* Animated Ray */}
                    <path
                        d="M185.5 928.5H100.577C94.848 927.503 83.5923 919.824 84.4011 897.082V256.708C84.2326 248.978 80.5593 233.068 67.2143 231.273H1.49999V306.846H122.819C126.863 307.61 134.951 305.014 134.951 288.525V178.601C135.793 169.186 133.232 150.356 116.247 150.356H43.456C36.5476 149.847 22.7308 142.875 22.7308 119.058C22.7308 95.2413 22.7308 46.0297 22.7308 24.401C21.8883 16.7673 23.7417 1.5 37.8956 1.5H184.489"
                        stroke="url(#rayGradient)"
                        strokeWidth="3"
                        strokeLinecap="round"
                        filter="url(#rayBlur)"
                        className="animate-license-ray"
                    />

                    <defs>
                        <linearGradient id="paint0_linear_2284_8598" x1="185.5" y1="509.102" x2="1.5" y2="509.102" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#780343" />
                            <stop offset="1" stopColor="#00335A" />
                        </linearGradient>

                        <filter id="rayBlur" x="-50%" y="-50%" width="200%" height="200%">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" />
                        </filter>

                        <linearGradient id="rayGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#780343" stopOpacity="0" />
                            <stop offset="40%" stopColor="#780343" />
                            <stop offset="60%" stopColor="#00335A" />
                            <stop offset="100%" stopColor="#00335A" stopOpacity="0" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <Banner />
            <style jsx>{`
                @keyframes licenseRay {
                    0% { stroke-dashoffset: -2000; }
                    100% { stroke-dashoffset: 2000; }
                }
                .animate-license-ray {
                    stroke-dasharray: 200 1800;
                    animation: licenseRay 6s linear infinite;
                    animation-play-state: ${isVisible ? 'running' : 'paused'};
                    will-change: stroke-dashoffset;
                }
                @keyframes pulseSlow {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
                .animate-pulse-slow {
                    animation: pulseSlow 2s ease-in-out infinite;
                    animation-play-state: ${isVisible ? 'running' : 'paused'};
                    will-change: transform, opacity;
                }
                @keyframes flexPulseLeft {
                    0% { flex: 0.3; }
                    25% { flex: 0.2; }
                    75% { flex: 0.4; }
                    100% { flex: 0.3; }
                }
                @keyframes flexPulseRight {
                    0% { flex: 0.5; }
                    25% { flex: 0.6; }
                    75% { flex: 0.4; }
                    100% { flex: 0.5; }
                }
                .group:hover .animate-width-left {
                    will-change: flex;
                    animation: flexPulseLeft 6s ease-in-out infinite;
                }
                .group:hover .animate-width-right {
                    will-change: flex;
                    animation: flexPulseRight 6s ease-in-out infinite;
                }
            `}</style>
        </section>
    );
};

export default LicenseCategorySection;

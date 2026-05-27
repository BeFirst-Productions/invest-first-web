"use client";
import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import FounderImageCard from './FounderImageCard';
import SectionContainer from '@/components/layout/SectionContainer';
import { founders } from '@/data/foundersData';

if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

const MeetFounders = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const sectionRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Header Animation
            gsap.from(titleRef.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: titleRef.current,
                    start: "top 85%",
                }
            });

            // Founders Sections Animations
            sectionRefs.current.forEach((section, index) => {
                const isEven = index % 2 === 0;
                const image = section.querySelector('.founder-image-wrap');
                const content = section.querySelector('.founder-content-wrap');
                const bgText = section.querySelector('.kinetic-text');

                const tl = gsap.timeline({
                    scrollTrigger: {
                        trigger: section,
                        start: "top 70%",
                    }
                });

                tl.from(bgText, {
                    x: isEven ? -100 : 100,
                    opacity: 0,
                    duration: 1.5,
                    ease: "power3.out"
                }, 0)
                .from(image, {
                    x: isEven ? -50 : 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, 0.2)
                .from(content, {
                    y: 50,
                    opacity: 0,
                    duration: 1,
                    ease: "power3.out"
                }, 0.4);
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={containerRef} className="relative py-24 md:py-40 overflow-hidden bg-[#ffffff]">
            {/* Advanced Cinematic Background */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 left-0 w-full h-full opacity-30"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 20% 30%, #0099CC15 0%, transparent 50%), radial-gradient(circle at 80% 70%, #0099CC10 0%, transparent 50%)',
                    }}
                />
                <div className="absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#0099CC]/10 to-transparent" />
            </div>

            <SectionContainer id="meet-founders" className="relative z-10">
                {/* Creative Section Header */}
                <div ref={titleRef} className="mb-24 md:mb-32">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="flex items-center gap-4">
                            {/* <div className="h-[1px] w-8 bg-[#0099CC]" />
                            <span className="text-[#0099CC] font-bold tracking-[0.3em] uppercase text-[10px] md:text-xs">The Visionaries</span>
                            <div className="h-[1px] w-8 bg-[#0099CC]" /> */}
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-5xl font-black text-[#000000] leading-[0.9]">
                            <span className="text-[#000000]">Meet</span>  <span className="text-[#0099CC]">The</span>  <span className="text-[#000000]">Founders</span>
                        </h2>
                    </div>
                </div>

                {/* Staggered Content */}
                <div className="space-y-40 md:space-y-28">
                    {founders.map((founder, index) => (
                        <div 
                            key={founder.id} 
                            ref={el => sectionRefs.current[index] = el}
                            className="relative grid grid-cols-1 lg:grid-cols-12 items-center gap-16 lg:gap-0"
                        >
                            {/* Kinetic Background Typography */}
                            <div className={`kinetic-text absolute top-1/2 -translate-y-1/2 pointer-events-none select-none opacity-[0.02] text-[15vw] font-black tracking-tighter text-gray-900 whitespace-nowrap z-0
                                ${index % 2 === 0 ? 'left-0' : 'right-0'}`}
                            >
                                {index % 2 === 0 ? 'VISION' : 'LEGACY'}
                            </div>

                            {/* Image Wrapper */}
                            <div className={`founder-image-wrap lg:col-span-5 relative z-20 
                                ${index % 2 !== 0 ? 'lg:order-2 lg:ml-auto' : 'lg:order-1 lg:mr-auto'}`}
                            >
                                <div className="mx-auto lg:mx-0">
                                    <FounderImageCard
                                        image={founder.image}
                                        name={founder.name}
                                        title={founder.title}
                                        alt={founder.name}
                                    />
                                </div>
                            </div>

                            {/* Content Wrapper - Reduced Overlap for visibility */}
                            <div className={`founder-content-wrap lg:col-span-7 relative z-30 
                                ${index % 2 !== 0 
                                    ? 'lg:order-1 lg:-mr-16 lg:text-left' 
                                    : 'lg:order-2 lg:-ml-16 lg:text-left'}`}
                            >
                                <div className="bg-white/95 backdrop-blur-xl p-4 md:p-12 lg:p-14 rounded-[2.5rem] shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] border border-white/50">
                                    <div className="space-y-6">
                                        {/* Large Quote Accent */}
                                        <div className="text-6xl font-serif text-[#0099CC]/20 leading-none h-6">&ldquo;</div>
                                        
                                        <div className="space-y-5">
                                            {founder.description.map((paragraph, pIdx) => (
                                                <p key={pIdx} className="text-base md:text-lg text-gray-700 leading-relaxed font-medium">
                                                    {paragraph}
                                                </p>
                                            ))}
                                        </div>

                                        <div className="pt-8 border-t border-gray-100 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
                                            <div className="flex flex-col">
                                                <span className="text-2xl font-black text-gray-900 tracking-tight">{founder.name}</span>
                                                <span className="text-[#0099CC] font-bold uppercase tracking-widest text-[10px] mt-1">{founder.title}</span>
                                            </div>
                                            
                                            {/* Creative Action Indicator */}
                                            <div className="hidden sm:flex items-center gap-3 text-gray-300">
                                                <span className="text-[10px] uppercase tracking-widest">Leadership</span>
                                                <div className="w-12 h-[1px] bg-gray-200" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </SectionContainer>


            {/* Decorative Side Element */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 hidden xl:block">
                <div className="flex flex-col gap-2 items-center opacity-10">
                    {[...Array(5)].map((_, i) => (
                        <div key={i} className="w-1 h-1 rounded-full bg-gray-900" />
                    ))}
                    <div className="w-[1px] h-32 bg-gray-900" />
                    <span className="rotate-90 text-[10px] tracking-[1em] uppercase py-12">EST. 2024</span>
                </div>
            </div>
        </section>
    );
};

export default MeetFounders;


"use client"
import { useLayoutEffect, useRef } from "react"; // Changed useEffect to useLayoutEffect for better GSAP init
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { licenseSectionData } from "@/data/LicenseData";
import Container from "../Common/Layout/Contianer";
import Image from "next/image";
import SectionTag from "../Common/SectionTag";
import LicenseCategoryMobile from "../HomePage/LicenseCategoryMobile";

const LicenseCategorySection = () => {
    const containerRef = useRef(null);

    useLayoutEffect(() => {
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
                        scrollTrigger: {
                            trigger: card,
                            start: "top 85%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        }
    }, []);

    return (
        <section className="relative w-full py-10 md:py-20   overflow-hidden">



            <Container>
                {/* Header */}
                <div className="text-center mb-16 relative z-10 space-y-4">
                    <h2 className="text-3xl md:text-[2.5rem] font-bold text-white leading-tight max-w-lg mx-auto">
                        <span className="text-[#0099CC]">License</span> Category
                    </h2>
                    <p className=" max-w-2xl mx-auto text-base md:text-lg leading-relaxed ">
                        {licenseSectionData.description}
                    </p>
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

            {/* Decorative SVG Line Bottom Right (Desktop Only) */}


            <style jsx>{`
                @keyframes pulseSlow {
                    0%, 100% { transform: scale(1); opacity: 1; }
                    50% { transform: scale(1.05); opacity: 0.8; }
                }
                .animate-pulse-slow {
                    animation: pulseSlow 2s ease-in-out infinite;
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

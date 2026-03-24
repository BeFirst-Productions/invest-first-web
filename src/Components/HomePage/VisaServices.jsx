"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import Container from "../Common/Layout/Contianer";
import { visaSectionData } from "@/data/VisaData";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const VisaServices = () => {
    const sectionRef = React.useRef(null);
    const sliderRef = React.useRef(null);
    const [isPaused, setIsPaused] = React.useState(false);

    React.useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            gsap.from(".visa-header", {
                y: 30,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true
                }
            });

            gsap.from(".visa-slider", {
                y: 50,
                opacity: 0,
                duration: 1,
                delay: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                    once: true
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    // Refs for drag functionality
    const isDown = React.useRef(false);
    const startX = React.useRef(0);
    const scrollLeftStart = React.useRef(0);

    const isInView = React.useRef(true);

    React.useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                isInView.current = entry.isIntersecting;
            },
            { threshold: 0.1 }
        );
        if (sectionRef.current) observer.observe(sectionRef.current);
        return () => observer.disconnect();
    }, []);

    React.useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        let animationId;

        const animate = () => {
            if (!isPaused && isInView.current) {
                // If we've scrolled past the first set of items (halfway), reset to 0
                if (slider.scrollLeft >= slider.scrollWidth / 2) {
                    slider.scrollLeft = 0;
                } else {
                    slider.scrollLeft += 1;
                }
            }
            animationId = requestAnimationFrame(animate);
        };

        animationId = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationId);
    }, [isPaused]);

    // Drag Handlers
    const handleMouseDown = (e) => {
        isDown.current = true;
        startX.current = e.pageX - sliderRef.current.offsetLeft;
        scrollLeftStart.current = sliderRef.current.scrollLeft;
        setIsPaused(true);
    };

    const handleMouseLeave = () => {
        isDown.current = false;
        setIsPaused(false);
    };

    const handleMouseUp = () => {
        isDown.current = false;
    };

    const handleMouseMove = (e) => {
        if (!isDown.current) return;
        e.preventDefault();
        const x = e.pageX - sliderRef.current.offsetLeft;
        const walk = (x - startX.current) * 2; // scroll-fast speed
        sliderRef.current.scrollLeft = scrollLeftStart.current - walk;
    };

    return (
        <section ref={sectionRef} className="w-full py-16 md:py-24  ">
            <Container>
                {/* Header- Centered */}
                <div className="text-center mb-12 space-y-4 visa-header">
                    <h2 className="text-3xl md:text-4xl font-bold">{visaSectionData.heading}</h2>
                    <p className=" max-w-2xl mx-auto text-base md:text-lg">
                        {visaSectionData.description}
                    </p>
                </div>

                {/* Slider Container - Hybrid (Auto + Manual Drag) */}
                <div className="relative w-full overflow-hidden pb-12 pt-4 visa-slider">
                    <div
                        ref={sliderRef}
                        className="flex overflow-x-auto no-scrollbar gap-6 cursor-grab active:cursor-grabbing"
                        onMouseEnter={() => setIsPaused(true)}
                        onMouseLeave={handleMouseLeave}
                        onMouseDown={handleMouseDown}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}
                        onTouchStart={() => setIsPaused(true)}
                        onTouchEnd={() => setIsPaused(false)}
                    >
                        {/* Duplicate data for seamless looping */}
                        {[...visaSectionData.visaList, ...visaSectionData.visaList].map((visa, index) => (
                            <Link
                                key={`${visa.id}-${index}`}
                                href={visa.slug ? `/visa-services/${visa.slug}` : "/visa-services"}
                                className="relative w-[300px] md:w-[350px] shrink-0 flex flex-col group select-none cursor-pointer"
                            >
                                {/* 1. Top Image Section */}
                                <div className="relative h-80 w-full rounded-3xl overflow-hidden z-0">
                                    <Image
                                        src={visa.image}
                                        alt={visa.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-125 selection-none"
                                        draggable={false}
                                    />
                                    {/* Overlay for blending */}
                                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors" />
                                </div>

                                {/* 2. The Shape Connector (Hump) */}
                                <div className="relative w-full h-[126px] -mt-[70px] z-30 flex items-end justify-center">
                                    {/* Center Hump SVG */}
                                    <div className="relative w-full h-[126px] shrink-0">
                                        <svg width="100%" height="100%" viewBox="0 0 335 126" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                                            <mask id="path-1-inside-1_2757_8992" fill="white">
                                                <path d="M28.667 45C37.5035 45 44.667 37.8366 44.667 29V16C44.667 7.16344 51.8304 0 60.667 0H274.333C283.17 0 290.333 7.16344 290.333 16V29C290.333 37.8366 297.496 45 306.333 45H319C327.837 45 335 52.1634 335 61V110C335 118.837 327.837 126 319 126H16C7.16345 126 0 118.837 0 110V61C0 52.1634 7.16344 45 16 45H28.667Z" />
                                            </mask>
                                            <path d="M28.667 45C37.5035 45 44.667 37.8366 44.667 29V16C44.667 7.16344 51.8304 0 60.667 0H274.333C283.17 0 290.333 7.16344 290.333 16V29C290.333 37.8366 297.496 45 306.333 45H319C327.837 45 335 52.1634 335 61V110C335 118.837 327.837 126 319 126H16C7.16345 126 0 118.837 0 110V61C0 52.1634 7.16344 45 16 45H28.667Z" fill="#030F26" />
                                            <path d="M44.667 29H45.167V16H44.667H44.167V29H44.667ZM60.667 0V0.5H274.333V0V-0.5H60.667V0ZM290.333 16H289.833V29H290.333H290.833V16H290.333ZM306.333 45V45.5H319V45V44.5H306.333V45ZM335 61H334.5V110H335H335.5V61H335ZM319 126V125.5H16V126V126.5H319V126ZM0 110H0.5V61H0H-0.5V110H0ZM16 45V45.5H28.667V45V44.5H16V45ZM0 61H0.5C0.5 52.4396 7.43959 45.5 16 45.5V45V44.5C6.8873 44.5 -0.5 51.8873 -0.5 61H0ZM16 126V125.5C7.43959 125.5 0.5 118.56 0.5 110H0H-0.5C-0.5 119.113 6.8873 126.5 16 126.5V126ZM335 110H334.5C334.5 118.56 327.56 125.5 319 125.5V126V126.5C328.113 126.5 335.5 119.113 335.5 110H335ZM319 45V45.5C327.56 45.5 334.5 52.4396 334.5 61H335H335.5C335.5 51.8873 328.113 44.5 319 44.5V45ZM290.333 29H289.833C289.833 38.1127 297.22 45.5 306.333 45.5V45V44.5C297.773 44.5 290.833 37.5604 290.833 29H290.333ZM274.333 0V0.5C282.893 0.5 289.833 7.43959 289.833 16H290.333H290.833C290.833 6.8873 283.446 -0.5 274.333 -0.5V0ZM44.667 16H45.167C45.167 7.43958 52.1066 0.5 60.667 0.5V0V-0.5C51.5543 -0.5 44.167 6.8873 44.167 16H44.667ZM44.667 29H44.167C44.167 37.5604 37.2274 44.5 28.667 44.5V45V45.5C37.7797 45.5 45.167 38.1127 45.167 29H44.667Z" fill="#0099CC" mask="url(#path-1-inside-1_2757_8992)" />
                                        </svg>

                                        {/* Title and Description Overlay */}
                                        <div className="absolute inset-0 flex flex-col items-center justify-start pt-2 px-4 h-full text-center">
                                            <h3 className="text-xl font-semibold text-white whitespace-nowrap z-10">{visa.title}</h3>
                                            <div className="flex-1 flex items-center justify-center pb-2">
                                                <p className="text-gray-300 text-sm leading-relaxed line-clamp-3">
                                                    {visa.description}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>

                    <style jsx>{`
                        .no-scrollbar::-webkit-scrollbar {
                            display: none;
                        }
                        .no-scrollbar {
                            -ms-overflow-style: none;
                            scrollbar-width: none;
                        }
                    `}</style>
                </div>
            </Container>
        </section>
    );
};

export default VisaServices;

"use client";
import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Container from "../Common/Layout/Contianer";
import { freezoneData } from "@/data/FreezoneData";
import SectionTag from "../Common/SectionTag";
import { ArrowRight } from "lucide-react";

const FreezoneSection = () => {
    const [activeTab, setActiveTab] = useState(freezoneData.categories[0].id);
    const listRef = useRef(null);

    // Get the active category data
    const activeCategory = freezoneData.categories.find(cat => cat.id === activeTab);

    // Scroll to top when active tab changes
    useEffect(() => {
        if (listRef.current) {
            listRef.current.scrollTop = 0;
        }
    }, [activeTab]);

    return (
        <section className="py-10 md:py-20 text-white relative overflow-hidden">
            <div className="mx-4 md:mx-6 lg:mx-12 bg-linear-to-b from-[#14293A] to-[#0B223E] rounded-[40px] overflow-hidden relative">
                {/* Background Images */}
                <div className="hidden md:block  absolute inset-0 z-0 pointer-events-none">
                    {freezoneData.leftBgImage && (
                        <Image
                            src={freezoneData.leftBgImage}
                            alt="Background Left"
                            width={500}
                            height={800}
                            className="absolute left-0 top-0 h-full w-auto object-cover "
                        />
                    )}
                    {freezoneData.rightBgImage && (
                        <Image
                            src={freezoneData.rightBgImage}
                            alt="Background Right"
                            width={500}
                            height={800}
                            className="absolute right-0 top-0 h-full w-auto object-cover "
                        />
                    )}
                </div>
                {/* <Container> */}
                {/* Main Content Box */}
                <div className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 xl:px-[10%] w-full relative">

                    {/* Background Gradients */}

                    <div className="flex flex-col lg:flex-row justify-between w-full  relative z-10 h-full">
                        {/* Left Column: Navigation */}
                        <div className="lg:w-[40%] flex flex-col gap-8 lg:h-full">
                            <div>
                                <SectionTag text={freezoneData.subHeading} />
                                <h2 className="text-3xl md:text-4xl font-semibold mt-4 leading-10 max-w-2xl ">
                                    {freezoneData.heading}
                                </h2>
                            </div>

                            <div className="flex flex-col gap-3">
                                {freezoneData.categories.map((cat) => (
                                    <button
                                        key={cat.id}
                                        onClick={() => setActiveTab(cat.id)}
                                        className={`text-left px-6 py-4 rounded-2xl max-w-sm transition-all duration-300 flex items-center justify-between group w-full
                                            ${activeTab === cat.id
                                                ? "bg-[#3D0A24] border border-[#750444] shadow-lg shadow-[#750444]/20"
                                                : "hover:bg-white/5 text-gray-400 hover:text-white border border-transparent"
                                            }`}
                                    >
                                        <span className={`text-lg font-medium ${activeTab === cat.id ? "text-white" : ""}`}>
                                            {cat.name}
                                        </span>
                                        {activeTab === cat.id && (
                                            <ArrowRight className="w-5 h-5 text-white" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Right Column: Active Items List */}
                        <div className="lg:w-[60%] relative h-[600px] lg:h-[750px] mt-8 lg:mt-0">
                            <div
                                ref={listRef}
                                className="h-full overflow-y-auto no-scrollbar scroll-smooth pr-2 space-y-6 pb-20"
                            >
                                {activeCategory && activeCategory.items.map((item) => (
                                    <div
                                        key={item.id}
                                        className="relative w-full md:w-[400px] mx-auto shrink-0 flex flex-col group select-none animate-fadeIn"
                                    >
                                        {/* 1. Top Image Section */}
                                        <div className="relative h-96 w-full rounded-3xl overflow-hidden z-0">
                                            <Image
                                                src={item.image}
                                                alt={item.title}
                                                fill
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                                className="w-full h-full object-cover transition-transform duration-500 scale-110 group-hover:scale-125 selection-none"
                                                draggable={false}
                                            />
                                            {/* Overlay for blending */}
                                            <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors" />
                                        </div>

                                        {/* 2. The Shape Connector (Hump) */}
                                        <div className="relative w-full h-[126px] -mt-[105px] -mb-[2px] z-30 flex items-end justify-center">
                                            {/* Center Hump SVG */}
                                            <div className="relative w-full h-[126px] shrink-0">
                                                <svg
                                                    width="100%"
                                                    height="100%"
                                                    viewBox="0 0 335 126"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    preserveAspectRatio="none"
                                                    className="absolute bottom-0 left-0 w-full h-full"
                                                >
                                                    <mask id={`path-1-inside-1_2757_8992_${item.id}`} fill="white">
                                                        <path d="M28.667 45C37.5035 45 44.667 37.8366 44.667 29V16C44.667 7.16344 51.8304 0 60.667 0H274.333C283.17 0 290.333 7.16344 290.333 16V29C290.333 37.8366 297.496 45 306.333 45H319C327.837 45 335 52.1634 335 61V110C335 118.837 327.837 126 319 126H16C7.16345 126 0 118.837 0 110V61C0 52.1634 7.16344 45 16 45H28.667Z" />
                                                    </mask>
                                                    <path d="M28.667 45C37.5035 45 44.667 37.8366 44.667 29V16C44.667 7.16344 51.8304 0 60.667 0H274.333C283.17 0 290.333 7.16344 290.333 16V29C290.333 37.8366 297.496 45 306.333 45H319C327.837 45 335 52.1634 335 61V110C335 118.837 327.837 126 319 126H16C7.16345 126 0 118.837 0 110V61C0 52.1634 7.16344 45 16 45H28.667Z" fill="#000F2B" />
                                                    <path d="M44.667 29H45.167V16H44.667H44.167V29H44.667ZM60.667 0V0.5H274.333V0V-0.5H60.667V0ZM290.333 16H289.833V29H290.333H290.833V16H290.333ZM306.333 45V45.5H319V45V44.5H306.333V45ZM335 61H334.5V110H335H335.5V61H335ZM319 126V125.5H16V126V126.5H319V126ZM0 110H0.5V61H0H-0.5V110H0ZM16 45V45.5H28.667V45V44.5H16V45ZM0 61H0.5C0.5 52.4396 7.43959 45.5 16 45.5V45V44.5C6.8873 44.5 -0.5 51.8873 -0.5 61H0ZM16 126V125.5C7.43959 125.5 0.5 118.56 0.5 110H0H-0.5C-0.5 119.113 6.8873 126.5 16 126.5V126ZM335 110H334.5C334.5 118.56 327.56 125.5 319 125.5V126V126.5C328.113 126.5 335.5 119.113 335.5 110H335ZM319 45V45.5C327.56 45.5 334.5 52.4396 334.5 61H335H335.5C335.5 51.8873 328.113 44.5 319 44.5V45ZM290.333 29H289.833C289.833 38.1127 297.22 45.5 306.333 45.5V45V44.5C297.773 44.5 290.833 37.5604 290.833 29H290.333ZM274.333 0V0.5C282.893 0.5 289.833 7.43959 289.833 16H290.333H290.833C290.833 6.8873 283.446 -0.5 274.333 -0.5V0ZM44.667 16H45.167C45.167 7.43958 52.1066 0.5 60.667 0.5V0V-0.5C51.5543 -0.5 44.167 6.8873 44.167 16H44.667ZM44.667 29H44.167C44.167 37.5604 37.2274 44.5 28.667 44.5V45V45.5C37.7797 45.5 45.167 38.1127 45.167 29H44.667Z" fill="#0099CC" mask={`url(#path-1-inside-1_2757_8992_${item.id})`} />
                                                </svg>

                                                {/* Title and Description */}
                                                {/* Title and Description */}
                                                <div className="absolute inset-0 flex flex-col items-center justify-between pt-5 pb-6 px-10 text-center">
                                                    <h3 className="text-sm md:text-base font-semibold text-white leading-tight w-full max-w-[250px] line-clamp-2">
                                                        {item.title}
                                                    </h3>
                                                    <p className="text-gray-300 text-xs md:text-sm text-center leading-tight font-light font-outfit line-clamp-2 w-full">
                                                        {item.description}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* 3. Bottom Text Content */}

                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                {/* </Container> */}
            </div>
            <style jsx>{`
                .no-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .no-scrollbar {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-out forwards;
                }
            `}</style>
        </section>
    );
};

export default FreezoneSection;

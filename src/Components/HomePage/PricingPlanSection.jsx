"use client";
import React, { useState } from "react";
import Container from "../Common/Layout/Contianer";
import SectionTag from "../Common/SectionTag";
import PrimaryButton from "../Common/Buttons/PrimaryButton";
import { pricingData } from "../../data/PricingData";



const PricingCard = ({ item }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    const currentOption = item.options[selectedIndex];

    return (
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 group">

            {/* Left Side: Package Title */}
            <div className="lg:w-1/3 flex flex-col justify-start items-start w-full text-center">
                <h3 className="text-2xl md:text-3xl font-medium text-gray-300 relative inline-block pb-2 group-hover:text-white transition-colors duration-300">
                    {item.title}
                    <span className="absolute bottom-0 left-0 w-full h-[2px] bg-[#0099CC]"></span>
                </h3>
            </div>

            {/* Right Side: The Card (Desktop) */}
            <div className="lg:w-2/3 w-full hidden md:flex relative md:h-64 drop-shadow-2xl">

                {/* Dark Blue Part (Left) - SVG Version */}
                <div className="z-20 relative h-full w-[30%] md:w-[170px] shrink-0">
                    {/* Increased viewBox width/height and extended negative origin to prevent stroke clipping */}
                    <svg width="100%" height="100%" viewBox="0 -10 138 197" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" className="drop-shadow-lg">
                        <mask id={`path-1-inside-1_2942_9548_${item.id}`} fill="white">
                            <path d="M93 32C93 40.8366 100.163 48 109 48H122C130.837 48 138 55.1634 138 64V104C138 112.837 130.837 120 122 120H109C100.163 120 93 127.163 93 136V161C93 169.837 85.8366 177 77 177H16C7.16345 177 0 169.837 0 161V16C0 7.16344 7.16344 0 16 0H77C85.8366 0 93 7.16344 93 16V32Z" />
                        </mask>
                        <path d="M93 32C93 40.8366 100.163 48 109 48H122C130.837 48 138 55.1634 138 64V104C138 112.837 130.837 120 122 120H109C100.163 120 93 127.163 93 136V161C93 169.837 85.8366 177 77 177H16C7.16345 177 0 169.837 0 161V16C0 7.16344 7.16344 0 16 0H77C85.8366 0 93 7.16344 93 16V32Z" fill="#000F2B" />
                        <path d="M109 48V48.5H122V48V47.5H109V48ZM138 64H137.5V104H138H138.5V64H138ZM122 120V119.5H109V120V120.5H122V120ZM93 136H92.5V161H93H93.5V136H93ZM77 177V176.5H16V177V177.5H77V177ZM0 161H0.5V16H0H-0.5V161H0ZM16 0V0.5H77V0V-0.5H16V0ZM93 16H92.5V32H93H93.5V16H93ZM77 0V0.5C85.5604 0.5 92.5 7.43959 92.5 16H93H93.5C93.5 6.8873 86.1127 -0.5 77 -0.5V0ZM0 16H0.5C0.5 7.43958 7.43959 0.5 16 0.5V0V-0.5C6.8873 -0.5 -0.5 6.8873 -0.5 16H0ZM16 177V176.5C7.43959 176.5 0.5 169.56 0.5 161H0H-0.5C-0.5 170.113 6.8873 177.5 16 177.5V177ZM93 161H92.5C92.5 169.56 85.5604 176.5 77 176.5V177V177.5C86.1127 177.5 93.5 170.113 93.5 161H93ZM109 120V119.5C99.8873 119.5 92.5 126.887 92.5 136H93H93.5C93.5 127.44 100.44 120.5 109 120.5V120ZM138 104H137.5C137.5 112.56 130.56 119.5 122 119.5V120V120.5C131.113 120.5 138.5 113.113 138.5 104H138ZM122 48V48.5C130.56 48.5 137.5 55.4396 137.5 64H138H138.5C138.5 54.8873 131.113 47.5 122 47.5V48ZM109 48V47.5C100.44 47.5 93.5 40.5604 93.5 32H93H92.5C92.5 41.1127 99.8873 48.5 109 48.5V48Z" fill="#0099CC" mask={`url(#path-1-inside-1_2942_9548_${item.id})`} />
                    </svg>

                    {/* Content Overlay */}
                    <div className="absolute inset-0">
                        {/* Logo Image - Positioned at Top */}
                        <div className="absolute top-6 left-0 right-0 flex justify-center items-center pr-[50px]">
                            <div className="w-16 h-16 relative">
                                <img
                                    src={item.logoSrc}
                                    alt={item.logo}
                                    className="object-contain w-full h-full"
                                />
                            </div>
                        </div>

                        {/* Price Tag/Button - Positioned at Center */}
                        <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2 flex justify-center items-center z-30">
                            <div
                                style={{ background: 'linear-gradient(90deg, rgba(120,3,67,1.00) 0%,rgba(0,51,90,1.00) 100%)' }}
                                className="text-white px-5 py-2 rounded-full text-xs md:text-sm font-medium shadow-lg whitespace-nowrap"
                            >
                                {currentOption.price}
                            </div>
                        </div>
                    </div>
                </div>

                {/* White/Grey Part (Right) - SVG Version with Cutout */}
                <div className="grow relative h-full -ml-[45px] 2xl:-ml-[65px] z-10">
                    <svg width="100%" height="100%" viewBox="0 0 544 197" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
                        <g filter={`url(#filter0_d_2942_9552_${item.id})`}>
                            <path d="M522 10C528.627 10 534 15.3726 534 22V30C534 38.8366 526.837 46 518 46H508C499.163 46 492 53.1634 492 62V135C492 143.837 499.163 151 508 151H518C526.837 151 534 158.163 534 167V175C534 181.627 528.627 187 522 187H22C15.3726 187 10 181.627 10 175V153C10 144.163 17.1634 137 26 137H40C48.8366 137 56 129.837 56 121V66C56 57.1634 48.8366 50 40 50H26C17.1634 50 10 42.8366 10 34V22C10 15.3726 15.3726 10 22 10H522Z" fill="#F9F9F9" />
                        </g>
                        <defs>
                            <filter id={`filter0_d_2942_9552_${item.id}`} x="0" y="0" width="544" height="197" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset />
                                <feGaussianBlur stdDeviation="5" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2942_9552" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2942_9552" result="shape" />
                            </filter>
                        </defs>
                    </svg>

                    {/* Content Overlay */}
                    <div className="absolute inset-0 flex flex-row items-center justify-center p-4 pl-24 md:pl-0 pr-16 w-full h-full gap-8 xl:gap-28">

                        {/* Visa Buttons */}
                        <div className="flex flex-col gap-3">
                            {item.options.map((option, index) => (
                                <button
                                    key={index}
                                    onClick={() => setSelectedIndex(index)}
                                    className={`px-8 py-1.5 rounded-full text-sm font-medium border transition-colors whitespace-nowrap ${index === selectedIndex ? 'bg-[#1F6E8C] text-white border-[#1F6E8C]' : 'bg-transparent border-[#1F6E8C] text-gray-600 hover:bg-[#1F6E8C] hover:text-white'}`}
                                >
                                    {option.name}
                                </button>
                            ))}
                        </div>

                        {/* Features List with Animation */}
                        <div key={selectedIndex} className="flex flex-col gap-3 animate-fadeIn">
                            {currentOption.features.map((feature, fIndex) => (
                                <div key={fIndex} className="flex items-center gap-3">
                                    <div className="w-5 h-5 rounded-full bg-[#0B1527] flex items-center justify-center shrink-0">
                                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <span className="text-sm text-gray-800 font-medium whitespace-nowrap">{feature}</span>
                                </div>
                            ))}
                        </div>

                        {/* Vertical Button on Far Right */}
                        <div
                            className="absolute right-1 2xl:right-3 top-1/2 -translate-y-1/2 h-[124px] w-12 md:w-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#281549] transition-colors overflow-hidden group/btn shadow-lg"
                        >
                            <div className="transform -rotate-90 ">
                                <PrimaryButton
                                    text="Button"
                                    className="!mt-0 !px-6 !py-2 !bg-[linear-gradient(90deg,rgba(120,3,67,1)_0%,rgba(0,51,90,1)_100%)]"
                                />
                            </div>
                            {/* Hover Effect */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Mobile View Card (Vertical Stack) */}
            <div className="w-full md:hidden bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-200 mt-4">
                {/* Header */}
                <div className="bg-[#000F2B] p-6 flex flex-col items-center gap-4 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#0099CC]/10"></div>
                    {/* Logo & Price */}
                    <div className="flex justify-between w-full items-center relative z-10">
                        <div className="w-20 h-20 relative">
                            <img
                                src={item.logoSrc}
                                alt={item.logo}
                                className="object-contain w-full h-full"
                            />
                        </div>
                        <div
                            style={{ background: 'linear-gradient(90deg, rgba(120,3,67,1.00) 0%,rgba(0,51,90,1.00) 100%)' }}
                            className="text-white px-5 py-2 rounded-full text-sm font-medium shadow-lg"
                        >
                            {currentOption.price}
                        </div>
                    </div>
                </div>

                {/* Content */}
                <div className="p-6">
                    {/* Options */}
                    <div className="flex flex-wrap gap-2 mb-6 justify-center">
                        {item.options.map((option, index) => (
                            <button
                                key={index}
                                onClick={() => setSelectedIndex(index)}
                                className={`px-4 py-2 rounded-full text-xs font-medium border transition-colors whitespace-nowrap flex-grow text-center ${index === selectedIndex ? 'bg-[#1F6E8C] text-white border-[#1F6E8C]' : 'bg-transparent border-[#1F6E8C] text-gray-600'}`}
                            >
                                {option.name}
                            </button>
                        ))}
                    </div>

                    {/* Features */}
                    <div key={selectedIndex} className="space-y-3 mb-8 animate-fadeIn">
                        {currentOption.features.map((feature, fIndex) => (
                            <div key={fIndex} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-[#0B1527] flex items-center justify-center shrink-0 mt-0.5">
                                    <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <span className="text-sm text-gray-800 font-medium">{feature}</span>
                            </div>
                        ))}
                    </div>

                    {/* Button */}
                    <div className="w-full flex justify-center">
                        <PrimaryButton
                            text="Get Started"
                            className="!w-full !justify-center !bg-[linear-gradient(90deg,rgba(120,3,67,1)_0%,rgba(0,51,90,1)_100%)]"
                        />
                    </div>
                </div>
            </div>

            <style jsx>{`
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(5px); }
                    to { opacity: 1; transform: translateY(0); }
                }
                .animate-fadeIn {
                    animation: fadeIn 0.4s ease-out forwards;
                }
            `}</style>
        </div >
    );
};

const PricingPlanSection = () => {
    return (
        <section className="py-10 md:py-20 relative overflow-hidden "> {/* Dark background matching image */}
            <div className="absolute inset-0 pointer-events-none">
                {/* Optional background elements */}
            </div>

            <Container>
                {/* Header */}
                <div className="flex flex-col items-center text-center mb-16 relative z-10 text-white">
                    <SectionTag text="Pricing Plan" />
                    <h2 className="text-3xl md:text-5xl font-semibold mt-4 leading-tight">
                        Choose the Right <br /> Plan for You
                    </h2>
                </div>

                {/* Pricing List */}
                <div className="flex flex-col gap-16 relative z-10 w-full ">
                    {pricingData.map((item) => (
                        <PricingCard key={item.id} item={item} />
                    ))}

                    {/* Bottom Button */}
                    <div className="mt-8 flex justify-start">
                        <PrimaryButton
                            text="Button"
                        />
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default PricingPlanSection;

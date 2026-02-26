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
                    <svg width="100%" height="100%" viewBox="-2 -2 176 196" preserveAspectRatio="none" className="drop-shadow-lg" style={{ overflow: 'visible' }}>
                        {/* Main Fill Shape with Rounded Corners and Full Border */}
                        <path
                            d="M30,0 H90 Q110,0 110,20 V36 Q110,56 130,56 H140 Q160,56 160,76 V116 Q160,136 140,136 H130 Q110,136 110,156 V172 Q110,192 90,192 H30 Q0,192 0,162 V30 Q0,0 30,0 Z"
                            fill="#000F2B"
                            stroke="#0099CC"
                            strokeWidth="1.5"
                        />
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
                <div className="grow relative h-full -ml-[55px] z-10">
                    {/* Negative margin set to -55px for tighter overlap */}
                    {/* SVG for MD/LG screens (Deeper Cutout) */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-55 0 500 192"
                        preserveAspectRatio="none"
                        className="drop-shadow-lg xl:hidden"
                    >
                        <path
                            d="
      M-25,0
      H420
      Q440,0 440,20
      V22
      Q440,26 432,26
      H390
      Q380,26 380,36
      V156
      Q380,166 390,166
      H432
      Q440,166 440,172
      Q440,192 420,192
      H-25
      Q-45,192 -45,172
      V165
      Q-45,145 -22,145
      H-14
      Q-8,145 -10,130
      V70
      Q-8,50 -14,50
      H-22
      Q-45,50 -45,30
      V20
      Q-45,0 -25,0
      Z
    "
                            fill="#ffffff"
                        />
                    </svg>

                    {/* SVG for XL screens (Shallower Cutout, New Left) */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-55 0 500 192"
                        preserveAspectRatio="none"
                        className="drop-shadow-lg hidden xl:block 2xl:hidden"
                    >
                        <path
                            d="
      M-25,0
      H420
      Q440,0 440,20
      V22
      Q440,26 432,26
      H405
      Q395,26 395,36
      V156
      Q395,166 405,166
      H432
      Q440,166 440,172
      Q440,192 420,192
      H-25
      Q-45,192 -45,172
      V165
      Q-45,145 -22,145
      H-14
      Q-8,145 -10,130
      V70
      Q-8,50 -14,50
      H-22
      Q-45,50 -45,30
      V20
      Q-45,0 -25,0
      Z
    "
                            fill="#ffffff"
                        />
                    </svg>

                    {/* SVG for 2XL screens (Shallower Cutout, Original Left) */}
                    <svg
                        width="100%"
                        height="100%"
                        viewBox="-55 0 500 192"
                        preserveAspectRatio="none"
                        className="drop-shadow-lg hidden 2xl:block"
                    >
                        <path
                            d="
      M-35,0
      H420
      Q440,0 440,20
      V22
      Q440,26 432,26
      H405
      Q395,26 395,36
      V156
      Q395,166 405,166
      H432
      Q440,166 440,172
      Q440,192 420,192
      H-35
      Q-55,192 -55,172
      V165
      Q-55,145 -32,145
      H-24
      Q-18,145 -20,130
      V70
      Q-18,50 -24,50
      H-32
      Q-55,50 -55,30
      V20
      Q-55,0 -35,0
      Z
    "
                            fill="#ffffff"
                        />
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
                            className="absolute right-1 top-1/2 -translate-y-1/2 h-[124px] w-12 md:w-12 rounded-full flex items-center justify-center cursor-pointer hover:bg-[#281549] transition-colors overflow-hidden group/btn shadow-lg"
                        >
                            <div className="transform -rotate-90">
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

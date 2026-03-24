"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const MainlandOverview = () => {
    return (
        <section className="py-10 md:py-20">
            <Container>
                <div className="relative w-full  min-h-[400px]">
                    {/* SVG Background - Shown on desktop */}
                    <div className="absolute inset-0 w-full h-full hidden lg:block">
                        <svg
                            viewBox="0 0 1080 350"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="w-full h-full drop-shadow-2xl"
                            preserveAspectRatio="none"
                        >
                            <mask id="mainland-mask" fill="white">
                                <path d="M16 0C7.16344 0 0 7.16344 0 16V293C0 301.837 7.16344 309 16 309H32C40.8366 309 48 316.163 48 325V334C48 342.837 55.1634 350 64 350H1016C1024.84 350 1032 342.837 1032 334V325C1032 316.163 1039.16 309 1048 309H1064C1072.84 309 1080 301.837 1080 293V16C1080 7.16344 1072.84 0 1064 0H16Z" />
                            </mask>
                            <path d="M16 0C7.16344 0 0 7.16344 0 16V293C0 301.837 7.16344 309 16 309H32C40.8366 309 48 316.163 48 325V334C48 342.837 55.1634 350 64 350H1016C1024.84 350 1032 342.837 1032 334V325C1032 316.163 1039.16 309 1048 309H1064C1072.84 309 1080 301.837 1080 293V16C1080 7.16344 1072.84 0 1064 0H16Z" fill="#030B1B" />
                            <path d="M16 0.5C7.43959 0.5 0.5 7.43959 0.5 16V293C0.5 301.56 7.43959 308.5 16 308.5H32C40.5604 308.5 47.5 315.44 47.5 324V334C47.5 342.56 54.4396 349.5 63 349.5H1016C1024.56 349.5 1031.5 342.56 1031.5 334V324C1031.5 315.44 1038.44 308.5 1047 308.5H1064C1072.56 308.5 1079.5 301.56 1079.5 293V16C1079.5 7.43959 1072.56 0.5 1064 0.5H16Z" stroke="#0099CC" strokeOpacity="0.5" mask="url(#mainland-mask)" />
                        </svg>
                    </div>

                    {/* Mobile Background - Simplified rounded box for better fit */}
                    <div className="absolute inset-0 w-full h-full lg:hidden bg-[#030B1B] border border-[#0099CC]/30 rounded-4xl shadow-2xl"></div>

                    {/* Content Layer */}
                    <div className="relative z-10 px-8 md:px-16 lg:px-24 py-12 md:py-16 flex flex-col items-center justify-center text-center space-y-8">
                        <div className="max-w-7xl">
                            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                                A mainland company formation UAE is a business entity licensed by the Department of Economic Development of the respective emirate, allowing it to operate across the UAE and internationally without location restrictions. Mainland businesses can trade directly with the local market, work with government entities, and take on unlimited commercial projects.
                            </p>
                        </div>
                        
                        <div className="max-w-7xl">
                            <p className="text-white text-base md:text-lg lg:text-xl leading-relaxed font-medium">
                                Unlike free zone companies, mainland companies are not restricted to specific geographic zones and can open offices anywhere in the UAE. This structure provides greater operational flexibility, broader market access, and eligibility for government contracts and large corporate partnerships.
                            </p>
                        </div>

                        {/* Centered Short Horizontal Line */}
                        <div className="w-24 md:w-96 h-px bg-[#0099CC] opacity-60 mt-4"></div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MainlandOverview;

"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';
import Image from 'next/image';

const LicenseIntro = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20">
            <Container>
                <div className="relative w-full max-w-7xl mx-auto ">
                    {/* Top Image Container with Rounded Corners */}
                    <div className="relative w-full h-[300px] md:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden">
                        <Image
                            src={data.image || '/assets/images/license/professional-license-dubai.png'}
                            alt={data.titleHighlight}
                            fill
                            className="object-cover"
                            priority
                        />
                        {/* Subtle Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20" />
                    </div>

                    {/* Integrated Content Card */}
                    <div className="relative -mt-12 md:-mt-24 px-0 md:px-0">
                        <div className="relative w-full max-w-7xl mx-auto min-h-[300px]">
                            {/* SVG Background - Shown on desktop */}
                            <div className="absolute inset-0 w-full h-full hidden lg:block">
                                <svg
                                    viewBox="0 0 1080 286"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-full h-full drop-shadow-2xl"
                                    preserveAspectRatio="none"
                                >
                                    <mask id="path-1-inside-1_2040_8696" fill="white">
                                        <path d="M0 57C0 48.1635 7.16344 41 16 41H230C238.837 41 246 33.8366 246 25V16C246 7.16345 253.163 0 262 0H821C829.837 0 837 7.16345 837 16V25C837 33.8366 844.163 41 853 41H1064C1072.84 41 1080 48.1634 1080 57V270C1080 278.837 1072.84 286 1064 286H16C7.16342 286 0 278.837 0 270V57Z" />
                                    </mask>
                                    <path d="M0 57C0 48.1635 7.16344 41 16 41H230C238.837 41 246 33.8366 246 25V16C246 7.16345 253.163 0 262 0H821C829.837 0 837 7.16345 837 16V25C837 33.8366 844.163 41 853 41H1064C1072.84 41 1080 48.1634 1080 57V270C1080 278.837 1072.84 286 1064 286H16C7.16342 286 0 278.837 0 270V57Z" fill="#030B1B" />
                                    <path d="M16 41V41.5H230V41V40.5H16V41ZM246 25H246.5V16H246H245.5V25H246ZM262 0V0.5H821V0V-0.5H262V0ZM837 16H836.5V25H837H837.5V16H837ZM853 41V41.5H1064V41V40.5H853V41ZM1080 57H1079.5V270H1080H1080.5V57H1080ZM1064 286V285.5H16V286V286.5H1064V286ZM0 270H0.5V57H0H-0.5V270H0ZM16 286V285.5C7.43957 285.5 0.5 278.56 0.5 270H0H-0.5C-0.5 279.113 6.88728 286.5 16 286.5V286ZM1080 270H1079.5C1079.5 278.56 1072.56 285.5 1064 285.5V286V286.5C1073.11 286.5 1080.5 279.113 1080.5 270H1080ZM1064 41V41.5C1072.56 41.5 1079.5 48.4396 1079.5 57H1080H1080.5C1080.5 47.8873 1073.11 40.5 1064 40.5V41ZM837 25H836.5C836.5 34.1127 843.887 41.5 853 41.5V41V40.5C844.44 40.5 837.5 33.5604 837.5 25H837ZM821 0V0.5C829.56 0.5 836.5 7.43958 836.5 16H837H837.5C837.5 6.8873 830.113 -0.5 821 -0.5V0ZM246 16H246.5C246.5 7.43958 253.44 0.5 262 0.5V0V-0.5C252.887 -0.5 245.5 6.8873 245.5 16H246ZM230 41V41.5C239.113 41.5 246.5 34.1127 246.5 25H246H245.5C245.5 33.5604 238.56 40.5 230 40.5V41ZM16 41V40.5C6.8873 40.5 -0.5 47.8873 -0.5 57H0H0.5C0.5 48.4396 7.43959 41.5 16 41.5V41Z" fill="#0099CC" mask="url(#path-1-inside-1_2040_8696)" />
                                </svg>
                            </div>

                            {/* Mobile Background - Simplified rounded box for better fit */}
                            <div className="absolute inset-0 w-full h-full lg:hidden bg-[#030B1B] border border-[#0099CC]/30 rounded-4xl shadow-2xl"></div>

                            {/* Content Layer */}
                            <div className="relative z-10 px-5 md:px-12 lg:px-16 pt-10 lg:pt-0">
                                {/* Heading */}
                                <div className="text-center pt-2 md:pt-6 lg:pt-8 pb-6 md:pb-12">
                                    <div className="max-w-full lg:max-w-[60%] mx-auto">
                                        <h1 className="text-3xl md:text-4xl font-bold text-white tracking-tight leading-snug">
                                            <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleRest?.split('|')[0]}
                                        </h1>
                                        {data.titleRest?.includes('|') && (
                                            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight mt-2 md:mt-3">
                                                {data.titleRest.split('|')[1]}
                                            </h2>
                                        )}
                                        <div className="w-12 md:w-24 h-[2px] bg-[#0099CC]/60 mx-auto mt-4 rounded-full opacity-60"></div>
                                    </div>
                                </div>

                                {/* Description Content */}
                                <div className="max-w-5xl mx-auto space-y-4 md:space-y-8 pb-8 md:pb-16 text-center">
                                    <p className="text-gray-300 text-xs md:text-base lg:text-lg leading-relaxed font-normal">
                                        {data.description1}
                                    </p>
                                    {data.description2 && (
                                        <p className="text-gray-300 text-xs md:text-base lg:text-lg leading-relaxed font-normal">
                                            {data.description2}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LicenseIntro;

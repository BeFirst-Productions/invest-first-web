"use client";
import React from 'react';
import SectionContainer from '../layout/SectionContainer';
const ProServicesIntro = ({ data }) => {
    if (!data) return null;
    const intro = data;
    return (
        <SectionContainer className="py-10 md:py-20 text-black">
            <div className="  relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Left Column: Text Content */}
                    <div className="space-y-8">
                        <h1
                            className="text-3xl md:text-4xl font-semibold leading-tight tracking-wide text-black"
                            dangerouslySetInnerHTML={{ __html: intro.title }}
                        />
                        <div className="space-y-3 text-black text-sm md:text-base leading-relaxed font-light">
                            <p>{intro.description1}</p>
                            <p dangerouslySetInnerHTML={{ __html: intro.description2 }} />
                            <p>{intro.description3}</p>
                        </div>
                    </div>

                    {/* Right Column: Shape/Card */}
                    <div className="relative w-full flex items-center justify-center lg:justify-end">
                        <div className="relative w-full max-w-[500px] aspect-4/3 group">
                            {/* Custom SVG Shape with Gradient Border and Image */}
                            <svg
                                width="408"
                                height="357"
                                viewBox="0 0 408 357"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="w-full h-full drop-shadow-2xl"
                                preserveAspectRatio="none"
                            >
                                <defs>
                                    <linearGradient id="paint0_linear_2775_9061" x1="10" y1="190.533" x2="397.598" y2="190.533" gradientUnits="userSpaceOnUse">
                                        <stop stopColor="#780343" />
                                        <stop offset="1" stopColor="#00335A" />
                                    </linearGradient>
                                    <clipPath id="shape-clip">
                                        <path d="M397.598 325C397.598 334.941 389.539 343 379.598 343H28C18.0589 343 10 334.941 10 325V24C10 14.0589 18.0589 6 28 6H379.598C389.539 6 397.598 14.0589 397.598 24V325Z" />
                                    </clipPath>
                                </defs>

                                {/* Image masked by the shape */}
                                <g clipPath="url(#shape-clip)">
                                    <image
                                        href={intro.image}
                                        x="0"
                                        y="0"
                                        width="408"
                                        height="357"
                                        preserveAspectRatio="xMidYMid slice"
                                        className="transition-transform duration-700 group-hover:scale-110 object-cover"
                                    />
                                </g>
                            </svg>
                        </div>
                    </div>

                </div>
            </div>
        </SectionContainer>
    );
};

export default ProServicesIntro;

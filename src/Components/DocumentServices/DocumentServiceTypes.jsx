"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const DocumentServiceTypes = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20 relative overflow-hidden">
            {/* Background Decorations - Hidden on md/sm screens */}
            <div className="absolute top-0 right-0 hidden lg:block opacity-60 pointer-events-none animate-pulse duration-[3000ms]">
                <svg width="263" height="144" viewBox="0 0 263 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="190.675" cy="71.9988" r="36" transform="rotate(48.3829 190.675 71.9988)" fill="#1C7998" fill-opacity="0.6" />
                    <circle cx="190.674" cy="71.9992" r="49.5" transform="rotate(48.3829 190.674 71.9992)" stroke="url(#paint0_linear_2861_9031)" stroke-width="3" />
                    <circle cx="110.941" cy="114.745" r="14" transform="rotate(48.3829 110.941 114.745)" fill="#1C7998" fill-opacity="0.6" />
                    <circle cx="110.941" cy="114.745" r="13.5" transform="rotate(48.3829 110.941 114.745)" stroke="#1C7998" stroke-opacity="0.6" />
                    <ellipse cx="43.8461" cy="87.4037" rx="21" ry="23" transform="rotate(48.3829 43.8461 87.4037)" fill="#1C7998" fill-opacity="0.6" />
                    <path d="M66.6468 67.1469C77.041 78.8471 75.4357 97.4611 62.7733 108.71C50.1109 119.959 31.4375 119.36 21.0432 107.66C10.649 95.9598 12.2544 77.3458 24.9168 66.0968C37.5791 54.8479 56.2526 55.4466 66.6468 67.1469Z" stroke="url(#paint1_linear_2861_9031)" stroke-width="3" />
                    <circle cx="111.879" cy="26.9666" r="14" transform="rotate(48.3829 111.879 26.9666)" fill="#1C7998" fill-opacity="0.6" />
                    <circle cx="111.879" cy="26.9666" r="13.5" transform="rotate(48.3829 111.879 26.9666)" stroke="#1C7998" stroke-opacity="0.6" />
                    <defs>
                        <linearGradient id="paint0_linear_2861_9031" x1="139.674" y1="76.8518" x2="241.674" y2="76.8518" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#780343" />
                            <stop offset="1" stop-color="#00335A" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2861_9031" x1="21.6443" y1="66.9976" x2="61.4933" y2="111.854" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#780343" />
                            <stop offset="1" stop-color="#00335A" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <Container>
                {/* Header */}
                <div className="max-w-4xl mb-16 space-y-4">
                    <h2 className="text-3xl md:text-4xl font-semibold leading-tight">
                        {data.title} <span className="text-[#0099CC]">{data.highlight}</span>
                    </h2>
                    <p className="text-base md:text-lg leading-relaxed font-light">
                        {data.description}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {data.items?.map((item, index) => (
                        <div
                            key={index}
                            className="flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group hover:ring-2 hover:ring-cyan-500 hover:shadow-lg hover:shadow-cyan-500/20 hover:translate-y-[-5px]"
                        >
                            {/* Top Part */}
                            <div className="bg-[#00335A] p-6 lg:p-8 min-h-[130px] flex items-center">
                                <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                                    {item.title}
                                </h3>
                            </div>

                            {/* Bottom Part */}
                            <div className="bg-[#660033] p-6 lg:p-8 grow">
                                <p className="text-white/90 text-sm md:text-base leading-relaxed font-light">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default DocumentServiceTypes;

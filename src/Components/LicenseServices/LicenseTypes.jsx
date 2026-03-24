"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const LicenseTypes = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20  relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-20 right-[5%] w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-40 left-[5%] w-80 h-80 bg-purple-500/5 rounded-full blur-3xl -z-10" />

            {/* Circular decorative elements from image */}
            <div className="absolute top-[5%] right-0 hidden lg:block opacity-60 animate-[pulse_4s_ease-in-out_infinite]">
                <svg width="132" height="132" viewBox="0 0 132 132" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="14" cy="14" r="14" transform="matrix(-0.66415 0.7476 0.7476 0.66415 19.5391 87.7773)" fill="#1C7998" fillOpacity="0.6" />
                    <circle cx="14" cy="14" r="13.5" transform="matrix(-0.66415 0.7476 0.7476 0.66415 19.5391 87.7773)" stroke="#1C7998" strokeOpacity="0.6" />
                    <circle opacity="0.5" cx="9" cy="9" r="8.5" transform="matrix(-0.66415 0.7476 0.7476 0.66415 28.4297 106.379)" stroke="url(#paint0_linear_2902_9054)" />
                    <circle opacity="0.5" cx="6" cy="6" r="5.5" transform="matrix(-0.66415 0.7476 0.7476 0.66415 28.6797 110.613)" stroke="#1C7998" strokeOpacity="0.6" />
                    <ellipse cx="21" cy="23" rx="21" ry="23" transform="matrix(-0.66415 0.7476 0.7476 0.66415 84.5547 49.2266)" fill="#1C7998" fillOpacity="0.6" />
                    <path d="M65.0016 59.9437C54.6074 71.644 56.2128 90.258 68.8751 101.507C81.5375 112.756 100.211 112.157 110.605 100.457C120.999 88.7566 119.394 70.1426 106.732 58.8937C94.0693 47.6448 75.3958 48.2435 65.0016 59.9437Z" stroke="url(#paint1_linear_2902_9054)" strokeWidth="3" />
                    <circle cx="14" cy="14" r="14" transform="matrix(-0.66415 0.7476 0.7476 0.66415 18.6016 0)" fill="#1C7998" fillOpacity="0.6" />
                    <circle cx="14" cy="14" r="13.5" transform="matrix(-0.66415 0.7476 0.7476 0.66415 18.6016 0)" stroke="#1C7998" strokeOpacity="0.6" />
                    <defs>
                        <linearGradient id="paint0_linear_2902_9054" x1="0" y1="9.85634" x2="18" y2="9.85634" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#780343" />
                            <stop offset="1" stopColor="#00335A" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2902_9054" x1="110.004" y1="59.7945" x2="70.1552" y2="104.65" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#780343" />
                            <stop offset="1" stopColor="#00335A" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <div className="absolute bottom-[5%] left-0 hidden lg:block opacity-60 animate-[pulse_6s_ease-in-out_infinite]">
                <svg width="263" height="144" viewBox="0 0 263 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="190.683" cy="71.9988" r="36" transform="rotate(48.3829 190.683 71.9988)" fill="#1C7998" fillOpacity="0.6" />
                    <circle cx="190.682" cy="71.9992" r="49.5" transform="rotate(48.3829 190.682 71.9992)" stroke="url(#paint0_linear_2902_9080)" strokeWidth="3" />
                    <circle cx="110.949" cy="114.745" r="14" transform="rotate(48.3829 110.949 114.745)" fill="#1C7998" fillOpacity="0.6" />
                    <circle cx="110.949" cy="114.745" r="13.5" transform="rotate(48.3829 110.949 114.745)" stroke="#1C7998" strokeOpacity="0.6" />
                    <ellipse cx="43.8539" cy="87.4037" rx="21" ry="23" transform="rotate(48.3829 43.8539 87.4037)" fill="#1C7998" fillOpacity="0.6" />
                    <path d="M66.6546 67.1469C77.0488 78.8471 75.4435 97.4611 62.7811 108.71C50.1188 119.959 31.4453 119.36 21.0511 107.66C10.6569 95.9598 12.2622 77.3458 24.9246 66.0968C37.587 54.8479 56.2604 55.4466 66.6546 67.1469Z" stroke="url(#paint1_linear_2902_9080)" strokeWidth="3" />
                    <circle cx="111.886" cy="26.9666" r="14" transform="rotate(48.3829 111.886 26.9666)" fill="#1C7998" fillOpacity="0.6" />
                    <circle cx="111.886" cy="26.9666" r="13.5" transform="rotate(48.3829 111.886 26.9666)" stroke="#1C7998" strokeOpacity="0.6" />
                    <defs>
                        <linearGradient id="paint0_linear_2902_9080" x1="139.682" y1="76.8518" x2="241.682" y2="76.8518" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#780343" />
                            <stop offset="1" stopColor="#00335A" />
                        </linearGradient>
                        <linearGradient id="paint1_linear_2902_9080" x1="21.6521" y1="66.9976" x2="61.5011" y2="111.854" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#780343" />
                            <stop offset="1" stopColor="#00335A" />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            <Container>
                <div className="">
                    {/* Section Header */}
                    <div className="text-center mb-16 md:mb-20">
                        <h2 className="text-3xl md:text-4xl  font-semibold text-white leading-tight">
                            <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleRest}
                        </h2>
                    </div>

                    {/* Staggered Row Layout */}
                    <div className="relative flex flex-col gap-10 md:gap-16">
                        {data.types.map((type, index) => (
                            <div
                                key={type.id}
                                className={`w-full flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}
                            >
                                <div className="w-full md:w-[85%] bg-[#000F2B] backdrop-blur-sm border border-[#0099CC]/20 rounded-2xl px-5 py-8 md:p-12 hover:border-2 hover:border-[#0099CC]/50 transition-all duration-500 shadow-xl group">
                                    {/* Number and Title */}
                                    <h3 className="text-[#0099CC] text-xl md:text-2xl lg:text-3xl font-bold mb-5 leading-tight">
                                        {type.id}. {type.title}
                                    </h3>

                                    {/* Description */}
                                    <p className=" text-base md:text-lg mb-10 leading-relaxed max-w-5xl">
                                        {type.description}
                                    </p>

                                    {/* Points List */}
                                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-5 gap-x-10">
                                        {type.points.map((point, idx) => (
                                            <div key={idx} className="flex items-start gap-4">
                                                <span className="w-2 h-2 rounded-full bg-[#FF1F5D] mt-2.5 flex-shrink-0" />
                                                <span className="text-white text-sm md:text-base lg:text-lg font-medium">
                                                    {point}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LicenseTypes;

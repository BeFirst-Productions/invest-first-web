"use client";
import React from "react";
import Image from "next/image";
import Container from "../Common/Layout/Contianer";

const VATRegistration = ({ data }) => {
    if (!data) return null;

    return (
        <section className="pt-10 md:pt-20 text-white overflow-hidden">
            <Container>
                {/* Header */}
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-2xl md:text-3xl lg:text-[2rem] font-semibold leading-tight max-w-4xl mx-auto">
                            {data.title.start} <span className="text-[#0099CC]">{data.title.highlight}</span><br />
                            <span className="text-[#0099CC]">{data.title.highlight2}</span> <span className="text-white">{data.title.end}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] items-stretch justify-center gap-6 lg:gap-0 max-w-[1240px] mx-auto min-h-fit lg:min-h-[400px]">
                        {/* Left Side: Image */}
                        <div className="relative z-10 flex flex-col h-full order-1">
                            {/* SVG Design (Desktop/LG Only) */}
                            <div className="relative w-full grow hidden bottom-0 lg:bottom-1.5 lg:block">
                                <svg
                                    viewBox="0 0 560 391"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-full h-[105%] drop-shadow-2xl"
                                    preserveAspectRatio="none"
                                >
                                    <defs>
                                        <pattern id="imagePattern" x="0" y="0" width="1" height="1" patternContentUnits="objectBoundingBox">
                                            <image
                                                href={data.image || "/assets/images/about/about.webp"}
                                                preserveAspectRatio="xMidYMid slice"
                                                width="1"
                                                height="1"
                                            />
                                        </pattern>
                                        <linearGradient id="leftBorderGrad" x1="10" y1="209.15" x2="550" y2="209.15" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#780343" />
                                            <stop offset="1" stopColor="#00335A" />
                                        </linearGradient>
                                        <filter id="filter0_d_3080_9139" x="0" y="0" width="560" height="391" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_3080_9139" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_3080_9139" result="shape" />
                                        </filter>
                                    </defs>
                                    <g filter="url(#filter0_d_3080_9139)">
                                        <path
                                            d="M550 30C550 39.9411 541.941 48 532 48H527C517.059 48 509 56.0589 509 66V316C509 325.941 517.059 334 527 334H532C541.941 334 550 342.059 550 352V359C550 368.941 541.941 377 532 377H28C18.0589 377 10 368.941 10 359V24C10 14.0589 18.0589 6 28 6H532C541.941 6 550 14.0589 550 24V30Z"
                                            fill="url(#imagePattern)"
                                        />
                                        <path
                                            d="M532 48V47H527V48V49H532V48ZM509 66H508V316H509H510V66H509ZM527 334V335H532V334V333H527V334ZM550 352H549V359H550H551V352H550ZM532 377V376H28V377V378H532V377ZM10 359H11V24H10H9V359H10ZM28 6V7H532V6V5H28V6ZM550 24H549V30H550H551V24H550ZM532 6V7C541.389 7 549 14.6112 549 24H550H551C551 13.5066 542.493 5 532 5V6ZM10 24H11C11 14.6112 18.6112 7 28 7V6V5C17.5066 5 9 13.5066 9 24H10ZM28 377V376C18.6112 376 11 368.389 11 359H10H9C9 369.493 17.5066 378 28 378V377ZM550 359H549C549 368.389 541.389 376 532 376V377V378C542.493 378 551 369.493 551 359H550ZM532 334V335C541.389 335 549 342.611 549 352H550H551C551 341.507 542.493 333 532 333V334ZM509 316H508C508 326.493 516.507 335 527 335V334V333C517.611 333 510 325.389 510 316H509ZM527 48V47C516.507 47 508 55.5066 508 66H509H510C510 56.6112 517.611 49 527 49V48ZM532 48V49C542.493 49 551 40.4934 551 30H550H549C549 39.3888 541.389 47 532 47V48Z"
                                            fill="url(#leftBorderGrad)"
                                        />
                                    </g>
                                </svg>
                            </div>
                            {/* Normal Image (MD/SM Only) */}
                            <div className="lg:hidden relative w-full h-[300px] md:h-[400px] rounded-2xl overflow-hidden border border-[#0099CC]/20">
                                <Image
                                    src={data.image || "/assets/images/about/about.webp"}
                                    alt={data.title.highlight}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>

                        {/* Right Side: Text Content */}
                        <div className="relative z-20 lg:-ml-10 flex flex-col h-full order-2">
                            <div className="relative w-full grow flex items-center lg:bg-transparent bg-[#000F2B] rounded-2xl border border-[#0099CC]/20 lg:border-none">
                                {/* SVG Background (Desktop/LG Only) */}
                                <svg
                                    viewBox="0 0 577 371"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="absolute inset-0 w-full h-full pointer-events-none hidden lg:block"
                                    preserveAspectRatio="none"
                                >
                                    <path
                                        d="M56.6484 371C47.8119 371 40.6484 363.837 40.6484 355V340C40.6484 331.163 33.485 324 24.6484 324H16C7.16345 324 0 316.837 0 308V62C0 53.1635 7.16345 46 16 46H26.5938C35.4303 46 42.5938 38.8365 42.5938 30V16C42.5938 7.16345 49.7572 0 58.5938 0H561C569.837 0 577 7.16345 577 16V355C577 363.837 569.837 371 561 371H56.6484Z"
                                        fill="#000F2B"
                                    />
                                    <path
                                        d="M40.6484 355H41.1484V340H40.6484H40.1484V355H40.6484ZM24.6484 324V323.5H16V324V324.5H24.6484V324ZM0 308H0.5V62H0H-0.5V308H0ZM16 46V46.5H26.5938V46V45.5H16V46ZM42.5938 30H43.0938V16H42.5938H42.0938V30H42.5938ZM58.5938 0V0.5H561V0V-0.5H58.5938V0ZM577 16H576.5V355H577H577.5V16H577ZM561 371V370.5H56.6484V371V371.5H561V371ZM577 355H576.5C576.5 363.56 569.56 370.5 561 370.5V371V371.5C570.113 371.5 577.5 364.113 577.5 355H577ZM561 0V0.5C569.56 0.5 576.5 7.43958 576.5 16H577H577.5C577.5 6.8873 570.113 -0.5 561 -0.5V0ZM42.5938 16H43.0938C43.0938 7.43958 50.0333 0.5 58.5938 0.5V0V-0.5C49.4811 -0.5 42.0938 6.8873 42.0938 16H42.5938ZM26.5938 46V46.5C35.7064 46.5 43.0938 39.1127 43.0938 30H42.5938H42.0938C42.0938 38.5604 35.1542 45.5 26.5938 45.5V46ZM0 62H0.5C0.5 53.4396 7.43958 46.5 16 46.5V46V45.5C6.88733 45.5 -0.5 52.8873 -0.5 62H0ZM16 324V323.5C7.43958 323.5 0.5 316.56 0.5 308H0H-0.5C-0.5 317.113 6.88733 324.5 16 324.5V324ZM40.6484 340H41.1484C41.1484 330.887 33.7611 323.5 24.6484 323.5V324V324.5C33.2089 324.5 40.1484 331.44 40.1484 340H40.1484ZM40.6484 355H40.1484C40.1484 364.113 47.5357 371.5 56.6484 371.5V371V370.5C48.088 370.5 41.1484 363.56 41.1484 355H40.6484Z"
                                        fill="#0099CC"
                                    />
                                </svg>

                                {/* Text Content */}
                                <div className="relative z-30 p-6 md:p-8 lg:pl-12 lg:pr-8  text-base  md:text-lg leading-relaxed space-y-4 md:space-y-6 flex flex-col justify-center grow h-full">
                                    {data.paragraphs.map((p, idx) => (
                                        <p key={idx}>{p}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default VATRegistration;

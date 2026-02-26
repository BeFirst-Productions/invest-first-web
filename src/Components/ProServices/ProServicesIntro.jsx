"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const ProServicesIntro = ({ data }) => {
    if (!data) return null;
    const intro = data;

    return (
        <section className="relative w-full py-10 md:py-20 overflow-hidden text-white">
            {/* Background gradients/effects */}
            <Container>

                <div className="  relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                        {/* Left Column: Text Content */}
                        <div className="space-y-8">
                            <h1
                                className="text-3xl md:text-4xl font-semibold leading-tight tracking-wide"
                                dangerouslySetInnerHTML={{ __html: intro.title }}
                            />

                            <div className="space-y-3 text-gray-300 text-sm md:text-base leading-relaxed font-light">
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
                                        <filter id="filter0_d_2775_9061" x="0" y="0" width="407.594" height="357" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                                            <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                            <feOffset dy="4" />
                                            <feGaussianBlur stdDeviation="5" />
                                            <feComposite in2="hardAlpha" operator="out" />
                                            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
                                            <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_2775_9061" />
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_2775_9061" result="shape" />
                                        </filter>
                                        <linearGradient id="paint0_linear_2775_9061" x1="10" y1="190.533" x2="397.598" y2="190.533" gradientUnits="userSpaceOnUse">
                                            <stop stopColor="#780343" />
                                            <stop offset="1" stopColor="#00335A" />
                                        </linearGradient>
                                        <clipPath id="shape-clip">
                                            <path d="M397.598 325C397.598 334.941 389.539 343 379.598 343H28C18.0589 343 10 334.941 10 325V69.2686C10 59.3274 18.0589 51.2686 28 51.2686H119.606C129.548 51.2686 137.606 43.2097 137.606 33.2686V24C137.606 14.0589 145.665 6 155.606 6H379.598C389.539 6 397.598 14.0589 397.598 24V325Z" />
                                        </clipPath>
                                    </defs>

                                    <g filter="url(#filter0_d_2775_9061)">
                                        <mask id="path-1-inside-1_2775_9061" fill="white">
                                            <path d="M397.598 325C397.598 334.941 389.539 343 379.598 343H28C18.0589 343 10 334.941 10 325V69.2686C10 59.3274 18.0589 51.2686 28 51.2686H119.606C129.548 51.2686 137.606 43.2097 137.606 33.2686V24C137.606 14.0589 145.665 6 155.606 6H379.598C389.539 6 397.598 14.0589 397.598 24V325Z" />
                                        </mask>

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

                                        <path d="M397.598 325C397.598 334.941 389.539 343 379.598 343H28C18.0589 343 10 334.941 10 325V69.2686C10 59.3274 18.0589 51.2686 28 51.2686H119.606C129.548 51.2686 137.606 43.2097 137.606 33.2686V24C137.606 14.0589 145.665 6 155.606 6H379.598C389.539 6 397.598 14.0589 397.598 24V325Z" fill="#C4C4C4" fillOpacity="0" />
                                        <path d="M379.598 343V340H28V343V346H379.598V343ZM10 325H13V69.2686H10H7V325H10ZM28 51.2686V54.2686H119.606V51.2686V48.2686H28V51.2686ZM137.606 33.2686H140.606V24H137.606H134.606V33.2686H137.606ZM155.606 6V9H379.598V6V3H155.606V6ZM397.598 24H394.598V325H397.598H400.598V24H397.598ZM379.598 6V9C387.882 9 394.598 15.7157 394.598 24H397.598H400.598C400.598 12.402 391.196 3 379.598 3V6ZM137.606 24H140.606C140.606 15.7157 147.322 9 155.606 9V6V3C144.008 3 134.606 12.402 134.606 24H137.606ZM119.606 51.2686V54.2686C131.204 54.2686 140.606 44.8665 140.606 33.2686H137.606H134.606C134.606 41.5528 127.891 48.2686 119.606 48.2686V51.2686ZM10 69.2686H13C13 60.9843 19.7157 54.2686 28 54.2686V51.2686V48.2686C16.402 48.2686 7 57.6706 7 69.2686H10ZM28 343V340C19.7157 340 13 333.284 13 325H10H7C7 336.598 16.402 346 28 346V343ZM379.598 343V346C391.196 346 400.598 336.598 400.598 325H397.598H394.598C394.598 333.284 387.882 340 379.598 340V343Z" fill="url(#paint0_linear_2775_9061)" mask="url(#path-1-inside-1_2775_9061)" />
                                    </g>
                                </svg>
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default ProServicesIntro;

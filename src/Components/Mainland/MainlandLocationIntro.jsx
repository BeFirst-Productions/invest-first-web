"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';
import Image from 'next/image';

const MainlandLocationIntro = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-12 md:py-28 overflow-hidden">
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
                    {/* Left Side: Image with Content Overlay (Like the design) */}
                    <div className="relative group h-full">
                        {/* Glowing Border Background */}
                        <div className="absolute -inset-1 rounded-4xl bg-gradient-to-r from-[#841257] to-[#0099CC] opacity-20 group-hover:opacity-40 blur transition duration-1000 group-hover:duration-200"></div>
                        
                        <div className="relative h-full min-h-[400px] w-full rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                            {/* Main Image */}
                            <Image
                                src={data.image}
                                alt={data.titleHighlight}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right Side: Content */}
                    <div className="flex flex-col justify-start space-y-8 h-full pt-4">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                            {data.titleHighlight} <span className="text-[#0099CC]">{data.titleRest}</span>
                        </h2>
                        
                        <div className="space-y-6">
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium">
                                {data.description1}
                            </p>
                            <p className="text-gray-300 text-base md:text-lg leading-relaxed font-medium border-l-4 border-[#841257] pl-6 py-2 bg-white/5 rounded-r-xl">
                                {data.description2}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MainlandLocationIntro;

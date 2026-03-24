"use client";
import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';
import { freezoneData } from '@/data/FreezoneData';

const FreezoneLicenseTypes = () => {
    return (
        <section className="py-10 md:py-20 relative overflow-hidden">
            <Container>
                {/* Section Title with teal highlight */}
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-12 flex flex-col md:flex-row gap-2 leading-tight">
                    <span className="text-[#0099CC]">Types of</span> 
                    <span>Free Zone Licenses in UAE</span>
                </h2>
                
                {/* Horizontal Licenses Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-4 w-full">
                    {freezoneData.licenseTypes.map((license) => (
                        <div 
                            key={license.id} 
                            className="group flex flex-col bg-[#F9F9F9] rounded-[24px] md:rounded-[30px] overflow-hidden shadow-2xl transition-all duration-500 hover:translate-y-[-8px]"
                        >
                            {/* Visual Header: Image with Badge Overlay */}
                            <div className="relative h-60 md:h-64 lg:h-72 w-full overflow-hidden">
                                <Image
                                    src={license.image}
                                    alt={license.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                    className="object-cover transition-transform duration-1000 group-hover:scale-110"
                                />
                                {/* Blue Title Badge Overlay on top of image */}
                               
                                {/* Dark overlay for better badge readability */}
                                <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0"></div>
                            </div>
                            
                            {/* Descriptive Section below the image */}
                            <div className="p-6 md:p-8 flex flex-col grow min-h-[140px] md:min-h-[160px]">
                                <h3 className="text-[#AA0256] text-lg md:text-xl font-semibold mb-4 tracking-normal">
                                    {license.title}
                                </h3>
                                <p className="text-[#00335A] text-sm md:text-base leading-relaxed font-outfit">
                                    {license.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default FreezoneLicenseTypes;

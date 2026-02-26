"use client";
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Container from '../Common/Layout/Contianer';
import { proServicesData } from '@/data/ProServicesData';

const ProServicesSection = () => {
    return (
        <section className="py-10 md:py-20 relative overflow-hidden ">
            <Container>
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-[2.5rem] font-bold bg-clip-text text-transparent bg-linear-to-r from-cyan-500 to-white">
                        <span className="text-[#0099CC] ">{proServicesData.title.highlight}</span> <span className="text-white">{proServicesData.title.rest}</span>
                    </h2>
                    <p className=" max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
                        {proServicesData.description}
                    </p>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 mb-16">
                    {proServicesData.services.map((service) => (
                        <Link href={service.href} key={service.id} className="group flex flex-col items-center">
                            {/* Card Image Container */}
                            <div className="relative w-full aspect-4/3 rounded-3xl overflow-hidden mb-6  transition-colors duration-300">
                                {/* Use a placeholder if image fails or is missing */}
                                <div className="absolute inset-0 ">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                        onError={(e) => {
                                            // Fallback for missing images during dev
                                            e.target.style.display = 'none';
                                            e.target.parentElement.classList.add('flex', 'items-center', 'justify-center', 'bg-gray-800');
                                            e.target.parentElement.innerHTML = '<span class="text-gray-500 text-sm">Image Placeholder</span>';
                                        }}
                                    />
                                    {/* Gradient Overlay */}
                                </div>
                            </div>

                            {/* Title */}
                            <h3 className="text-xl md:text-2xl font-semibold text-[#0099CC] group-hover:text-white transition-colors duration-300 text-center">
                                {service.title}
                            </h3>
                        </Link>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="text-center">
                    <p className=" max-w-3xl mx-auto text-sm md:text-base leading-relaxed">
                        {proServicesData.footerText}
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default ProServicesSection;

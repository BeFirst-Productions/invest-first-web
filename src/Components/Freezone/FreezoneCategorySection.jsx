"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';
import { freezoneData } from '@/data/FreezoneData';

const FreezoneCategorySection = () => {
    // Initializing state with the first category ID (e.g., 'dubai')
    const [activeTab, setActiveTab] = useState(freezoneData.categories[0].id);

    // Finding the active category object based on the state
    const activeCategory = freezoneData.categories.find(cat => cat.id === activeTab);

    return (
        <section className="py-10 md:py-20  bg-[#000F2B]">
            <Container>
                <div className="flex flex-col items-center">
                    {/* Section Title */}
                    <h2 className="text-3xl md:text-4xl  font-semibold text-white mb-12 text-center">
                        Freezones Services
                    </h2>
                    
                    {/* Tab Navigation Row */}
                    <div className="flex flex-wrap justify-center items-center gap-y-4 mb-16 bg-[#030B1B]/50 p-1.5 rounded-2xl border border-white/5">
                        {freezoneData.categories.map((cat, idx) => (
                            <React.Fragment key={cat.id}>
                                <button
                                    onClick={() => setActiveTab(cat.id)}
                                    className={`px-5 py-2.5 rounded-xl transition-all duration-300 text-sm md:text-base font-medium
                                        ${activeTab === cat.id 
                                            ? 'bg-[#0099CC] text-white shadow-lg shadow-[#0099CC]/20' 
                                            : 'text-white/60 hover:text-white'}`}
                                >
                                    {cat.name}
                                </button>
                                {/* Vertical Separator Displayed between tabs on larger screens */}
                                {idx < freezoneData.categories.length - 1 && (
                                    <div className="hidden lg:block w-[1.5px] h-6 bg-white/10 mx-1"></div>
                                )}
                            </React.Fragment>
                        ))}
                    </div>

                    {/* Individual Freezone Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 w-full max-w-[1440px] mx-auto">
                        {activeCategory?.items.map((item) => (
                            <div 
                                key={item.id} 
                                className="group flex flex-col bg-[#660033] rounded-[30px] overflow-hidden shadow-2xl transition-all duration-500 hover:translate-y-[-8px]"
                            >
                                {/* Top Image Section */}
                                <div className="relative h-56 md:h-64 lg:h-72 w-full overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Subtle gradient overlay to blend image with bottom area */}
                                    <div className="absolute inset-0 bg-linear-to-t from-[#660033]/30 to-transparent"></div>
                                </div>
                                
                                {/* Bottom Text Content */}
                                <div className="p-6 md:p-7 flex flex-col grow min-h-[160px]">
                                    <h3 className="text-white text-lg md:text-xl  mb-3 leading-tight tracking-wide">
                                        {item.title}
                                    </h3>
                                    <p className="text-white/80 text-sm md:text-base leading-relaxed font-outfit line-clamp-3">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FreezoneCategorySection;

"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const MainlandFeatures = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20">
            <Container>
                {/* Key Features Section */}
                <div className="mb-16">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-white mb-10">
                        <span className="text-[#0099CC]">Key Features</span> of a Mainland Company in the UAE
                    </h2>
                    <div className="grid grid-cols-1 gap-4">
                        {data.keyFeatures?.map((feature, idx) => (
                            <div key={idx} className="flex items-center gap-3">
                                <div className="border-[2px] border-[#0099CC] w-4.5 h-4.5 rounded-full bg-[#660033] shadow-[0_0_10px_rgba(132,18,87,1)] shrink-0"></div>
                                <p className="text-gray-200 text-sm md:text-base lg:text-lg font-medium">
                                    {feature}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Two Column Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch mt-12">
                    {/* Left Box: Types of Mainland Licenses */}
                    <div className="relative group">
                        {/* Box with Teal/Blue glow border */}
                        <div className="absolute inset-0  border border-[#0099CC] rounded-4xl -z-10 group-hover:border-[#0099CC]/60 transition-colors duration-300 shadow-2xl"></div>
                        <div className="p-8 md:p-10 lg:p-12 space-y-8">
                            <h3 className="text-2xl md:text-3xl  font-semibold text-white">
                                Types of Mainland Licenses
                            </h3>
                            <div className="space-y-6">
                                {data.typesOfLicenses?.map((license, idx) => (
                                    <div key={idx} className="space-y-1">
                                        <h4 className="text-[#0099CC] text-lg md:text-xl lg:text-2xl font-bold">
                                            {license.title}
                                        </h4>
                                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                            {license.description}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Box: Benefits of Mainland Company Formation */}
                    <div className="bg-[#660033] rounded-4xl p-8 md:p-10 lg:p-12 shadow-2xl flex flex-col justify-center">
                        <h3 className="text-2xl md:text-3xl  font-semibold text-white mb-8">
                            <span className="text-[#0099CC]">Benefits</span> of Mainland Company Formation
                        </h3>
                        <div className="space-y-4">
                            {data.mainlandBenefits?.map((benefit, idx) => (
                                <div key={idx} className="flex items-center gap-3 lg:gap-4">
                                    <div className="w-3 h-3 rounded-full bg-white shrink-0"></div>
                                    <p className="text-white text-sm md:text-base lg:text-lg font-medium">
                                        {benefit}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MainlandFeatures;

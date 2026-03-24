"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const MainlandLicenseTypes = ({ data }) => {
    if (!data?.typesOfLicenses) return null;

    const { titleHighlight, titleRest, typesOfLicenses } = data;

    return (
        <section className="py-10 md:py-20">
            <Container>
                {/*
                  Card structure:
                  - Dark navy background
                  - Cyan LEFT border (full height)
                  - Cyan BOTTOM border (full width)
                  - No top / right border (matches the image)
                  - Title inside at the top, then a divider, then license list
                */}
                <div className="relative rounded-2xl overflow-hidden shadow-2xl"
                    style={{
                        background: 'linear-gradient(135deg, #0a1628 0%, #060d1f 100%)',
                        boxShadow: '-3px 0 0 #0099CC, 0 3px 0 #0099CC, -3px 3px 0 #0099CC',
                        borderRadius: '1rem'
                    }}
                >
                    <div className="px-8 md:px-12 py-8 md:py-10">
                        {/* Title */}
                        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-6">
                            <span className="text-[#0099CC]">{titleHighlight || 'Types of'}</span>{' '}
                            {titleRest || 'Mainland Licenses'}
                        </h2>

                        {/* Horizontal divider below title */}
                        <div className="w-full h-px bg-white/15 mb-7" />

                        {/* License list */}
                        <div className="space-y-6">
                            {typesOfLicenses.map((license, idx) => (
                                <div key={idx} className="space-y-1">
                                    <h3 className="text-[#0099CC] text-sm md:text-base font-bold">
                                        {license.title}
                                    </h3>
                                    <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                                        {license.description}
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

export default MainlandLicenseTypes;

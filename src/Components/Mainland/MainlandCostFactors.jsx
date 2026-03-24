"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const MainlandCostFactors = ({ data }) => {
    if (!data?.items) return null;

    const { titlePart1, titleHighlight, titlePart2, subtitle, items, footerNote } = data;

    return (
        <section className="py-12 md:py-28">
            <Container>
                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-white mb-3 leading-snug">
                    {titlePart1}{' '}
                    <span className="text-[#0099CC]">{titleHighlight}</span>{' '}
                    {titlePart2}
                </h2>

                {/* Subtitle */}
                {subtitle && (
                    <p className=" text-sm md:text-base mb-10 max-w-3xl">
                        {subtitle}
                    </p>
                )}

                {/* 2-column pill grid */}
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
                    {items.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex items-center gap-4 bg-white rounded-2xl px-6 py-4 shadow-md"
                        >
                            {/* Blue filled circle bullet */}
                            <span className="w-3 h-3 rounded-full bg-[#0099CC] shrink-0" />
                            <span className="text-[#0d1f3c] text-base md:text-xl">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Footer note */}
                {footerNote && (
                    <p className="text-sm md:text-base mt-8 max-w-2xl leading-relaxed">
                        {footerNote}
                    </p>
                )}
            </Container>
        </section>
        
    );
};

export default MainlandCostFactors;

"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const DocumentServiceBenefits = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20">
            <Container>
                {/* Header */}
                <div className="mb-12">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
                        <span className="text-[#0099CC]">{data.title}</span> {data.highlight}
                    </h2>
                </div>

                {/* Benefits List */}
                <div className="flex flex-col gap-6">
                    {data.items?.map((item, index) => (
                        <div
                            key={index}
                            className="bg-[#0A1221] border border-[#0099CC] rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-4 transition-all duration-300 hover:border-[#0099CC] hover:bg-[#0E1B31] group"
                        >
                            {/* Number and Title */}
                            <div className="flex-1">
                                <span className="text-xl md:text-2xl font-bold text-[#0099CC]">
                                    {index + 1}. {item.title}
                                </span>
                                <span className="text-white text-base md:text-lg ml-2 font-light leading-relaxed">
                                    {item.description}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default DocumentServiceBenefits;

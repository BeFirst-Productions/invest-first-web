"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const DocumentServiceWhyChoose = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-12 md:py-16">
            <Container>
                <div className="max-w-7xl ">
                    {/* Heading with Underline */}
                    <div className="mb-8 relative inline-block">
                        <h2 className="text-3xl md:text-3xl lg:text-4xl font-semibold text-white tracking-tight leading-tight">
                            <span className="text-[#0099CC]   ">
                                {data.title?.split(' ').slice(0, 2).join(' ')}
                            </span>
                            <span className="ml-3 ">
                                {data.title?.split(' ').slice(2).join(' ')}
                            </span>
                        </h2>
                    </div>

                    {/* Description Paragraph */}
                    <p className="text-[#ADB5BD] text-base md:text-lg lg:text-xl leading-relaxed max-w-6xl font-normal">
                        {data.description}
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default DocumentServiceWhyChoose;

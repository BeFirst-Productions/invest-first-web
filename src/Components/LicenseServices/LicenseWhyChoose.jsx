"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const LicenseWhyChoose = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20">
            <Container>
                <div className="">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-8">
                        <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleText}
                    </h2>
                    <div className="space-y-6">
                        {data.descriptions?.map((desc, index) => (
                            <p key={index} className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-300">
                                {desc}
                            </p>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LicenseWhyChoose;

"use client";
import React from 'react';
import SectionContainer from '../layout/SectionContainer';

const LicenseWhyChoose = ({ data }) => {
    if (!data) return null;

    return (
        <SectionContainer className="py-10 md:py-20">
                <div className="">
                    <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight mb-8">
                        <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleText}
                    </h2>
                    <div className="space-y-6">
                        {data.descriptions?.map((desc, index) => (
                            <p key={index} className="text-black text-sm md:text-base lg:text-lg leading-relaxed ">
                                {desc}
                            </p>
                        ))}
                    </div>
                </div>
        </SectionContainer>
    );
};

export default LicenseWhyChoose;

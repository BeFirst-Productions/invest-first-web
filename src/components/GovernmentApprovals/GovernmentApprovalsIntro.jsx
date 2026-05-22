"use client";
import React from 'react';
import Image from 'next/image';
import SectionContainer from '../layout/SectionContainer';

const GovernmentApprovalsIntro = ({ data }) => {
    if (!data) return null;

    return (
        <SectionContainer
            className="py-10 md:py-20 text-black"
            background={
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none" />
            }
        >
            <div className="relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    
                    {/* Left Column: Text Content */}
                    <div className="space-y-6">
                        <h2
                            className="text-3xl md:text-4xl font-semibold leading-tight text-black"
                            dangerouslySetInnerHTML={{ __html: data.title }}
                        />
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed font-light">
                            <p>{data.description1}</p>
                            <p dangerouslySetInnerHTML={{ __html: data.description2 }} />
                        </div>
                    </div>

                    {/* Right Column: Image */}
                    <div className="relative group mx-auto lg:ml-auto w-full max-w-[550px]">
                        <div className="rounded-[29px] overflow-hidden relative aspect-[1.4/1] shadow-2xl">
                            <Image
                                src={data.image}
                                alt="Government Approvals"
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </div>

                </div>
            </div>
        </SectionContainer>
    );
};

export default GovernmentApprovalsIntro;

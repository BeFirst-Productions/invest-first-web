"use client";
import React from 'react';
import Image from 'next/image';
import SectionContainer from '../layout/SectionContainer';

const DocumentServicesIntro = ({ data }) => {
    if (!data) return null;

    return (
        <SectionContainer className="py-10 md:py-20  overflow-hidden">
                <div className="flex flex-col lg:flex-row lg:items-stretch items-start gap-12 lg:gap-16">
                    {/* Left side: Image - Self-adjusts to match right side text height on desktop */}
                    <div className="w-full lg:w-5/12 group flex">
                        <div className="rounded-3xl overflow-hidden relative w-full min-h-[300px] lg:min-h-full aspect-[4/3] lg:aspect-auto">
                            <Image
                                src={data.image || "/assets/images/document-services/typing-service.png"}
                                alt={data.alt || "Document Service Image"}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="w-full lg:w-7/12 flex flex-col space-y-6">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-black"
                            dangerouslySetInnerHTML={{ __html: data.title }}>
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed font-light">
                            {data.description1 && (
                                <p dangerouslySetInnerHTML={{ __html: data.description1 }}></p>
                            )}
                            {data.description2 && (
                                <p dangerouslySetInnerHTML={{ __html: data.description2 }}></p>
                            )}
                        </div>
                    </div>
                </div>
        </SectionContainer>
    );
};

export default DocumentServicesIntro;

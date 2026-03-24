"use client";
import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';

const DocumentServicesIntro = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20  overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row items-start gap-12 lg:gap-16">
                    {/* Left side: Image - Maintaining aspect ratio to prevent cropping */}
                    <div className="w-full lg:w-5/12 group">
                        <div className="rounded-3xl overflow-hidden">
                            <Image
                                src={data.image || "/assets/images/document-services/typing-service.png"}
                                alt={data.alt || "Document Service Image"}
                                width={800}
                                height={600}
                                className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-105"
                                priority
                            />
                        </div>
                    </div>

                    {/* Right side: Content */}
                    <div className="w-full lg:w-7/12 flex flex-col space-y-6">
                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight"
                            dangerouslySetInnerHTML={{ __html: data.title }}>
                        </h2>

                        <div className="space-y-4 text-base md:text-lg text-white/80 leading-relaxed font-light">
                            {data.description1 && (
                                <p dangerouslySetInnerHTML={{ __html: data.description1 }}></p>
                            )}
                            {data.description2 && (
                                <p dangerouslySetInnerHTML={{ __html: data.description2 }}></p>
                            )}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default DocumentServicesIntro;

"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const LicenseDocuments = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20 ">
            <Container>
                <div className="">
                    {/* Header */}
                    <div className="mb-10 md:mb-16">
                        <h2 className="text-3xl md:text-4xl  font-semibold text-white leading-tight max-w-xl 2x:max-w-2xl">
                            Documents <span className="text-[#0099CC]">{data.titleHighlight}</span> {data.titleText}
                        </h2>
                        <p className=" mt-6 text-sm md:text-base lg:text-lg max-w-4xl leading-relaxed">
                            {data.description}
                        </p>
                    </div>

                    {/* Documents List */}
                    <div className="space-y-0">
                        {data.documents.map((doc, index) => (
                            <div
                                key={index}
                                className="group py-6 md:py-8 border-b border-[#0099CC]/50 hover:border-[#0099CC] transition-colors duration-300"
                            >
                                <div className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-3">
                                    <h3 className="text-[#0099CC] text-lg md:text-xl lg:text-2xl font-bold whitespace-nowrap">
                                        {doc.title}:
                                    </h3>
                                    <p className=" text-sm md:text-base lg:text-lg font-medium">
                                        {doc.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default LicenseDocuments;

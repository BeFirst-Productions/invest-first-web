"use client";
import React from "react";
import Image from "next/image";
import SectionContainer from "../layout/SectionContainer";

const VATRegistration = ({ data }) => {
    if (!data) return null;

    return (
        <section className="py-10 md:py-20 overflow-hidden text-black">
            <SectionContainer>
                {/* Header */}
                <div className="w-full">
                    <div className="text-center mb-10 md:mb-16">
                        <h2 className="text-2xl text-black md:text-3xl lg:text-[2rem] font-semibold leading-tight max-w-4xl mx-auto">
                            {data.title.start} <span className="text-[#0099CC]">{data.title.highlight}</span><br />
                            <span className="text-[#0099CC]">{data.title.highlight2}</span> <span className="text-black">{data.title.end}</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
                        {/* Left Side: Normal Image */}
                        <div className="relative group mx-auto lg:mr-auto w-full max-w-[550px]">
                            <div className="rounded-[29px] overflow-hidden relative aspect-[1.4/1] shadow-2xl border border-gray-200">
                                <Image
                                    src={data.image || "/images/valueAddedServices/vat-cooperate.png"}
                                    alt={data.title.highlight || "VAT Registration"}
                                    fill
                                    className="object-cover scale-[1.08] transition-transform duration-700 group-hover:scale-[1.15]"
                                />
                            </div>
                        </div>

                        {/* Right Side: Text Content */}
                        <div className="flex flex-col justify-center space-y-6 text-base md:text-lg text-black leading-relaxed font-light h-full py-4">
                            {data.paragraphs.map((p, idx) => (
                                <p key={idx}>{p}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </SectionContainer>
        </section>
    );
};

export default VATRegistration;

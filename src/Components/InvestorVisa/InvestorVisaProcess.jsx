"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const  InvestorVisaProcess = ({ data }) => {
    if (!data) return null;

    const {
        title = "UAE Investor Visa Application <span class='text-[#00AEEF]'>Process</span>",
        description = "Invest First manages the complete UAE investor visa process through a structured approach:",
        steps = [],
        footer = "Each stage is monitored to ensure regulatory compliance and timely completion."
    } = data;

    return (
        <section className="relative py-10 md:py-20 overflow-hidden ">
            <Container>
                <div className="max-w-7xl mx-auto px-4">
                    {/* Process Box */}
                    <div className="relative border border-[#00AEEF]/40 rounded-[30px] p-8 md:p-12 bg-[#051124]/40 backdrop-blur-sm">
                        
                        <div className="space-y-6">
                            {/* Title */}
                            <h2 
                                className="text-3xl md:text-4xl font-semibold text-white leading-tight"
                                dangerouslySetInnerHTML={{ __html: title }}
                            />
                            
                            {/* Subtitle */}
                            <p className="text-gray-300 text-lg md:text-xl font-normal">
                                {description}
                            </p>

                            {/* Steps List */}
                            <div className="space-y-4 pt-4">
                                {steps.map((step, index) => (
                                    <div key={index} className="flex items-start gap-4 text-[#00AEEF] text-lg md:text-xl font-medium">
                                        <span className="shrink-0  ">{index + 1}.</span>
                                        <p className='text-[#00AEEF]'>{step}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Footer Note */}
                            <div className="pt-6">
                                <p className=" text-lg md:text-xl font-medium border-b border-[#00AEEF]/40 pb-1 inline-block">
                                    {footer}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default InvestorVisaProcess;

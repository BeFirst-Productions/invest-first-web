"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const InvestorVisaEligibility = ({ data }) => {
    if (!data) return null;

    const {
        title = "UAE Investor Visa Eligibility <span class='text-[#00AEEF]'>Requirements</span>",
        description = "Eligibility for a UAE investor visa depends on several regulated factors, including:",
        cards = [],
        footer = "In 2026, enhanced verification systems require accurate matching of licensing data, identity records, and shareholder documentation, making professional handling essential."
    } = data;

    return (
        <section className="relative py-10 md:py-20  overflow-hidden">
            <Container>
                {/* Header */}
                <div className="text-center mb-12 md:mb-16 max-w-7xl mx-auto ">
                    <h2
                        className="text-3xl md:text-4xl font-semibold text-white mb-6 leading-tight"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                    <p className="text-gray-300 text-base md:text-lg max-w-2xl mx-auto border-b border-[#00AEEF]/30 pb-4 inline-block">
                        {description}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-7xl mx-auto px-4">
                    {cards.map((cardText, index) => (
                        <div
                            key={index}
                            className="bg-[#051124] border border-[#00AEEF]/40 rounded-2xl p-8 md:p-10 flex items-center justify-center text-center transition-all duration-300 hover:border-[#00AEEF] hover:shadow-[0_0_20px_rgba(0,174,239,0.15)] group"
                        >
                            <p className="text-white text-base md:text-lg font-medium tracking-wide">
                                {cardText}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="text-center mt-12 md:mt-16 max-w-3xl mx-auto ">
                    <p className=" text-base md:text-lg leading-[1.8] font-normal">
                        {footer}
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default InvestorVisaEligibility;

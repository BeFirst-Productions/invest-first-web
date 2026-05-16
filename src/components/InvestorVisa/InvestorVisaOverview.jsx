"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const InvestorVisaOverview = ({ data }) => {
    if (!data) return null;

    const {
        title = "UAE Investor Visa <span class='text-[#00AEEF]'>Overview</span>",
        description1 = "The UAE Investor Visa allows eligible individuals to obtain residency by holding shares or ownership in a registered business.",
        description2 = "Invest First is an authorized channel partner of UAE Free Zones, enabling seamless coordination between business setup and investor visa processing."
    } = data;

    return (
        <section className="relative py-10 md:py-20 overflow-hidden ">
            <Container>
                <div className="">
                    {/* The Boxed Overview Section */}
                    <div className="relative border border-[#00AEEF]/40 rounded-[24px] md:rounded-[40px] px-4 py-10 pt-12 md:p-16 bg-[#051124]/40 backdrop-blur-sm">
                        
                        {/* Notched Title Tab */}
                        <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-4 md:px-0 md:w-auto flex justify-center">
                            <div className="relative w-full max-w-[340px] md:max-w-none md:w-auto inline-flex justify-center px-4 py-4 md:px-10 md:py-5 rounded-[20px] md:rounded-2xl border border-[#00AEEF]/40 bg-[#051124] shadow-xl z-10">
                                {/* Inner decorative border */}
                                <div className="absolute inset-1 border border-[#00AEEF]/20 rounded-[16px] md:rounded-xl pointer-events-none" />
                                
                                <h2 
                                    className="text-xl md:text-3xl font-semibold text-white text-center leading-snug md:whitespace-nowrap px-1 md:px-4"
                                    dangerouslySetInnerHTML={{ __html: title }}
                                />
                            </div>
                        </div>

                        {/* Description Content */}
                        <div className="space-y-6 md:space-y-8 text-center mt-6 md:mt-0">
                            <p className="text-gray-200 text-sm md:text-lg leading-relaxed font-normal">
                                {description1}
                            </p>
                            <p className="text-gray-200 text-sm md:text-lg leading-relaxed font-normal">
                                {description2}
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default InvestorVisaOverview;

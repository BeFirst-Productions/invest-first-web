"use client";
import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';

const OffshoreOverview = () => {
    return (
        <section className="py-10 md:py-20 overflow-hidden">
            <Container>
                {/* Outer Card with Theme Border */}
                <div className="relative group overflow-hidden rounded-[30px] md:rounded-[40px] border-2 border-[#0099CC] bg-[#030B1B] shadow-2xl flex flex-col items-stretch">
                    
                    {/* Top Banner Section */}
                    <div className="relative h-[220px] md:h-[280px] bg-linear-to-r from-[#eef2f3] to-[#dae2e6] overflow-hidden flex items-center justify-center">
                        {/* Background Overlay / Artwork */}
                        <div className="absolute inset-0 z-0">
                            {/* Skyline Placeholder or Generated Image */}
                            <Image 
                                src="/assets/images/offshore/offshore-banner.png" 
                                alt="Dubai Skyline" 
                                fill 
                                className="object-cover opacity-60 mix-blend-multiply"
                            />
                        </div>

                        {/* Text Overlay for the Banner */}
                       
                    </div>

                    {/* Bottom Content Section */}
                    <div className="p-6 md:p-8 text-white font-outfit">
                        <div className="max-w-5xl space-y-6 text-base md:text-xl leading-relaxed opacity-90">
                            <p>
                                An offshore company is a company that is registered in a country other than the one 
                                where its investors and founders live. The offshore company is subject to the regulations, 
                                laws, and tax authority of the foreign country where it is registered and not of the 
                                country where its founders/owners live. The company owners want to set up an offshore 
                                company in a foreign country as the latter provides the company with many facilities 
                                and legal benefits.
                            </p>
                            <p>
                                Suppose a US tax resident has a software development company in his home state. If he 
                                shifts some of the company operations to a foreign country like India by setting up 
                                the same company there under Indian law, i. eg: Companies Act, 2013, then it will be 
                                an offshore company of the US tax resident.
                            </p>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default OffshoreOverview;

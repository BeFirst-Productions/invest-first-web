"use client";
import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';

const FreezoneOverview = () => {
    return (
        <section className="py-10 md:py-20 overflow-hidden">
            <Container>
                {/* Outer Card with Theme Border */}
                <div className="relative group overflow-hidden rounded-[30px] md:rounded-[40px] border-2 border-[#0099CC] bg-[#030B1B] shadow-2xl flex flex-col lg:flex-row items-stretch">

                    {/* Left Side: Image and Overlay */}
                    <div className="lg:w-[45%] relative min-h-[300px] md:min-h-[400px] lg:min-h-full overflow-hidden">
                        <Image
                            src="/assets/images/freezone/freezone.png"
                            alt="Freezone Company Setup"
                            fill
                            className="object-cover  transition-transform duration-700 group-hover:scale-105"
                        />
                        {/* Overlay to darken slightly if needed for text readability */}

                        {/* Floating Text Overlays */}

                    </div>

                    {/* Right Side: Content */}
                    <div className="lg:w-[55%] p-4 md:p-8 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl  font-semibold text-white mb-8 leading-tight">
                            <span className="text-[#0099CC]">About</span> Free Zone Company Formation
                        </h2>

                        <div className="space-y-2  text-lg md:text-xl leading-relaxed font-outfit">
                            <p>
                                Free zone company formation in Dubai provides 100% foreign ownership, full profit
                                repatriation, and exemption from import and export duties within the free zone.
                                These companies can conduct business globally and within the free zone and can
                                work with UAE mainland companies through authorized distributors or by
                                obtaining the required permits.
                            </p>
                            <p>
                                Dubai offers multiple free zones catering to different industries such as trading,
                                consultancy, technology, media, logistics, and manufacturing. Each free zone
                                provides flexible office solutions including flexi desks, co-working spaces,
                                and private offices.
                            </p>
                        </div>

                        {/* Decorative bottom line matches Mainland style if needed, but not in image */}
                        {/* <div className="w-24 h-px bg-[#0099CC] opacity-60 mt-8"></div> */}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FreezoneOverview;

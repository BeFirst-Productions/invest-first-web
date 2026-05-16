"use client";
import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';

const InvestorVisaSolutions = ({ data }) => {
    if (!data) return null;

    const {
        title = "UAE Investor Visa solutions aligned with business setup & residency regulations.",
        description1 = "The UAE Investor Visa is a long-term residency option designed for entrepreneurs, shareholders, and business owners who establish or invest in licensed entities.",
        description2 = "Invest First provides professional UAE investor visa services that align business licensing, ownership structure, and immigration approvals under one regulated framework.",
        label = "Investor Visa"
    } = data;

    return (
        <section className="relative py-10 md:py-20 overflow-hidden  ">
            {/* Background Gradient / Glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-gradient-to-b from-[#003366]/20 to-transparent blur-[120px] pointer-events-none" />

            <Container>
                {/* Heading */}
                <div className="text-center mb-16 md:mb-24 px-4 relative z-10">
                    <h2
                        className="text-3xl md:text-4xl font-semibold text-white max-w-5xl mx-auto leading-[1.2] tracking-tight"
                        dangerouslySetInnerHTML={{ __html: title }}
                    />
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12  items-center relative z-10">

                    {/* Left: Description Text */}
                    <div className="space-y-8 px-2 lg:px-0">
                        <p
                            className="text-gray-300 text-base md:text-lg font-normal leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: description1 }}
                        />
                        <p
                            className="text-gray-300 text-base md:text-lg font-normal leading-relaxed"
                            dangerouslySetInnerHTML={{ __html: description2 }}
                        />
                    </div>

                    {/* Right: Technical Card Visual */}
                    <div className="relative group mx-auto lg:mx-0 w-full max-w-[550px]">
                        {/* Decorative Outer Glows */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#FF0080]/20 via-[#00AEEF]/20 to-[#00AEEF]/20 blur-3xl opacity-50 pointer-events-none" />

                        {/* Card Frame with Gradient Border */}
                        <div className="relative z-10 p-[1px] rounded-[30px] bg-gradient-to-br from-[#FF0080] via-[#00AEEF] to-[#00AEEF]">
                            <div className="bg-[#050B14] rounded-[29px] overflow-hidden relative aspect-[1.4/1] shadow-2xl">

                                {/* Inner Grid Pattern Backdrop */}
                                <div className="absolute inset-0 opacity-10"
                                    style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}
                                />

                                {/* The "Card" Graphic Content */}
                                <div className="absolute inset-0 flex items-center justify-center p-8 md:p-12">
                                    <div className="relative w-full h-full rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm shadow-[inset_0_0_40px_rgba(255,255,255,0.05)] overflow-hidden">

                                        {/* Glowing Scanning Line or Rays */}
                                        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#00AEEF] to-transparent animate-[scan_3s_ease-in-out_infinite]" />

                                        {/* Card Details Placeholders */}
                                        <div className="p-6 h-full flex flex-col justify-between">
                                            <div className="flex justify-between items-start">
                                                <div className="space-y-1">
                                                    <div className="text-[10px] text-[#00AEEF] font-bold tracking-widest uppercase">{label}</div>
                                                    <div className="text-[8px] text-gray-500 uppercase">Residency Document 2026</div>
                                                </div>
                                                <div className="w-10 h-6 bg-white/10 rounded border border-white/10" />
                                            </div>

                                            {/* Center Visa ID and Hologram area */}
                                            <div className="flex items-center gap-4">
                                                <div className="w-16 h-16 rounded-full border border-[#00AEEF]/30 flex items-center justify-center relative">
                                                    <div className="w-10 h-10 rounded-full bg-[#00AEEF]/10 animate-pulse" />
                                                    <svg className="absolute w-6 h-6 text-[#00AEEF] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A10.003 10.003 0 0012 3m0 0c.53 0 1.039.05 1.531.145m-1.531-.145a9.983 9.983 0 00-4.472 1.06m3.238 9.048c.12.366.12.759.12 1.151 0 .56-.11 1.103-.313 1.604M3.454 11.5c.34-.34.743-.58 1.152-.751a10.04 10.04 0 0115.788 3.097m-1.53 3.325a10.05 10.05 0 01-12.24 3.097M17 10a5 5 0 11-10 0 5 5 0 0110 0z" />
                                                    </svg>
                                                </div>
                                                <div className="flex-1 space-y-2">
                                                    <div className="h-2 w-full bg-white/10 rounded" />
                                                    <div className="h-2 w-2/3 bg-white/10 rounded" />
                                                </div>
                                            </div>

                                            <div className="flex justify-between items-end italic opacity-40 text-[8px] text-white">
                                                <span>Verified Digital Residency</span>
                                                <span>EST 1971</span>
                                            </div>
                                        </div>

                                        {/* Rainbow Glow on edge like in screenshot */}
                                        <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-tr from-[#FF0080] to-[#00AEEF] blur-2xl opacity-40" />
                                    </div>
                                </div>

                                {/* Overlay UI elements like in the image */}
                                <div className="absolute top-4 right-4 flex gap-2">
                                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                                    <div className="w-2 h-2 rounded-full bg-gray-600" />
                                    <div className="w-2 h-2 rounded-full bg-gray-600" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            <style jsx>{`
                @keyframes scan {
                    0%, 100% { top: 0%; opacity: 0.1; }
                    50% { top: 100%; opacity: 0.8; }
                }
            `}</style>
        </section>
    );
};

export default InvestorVisaSolutions;

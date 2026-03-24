"use client";
import React, { useState } from 'react';
import Container from '../Common/Layout/Contianer';

const VATServiceProcess = ({ data }) => {
    const [activeTab, setActiveTab] = useState(data?.[0]?.id || 'process');

    if (!data || !Array.isArray(data)) return null;

    return (
        <section className="relative py-10 md:py-20 text-white overflow-hidden">
            <Container>
                <div className="relative">
                    {/* Floating Decorative Circles */}
                    <div className="absolute -right-4 -top-10 hidden lg:block opacity-60">
                        <div className="relative">
                            <div className="w-4 h-4 rounded-full bg-[#0099CC]/40 absolute left-0 top-0"></div>
                            <div className="w-12 h-12 rounded-full border-2 border-[#E91E63]/30 absolute left-10 top-5 flex items-center justify-center">
                                <div className="w-8 h-8 rounded-full bg-[#0099CC]/30"></div>
                            </div>
                            <div className="w-6 h-6 rounded-full bg-[#0099CC]/20 absolute left-4 top-16"></div>
                        </div>
                    </div>

                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {data.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`px-6 md:px-10 py-3 rounded-xl text-base md:text-xl font-medium transition-all duration-300 border ${activeTab === tab.id
                                        ? 'bg-[#0099CC] border-[#0099CC] text-white'
                                        : 'bg-transparent border-[#0099CC]/30 hover:border-[#0099CC]/60 text-white'
                                    }`}
                            >
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Container */}
                    <div className="relative">
                        <div className="border border-[#0099CC]/40 rounded-3xl p-6 md:p-12 bg-[#000F2B]/50 backdrop-blur-sm">
                            {data.map((tab) => (
                                activeTab === tab.id && (
                                    <div key={tab.id}>
                                        {tab.title && (
                                            <p className="text-gray-300 text-base md:text-lg mb-6">
                                                {tab.title}
                                            </p>
                                        )}
                                        {tab.id === 'process' ? (
                                            <div className="space-y-6 md:space-y-8">
                                                {tab.content.map((step) => (
                                                    <div key={step.number} className="flex gap-4 md:gap-6 group">
                                                        <div className="flex-shrink-0 text-[#0099CC] font-bold text-lg md:text-xl">
                                                            {step.number}.
                                                        </div>
                                                        <div className="space-y-1 md:space-y-2">
                                                            <h3 className="text-[#0099CC] font-semibold text-lg md:text-xl inline-block">
                                                                {step.title}:
                                                            </h3>
                                                            <span className="text-gray-300 ml-2 text-base md:text-lg leading-relaxed">
                                                                {step.description}
                                                            </span>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        ) : (
                                            <ul className="list-disc list-inside space-y-4 text-gray-300 text-base md:text-lg">
                                                {tab.content.map((item, idx) => (
                                                    <li key={idx}>{item}</li>
                                                ))}
                                            </ul>
                                        )}
                                    </div>
                                )
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default VATServiceProcess;

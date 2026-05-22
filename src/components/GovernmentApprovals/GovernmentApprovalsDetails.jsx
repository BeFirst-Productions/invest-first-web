"use client";
import React from 'react';
import SectionContainer from '../layout/SectionContainer';
import { FileCheck, CheckCircle2 } from 'lucide-react';

const GovernmentApprovalsDetails = ({ documentsData, benefitsData }) => {
    if (!documentsData || !benefitsData) return null;

    return (
        <SectionContainer className="py-10 md:py-20 text-black">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
                
                {/* Left: Required Documents */}
                <div className="lg:col-span-5 bg-gradient-to-br from-[#000F2B] to-[#001D4C] rounded-[2rem] p-8 md:p-10 text-white shadow-xl border border-[#0099CC]/20 hover:border-[#0099CC]/45 transition-colors duration-500">
                    <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight text-white">
                        <span className="text-[#0099CC]">{documentsData.titleHighlight}</span> {documentsData.titleRest?.replace('Documents for Government Approvals', 'Documents')}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base mb-8 font-light">
                        {documentsData.description}
                    </p>

                    <ul className="space-y-5">
                        {documentsData.items.map((doc, idx) => (
                            <li key={idx} className="flex items-start gap-4 group">
                                <div className="w-10 h-10 rounded-xl bg-[#0099CC]/10 border border-[#0099CC]/30 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:scale-110">
                                    <FileCheck className="w-5 h-5 text-[#0099CC]" />
                                </div>
                                <span className="text-gray-200 text-sm md:text-base font-medium pt-2">
                                    {doc}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right: Benefits */}
                <div className="lg:col-span-7 space-y-8">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-semibold text-black leading-tight">
                            <span className="text-[#0099CC]">{benefitsData.titleHighlight}</span> {benefitsData.titleRest}
                        </h2>
                        <p className="mt-4 text-gray-600 text-base md:text-lg leading-relaxed">
                            {benefitsData.description}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {benefitsData.items.map((benefit, idx) => (
                            <div 
                                key={idx}
                                className="p-6 bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md hover:border-[#0099CC]/30 transition-all duration-300 group flex items-start gap-4"
                            >
                                <div className="w-10 h-10 rounded-xl bg-[#0099CC]/5 border border-[#0099CC]/10 flex items-center justify-center flex-shrink-0 group-hover:bg-[#0099CC]/10 transition-colors duration-300">
                                    <CheckCircle2 className="w-5 h-5 text-[#0099CC]" />
                                </div>
                                <div className="space-y-1">
                                    <h4 className="text-base md:text-lg font-bold text-black group-hover:text-[#0099CC] transition-colors duration-300">
                                        {benefit.title}
                                    </h4>
                                    <p className="text-gray-600 text-xs md:text-sm leading-relaxed font-light">
                                        {benefit.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </SectionContainer>
    );
};

export default GovernmentApprovalsDetails;

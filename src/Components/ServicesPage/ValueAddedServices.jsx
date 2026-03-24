"use client";
import React from 'react';
import Container from '@/Components/Common/Layout/Contianer';
import { valueAddedServicesData } from '@/data/ValueAddedServicesData';
import { FileText, BriefcaseMedical, UserCheck, PenTool, Settings, Globe } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

const ValueAddedServices = () => {
    // Dynamic Icon component
    const IconComponent = ({ name }) => {
        const Icon = LucideIcons[name || "FileText"] || FileText;
        return <Icon className="w-6 h-6 text-[#FFC107]" />; // Dark yellow/gold color
    };

    return (
        <section className="md:py-20 py-10 relative overflow-hidden">
            <Container>
                {/* Header */}
                <div className="text-center mb-16 space-y-4">
                    <h2 className="text-3xl md:text-[2.5rem] font-bold text-white">
                        <span className="text-[#0099CC]">Value</span>-Added Services
                    </h2>
                    <p className="max-w-2xl mx-auto text-base md:text-lg  leading-relaxed">
                        Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
                    </p>
                </div>

                {/* Services List */}
                <div className="flex flex-col space-y-4 md:space-y-6 max-w-7xl mx-auto">
                    {valueAddedServicesData.map((service) => (
                        <div key={service.id} className="relative group w-full min-h-[100px] md:min-h-[110px] h-auto overflow-hidden rounded-xl bg-[#000F2B] md:bg-transparent border border-[#007CC4] md:border-none">
                            {/* Background SVG Shape */}
                            <div className="absolute inset-0 w-full h-full drop-shadow-lg hidden md:block">
                                <svg
                                    width="100%"
                                    height="100%"
                                    viewBox="0 0 1081 100"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                    preserveAspectRatio="none"
                                    className="w-full h-full min-w-[850px] md:min-w-0"
                                >
                                    <mask id={`path-1-inside-1_${service.id}`} fill="white">
                                        <path d="M1081 82C1081 91.9411 1072.94 100 1063 100H9.50001C4.25331 100 0 95.7467 0 90.5C0 85.2533 4.25329 81 9.5 81H51C60.9411 81 69 72.9411 69 63V38C69 28.0589 60.9411 20 51 20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0H1063C1072.94 0 1081 8.05888 1081 18V82Z" />
                                    </mask>
                                    <path d="M1081 82C1081 91.9411 1072.94 100 1063 100H9.50001C4.25331 100 0 95.7467 0 90.5C0 85.2533 4.25329 81 9.5 81H51C60.9411 81 69 72.9411 69 63V38C69 28.0589 60.9411 20 51 20H10C4.47715 20 0 15.5228 0 10C0 4.47715 4.47715 0 10 0H1063C1072.94 0 1081 8.05888 1081 18V82Z" fill="#000F2B" />
                                    <path d="M1063 100V99H9.50001V100V101H1063V100ZM9.5 81V82H51V81V80H9.5V81ZM69 63H70V38H69H68V63H69ZM51 20V19H10V20V21H51V20ZM10 0V1H1063V0V-1H10V0ZM1081 18H1080V82H1081H1082V18H1081ZM1063 0V1C1072.39 1 1080 8.61116 1080 18H1081H1082C1082 7.50659 1073.49 -1 1063 -1V0ZM0 10H1C1 5.02944 5.02944 1 10 1V0V-1C3.92487 -1 -1 3.92487 -1 10H0ZM10 20V19C5.02944 19 1 14.9706 1 10H0H-1C-1 16.0751 3.92487 21 10 21V20ZM69 38H70C70 27.5066 61.4934 19 51 19V20V21C60.3888 21 68 28.6112 68 38H69ZM51 81V82C61.4934 82 70 73.4934 70 63H69H68C68 72.3888 60.3888 80 51 80V81ZM0 90.5H1C1 85.8056 4.80558 82 9.5 82V81V80C3.70101 80 -1 84.701 -1 90.5H0ZM9.50001 100V99C4.80559 99 1 95.1944 1 90.5H0H-1C-1 96.299 3.70102 101 9.50001 101V100ZM1063 100V101C1073.49 101 1082 92.4934 1082 82H1081H1080C1080 91.3888 1072.39 99 1063 99V100Z" fill="#007CC4" mask={`url(#path-1-inside-1_${service.id})`} />
                                </svg>
                            </div>

                            {/* Content Overlays */}
                            <div className="relative z-10 w-full flex items-center pl-6 md:pl-[8%] pr-4 md:pr-8 py-4 md:py-0 min-h-[100px] md:min-h-[110px]">
                                {/* Icon Area - Positioned on the "ear" of the SVG */}
                                <div className="absolute hidden md:flex left-[3.3%] top-1/2 -translate-y-1/2 -translate-x-1/2 z-20">
                                    <div className="w-10 h-10 lg:w-12 lg:h-12 border border-[#F59E0B] rounded-xl flex items-center justify-center bg-[#0B1221]">
                                        <IconComponent name={service.icon} />
                                    </div>
                                </div>

                                {/* Text Content */}
                                <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-2 md:gap-8 pt-1 w-full">
                                    <div className="w-full md:w-auto flex-shrink-0">
                                        <h3 className="text-white text-sm md:text-lg font-medium whitespace-normal md:whitespace-nowrap">
                                            {service.title}
                                        </h3>
                                    </div>

                                    <div className="w-full md:w-[60%] slide-in-bottom">
                                        <p className=" text-sm md:text-base   w-full">
                                            {service.description}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Footer Text */}
                <div className="mt-16 text-center">
                    <p className="max-w-2xl mx-auto text-base md:text-lg  leading-relaxed">
                        Gorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec
                    </p>
                </div>
            </Container>
        </section>
    );
};

export default ValueAddedServices;

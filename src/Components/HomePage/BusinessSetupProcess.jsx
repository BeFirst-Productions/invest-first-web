"use client";
import React from 'react';
import { Calendar, FileText, Building2, FileCheck, Briefcase, Rocket } from 'lucide-react';
import ProcessCard from '../cards/ProcessCard';

const BusinessSetupProcess = () => {
    const steps = [
        {
            id: "01",
            title: "Book a Consultation",
            description: "Schedule a free consultation to understand business goals, jurisdiction options, costs, timelines, and required documentation clearly upfront today.",
            icon: <Calendar className="w-6 h-6" />,
            position: "top-left"
        },
        {
            id: "02",
            title: "Choose License Type",
            description: "Select the right UAE license based on activities, location, ownership needs, budget, scalability, and regulatory requirements compliance goals.",
            icon: <FileText className="w-6 h-6" />,
            position: "top-right"
        },
        {
            id: "03",
            title: "Open Bank Account",
            description: "Open a corporate bank account with expert support, compliance checks, documentation preparation, and bank coordination across UAE efficiently.",
            icon: <Building2 className="w-6 h-6" />,
            position: "middle-right"
        },
        {
            id: "04",
            title: "Process Government Approvals",
            description: "We manage government approvals, replies, attestations, and documentation processing to ensure accuracy, speed, and compliance nationwide smoothly.",
            icon: <FileCheck className="w-6 h-6" />,
            position: "bottom-left"
        },
        {
            id: "05",
            title: "Get Your License",
            description: "Receive your UAE business license promptly, enabling legal operations, visa processing, invoicing, and contracting across Emirates without delays.",
            icon: <Briefcase className="w-6 h-6" />,
            position: "bottom-middle"
        },
        {
            id: "06",
            title: "Start Operations",
            description: "Launch operations confidently with ongoing PRO services, renewals, compliance support, and post setup assistance for sustainable business growth.",
            icon: <Rocket className="w-6 h-6" />,
            position: "bottom-right"
        }
    ];

    return (
        <section className="relative w-full py-20 md:py-32 px-4 md:px-8 lg:px-16 overflow-hidden">
            {/* Background gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#020617] via-[#0a1628] to-[#020617] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-24">
                    <span className="text-[#0093e9] font-medium tracking-wider mb-2 block">» How It Works «</span>
                    <h2 className="text-3xl md:text-5xl font-bold text-white leading-tight">
                        Business Setup<br />Process
                    </h2>
                </div>

                {/* Process Flow - Desktop */}
                <div className="hidden lg:block relative min-h-[700px]">
                    {/* SVG Connector Lines - Absolute positioned to match exact flow */}
                    <svg
                        className="absolute inset-0 w-full h-full pointer-events-none"
                        style={{ zIndex: 0 }}
                        viewBox="0 0 1200 700"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        <defs>
                            <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stopColor="rgba(120, 3, 67, 0.9)" />
                                <stop offset="50%" stopColor="rgba(60, 27, 78, 0.7)" />
                                <stop offset="100%" stopColor="rgba(0, 51, 90, 0.9)" />
                            </linearGradient>
                        </defs>

                        {/* Step 01 to Step 02 - Horizontal right with curve down */}
                        <path
                            d="M 310 140 L 360 140 Q 380 140 380 160 L 380 200 Q 380 220 400 220 L 430 220"
                            stroke="url(#lineGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Step 02 to Step 03 - Down then right */}
                        <path
                            d="M 630 280 L 630 320 Q 630 340 650 340 L 700 340 Q 720 340 720 320 L 720 140"
                            stroke="url(#lineGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Step 01 to Step 04 - Down left */}
                        <path
                            d="M 180 220 L 180 300 Q 180 320 160 320 L 140 320 L 140 440"
                            stroke="url(#lineGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Step 02 to Step 05 - Down middle */}
                        <path
                            d="M 530 280 L 530 380 Q 530 400 510 400 L 490 400 L 490 480"
                            stroke="url(#lineGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Step 03 to Step 06 - Down right */}
                        <path
                            d="M 820 220 L 820 340 Q 820 360 840 360 L 880 360 L 880 480"
                            stroke="url(#lineGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Step 04 to Step 05 - Right connector */}
                        <path
                            d="M 310 540 L 360 540 Q 380 540 380 520 L 380 500"
                            stroke="url(#lineGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />

                        {/* Step 05 to Step 06 - Right connector */}
                        <path
                            d="M 600 540 L 650 540 Q 670 540 670 520 L 670 500"
                            stroke="url(#lineGradient)"
                            strokeWidth="2.5"
                            fill="none"
                            strokeLinecap="round"
                        />
                    </svg>

                    {/* Cards Layout - Absolute positioning for exact placement */}
                    <div className="relative" style={{ zIndex: 1 }}>
                        {/* Row 1: Step 01 (Left) and Step 02 (Center) */}
                        <div className="absolute top-0 left-0 w-[280px]">
                            <ProcessCard step={steps[0]} />
                        </div>
                        <div className="absolute top-0 left-[400px] w-[280px]">
                            <ProcessCard step={steps[1]} />
                        </div>

                        {/* Row 1: Step 03 (Right) */}
                        <div className="absolute top-0 right-0 w-[280px]">
                            <ProcessCard step={steps[2]} />
                        </div>

                        {/* Row 2: Step 04 (Left), Step 05 (Center), Step 06 (Right) */}
                        <div className="absolute top-[420px] left-0 w-[280px]">
                            <ProcessCard step={steps[3]} />
                        </div>
                        <div className="absolute top-[420px] left-[400px] w-[280px]">
                            <ProcessCard step={steps[4]} />
                        </div>
                        <div className="absolute top-[420px] right-0 w-[280px]">
                            <ProcessCard step={steps[5]} />
                        </div>
                    </div>
                </div>

                {/* Mobile/Tablet Layout */}
                <div className="lg:hidden grid grid-cols-1 md:grid-cols-2 gap-6">
                    {steps.map((step) => (
                        <ProcessCard key={step.id} step={step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BusinessSetupProcess;

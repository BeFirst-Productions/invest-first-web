import React from 'react';
import WhyChooseUsCard from '../cards/WhyChooseUsCard';
import {
    UserCheck,
    Zap,
    LifeBuoy,
    BadgeDollarSign,
    Headset,
    Building2
} from 'lucide-react';

const WhyChooseUsSection = () => {
    return (
        <section className="relative w-full py-20 md:py-36 px-4 md:px-8 lg:px-16 overflow-hidden ">
            {/* Decorative Circles - Bottom Right Corner */}
            <div className="absolute inset-0 pointer-events-none hidden lg:block overflow-visible">
                {/* Large Circle with Gradient Border - Bottom Right */}
                <div className="absolute bottom-25 right-10 animate-float-slow">
                    <div className="relative w-32 h-32 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-[#780343] to-[#00335A] animate-pulse-ring">
                            <div className="w-full h-full bg-[#020617] rounded-full" />
                        </div>
                        <div className="w-20 h-20 bg-[#1C7998] rounded-full shadow-2xl opacity-70 animate-pulse-slow" />
                    </div>
                </div>

                {/* Medium Circle with Gradient Border */}
                <div className="absolute bottom-0 right-35 animate-float-slow" style={{ animationDelay: '0.5s' }}>
                    <div className="relative w-24 h-24 flex items-center justify-center">
                        <div className="absolute inset-0 rounded-full p-[2px] bg-gradient-to-br from-[#780343] to-[#00335A] animate-pulse-ring">
                            <div className="w-full h-full bg-[#020617] rounded-full" />
                        </div>
                        <div className="w-16 h-16 bg-[#1C7998] rounded-full shadow-xl opacity-60 animate-pulse-slow" />
                    </div>
                </div>

                {/* Small Solid Circle 1 */}
                <div className="absolute bottom-29 right-46 w-12 h-12 bg-[#1C7998] rounded-full opacity-50 shadow-lg animate-pulse-slow" style={{ animationDelay: '1s' }} />

                {/* Extra Small Solid Circle 2 */}
                <div className="absolute bottom-15 right-15 w-8 h-8 bg-[#1C7998] rounded-full opacity-40 shadow-md animate-pulse-slow" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Decorative Connector Lines - Left Side */}
            {/* <div className="absolute left-0 top-1/2 -translate-y-1/2 pointer-events-none hidden lg:block">
                <svg
                    width="230"
                    height="650"
                    viewBox="0 0 230 650"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="opacity-70"
                >
                    <defs>
                        <linearGradient id="connectorLineGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(120, 3, 67, 1)" />
                            <stop offset="50%" stopColor="rgba(60, 27, 78, 1)" />
                            <stop offset="100%" stopColor="rgba(0, 51, 90, 1)" />
                        </linearGradient>
                    </defs>

                  
                    <path
                        d="M 5 20 
                           L 180 20 
                           Q 200 20 200 40 
                           L 200 100 
                           Q 200 120 180 120 
                           L 80 120 
                           Q 60 120 60 140 
                           L 60 170 
                           Q 60 190 80 190 
                           L 210 190 
                           Q 230 190 230 210
                           L 230 220
                           L 170 220
                           Q 150 220 150 240
                           L 150 610
                           Q 150 630 130 630
                           L 5 630"
                        stroke="url(#connectorLineGrad)"
                        strokeWidth="3"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </div> */}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Header */}
                <div className="mb-16 md:mb-24 max-w-2xl">
                    <span className="text-[#0093e9] font-medium tracking-wider mb-2 block">» Why Choose Us «</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
                        Trusted UAE business setup <br /> experts delivering solutions
                    </h2>
                </div>

                {/* Grid Layout */}
                {/* 
                   Desktop (lg): 3 Columns.
                   Left Col: 2 Cards (Vertical Center aligned, pushed to Right edge of col)
                   Center Col: Top Card, Image, Bottom Card (Vertical Stack)
                   Right Col: 2 Cards (Vertical Center aligned, pushed to Left edge of col)
                */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center justify-center">

                    {/* Left Column */}
                    <div className="flex flex-col gap-8 md:gap-16 items-center lg:items-end justify-center order-2 lg:order-1">
                        <WhyChooseUsCard
                            title="Fast & hassle free process"
                            description="Streamlined processes reduce delays, paperwork, and complexity, enabling fast, hassle free business setup in UAE for clients."
                            icon={<Zap className="w-6 h-6 text-white" />}
                            image={"/assets/images/whyChoose/glowing buld.svg"}
                            position="left"
                        />
                        <WhyChooseUsCard
                            title="Transparent pricing"
                            description="Clear transparent pricing with no hidden costs, helping businesses plan budgets confidently and make informed decisions easily."
                            icon={<BadgeDollarSign className="w-6 h-6 text-white" />}
                            image={"/assets/images/whyChoose/carbon_pricing.svg"}
                            position="left"
                        />
                    </div>

                    {/* Center Column */}
                    <div className="flex flex-col gap-8 items-center order-1 lg:order-2">
                        {/* Top Card */}
                        <WhyChooseUsCard
                            title="Dedicated business consultant"
                            description="Dedicated business consultant provides personalized advice, proactive follow ups, and expert support throughout company formation in UAE."
                            icon={<UserCheck className="w-6 h-6 text-white" />}
                            image={"/assets/images/whyChoose/chain_link.svg"}
                            position="top"
                        />

                        {/* Central Image */}
                        <div className="relative w-full max-w-sm aspect-[3/4] rounded-2xl overflow-hidden group shadow-2xl shadow-blue-900/30 border border-white/10">
                            {/* Image Placeholder */}
                            <img
                                src="/assets/images/faq_person_working.png"
                                alt="Business Excellence"
                                className="w-full h-full object-cover"
                            />

                            {/* Overlay Gradient */}
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-transparent to-transparent opacity-90"></div>

                            {/* Text Overlay Box (Bottom Left Notch Style) */}
                            <div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-r from-bg-[#0f172a]/80 to-transparent backdrop-blur-sm border-t border-white/10">
                                <h3 className="text-2xl font-bold text-white">
                                    Excellence You Can <br /> Count On
                                </h3>
                            </div>
                        </div>

                        {/* Bottom Card */}
                        <WhyChooseUsCard
                            title="Strong government network"
                            description="Established relationships with UAE government authorities enabling faster approvals, smoother processes, and reliable compliance for businesses nationwide."
                            icon={<Building2 className="w-6 h-6 text-white" />}
                            image={"/assets/images/whyChoose/wifi.svg"}
                            position="bottom"
                        />
                    </div>

                    {/* Right Column */}
                    <div className="flex flex-col gap-8 md:gap-16 items-center lg:items-start justify-center order-3 lg:order-3">
                        <WhyChooseUsCard
                            title="End-to-end support"
                            description="Complete assistance from planning to licensing, visas, banking, compliance, and post setup operations across UAE business requirements."
                            icon={<LifeBuoy className="w-6 h-6 text-white" />}
                            image={"/assets/images/whyChoose/system-uicons_support.svg"}
                            position="right"
                        />
                        <WhyChooseUsCard
                            title="24/7 support"
                            description="Round the clock support ensures quick responses, clear communication, issue resolution, and guidance throughout your UAE journey."
                            icon={<Headset className="w-6 h-6 text-white" />}
                            image={"/assets/images/whyChoose/phone_support.svg"}
                            position="right"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUsSection;

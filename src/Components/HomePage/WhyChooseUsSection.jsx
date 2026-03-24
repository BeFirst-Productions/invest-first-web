"use client"
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
import Container from '../Common/Layout/Contianer';
import SectionTag from '../Common/SectionTag';

const WhyChooseUsSection = () => {
    return (
        <section className="relative w-full py-10 md:py-20  overflow-hidden ">
            {/* Decorative Circles - Bottom Right Corner */}
            <Container>
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
                <div className="absolute left-0 bottom-0 pointer-events-none hidden xl:block z-0">
                    <svg
                        width="224"
                        height="610"
                        viewBox="0 0 224 610"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            d="M121.978 168.611V201.441H222V151.955H142.714C126.613 153.131 122.181 163.549 121.978 168.611Z"
                            fill="url(#paint0_linear_1580_7337)"
                        />
                        <path
                            d="M0 608.5H102.462C109.374 607.847 122.954 602.819 121.978 587.928V168.611C122.181 163.549 126.613 153.131 142.714 151.955H222V201.441H75.6264C70.7473 201.941 60.989 200.241 60.989 189.444V117.466C59.9725 111.301 63.0626 98.9712 83.5549 98.9712H171.379C179.714 98.6379 196.385 94.0726 196.385 78.4772C196.385 62.8818 196.385 30.658 196.385 16.4956C197.401 11.497 195.165 1.5 178.088 1.5H1.21978"
                            stroke="url(#paint1_linear_1580_7337)"
                            strokeWidth="3"
                        />

                        {/* Animated Ray */}
                        <path
                            d="M0 608.5H102.462C109.374 607.847 122.954 602.819 121.978 587.928V168.611C122.181 163.549 126.613 153.131 142.714 151.955H222V201.441H75.6264C70.7473 201.941 60.989 200.241 60.989 189.444V117.466C59.9725 111.301 63.0626 98.9712 83.5549 98.9712H171.379C179.714 98.6379 196.385 94.0726 196.385 78.4772C196.385 62.8818 196.385 30.658 196.385 16.4956C197.401 11.497 195.165 1.5 178.088 1.5H1.21978"
                            stroke="url(#paint1_linear_1580_7337)"
                            strokeWidth="4"
                            strokeLinecap="round"
                            filter="url(#rayBlurWhy)"
                            className="why-ray-anim"
                        />

                        <defs>
                            <filter id="rayBlurWhy" x="-100%" y="-100%" width="300%" height="300%">
                                <feGaussianBlur in="SourceGraphic" stdDeviation="2.5" />
                                <feComposite in2="SourceGraphic" operator="over" />
                            </filter>
                            <linearGradient
                                id="paint0_linear_1580_7337"
                                x1="218.882"
                                y1="1.50003"
                                x2="-85.5014"
                                y2="49.4023"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop offset="0.0913462" stopColor="#251731" />
                                <stop offset="0.278846" stopColor="#5F3850" />
                                <stop offset="0.423077" stopColor="#995C64" />
                                <stop offset="0.552052" stopColor="#BB7B71" />
                                <stop offset="0.680911" stopColor="#C68474" />
                                <stop offset="0.846123" stopColor="#CD9074" />
                                <stop offset="1" stopColor="#D4B35F" />
                            </linearGradient>
                            <linearGradient
                                id="paint1_linear_1580_7337"
                                x1="0"
                                y1="333.878"
                                x2="222"
                                y2="333.878"
                                gradientUnits="userSpaceOnUse"
                            >
                                <stop stopColor="#780343" />
                                <stop offset="1" stopColor="#00335A" />
                            </linearGradient>
                        </defs>
                    </svg>
                </div>

                <div className=" relative z-10">
                    {/* Header */}
                    <div className="mb-16 md:mb-24 max-w-2xl">
                        <SectionTag text="Why Choose Us" />
                        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight">
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
            </Container>

            <style jsx>{`
                @keyframes whyRay {
                    0% { stroke-dashoffset: -2000; }
                    100% { stroke-dashoffset: 2000; }
                }
                .why-ray-anim {
                    stroke-dasharray: 150 1850;
                    animation: whyRay 12s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default WhyChooseUsSection;

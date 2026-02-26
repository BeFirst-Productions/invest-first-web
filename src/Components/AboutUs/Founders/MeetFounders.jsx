"use client";
import React from 'react';
import Image from 'next/image';
import Container from '@/Components/Common/Layout/Contianer';
import FounderImageCard from './FounderImageCard';
import FounderDecorativeDecor from './FounderDecorativeDecor';

const MeetFounders = () => {
    const founders = [
        {
            id: 1,
            name: "Mr. Rasheeq Abdurahman",
            title: "Founder",
            image: "/assets/images/founders/founder1.svg",
            description: [
                "Mr. Rasheeq Abdurahman brings a wealth of knowledge and dedication to the forefront of company formation services in the UAE. Specializing in Free Zone company formation, Rasheeq has successfully guided hundreds of entrepreneurs, startups, and SMEs through the complexities of launching and scaling their businesses in some of the UAE's most dynamic free zones.",
                "Known for his strategic mindset and innovative approach, he has built a strong reputation for simplifying processes, ensuring transparency, and providing solutions tailored to each client's unique business goals. His vision for Invest First Business Services is to create a one-stop destination where entrepreneurs can find everything they need—from setup to growth—under one trusted roof."
            ]
        },
        {
            id: 2,
            name: "Mr. Ansal Ashraf",
            title: "Co-Founder",
            image: "/assets/images/founders/founder2.svg",
            description: [
                "Mr. Ansal Ashraf stands as an authority in Mainland company formation and government-related services. His unmatched level of guidance and consultation has earned him the trust of business owners across diverse industries, from SMEs to large enterprises. Ansal's expertise lies in navigating government processes with precision, ensuring clients receive seamless service delivery at every stage—from licensing and approvals to compliance and operational setup. His deep knowledge of UAE regulations and proactive approach make him an invaluable resource for entrepreneurs seeking to establish and expand their ventures in the region."
            ]
        }
    ];

    return (
        <section className="relative py-16 md:py-24 lg:py-32 overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                        backgroundSize: '50px 50px'
                    }}
                />

                {/* Decorative Stepped Lines from reference */}
                <div className="absolute left-0 top-[10%] opacity-40 hidden xl:block">
                    <FounderDecorativeDecor />
                </div>
                {/* <div className="absolute left-0 top-[60%] opacity-20 hidden xl:block scale-y-[-1]">
                    <FounderDecorativeDecor />
                </div> */}
            </div>

            <Container>
                {/* Section Title */}
                <div className="text-center mb-12 md:mb-16 lg:mb-20 relative z-10">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
                        Meet <span className="text-[#0099CC]">the</span> Founders
                    </h2>
                </div>

                {/* Founders Content */}
                <div className="space-y-20 md:space-y-28 lg:space-y-36">
                    {/* First Founder */}
                    <div className="relative">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1 xl:gap-2 items-center">
                            {/* Image Section - Left */}
                            <div className="order-1">
                                <FounderImageCard
                                    image={founders[0].image}
                                    name={founders[0].name}
                                    title={founders[0].title}
                                    alt={founders[0].name}
                                    position="right"
                                />
                            </div>

                            {/* Description Section - Right */}
                            <div className="order-2">
                                <div className="relative">
                                    {/* Large Decorative Quote Image */}
                                    <div className="absolute -left-3 -top-6 lg:-left-10 lg:-top-10 w-7 h-7 md:w-16 md:h-12 lg:w-16 lg:h-16  select-none">
                                        <Image
                                            src="/assets/images/shapes/quates.svg"
                                            alt="Quotation"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Description Text */}
                                    <div className="space-y-5 md:space-y-6 text-gray-300 relative z-10 pl-6 lg:pl-5">
                                        {founders[0].description.map((paragraph, idx) => (
                                            <p key={idx} className="text-sm sm:text-base md:text-lg leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Second Founder */}
                    <div className="relative">

                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-1 xl:gap-4 items-center">
                            {/* Description Section - Left */}
                            <div className="order-2 lg:order-1">
                                <div className="relative">
                                    {/* Large Decorative Quote Image */}
                                    <div className="absolute -left-3 -top-6 lg:-left-10 lg:-top-10 w-7 h-7 md:w-16 md:h-12 lg:w-16 lg:h-16   select-none">
                                        <Image
                                            src="/assets/images/shapes/quates.svg"
                                            alt="Quotation"
                                            fill
                                            className="object-contain"
                                        />
                                    </div>

                                    {/* Description Text */}
                                    <div className="space-y-5 md:space-y-6 text-gray-300 relative z-10 pl-6 lg:pl-5">
                                        {founders[1].description.map((paragraph, idx) => (
                                            <p key={idx} className="text-sm sm:text-base md:text-lg leading-relaxed">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Image Section - Right */}
                            <div className="order-1 lg:order-2">
                                <FounderImageCard
                                    image={founders[1].image}
                                    name={founders[1].name}
                                    title={founders[1].title}
                                    alt={founders[1].name}
                                    position="left"
                                />
                            </div>
                        </div>

                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MeetFounders;

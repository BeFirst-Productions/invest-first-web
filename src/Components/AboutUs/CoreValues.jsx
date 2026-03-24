"use client"

import React, { useEffect, useRef } from 'react';
import SectionTag from '../Common/SectionTag';
import { Target, Shield, Award, Lightbulb, Eye, Handshake } from 'lucide-react'; // Placeholder icons
import PrimaryButton from '../Common/Buttons/PrimaryButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

const CoreValues = () => {
    const sectionRef = useRef(null);
    const cardsContainerRef = useRef(null);
    const cardsWrapperRef = useRef(null);

    useEffect(() => {
        // Register ScrollTrigger inside useEffect
        gsap.registerPlugin(ScrollTrigger);

        let ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            // Apply specific scroll logic only on large screens (lg and above)
            mm.add("(min-width: 1024px)", () => {
                const wrapper = cardsWrapperRef.current;
                const container = cardsContainerRef.current;

                if (wrapper && container) {
                    const cards = wrapper.children;
                    if (cards.length > 3) {
                        // Dynamically calculate the combined height of the first 3 cards plus gaps (gap-6 = 24px)
                        const card1Height = cards[0].offsetHeight;
                        const card2Height = cards[1].offsetHeight;
                        const card3Height = cards[2].offsetHeight;
                        const totalVisibleHeight = card1Height + card2Height + card3Height + (24 * 2);

                        // Set the container to only show 3 cards
                        gsap.set(container, { height: totalVisibleHeight, overflow: 'hidden' });

                        const scrollAmount = wrapper.scrollHeight - totalVisibleHeight;

                        // Create the scroll pinning effect
                        ScrollTrigger.create({
                            trigger: sectionRef.current,
                            start: "top 120px", // Align with the sticky header area
                            end: `+=${scrollAmount * 2}`, // Extend scroll duration based on content
                            pin: true,
                            scrub: 1,
                            animation: gsap.to(wrapper, {
                                y: -scrollAmount,
                                ease: "none"
                            }),
                            invalidateOnRefresh: true,
                        });
                    }
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative py-10 md:py-20 max-w-[1980px] mx-auto  overflow-hidden">
            {/* Background Wave Pattern (Placeholder - can be replaced with an image) */}
            <div className="mx-4 md:mx-6 lg:mx-12  bg-linear-to-b from-[#14293A] to-[#0B223E] rounded-[40px] overflow-hidden relative">

                {/* <Container> */}
                <div className="py-6 md:py-8 px-4 sm:px-6 lg:px-8 xl:px-[140px] 2xl:px-[200px] w-full relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

                        {/* LEFT COLUMN: Sticky Header & Description */}
                        <div className="flex flex-col items-start justify-center lg:sticky lg:top-32 self-start">
                            <SectionTag text="Our Core Values" className="mb-4 uppercase" />

                            <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-8">
                                We are a <span className="text-[#0099CC]">values-driven</span><br />
                                organization committed<br />
                                to excellence.
                            </h2>

                            <PrimaryButton title="Button" />
                        </div>

                        {/* RIGHT COLUMN: Value Cards Stack */}
                        <div ref={cardsContainerRef} className="w-full relative">
                            <div ref={cardsWrapperRef} className="flex flex-col gap-6">
                                {/* Card 1: Client Success */}
                                <ValueCard
                                    icon={<Target className="w-8 h-8 text-white" />}
                                    title="Client Success"
                                    description="We prioritize client success by understanding unique goals, challenges, and markets, delivering tailored solutions, proactive guidance, and measurable outcomes that help businesses grow confidently, make informed decisions, and achieve sustainable success across UAE competitive environments."
                                />

                                {/* Card 2: Integrity */}
                                <ValueCard
                                    icon={<Shield className="w-8 h-8 text-white" />}
                                    title="Integrity"
                                    description="Integrity is the cornerstone of our operations. We maintain the highest ethical standards in all our interactions, ensuring that our clients can trust us implicitly. Our commitment to honesty and transparency forms the foundation of every relationship we build."
                                />

                                {/* Card 3: Excellence */}
                                <ValueCard
                                    icon={<Award className="w-8 h-8 text-white" />}
                                    title="Excellence"
                                    description="We strive for excellence in everything we do. From the initial consultation to the final delivery, our team is dedicated to providing superior quality service and achieving the best possible results for our clients. We never settle for anything less than exceptional."
                                />

                                {/* Card 4: Innovation */}
                                <ValueCard
                                    icon={<Lightbulb className="w-8 h-8 text-white" />}
                                    title="Innovation"
                                    description="In a rapidly evolving market, innovation is key. We continuously explore new ideas, technologies, and strategies to stay ahead of the curve. Our innovative approach allows us to provide cutting-edge solutions that drive growth and efficiency for our clients."
                                />

                                {/* Card 5: Transparency */}
                                <ValueCard
                                    icon={<Eye className="w-8 h-8 text-white" />}
                                    title="Transparency"
                                    description="We believe in complete transparency with our clients, providing clear insights, honest feedback, and straightforward communication to build lasting relationships based on mutual respect and clarity."
                                />

                                {/* Card 6: Reliability */}
                                <ValueCard
                                    icon={<Handshake className="w-8 h-8 text-white" />}
                                    title="Reliability"
                                    description="Our commitment to reliability ensures that we are always there when you need us, delivering consistent results and dependable service that you can count on for your business growth."
                                />
                            </div>
                        </div>
                    </div>
                </div>

                {/* Background Shapes */}
                <div className="absolute left-0 bottom-0 pointer-events-none ">
                    <img src="/assets/images/shapes/left-lines.png" alt="" className="w-auto h-auto max-w-full" />
                </div>
                <div className="absolute right-0 bottom-0 pointer-events-none ">
                    <img src="/assets/images/shapes/right-lines.png" alt="" className="w-auto h-auto max-w-full" />
                </div>
                {/* </Container> */}
            </div>
        </section>
    );
};

const ValueCard = ({ icon, title, description }) => {
    return (
        <div className="relative p-[3px] rounded-2xl bg-linear-to-r from-[#780343] to-[#00335A] group transition-all duration-300">
            <div className="relative h-full w-full rounded-[14px] bg-[#0f172a] overflow-hidden">
                <div className="flex flex-col md:flex-row p-6 md:p-8 gap-6 md:gap-8 items-start">

                    {/* Icon & Title Column */}
                    <div className="flex flex-row md:flex-col items-center md:items-start gap-4 md:gap-4 flex-shrink-0 md:w-1/4">
                        <div className="w-14 h-14 rounded-full bg-[#1e293b] flex items-center justify-center border border-gray-700 shadow-inner">
                            {/* Custom SVG logo placeholder or Lucide Icon */}
                            {icon}
                        </div>
                        <h3 className="text-xl font-semibold text-white">{title}</h3>
                    </div>

                    {/* Description Column */}
                    <div className="flex-grow">
                        <p className=" text-sm leading-relaxed">
                            {description}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoreValues;

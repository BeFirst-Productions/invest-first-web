"use client";
import React from 'react';
import Image from 'next/image';
import Container from '../Common/Layout/Contianer';
import SectionTag from '../Common/SectionTag';

const SocialMediaPromo = () => {
    const cards = [
        {
            id: 1,
            image: "/assets/images/t.png",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit",
        },
        {
            id: 2,
            image: "/images/social-media/card2.jpg", // Placeholder
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit",
        },
        {
            id: 3,
            image: "/images/social-media/card3.jpg", // Placeholder
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit",
        },
        {
            id: 4,
            image: "/images/social-media/card4.jpg", // Placeholder
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit",
        }
    ];

    return (
        <section className="py-10 md:py-20 relative overflow-hidden">
            <Container>
                {/* Header */}
                <div className="flex flex-col items-start mb-10 md:mb-16 z-10 relative pl-4 md:pl-0">
                    <SectionTag text="Social Media" />
                    <h2 className="text-3xl md:text-5xl font-semibold text-white mt-2 leading-tight">
                        Let Your Brand <br className="hidden md:block" />
                        Speak Online
                    </h2>
                </div>

                {/* Cards Slider */}
                <div className="w-full overflow-hidden">
                    <div className="flex gap-6 w-max animate-scroll">
                        {[...cards, ...cards].map((card, index) => (
                            <div key={`${card.id}-${index}`} className="relative w-[320px] shrink-0 flex flex-col group select-none">
                                {/* 1. Top Image Section */}
                                <div className="relative h-96 w-full rounded-3xl overflow-hidden z-0">
                                    {/* Use a decorative gradient placeholder if image fails/missing */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#14293A] to-[#0B223E]" />
                                    {/* Actual Image */}
                                    {card.image && (
                                        <Image
                                            src={card.image}
                                            alt="Social Media Post"
                                            fill
                                            className="object-cover transition-transform duration-500 scale-110 group-hover:scale-125 selection-none"
                                        />
                                    )}
                                    <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors" />
                                </div>
                                {/* 2. Bottom Shape and Text Content */}
                                <div className="absolute bottom-0 left-0 w-full z-30 pointer-events-none">
                                    <div className="relative w-full h-full flex flex-col items-center justify-end pointer-events-auto">
                                        <svg
                                            width="100%"
                                            viewBox="0 0 251 77"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="w-full h-auto drop-shadow-xl"
                                        >
                                            <path d="M10.3345 52C16.042 52 20.6689 47.3731 20.6689 41.6655V16C20.6689 7.16344 27.8324 0 36.6689 0H205.984C214.821 0 221.984 7.16344 221.984 16V35.4922C221.984 43.5046 228.48 50 236.492 50H237.5C244.956 50 251 56.0442 251 63.5C251 70.9558 244.956 77 237.5 77H12.5C5.59645 77 0 71.4036 0 64.5V62.3345C0 56.6269 4.6269 52 10.3345 52Z" fill="#000F2B" />
                                        </svg>
                                        <div className="absolute inset-0 flex items-center justify-center p-4 pt-6">
                                            <p className="text-white text-xs sm:text-base text-center leading-[1.6] font-normal font-outfit max-w-[90%] tracking-wide">
                                                {card.description}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </Container>
            <style jsx>{`
                @keyframes scroll {
                    0% {
                        transform: translateX(0);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }
                .animate-scroll {
                    animation: scroll 30s linear infinite;
                }
                .animate-scroll:hover {
                    animation-play-state: paused;
                }
            `}</style>
        </section>
    );
};

export default SocialMediaPromo;

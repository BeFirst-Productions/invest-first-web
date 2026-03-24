import React from 'react';
import Container from '../Common/Layout/Contianer';

/* ─────────────────────────────────────────
   Main component
   Props:
     data — the `whyChoose` object from the service data file
            { headingRest, cardTitle, cardTitleHighlight, paragraphs[], points[] }
   ───────────────────────────────────────── */
const WhyChooseDubai = ({ data }) => {
    if (!data) return null;
    const { headingRest, cardTitle, cardTitleHighlight, paragraphs, points } = data;

    return (
        <section className="py-10 md:py-20 overflow-hidden">
            <Container>
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-6 xl:gap-12 items-stretch">

                    {/* Left Column */}
                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-tight mb-6 max-w-xl">
                            {/* "Why Choose" is always static + blue */}
                            <span className="text-[#0099CC]">Why Choose </span>
                            {headingRest}
                        </h2>
                        <div className="space-y-4 text-gray-300 text-base leading-relaxed">
                            {paragraphs.map((para, i) => (
                                <p key={i}>{para}</p>
                            ))}
                        </div>
                    </div>

                    {/* Right Column — Card */}
                    <div className="flex-1">
                        <div className="h-full rounded-2xl relative overflow-hidden bg-[#660033]">

                            <h3 className="text-xl md:text-2xl p-6 md:p-10 font-semibold text-white leading-snug relative z-10">
                                {/* Replace highlight word inside cardTitle */}
                                {cardTitle.split(cardTitleHighlight).map((part, i, arr) =>
                                    i < arr.length - 1 ? (
                                        <React.Fragment key={i}>
                                            {part}
                                            <span className="text-[#0099CC]">{cardTitleHighlight}</span>
                                        </React.Fragment>
                                    ) : part
                                )}
                            </h3>

                            {/* Dots strip + Text side by side */}
                            <div className="flex gap-4 relative z-10 px-2 pt-0 pb-8 md:pb-10 md:pt-0 md:pl-4">

                                {/* Single dark pill strip containing all dots */}
                                <div
                                    className="flex flex-col items-center justify-around px-2 shrink-0 rounded-full"
                                    style={{ background: '#000000', minWidth: '2.25rem' }}
                                >
                                    {points.map((_, index) => (
                                        <span
                                            key={index}
                                            className="w-4 h-4 rounded-full my-1.5 bg-[#0099CC]"
                                        />
                                    ))}
                                </div>

                                {/* Text Column */}
                                <div className="flex flex-col justify-around flex-1">
                                    {points.map((point, index) => (
                                        <p
                                            key={index}
                                            className="text-gray-200 text-sm md:text-base leading-relaxed my-1.5"
                                        >
                                            {point}
                                        </p>
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </section>
    );
};

export default WhyChooseDubai;

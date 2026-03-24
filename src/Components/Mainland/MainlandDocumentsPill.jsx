"use client";
import React from 'react';
import Container from '../Common/Layout/Contianer';

const MainlandDocumentsPill = ({ data }) => {
    if (!data?.items) return null;

    const { titleLine1, titleLine2, items } = data;

    // Split items into two balanced columns
    const mid = Math.ceil(items.length / 2);
    const leftCol = items.slice(0, mid);
    const rightCol = items.slice(mid);

    return (
        <section className="py-10 md:py-20">
            <Container>
                {/* Outer card — dark maroon background, rounded */}
                <div
                    className="rounded-3xl px-8 md:px-14 py-10 md:py-14 bg-[#660033]"
                >
                    {/* Centered heading */}
                    <div className="text-center mb-10">
                        <h2 className="text-3xl md:text-4xl font-semibold text-white leading-snug">
                            {titleLine1}
                        </h2>
                        <p className="text-[#0099CC] text-3xl md:text-4xl font-semibold mt-1">
                            {titleLine2}
                        </p>
                    </div>

                    {/* Two-column pill grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {/* Left column */}
                        <div className="flex flex-col gap-4">
                            {leftCol.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 rounded-2xl px-5 py-5 bg-[#AA0256]"
                                >
                                    <span className="w-2.5 h-2.5 rounded-3xl bg-white shrink-0" />
                                    <span className="text-white text-base md:text-xl font-medium">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Right column */}
                        <div className="flex flex-col gap-4">
                            {rightCol.map((item, idx) => (
                                <div
                                    key={idx}
                                    className="flex items-center gap-3 rounded-2xl px-5 py-5 bg-[#AA0256]"
                                >
                                    <span className="w-2.5 h-2.5 rounded-full bg-white shrink-0" />
                                    <span className="text-white text-base md:text-xl font-medium">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default MainlandDocumentsPill;

"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import SectionContainer from "../layout/SectionContainer";

/**
 * Reusable FAQ Accordion Component
 *
 * Props:
 *  - title     {string}  Service-specific heading tail (e.g. "Company Formation UAE").
 *              Rendered after the static "Frequently Asked Questions –" prefix.
 *  - faqItems  {Array}   Array of { question, answer } objects
 *  - className {string}  Optional extra class for the section wrapper
 *
 * NOTE: "highlight" prop is still accepted for backward-compat but is no longer
 *       displayed — the heading prefix is now fully static.
 */
const FAQAccordion = ({
    title = "Company Formation UAE",
    highlight = "Questions",
    faqItems = [],
    className = "",
}) => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className={`py-10 md:py-20  ${className}`}>
            <SectionContainer>
                {/* Heading */}
                <div className="mb-10 md:mb-12">
                    <h2 className="text-2xl md:text-4xl font-semibold text-black leading-snug max-w-sm md:max-w-xl">
                        {/* "Frequently Asked Questions –" is always static */}
                        Frequently Asked{" "}
                        <span className="text-[#0099CC]">Questions –</span>
                        <br />
                        {title}
                    </h2>
                </div>

                {/* Accordion List */}
                <div className="flex flex-col gap-3">
                    {faqItems.map((item, index) => {
                        const isOpen = openIndex === index;
                        return (
                            <div
                                key={index}
                                className="rounded-xl overflow-hidden border transition-all duration-300"
                                style={{ backgroundColor: '#780343', borderColor: '#780343' }}
                            >
                                <button
                                    onClick={() => toggle(index)}
                                    aria-expanded={isOpen}
                                    className="w-full flex items-center justify-between px-5 py-4 text-left gap-4 focus:outline-none"
                                >
                                    <span
                                        className={`text-sm md:text-lg font-medium transition-colors duration-200 ${isOpen ? "text-white" : "text-white/85"
                                            }`}
                                    >
                                        {item.question}
                                    </span>

                                    {/* Chevron Icon */}
                                    <span
                                        className={`shrink-0 flex items-center justify-center w-8 h-8 transition-all duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
                                    >
                                        <ChevronDown
                                            size={22}
                                            className="text-white"
                                        />
                                    </span>
                                </button>

                                {/* Collapsible Answer */}
                                <div
                                    className="grid transition-all duration-300 ease-out"
                                    style={{ gridTemplateRows: isOpen ? '1fr' : '0fr' }}
                                >
                                    <div className="overflow-hidden">
                                        <div className="px-5 pb-8 pt-2 text-white/90 text-sm md:text-base leading-relaxed border-t border-white/5">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </SectionContainer>
        </section>
    );
};

export default FAQAccordion;

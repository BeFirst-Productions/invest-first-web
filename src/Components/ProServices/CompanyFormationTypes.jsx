import React from 'react';
import Container from '../Common/Layout/Contianer';

/* ─────────────────────────────────────────
   Reusable Card — grows to fit full content
   ───────────────────────────────────────── */
const Card = ({ id, title, description, align = 'left' }) => (
    <div
        className={`
            relative flex flex-col
            bg-gradient-to-b from-[#061A35] to-[#030D1E]
            border border-[#0B9ECF]/35
            rounded-2xl p-6 xl:p-8
            overflow-hidden
            hover:border-[#0B9ECF]/70
            transition-colors duration-300
            ${align === 'right' ? 'items-end text-right' : 'items-start text-left'}
        `}
    >
        {/* Top glow overlay */}
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#0B9ECF]/12 to-transparent pointer-events-none" />
        {/* Corner accent */}
        <div
            className={`absolute top-0 w-28 h-28 bg-[#0B9ECF]/6 rounded-full blur-2xl pointer-events-none
                ${align === 'right' ? 'right-0' : 'left-0'}`}
        />

        <h3 className="text-4xl xl:text-5xl font-bold text-white/15 mb-2 leading-none">
            {id}
        </h3>
        <h4 className="text-sm lg:text-base xl:text-lg font-bold text-white mb-3 leading-snug">
            {title}
        </h4>
        <p className="text-xs xl:text-sm leading-relaxed">
            {description}
        </p>
    </div>
);

/* ─────────────────────────────────────────
   Main component
   Props:
     data — the `companyFormationTypes` object from the service data file
            { headingRest, description, items[] }
   ───────────────────────────────────────── */
const CompanyFormationTypes = ({ data }) => {
    if (!data) return null;
    const { headingRest, description, items } = data;

    return (
        <section className="py-10 md:py-20 overflow-hidden">

            {/* Section heading */}
            <Container>
                <div className="text-start mb-10 md:mb-16">
                    <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
                        {/* "Types of" is always static + blue */}
                        <span className="text-[#0099CC]">Types of </span>
                        {headingRest}
                    </h2>
                    <p className="max-w-2xl">{description}</p>
                </div>
            </Container>

            {/* ── Desktop grid (lg +) ── */}
            <Container className="hidden lg:block">

                {/* TOP ROW  –  [1fr  2fr  1fr] */}
                <div className="grid grid-cols-[1fr_2fr_1fr] gap-4 xl:gap-5 items-stretch">
                    <Card {...items[0]} />
                    <Card {...items[1]} />
                    <Card {...items[2]} />
                </div>

                {/* SPACING between rows */}
                <div className="my-8 xl:my-10" />

                {/* BOTTOM ROW  –  [1fr  1fr] */}
                <div className="grid grid-cols-2 gap-4 xl:gap-5 items-stretch">
                    <Card {...items[3]} />
                    {items[4] && <Card {...items[4]} align="right" />}
                </div>

            </Container>

            {/* ── Mobile / tablet (below lg) ── */}
            <div className="lg:hidden px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="relative bg-gradient-to-b from-[#061A35] to-[#030D1E]
                                border border-[#0B9ECF]/40 rounded-2xl p-6 overflow-hidden"
                        >
                            <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#0B9ECF]/15 to-transparent pointer-events-none" />
                            <h3 className="text-4xl font-bold text-white/15 mb-1">{item.id}</h3>
                            <h4 className="text-base font-bold text-white mb-2">{item.title}</h4>
                            <p className="text-sm text-gray-400 leading-relaxed">{item.description}</p>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    );
};

export default CompanyFormationTypes;

"use client";
import React, { useRef, useEffect, useState } from 'react';
import Container from '../Common/Layout/Contianer';

const bulletPoints = [
    'Direct access to Freezone authorities without intermediaries',
    'Faster company registration and license issuance',
    'Preferential pricing and cost-effective setup packages',
    'Accurate activity approvals aligned with Freezone regulations',
    'Expert guidance on visas, offices, and operational requirements',
];

function ArrowIcon() {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
            <rect width="26" height="26" rx="4" fill="#0099CC" />
            <path d="M19.7071 13.7071C20.0976 13.3166 20.0976 12.6834 19.7071 12.2929L13.3431 5.92893C12.9526 5.53841 12.3195 5.53841 11.9289 5.92893C11.5384 6.31946 11.5384 6.95262 11.9289 7.34315L17.5858 13L11.9289 18.6569C11.5384 19.0474 11.5384 19.6805 11.9289 20.0711C12.3195 20.4616 12.9526 20.4616 13.3431 20.0711L19.7071 13.7071ZM7 13V14H19V13V12H7V13Z" fill="white" />
        </svg>
    );
}

/**
 * Generates a rounded-rect SVG path with rectangular notch tabs
 * cut into the LEFT side at each notch center y-position.
 * All coords are in actual pixel space (viewBox = card dimensions).
 */
function buildCardPath(W, H, notchCenters) {
    const r = 20;   // main card corner radius (px)
    const tabW = 32;  // full tab protrusion width (px)
    const tabHH =18;  // half-height of each tab slot (px)
    const nr = 8;    // notch corner radius — rounds all 4 corners of every slot (px)

    // Fallback: plain rounded rect before measurements arrive
    if (!W || !H || !notchCenters.length) {
        return `M ${r} 0 H ${W - r} A ${r} ${r} 0 0 1 ${W} ${r} V ${H - r} A ${r} ${r} 0 0 1 ${W - r} ${H} H ${r} A ${r} ${r} 0 0 1 0 ${H - r} V ${r} A ${r} ${r} 0 0 1 ${r} 0 Z`;
    }

    const sorted = [...notchCenters].sort((a, b) => a - b);

    // Clockwise: top → right → bottom → left (go UP left side inserting rounded notches)
    let d = `M ${r} 0 H ${W - r} A ${r} ${r} 0 0 1 ${W} ${r} V ${H - r} A ${r} ${r} 0 0 1 ${W - r} ${H} H ${r} A ${r} ${r} 0 0 1 0 ${H - r}`;

    // Each notch has 4 rounded corners:
    //  ① bottom-outer — concave entry   (sweep=1, arcs inward at card edge)
    //  ② bottom-inner — concave inward  (sweep=0, scoops INTO the slot)
    //  ③ top-inner    — concave inward  (sweep=0, scoops INTO the slot)
    //  ④ top-outer    — concave entry   (sweep=1, arcs inward at card edge)
    for (const cy of [...sorted].reverse()) {
        const bot = cy + tabHH;
        const top = cy - tabHH;
        d += ` V ${bot + nr}`;                                   // ① approach from below
        d += ` A ${nr} ${nr} 0 0 1 ${nr} ${bot}`;               // ① concave at card edge
        d += ` H ${tabW - nr}`;                                  // → toward bottom-right corner
        d += ` A ${nr} ${nr} 0 0 0 ${tabW} ${bot - nr}`;        // ② concave INWARD bottom-right
        d += ` V ${top + nr}`;                                   // ↑ straight up right wall
        d += ` A ${nr} ${nr} 0 0 0 ${tabW - nr} ${top}`;        // ③ concave INWARD top-right
        d += ` H ${nr}`;                                         // ← back toward card edge
        d += ` A ${nr} ${nr} 0 0 1 0 ${top - nr}`;              // ④ concave at card edge
    }

    d += ` V ${r} A ${r} ${r} 0 0 1 ${r} 0 Z`;
    return d;
}

const FreezonePartnerStatus = () => {
    const cardRef = useRef(null);
    const itemRefs = useRef([]);
    const [iconTops, setIconTops] = useState([]);
    const [cardSize, setCardSize] = useState({ w: 0, h: 0 });

    useEffect(() => {
        const calculate = () => {
            if (!cardRef.current) return;
            const cardRect = cardRef.current.getBoundingClientRect();
            const cardTop = cardRect.top;
            const cardH = cardRect.height;
            const cardW = cardRect.width;

            const tops = itemRefs.current
                .filter(Boolean)
                .map((el) => {
                    const rect = el.getBoundingClientRect();
                    return rect.top - cardTop + rect.height / 2;
                });

            setCardSize({ w: cardW, h: cardH });
            setIconTops(tops);
        };

        const raf = requestAnimationFrame(calculate);
        window.addEventListener('resize', calculate);
        return () => {
            cancelAnimationFrame(raf);
            window.removeEventListener('resize', calculate);
        };
    }, []);

    const cardPath = buildCardPath(cardSize.w, cardSize.h, iconTops);

    return (
        <section className="py-10 md:py-20 overflow-hidden">
            <Container>
                <div ref={cardRef} className="relative w-full">

                    {/* Background SVG — viewBox matches actual card pixel dimensions for 1:1 coord mapping */}
                    <div className="absolute inset-0 w-full h-full" aria-hidden="true">
                        {cardSize.w > 0 && (
                            <svg
                                viewBox={`0 0 ${cardSize.w} ${cardSize.h}`}
                                preserveAspectRatio="none"
                                className="w-full h-full"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d={cardPath} fill="#000F2B" />
                                <path d={cardPath} fill="none" stroke="#0099CC" strokeWidth="2" />
                            </svg>
                        )}
                    </div>

                    {/* Arrow icons — absolutely positioned at each li's vertical center */}
                    {iconTops.map((top, i) => (
                        <div
                            key={i}
                            className="absolute left-0 z-20"
                            style={{ top: top - 13 }}  // 13 = half of 26px icon height
                        >
                            <ArrowIcon />
                        </div>
                    ))}

                    {/* Content */}
                    <div className="relative z-10  py-8 md:py-14">
<div className="px-6 md:px-10 lg:px-12">
                        {/* Heading */}
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold max-w-base md:max-w-lg text-white leading-snug mb-4">
                            <span className="text-[#0099CC]">Why</span>{' '}
                            Our Authorized Freezone Partner Status Matters
                        </h2>                       
                        {/* Subtitle */}
                        <p className="  text-base md:text-lg leading-relaxed mb-8 max-w-3xl">
                            As an authorized channel partner of 20 UAE Freezones, Invest First provides
                            unmatched advantages during company formation UAE:
                        </p>
</div>
                        {/* Bullet points */}
                      <div className="px-10 md:px-14">
                          <ul className="mb-10">
                            {bulletPoints.map((point, index) => (
                                <li
                                    key={index}
                                    ref={(el) => { itemRefs.current[index] = el; }}
                                    className="flex items-center gap-3 py-3 "
                                >
                                    <span className="text-base md:text-lg leading-relaxed">
                                        {point}
                                    </span>
                                </li>
                            ))}
                        </ul>

                      </div>
                        {/* Footer note */}
                      <div className="px-6 md:px-8 lg:px-12">
                          <p className=" text-base md:text-lg leading-relaxed max-w-3xl pt-0 ">
                            This partnership strength allows us to recommend the right Freezone based on your
                            business activity, budget, visa needs, and long-term scalability — not just the
                            cheapest option.
                        </p>

                      </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default FreezonePartnerStatus;

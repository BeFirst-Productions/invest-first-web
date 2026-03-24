"use client";
import React, { useRef, useState, useEffect, useCallback } from 'react';
import { Calendar, FileText, Building2, FileCheck, Briefcase, Rocket } from 'lucide-react';
import ProcessCard from '../cards/ProcessCard';
import Container from '../Common/Layout/Contianer';
import SectionTag from '../Common/SectionTag';

const BusinessSetupProcess = () => {
    const containerRef = useRef(null);
    const cardRefs = useRef([]);
    const [paths, setPaths] = useState({ segments: [], ray: '', dots: [] });

    const setCardRef = useCallback((index) => (el) => {
        cardRefs.current[index] = el;
    }, []);

    useEffect(() => {
        const calculate = () => {
            const container = containerRef.current;
            if (!container) return;
            const refs = cardRefs.current;
            if (refs.length < 6 || refs.some(r => !r)) return;

            const cr = container.getBoundingClientRect();
            const cards = refs.map(ref => {
                const r = ref.getBoundingClientRect();
                return {
                    l: r.left - cr.left,
                    r: r.right - cr.left,
                    t: r.top - cr.top,
                    b: r.bottom - cr.top,
                    cx: (r.left + r.right) / 2 - cr.left,
                    cy: (r.top + r.bottom) / 2 - cr.top,
                };
            });

            const R = 15; // corner radius
            const segments = [];
            const dots = [];
            const rayParts = [];

            // Connection order by step: 0→1→2→3→4→5
            const conns = [[0, 1], [1, 2], [2, 3], [3, 4], [4, 5]];

            conns.forEach(([fi, ti], idx) => {
                const a = cards[fi], b = cards[ti];
                let d = '';

                if (fi === 2 && ti === 3) {
                    // U-turn: bottom-center of card3 → top-center of card4
                    const midY = (a.b + b.t) / 2;
                    d = `M ${a.cx} ${a.b} V ${midY - R} Q ${a.cx} ${midY}, ${a.cx - R} ${midY} H ${b.cx + R} Q ${b.cx} ${midY}, ${b.cx} ${midY + R} V ${b.t}`;
                    dots.push({ x: a.cx, y: a.b }, { x: b.cx, y: b.t });
                } else {
                    // Step-line: right-center → left-center
                    const sx = a.r, sy = a.cy, ex = b.l, ey = b.cy;
                    const mx = (sx + ex) / 2;

                    if (Math.abs(sy - ey) < R * 2) {
                        d = `M ${sx} ${sy} H ${ex}`;
                    } else if (ey > sy) {
                        d = `M ${sx} ${sy} H ${mx - R} Q ${mx} ${sy}, ${mx} ${sy + R} V ${ey - R} Q ${mx} ${ey}, ${mx + R} ${ey} H ${ex}`;
                    } else {
                        d = `M ${sx} ${sy} H ${mx - R} Q ${mx} ${sy}, ${mx} ${sy - R} V ${ey + R} Q ${mx} ${ey}, ${mx + R} ${ey} H ${ex}`;
                    }
                    dots.push({ x: sx, y: sy }, { x: ex, y: ey });
                }
                segments.push(d);

                // Build ray path
                if (idx === 0) {
                    rayParts.push(d);
                } else {
                    // Bridge through the previous card (hidden behind it)
                    const prev = cards[conns[idx - 1][1]];
                    if (fi === 2 && ti === 3) {
                        rayParts.push(`L ${a.cx} ${a.cy} V ${a.b}`);
                        const midY = (a.b + b.t) / 2;
                        rayParts.push(`V ${midY - R} Q ${a.cx} ${midY}, ${a.cx - R} ${midY} H ${b.cx + R} Q ${b.cx} ${midY}, ${b.cx} ${midY + R} V ${b.t}`);
                    } else {
                        rayParts.push(`H ${a.r}`);
                        const sx = a.r, sy = a.cy, ex = b.l, ey = b.cy;
                        const mx = (sx + ex) / 2;
                        if (Math.abs(sy - ey) < R * 2) {
                            rayParts.push(`H ${ex}`);
                        } else if (ey > sy) {
                            rayParts.push(`H ${mx - R} Q ${mx} ${sy}, ${mx} ${sy + R} V ${ey - R} Q ${mx} ${ey}, ${mx + R} ${ey} H ${ex}`);
                        } else {
                            rayParts.push(`H ${mx - R} Q ${mx} ${sy}, ${mx} ${sy - R} V ${ey + R} Q ${mx} ${ey}, ${mx + R} ${ey} H ${ex}`);
                        }
                    }
                }
            });

            setPaths({ segments, ray: rayParts.join(' '), dots });
        };

        const timer = setTimeout(calculate, 150);
        window.addEventListener('resize', calculate);
        return () => { clearTimeout(timer); window.removeEventListener('resize', calculate); };
    }, []);

    const steps = [
        {
            id: "01",
            title: "Book a Consultation",
            description: "Schedule a free consultation to understand business goals, jurisdiction options, costs, timelines, and required documentation clearly upfront today.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="18" height="18" rx="2" stroke="white" strokeWidth="1.5" />
                    <path d="M16 2V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M8 2V6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3 10H21" stroke="white" strokeWidth="1.5" />
                    <path d="M8 14H8.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 14H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M16 14H16.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M8 18H8.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                    <path d="M12 18H12.01" stroke="white" strokeWidth="2" strokeLinecap="round" />
                </svg>
            ),
            position: "top-left"
        },
        {
            id: "02",
            title: "Choose License Type",
            description: "Select the right UAE license based on activities, location, ownership needs, budget, scalability, and regulatory requirements compliance goals.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14 2V8H20" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M16 13H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M16 17H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M10 9H8" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            position: "top-right"
        },
        {
            id: "03",
            title: "Open Bank Account",
            description: "Open a corporate bank account with expert support, compliance checks, documentation preparation, and bank coordination across UAE efficiently.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 21H21" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M3 7L12 3L21 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 10V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M10 10V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M14 10V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M18 10V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            position: "middle-right"
        },
        {
            id: "04",
            title: "Process Government Approvals",
            description: "We manage government approvals, replies, attestations, and documentation processing to ensure accuracy, speed, and compliance nationwide smoothly.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="white" strokeWidth="1.5" />
                    <path d="M9 12L11 14L15 10" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M12 2V4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M12 20V22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M2 12H4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M20 12H22" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            position: "bottom-left"
        },
        {
            id: "05",
            title: "Get Your License",
            description: "Receive your UAE business license promptly, enabling legal operations, visa processing, invoicing, and contracting across Emirates without delays.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <image href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAC80lEQVR4nO2XTWgTURCAXw96EVEE8a9aMrNpsagIxYPgoYKiHvqz87Iotf6h9CCIevEHleZmtd2ZpL1YrAd/QFSwCiKKiJ7Uk1hEb4oXLx6KKP5bIy8tdJMmadLspj3sB3NYNtl933szb94qFRISEhISEhLiL5aTrAfNg6jlUVABmgfqms/NVUEAJHdQSyroAOLDAQnwk4oIaOlp6OifFawAyakI8Sa/AohvZkn8Ac0PwElsCEZAS6NvD1ZKoZZ47hXhf6D5TEUEap3eCNhyBB1ZX5YAyY8cdXEiUIFIU2IREg+PDWAkYic2T1lASzxKDEDyNGMlyG0LTMDSifbMGZOL5QgopVS90zkbtTwerwv+WVbqFhJAcjdmLXlnuQKGmhaZj5pfj6cXD5t+pIKoAdQsSPIZie+D0zXPDwEDtvQsB80fPfc/rLB5iZrBu1A8+37UkbWg5YsnRV+uae+e45NAqgpjsjs985rfmuIDktOlvGAyAQOSbAHi3560uqTKF0hVAfHlPF31lclhvwQMGOMDnu12pKR6yCWANrfDgxOSd5YnXk+XoBe74uH/znBOYbZwGki+anZ834VqtUEByua5qXQTiI2h46ZwRaDVOA/EKuw8oFq9/ez4Sf544ZhBPAcmerq9YwMg31cOC1dV1/jZej2t4u1DlgfiHROVrPMhHurrsApL3rTDYo2s5b98CJP4jXrdfSNpBo+X5WuWahl+GYvAMkuxAkjON3ghe7ZgAFmVjXTKesZWP3PxV0ou7lsdqzNtdmH/T3NHv3MdLt5XHCg0X3x8uvwmSfBydrx37r/wT4X0dEdBqgMSnOnF3kwT+pTpt8nHb8qMkKxd5wTwgeQuI/50hVeBirIPrle61Qun1jr2gXRKJ34kf0IV8FJdKu9qA3n9WwnR/A+lC+ED8/PvXHrjD8vYpp1uAt/ceNKWHOn5p92RJZMmxOs9szj3r397UMCQ7NKSqz53x2gUnK5SbVG3yPq25MUvl+RUNCxK/a+XMpcwIuE+VsDaBZbvjfXATkvzZdjgSn8uMwLJNB27RDmuF0Pea3FCUl5qE0D96iYAkb9SRLudNZqiMBzVhsq28boSA5CQY/lmnUPRKyyreqe0ZUAyey5SAzjY6HliWvoqGd2sptfeNesFCNPxZHdmzcWJnCu3oTULmdyT+MLrd/rphKCSeyhfCx5y+QKXL1oRSQuJOIfEmp78wPaSzDRD/PXsX57P9Y/km0NlGxwM08h2SnNdODUZ+0v/HNGGTYv4/mmUQlO7rV2QAAAAASUVORK5CYII=" x="0" y="0" width="48" height="48" />
                </svg>
            ),
            position: "bottom-middle"
        },
        {
            id: "06",
            title: "Start Operations",
            description: "Launch operations confidently with ongoing PRO services, renewals, compliance support, and post setup assistance for sustainable business growth.",
            icon: (
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.5 16.5C3.5 17.5 3 19.5 3 21C4.5 21 6.5 20.5 7.5 19.5L15 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.5 4L18 2L22 6L20 9.5L14.5 4Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M14.5 4L9 9.5C8 10.5 7.5 12 8 13.5L10.5 16C12 16.5 13.5 16 14.5 15L20 9.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M5 14L3.5 12.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                    <path d="M10 19L11.5 20.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                </svg>
            ),
            position: "bottom-right"
        }
    ];

    return (
        <section className="relative w-full py-16 md:py-24 overflow-hidden ">
            {/* Header divider dashed line */}
            <div className="absolute top-0 left-1/4 w-[1px] h-32 border-l border-dashed border-blue-500/30 hidden xl:block" />

            <Container>
                <div className="relative z-10">
                    {/* Header */}
                    <div className="mb-12 xl:mb-0">
                        <SectionTag text="How It Works" />
                        <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mt-4">
                            Business Setup<br />Process
                        </h2>
                    </div>

                    {/* Process Flow - Desktop (xl onwards) */}
                    <div ref={containerRef} className="hidden xl:block relative max-w-[1400px] mx-auto min-h-[1000px]">
                        {/* Dynamic Connection Lines SVG */}
                        {paths.ray && (
                            <svg
                                className="absolute inset-0 w-full h-full pointer-events-none"
                                style={{ zIndex: 1 }}
                                fill="none"
                            >
                                <defs>
                                    <linearGradient id="processConnGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop stopColor="#780343" />
                                        <stop offset="1" stopColor="#00335A" />
                                    </linearGradient>
                                    <radialGradient id="processDotGrad" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stopColor="#780343" />
                                        <stop offset="100%" stopColor="#00335A" stopOpacity="0.8" />
                                    </radialGradient>
                                    <filter id="processRayBlur" x="-100%" y="-100%" width="300%" height="300%">
                                        <feGaussianBlur in="SourceGraphic" stdDeviation="3" />
                                        <feComposite in2="SourceGraphic" operator="over" />
                                    </filter>
                                </defs>

                                {/* Static connection segments */}
                                {paths.segments.map((d, i) => (
                                    <path
                                        key={i}
                                        d={d}
                                        stroke="url(#processConnGrad)"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        opacity="0.5"
                                    />
                                ))}

                                {/* Endpoint dots */}
                                {paths.dots.map((dot, i) => (
                                    <circle key={i} cx={dot.x} cy={dot.y} r="4" fill="url(#processDotGrad)" />
                                ))}

                                {/* Animated ray */}
                                <path
                                    d={paths.ray}
                                    stroke="url(#processConnGrad)"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    filter="url(#processRayBlur)"
                                    className="process-ray-anim"
                                />
                            </svg>
                        )}

                        <div className="relative z-10 grid grid-cols-3 gap-x-12">
                            {/* Column 1 - Left */}
                            <div className="flex flex-col gap-[400px] pt-[200px]">
                                <div ref={setCardRef(0)} className="w-[320px] 2xl:w-[380px]"><ProcessCard step={steps[0]} /></div>
                                <div ref={setCardRef(3)} className="w-[320px] 2xl:w-[380px]"><ProcessCard step={steps[3]} /></div>
                            </div>

                            {/* Column 2 - Middle */}
                            <div className="flex flex-col gap-[120px] pt-[420px]">
                                <div ref={setCardRef(1)} className="w-[320px] 2xl:w-[380px]"><ProcessCard step={steps[1]} /></div>
                                <div ref={setCardRef(4)} className="w-[320px] 2xl:w-[380px]"><ProcessCard step={steps[4]} /></div>
                            </div>

                            {/* Column 3 - Right */}
                            <div className="flex flex-col gap-[550px] pt-[80px]">
                                <div ref={setCardRef(2)} className="w-[320px] 2xl:w-[380px]"><ProcessCard step={steps[2]} /></div>
                                <div ref={setCardRef(5)} className="w-[320px] 2xl:w-[380px]"><ProcessCard step={steps[5]} /></div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile/Tablet Layout (up to lg) */}
                    <div className="xl:hidden grid grid-cols-1 md:grid-cols-2 gap-8">
                        {steps.map((step) => (
                            <ProcessCard key={step.id} step={step} />
                        ))}
                    </div>
                </div>
            </Container>

            <style jsx>{`
                @keyframes processRay {
                    0% { stroke-dashoffset: -6800; }
                    100% { stroke-dashoffset: 6800; }
                }
                .process-ray-anim {
                    stroke-dasharray: 200 3200;
                    animation: processRay 20s linear infinite;
                }
            `}</style>
        </section>
    );
};

export default BusinessSetupProcess;


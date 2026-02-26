"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';
import PrimaryButton from '../Common/Buttons/PrimaryButton';

const ServiceCard = ({
    number = "01",
    title = "Business Setup",
    description = "Complete UAE business setup services ensuring smooth incorporation, licensing, compliance, and fast market entry.",
    icon,
    image,
    link = "/",
    isViewMore = false,
    onClick
}) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 294, height: 220 });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current;
                setDimensions({ width: clientWidth, height: clientHeight });
            }
        };

        // Initial measurement
        updateDimensions();

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === containerRef.current) {
                    // entry.contentRect gives the size of the content box. 
                    // However, we want the SVG to cover the whole element including padding if strictly absolute.
                    // But our SVG is "inset-0". 
                    // Let's use getBoundingClientRect or entry.contentRect depending on box-sizing.
                    // Tailwind default is border-box. clientWidth includes padding but not border.
                    const { clientWidth, clientHeight } = entry.target;
                    setDimensions({ width: clientWidth, height: clientHeight });
                }
            }
        });

        if (containerRef.current) {
            resizeObserver.observe(containerRef.current);
        }

        return () => resizeObserver.disconnect();
    }, []);

    // Provide a fallback dimension to prevent 0 values causing invalid path
    const w = dimensions.width || 294;
    const h = dimensions.height || 220;

    // Constants for the shape
    const r = 24; // Corner radius (cr)
    const nr = 12; // Notch radius (nr)
    const notchD = 74; // Depth of notch (width from left)
    const notchH = 80; // Height of notch
    const notchY = 40; // Top offset (space from top)

    // Path logic:
    // Left edge has a "U" shape cutout (concave) starting at `notchY`.
    // Tracing Clockwise from Top-Left (after corner).

    const pathD = useMemo(() => {
        if (w <= 0 || h <= 0) return "";

        return `
            M ${r} 0
            L ${w - r} 0
            Q ${w} 0 ${w} ${r}
            L ${w} ${h - r}
            Q ${w} ${h} ${w - r} ${h}
            L ${r} ${h}
            Q 0 ${h} 0 ${h - r}
            
            L 0 ${notchY + notchH + nr}
            A ${nr} ${nr} 0 0 1 ${nr} ${notchY + notchH}
            L ${notchD - nr} ${notchY + notchH}
            A ${nr} ${nr} 0 0 0 ${notchD} ${notchY + notchH - nr}
            L ${notchD} ${notchY + nr}
            A ${nr} ${nr} 0 0 0 ${notchD - nr} ${notchY}
            L ${nr} ${notchY}
            A ${nr} ${nr} 0 0 1 0 ${notchY - nr}
            
            L 0 ${r}
            Q 0 0 ${r} 0
            Z
        `.replace(/\s+/g, ' ').trim();
    }, [w, h, notchY, notchH, notchD, r, nr]);

    return (
        <div
            ref={containerRef}
            className="relative w-full min-h-[220px] h-full group flex flex-col"
            style={{ overflow: 'visible' }}
        >
            {/* SVG Background Layer */}
            <div className="absolute inset-0 z-0 w-full h-full pointer-events-none">
                <svg
                    width="100%"
                    height="100%"
                    viewBox={`0 0 ${w} ${h}`}
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    style={{ overflow: 'visible' }}
                >
                    <defs>
                        <linearGradient id={`borderGradient-${number}`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#db005f" />
                            <stop offset="100%" stopColor="#0093e9" />
                        </linearGradient>
                        <linearGradient id={`bgGradient-${number}`} x1="0%" y1="0%" x2="0%" y2="100%">
                            <stop offset="0%" stopColor="rgba(20, 30, 48, 0.95)" />
                            <stop offset="100%" stopColor="rgba(36, 59, 85, 0.95)" />
                        </linearGradient>
                    </defs>

                    <path
                        d={pathD}
                        fill="rgba(217, 217, 217, 0.05)"
                        stroke={`url(#borderGradient-${number})`}
                        strokeWidth="3"
                        className="transition-all duration-300 group-hover:stroke-[4px] group-hover:drop-shadow-[0_0_8px_rgba(219,0,95,0.5)] opacity-80 group-hover:opacity-100"
                    />
                    {/* Background fill on hover (optional enhancement for "dynamic" feel) */}
                    <path
                        d={pathD}
                        fill="#D9D9D9"
                        className="opacity-0 group-hover:opacity-10 transition-opacity duration-300"
                        stroke="none"
                    />
                </svg>
            </div>

            {/* Content Container */}
            {/* Padding ensures content doesn't hit the edges or the notch */}
            <div className="relative z-10 w-full h-full pt-[24px] pl-[90px] pr-6 pb-6 flex flex-col justify-between flex-grow">

                {/* Icon Container (Absolute Positioned into the notch) */}
                <div
                    className={`absolute left-0 w-[74px] flex items-center justify-center pointer-events-none transition-transform duration-300 ${isViewMore ? 'group-hover:translate-x-1' : ''}`}
                    style={{ top: notchY, height: notchH }}
                >
                    <div className={`w-[50px] h-[50px] rounded-xl border border-white/20 flex items-center justify-center backdrop-blur-sm shadow-inner overflow-hidden ${isViewMore ? 'bg-[#980e4e] border-[#db005f]' : 'bg-white/5'}`}>
                        {image ? (
                            <img src={image} alt={title} className="w-full h-full object-contain p-2" />
                        ) : (
                            <div className="text-white">
                                {icon ? icon : <span className="text-xl">⚡</span>}
                            </div>
                        )}
                    </div>
                </div>

                {isViewMore ? (
                    // View More Layout: Centered Title
                    <div className="flex-grow flex items-center justify-center pt-8">
                        <h3 className="text-white text-3xl font-bold text-center leading-tight group-hover:text-[#db005f] transition-colors duration-300">
                            {title}
                        </h3>
                    </div>
                ) : (
                    // Standard Layout
                    <>
                        {/* Header */}
                        <div className="mb-4">
                            <h3 className="text-white text-xl font-semibold leading-tight mb-2 group-hover:text-[#db005f] transition-colors duration-300">
                                {title}
                            </h3>
                            <p className="text-gray-300 text-xs leading-relaxed line-clamp-4 group-hover:text-white transition-colors duration-300">
                                {description}
                            </p>
                        </div>

                        {/* Footer: Number and Button */}
                        <div className="flex items-end justify-between mt-auto w-full">
                            {/* Big Number Background */}
                            <span className="text-5xl font-bold text-white/5 select-none absolute bottom-4 left-6 z-[-1] group-hover:text-white/10 transition-colors duration-300">
                                {number}
                            </span>

                            {/* Placeholder to push button right if needed, or just justify-end in parent */}
                            <div className="flex-grow"></div>

                            <div className="scale-90 origin-bottom-right transition-transform duration-300 group-hover:scale-100">
                                <PrimaryButton text="Button" url={link} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </div>
    );
};

export default ServiceCard;

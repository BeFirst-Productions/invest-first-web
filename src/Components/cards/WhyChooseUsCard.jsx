"use client";
import React, { useState, useEffect, useRef, useMemo } from 'react';

const WhyChooseUsCard = ({
    title = "End-to-end support",
    description = "Complete assistance from planning to licensing, visas, banking, compliance, and post setup operations across UAE business requirements.",
    icon,
    image,
    position = "left" // "left", "right", "top", "bottom"
}) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

    useEffect(() => {
        const updateDimensions = () => {
            if (containerRef.current) {
                const { clientWidth, clientHeight } = containerRef.current;
                setDimensions({ width: clientWidth, height: clientHeight });
            }
        };

        updateDimensions();

        const resizeObserver = new ResizeObserver((entries) => {
            for (const entry of entries) {
                if (entry.target === containerRef.current) {
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

    const w = dimensions.width || 269;
    const h = dimensions.height || 220;

    // Shape Constants - matching Figma specs
    const r = 12; // Border radius from Figma
    const notchH = 60; // Height/Width of the notch area
    const notchD = 10; // Depth of the notch (indentation)

    const pathD = useMemo(() => {
        if (w <= 0 || h <= 0) return "";

        const cy = h / 2;
        const cx = w / 2;

        // Determine which notches to show based on position
        // Left/Right positions get BOTH left and right notches (vertical)
        // Top/Bottom positions get BOTH top and bottom notches (horizontal)
        const hasLeftNotch = position === 'left' || position === 'right';
        const hasRightNotch = position === 'left' || position === 'right';
        const hasTopNotch = position === 'top' || position === 'bottom';
        const hasBottomNotch = position === 'top' || position === 'bottom';

        let d = `M ${r} 0`; // Start Top-Left after radius

        // TOP EDGE
        if (hasTopNotch) {
            // Add horizontal notch on top
            d += `
                L ${cx - notchH / 2} 0
                L ${cx - notchH / 2 + notchD} ${notchD}
                L ${cx + notchH / 2 - notchD} ${notchD}
                L ${cx + notchH / 2} 0
            `;
        }
        d += ` L ${w - r} 0 Q ${w} 0 ${w} ${r}`; // Top-Right Corner

        // RIGHT EDGE
        if (hasRightNotch) {
            // Add vertical notch on right
            d += `
                L ${w} ${cy - notchH / 2}
                L ${w - notchD} ${cy - notchH / 2 + notchD}
                L ${w - notchD} ${cy + notchH / 2 - notchD}
                L ${w} ${cy + notchH / 2}
            `;
        }
        d += ` L ${w} ${h - r} Q ${w} ${h} ${w - r} ${h}`; // Bottom-Right Corner

        // BOTTOM EDGE
        if (hasBottomNotch) {
            // Add horizontal notch on bottom
            d += `
                L ${cx + notchH / 2} ${h}
                L ${cx + notchH / 2 - notchD} ${h - notchD}
                L ${cx - notchH / 2 + notchD} ${h - notchD}
                L ${cx - notchH / 2} ${h}
            `;
        }
        d += ` L ${r} ${h} Q 0 ${h} 0 ${h - r}`; // Bottom-Left Corner

        // LEFT EDGE
        if (hasLeftNotch) {
            // Add vertical notch on left
            d += `
                L 0 ${cy + notchH / 2}
                L ${notchD} ${cy + notchH / 2 - notchD}
                L ${notchD} ${cy - notchH / 2 + notchD}
                L 0 ${cy - notchH / 2}
            `;
        }
        d += ` L 0 ${r} Q 0 0 ${r} 0 Z`; // Top-Left Corner & Close

        return d.replace(/\s+/g, ' ').trim();
    }, [w, h, position]);

    // Tab rendering based on position - always render both opposite tabs
    const renderTabs = () => {
        const cy = h / 2;
        const cx = w / 2;

        // For left/right positions, render both left and right tabs
        if (position === 'left' || position === 'right') {
            return (
                <>
                    {/* Left Tab - Teal/Cyan */}
                    <path
                        d={`
                            M 0 ${cy - notchH / 2}
                            L ${notchD} ${cy - notchH / 2 + notchD}
                            L ${notchD} ${cy + notchH / 2 - notchD}
                            L 0 ${cy + notchH / 2}
                            Z
                        `}
                        fill="rgba(0, 51, 90, 1)"
                        className="opacity-100"
                    />
                    {/* Right Tab - Teal/Cyan */}
                    <path
                        d={`
                            M ${w} ${cy - notchH / 2}
                            L ${w - notchD} ${cy - notchH / 2 + notchD}
                            L ${w - notchD} ${cy + notchH / 2 - notchD}
                            L ${w} ${cy + notchH / 2}
                            Z
                        `}
                        fill="rgba(0, 51, 90, 1)"
                        className="opacity-100"
                    />
                </>
            );
        }

        // For top/bottom positions, render both top and bottom tabs
        if (position === 'top' || position === 'bottom') {
            return (
                <>
                    {/* Top Tab - Teal/Cyan */}
                    <path
                        d={`
                            M ${cx - notchH / 2} 0
                            L ${cx - notchH / 2 + notchD} ${notchD}
                            L ${cx + notchH / 2 - notchD} ${notchD}
                            L ${cx + notchH / 2} 0
                            Z
                        `}
                        fill="rgba(0, 51, 90, 1)"
                        className="opacity-100"
                    />
                    {/* Bottom Tab - Teal/Cyan */}
                    <path
                        d={`
                            M ${cx - notchH / 2} ${h}
                            L ${cx - notchH / 2 + notchD} ${h - notchD}
                            L ${cx + notchH / 2 - notchD} ${h - notchD}
                            L ${cx + notchH / 2} ${h}
                            Z
                        `}
                        fill="rgba(0, 51, 90, 1)"
                        className="opacity-100"
                    />
                </>
            );
        }

        return null;
    };

    // Generate unique ID for this card instance
    const cardId = useMemo(() => `card-${Math.random().toString(36).substr(2, 9)}`, []);

    return (
        <>
            {/* Add CSS animation for gradient flow */}
            <style jsx>{`
                @keyframes gradientFlow {
                    0% {
                        stop-color: rgba(120, 3, 67, 1);
                    }
                    25% {
                        stop-color: rgba(0, 51, 90, 1);
                    }
                    50% {
                        stop-color: rgba(120, 3, 67, 1);
                    }
                    75% {
                        stop-color: rgba(0, 51, 90, 1);
                    }
                    100% {
                        stop-color: rgba(120, 3, 67, 1);
                    }
                }

                @keyframes gradientFlowReverse {
                    0% {
                        stop-color: rgba(0, 51, 90, 1);
                    }
                    25% {
                        stop-color: rgba(120, 3, 67, 1);
                    }
                    50% {
                        stop-color: rgba(0, 51, 90, 1);
                    }
                    75% {
                        stop-color: rgba(120, 3, 67, 1);
                    }
                    100% {
                        stop-color: rgba(0, 51, 90, 1);
                    }
                }

                .animate-gradient-flow-start {
                    animation: gradientFlow 3s ease-in-out infinite;
                }

                .animate-gradient-flow-end {
                    animation: gradientFlowReverse 3s ease-in-out infinite;
                }
            `}</style>

            <div className="relative w-full h-full group">
                {/* SVG Background with Animated Border */}
                <div className="absolute inset-0 z-0 pointer-events-none">
                    <svg
                        width="100%"
                        height="100%"
                        viewBox={`0 0 ${w} ${h}`}
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        style={{ overflow: 'visible' }}
                    >
                        <defs>
                            {/* Animated Gradient Border - Electric Current Effect */}
                            <linearGradient id={`borderGrad-${cardId}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" className="animate-gradient-flow-start" />
                                <stop offset="50%" stopColor="rgba(60, 27, 78, 1)" />
                                <stop offset="100%" className="animate-gradient-flow-end" />
                            </linearGradient>

                            {/* Dark Navy Background */}
                            <linearGradient id={`fillGrad-${cardId}`} x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stopColor="#0a1628" />
                                <stop offset="100%" stopColor="#0d1b2e" />
                            </linearGradient>
                        </defs>

                        {/* Main Card Body with Animated Border */}
                        <path
                            d={pathD}
                            fill={`url(#fillGrad-${cardId})`}
                            stroke={`url(#borderGrad-${cardId})`}
                            strokeWidth="3"
                            className="transition-all duration-300"
                        />

                        {/* Render the Teal Tabs based on position */}
                        {renderTabs()}
                    </svg>
                </div>

                {/* Content Container */}
                <div
                    ref={containerRef}
                    className="relative z-10 px-6 py-6 flex flex-col gap-4 text-left min-h-[220px] justify-start items-start"
                >
                    {/* Top Row: Icon/Image + Title */}
                    <div className="w-full flex items-center gap-4">
                        {/* Icon/Image Box */}
                        <div className="w-14 h-14 flex-shrink-0 rounded-xl border-2 border-[rgba(255, 255, 255, 1)] flex items-center justify-center bg-[#0a1628] backdrop-blur-sm transition-all duration-300 overflow-hidden">
                            {image ? (
                                <img
                                    src={image}
                                    alt={title}
                                    className="w-8 h-8 object-contain"
                                />
                            ) : icon ? (
                                <div className="text-white text-2xl transition-transform duration-300">
                                    {icon}
                                </div>
                            ) : (
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="12" cy="12" r="10" />
                                    <circle cx="12" cy="12" r="6" />
                                    <circle cx="12" cy="12" r="2" />
                                </svg>
                            )}
                        </div>

                        {/* Title - matching Figma typography */}
                        <h3 className="text-white text-[20px] font-medium leading-tight tracking-normal flex-1">
                            {title}
                        </h3>
                    </div>

                    {/* Description - matching Figma typography */}
                    <p className="text-white text-lg leading-relaxed font-normal w-full">
                        {description}
                    </p>
                </div>
            </div>
        </>
    );
};

export default WhyChooseUsCard;

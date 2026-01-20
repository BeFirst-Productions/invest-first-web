"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function GradientCard({
    count = "500+",
    label = "Satisfied Customers",
    className = "",
}) {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ width: 300, height: 300 });

    // Update dimensions on resize
    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;

        const updateSize = () => {
            setDimensions({
                width: el.offsetWidth,
                height: el.offsetHeight,
            });
        };

        updateSize(); // Initial
        const observer = new ResizeObserver(updateSize);
        observer.observe(el);

        return () => observer.disconnect();
    }, []);

    // SVG Path Calculation
    // Shape: 
    // 1. Start Top-Left (Rounded)
    // 2. Line to Top-Right (Stop before Notch)
    // 3. Curve Down (Standard Corner?) -> No, "Stepped"
    //    Actually, looking at the image: 
    //    Main Rect Top Edge -> Curve DOWN -> Notch Bottom Edge -> Curve UP -> Notch Right Edge?
    //    Wait, the logo is at the top right corner.
    //    So the shape "dips" to accommodate the logo, or the logo "pops out"?
    //    Reference image show the border enclosing the logo.
    //    The logo block looks *separate*?
    //    Border goes around the main block, then curves *in* (concave) to the logo block?
    //    Let's assume: Main body is large. Logo body is a small square at Top Right.
    //    Connection is a smooth S-curve? or Rounded Corner?
    //    Let's try a standard inverted corner.

    const width = dimensions.width;
    const height = dimensions.height;


    // Shape Logic:
    // Bento-style card: Rounded rectangle with a "Bite" (Notch) at the Top-Right.



    const cr = 40; // Larger Card Corner Radius for premium look
    const nr = 40; // Notch Inner Radius

    // Notch Dimensions
    const notchW = 120;
    const notchH = 120;

    // Path Points (Clockwise):
    const pathData = `
    M 0,${cr}
    A ${cr},${cr} 0 0 1 ${cr},0
    L ${width - notchW - nr}, 0
    A ${nr},${nr} 0 0 1 ${width - notchW}, ${nr}
    L ${width - notchW}, ${notchH - nr}
    A ${nr},${nr} 0 0 0 ${width - notchW + nr}, ${notchH}
    L ${width - cr}, ${notchH}
    A ${cr},${cr} 0 0 1 ${width}, ${notchH + cr}
    L ${width}, ${height - cr}
    A ${cr},${cr} 0 0 1 ${width - cr}, ${height}
    L ${cr}, ${height}
    A ${cr},${cr} 0 0 1 0, ${height - cr}
    Z
  `;

    // Ray Animation Logic
    const pathRef = useRef(null);

    useEffect(() => {
        const path = pathRef.current;
        if (!path || !width || !height) return;

        const length = path.getTotalLength();
        // Ray length: ~40% of total length? Or fixed pixels?
        // Let's make it proportional so it looks consistent on resize
        const rayLength = length * 0.4;

        // Reset
        gsap.killTweensOf(path);

        // Setup DashArray: [dash, gap]
        // We want a gap big enough that we only see one ray (or we can loop cleanly)
        // dash = rayLength
        // gap = length (so minimal overlap)
        gsap.set(path, {
            strokeDasharray: `${rayLength} ${length}`,
            strokeDashoffset: rayLength,
            opacity: 1
        });

        // Animate Offset
        // Move from rayLength to -length (covers the full loop)
        gsap.to(path, {
            strokeDashoffset: -length,
            duration: 2.5, // 2.5s per loop
            ease: "none",
            repeat: -1
        });

    }, [width, height, pathData]); // Re-run when shape changes

    return (
        <div
            ref={containerRef}
            className={`relative w-full max-w-md aspect-[1/1] ${className}`}
            style={{ overflow: 'visible' }}
        >
            <svg
                width="100%"
                height="100%"
                viewBox={`0 0 ${width} ${height}`}
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="absolute inset-0 w-full h-full pointer-events-none"
            >
                <defs>
                    <linearGradient id="cardBorderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="rgba(120,3,67,1)" />
                        <stop offset="100%" stopColor="rgba(0,51,90,1)" />
                    </linearGradient>
                </defs>

                {/* Background Fill (Dark) and Base Border */}
                <path
                    d={pathData}
                    fill="#0a0a0a"
                    stroke="rgba(255,255,255,0.1)"
                    strokeWidth="2"
                />

                {/* Traveling Gradient Ray */}
                <path
                    ref={pathRef}
                    d={pathData}
                    fill="none"
                    stroke="url(#cardBorderGrad)"
                    strokeWidth="4"
                    strokeLinecap="round" // Soft ends for the ray
                />
            </svg>

            {/* Content */}
            <div className="relative w-full h-full p-8 flex flex-col justify-end z-10">

                {/* Logo in Notch Area */}
                {/* Positioned absolutely to match the SVG notch */}
                <div
                    className="absolute top-0 right-0 flex items-center justify-center"
                    style={{ width: notchW, height: notchH }}
                >
                    {/* Logo Placeholder - Dropbox style */}
                    <div className="w-16 h-16 text-[#3b82f6] drop-shadow-lg filter">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M7 3l5 3.33L17 3l-5 3.33L7 3zm10 10l-5-3.33L7 13l5 3.33 5-3.33zm0-6.67L12 9.67 7 6.33 2 9.67 7 13l5-3.33 5 3.33 5-3.33-5-3.33zM7 13.67l5 3.33 5-3.33v3.33l-5 3.33-5-3.33v-3.33z" />
                        </svg>
                    </div>
                </div>

                <div className="mb-4">
                    {/* "500+" Text */}
                    <h1 className="text-6xl font-bold text-white tracking-tighter shadow-lg">
                        {count}
                    </h1>
                    <p className="text-xl text-blue-400 font-medium mt-2">
                        {label}
                    </p>
                </div>

            </div>
        </div>
    );
}

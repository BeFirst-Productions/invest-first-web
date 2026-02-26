import React from 'react';
import Image from 'next/image';

const FounderImageCard = ({ image, name, title, alt, position = 'left' }) => {
    // Smoother Cubic Bezier Paths for a more professional S-curve
    // Left Notch: Starts from bottom-left corner, curves up and in
    const leftPath = "M 20 0 H 391 C 402 0 411 9 411 20 V 346 C 411 357 402 366 391 366 H 300 C 275 366 265 350 265 325 C 265 300 255 290 230 290 H 40 C 20 290 0 280 0 255 V 20 C 0 9 9 0 20 0 Z";

    // Right Notch (Rasheeq): Starts from right edge, curves in and down
    const rightPath = "M 20 0 H 391 C 402 0 411 9 411 20 V 255 C 411 280 391 290 371 290 H 181 C 156 290 146 300 146 325 C 146 350 136 366 111 366 H 20 C 9 366 0 357 0 346 V 20 C 0 9 9 0 20 0 Z";

    const path = position === 'left' ? leftPath : rightPath;
    const clipId = `founder-clip-${position}`;

    return (
        <div className="relative w-full max-w-[411px] mx-auto lg:mx-0 group">

            {/* Main Card Container */}
            <div className="relative w-full aspect-411/366 founder-card-drop-shadow">
                <svg
                    viewBox="0 0 411 366"
                    className="absolute inset-0 w-full h-full"
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <clipPath id={clipId}>
                            <path d={path} />
                        </clipPath>
                        <linearGradient id={`${clipId}-grad`} x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgba(120, 3, 67, 1)" />
                            <stop offset="100%" stopColor="rgba(0, 51, 90, 1)" />
                        </linearGradient>
                    </defs>

                    {/* background Base (The cutout will show the page background) */}
                    <path d={path} fill="#000000" />

                    {/* Image Area with perfect clipping and no gaps */}
                    <g clipPath={`url(#${clipId})`}>
                        <rect width="411" height="366" fill="#000000" />
                        <foreignObject x="-2" y="-2" width="415" height="370">
                            <div className="relative w-full h-full">
                                <Image
                                    src={image}
                                    alt={alt}
                                    fill
                                    className="object-cover object-top"
                                    sizes="(max-width: 1024px) 100vw, 411px"
                                    priority={position === 'left'}
                                />
                            </div>
                        </foreignObject>
                    </g>

                    {/* Professional 3px Border Stroke - Acts as a frame covering the clip edge */}
                    <path
                        d={path}
                        fill="none"
                        stroke={`url(#${clipId}-grad)`}
                        strokeWidth="3.5"
                        vectorEffect="non-scaling-stroke"
                    />

                    {/* Subtle Animated Ray Effect */}
                    {[1, 0.6].map((opacity, i) => (
                        <path
                            key={i}
                            d={path}
                            fill="none"
                            stroke={`url(#${clipId}-grad)`}
                            strokeWidth="3.5"
                            strokeDasharray="120 1000"
                            strokeLinecap="round"
                            className="animate-ray-run"
                            style={{
                                opacity: opacity,
                                animationDelay: `${i * 2}s`,
                                vectorEffect: 'non-scaling-stroke'
                            }}
                        />
                    ))}
                </svg>

                {/* Name and Title - Positioned Precisely in the Notch Area */}
                <div
                    className={`absolute z-30 pointer-events-none px-0 founder-card-text-container
                        ${position === 'left'
                            ? 'md:bottom-0 -bottom-4 left-0 text-center items-center w-[280px]'
                            : 'md:bottom-0 -bottom-4 right-0 text-center items-center w-[280px]'
                        }`}
                >
                    <h4 className="text-white leading-none whitespace-nowrap founder-card-name">
                        {name}
                    </h4>
                    <p className="text-[#0B9ECF] founder-card-title">
                        {title}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default FounderImageCard;

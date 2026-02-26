import React from 'react';
import Image from 'next/image';

const TeamMemberCard = ({ image, name, title, alt }) => {
    // Exact Card Shape from provided SVG
    const cardPath = "M357 288C357 297.941 348.941 306 339 306H161.675C155.239 306 149.293 309.436 146.08 315.012L128.228 345.988C125.014 351.564 119.068 355 112.633 355H28C18.0589 355 10 346.941 10 337V79C10 69.0589 18.0589 61 28 61H55C64.9411 61 73 52.9411 73 43V24C73 14.0589 81.0589 6 91 6H339C348.941 6 357 14.0589 357 24V288Z";

    const clipId = `team-clip-${name.replace(/\s+/g, '-').toLowerCase()}`;

    return (
        <div className="relative w-full max-w-[367px] mx-auto group">
            <div className="relative w-full aspect-367/369">
                <svg
                    viewBox="0 0 367 369"
                    className="absolute inset-0 w-full h-full drop-shadow-2xl"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <clipPath id={clipId}>
                            <path d={cardPath} />
                        </clipPath>
                        <linearGradient id={`${clipId}-grad`} x1="10" y1="197.104" x2="357" y2="197.104" gradientUnits="userSpaceOnUse">
                            <stop stopColor="#780343" />
                            <stop offset="1" stopColor="#00335A" />
                        </linearGradient>
                    </defs>

                    {/* background Base */}
                    <path d={cardPath} fill="#0d0d0d" />

                    {/* Image Area with clipping */}
                    <g clipPath={`url(#${clipId})`}>
                        <rect width="367" height="369" fill="#000000" />
                        <foreignObject x="0" y="0" width="367" height="369">
                            <div className="relative w-full h-full">
                                <Image
                                    src={image}
                                    alt={alt || name}
                                    fill
                                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                    sizes="(max-width: 768px) 100vw, 367px"
                                />
                            </div>
                        </foreignObject>
                    </g>

                    {/* Gradient Border Frame */}
                    <path
                        d={cardPath}
                        fill="none"
                        stroke={`url(#${clipId}-grad)`}
                        strokeWidth="3"
                        vectorEffect="non-scaling-stroke"
                    />
                </svg>

                {/* Separate Naming Box - Responsive percentages for positioning and sizing */}
                <div
                    className="absolute z-20"
                    style={{
                        bottom: '3.25%',
                        right: '2.18%',
                        width: '57.22%',
                        height: '12.19%'
                    }}
                >
                    <svg
                        viewBox="0 0 221 45"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-full h-full drop-shadow-md"
                        preserveAspectRatio="xMidYMid meet"
                    >
                        {/* Slanted Naming Box Path matching the notch angle */}
                        <path
                            d="M34.5 0H213C217.418 0 221 3.58172 221 8V37C221 41.4183 217.418 45 213 45H8.00001C2.33334 45 -1.19999 38.6 1.5 33.5L16.5 6C18.5 2.5 22.5 0 26.5 0H34.5Z"
                            fill="#00335A"
                        />
                    </svg>

                    {/* Content inside the slanted box - use relative spacing */}
                    <div className="absolute inset-0 flex flex-col justify-center pl-[18%] pr-[4%] pointer-events-none">
                        <h4 className="text-[#FFB547] font-bold text-[clamp(10px,4vw,16px)] leading-none truncate uppercase tracking-tight">
                            {name}
                        </h4>
                        <p className="text-white text-[clamp(8px,2.5vw,12px)] font-light mt-[2%] truncate opacity-90">
                            {title}
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TeamMemberCard;

import React from 'react';

const FounderDecorativeDecor = ({ className = "" }) => {
    const path1 = "M0 608.68H84C89.6667 608.027 100.8 602.997 100 588.101V168.66C100.167 163.597 103.8 153.176 117 152H182V201.5H62C58 202 50 200.3 50 189.5V117.5C49.1667 111.333 51.7 99 68.5 99H140.5C147.333 98.6667 161 94.1 161 78.5C161 62.9 161 30.6667 161 16.5C161.833 11.5 160 1.5 146 1.5H1";
    const path2 = "M180 562H29.0057C24.0058 562.332 13.6061 565.69 12.0061 576.459V665.21C11.8395 669.365 15.0061 678.074 29.0057 679.669H111.005C115.505 679.669 124.505 682.362 124.505 693.132V740V786C125.34 792.5 123.809 805.1 111.005 803.5H1";

    return (
        <div className={`pointer-events-none select-none ${className}`}>
            <svg
                width="184"
                height="806"
                viewBox="0 0 184 806"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
            >
                <defs>
                    {/* Reference Matching Magenta-Blue Gradient */}
                    <linearGradient id="founder_lines_gradient" x1="0%" y1="0%" x2="0%" y2="100%" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="rgba(120, 3, 67, 1)" />
                        <stop offset="100%" stopColor="rgba(0, 51, 90, 1)" />
                    </linearGradient>

                    {/* Cinematic Ray Highlight Gradient */}
                    <linearGradient id="light_ray_cinematic" x1="0%" y1="0%" x2="100%" y2="0%" gradientUnits="userSpaceOnUse">
                        <stop offset="0%" stopColor="rgba(0, 240, 255, 0)" />
                        <stop offset="50%" stopColor="rgba(0, 240, 255, 0.8)" />
                        <stop offset="100%" stopColor="rgba(0, 240, 255, 0)" />
                    </linearGradient>
                </defs>

                {/* Main Static Paths - Using the Magenta-Blue Gradient */}
                <path
                    d={path1}
                    stroke="url(#founder_lines_gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-100"
                />
                <path
                    d={path2}
                    stroke="url(#founder_lines_gradient)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="opacity-100"
                />

                {/* Animated Light Ray Paths - Cyan Highlight */}
                <path
                    d={path1}
                    stroke="url(#light_ray_cinematic)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="100 1200"
                    className="animate-ray-run"
                    style={{
                        filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))',
                        animationDuration: '5s'
                    }}
                />
                <path
                    d={path2}
                    stroke="url(#light_ray_cinematic)"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeDasharray="100 1200"
                    className="animate-ray-run"
                    style={{
                        animationDelay: '2.5s',
                        animationDuration: '5s',
                        filter: 'drop-shadow(0 0 10px rgba(0, 240, 255, 0.6))'
                    }}
                />

                {/* Blue Glow Dot from Reference Image */}
                <circle cx="1" cy="1.5" r="4" fill="#00F0FF" className="animate-pulse">
                    <animate
                        attributeName="r"
                        values="3;5;3"
                        dur="3s"
                        repeatCount="indefinite"
                    />
                </circle>
                <circle cx="1" cy="1.5" r="8" fill="rgba(0, 240, 255, 0.2)" />
            </svg>
        </div>
    );
};

export default FounderDecorativeDecor;

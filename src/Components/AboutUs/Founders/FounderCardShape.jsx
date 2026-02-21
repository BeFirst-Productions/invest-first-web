import React from 'react';

const FounderCardShape = ({ className = '', mainColor = '#E5E7EB', position = 'right' }) => {
    if (position === 'left') {
        // First founder - cutout on bottom-left
        return (
            <svg
                viewBox="0 0 411 366"
                preserveAspectRatio="none"
                className={`absolute inset-0 w-full h-full ${className}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="borderGradLeft" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF007A" />
                        <stop offset="100%" stopColor="#00E0FF" />
                    </linearGradient>

                    <linearGradient id="rayGradLeft" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF007A" />
                        <stop offset="100%" stopColor="#00E0FF" />
                    </linearGradient>
                </defs>

                {/* Main Shape Path - Cutout on bottom-left */}
                <path
                    d="
                        M 18 0
                        L 393 0
                        Q 411 0 411 18
                        L 411 348
                        Q 411 366 393 366
                        L 140 366
                        Q 110 366 110 336
                        Q 110 306 80 306
                        L 18 306
                        Q 0 306 0 288
                        L 0 18
                        Q 0 0 18 0
                        Z
                    "
                    fill={mainColor}
                    stroke="url(#borderGradLeft)"
                    strokeWidth="3"
                />

                {/* Animated Ray Effects */}
                {[1, 0.8, 0.6, 0.4, 0.2].map((opacity, i) => (
                    <path
                        key={i}
                        d="
                            M 18 0
                            L 393 0
                            Q 411 0 411 18
                            L 411 348
                            Q 411 366 393 366
                            L 140 366
                            Q 110 366 110 336
                            Q 110 306 80 306
                            L 18 306
                            Q 0 306 0 288
                            L 0 18
                            Q 0 0 18 0
                            Z
                        "
                        fill="none"
                        stroke="url(#rayGradLeft)"
                        strokeWidth="3"
                        strokeDasharray="100 1500"
                        strokeLinecap="round"
                        className="animate-ray"
                        style={{
                            opacity: opacity,
                            animationDelay: `${i * 0.1}s`,
                        }}
                    />
                ))}
            </svg>
        );
    } else {
        // Second founder - cutout on bottom-right
        return (
            <svg
                viewBox="0 0 411 366"
                preserveAspectRatio="none"
                className={`absolute inset-0 w-full h-full ${className}`}
                xmlns="http://www.w3.org/2000/svg"
            >
                <defs>
                    <linearGradient id="borderGradRight" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FF007A" />
                        <stop offset="100%" stopColor="#00E0FF" />
                    </linearGradient>

                    <linearGradient id="rayGradRight" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#FF007A" />
                        <stop offset="100%" stopColor="#00E0FF" />
                    </linearGradient>
                </defs>

                {/* Main Shape Path - Cutout on bottom-right */}
                <path
                    d="
                        M 0 18
                        Q 0 0 18 0
                        L 393 0
                        Q 411 0 411 18
                        L 411 288
                        Q 411 306 393 306
                        L 331 306
                        Q 301 306 301 336
                        Q 301 366 271 366
                        L 18 366
                        Q 0 366 0 348
                        L 0 18
                        Z
                    "
                    fill={mainColor}
                    stroke="url(#borderGradRight)"
                    strokeWidth="3"
                />

                {/* Animated Ray Effects */}
                {[1, 0.8, 0.6, 0.4, 0.2].map((opacity, i) => (
                    <path
                        key={i}
                        d="
                            M 0 18
                            Q 0 0 18 0
                            L 393 0
                            Q 411 0 411 18
                            L 411 288
                            Q 411 306 393 306
                            L 331 306
                            Q 301 306 301 336
                            Q 301 366 271 366
                            L 18 366
                            Q 0 366 0 348
                            L 0 18
                            Z
                        "
                        fill="none"
                        stroke="url(#rayGradRight)"
                        strokeWidth="3"
                        strokeDasharray="100 1500"
                        strokeLinecap="round"
                        className="animate-ray"
                        style={{
                            opacity: opacity,
                            animationDelay: `${i * 0.1}s`,
                        }}
                    />
                ))}
            </svg>
        );
    }
};

export default FounderCardShape;


import React, { useRef, useEffect } from "react";
import gsap from "gsap";

const Timeline = ({ steps, activeStep }) => {
    const lineRef = useRef(null);
    const horizontalLineRef = useRef(null);

    // Vertical Animation (Desktop)
    useEffect(() => {
        if (lineRef.current) {
            gsap.to(lineRef.current, {
                height: `${(activeStep / (steps.length - 1)) * 100}%`,
                duration: 0.5,
                ease: "power2.inOut",
            });
        }
    }, [activeStep, steps.length]);

    // Horizontal Animation (Mobile)
    useEffect(() => {
        if (horizontalLineRef.current) {
            gsap.to(horizontalLineRef.current, {
                width: `${(activeStep / (steps.length - 1)) * 100}%`,
                duration: 0.5,
                ease: "power2.inOut",
            });
        }
    }, [activeStep, steps.length]);

    return (
        <>
            {/* ================= MOBILE / TABLET (Horizontal) ================= */}
            <div className="block md:hidden w-full mb-8">
                <div className="relative flex items-center justify-between w-full px-2">
                    {/* Background Line */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-[2px] bg-white z-0" />

                    {/* Progress Line */}
                    <div
                        ref={horizontalLineRef}
                        className="absolute left-0 top-1/2 -translate-y-1/2 h-[2px] bg-cyan-500 z-10 origin-left"
                        style={{ width: "0%" }}
                    />

                    {/* Dots */}
                    {steps.map((step, index) => {
                        const isActive = index === activeStep;
                        const isCompleted = index < activeStep;

                        return (
                            <div key={step.id} className="relative z-20 flex flex-col items-center">
                                {/* Dot */}
                                <div
                                    className={`
                    w-4 h-4 rounded-full transition-all duration-300 ease-out
                    ${isActive || isCompleted ? "bg-[#700030]" : "bg-[#700030]"}
                    ${isActive ? "scale-125" : ""}
                  `}
                                />

                                {/* Title (Only for active step) */}
                                <div
                                    className={`
                                    absolute top-6 whitespace-nowrap text-xs font-medium transition-opacity duration-300
                                    ${isActive ? 'opacity-100' : 'opacity-0'}
                                    ${index === 0 ? 'left-0' : (index === steps.length - 1 ? 'right-0' : 'left-1/2 -translate-x-1/2')}
                                  `}
                                >
                                    <span className="text-cyan-400">{step.title}</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
                {/* Spacer for titles */}
                <div className="h-6" />
            </div>

            {/* ================= DESKTOP (Vertical) ================= */}
            <div className="hidden md:flex relative flex-col items-center w-full min-h-[400px]">
                {/* Vertical Line (Background) */}
                <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-white -translate-x-1/2" />

                {/* Active Line Segment (Progress) */}
                <div
                    ref={lineRef}
                    className="absolute left-1/2 top-0 w-[2px] bg-cyan-500 -translate-x-1/2 origin-top"
                    style={{ height: "0%" }}
                />

                <div className="flex flex-col justify-between h-full w-full space-y-12 py-2">
                    {steps.map((step, index) => {
                        const isActive = index === activeStep;
                        const isCompleted = index < activeStep;
                        const isPending = index > activeStep;

                        // Alternating Logic: Even index (0, 2...) -> Left, Odd index (1, 3...) -> Right
                        const isLeft = index % 2 === 0;

                        return (
                            <div
                                key={step.id}
                                className="relative w-full flex items-center h-10"
                            >
                                {/* Dot - Absolute Centered on Line */}
                                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex items-center justify-center">
                                    <div
                                        className={`
                      w-5 h-5 rounded-full 
                      ${isActive ? "bg-[#700030] scale-125" : "bg-[#700030]"}
                      transition-transform duration-300 ease-out
                    `}
                                    />
                                </div>

                                {/* Left Side Text */}
                                <div className="w-1/2 pr-14 flex justify-end">
                                    {isLeft && (
                                        <span
                                            className={`
                        text-base font-medium transition-colors duration-300 text-right
                        ${isActive ? "text-cyan-400" : ""}
                        ${isCompleted ? "text-gray-300" : ""}
                        ${isPending ? "text-gray-500" : ""}
                        ${step.isHighlight ? "text-pink-500 font-bold" : ""}
                      `}
                                        >
                                            {step.title}
                                        </span>
                                    )}
                                </div>

                                {/* Right Side Text */}
                                <div className="w-1/2 pl-14 flex justify-start">
                                    {!isLeft && (
                                        <span
                                            className={`
                        text-base font-medium transition-colors duration-300 text-left
                        ${isActive ? "text-cyan-400" : ""}
                        ${isCompleted ? "text-gray-300" : ""}
                        ${isPending ? "text-gray-500" : ""}
                        ${step.isHighlight ? "text-pink-500 font-bold" : ""}
                      `}
                                        >
                                            {step.title}
                                        </span>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </>
    );
};

export default Timeline;

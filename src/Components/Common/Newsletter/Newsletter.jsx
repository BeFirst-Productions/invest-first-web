"use client";
import React, { useState, useRef, useEffect } from "react";
import toast from "react-hot-toast";
import Container from "../Layout/Contianer";
import PrimaryButton from "../Buttons/PrimaryButton";

const Newsletter = ({ 
    title = "Stay Updated with Invest First", 
    description = "Subscribe to our newsletter to receive the latest updates, news, and special offers directly in your inbox.",
    buttonText = "Subscribe ",
    namePlaceholder = "Enter your name",
    emailPlaceholder = "Enter your email"
}) => {
    const containerRef = useRef(null);
    const [dimensions, setDimensions] = useState({ w: 0, h: 0 });

    // Form State
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    useEffect(() => {
        if (!containerRef.current) return;

        const handleResize = () => {
            if (containerRef.current) {
                setDimensions({
                    w: containerRef.current.offsetWidth,
                    h: containerRef.current.offsetHeight
                });
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
        const resizeObserver = new ResizeObserver(handleResize);
        resizeObserver.observe(containerRef.current);

        return () => {
            window.removeEventListener('resize', handleResize);
            resizeObserver.disconnect();
        };
    }, []);

    const { w, h } = dimensions;
    const r = 24; // Corner radius
    const th = 60; // Tab height

    const titleSpace = w < 480 ? w - 160 : (w < 1024 ? w - 250 : Math.max(w - 500, 600));
    const curveSize = 40;
    const tabWidth = Math.max(0, w - titleSpace - curveSize);

    const borderPath = w && h ? `
        M 0 ${th + r}
        A ${r} ${r} 0 0 1 ${r} ${th}
        L ${w - tabWidth - curveSize} ${th}
        Q ${w - tabWidth - curveSize / 2} ${th} ${w - tabWidth - curveSize / 2} ${th / 2}
        T ${w - tabWidth} 0
        L ${w - r} 0
        A ${r} ${r} 0 0 1 ${w} ${r}
        L ${w} ${h - r}
        A ${r} ${r} 0 0 1 ${w - r} ${h}
        L ${r} ${h}
        A ${r} ${r} 0 0 1 0 ${h - r}
        Z
    ` : "";

    const handleSubscribe = () => {
        const newErrors = {};

        if (!name.trim()) {
            newErrors.name = "Please enter your name";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!email.trim()) {
            newErrors.email = "Please enter your email";
        } else if (!emailRegex.test(email)) {
            newErrors.email = "Please enter a valid email address";
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        setErrors({});
        toast.success("Thank you for subscribing!");
        setName("");
        setEmail("");
    };

    const renderTitle = (text) => {
        const words = text.split(" ");
        if (words.length <= 1) return text;
        return (
            <>
                <span className="text-[#0099CC]">{words[0]}</span>{" "}
                {words.slice(1).join(" ")}
            </>
        );
    };

    return (
        <section className="md:py-20 py-10 z-0">
            <Container>
                <div
                    className="z-10 relative -bottom-15 mb-6 pl-4 md:pl-8"
                    style={{ maxWidth: w > 0 ? titleSpace : 'none' }}
                >
                    <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-semibold text-white">
                        {renderTitle(title)}
                    </h2>
                </div>

                <div
                    ref={containerRef}
                    className="relative w-full min-h-[300px] p-8 md:p-12"
                    style={{ marginTop: '-20px' }}
                >
                    {w > 0 && (
                        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ overflow: 'visible' }}>
                            <defs>
                                <linearGradient id="newsletterBorderGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                                    <stop offset="0%" stopColor="#0099CC" />
                                    <stop offset="100%" stopColor="#00335a" />
                                </linearGradient>
                                <linearGradient id="newsletterBgGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stopColor="#010b14" />
                                    <stop offset="100%" stopColor="#001833" />
                                </linearGradient>
                                <radialGradient id="topRightGlow" cx="100%" cy="0%" r="15%" gradientTransform="scale(1, 2.5)">
                                    <stop offset="0%" stopColor="#0099CC" stopOpacity="0.4" />
                                    <stop offset="100%" stopColor="#0099CC" stopOpacity="0" />
                                </radialGradient>
                            </defs>
                            <path
                                d={borderPath}
                                fill="url(#newsletterBgGrad)"
                                stroke="url(#newsletterBorderGrad)"
                                strokeWidth="2"
                            />
                            <path
                                d={borderPath}
                                fill="url(#topRightGlow)"
                                stroke="none"
                            />
                        </svg>
                    )}

                    <div className="relative z-10 flex flex-col lg:flex-row gap-10 mt-8 items-center text-white">
                        <div className="lg:w-1/2 flex flex-col justify-center">
                            <p className="text-base md:text-lg leading-relaxed max-w-xl text-gray-300">
                                {description}
                            </p>
                        </div>

                        <div className="lg:w-1/2 w-full flex flex-col items-center gap-4">
                            <div className="w-full max-w-md flex flex-col gap-1">
                                <input
                                    type="text"
                                    placeholder={namePlaceholder}
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value);
                                        if (errors.name) setErrors({ ...errors, name: null });
                                    }}
                                    className={`w-full px-6 py-4 bg-[#E5E7EB] text-gray-800 rounded-2xl focus:outline-none focus:ring-2 transition-all placeholder-gray-500
                                        ${errors.name ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:ring-[#0099CC]"}`}
                                />
                                {errors.name && <p className="text-red-500 text-sm pl-4">{errors.name}</p>}
                            </div>

                            <div className="w-full max-w-md flex flex-col gap-1">
                                <input
                                    type="email"
                                    placeholder={emailPlaceholder}
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (errors.email) setErrors({ ...errors, email: null });
                                    }}
                                    className={`w-full px-6 py-4 bg-[#E5E7EB] text-gray-800 rounded-2xl focus:outline-none focus:ring-2 transition-all placeholder-gray-500
                                        ${errors.email ? "ring-2 ring-red-500 focus:ring-red-500" : "focus:ring-[#0099CC]"}`}
                                />
                                {errors.email && <p className="text-red-500 text-sm pl-4">{errors.email}</p>}
                            </div>

                            <div className="w-full max-w-md flex justify-center">
                                <PrimaryButton text={buttonText} onClick={handleSubscribe} />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Newsletter;

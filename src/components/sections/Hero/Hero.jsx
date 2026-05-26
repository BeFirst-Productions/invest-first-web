"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionContainer from "@/components/layout/SectionContainer";
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";
import RedHoverButton from "@/components/Common/Buttons/RedHoverButton";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const WHATSAPP_NUMBER = '971588773753';

const initialForm = {
  name: '',
  email: '',
  phone: '',
  service: '',
  message: '',
};

const validateHeroForm = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = 'Name is required.';
  if (!fields.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = 'Enter a valid email.';
  }
  if (!fields.phone.trim()) {
    errors.phone = 'Phone is required.';
  } else if (!/^\+?[\d\s\-()]{7,15}$/.test(fields.phone)) {
    errors.phone = 'Enter a valid phone.';
  }
  if (!fields.service) errors.service = 'Please select a service.';
  return errors;
};

/**
 * LAYER STACK (bottom → top):
 *   z-[0]  Sky
 *   z-[2]  Buildings (hero-building.png) — parallax
 *   z-[3]  Clouds — parallax
 *   z-[5]  hero-img2.png — full screen, clipped to arch-hole shape via clip-path
 *   z-[6]  Arch ring — white CSS border only, hollow/transparent interior
 *   z-[10] Hero text / scroll hint
 *
 * HOW THE REVEAL WORKS:
 *   hero-img2.png starts with clip-path: circle(0vw at 50vw 100vh) → invisible.
 *   The arch ring (white frame) and clip-path circle grow together in perfect sync.
 *   Outside the ring  → original sky + building shows (hero-img2 is clipped away).
 *   Inside the hole   → hero-img2 shows (clip-path circle matches inner arch radius).
 *   Stage 3 end       → circle grows to 150vw, covering full screen. Arch ring fades.
 *
 * SCROLL STAGES:
 *   0%  → 30%   Stage 1 : Hero UI exits, parallax (sky / buildings / clouds)
 *   30% → 60%   Stage 2 : Arch + clip-path grow together (window reveal)
 *   60% → 100%  Stage 3 : Both expand → ring exits screen → hero-img2 fills viewport
 */

export default function Hero() {
  const containerRef = useRef(null);
  const skyRef = useRef(null);
  const buildingRef = useRef(null);
  const heroTextRef = useRef(null);
  const scrollHintRef = useRef(null);
  const cloudRightRef = useRef(null);
  const cloudLeftRef = useRef(null);

  /** Full-screen reveal image — clipped to arch hole via CSS clip-path */
  const bgImgRef = useRef(null);

  /** Arch wrapper — GSAP scales this from bottom-center */
  const archWrapRef = useRef(null);

  /** White ring frame — CSS borders only, interior is transparent */
  const archFrameRef = useRef(null);

  /** Overlay content (heading + form) that appears when hero-img2 fills screen */
  const overlayRef = useRef(null);
  const overlayLeftRef = useRef(null);
  const overlayRightRef = useRef(null);

  // Contact form state
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateHeroForm(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    const text = [
      `Hello InvestFirst! I'd like to get started.`,
      ``,
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Service: ${form.service}`,
      form.message ? `Message: ${form.message}` : '',
    ].filter(Boolean).join('\n');
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setForm(initialForm);
    setErrors({});
  };

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;

    let playEntranceFn;

    const ctx = gsap.context(() => {
      // ── Initial states ────────────────────────────────────────

      // Arch starts fully collapsed — invisible
      gsap.set(archWrapRef.current, {
        xPercent: -50,
        scale: 0,
        transformOrigin: "50% 100%",
        force3D: true,
      });

      // hero-img2: full screen but FULLY CLIPPED to a zero-radius circle
      // centered at screen bottom-center (matches arch transform-origin).
      // This keeps it invisible until Stage 2 starts growing the clip circle.
      gsap.set(bgImgRef.current, {
        clipPath: "circle(0vw at 50% 100%)",
        webkitClipPath: "circle(0vw at 50% 100%)",
      });

      // Overlay starts hidden
      gsap.set(overlayRef.current, { opacity: 0, pointerEvents: "none" });
      gsap.set(overlayLeftRef.current, { x: -60, opacity: 0 });
      gsap.set(overlayRightRef.current, { x: 60, opacity: 0 });

      // ── Initial states for Entrance Animation (SEO-friendly via JS set) ──
      const textElements = heroTextRef.current
        ? heroTextRef.current.children
        : [];
      gsap.set(textElements, { y: 120, opacity: 0 });

      const buildingImg = buildingRef.current
        ? buildingRef.current.querySelector("img")
        : null;
      if (buildingImg) {
        gsap.set(buildingImg, { y: 320, opacity: 0, scale: 1.03 });
      }

      const cloudLeftImg = cloudLeftRef.current
        ? cloudLeftRef.current.querySelector("img")
        : null;
      const cloudRightImg = cloudRightRef.current
        ? cloudRightRef.current.querySelector("img")
        : null;
      if (cloudLeftImg) gsap.set(cloudLeftImg, { y: 160, opacity: 0 });
      if (cloudRightImg) gsap.set(cloudRightImg, { y: 160, opacity: 0 });

      // Play the entrance animation smoothly
      const playEntrance = () => {
        // Start timeline after 0.35s delay, perfectly syncing with the loader fade
        const tl = gsap.timeline({ delay: 0.35 });

        tl.to(
          buildingImg,
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 1.8,
            ease: "power3.out",
          },
          0,
        );

        tl.to(
          textElements,
          {
            y: 0,
            opacity: 1,
            duration: 1.4,
            stagger: 0.15,
            ease: "power3.out",
          },
          0.25,
        );

        if (cloudLeftImg) {
          tl.to(
            cloudLeftImg,
            {
              y: 0,
              opacity: 1,
              duration: 1.6,
              ease: "power2.out",
            },
            0.45,
          );
        }

        if (cloudRightImg) {
          tl.to(
            cloudRightImg,
            {
              y: 0,
              opacity: 1,
              duration: 1.6,
              ease: "power2.out",
            },
            0.55,
          );
        }
      };

      playEntranceFn = playEntrance;

      // Event listener trigger for entrance
      if (typeof window !== "undefined") {
        if (window.__loaderExit) {
          setTimeout(playEntrance, 100);
        } else {
          window.addEventListener("loaderExit", playEntrance);
        }
      }

      // ── Master scroll timeline ─────────────────────────────────
      const master = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          invalidateOnRefresh: true,
        },
      });

      /* ──────────────────────────────────────────────────────────
         STAGE 1  (0 → 0.30)
         Hero UI exits. Clouds / sky / buildings parallax.
         hero-img2 clip-path stays at 0 — still invisible.
      ────────────────────────────────────────────────────────── */
      const navbar = document.getElementById("global-navbar");
      if (navbar) {
        master.to(
          navbar,
          {
            y: -16,
            scale: 0.95,
            opacity: 0,
            duration: 0.25,
            ease: "power2.inOut",
          },
          0,
        );
      }

      master.to(
        heroTextRef.current,
        {
          y: -120,
          opacity: 0,
          duration: 0.32,
          ease: "power1.inOut",
        },
        0,
      );

      master.to(
        scrollHintRef.current,
        {
          opacity: 0,
          y: 6,
          duration: 0.1,
          ease: "power1.in",
        },
        0,
      );

      master.to(
        cloudLeftRef.current,
        {
          x: "-20%",
          y: "-10%",
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        },
        0,
      );

      master.to(
        cloudRightRef.current,
        {
          x: "20%",
          y: "-8%",
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        },
        0,
      );

      master.to(
        skyRef.current,
        {
          y: "-10%",
          scale: 1.08,
          duration: 0.3,
          ease: "none",
        },
        0,
      );

      master.fromTo(
        buildingRef.current,
        { y: () => (window.innerWidth <= 768 ? "8vh" : "26vh"), scale: 1 },
        {
          y: () => (window.innerWidth <= 768 ? "-5vh" : "-14vh"),
          scale: 1.03,
          duration: 0.3,
          ease: "power2.out",
        },
        0,
      );

      /* ──────────────────────────────────────────────────────────
         STAGE 2  (0.30 → 0.60)
         Arch ring and clip-path circle grow together in sync.

         Arch inner radius at scale 1:
           archWrap = 140vw wide → half = 70vw
           border thickness = 20.3vw
           inner radius = 70vw − 20.3vw = 49.7vw
         So clip-path circle radius = 49.7vw at scale 1.

         Outside the arch ring  → sky + building still visible
         Inside the arch hole   → hero-img2 reveals through clip-path
      ────────────────────────────────────────────────────────── */
      master.to(
        archWrapRef.current,
        {
          scale: () => (window.innerWidth <= 768 ? 1.5 : 1.0),
          duration: 0.3,
          ease: "power3.out",
        },
        0.3,
      );

      // Clip-path grows to match inner arch hole radius
      master.to(
        bgImgRef.current,
        {
          clipPath: () =>
            window.innerWidth <= 768
              ? "circle(74.6vw at 50% 100%)"
              : "circle(49.7vw at 50% 100%)",
          webkitClipPath: () =>
            window.innerWidth <= 768
              ? "circle(74.6vw at 50% 100%)"
              : "circle(49.7vw at 50% 100%)",
          duration: 0.3,
          ease: "power3.out",
        },
        0.3,
      );

      master.to(
        buildingRef.current,
        {
          y: () => (window.innerWidth <= 768 ? "-2vh" : "-4vh"),
          duration: 0.3,
          ease: "power1.inOut",
        },
        0.3,
      );

      master.to(
        skyRef.current,
        {
          y: "-15%",
          duration: 0.3,
          ease: "none",
        },
        0.3,
      );

      /* ──────────────────────────────────────────────────────────
         STAGE 3  (0.60 → 1.0)
         Both arch and clip-path expand until ring exits screen.

         At arch scale 3.0:
           inner radius = 49.7vw × 3 = 149.1vw ≈ 150vw
           A circle of radius 150vw centered at bottom covers the full viewport.
         → White ring borders move off all screen edges.
         → hero-img2 fills entire screen.
         → Arch ring fades at ~82% for a clean dissolve.
      ────────────────────────────────────────────────────────── */
      master.to(
        archWrapRef.current,
        {
          scale: () => (window.innerWidth <= 768 ? 6.0 : 3.0),
          duration: 0.4,
          ease: "power1.inOut",
        },
        0.6,
      );

      master.to(
        bgImgRef.current,
        {
          clipPath: () =>
            window.innerWidth <= 768
              ? "circle(250vw at 50% 100%)"
              : "circle(150vw at 50% 100%)",
          webkitClipPath: () =>
            window.innerWidth <= 768
              ? "circle(250vw at 50% 100%)"
              : "circle(150vw at 50% 100%)",
          duration: 0.4,
          ease: "power1.inOut",
        },
        0.6,
      );

      // Fade the ring just before it completely exits screen
      master.to(
        archFrameRef.current,
        {
          opacity: 0,
          duration: 0.15,
          ease: "power2.in",
        },
        0.82,
      );

      master.to(
        skyRef.current,
        {
          y: "-28%",
          duration: 0.4,
          ease: "none",
        },
        0.6,
      );

      /* ──────────────────────────────────────────────────────────
         STAGE 4  (0.82 → 1.0)
         Overlay content (heading + contact form) fades in
         once hero-img2 has filled the viewport.
      ────────────────────────────────────────────────────────── */
      master.to(
        overlayRef.current,
        {
          opacity: 1,
          pointerEvents: "auto",
          duration: 0.18,
          ease: "power2.out",
        },
        0.82,
      );

      master.to(
        overlayLeftRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.18,
          ease: "power3.out",
        },
        0.84,
      );

      master.to(
        overlayRightRef.current,
        {
          x: 0,
          opacity: 1,
          duration: 0.18,
          ease: "power3.out",
        },
        0.86,
      );
    }, containerRef);

    return () => {
      ctx.revert();
      if (typeof window !== "undefined" && playEntranceFn) {
        window.removeEventListener("loaderExit", playEntranceFn);
      }
    };
  }, []);

  return (
    <>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.35; transform: scaleY(0.85); }
          50%       { opacity: 1;    transform: scaleY(1.1);  }
        }
        .hero-title {
          font-family: var(--font-instrument-sans), sans-serif !important;
          font-stretch: 85%; /* Semi-Condensed width axis */
          color: #0B1F3A;
          font-weight: 750;
          letter-spacing: -0.01em;
        }
        .hero-title-gradient {
          background-image: linear-gradient(90deg, rgba(226,3,132,1.00) 0%, rgba(109,3,74,1.00) 100%);
          background-position: center center;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline;
        }
        .hero-desc {
          font-family: var(--font-inter), sans-serif;
          color: rgba(11, 31, 58, 0.85);
        }

        /* ── Hero Overlay Styles ── */
        .hero-overlay-title {
          font-family: var(--font-instrument-sans), sans-serif;
          font-weight: 700;
          line-height: 1.1;
          letter-spacing: -0.02em;
        }
        .hero-overlay-desc {
          font-family: var(--font-inter), sans-serif;
          line-height: 1.7;
        }
        .hero-form-glass {
          background: rgba(11, 34, 62, 0.75);
          backdrop-filter: blur(24px);
          -webkit-backdrop-filter: blur(24px);
          border: 1px solid rgba(255, 255, 255, 0.12);
        }
        .hero-form-input {
          width: 100%;
          padding: 12px 18px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.15);
          color: #ffffff;
          font-size: 14px;
          font-family: var(--font-inter), sans-serif;
          transition: all 0.2s ease;
          outline: none;
        }
        .hero-form-input::placeholder {
          color: rgba(255, 255, 255, 0.45);
        }
        .hero-form-input:focus {
          border-color: rgba(27, 124, 156, 0.7);
          background: rgba(255, 255, 255, 0.15);
          box-shadow: 0 0 0 3px rgba(27, 124, 156, 0.15);
        }
        .hero-form-input.has-error {
          border-color: rgba(248, 113, 113, 0.6);
          box-shadow: 0 0 0 3px rgba(248, 113, 113, 0.1);
        }
        .hero-form-select {
          appearance: none;
          cursor: pointer;
        }
        .hero-form-label {
          display: block;
          color: rgba(255, 255, 255, 0.85);
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 6px;
          font-family: var(--font-inter), sans-serif;
        }
      `}</style>

      <section
        ref={containerRef}
        className="relative h-[500vh] w-full"
        aria-label="Hero section"
      >
        <div className="sticky top-0 left-0 w-full h-[100dvh] overflow-hidden">
          <SectionContainer
            as="div"
            className="h-full bg-transparent"
            containerClassName="h-full flex flex-col items-center justify-start pointer-events-none"
            background={
              <>
                {/* ── z-[0] Sky ── */}
                <div
                  ref={skyRef}
                  className="absolute z-0"
                  style={{ inset: "-10% 0 -10% 0" }}
                >
                  <Image
                    src="/images/hero/sky.jpg"
                    alt=""
                    fill
                    priority
                    quality={85}
                    sizes="100vw"
                    className="object-cover object-top"
                  />
                </div>

                {/* ── z-[1] Hero Text (Behind Buildings, Behind Clouds) ── */}
                <div
                  ref={heroTextRef}
                  className="absolute left-0 top-0 w-full pt-[clamp(140px,20vh,220px)] z-[1] flex flex-col items-center text-center pointer-events-auto px-4"
                >
                  <h1 className="hero-title text-[clamp(24px,7vw,48px)] md:text-[clamp(22px,5.2vw,64px)] leading-[1.1] tracking-tight max-w-[90vw] md:max-w-full">
                    Business Setup Services{" "}
                    <span className="hero-title-gradient">
                      in Dubai &amp; UAE
                    </span>
                  </h1>
                  <p className="hero-desc mt-[clamp(12px,2vh,24px)] text-[clamp(14px,1.6vw,20px)] font-medium tracking-wide max-w-[800px] leading-relaxed">
                    Business setup in Dubai made it simple for startups &amp;
                    entrepreneurs.
                  </p>
                </div>

                {/* ── z-[3] Left Cloud ── */}
                <div
                  ref={cloudLeftRef}
                  className="absolute left-[-5%] md:left-[-3%] top-[14%] md:top-[18%] w-[54%] md:w-[42%] lg:w-[30%] aspect-[529/309] z-[3] pointer-events-none bg-transparent [isolation:isolate] overflow-visible"
                  aria-hidden="true"
                >
                  <Image
                    src="/images/hero/clouds-png-.png"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain object-center"
                  />
                </div>

                {/* ── z-[3] Right Cloud ── */}
                <div
                  ref={cloudRightRef}
                  className="absolute right-[-14%] md:right-[-9%] lg:right-[-5%] top-[11%] md:top-[14%] lg:top-[16%] w-[60%] md:w-[48%] lg:w-[35%] aspect-[472/276] z-[3] pointer-events-none bg-transparent [isolation:isolate] overflow-visible"
                  aria-hidden="true"
                >
                  <Image
                    src="/images/hero/clouds-png-.png"
                    alt=""
                    fill
                    unoptimized
                    className="object-contain object-center"
                  />
                </div>

                {/* ── z-[2] Buildings ── */}
                <div
                  ref={buildingRef}
                  className="absolute bottom-[clamp(-200px,-15vh,-150px)] md:bottom-[clamp(-380px,-20vh,-280px)] left-0 w-full z-[2] origin-bottom"
                >
                  <img
                    src="/images/hero/hero-building.png"
                    alt="City skyline with modern skyscrapers"
                    className="block w-full h-auto min-h-[480px] object-cover object-bottom"
                    loading="eager"
                  />
                </div>

                {/* ── z-[5] Reveal image ───────────────────────────────────
                    Full viewport. Starts fully clipped (circle 0vw).
                    GSAP grows clip-path in sync with arch inner hole.
                    Only visible through the arch hollow — never bleeds outside.
                ──────────────────────────────────────────────────────────── */}
                <div
                  ref={bgImgRef}
                  className="absolute z-[5] pointer-events-none"
                  style={{
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%) translateZ(0)",
                    width: "100vw",
                    height: "100vh",
                  }}
                  aria-hidden="true"
                >
                  <Image
                    src="/images/hero/hero-img2.jpeg"
                    alt="Luxury residential towers at dusk"
                    fill
                    priority
                    quality={90}
                    sizes="100vw"
                    className="object-cover object-center"
                  />
                </div>

                {/* ── z-[8] OVERLAY: Heading + Contact Form ──────────────
                    Appears when hero-img2 fills the viewport.
                    Left: heading, description, CTA button.
                    Right: glassmorphic contact form.
                ──────────────────────────────────────────────────────── */}
                <div
                  ref={overlayRef}
                  className="absolute inset-0 z-[8] overflow-y-auto overflow-x-hidden"
                  style={{ opacity: 0, pointerEvents: "none" }}
                >
                  {/* Dark overlay for readability */}
                  <div className="fixed inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 pointer-events-none" />

                  <div className="relative w-full min-h-full flex flex-col justify-center lg:flex-row lg:items-center py-20 lg:py-0">
                    <div className="w-full max-w-[1990px] mx-auto px-[24px] md:px-[32px] lg:px-[120px] 2xl:px-[180px]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">

                        {/* ── LEFT: Heading + Description + Button ── */}
                        <div ref={overlayLeftRef} className="flex flex-col gap-5 lg:gap-7 items-center text-center lg:items-start lg:text-left">
                          <h2 className="hero-overlay-title text-white text-[clamp(26px,5vw,52px)]">
                            Start Your Business{" "}
                            <span
                              style={{
                                backgroundImage: "linear-gradient(90deg, #1B7C9C 0%, #00D4FF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              in Dubai
                            </span>
                          </h2>
                          <p className="hero-overlay-desc text-white/80 text-[clamp(14px,1.4vw,18px)] max-w-[520px]">
                            From company formation to visa processing, we handle every step
                            of your business setup in the UAE. Get expert guidance and start
                            your entrepreneurial journey with confidence.
                          </p>
                          <div>
                            <RedHoverButton
                              url="/cost-calculator"
                              text="cost calculator"
                            />
                          </div>

                          {/* Trust indicators */}
                          <div className="flex items-center gap-6 mt-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                              <span className="text-white/60 text-sm">500+ Companies Formed</span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                              <span className="text-white/60 text-sm">Expert Team</span>
                            </div>
                          </div>
                        </div>

                        {/* ── RIGHT: Contact Form ── */}
                        <div ref={overlayRightRef} className="hidden lg:block">
                          <div className="hero-form-glass rounded-3xl p-6 md:p-8 max-w-[560px] lg:ml-auto">
                            <h3 className="text-white text-xl font-semibold mb-1" style={{ fontFamily: 'var(--font-instrument-sans), sans-serif' }}>
                              Get Free Consultation
                            </h3>
                            <p className="text-white/50 text-sm mb-6">Fill in your details and we&apos;ll reach out within 24 hours.</p>

                            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">
                              <div className="grid grid-cols-2 gap-4">
                                {/* Name */}
                                <div>
                                  <label className="hero-form-label">Full Name <span className="text-red-400">*</span></label>
                                  <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={`hero-form-input ${errors.name ? 'has-error' : ''}`}
                                  />
                                  {errors.name && <p className="text-red-400 text-xs mt-1 ml-1">{errors.name}</p>}
                                </div>
                                {/* Email */}
                                <div>
                                  <label className="hero-form-label">Email <span className="text-red-400">*</span></label>
                                  <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={`hero-form-input ${errors.email ? 'has-error' : ''}`}
                                  />
                                  {errors.email && <p className="text-red-400 text-xs mt-1 ml-1">{errors.email}</p>}
                                </div>
                              </div>

                              <div className="grid grid-cols-2 gap-4">
                                {/* Phone */}
                                <div>
                                  <label className="hero-form-label">Phone <span className="text-red-400">*</span></label>
                                  <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+971 50 XXX XXXX"
                                    className={`hero-form-input ${errors.phone ? 'has-error' : ''}`}
                                  />
                                  {errors.phone && <p className="text-red-400 text-xs mt-1 ml-1">{errors.phone}</p>}
                                </div>
                                {/* Service */}
                                <div>
                                  <label className="hero-form-label">Service <span className="text-red-400">*</span></label>
                                  <div className="relative">
                                    <select
                                      name="service"
                                      value={form.service}
                                      onChange={handleChange}
                                      className={`hero-form-input hero-form-select ${errors.service ? 'has-error' : ''}`}
                                    >
                                      <option value="" style={{ background: '#0B223E' }}>Select Service</option>
                                      <option value="Company Formation" style={{ background: '#0B223E' }}>Company Formation</option>
                                      <option value="PRO Services" style={{ background: '#0B223E' }}>PRO Services</option>
                                      <option value="Visa Services" style={{ background: '#0B223E' }}>Visa Services</option>
                                      <option value="Trade License" style={{ background: '#0B223E' }}>Trade License</option>
                                      <option value="Other" style={{ background: '#0B223E' }}>Other</option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                      <svg width="12" height="8" viewBox="0 0 12 8" fill="none">
                                        <path d="M1 1.5L6 6.5L11 1.5" stroke="rgba(255,255,255,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                      </svg>
                                    </div>
                                  </div>
                                  {errors.service && <p className="text-red-400 text-xs mt-1 ml-1">{errors.service}</p>}
                                </div>
                              </div>

                              {/* Message (optional) */}
                              <div>
                                <label className="hero-form-label">Message <span className="text-white/30 text-xs">(optional)</span></label>
                                <textarea
                                  name="message"
                                  value={form.message}
                                  onChange={handleChange}
                                  placeholder="Tell us about your project..."
                                  rows={3}
                                  className="hero-form-input resize-none"
                                />
                              </div>

                              {/* Submit */}
                              <RedHoverButton
                                type="submit"
                                text="get free consultation"
                                className="w-fit mt-2"
                              />
                            </form>
                          </div>
                        </div>

                      </div>
                    </div>
                  </div>
                </div>

                {/* ══════════════════════════════════════════════════════════
                    z-[6] ARCH WRAPPER
                    width: 140vw, height: 70vw → perfect semicircle box.
                    Contains ONLY the white CSS border ring.
                    Interior is transparent — no image, no background.
                    clip-path on bgImgRef ensures image only shows through hole.
                ═══════════════════════════════════════════════════════════ */}
                <div
                  ref={archWrapRef}
                  className="absolute z-[6] pointer-events-none"
                  style={{
                    width: "140vw",
                    height: "70vw",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%) scale(0)",
                    transformOrigin: "50% 100%",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
                  >
                    {/* White ring — CSS borders only, background: transparent */}
                    <div
                      ref={archFrameRef}
                      className="absolute inset-0"
                      style={{
                        borderTop: "20.3vw solid #ffffff",
                        borderLeft: "20.3vw solid #ffffff",
                        borderRight: "20.3vw solid #ffffff",
                        borderBottom: "none",
                        borderRadius: "50% 50% 0 0 / 100% 100% 0 0",
                        background: "transparent",
                      }}
                    />
                  </div>
                </div>
                {/* End Arch */}
              </>
            }
          >
            {/* Hero Text is placed in background layer at z-[2] to scroll behind buildings */}

            {/* ── Scroll hint ── */}
            <div
              ref={scrollHintRef}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="w-[2px] h-10 bg-[#333333] origin-top"
                style={{ animation: "scrollPulse 1.6s ease-in-out infinite" }}
              />
            </div>
          </SectionContainer>
        </div>
      </section>
    </>
  );
}

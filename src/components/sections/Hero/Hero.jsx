"use client";


import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SectionContainer from "@/components/layout/SectionContainer";
import PrimaryButton from "@/components/Common/Buttons/PrimaryButton";
import RedHoverButton from "@/components/Common/Buttons/RedHoverButton";


if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}


const WHATSAPP_NUMBER = "971588773753";


const initialForm = {
  name: "",
  email: "",
  phone: "",
  service: "",
  message: "",
};


const validateHeroForm = (fields) => {
  const errors = {};
  if (!fields.name.trim()) errors.name = "Name is required.";
  if (!fields.email.trim()) {
    errors.email = "Email is required.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) {
    errors.email = "Enter a valid email.";
  }
  if (!fields.phone.trim()) {
    errors.phone = "Phone is required.";
  } else if (!/^\+?[\d\s\-()]{7,15}$/.test(fields.phone)) {
    errors.phone = "Enter a valid phone.";
  }
  if (!fields.service) errors.service = "Please select a service.";
  return errors;
};


// ─── iOS Safari detection ────────────────────────────────────────────────────
// We need this to switch the scroll engine. Detection is done once at module
// level so it's available synchronously in the component.
const isIOS = () => {
  if (typeof window === "undefined") return false;
  const ua = navigator.userAgent;
  return (
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1) ||
    (navigator.vendor &&
      navigator.vendor.includes("Apple") &&
      "ontouchend" in document)
  );
};


export default function Hero() {
  const containerRef = useRef(null);
  const skyRef = useRef(null);
  const buildingRef = useRef(null);
  const heroTextRef = useRef(null);
  const scrollHintRef = useRef(null);
  const cloudRightRef = useRef(null);
  const cloudLeftRef = useRef(null);
  const bgImgRef = useRef(null);
  const archWrapRef = useRef(null);
  const archFrameRef = useRef(null);
  const overlayRef = useRef(null);
  const overlayLeftRef = useRef(null);
  const overlayRightRef = useRef(null);


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
      form.message ? `Message: ${form.message}` : "",
    ]
      .filter(Boolean)
      .join("\n");
    const waUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
    setForm(initialForm);
    setErrors({});
  };


  // ── FIX A: --vh custom property ─────────────────────────────────────────
  // 100dvh is unreliable on iOS Safari (browser chrome changes real height).
  // We set --vh from window.innerHeight and keep it updated.
  useEffect(() => {
    const setVh = () => {
      document.documentElement.style.setProperty(
        "--vh",
        `${window.innerHeight * 0.01}px`,
      );
    };
    setVh();
    window.addEventListener("resize", setVh);
    window.addEventListener("orientationchange", setVh);
    return () => {
      window.removeEventListener("resize", setVh);
      window.removeEventListener("orientationchange", setVh);
    };
  }, []);


  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return;


    const ios = isIOS();
    let playEntranceFn;


    // ── FIX B: Pre-promote clip-path layer BEFORE any animation ─────────
    // iOS Safari promotes elements to composited layers lazily. If GSAP
    // starts animating clip-path on a non-promoted layer, iOS does a full
    // repaint mid-animation causing a flash or collapse. Forcing
    // will-change + translateZ(0) at mount promotes it immediately so the
    // layer is ready before the first scroll event fires.
    if (bgImgRef.current) {
      bgImgRef.current.style.willChange = "clip-path, transform";
      bgImgRef.current.style.transform = "translateZ(0)";
      bgImgRef.current.style.webkitTransform = "translateZ(0)";
      bgImgRef.current.style.clipPath = "circle(0px at 50% 100%)";
      bgImgRef.current.style.webkitClipPath = "circle(0px at 50% 100%)";
    }


    // ── Set initial states ────────────────────────────────────────────────
    gsap.set(archWrapRef.current, {
      xPercent: -50,
      scale: 0,
      transformOrigin: "50% 100%",
      force3D: true,
    });


    gsap.set(overlayRef.current, { opacity: 0, pointerEvents: "none" });
    gsap.set(overlayLeftRef.current, { x: -60, opacity: 0 });
    gsap.set(overlayRightRef.current, { x: 60, opacity: 0 });


    const textElements = heroTextRef.current
      ? Array.from(heroTextRef.current.children)
      : [];
    gsap.set(textElements, { y: 120, opacity: 0 });


    const buildingImg = buildingRef.current?.querySelector("img");
    if (buildingImg) gsap.set(buildingImg, { y: 320, opacity: 0, scale: 1.03 });


    const cloudLeftImg = cloudLeftRef.current?.querySelector("img");
    const cloudRightImg = cloudRightRef.current?.querySelector("img");
    if (cloudLeftImg) gsap.set(cloudLeftImg, { y: 160, opacity: 0 });
    if (cloudRightImg) gsap.set(cloudRightImg, { y: 160, opacity: 0 });


    // ── Entrance animation (unchanged — not scroll-driven) ────────────────
    const playEntrance = () => {
      const tl = gsap.timeline({ delay: 0.35 });
      tl.to(
        buildingImg,
        { y: 0, opacity: 1, scale: 1, duration: 1.8, ease: "power3.out" },
        0,
      );
      tl.to(
        textElements,
        { y: 0, opacity: 1, duration: 1.4, stagger: 0.15, ease: "power3.out" },
        0.25,
      );
      if (cloudLeftImg)
        tl.to(
          cloudLeftImg,
          { y: 0, opacity: 1, duration: 1.6, ease: "power2.out" },
          0.45,
        );
      if (cloudRightImg)
        tl.to(
          cloudRightImg,
          { y: 0, opacity: 1, duration: 1.6, ease: "power2.out" },
          0.55,
        );
    };
    playEntranceFn = playEntrance;


    if (window.__loaderExit) {
      setTimeout(playEntrance, 100);
    } else {
      window.addEventListener("loaderExit", playEntrance);
    }


    // ─────────────────────────────────────────────────────────────────────
    // THE CORE FIX — two separate scroll engines:
    //
    // DESKTOP  → GSAP ScrollTrigger (original approach, works perfectly)
    // iOS      → Manual RAF loop reading window.pageYOffset directly
    //
    // WHY iOS ScrollTrigger scrub FAILS:
    //   iOS Safari does NOT fire scroll events during momentum/kinetic
    //   scrolling (the coasting phase after you lift your finger). GSAP
    //   ScrollTrigger is entirely event-driven — if no scroll events fire,
    //   the scrub value freezes. The user can scroll 1000px and the
    //   animation stays frozen until the momentum fully stops, then it
    //   jumps to the final position all at once.
    //
    // WHY RAF WORKS:
    //   requestAnimationFrame fires every frame regardless of scroll events.
    //   window.pageYOffset is always current — it updates continuously even
    //   during momentum scrolling. Reading it in RAF gives us true real-time
    //   scroll position that we can map to animation progress.
    // ─────────────────────────────────────────────────────────────────────


    if (!ios) {
      // ── DESKTOP PATH: GSAP ScrollTrigger (original) ───────────────────
      // DO NOT call ScrollTrigger.normalizeScroll(true) — it fights iOS
      // even on desktop by intercepting pointer events globally.


      const clipProgress = { radius: 0 };


      const navbar = document.getElementById("global-navbar");


      const master = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 2,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const p = self.progress;
            const isPast = p >= 1.0;
            if (navbar) {
              if (isPast) {
                navbar.style.opacity = "";
                navbar.style.transform = "";
              } else {
                const s1 = Math.max(0, Math.min(1, p / 0.3));
                const ns1 = Math.min(1, s1 / 0.83);
                navbar.style.transform = `translateX(-50%) translateY(${-16 * ns1}px) scale(${1 - 0.05 * ns1}) translateZ(0)`;
                navbar.style.opacity = `${1 - ns1}`;
              }
            }
          },
        },
      });


      master.to(
        heroTextRef.current,
        { y: -120, opacity: 0, duration: 0.32, ease: "power1.inOut" },
        0,
      );
      master.to(
        scrollHintRef.current,
        { opacity: 0, y: 6, duration: 0.1, ease: "power1.in" },
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
        { x: "20%", y: "-8%", opacity: 0, duration: 0.3, ease: "power1.inOut" },
        0,
      );
      master.to(
        skyRef.current,
        { y: "-10%", scale: 1.08, duration: 0.3, ease: "none" },
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


      master.to(
        archWrapRef.current,
        {
          scale: () => (window.innerWidth <= 768 ? 1.5 : 1.0),
          duration: 0.3,
          ease: "power3.out",
        },
        0.3,
      );
      master.to(
        clipProgress,
        {
          radius: () =>
            window.innerWidth <= 768
              ? window.innerWidth * 0.746
              : window.innerWidth * 0.497,
          duration: 0.3,
          ease: "power3.out",
          onUpdate: () => {
            if (bgImgRef.current) {
              const val = `${clipProgress.radius}px`;
              bgImgRef.current.style.clipPath = `circle(${val} at 50% 100%)`;
              bgImgRef.current.style.webkitClipPath = `circle(${val} at 50% 100%)`;
            }
          },
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
        { y: "-15%", duration: 0.3, ease: "none" },
        0.3,
      );


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
        clipProgress,
        {
          radius: () =>
            window.innerWidth <= 768
              ? window.innerWidth * 2.5
              : window.innerWidth * 1.5,
          duration: 0.4,
          ease: "power1.inOut",
          onUpdate: () => {
            if (bgImgRef.current) {
              const val = `${clipProgress.radius}px`;
              bgImgRef.current.style.clipPath = `circle(${val} at 50% 100%)`;
              bgImgRef.current.style.webkitClipPath = `circle(${val} at 50% 100%)`;
            }
          },
        },
        0.6,
      );
      master.to(
        archFrameRef.current,
        { opacity: 0, duration: 0.15, ease: "power2.in" },
        0.82,
      );
      master.to(
        skyRef.current,
        { y: "-28%", duration: 0.4, ease: "none" },
        0.6,
      );
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
        { x: 0, opacity: 1, duration: 0.18, ease: "power3.out" },
        0.84,
      );
      master.to(
        overlayRightRef.current,
        { x: 0, opacity: 1, duration: 0.18, ease: "power3.out" },
        0.86,
      );


      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        if (playEntranceFn)
          window.removeEventListener("loaderExit", playEntranceFn);
      };
    }


    // ── iOS PATH: Manual RAF scroll engine ───────────────────────────────
    //
    // We replicate the exact same 4-stage animation logic but driven by
    // window.pageYOffset read inside requestAnimationFrame instead of
    // GSAP ScrollTrigger's scroll event listener.
    //
    // The section is 500vh tall. The sticky panel is vh tall.
    // Scroll range = containerTop to (containerTop + 400vh).
    // progress = scrollY from 0.0 → 1.0 over that range.
    //
    // We apply lerp (linear interpolation with a smoothing factor) to
    // replicate the scrub:2 feel — smooth lag that chases the real scroll.


    let rafId = null;
    let currentProgress = 0; // lerped progress (what we animate to)
    let targetProgress = 0; // raw scroll-mapped progress
    let lastArchScale = 0;
    let overlayShown = false;


    // Lerp factor: lower = more lag (smoother), higher = snappier.
    // scrub:2 in GSAP is roughly equivalent to ~0.06 lerp factor at 60fps.
    const LERP = 0.06;


    // Helper: linear interpolate
    const lerp = (a, b, t) => a + (b - a) * t;


    // Helper: map progress [0..1] through a sub-range [start..end] → [0..1]
    const mapRange = (p, start, end) =>
      Math.max(0, Math.min(1, (p - start) / (end - start)));


    // Helper: ease functions matching GSAP eases
    const easeOut3 = (t) => 1 - Math.pow(1 - t, 3); // power3.out
    const easeOut1 = (t) => 1 - (1 - t); // linear (power1)
    const easeIn2 = (t) => t * t; // power2.in
    const easeInOut1 = (t) => (t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t); // power1.inOut


    // Cache the navbar element
    const navbar = document.getElementById("global-navbar");


    // We need the section's scroll range. We read it in the RAF loop
    // so it's always fresh after any reflow.
    const getScrollRange = () => {
      if (!containerRef.current) return { start: 0, total: 1 };
      const rect = containerRef.current.getBoundingClientRect();
      const start = window.pageYOffset + rect.top;
      const total = containerRef.current.offsetHeight - window.innerHeight;
      return { start, total: Math.max(total, 1) };
    };


    // Apply all animation values for a given lerped progress (0→1)
    const applyProgress = (p) => {
      const isMobile = window.innerWidth <= 768;


      // ── STAGE 1: 0 → 0.30 ───────────────────────────────────────────
      const s1 = mapRange(p, 0, 0.3);


      if (heroTextRef.current) {
        heroTextRef.current.style.transform = `translateY(${-120 * s1}px) translateZ(0)`;
        heroTextRef.current.style.opacity = `${1 - s1}`;
      }
      if (scrollHintRef.current) {
        scrollHintRef.current.style.opacity = `${1 - Math.min(1, s1 / 0.33)}`;
      }
      if (cloudLeftRef.current) {
        const t1 = easeInOut1(s1);
        cloudLeftRef.current.style.transform = `translate(${-20 * t1}%, ${-10 * t1}%) translateZ(0)`;
        cloudLeftRef.current.style.opacity = `${1 - t1}`;
      }
      if (cloudRightRef.current) {
        const t1 = easeInOut1(s1);
        cloudRightRef.current.style.transform = `translate(${20 * t1}%, ${-8 * t1}%) translateZ(0)`;
        cloudRightRef.current.style.opacity = `${1 - t1}`;
      }
      if (skyRef.current) {
        const skyS1 = s1;
        const skyS2 = mapRange(p, 0.3, 0.6);
        const skyS3 = mapRange(p, 0.6, 1.0);
        const skyY = -10 * skyS1 + -5 * skyS2 + -13 * skyS3;
        const skyScale = 1 + 0.08 * skyS1;
        skyRef.current.style.transform = `translateY(${skyY}%) scale(${skyScale}) translateZ(0)`;
      }
      if (buildingRef.current) {
        const startY = isMobile
          ? window.innerHeight * 0.08
          : window.innerHeight * 0.26;
        const mid1Y = isMobile
          ? window.innerHeight * -0.05
          : window.innerHeight * -0.14;
        const mid2Y = isMobile
          ? window.innerHeight * -0.02
          : window.innerHeight * -0.04;
        const bs1 = easeInOut1(s1);
        const bs2 = mapRange(p, 0.3, 0.6);
        const buildingY =
          startY + (mid1Y - startY) * bs1 + (mid2Y - mid1Y) * bs2;
        const buildingScale = 1 + 0.03 * bs1;
        buildingRef.current.style.transform = `translateY(${buildingY}px) scale(${buildingScale}) translateZ(0)`;
      }
      if (navbar) {
        const isPast = p >= 1.0;
        if (isPast) {
          navbar.style.opacity = "";
          navbar.style.transform = "";
        } else {
          const ns1 = Math.min(1, s1 / 0.83);
          navbar.style.transform = `translateX(-50%) translateY(${-16 * ns1}px) scale(${1 - 0.05 * ns1}) translateZ(0)`;
          navbar.style.opacity = `${1 - ns1}`;
        }
      }


      // ── STAGE 2: 0.30 → 0.60 ─────────────────────────────────────────
      const s2 = mapRange(p, 0.3, 0.6);
      const s2ease = easeOut3(s2);


      // Arch scale
      const archTargetS2 = isMobile ? 1.5 : 1.0;
      const archScaleS2 = s2ease * archTargetS2;


      // Clip radius (matches arch inner hole)
      const clipTargetS2 = isMobile
        ? window.innerWidth * 0.746
        : window.innerWidth * 0.497;
      const clipRadiusS2 = s2ease * clipTargetS2;


      // ── STAGE 3: 0.60 → 1.0 ──────────────────────────────────────────
      const s3 = mapRange(p, 0.6, 1.0);
      const s3ease = easeInOut1(s3);


      const archTargetS3 = isMobile ? 6.0 : 3.0;
      // Stage 3 arch adds on top of stage 2 final value
      const archFinalScale =
        (s2 >= 1 ? archTargetS2 : archScaleS2) +
        s3ease * (archTargetS3 - archTargetS2);


      const clipTargetS3 = isMobile
        ? window.innerWidth * 2.5
        : window.innerWidth * 1.5;
      const clipFinalRadius =
        (s2 >= 1 ? clipTargetS2 : clipRadiusS2) +
        s3ease * (clipTargetS3 - clipTargetS2);


      // Apply arch transform (only if changed to avoid thrashing)
      const newArchScale = p <= 0.3 ? 0 : archFinalScale;
      if (
        Math.abs(newArchScale - lastArchScale) > 0.0001 &&
        archWrapRef.current
      ) {
        lastArchScale = newArchScale;
        // xPercent:-50 + scale from bottom-center
        archWrapRef.current.style.transform = `translateX(-50%) scale(${newArchScale}) translateZ(0)`;
        archWrapRef.current.style.webkitTransform = `translateX(-50%) scale(${newArchScale}) translateZ(0)`;
      }


      // Apply clip-path
      const finalRadius = p <= 0.3 ? 0 : clipFinalRadius;
      if (bgImgRef.current) {
        const val = `${finalRadius}px`;
        bgImgRef.current.style.clipPath = `circle(${val} at 50% 100%)`;
        bgImgRef.current.style.webkitClipPath = `circle(${val} at 50% 100%)`;
      }


      // Arch frame fade (0.82 → 0.97)
      if (archFrameRef.current) {
        const fadeP = mapRange(p, 0.82, 0.97);
        archFrameRef.current.style.opacity = `${1 - easeIn2(fadeP)}`;
      }


      // ── STAGE 4: 0.82 → 1.0 — overlay fade in ────────────────────────
      if (p >= 0.82 && !overlayShown) {
        overlayShown = true;
        if (overlayRef.current) {
          overlayRef.current.style.opacity = "0";
          overlayRef.current.style.pointerEvents = "auto";
        }
      }
      if (overlayRef.current) {
        const op = mapRange(p, 0.82, 1.0);
        overlayRef.current.style.opacity = `${easeOut3(op)}`;
        if (op > 0) overlayRef.current.style.pointerEvents = "auto";
        else overlayRef.current.style.pointerEvents = "none";
      }
      if (overlayLeftRef.current) {
        const op = mapRange(p, 0.84, 1.0);
        const e = easeOut3(op);
        overlayLeftRef.current.style.transform = `translateX(${-60 * (1 - e)}px) translateZ(0)`;
        overlayLeftRef.current.style.opacity = `${e}`;
      }
      if (overlayRightRef.current) {
        const op = mapRange(p, 0.86, 1.0);
        const e = easeOut3(op);
        overlayRightRef.current.style.transform = `translateX(${60 * (1 - e)}px) translateZ(0)`;
        overlayRightRef.current.style.opacity = `${e}`;
      }
    };


    // The RAF loop — runs every frame, reads pageYOffset directly
    const tick = () => {
      const { start, total } = getScrollRange();
      const scrollY = window.pageYOffset;


      // Map raw scroll to 0→1
      targetProgress = Math.max(0, Math.min(1, (scrollY - start) / total));


      // Lerp toward target (smooth lag = scrub feel)
      currentProgress = lerp(currentProgress, targetProgress, LERP);


      // Only apply if meaningfully different (perf: skip micro updates)
      if (Math.abs(currentProgress - targetProgress) < 0.0001) {
        currentProgress = targetProgress; // snap when close enough
      }


      applyProgress(currentProgress);


      rafId = requestAnimationFrame(tick);
    };


    // Start the loop
    rafId = requestAnimationFrame(tick);


    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      if (playEntranceFn)
        window.removeEventListener("loaderExit", playEntranceFn);
    };
  }, []);


  return (
    <>
      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.35; transform: scaleY(0.85) translateZ(0); }
          50%       { opacity: 1;    transform: scaleY(1.1)  translateZ(0); }
        }
        .hero-title {
          font-family: var(--font-instrument-sans), sans-serif !important;
          font-stretch: condensed;
          font-stretch: 85%;
          color: #0B1F3A;
          font-weight: 750;
          letter-spacing: -0.01em;
        }
        .hero-title-gradient {
          background-image: linear-gradient(90deg, rgba(226,3,132,1.00) 0%, rgba(109,3,74,1.00) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          display: inline;
        }
        .hero-desc {
          font-family: var(--font-inter), sans-serif;
          color: rgba(11, 31, 58, 0.85);
        }
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
          isolation: isolate;
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
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
          -webkit-appearance: none;
          appearance: none;
        }
        .hero-form-input::placeholder { color: rgba(255,255,255,0.45); }
        .hero-form-input:focus {
          border-color: rgba(27,124,156,0.7);
          background: rgba(255,255,255,0.15);
          box-shadow: 0 0 0 3px rgba(27,124,156,0.15);
        }
        .hero-form-input.has-error {
          border-color: rgba(248,113,113,0.6);
          box-shadow: 0 0 0 3px rgba(248,113,113,0.1);
        }
        .hero-form-select { appearance: none; -webkit-appearance: none; cursor: pointer; }
        .hero-form-label {
          display: block;
          color: rgba(255,255,255,0.85);
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 6px;
          font-family: var(--font-inter), sans-serif;
        }
      `}</style>


      <section
        ref={containerRef}
        className="relative h-[500vh] w-full"
        style={{ overscrollBehavior: "none" }}
        aria-label="Hero section"
      >
        {/* ── FIX A cont.: use --vh instead of 100dvh ── */}
        <div
          className="sticky top-0 left-0 w-full overflow-hidden"
          style={{ height: "calc(var(--vh, 1vh) * 100)" }}
        >
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
                  style={{
                    inset: "-10% 0 -10% 0",
                    willChange: "transform",
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                  }}
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


                {/* ── z-[1] Hero Text ── */}
                <div
                  ref={heroTextRef}
                  className="absolute left-0 top-0 w-full pt-[clamp(140px,20vh,220px)] z-[1] flex flex-col items-center text-center pointer-events-auto px-4"
                  style={{
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                  }}
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
                  className="absolute left-[-5%] md:left-[-3%] top-[14%] md:top-[18%] w-[54%] md:w-[42%] lg:w-[30%] aspect-[529/309] z-[3] pointer-events-none bg-transparent overflow-visible"
                  style={{
                    isolation: "isolate",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                  }}
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
                  className="absolute right-[-14%] md:right-[-9%] lg:right-[-5%] top-[11%] md:top-[14%] lg:top-[16%] w-[60%] md:w-[48%] lg:w-[35%] aspect-[472/276] z-[3] pointer-events-none bg-transparent overflow-visible"
                  style={{
                    isolation: "isolate",
                    willChange: "transform, opacity",
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                  }}
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
                  style={{
                    willChange: "transform",
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
                  }}
                >
                  <img
                    src="/images/hero/hero-building.png"
                    alt="City skyline with modern skyscrapers"
                    className="block w-full h-auto min-h-[480px] object-cover object-bottom"
                    loading="eager"
                  />
                </div>


                {/* ── z-[5] Reveal image (clip-path animated) ── */}
                <div
                  ref={bgImgRef}
                  className="absolute inset-0 z-[5] pointer-events-none"
                  style={{
                    clipPath: "circle(0px at 50% 100%)",
                    WebkitClipPath: "circle(0px at 50% 100%)",
                    willChange: "clip-path, transform",
                    transform: "translateZ(0)",
                    WebkitTransform: "translateZ(0)",
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


                {/* ── z-[8] Overlay: Heading + Contact Form ── */}
                <div
                  ref={overlayRef}
                  className="absolute inset-0 z-[8] overflow-y-auto overflow-x-hidden"
                  style={{ opacity: 0, pointerEvents: "none" }}
                >
                  <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60 pointer-events-none" />
                  <div className="relative w-full min-h-full flex flex-col justify-center lg:flex-row lg:items-center py-20 lg:py-0">
                    <div className="w-full max-w-[1990px] mx-auto px-[24px] md:px-[32px] lg:px-[120px] 2xl:px-[180px]">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-14 items-center">
                        {/* LEFT */}
                        <div
                          ref={overlayLeftRef}
                          className="flex flex-col gap-5 lg:gap-7 items-center text-center lg:items-start lg:text-left"
                          style={{ willChange: "transform, opacity" }}
                        >
                          <h2 className="hero-overlay-title text-white text-[clamp(26px,5vw,52px)]">
                            Start Your Business{" "}
                            <span
                              style={{
                                backgroundImage:
                                  "linear-gradient(90deg, #1B7C9C 0%, #00D4FF 100%)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                              }}
                            >
                              in Dubai
                            </span>
                          </h2>
                          <p className="hero-overlay-desc text-white/80 text-[clamp(14px,1.4vw,18px)] max-w-[520px]">
                            From company formation to visa processing, we handle
                            every step of your business setup in the UAE. Get
                            expert guidance and start your entrepreneurial
                            journey with confidence.
                          </p>
                          <div>
                            <RedHoverButton
                              url="/cost-calculator"
                              text="cost calculator"
                            />
                          </div>
                          <div className="flex items-center gap-6 mt-2">
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                              <span className="text-white/60 text-sm">
                                500+ Companies Formed
                              </span>
                            </div>
                            <div className="flex items-center gap-2">
                              <div className="w-2 h-2 rounded-full bg-emerald-400" />
                              <span className="text-white/60 text-sm">
                                Expert Team
                              </span>
                            </div>
                          </div>
                        </div>


                        {/* RIGHT: Contact Form */}
                        <div
                          ref={overlayRightRef}
                          className="hidden lg:block"
                          style={{ willChange: "transform, opacity" }}
                        >
                          <div className="hero-form-glass rounded-3xl p-6 md:p-8 max-w-[560px] lg:ml-auto">
                            <h3
                              className="text-white text-xl font-semibold mb-1"
                              style={{
                                fontFamily:
                                  "var(--font-instrument-sans), sans-serif",
                              }}
                            >
                              Get Free Consultation
                            </h3>
                            <p className="text-white/50 text-sm mb-6">
                              Fill in your details and we&apos;ll reach out
                              within 24 hours.
                            </p>
                            <form
                              onSubmit={handleSubmit}
                              noValidate
                              className="flex flex-col gap-4"
                            >
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="hero-form-label">
                                    Full Name{" "}
                                    <span className="text-red-400">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    className={`hero-form-input ${errors.name ? "has-error" : ""}`}
                                  />
                                  {errors.name && (
                                    <p className="text-red-400 text-xs mt-1 ml-1">
                                      {errors.name}
                                    </p>
                                  )}
                                </div>
                                <div>
                                  <label className="hero-form-label">
                                    Email{" "}
                                    <span className="text-red-400">*</span>
                                  </label>
                                  <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@example.com"
                                    className={`hero-form-input ${errors.email ? "has-error" : ""}`}
                                  />
                                  {errors.email && (
                                    <p className="text-red-400 text-xs mt-1 ml-1">
                                      {errors.email}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-4">
                                <div>
                                  <label className="hero-form-label">
                                    Phone{" "}
                                    <span className="text-red-400">*</span>
                                  </label>
                                  <input
                                    type="text"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+971 50 XXX XXXX"
                                    className={`hero-form-input ${errors.phone ? "has-error" : ""}`}
                                  />
                                  {errors.phone && (
                                    <p className="text-red-400 text-xs mt-1 ml-1">
                                      {errors.phone}
                                    </p>
                                  )}
                                </div>
                                <div>
                                  <label className="hero-form-label">
                                    Service{" "}
                                    <span className="text-red-400">*</span>
                                  </label>
                                  <div className="relative">
                                    <select
                                      name="service"
                                      value={form.service}
                                      onChange={handleChange}
                                      className={`hero-form-input hero-form-select ${errors.service ? "has-error" : ""}`}
                                    >
                                      <option
                                        value=""
                                        style={{ background: "#0B223E" }}
                                      >
                                        Select Service
                                      </option>
                                      <option
                                        value="Company Formation"
                                        style={{ background: "#0B223E" }}
                                      >
                                        Company Formation
                                      </option>
                                      <option
                                        value="PRO Services"
                                        style={{ background: "#0B223E" }}
                                      >
                                        PRO Services
                                      </option>
                                      <option
                                        value="Visa Services"
                                        style={{ background: "#0B223E" }}
                                      >
                                        Visa Services
                                      </option>
                                      <option
                                        value="Trade License"
                                        style={{ background: "#0B223E" }}
                                      >
                                        Trade License
                                      </option>
                                      <option
                                        value="Other"
                                        style={{ background: "#0B223E" }}
                                      >
                                        Other
                                      </option>
                                    </select>
                                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                                      <svg
                                        width="12"
                                        height="8"
                                        viewBox="0 0 12 8"
                                        fill="none"
                                      >
                                        <path
                                          d="M1 1.5L6 6.5L11 1.5"
                                          stroke="rgba(255,255,255,0.5)"
                                          strokeWidth="1.5"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                        />
                                      </svg>
                                    </div>
                                  </div>
                                  {errors.service && (
                                    <p className="text-red-400 text-xs mt-1 ml-1">
                                      {errors.service}
                                    </p>
                                  )}
                                </div>
                              </div>
                              <div>
                                <label className="hero-form-label">
                                  Message{" "}
                                  <span className="text-white/30 text-xs">
                                    (optional)
                                  </span>
                                </label>
                                <textarea
                                  name="message"
                                  value={form.message}
                                  onChange={handleChange}
                                  placeholder="Tell us about your project..."
                                  rows={3}
                                  className="hero-form-input resize-none"
                                />
                              </div>
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


                {/* ── z-[6] Arch Wrapper ── */}
                {/* Centered at bottom natively via percent transform-origin */}
                <div
                  ref={archWrapRef}
                  className="absolute z-[6] pointer-events-none"
                  style={{
                    width: "140vw",
                    height: "70vw",
                    bottom: 0,
                    left: "50%",
                    transform: "translateX(-50%) scale(0) translateZ(0)",
                    WebkitTransform: "translateX(-50%) scale(0) translateZ(0)",
                    transformOrigin: "50% 100%",
                    WebkitTransformOrigin: "50% 100%",
                    willChange: "transform",
                  }}
                  aria-hidden="true"
                >
                  <div
                    className="absolute inset-0 overflow-hidden"
                    style={{ borderRadius: "50% 50% 0 0 / 100% 100% 0 0" }}
                  >
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
              </>
            }
          >
            {/* Scroll hint */}
            <div
              ref={scrollHintRef}
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 pointer-events-none"
              aria-hidden="true"
            >
              <div
                className="w-[2px] h-10 bg-[#333333] origin-top"
                style={{
                  animation: "scrollPulse 1.6s ease-in-out infinite",
                  transform: "translateZ(0)",
                  WebkitTransform: "translateZ(0)",
                }}
              />
            </div>
          </SectionContainer>
        </div>
      </section>
    </>
  );
}




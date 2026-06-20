"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import SectionContainer from "@/components/layout/SectionContainer";
import ViewMoreButton from "@/components/ui/ViewMoreButton";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: "500+", label: "Satisfied Customers" },
  { number: "7+", label: "Years Experience" },
  { number: "50+", label: "Services" },
];

const headingWords = [
  { text: "Invest", highlight: false },
  { text: "First", highlight: false },
  { text: "provides", highlight: false },
  { text: "trusted", highlight: false },
  { text: "business", highlight: false },
  { text: "setup", highlight: false },
  { text: "in", highlight: false },
  { text: "Dubai,", highlight: false },
  { text: "company", highlight: true },
  { text: "formation", highlight: true },
  { text: "in", highlight: true },
  { text: "UAE,", highlight: true },
  { text: "visa", highlight: false },
  { text: "services,", highlight: false },
  { text: "PRO", highlight: false },
  { text: "support,", highlight: false },
  { text: "for", highlight: false },
  { text: "Startups", highlight: false },
  { text: "and", highlight: false },
  { text: "investors.", highlight: false },
];

export default function About() {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const imageContainersRef = useRef([]);

  const [imagesLoaded, setImagesLoaded] = useState([false, false]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
  
      const wordElements = headingRef.current.querySelectorAll(".word-wrapper");
      const lines = [];
      let currentLine = [];
      let lastTop = -1;

      wordElements.forEach((word) => {
        const top = word.offsetTop;
        if (top !== lastTop && currentLine.length > 0) {
          lines.push(currentLine);
          currentLine = [];
        }
        currentLine.push(word);
        lastTop = top;
      });
      lines.push(currentLine);

      // --- SET INITIAL STATE: Light gray and semi-transparent ---
      gsap.set(".char-span", { color: "#d1d5db", opacity: 0.6 });

      // 2. Animate all lines slightly faster
      lines.forEach((lineWords, lineIndex) => {
        const chars = lineWords.flatMap((w) =>
          Array.from(w.querySelectorAll(".char-span")),
        );
        gsap.to(chars, {
          color: (i, target) =>
            target.classList.contains("highlight") ? "#008ebf" : "#000000",
          opacity: 1,
          duration: 1.5, // Faster transition
          delay: 0.4 + lineIndex * 0.1, // Tighter gap between lines
          stagger: 0.03, // Faster letter reveal
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none none",
          },
        });
      });

      // 3. Other Reveal Animations
      gsap.from(".about-reveal", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        scrollTrigger: { trigger: sectionRef.current, start: "top 80%" },
      });

      // 4. Image Animation
      imageContainersRef.current.forEach((el, i) => {
        if (!el) return;
        gsap
          .timeline({
            scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
          })
          .to(el, { borderRadius: "24px", duration: 0.4, delay: i * 0.1 })
          .to(
            el,
            {
              width: "100%",
              maxWidth: "380px",
              duration: 1.4,
              ease: "expo.out",
            },
            "<",
          );
      });

      // 5. Stat Counter Animation
      document.querySelectorAll(".stat-number").forEach((el) => {
        const targetValue = parseInt(el.getAttribute("data-target") || "0");
        const suffix = el.getAttribute("data-suffix") || "";
        gsap.fromTo(
          el,
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2.5,
            scrollTrigger: { trigger: el, start: "top 90%" },
            snap: { innerText: 1 },
            onUpdate: function () {
              el.innerText = Math.floor(this.targets()[0].innerText) + suffix;
            },
          },
        );
      });
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  const handleImageLoad = (index) => {
    setImagesLoaded((prev) => {
      const newStatus = [...prev];
      newStatus[index] = true;
      return newStatus;
    });
  };

  return (
    <SectionContainer
      id="about"
      className="py-[60px] lg:py-[100px] bg-white overflow-hidden"
      containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
      sectionRef={sectionRef}
      background={
        <div className="absolute top-[20%] left-0 w-full h-[75%] z-0 pointer-events-none">
          <Image
            src="/images/about/about-vector.svg"
            alt=""
            fill
            priority
            className="object-contain object-top-left"
          />
        </div>
      }
    >
      <div className="relative z-10 flex flex-col gap-[70px]">
        {/* Row 1: About Tag + Heading */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] items-start gap-[30px]">
          <div className="flex justify-start about-reveal">
            <div className="flex items-center justify-center gap-[8px] w-[123px] h-[36px] bg-[#FAFAFA] border border-[#FDFAFA] shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] rounded-[12px]">
              <span className="w-[8px] h-[8px] bg-[#8e0b4a] rounded-full"></span>
              <span className="text-[14px] md:text-[16px] font-semibold text-[#111111] tracking-tight font-sans">
                About Us
              </span>
            </div>
          </div>
          <div className="flex flex-col items-start space-y-[45px]">
            <h2
              ref={headingRef}
              className="font-sans text-[22px] lg:text-[40px] font-medium leading-[1.3] text-black max-w-[800px]"
            >
              {headingWords.map((word, wIdx) => (
                <span
                  key={wIdx}
                  className="word-wrapper inline-block whitespace-pre mr-[0.25em]"
                >
                  {word.text.split("").map((char, cIdx) => (
                    <span
                      key={cIdx}
                      className={`char-span inline-block ${word.highlight ? "highlight" : ""}`}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h2>
            <div className="about-reveal whitespace-nowrap">
              <ViewMoreButton
                label="View About"
                href="/about-us"
                wrapperClassName="!mt-0 !justify-start"
              />
            </div>
          </div>
        </div>

        {/* Row 2: Stats + Images */}
     <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.5fr] xl:grid-cols-[1.2fr_2fr] items-end gap-[30px] lg:gap-[40px]">
  {/* Left Side: Stats Container */}
  <div className="flex flex-row flex-wrap lg:flex-nowrap overflow-visible items-center md:items-end gap-[20px] md:gap-[30px] xl:gap-[35px] about-reveal">
    {stats.map((stat, index) => (
      <div key={index} className="flex flex-col gap-[3px] md:gap-[6px] min-w-0">
        <span
          className="stat-number font-sans text-2xl md:text-4xl lg:text-[32px] xl:text-5xl font-semibold text-black leading-none tracking-tighter text-center whitespace-nowrap"
          data-target={stat.number.replace("+", "")}
          data-suffix={stat.number.includes("+") ? "+" : ""}
        >
          0
        </span>
        <span className="text-[11px] md:text-[12px] lg:text-[10px] xl:text-[12px] font-bold text-[#888888] uppercase tracking-widest font-sans whitespace-nowrap">
          {stat.label}
        </span>
      </div>
    ))}
  </div>

  {/* Right Side: Images Container */}
  <div className="flex flex-col md:flex-row items-center justify-center lg:justify-start gap-[24px] w-full">
    {[0, 1].map((i) => (
      <div
        key={i}
        ref={(el) => (imageContainersRef.current[i] = el)}
        className="relative w-[38px] md:w-[54px] lg:w-[68px] h-[100px] md:h-[180px] lg:h-[300px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-gray-100 transition-transform duration-700 hover:translate-y-[-5px]"
      >
        <Image
          src={`/images/about/about-img${i + 1}.jpg`}
          alt="Business"
          fill
          className={`object-cover transition-opacity duration-700 ease-in-out ${
            imagesLoaded[i] ? "opacity-100" : "opacity-0"
          }`}
          onLoad={() => handleImageLoad(i)}
          sizes="(max-width: 1024px) 300px, 320px"
        />
      </div>
    ))}
  </div>
</div>
      </div>
    </SectionContainer>
  );
}

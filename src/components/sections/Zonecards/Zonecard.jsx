"use client";

import Image from "next/image";
import Link from "next/link";
import CardButton from "./CardButton";

export default function ZoneCard({ zone }) {
  const { label, icon, href, desc, active } = zone;

  return (
    <Link
      href={href}
      className={`group relative flex flex-col w-full h-full rounded-2xl transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:-translate-y-3 cursor-pointer no-underline ${
        active
          ? "shadow-[0_8px_30px_rgba(107,0,51,0.35)] hover:shadow-[0_20px_50px_rgba(107,0,51,0.6)]"
          : "shadow-[0_8px_30px_rgba(5,15,50,0.35)] hover:shadow-[0_20px_50px_rgba(5,15,50,0.55)]"
      }`}
      style={{
        minHeight: "380px",
        padding: "28px",
        backgroundColor: active ? "#660033" : "#000F2B",
      }}
    >
      <div
        className="mb-5 relative w-fit transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] hover:scale-110"
        style={{ willChange: "transform" }}
      >
        <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-[78px] lg:h-[78px] relative">
          <Image
            src={icon}
            alt={label}
            fill
            className="object-contain"
            sizes="(min-width:1024px) 80px, (min-width:768px) 64px, 48px"
          />
        </div>
      </div>

      <h3
        className="font-extrabold text-white leading-tight mb-[14px]"
        style={{
          fontSize: "clamp(24px, 2.2vw, 30px)",
          letterSpacing: "-0.01em",
        }}
      >
        {label}
      </h3>

      <p
        className="leading-relaxed flex-1"
        style={{
          color: "rgba(255,255,255,0.65)",
          fontSize: "clamp(12px, 1.05vw, 14px)",
        }}
      >
        {desc}
      </p>

      <div
        className="w-full h-px mt-[20px] mb-[20px]"
        style={{ backgroundColor: "rgba(255,255,255,0.18)" }}
      />
      <CardButton label="View More" active={active} />
    </Link>
  );
}

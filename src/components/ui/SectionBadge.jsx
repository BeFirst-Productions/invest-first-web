import React from 'react';

/**
 * SectionBadge — reusable pill badge used as section labels across the site.
 *
 * @param {string} label      - The text shown inside the badge.
 * @param {string} className  - Optional extra Tailwind classes (e.g. custom mb-*).
 */
export default function SectionBadge({ label, className = '' }) {
  return (
    <div
      className={`inline-flex items-center gap-[8px] px-[14px] py-[8px] bg-white border border-[#E5E5E5] shadow-[0_4px_20px_rgba(0,0,0,0.05)] rounded-full ${className}`}
    >
      <span className="w-[7px] h-[7px] bg-[#8B1D41] rounded-full flex-shrink-0" />
      <span className="text-[13px] md:text-[14px] font-semibold text-[#111111] font-sans tracking-tight">
        {label}
      </span>
    </div>
  );
}

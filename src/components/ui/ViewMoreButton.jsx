'use client';

import React from 'react';
import Link from 'next/link';

/**
 * ArrowDiagonal icon — reused from existing project style
 */
const ArrowDiagonal = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

/**
 * ViewMoreButton — fully reusable, dynamic CTA button.
 *
 * Props:
 *   label    {string}   — Button text. Default: "View More"
 *   href     {string}   — Navigation URL. Default: "#"
 *   onClick  {function} — Optional click handler (used when href not needed)
 *   as       {'link'|'button'} — Render as <Link> or <button>. Default: 'link'
 *   className {string}  — Extra classes for the outer wrapper div
 *   wrapperClassName {string} — Extra classes for the centering wrapper
 */
export default function ViewMoreButton({
  label            = 'View More',
  href             = '#',
  onClick,
  as               = 'link',
  className        = '',
  wrapperClassName = '',
}) {
  const inner = (
    <span className={`group flex items-center gap-[12px] md:gap-[16px] cursor-pointer ${className}`}>
      <span className="text-sm sm:text-base md:text-xl font-normal text-[#111111] font-sans  tracking-wider transition-colors duration-300 group-hover:text-[#660033]">
        {label}
      </span>
      <div className="
        w-[40px] h-[40px]
        sm:w-[44px] sm:h-[44px]
        md:w-[54px] md:h-[54px]
        bg-[#660033] text-white rounded-full
        flex items-center justify-center
        transition-all duration-500
        group-hover:scale-110 group-hover:rotate-[360deg]
        shadow-[0_8px_24px_rgba(102,0,51,0.2)]
        flex-shrink-0
      ">
        <ArrowDiagonal />
      </div>
    </span>
  );

  return (
    <div className={`flex justify-center mt-[48px] md:mt-[64px] lg:mt-[80px] ${wrapperClassName}`}>
      {as === 'button' ? (
        <button
          type="button"
          onClick={onClick}
          className="no-underline bg-transparent border-none p-0 m-0"
          aria-label={label}
        >
          {inner}
        </button>
      ) : (
        <Link
          href={href}
          onClick={onClick}
          className="no-underline"
          aria-label={label}
        >
          {inner}
        </Link>
      )}
    </div>
  );
}

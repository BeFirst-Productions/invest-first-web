import React from 'react';
import Link from 'next/link';

export default function RedHoverButton({ text, onClick, type = "button", url, className = "" }) {
  const baseClasses = `group relative inline-flex items-center gap-4 bg-[#08101A] rounded-full p-[6px] pr-8 overflow-hidden transition-all duration-300 shadow-lg shadow-black/20 hover:scale-[1.02] active:scale-[0.98] ${className}`;
  
  const innerContent = (
    <>
      <div className="absolute left-[6px] top-[6px] bottom-[6px] w-[44px] bg-[#00598B] rounded-full transition-all duration-500 ease-out group-hover:w-[calc(100%-12px)] group-hover:bg-[#006ca6]"></div>
      <div className="relative z-10 w-11 h-11 flex items-center justify-center text-white shrink-0">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 12h14" />
          <path d="m13 5 7 7-7 7" />
        </svg>
      </div>
      <span className="relative z-10 text-white font-bold text-[15px] lowercase tracking-wide whitespace-nowrap">
        {text}
      </span>
    </>
  );

  if (url) {
    return (
      <Link href={url} onClick={onClick} className={baseClasses}>
        {innerContent}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses}>
      {innerContent}
    </button>
  );
}

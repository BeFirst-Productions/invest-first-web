'use client';

const ArrowDiagonal = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
    <path
      d="M7 17L17 7M17 7H7M17 7V17"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * active=true  → crimson #660033 filled circle
 * active=false → navy #1a2d5a filled circle (matches card tone)
 */
export default function CardButton({ label = 'View More', active = false }) {
  return (
    <div className="flex items-center justify-between w-full select-none">
      <span className="text-[15px] font-normal text-white/80 tracking-wide group-hover:text-white transition-colors duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]">
        {label}
      </span>
      <div
        className="w-11 h-11 rounded-full flex items-center justify-center shrink-0 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-110 group-hover:rotate-45"
        style={
          active
            ? { background: '#A0194C', boxShadow: '0 4px 16px rgba(102,0,51,0.55)' }
            : { background: '#182D58', boxShadow: '0 4px 14px rgba(10,20,60,0.55)' }
        }
      >
        <ArrowDiagonal />
      </div>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';


function CheckIcon({ featured }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="flex-shrink-0 mt-[2px]"
      aria-hidden="true"
    >
      <circle cx="10" cy="10" r="10" fill={featured ? '#ffffff' : '#000000'} />
      <path
        d="M5.5 10.5L8.5 13.5L14.5 7.5"
        stroke={featured ? '#660033' : '#ffffff'}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/**
 *
 * @param {string}   title      
 * @param {string}   description 
 * @param {string}   price       
 * @param {string[]} features    
 * @param {boolean}  featured    
 * @param {string}   ctaText     
 * @param {string}   ctaHref     
 */
export default function PricingCard({
  title,
  description,
  price,
  features = [],
  featured = false,
  ctaText = "Let's Do This",
  ctaHref = '#',
}) {
  const bg          = featured ? 'bg-[#660033]'  : 'bg-[#F5F5F5]';
  const titleColor  = featured ? 'text-white'     : 'text-[#111111]';
  const descColor   = featured ? 'text-white/70'  : 'text-[#777777]';
  const divider     = featured ? 'border-white/20' : 'border-[#E5E5E5]';
  const priceColor  = featured ? 'text-white'     : 'text-[#111111]';
  const featureText = featured ? 'text-white/90'  : 'text-[#444444]';


  const btnClass = featured
    ? 'bg-white text-[#660033] hover:bg-white/90'
    : 'bg-[#660033] text-white hover:bg-[#7a0038]';

  return (
    <div
      className={`${bg} rounded-[20px] p-[28px] md:p-[32px] flex flex-col h-full transition-transform duration-300 hover:-translate-y-1`}
    >
      {/* Title */}
      <h3 className={`text-[28px] md:text-[32px] font-bold leading-[1.15] ${titleColor} mb-[10px]`}>
        {title}
      </h3>

      {/* Description */}
      <p className={`text-[13px] md:text-[14px] leading-[1.6] ${descColor} mb-[20px]`}>
        {description}
      </p>

      {/* Divider */}
      <div className={`border-t ${divider} mb-[20px]`} />

      {/* Price */}
      <p className={`text-[28px] md:text-[32px] font-bold ${priceColor} mb-[20px]`}>
        {price}
      </p>

   
      <ul className="flex flex-col gap-[12px] mb-[32px] flex-1">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-start gap-[10px]">
            <CheckIcon featured={featured} />
            <span className={`text-[13px] md:text-[14px] leading-[1.5] ${featureText}`}>
              {feat}
            </span>
          </li>
        ))}
      </ul>

  
      <Link
        href={ctaHref}
        className={`${btnClass} w-full text-center text-[14px] md:text-[15px] font-semibold py-[14px] rounded-[10px] transition-colors duration-200`}
      >
        {ctaText}
      </Link>
    </div>
  );
}

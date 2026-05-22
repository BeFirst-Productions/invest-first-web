'use client';

import Image from 'next/image';
import CardButton from './CardButton';

export default function ZoneCard({ zone }) {
  const { label, icon, href, desc, active } = zone;

  return (
    <div
      className="group relative flex flex-col w-full rounded-2xl transition-transform duration-300 hover:-translate-y-2"
      style={{
        minHeight: '360px',
        padding: '28px',
        backgroundColor: active ? '#660033' : '#000F2B',
        boxShadow: active
          ? '0 8px 40px rgba(107,0,51,0.45)'
          : '0 8px 32px rgba(5,15,50,0.40)',
      }}
    >
      {/* Icon — raw PNG, zero background, zero border, zero shadow */}
      <div
        className="mb-5 relative transition-transform duration-500 ease-out group-hover:scale-105 group-hover:rotate-3"
        style={{ willChange: 'transform' }}
      >
        {/* Responsive icon size: small on mobile, larger on md/lg */}
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

      {/* Title */}
      <h3
        className="font-extrabold text-white leading-tight mb-[14px]"
        style={{ fontSize: 'clamp(24px, 2.2vw, 30px)', letterSpacing: '-0.01em' }}
      >
        {label}
      </h3>

      {/* Description */}
      <p
        className="leading-relaxed flex-1"
        style={{ color: 'rgba(255,255,255,0.65)', fontSize: 'clamp(12px, 1.05vw, 14px)' }}
      >
        {desc}
      </p>

      {/* Divider */}
      <div
        className="w-full h-px mt-[20px] mb-[20px]"
        style={{ backgroundColor: 'rgba(255,255,255,0.18)' }}
      />

      {/* CTA */}
      <CardButton href={href} label="View More" active={active} />
    </div>
  );
}
'use client';

import React from 'react';
import Image from 'next/image';
import { socialMediaPosts } from '@/data/socialMediaData';
import SectionContainer from '@/components/layout/SectionContainer';

export default function SocialMedia() {
  return (
    <SectionContainer
      id="social-media"
      className="py-[48px] md:py-[80px] lg:py-[120px] bg-white"
      containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
    >
      <style>{`
        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .social-track {
          animation: marquee 40s linear infinite;
          will-change: transform;
        }
        .social-track:hover {
          animation-play-state: paused;
        }
      `}</style>

      {/* ── Header ── */}
      <div className="mb-[32px] md:mb-[48px] lg:mb-[64px]">
        <div className="inline-flex items-center gap-[8px] px-[14px] py-[7px] bg-white border border-[#E5E5E5] shadow-[0_2px_12px_rgba(0,0,0,0.06)] rounded-full mb-[16px] md:mb-[20px]">
          <span className="w-[8px] h-[8px] rounded-full bg-[#C51D5A] flex-shrink-0" />
          <span className="text-[13px] md:text-[14px] font-semibold text-[#111111] tracking-[-0.01em]">
            Social Media
          </span>
        </div>
        <h2 className="text-[28px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-[#111111] tracking-[-0.03em] max-w-[700px]">
          Let Your Brand Speak Online
        </h2>
      </div>

      {/* ── Carousel viewport ── */}
      <div className="relative w-full overflow-hidden">
        <div className="flex w-max gap-[16px] md:gap-[20px] lg:gap-[24px] social-track">
          {[...socialMediaPosts, ...socialMediaPosts, ...socialMediaPosts].map((post, index) => (
            <div
              key={`${post.id}-${index}`}
              className="
                flex-shrink-0
                w-[200px] sm:w-[240px] md:w-[290px] lg:w-[330px]
                rounded-[16px] md:rounded-[20px] overflow-hidden
                bg-[#0A1144]
                shadow-[0_8px_32px_rgba(0,0,0,0.10)]
                hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]
                hover:-translate-y-1
                transition-all duration-500
                group cursor-pointer
              "
            >
              <div className="relative w-full aspect-square overflow-hidden">
                <Image
                  src={post.image}
                  alt={`Social media post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 480px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 290px, 330px"
                />
              </div>
              <div className="px-[16px] py-[16px] md:px-[24px] md:py-[22px] bg-[#0A1144]">
                <p className="text-[12px] md:text-[14px] lg:text-[15px] text-white/85 leading-[1.65] font-medium">
                  {post.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
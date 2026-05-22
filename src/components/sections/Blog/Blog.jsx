'use client';

import React, { useRef, useEffect } from 'react';
import Image from 'next/image';
import { blogPosts } from '@/data/blogData';
import SectionBadge from '@/components/ui/SectionBadge';
import SectionContainer from '@/components/layout/SectionContainer';
import ViewMoreButton from '@/components/ui/ViewMoreButton';

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


export default function Blog() {
  const scrollRef = useRef(null);
  const rafRef = useRef(0);
  const pausedRef = useRef(false);

  const displayPosts = [...blogPosts, ...blogPosts, ...blogPosts];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const oneSetWidth = el.scrollWidth / 3;
    el.scrollLeft = oneSetWidth;

    const tick = () => {
      if (!pausedRef.current) {
        el.scrollLeft += 0.6;
        if (el.scrollLeft >= oneSetWidth * 2) el.scrollLeft -= oneSetWidth;
        if (el.scrollLeft <= 0) el.scrollLeft += oneSetWidth;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const handleManualScroll = (direction) => {
    const el = scrollRef.current;
    if (!el) return;

    const cardWidth = 340 + 24; // Average card width + gap
    const nudge = cardWidth * (direction === 'left' ? -1 : 1);
    const start = el.scrollLeft;
    const startTime = performance.now();
    const duration = 480;

    pausedRef.current = true;

    const ease = (t) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

    const animate = (now) => {
      const progress = Math.min((now - startTime) / duration, 1);
      el.scrollLeft = start + nudge * ease(progress);

      const oneSetWidth = el.scrollWidth / 3;
      if (el.scrollLeft >= oneSetWidth * 2) el.scrollLeft -= oneSetWidth;
      if (el.scrollLeft <= 0) el.scrollLeft += oneSetWidth;

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        pausedRef.current = false;
      }
    };

    requestAnimationFrame(animate);
  };

  return (
    <SectionContainer
      id="blog"
      className="py-[48px] md:py-[80px] lg:py-[120px] bg-white"
      containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
    >
      {/* ── Header ── */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-[24px] mb-[32px] md:mb-[48px] lg:mb-[64px]">
        <div>
          <SectionBadge label="Blog & News" className="mb-[16px] md:mb-[20px]" />
          <h2 className="font-sans text-[28px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-[#111111] tracking-[-0.03em] max-w-[800px]">
            Expert Insights & Business Tips 
          </h2>
        </div>

        <ViewMoreButton
          label="View All"
          href="/blog"
          wrapperClassName="!mt-0 !justify-end"
        />
      </div>

      {/* ── Cards Slider ── */}
      <div className="relative w-full">
        <div
          ref={scrollRef}
          className="flex gap-[16px] md:gap-[20px] lg:gap-[24px] overflow-x-hidden no-scrollbar"
        >
          {displayPosts.map((post, index) => (
            <div
              key={`${post.id}-${index}`}
              className="flex-shrink-0 w-[220px] md:w-[300px] lg:w-[340px] group cursor-pointer"
              onMouseEnter={() => { pausedRef.current = true; }}
              onMouseLeave={() => { pausedRef.current = false; }}
            >
              {/* Image */}
              <div className="relative w-full h-[200px] md:h-[260px] lg:h-[300px] rounded-[16px] md:rounded-[24px] overflow-hidden mb-[14px] md:mb-[20px]">
                <Image
                  src={post.image}
                  alt={`Blog post ${post.id}`}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 220px, (max-width: 1024px) 300px, 340px"
                />
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-[6px] md:gap-[8px] mb-[10px] md:mb-[14px]">
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-[10px] py-[4px] bg-[#F5F5F5] rounded-[6px] text-[11px] md:text-[13px] font-semibold text-[#666666] font-sans"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h3 className="text-[15px] md:text-[20px] lg:text-[22px] font-bold text-[#111111] leading-[1.3] mb-[6px] md:mb-[10px] font-sans group-hover:text-[#660033] transition-colors line-clamp-2">
                {post.title}
              </h3>

              {/* Description */}
              <p className="text-[12px] md:text-[14px] text-[#666666] leading-[1.6] font-sans line-clamp-2">
                {post.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Navigation Buttons ── */}
        <div className="flex justify-center gap-[12px] md:gap-[16px] mt-[32px] md:mt-[48px] lg:mt-[56px]">
          <button
            onClick={() => handleManualScroll('left')}
            className="w-[44px] h-[44px] md:w-[56px] md:h-[56px] rounded-full bg-[#111111] flex items-center justify-center hover:bg-[#660033] transition-all duration-300 active:scale-95 shadow-lg group"
            aria-label="Previous posts"
          >
            <div className="group-hover:-translate-x-1 transition-transform">
              <ArrowLeft />
            </div>
          </button>
          <button
            onClick={() => handleManualScroll('right')}
            className="w-[44px] h-[44px] md:w-[56px] md:h-[56px] rounded-full bg-[#111111] flex items-center justify-center hover:bg-[#660033] transition-all duration-300 active:scale-95 shadow-lg group"
            aria-label="Next posts"
          >
            <div className="group-hover:translate-x-1 transition-transform">
              <ArrowRight />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </SectionContainer>
  );
}
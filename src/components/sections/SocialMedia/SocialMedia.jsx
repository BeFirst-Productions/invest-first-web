'use client';

import React, { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import SectionContainer from '@/components/layout/SectionContainer';
import SplitText from '@/components/ui/SplitText';

// ── Local Static Content Fallback Data with Unique Captions ──
const STATIC_FALLBACK_POSTS = [
  {
    id: 'static-1',
    caption: 'Most people don’t fail in business because of a bad idea. They fail because they choose the wrong structure.If you’re planning to start in the UAE, Free Zone business setup could be your smartest move.',
    media_url: '/images/social-media/01.jpg',
    permalink: 'https://www.instagram.com/investfirst.ae'
  },
  {
    id: 'static-2',
    caption: 'Their Future Starts with Good Health Every parent dreams of giving their child the best future possible. But a healthy future begins with access to the right care, at the right time.',
    media_url: '/images/social-media/02.jpg',
    permalink: 'https://www.instagram.com/investfirst.ae'
  },
  {
    id: 'static-3',
    caption: 'Start Your UAE Business Without Breaking the Bank!Looking for an affordable way to launch your business in the UAE? Your limited-time opportunity is here!',
    media_url: '/images/social-media/03.jpg',
    permalink: 'https://www.instagram.com/investfirst.ae'

  },
  {
    id: 'static-4',
    caption: 'SUMMER ISN’T JUST FOR VACATIONS. IT’S FOR NEW BEGINNINGS.While others are planning their holidays, smart entrepreneurs are planning their next business move.',
    media_url: '/images/social-media/04.jpg',
    permalink: 'https://www.instagram.com/investfirst.ae'

  },
  {
    id: 'static-5',
    caption: 'We are delighted to announce our strategic partnership with Qatar Insurance Company (@qic_online), one of the GCC’s most established and trusted insurance providers and among the region’s leading insurers.',
    media_url: '/images/social-media/05.jpg',
    permalink: 'https://www.instagram.com/investfirst.ae'
  },
  {
    id: 'static-6',
    caption: 'Own a Luxury Villa in Dubai’s Most Prestigious Communities with us.Step into a lifestyle built around elegance, privacy, and long-term value.',
    media_url: '/images/social-media/06.jpg',
    permalink: 'https://www.instagram.com/investfirst.ae'
  },
  {
    id: 'static-7',
    caption: 'Dubai’s BEST 2-Year Business License Offer is Here!Why pay more when you can start smarter? 🚀Launch your UAE business with this exclusive limited-time IFZA package and save BIG while building your future in Dubai.',
    media_url: '/images/social-media/07.jpg',
    permalink: 'https://www.instagram.com/investfirst.ae'
  },
  {
    id: 'static-8',
    caption: 'Launch Your UAE Business & Secure Your Future — All in One Package!Looking to start your business in Dubai the smart way?This exclusive IFZA Limited-Time Offer gives you everything you need to get started — with massive savings included.',
    media_url: '/images/social-media/08.jpg',
    permalink: 'https://www.instagram.com/investfirst.ae'
  },
  {
    id: 'static-9',
    caption: 'We are proud to announce that Invest First Business Services is now an Official Channel Partner of Abu Dhabi-based Masdar City Free Zone — one of the UAE’s most innovative and future-focused business destinations.',
    media_url: '/images/social-media/09.jpg',
    permalink: 'https://www.instagram.com/investfirst.ae'
  }
];

export default function SocialMedia() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  
  const scrollContainerRef = useRef(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);
  
  const velocityRef = useRef(0);
  const lastXRef = useRef(0);
  const lastTimeRef = useRef(0);
  const animationRef = useRef(null);
  
  const baseAutoSpeed = 0.5;

  useEffect(() => {
    fetch("/api/instagram")
      .then((res) => {
        if (!res.ok) throw new Error("API collapsed or network response was not ok");
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        } else {
          console.warn("API returned empty data, loading local static assets.");
          setPosts(STATIC_FALLBACK_POSTS);
        }
      })
      .catch((err) => {
        console.error("API collapsed. Triggering distinct static fallbacks:", err);
        setPosts(STATIC_FALLBACK_POSTS);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  const displayPosts = posts.length > 0 
    ? [...posts, ...posts, ...posts, ...posts] 
    : [];

  useEffect(() => {
    if (isLoading || displayPosts.length === 0) return;

    const scrollContainer = scrollContainerRef.current;

    const renderLoop = () => {
      if (!scrollContainer) return;

      if (isDownRef.current) {
        velocityRef.current = 0; 
      } else {
        if (Math.abs(velocityRef.current) > 0.1) {
          scrollContainer.scrollLeft += velocityRef.current;
          velocityRef.current *= 0.95; 
        } else {
          scrollContainer.scrollLeft += baseAutoSpeed;
        }
      }

      const maxScroll = scrollContainer.scrollWidth - scrollContainer.clientWidth;
      if (scrollContainer.scrollLeft >= maxScroll - 2) {
        scrollContainer.scrollLeft = maxScroll / 3;
      } else if (scrollContainer.scrollLeft <= 2) {
        scrollContainer.scrollLeft = maxScroll / 3;
      }

      animationRef.current = requestAnimationFrame(renderLoop);
    };

    animationRef.current = requestAnimationFrame(renderLoop);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [isLoading, displayPosts.length]);

  const handleDragStart = (e) => {
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    isDownRef.current = true;
    const pageX = e.pageX || e.touches[0].pageX;
    
    startXRef.current = pageX - scrollContainer.offsetLeft;
    scrollLeftRef.current = scrollContainer.scrollLeft;
    
    lastXRef.current = pageX;
    lastTimeRef.current = performance.now();
    velocityRef.current = 0;
  };

  const handleDragEnd = () => {
    isDownRef.current = false;
  };

  const handleDragMove = (e) => {
    if (!isDownRef.current) return;
    
    const scrollContainer = scrollContainerRef.current;
    if (!scrollContainer) return;

    const pageX = e.pageX || (e.touches && e.touches[0].pageX);
    if (!pageX) return;

    const currentTime = performance.now();
    const timeElapsed = currentTime - lastTimeRef.current;
    
    if (timeElapsed > 0) {
      const deltaX = pageX - lastXRef.current;
      velocityRef.current = -(deltaX / timeElapsed) * 16; 
    }

    lastXRef.current = pageX;
    lastTimeRef.current = currentTime;

    const x = pageX - scrollContainer.offsetLeft;
    const walk = (x - startXRef.current) * 1.2; 
    scrollContainer.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <SectionContainer
      id="social-media"
      className="py-[48px] md:py-[80px] lg:py-[120px] bg-white select-none"
      containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
    >
      {/* ── Header ── */}
      <div className="mb-[32px] md:mb-[48px] lg:mb-[64px]">
        <div className="inline-flex items-center gap-[8px] px-[14px] py-[7px] bg-white border border-[#E5E5E5] shadow-[0_2px_12px_rgba(0,0,0,0.06)] rounded-full mb-[16px] md:mb-[20px]">
          <span className="w-[8px] h-[8px] rounded-full bg-[#C51D5A] flex-shrink-0" />
          <span className="text-[13px] md:text-[14px] font-semibold text-[#111111] tracking-[-0.01em]">
            Social Media
          </span>
        </div>
        <SplitText
          tag="h2"
          className="text-[28px] md:text-[44px] lg:text-[52px] font-bold leading-[1.15] text-[#111111] tracking-[-0.03em] max-w-[700px]"
          text="Let Your Brand Speak Online"
          delay={30}
          duration={0.8}
          ease="power3.out"
          splitType="chars"
          from={{ opacity: 0, y: 40 }}
          to={{ opacity: 1, y: 0 }}
          threshold={0.1}
          rootMargin="-100px"
          textAlign="left"
        />
      </div>

      {/* ── Carousel Viewport ── */}
      <div 
        ref={scrollContainerRef}
        onMouseDown={handleDragStart}
        onMouseLeave={handleDragEnd}
        onMouseUp={handleDragEnd}
        onMouseMove={handleDragMove}
        onTouchStart={handleDragStart}
        onTouchEnd={handleDragEnd}
        onTouchMove={handleDragMove}
        className="relative w-full overflow-x-auto cursor-grab active:cursor-grabbing no-scrollbar"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        <style>{`
          .no-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {isLoading ? (
          <div className="flex gap-[16px] md:gap-[20px] lg:gap-[24px]">
            {[1, 2, 3, 4].map((n) => (
              <div 
                key={n} 
                className="flex-shrink-0 w-[200px] sm:w-[240px] md:w-[290px] lg:w-[330px] h-[400px] rounded-[16px] md:rounded-[20px] bg-[#0A1144]/10 animate-pulse"
              />
            ))}
          </div>
        ) : displayPosts.length > 0 ? (
          <div className="flex w-max gap-[16px] md:gap-[20px] lg:gap-[24px] py-4">
            {displayPosts.map((post, index) => (
              <a
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
                key={`${post.id}-${index}`}
                draggable="false"
                className="
                  flex-shrink-0
                  w-[200px] sm:w-[240px] md:w-[290px] lg:w-[330px]
                  rounded-[16px] md:rounded-[20px] overflow-hidden
                  bg-[#0A1144]
                  shadow-[0_8px_32px_rgba(0,0,0,0.10)]
                  hover:shadow-[0_16px_48px_rgba(0,0,0,0.18)]
                  hover:-translate-y-1
                  transition-all duration-500
                  group block
                "
              >
                <div className="relative w-full aspect-[4/5] overflow-hidden bg-[#0e164d]" draggable="false">
                  <Image
                    src={post.media_url}
                    alt={post.caption ? post.caption.substring(0, 30) : "Social media post"}
                    fill
                    className="object-contain transition-transform duration-700 group-hover:scale-102"
                    sizes="(max-width: 480px) 200px, (max-width: 768px) 240px, (max-width: 1024px) 290px, 330px"
                    unoptimized
                    draggable="false"
                  />
                </div>
                <div className="px-[16px] py-[16px] md:px-[24px] md:py-[22px] bg-[#0A1144] border-t border-white/5">
                  <p className="text-[12px] md:text-[14px] lg:text-[15px] text-white/85 leading-[1.65] font-medium line-clamp-2">
                    {post.caption || "View post on Instagram"}
                  </p>
                </div>
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </SectionContainer>
  );
}
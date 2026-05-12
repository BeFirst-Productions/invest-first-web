'use client';

import React, { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { visaServices } from '@/data/serviceData';
import SectionBadge from '@/components/ui/SectionBadge';

export default function VisaServices() {
  const wrapperRef = useRef(null);
  const [viewportWidth, setViewportWidth] = useState(null);

  useEffect(() => {
    const update = () => {
      if (wrapperRef.current) {
        const left = wrapperRef.current.getBoundingClientRect().left;
        setViewportWidth(`calc(100vw - ${left}px)`);
      }
    };
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return (
    <div
      className="py-[48px] md:py-[60px] lg:py-[100px] bg-white"
      style={{ overflowX: 'clip' }}
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: scroll 40s linear infinite;
        }
        .animate-infinite-scroll:hover {
          animation-play-state: paused;
        }
        .services-carousel-viewport {
          -webkit-mask-image: linear-gradient(to right, transparent 0px, black 0px);
          mask-image: linear-gradient(to right, transparent 0px, black 0px);
          visibility: hidden;
        }
        .services-carousel-viewport.ready {
          visibility: visible;
        }
      `}</style>

      {/* ── Header ── */}
      <div className="px-[20px] md:px-[60px] lg:px-[100px] xl:px-[calc((100vw-1440px)/2+100px)] mb-[32px] md:mb-[40px] lg:mb-[25px] pr-[20px] md:pr-0">
        <SectionBadge label="Visa Services" className="mb-[24px]" />
        <h2 className="font-sans text-[26px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.3] md:leading-[46px] text-black tracking-tight max-w-[636px]">
          Expert Visa Solutions for <br className="hidden md:block" />
          Your Global Ambitions
        </h2>
      </div>

      {/* ── Carousel ── */}
      <div
        ref={wrapperRef}
        className="
          pl-[20px] md:pl-[60px] lg:pl-[100px]
          xl:pl-[calc((100vw-1440px)/2+100px)]
        "
      >
        <div
          className={`services-carousel-viewport${viewportWidth ? ' ready' : ''}`}
          style={viewportWidth ? { width: viewportWidth } : undefined}
        >
          <div className="flex w-max animate-infinite-scroll py-[20px] md:py-[30px]">
            {[...visaServices, ...visaServices, ...visaServices, ...visaServices].map((service, index) => (
              <div
                key={index}
                className="flex-shrink-0 mr-[12px] md:mr-[25px]"
              >
                <div className="group relative flex flex-col w-[220px] h-[280px] md:w-[310px] md:h-[376px] rounded-[16px] bg-[#660033] overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.08)] transition-all duration-500 hover:shadow-[0_20px_55px_rgba(0,0,0,0.15)] hover:-translate-y-2">
                  {/* Image Area */}
                  <div className="relative w-full h-[150px] md:h-[235px] overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-1000 group-hover:scale-105"
                      sizes="(max-width: 768px) 220px, 310px"
                    />
                  </div>

                  {/* Content Area */}
                  <div className="p-[16px] md:p-[28px] flex flex-col flex-grow justify-start bg-[#660033]">
                    <h3 className="text-[15px] md:text-[22px] font-bold text-white mb-[4px] md:mb-[10px] font-sans tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-[11px] md:text-[14px] text-white/80 leading-[1.5] font-sans font-medium line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

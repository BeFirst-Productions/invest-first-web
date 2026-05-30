'use client';

import React, { useRef, useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { visaServices } from '@/data/serviceData';
import SectionBadge from '@/components/ui/SectionBadge';
import SplitText from '@/components/ui/SplitText';

export default function VisaServices() {
  const wrapperRef = useRef(null);
  const trackRef = useRef(null);
  const animFrameRef = useRef(null);
  const offsetRef = useRef(0);
  const speedRef = useRef(0.5); // px per frame, positive = left
  const isPausedRef = useRef(false);
  const isDraggingRef = useRef(false);
  const dragStartXRef = useRef(0);
  const dragStartOffsetRef = useRef(0);
  const lastDragXRef = useRef(0);
  const dragVelocityRef = useRef(0);
  const halfWidthRef = useRef(0);
  const [viewportWidth, setViewportWidth] = useState(null);

  // Measure the scrollable half-width (one set of items) for seamless loop
  const measureHalf = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    // We duplicate items 4x; half = 2x = one loop unit
    halfWidthRef.current = track.scrollWidth / 2;
  }, []);

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

  useEffect(() => {
    measureHalf();
    window.addEventListener('resize', measureHalf);
    return () => window.removeEventListener('resize', measureHalf);
  }, [measureHalf]);

  // Main RAF loop
  useEffect(() => {
    const tick = () => {
      if (!isPausedRef.current && !isDraggingRef.current) {
        offsetRef.current += speedRef.current;
      }

      const half = halfWidthRef.current;
      if (half > 0) {
        // Wrap offset to stay within [0, half)
        offsetRef.current = ((offsetRef.current % half) + half) % half;
      }

      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(${-offsetRef.current}px)`;
      }

      animFrameRef.current = requestAnimationFrame(tick);
    };

    animFrameRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animFrameRef.current);
  }, []);

  // ── Pointer / Touch handlers ──────────────────────────────────────────────

  const onDragStart = useCallback((clientX) => {
    isDraggingRef.current = true;
    dragStartXRef.current = clientX;
    dragStartOffsetRef.current = offsetRef.current;
    lastDragXRef.current = clientX;
    dragVelocityRef.current = 0;
  }, []);

  const onDragMove = useCallback((clientX) => {
    if (!isDraggingRef.current) return;
    const delta = dragStartXRef.current - clientX;
    dragVelocityRef.current = clientX - lastDragXRef.current;
    lastDragXRef.current = clientX;
    offsetRef.current = dragStartOffsetRef.current + delta;
  }, []);

  const onDragEnd = useCallback(() => {
    if (!isDraggingRef.current) return;
    isDraggingRef.current = false;
    // Resume auto-scroll in the direction the user was flicking
    // velocity is positive = dragging right = scrolling backward (negative speed)
    if (Math.abs(dragVelocityRef.current) > 1) {
      speedRef.current = dragVelocityRef.current > 0 ? -0.5 : 0.5;
    }
    // Always settle back to a positive forward direction after a moment
    // (optional: remove the setTimeout to keep reversed direction)
    setTimeout(() => { speedRef.current = 0.5; }, 2000);
  }, []);

  // Mouse events
  const onMouseDown = useCallback((e) => {
    e.preventDefault();
    onDragStart(e.clientX);
  }, [onDragStart]);

  const onMouseMove = useCallback((e) => {
    onDragMove(e.clientX);
  }, [onDragMove]);

  const onMouseUp = useCallback(() => {
    onDragEnd();
  }, [onDragEnd]);

  // Touch events
  const onTouchStart = useCallback((e) => {
    onDragStart(e.touches[0].clientX);
  }, [onDragStart]);

  const onTouchMove = useCallback((e) => {
    onDragMove(e.touches[0].clientX);
  }, [onDragMove]);

  const onTouchEnd = useCallback(() => {
    onDragEnd();
  }, [onDragEnd]);

  const onMouseEnter = useCallback(() => {
    if (!isDraggingRef.current) isPausedRef.current = true;
  }, []);

  const onMouseLeave = useCallback(() => {
    isPausedRef.current = false;
    if (isDraggingRef.current) onDragEnd();
  }, [onDragEnd]);

  // Attach global mousemove/mouseup so drag works outside the element
  useEffect(() => {
    const move = (e) => onMouseMove(e);
    const up = () => onMouseUp();
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    return () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
  }, [onMouseMove, onMouseUp]);

  const items = [...visaServices, ...visaServices, ...visaServices, ...visaServices];

  return (
    <div
      className="py-[48px] md:py-[60px] lg:py-[100px] bg-white"
      style={{ overflowX: 'clip' }}
    >
      {/* ── Header ── */}
      <div className="px-[20px] md:px-[60px] lg:px-[100px] xl:px-[calc((100vw-1440px)/2+100px)] mb-[32px] md:mb-[40px] lg:mb-[25px] pr-[20px] md:pr-0">
        <SectionBadge label="Visa Services" className="mb-[24px]" />
        <SplitText
          tag="h2"
          className="font-sans text-[26px] md:text-[36px] lg:text-[40px] font-semibold leading-[1.3] md:leading-[46px] text-black tracking-tight max-w-[636px]"
          text={
            <>
              Expert Visa Solutions for <br className="hidden md:block" />
              Your Global Ambitions
            </>
          }
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

      {/* ── Carousel ── */}
      <div
        ref={wrapperRef}
        className="pl-[20px] md:pl-[60px] lg:pl-[100px] xl:pl-[calc((100vw-1440px)/2+100px)]"
      >
        <div
          className={`services-carousel-viewport${viewportWidth ? ' ready' : ''}`}
          style={{
            ...(viewportWidth ? { width: viewportWidth } : undefined),
            overflow: 'hidden',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0px, black 0px)',
            maskImage: 'linear-gradient(to right, transparent 0px, black 0px)',
            visibility: viewportWidth ? 'visible' : 'hidden',
            cursor: isDraggingRef.current ? 'grabbing' : 'grab',
            userSelect: 'none',
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          onMouseDown={onMouseDown}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            ref={trackRef}
            className="flex w-max py-[20px] md:py-[30px]"
            style={{ willChange: 'transform' }}
          >
            {items.map((service, index) => (
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
                      draggable={false}
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
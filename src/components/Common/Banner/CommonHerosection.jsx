'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import SectionContainer from '@/components/layout/SectionContainer';

/**
 * CommonHeroSection — Reusable inner-page hero with entrance animations
 *
 * On mount:
 *   • Breadcrumb  → fades in from top  (delay 0s)
 *   • Heading     → slides in from top (delay 0.1s)
 *   • Description → fades in from top  (delay 0.2s)
 *   • Image       → slides in from bottom (delay 0.15s)
 *
 * Props
 * ─────
 * highlightedTitle  string  e.g. "About"  ← gradient
 * plainTitle        string  e.g. "Us"     ← dark
 * title             string  full heading  ← full gradient (alt API)
 * description       string
 * imageUrl          string
 * imageAlt          string
 * gradientFrom      string  (default #A2064F)
 * gradientTo        string  (default #000000)
 * gradientDir       string  (default "to right")
 * breadcrumbs       Array<{ label: string, href?: string }>
 */

const ChevronIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-[#999] flex-shrink-0"
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    aria-hidden="true"
  >
    <polyline points="6 3 11 8 6 13" />
  </svg>
);

const CommonHeroSection = ({
  highlightedTitle = '',
  plainTitle       = '',
  title            = '',
  description      = '',
  imageUrl         = '',
  imageAlt         = '',
  gradientFrom     = '#A2064F',
  gradientTo       = '#000000',
  gradientDir      = 'to right',
  breadcrumbs      = [],
}) => {

  const breadcrumbRef = useRef(null);
  const headingRef    = useRef(null);
  const descRef       = useRef(null);
  const imageRef      = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // ── Set initial hidden states ──────────────────────────
      gsap.set([breadcrumbRef.current, headingRef.current, descRef.current], {
        y: -40,
        opacity: 0,
      });
      gsap.set(imageRef.current, {
        y: 60,
        opacity: 0,
      });

      // ── Animate in on mount ───────────────────────────────
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      // Breadcrumb comes first
      tl.to(breadcrumbRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
      }, 0);

      // Heading slightly after
      tl.to(headingRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.7,
      }, 0.1);

      // Description after heading
      tl.to(descRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.6,
      }, 0.2);

      // Image rises from bottom — starts same time as heading
      tl.to(imageRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.85,
        ease: 'power2.out',
      }, 0.15);
    });

    return () => ctx.revert();
  }, []);

  const gradientStyle = {
    background: `linear-gradient(${gradientDir}, ${gradientFrom} 0%, ${gradientTo} 100%)`,
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    display: 'inline',
  };

  const usesSplitTitle = highlightedTitle || plainTitle;

  return (
    <section className="w-full bg-white overflow-hidden">
      <div
        className="flex flex-col px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto pb-6 md:pb-8"
        style={{ height: '100vh', paddingTop: '82px' }}
      >

        {/* ── Breadcrumb ──────────────────────────────────────── */}
        <div ref={breadcrumbRef} className="flex-shrink-0" style={{ opacity: 0 }}>
          {breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="py-3">
              <ol className="flex flex-wrap items-center gap-1.5 text-[13px] md:text-[14px] font-medium">
                {breadcrumbs.map((crumb, idx) => {
                  const isLast = idx === breadcrumbs.length - 1;
                  return (
                    <li key={idx} className="flex items-center gap-1.5">
                      {idx > 0 && <ChevronIcon />}
                      {isLast || !crumb.href ? (
                        <span
                          style={{
                            color: isLast ? '#1a1a1a' : '#888',
                            fontWeight: isLast ? 600 : 400,
                          }}
                          aria-current={isLast ? 'page' : undefined}
                        >
                          {crumb.label}
                        </span>
                      ) : (
                        <Link
                          href={crumb.href}
                          className="transition-colors duration-200"
                          style={{ color: '#888' }}
                          onMouseEnter={e => (e.currentTarget.style.color = gradientFrom)}
                          onMouseLeave={e => (e.currentTarget.style.color = '#888')}
                        >
                          {crumb.label}
                        </Link>
                      )}
                    </li>
                  );
                })}
              </ol>
            </nav>
          )}
        </div>

        {/* ── Heading + Description ───────────────────────────── */}
        <div className="flex-shrink-0 flex flex-col items-center text-center pt-4 pb-5 md:pt-5 md:pb-7 px-2">

          {/* Heading animates from top */}
          <div ref={headingRef} style={{ opacity: 0 }}>
            <h1
              className="font-bold leading-[1.15] tracking-tight m-0 p-0"
              style={{ fontSize: 'clamp(36px, 5.5vw, 64px)' }}
            >
              {usesSplitTitle ? (
                <>
                  {highlightedTitle && (
                    <span style={gradientStyle}>{highlightedTitle}</span>
                  )}
                  {highlightedTitle && plainTitle && (
                    <span style={{ WebkitTextFillColor: 'initial', color: '#1a1a1a' }}>{' '}</span>
                  )}
                  {plainTitle && (
                    <span style={{ color: '#1a1a1a', WebkitTextFillColor: '#1a1a1a' }}>
                      {plainTitle}
                    </span>
                  )}
                </>
              ) : (
                <span style={gradientStyle}>{title}</span>
              )}
            </h1>
          </div>

          {/* Description animates from top */}
          {description && (
            <div ref={descRef} style={{ opacity: 0 }}>
              <p
                className="mt-3 md:mt-4 leading-relaxed max-w-[560px] text-center"
                style={{ fontSize: 'clamp(14px, 1.4vw, 16px)', color: '#555555' }}
              >
                {description}
              </p>
            </div>
          )}
        </div>

        {/* ── Image — rises from bottom ────────────────────────── */}
        {imageUrl && (
          <div className="flex-1 min-h-0 w-full">
            <div
              ref={imageRef}
              className="relative w-full overflow-hidden rounded-[16px] md:rounded-[20px]"
              style={{ height: '100%', opacity: 0 }}
            >
              <Image
                src={imageUrl}
                alt={imageAlt}
                fill
                quality={90}
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
                className="object-cover object-center"
              />
            </div>
          </div>
        )}

      </div>
    </section>
  );
};

export default CommonHeroSection;
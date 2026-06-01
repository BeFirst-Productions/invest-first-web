'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}


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
  plainTitle = '',
  title = '',
  description = '',
  imageUrl = '',
  imageAlt = '',
  gradientFrom = '#A2064F',
  gradientTo = '#000000',
  gradientDir = 'to right',
  breadcrumbs = [],
}) => {


  const sectionRef = useRef(null);  
  const breadcrumbRef = useRef(null);
  const headingRef = useRef(null);
  const descRef = useRef(null);
  const textBlockRef = useRef(null); 
  const imageWrapRef = useRef(null); 
  const imageCardRef = useRef(null);  

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


    const entranceDuration = prefersReduced ? 0 : undefined; 

    const ctx = gsap.context(() => {


      gsap.set(
        [breadcrumbRef.current, headingRef.current, descRef.current],
        { y: -36, opacity: 0, force3D: true }
      );
      gsap.set(imageCardRef.current, {
        y: 56,
        opacity: 0,
        force3D: true,
      });

  
      const entranceTl = gsap.timeline({
        defaults: {
          ease: 'power3.out',
          duration: prefersReduced ? 0 : 0.7,
        },
      });

      entranceTl
        .to(breadcrumbRef.current, { y: 0, opacity: 1 }, 0)
        .to(headingRef.current, { y: 0, opacity: 1, duration: prefersReduced ? 0 : 0.75 }, 0.1)
        .to(descRef.current, { y: 0, opacity: 1 }, 0.22)
        .to(imageCardRef.current, {
          y: 0,
          opacity: 1,
          duration: prefersReduced ? 0 : 0.85,
          ease: 'power2.out',
        }, 0.15);


      if (!prefersReduced) {

     
        gsap.to(textBlockRef.current, {
          y: -70,
          opacity: 0,
          ease: 'power2.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',      
            end: '30% top',            
            scrub: 1.2,
            invalidateOnRefresh: true,
          },
        });


        gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: '70% top',
            scrub: 1.4,
            invalidateOnRefresh: true,
          },
        })
          .to(imageCardRef.current, {
            rotateX: -18,            
            y: '8%',                   
            opacity: 0,
            scale: 0.96,
            ease: 'power2.inOut',
            transformOrigin: 'bottom center',
            force3D: true,
          });
      }

    }, sectionRef);

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
    <section
      ref={sectionRef}
      className="w-full bg-white overflow-hidden"
      aria-label="Page hero"
    >

      <div
        className="flex flex-col px-4 sm:px-6 lg:px-8 max-w-[1400px] mx-auto pb-6 md:pb-8"
        style={{ height: '100vh', paddingTop: '82px' }}
      >

    
        <div ref={textBlockRef} className="flex-shrink-0">

          {/* Breadcrumb */}
          <div className=' pt-0 md:pt-8' ref={breadcrumbRef} style={{ opacity: 0 }}>
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

          {/* Heading + Description */}
          <div className="flex flex-col items-center text-center pt-4 pb-5 md:pt-5 md:pb-7 px-2">

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
        </div>

        {/* ── Image — perspective + tilt wrapper ── */}
        {imageUrl && (
          <div
            ref={imageWrapRef}
            className="flex-1 min-h-0 w-full"
            style={{
              perspective: '1200px',
              perspectiveOrigin: '50% 100%', 
            }}
          >
            <div
              ref={imageCardRef}
              className="relative w-full overflow-hidden rounded-[16px] md:rounded-[20px]"
              style={{
                height: '100%',
                opacity: 0,               // entrance: starts invisible (GSAP sets)
                willChange: 'transform, opacity',
                transformStyle: 'preserve-3d',
                backfaceVisibility: 'hidden',
              }}
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
'use client';

import React, { useLayoutEffect, useRef } from 'react';
import Image from 'next/image';
import SectionContainer from '@/components/layout/SectionContainer';
import ViewMoreButton from '@/components/ui/ViewMoreButton';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const stats = [
  { number: '500+', label: 'Satisfied Customers' },
  { number: '7+', label: 'Years Experience' },
  { number: '50+', label: 'Services' },
];

const headingWords = [
  { text: 'Invest', highlight: false },
  { text: 'First', highlight: false },
  { text: 'provides', highlight: false },
  { text: 'trusted', highlight: false },
  { text: 'business', highlight: false },
  { text: 'setup', highlight: false },
  { text: 'in', highlight: false },
  { text: 'Dubai,', highlight: false },
  { text: 'company', highlight: true },
  { text: 'formation', highlight: true },
  { text: 'in', highlight: true },
  { text: 'UAE,', highlight: true },
  { text: 'visa', highlight: false },
  { text: 'services,', highlight: false },
  { text: 'PRO', highlight: false },
  { text: 'support,', highlight: false },
  { text: 'for', highlight: false },
  { text: 'Startups', highlight: false },
  { text: 'and', highlight: false },
  { text: 'investors.', highlight: false },
];

export default function About() {
  const sectionRef = useRef(null);
  const imageContainersRef = useRef([]);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {

      imageContainersRef.current.forEach((el, i) => {
        if (!el) return;
        
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 75%',
            toggleActions: 'play none none none',
          }
        });

        tl.to(el, {
          borderRadius: '24px',
          duration: 0.4,
          ease: 'power2.out',
          delay: i * 0.1,
        })
        .to(el, {
          width: '100%',
          maxWidth: '380px',
          duration: 1.4,
          ease: 'expo.out',
        }, '<');
      });


      // --- Counter Animation ---
      const statsElements = document.querySelectorAll('.stat-number');
      statsElements.forEach((el) => {
        const targetValue = parseInt(el.getAttribute('data-target'));
        const suffix = el.getAttribute('data-suffix') || '';
        
        gsap.fromTo(el, 
          { innerText: 0 },
          {
            innerText: targetValue,
            duration: 2.5,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
            },
            snap: { innerText: 1 },
            onUpdate: function() {
              el.innerText = Math.floor(el.innerText) + suffix;
            }
          }
        );
      });

      gsap.from('.about-reveal', {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
        }
      });

      // --- Heading Text Wave & Ray Animation ---
      const headingTl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 80%',
          toggleActions: 'play none none none',
        }
      });

      gsap.set('.char-span', {
        color: '#d1d5db',
      });

      headingTl.to('.char-span', {
        color: (index, target) => target.classList.contains('text-[#008ebf]') ? '#008ebf' : '#000000',
        duration: 1.2,
        stagger: 0.04,
        ease: 'power2.inOut',
      });

      headingTl.fromTo('.about-button',
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: 'power2.out',
        },
        '-=0.4'
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <SectionContainer
      id="about"
      className="py-[60px] lg:py-[100px] bg-white overflow-hidden "
      containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
      sectionRef={sectionRef}
      background={
        <div className="absolute top-[20%] left-0 w-full h-[75%] z-0 pointer-events-none">
          <Image
            src="/images/about/about-vector.svg"
            alt=""
            fill
            priority
            className="object-contain object-top-left"
          />
        </div>
      }
    >
      <div className="relative z-10 flex flex-col gap-[40px] lg:gap-[70px]">

        {/* ROW 1: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] items-start gap-[30px] lg:gap-0">
          {/* Row 1 Col 1: Tag Area */}
          <div className="flex justify-start about-reveal">
            <div className="flex items-center justify-center gap-[8px] w-[123px] h-[36px] bg-[#FAFAFA] border border-[#FDFAFA] shadow-[1px_4px_4px_0_rgba(0,0,0,0.25)] rounded-[12px]">
              <span className="w-[8px] h-[8px] bg-[#8e0b4a] rounded-full"></span>
              <span className="text-[14px] md:text-[16px] font-semibold text-[#111111] tracking-tight font-sans">About Us</span>
            </div>
          </div>

          {/* Row 1 Col 2: Heading Area */}
          <div className="flex flex-col items-start pt-0 space-y-[30px] md:space-y-[45px] pl-0 lg:pl-[5%]">
            <h2 className="font-sans text-[22px] lg:text-[25px] xl:text-[40px] font-medium leading-[1.3] text-black tracking-tight max-w-[800px] overflow-visible">
              {headingWords.map((word, wIdx) => (
                <span key={wIdx} className="inline-block whitespace-nowrap mr-[0.25em] overflow-visible">
                  {word.text.split('').map((char, cIdx) => (
                    <span
                      key={cIdx}
                      className={`inline-block char-span ${
                        word.highlight ? 'text-[#008ebf]' : 'text-black'
                      }`}
                      style={{ willChange: 'color, filter, text-shadow' }}
                    >
                      {char}
                    </span>
                  ))}
                </span>
              ))}
            </h2>

            <div className="about-button opacity-0">
              <ViewMoreButton
                label="View About"
                href="/about"
                wrapperClassName="!mt-0 !justify-start pl-[2%] lg:pl-[12%]"
              />
            </div>
          </div>
        </div>

        {/* ROW 2: 2 COLUMNS */}
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_2fr] items-end gap-[40px] lg:gap-0">
     
          <div className="flex flex-col md:flex-row overflow-visible items-center md:items-end gap-[30px] md:gap-[30px] lg:gap-[20px] xl:gap-[35px] about-reveal">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col gap-[3px] md:gap-[6px] ">
                <span 
                  className="stat-number font-sans text-xl md:text-4xl lg:text-[30px] xl:text-5xl font-semibold text-black leading-none tracking-tighter text-center"
                  data-target={stat.number.replace('+', '')}
                  data-suffix={stat.number.includes('+') ? '+' : ''}
                >
                  {stat.number}
                </span>
                <span className="text-[11px] md:text-[12px] lg:text-[8px] xl:text-[12px] font-bold text-[#888888] uppercase tracking-widest font-sans">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>


          {/* Row 2 Col 2: Images Area */}
          <div className="flex justify-center lg:justify-center gap-[12px] md:gap-[24px] items-start lg:pl-[60px]">
            <div 
              ref={(el) => (imageContainersRef.current[0] = el)}
              className="relative w-[38px] md:w-[54px] lg:w-[68px] h-[100px] md:h-[180px] lg:h-[300px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-gray-50 transition-all duration-700 hover:translate-y-[-5px]"
            >
              <Image
                src="/images/about/about-img1.jpg"
                alt="Business meeting"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 300px, 320px"
              />
            </div>
            <div 
              ref={(el) => (imageContainersRef.current[1] = el)}
              className="relative w-[38px] md:w-[54px] lg:w-[68px] h-[100px] md:h-[180px] lg:h-[300px] rounded-full overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] bg-gray-50 transition-all duration-700 hover:translate-y-[-5px]"
            >
              <Image
                src="/images/about/about-img2.jpg"
                alt="Dubai business environment"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 300px, 320px"
              />
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}

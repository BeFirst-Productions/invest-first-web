'use client';

import { quickLinks, socialLinks, trendingServices } from '@/data/footerData';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import SectionContainer from '../SectionContainer';



export default function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    setEmail('');
  };

  return (
    <SectionContainer as="footer" className="pb-[24px] bg-white">
      <div
        className="rounded-[24px] overflow-hidden"
        style={{ background: 'linear-gradient(180deg, #660033 0%, #3a0020 35%, #1a000e 65%, #000000 100%)' }}
      >


        <div className="px-[30px] sm:px-[50px] md:px-[70px] lg:px-[90px] pt-[50px] md:pt-[60px] pb-[30px] md:pb-[40px] flex flex-col lg:flex-row gap-[40px] lg:gap-0">


          <div className="flex flex-col gap-[40px] lg:flex-1 lg:pr-[40px]">


            <div>
              <p className="text-white text-[15px] font-semibold mb-[16px]">
                Subscribe to Our Newsletter!
              </p>
              <form onSubmit={handleSubscribe} className="flex items-stretch max-w-[460px]">
                <input
                  type="email"
                  id="footer-newsletter-email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="flex-1 min-w-0 h-[44px] bg-transparent border-b border-white/35 text-white text-[13px] placeholder:text-white/40 outline-none"
                />
                <button
                  type="submit"
                  className="h-[44px] px-[24px] ml-[12px] bg-white hover:bg-white/90 text-[#3a0020] text-[13px] font-semibold rounded-[8px] flex-shrink-0 transition-all"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-[28px] sm:gap-[40px]">
              <div>
                <p className="text-white/50 text-[11px] font-medium mb-[8px] tracking-wide">Location</p>
                <p className="text-white text-[13px] font-bold leading-[1.6]">
                  313, 3rd Floor, Arzoo Building<br />
                  Nahda street, Al Qusais, Dubai<br />
                  United Arab Emirates, P.O. Box 7274
                </p>
              </div>
              <div>
                <p className="text-white/50 text-[11px] font-medium mb-[8px] tracking-wide">Email Us</p>
                <a href="mailto:info@investfirst.ae" className="text-white text-[13px] font-bold hover:text-white/70 transition-colors">
                  info@investfirst.ae
                </a>
              </div>
              <div>
                <p className="text-white/50 text-[11px] font-medium mb-[8px] tracking-wide">Call Us</p>
                <a href="tel:+971588773753" className="text-white text-[13px] font-bold hover:text-white/70 transition-colors">
                  +971 58 877 3753
                </a>
              </div>
            </div>
          </div>


          <div className="flex gap-[50px] sm:gap-[80px] lg:gap-[60px] flex-shrink-0">

            <div>
              <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[0.12em] mb-[20px]">
                Quick Links
              </p>
              <ul className="flex flex-col gap-[12px]">
                {quickLinks.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-white text-[14px] font-normal hover:text-white/60 transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>


            <div>
              <p className="text-white/50 text-[11px] font-semibold uppercase tracking-[0.12em] mb-[20px]">
                Trending Services
              </p>
              <ul className="flex flex-col gap-[12px]">
                {trendingServices.map((service) => (
                  <li key={service.label}>
                    <Link href={service.href} className="text-white text-[14px] font-semibold hover:text-white/60 transition-colors">
                      {service.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


        <div className="relative px-[30px] sm:px-[50px] md:px-[70px] lg:px-[100px] pt-[30px] md:pt-[5px]">


          <div className="relative z-10 flex flex-col items-start mb-[40px] md:mb-[60px]">

            <div className="relative w-[240px] h-[190px] sm:w-[300px] sm:h-[238px] md:w-[360px] md:h-[285px] lg:w-[411px] lg:h-[326px]">
              <Image
                src="/images/logos/investfirst-logo.png"
                alt="Invest First Business Services"
                fill
                className="object-contain object-left-bottom"
                priority
              />
            </div>
          </div>


          <div className="hidden sm:block absolute sm:right-[50px] md:right-[70px] lg:right-[90px] sm:bottom-[100px] md:bottom-[150px] sm:w-[150px] sm:h-[150px] md:w-[90px] md:h-[90px] lg:w-[187px] lg:h-[187px] pointer-events-none opacity-80 z-0">
            <div className="relative w-full h-full animate-spin-ring">
              <Image
                src="/images/footer/blue-ring-vector.svg"
                alt="Decorative ring"
                fill
                className="object-contain"
              />
            </div>
          </div>

          <div className="w-full h-[1px] bg-white/10 mb-0" />

          <div className="flex flex-col sm:flex-row items-center justify-between py-[20px] gap-[12px]">
            <div className="flex items-center gap-[10px] sm:flex-1 sm:justify-center">
              {socialLinks.map((social) => (
                <a
                  key={social.id}
                  id={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-[36px] h-[36px] rounded-[8px] bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all"
                >
                  <div className="relative w-[18px] h-[18px] md:w-[28px] md:h-[28px]">
                    <Image src={social.src} alt={social.label} fill className="object-contain" />
                  </div>
                </a>
              ))}
            </div>

            {/* Copyright */}
            <p className="text-white/40 text-[12px] sm:absolute sm:right-[30px] md:right-[70px] lg:right-[90px]">
              Copyright &copy; 2026
            </p>
          </div>
        </div>

      </div>
    </SectionContainer>
  );
}

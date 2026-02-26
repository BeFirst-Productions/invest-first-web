"use client";
import React from 'react'
import CompanyFormation from './CompanyFormation'
import ScheduleMeetingSection from './ScheduleMeetingSection'

const FormationandMeeting = () => {
  return (
    <div className="relative">
      {/* Decorative Background Lines SVG */}
      <div className="absolute left-5 top-0 h-full w-[280px] pointer-events-none -z-10 hidden xl:block">
        <svg width="280" height="813" viewBox="0 0 185 813" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-full" preserveAspectRatio="none">
          <path d="M1 615.68H85C90.6667 615.027 101.8 609.997 101 595.101V175.66C101.167 170.597 104.8 160.176 118 159H183V208.5H63C59 209 51 207.3 51 196.5V124.5C50.1667 118.333 52.7 106 69.5 106H141.5C148.333 105.667 162 101.1 162 85.5C162 69.9 162 37.6667 162 23.5C162.833 18.5 161 8.5 147 8.5H2" stroke="url(#paint0_linear_2921_9048)" strokeWidth="1.5" />
          {/* Animated Ray for TOP PATH */}
          <path d="M1 615.68H85C90.6667 615.027 101.8 609.997 101 595.101V175.66C101.167 170.597 104.8 160.176 118 159H183V208.5H63C59 209 51 207.3 51 196.5V124.5C50.1667 118.333 52.7 106 69.5 106H141.5C148.333 105.667 162 101.1 162 85.5C162 69.9 162 37.6667 162 23.5C162.833 18.5 161 8.5 147 8.5H2" stroke="url(#rayGradientAnim)" strokeWidth="2" strokeLinecap="round" className="animate-ray-top" />
          <g filter="url(#filter0_f_2921_9048)">
            <circle cx="8" cy="8" r="5" fill="url(#paint1_linear_2921_9048)" />
          </g>
          <path d="M181 569H30.0057C25.0058 569.332 14.6061 572.69 13.0061 583.459V672.21C12.8395 676.365 16.0061 685.074 30.0057 686.669H112.005C116.505 686.669 125.505 689.362 125.505 700.132V747V793C126.34 799.5 124.809 812.1 112.005 810.5H2" stroke="url(#paint2_linear_2921_9048)" strokeWidth="1.5" />
          {/* Animated Ray for BOTTOM PATH */}
          <path d="M181 569H30.0057C25.0058 569.332 14.6061 572.69 13.0061 583.459V672.21C12.8395 676.365 16.0061 685.074 30.0057 686.669H112.005C116.505 686.669 125.505 689.362 125.505 700.132V747V793C126.34 799.5 124.809 812.1 112.005 810.5H2" stroke="url(#rayGradientAnim)" strokeWidth="2" strokeLinecap="round" className="animate-ray-bottom" />
          <defs>
            <filter id="filter0_f_2921_9048" x="0" y="0" width="16" height="16" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_2921_9048" />
            </filter>
            <linearGradient id="paint0_linear_2921_9048" x1="1" y1="340.976" x2="183" y2="340.976" gradientUnits="userSpaceOnUse">
              <stop stopColor="#780343" />
              <stop offset="1" stopColor="#00335A" />
            </linearGradient>
            <linearGradient id="paint1_linear_2921_9048" x1="3" y1="8.47575" x2="13" y2="8.47575" gradientUnits="userSpaceOnUse">
              <stop stopColor="#780343" />
              <stop offset="1" stopColor="#0091FF" />
            </linearGradient>
            <linearGradient id="paint2_linear_2921_9048" x1="2" y1="701.315" x2="181" y2="701.315" gradientUnits="userSpaceOnUse">
              <stop stopColor="#780343" />
              <stop offset="1" stopColor="#00335A" />
            </linearGradient>
            {/* Ray Gradient for animation */}
            <linearGradient id="rayGradientAnim" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff006e" stopOpacity="0" />
              <stop offset="50%" stopColor="#00a2ff" />
              <stop offset="100%" stopColor="#ff006e" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
        <style jsx>{`
            .animate-ray-top {
                stroke-dasharray: 200 1500;
                stroke-dashoffset: 1700;
                animation: drawTop 8s linear infinite;
            }
            .animate-ray-bottom {
                stroke-dasharray: 100 1000;
                stroke-dashoffset: 1100;
                animation: drawBottom 6s linear infinite;
            }
            @keyframes drawTop {
                0% { stroke-dashoffset: -1700; }
                100% { stroke-dashoffset: 1700; }
            }
            @keyframes drawBottom {
                0% { stroke-dashoffset: -1100; }
                100% { stroke-dashoffset: 1100; }
            }
        `}</style>
      </div>
      <div>
        <CompanyFormation />
        <ScheduleMeetingSection />
      </div>
    </div>
  )
}

export default FormationandMeeting
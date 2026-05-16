'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import BookingModal from '@/components/shared/BookingModal';

const WhatsAppIcon = () => (
  <svg width="24" height="24" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M0.664062 26.1994L2.46006 19.6427C1.35206 17.7241 0.769396 15.5467 0.770062 13.3167C0.773396 6.34006 6.45073 0.664062 13.4281 0.664062C16.8141 0.665396 19.9914 1.9834 22.3814 4.37473C24.7707 6.76673 26.0867 9.94539 26.0854 13.3267C26.0827 20.3034 20.4041 25.9801 13.4281 25.9801H13.4227C11.3047 25.9794 9.22273 25.4481 7.37406 24.4394L0.664062 26.1994Z" fill="#25D366" />
    <path d="M13.4281 2.80078C16.8141 2.80145 19.9914 4.11946 22.3814 6.51079C24.7707 8.90279 26.0867 12.0815 26.0854 15.4628C26.0827 22.4395 20.4041 28.1162 13.4281 28.1162H13.4227C11.3047 28.1155 9.22273 27.5842 7.37406 26.5755L0.664062 28.3355L2.46006 21.7788C1.35206 19.8602 0.769396 17.6828 0.770062 15.4528C0.773396 8.47611 6.45073 2.80011 13.4281 2.80011L13.4281 2.80078Z" fill="white" fillOpacity="0.2" />
    <path d="M20.8689 8.02084C18.8822 6.03284 16.2416 4.93751 13.4309 4.93684C7.62825 4.93684 2.90892 9.65417 2.90625 15.4528C2.90558 17.4402 3.46158 19.3748 4.51492 21.0502L4.76558 21.4482L3.70225 25.3288L7.68425 24.2848L8.06892 24.5128C9.68358 25.4715 11.5356 25.9782 13.4236 25.9788H13.4276C19.2262 25.9788 23.9456 21.2608 23.9476 15.4615C23.9482 12.6515 22.8556 10.0088 20.8689 8.02084Z" fill="#25D366" />
    <path d="M10.2687 10.1666C10.032 9.63993 9.78267 9.62927 9.55667 9.61993C9.372 9.61193 9.16133 9.6126 8.95067 9.6126C8.74 9.6126 8.39733 9.69193 8.10733 10.0086C7.81733 10.3253 7 11.0899 7 12.6459C7 14.2019 8.13333 15.7059 8.29133 15.9166C8.44933 16.1273 10.4793 19.4226 13.694 20.6906C16.3653 21.7439 16.9093 21.5346 17.4893 21.4819C18.0693 21.4293 19.3607 20.7173 19.624 19.9786C19.8873 19.2399 19.8873 18.6073 19.8087 18.4753C19.7293 18.3433 19.5187 18.2646 19.2027 18.1059C18.8867 17.9473 17.3313 17.1826 17.0413 17.0773C16.7513 16.9719 16.5407 16.9193 16.3293 17.2359C16.1187 17.5519 15.5127 18.2646 15.328 18.4753C15.1433 18.6866 14.9587 18.7133 14.6427 18.5546C14.3267 18.3959 13.308 18.0626 12.0993 16.9853C11.1593 16.1473 10.5247 15.1119 10.34 14.7953C10.1553 14.4793 10.32 14.3079 10.4787 14.1499C10.6207 14.0079 10.7947 13.7806 10.9533 13.5959C11.1113 13.4113 11.164 13.2793 11.2693 13.0686C11.3747 12.8573 11.322 12.6726 11.2427 12.5146C11.1647 12.3559 10.55 10.7919 10.2687 10.1666Z" fill="white" />
  </svg>
);

const PhoneIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l2.27-2.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const scheduleData = [
  { day: '31', label: 'Mon', date: '2026-05-31' },
  { day: '1', label: 'Tue', date: '2026-06-01' },
  { day: '2', label: 'We', date: '2026-06-02' },
  { day: '3', label: 'Thu', date: '2026-06-03' },
  { day: '4', label: 'Fri', date: '2026-06-04' },
];

export default function Schedule() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState(scheduleData[1].date);

  return (
    <section className="py-[60px] lg:py-[100px] px-[16px] sm:px-[24px] md:px-[60px] lg:px-[80px] xl:px-[100px] bg-white overflow-hidden">
      <div className="flex flex-col xl:flex-row items-stretch justify-center gap-[30px] max-w-[1440px] mx-auto">

        {/* Left Card: Schedule a Call */}
        <div
          className="relative bg-[#660033] rounded-[24px] overflow-hidden w-full xl:w-[590px] min-h-[448px] xl:h-[448px] flex flex-col shadow-xl mx-auto xl:mx-0 max-w-[700px] xl:max-w-none"
        >
          {/* Subtle Star Background */}
          <div className="absolute right-[-10%] top-[30%] w-[200px] h-[200px] pointer-events-none z-0">
            <Image
              src="/images/schedule/star-vector.svg"
              alt="Decorative Star"
              fill
              className="object-contain opacity-40"
            />
          </div>

          <div className="px-[24px] md:px-[40px] pt-[30px] md:pt-[45px] relative z-10">
            <h2 className="font-sans text-[32px] md:text-[40px] font-bold text-white mb-[16px] tracking-tight">
              Schedule a Call
            </h2>
            <p className="text-white/80 text-[14px] md:text-[15px] leading-[1.6] max-w-[440px]">
              Invest First's expert consultants are available for personalized guidance. Whether you're starting a new venture or expanding an existing one, we're here to help you navigate the UAE business landscape.
            </p>
          </div>

          {/* Bottom Area */}
          <div className="mt-auto relative flex items-end justify-between px-[20px] md:px-[30px] pb-[25px] md:pb-[35px]">
            {/* Person Image - Flush Bottom Left but with container padding */}
            <div className="w-[130px] h-[160px] md:w-[155px] md:h-[170px] rounded-[20px] overflow-hidden shadow-2xl relative group">
              <Image
                src="/images/schedule/person.jpg"
                alt="Meet Consultants"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-x-0 bottom-0 bg-[#081131]/95 py-[10px] px-[12px] flex items-center justify-between">
                <span className="text-white text-[9px] font-semibold uppercase tracking-widest">Consultant</span>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </div>
            </div>

            {/* Action Buttons - Side by Side */}
            <div className="flex flex-col sm:flex-row gap-[10px] md:gap-[12px] items-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-[8px] bg-[#D9F1F7] hover:bg-white transition-all py-[10px] md:py-[12px] px-[18px] md:px-[22px] rounded-full shadow-lg"
              >
                <WhatsAppIcon />
                <span className="text-[#081131] font-bold text-[13px] md:text-[14px]">Chat Now</span>
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="flex items-center gap-[8px] bg-[#A10B43] hover:bg-[#8B1D41] transition-all py-[10px] md:py-[12px] px-[18px] md:px-[22px] rounded-full shadow-lg"
              >
                <PhoneIcon />
                <span className="text-white font-bold text-[13px] md:text-[14px]">Call Now</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Card: Schedule Meeting */}
        <div
          className="relative bg-[#0B223E] rounded-[24px] overflow-hidden w-full xl:w-[590px] min-h-[448px] xl:h-[448px] flex flex-col shadow-xl mx-auto xl:mx-0 max-w-[700px] xl:max-w-none"
        >
          {/* Subtle Spring Background */}
          <div className="absolute left-[20px] bottom-[0px] w-[140px] md:w-[94px] h-[116px] md:h-[188px] pointer-events-none z-0">
            <Image
              src="/images/schedule/spring-vector.svg"
              alt="Decorative Spring"
              fill
              className="object-contain object-bottom-left brightness-50"
            />
          </div>

          <div className="relative z-10 px-[24px] md:px-[45px] pt-[35px] md:pt-[45px] pb-[20px] md:pb-[45px] flex flex-col md:flex-row justify-between h-full gap-[25px]">
            {/* Left Content Column */}
            <div className="flex flex-col flex-1">
              <h2 className="font-sans text-[32px] md:text-[40px] font-bold text-white mb-[12px] tracking-tight">
                Schedule Meeting
              </h2>
              <p className="text-white/75 text-[14px] md:text-[15px] leading-[1.65] max-w-[420px]">
                Porem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per  accumsan
              </p>
            </div>

            {/* Right Date Column */}
            <div className="flex flex-row md:flex-col gap-[10px] md:gap-[12px] overflow-x-auto md:overflow-visible pb-2 md:pb-0 scrollbar-hide flex-shrink-0 items-center">
              {scheduleData.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => setSelectedDate(item.date)}
                  className={`min-w-[52px] md:w-[58px] h-[60px] md:h-[66px] rounded-[14px] flex flex-col items-center justify-center transition-all cursor-pointer ${selectedDate === item.date
                    ? 'bg-[#D9F1F7] shadow-lg scale-105'
                    : 'bg-white hover:bg-[#F0F0F0]'
                    }`}
                >
                  <span className={`text-[16px] md:text-[18px] font-bold leading-none ${selectedDate === item.date ? 'text-[#081131]' : 'text-[#111D51]'}`}>
                    {item.day}
                  </span>
                  <span className={`text-[9px] md:text-[10px] font-semibold uppercase tracking-wider mt-[3px] ${selectedDate === item.date ? 'text-[#081131]' : 'text-[#888888]'}`}>
                    {item.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Action Button for Mobile/Tablet - Inside the flex flow */}
            <div className="flex md:hidden justify-center pb-[20px]">
              <button
                onClick={() => setIsModalOpen(true)}
                className="group flex items-center justify-center gap-[12px] bg-[#050B24] hover:bg-[#0d1740] border border-white/5 transition-all h-[52px] px-[30px] rounded-full shadow-2xl w-full"
              >
                <span className="text-white font-bold text-[15px]">Schedule Meeting</span>
                <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="transition-transform group-hover:translate-x-1">
                  <path d="M0.740234 11.6729L5.74023 6.17285L0.740234 0.672851" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </div>
          </div>

          {/* Action Button for Desktop - Absolute Positioned */}
          <div className="hidden md:block absolute bottom-[40px] left-[190px] z-20">
            <button
              onClick={() => setIsModalOpen(true)}
              className="group flex items-center justify-center gap-[12px] bg-[#050B24] hover:bg-[#0d1740] border border-white/5 transition-all h-[56px] px-[36px] rounded-full shadow-2xl"
            >
              <span className="text-white font-bold text-[16px]">Schedule Meeting</span>
              <svg width="8" height="13" viewBox="0 0 8 13" fill="none" className="transition-transform group-hover:translate-x-1">
                <path d="M0.740234 11.6729L5.74023 6.17285L0.740234 0.672851" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

      </div>

      <BookingModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        initialDate={selectedDate}
      />
    </section>
  );
}

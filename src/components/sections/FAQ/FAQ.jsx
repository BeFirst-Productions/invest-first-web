'use client';

import React, { useState } from 'react';
import SectionBadge from '@/components/ui/SectionBadge';
import { faqs } from '@/data/faqData';



const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="bg-[#F5F5F5] rounded-[16px] p-[20px] md:p-[24px] w-full transition-colors duration-300">
      <div
        className="flex justify-between items-center cursor-pointer gap-[16px]"
        onClick={onClick}
      >
        <h3 className="text-[15px] md:text-[16px] text-[#111111] font-medium leading-[1.4] flex-1">
          {question}
        </h3>
        <div className="flex-shrink-0 w-[24px] h-[24px] rounded-full bg-[#660033] flex items-center justify-center transition-transform duration-300">
          {isOpen ? (
            <svg width="10" height="2" viewBox="0 0 10 2" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 1V9M1 5H9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </div>
      </div>

      <div
        className={`transition-all duration-300 ease-in-out overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100 mt-[16px]' : 'max-h-0 opacity-0 mt-0'
          }`}
      >
        <p className="text-[14px] md:text-[15px] text-[#666666] leading-[1.6]">
          {answer}
        </p>
      </div>
    </div>
  );
};

export default function FAQ() {
  const [openIndexes, setOpenIndexes] = useState([3]);

  const toggleFAQ = (index) => {
    // Standard accordion: only one item open at a time
    if (openIndexes.includes(index)) {
      setOpenIndexes([]);
    } else {
      setOpenIndexes([index]);
    }
  };

  const midpoint = Math.ceil(faqs.length / 2);
  const leftColFaqs = faqs.slice(0, midpoint);
  const rightColFaqs = faqs.slice(midpoint);

  return (
    <section className="py-[60px] lg:py-[100px] bg-white flex flex-col items-center px-[20px] md:px-[60px] lg:px-[100px]">
      <div className="flex flex-col items-center mb-[40px] md:mb-[60px] w-full">
        <SectionBadge label="FAQs" className="mb-[24px]" />

        {/* Title */}
        <h2 className="font-sans text-[32px] md:text-[36px] lg:text-[40px] font-bold leading-[46px] text-center text-black tracking-tight max-w-[636px]">
          Your Questions, Answered
        </h2>
      </div>

      {/* FAQ Grid */}
      <div className="w-full max-w-[1000px] flex flex-col md:flex-row gap-[16px] md:gap-[24px] items-start">
        {/* Left Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-[16px] md:gap-[20px]">
          {leftColFaqs.map((faq, index) => (
            <FAQItem
              key={index}
              {...faq}
              isOpen={openIndexes.includes(index)}
              onClick={() => toggleFAQ(index)}
            />
          ))}
        </div>

        {/* Right Column */}
        <div className="w-full md:w-1/2 flex flex-col gap-[16px] md:gap-[20px]">
          {rightColFaqs.map((faq, index) => {
            const actualIndex = index + midpoint;
            return (
              <FAQItem
                key={actualIndex}
                {...faq}
                isOpen={openIndexes.includes(actualIndex)}
                onClick={() => toggleFAQ(actualIndex)}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
}

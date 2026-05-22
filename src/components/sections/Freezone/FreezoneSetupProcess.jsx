'use client';

import { freezoneData } from '@/data/FreezoneData';
import SectionContainer from '@/components/layout/SectionContainer';

const FreezoneSetupProcess = () => {
  const { titleHighlight, titleRest, description, steps } = freezoneData.setupProcess;

  return (
    <section className="relative overflow-hidden">
      <SectionContainer
        id="freezone-setup"
        className="py-[48px] md:py-[80px] lg:py-[80px] bg-white"
        containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
      >
        {/* ── Section Header ─────────────────────────────────── */}
        <div className="flex flex-col items-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-black mb-5 text-center leading-tight">
            <span className="text-[#0099CC]">{titleHighlight}</span>{' '}
            {titleRest}
          </h2>
          <p className="text-center max-w-3xl text-sm md:text-base leading-relaxed text-gray-600">
            {description}
          </p>
        </div>

        {/* ── 2 × 2 Card Grid ────────────────────────────────── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 md:gap-6 lg:gap-8">
          {steps.slice(0, 4).map((step, idx) => (
            <StepCard key={step.id} step={step} idx={idx} />
          ))}
        </div>
      </SectionContainer>
    </section>
  );
};

/* ── Single step card ────────────────────────────────────────── */
function StepCard({ step, idx }) {
  return (
    <div
      className="
        group
        relative flex flex-col
        border border-[#0099CC]/40
        rounded-[24px]
        p-7 md:p-8 lg:p-10
        bg-[#000F2B]
        overflow-hidden
        transition-all duration-500
        hover:-translate-y-1
        hover:border-[#0099CC]
        hover:shadow-[0_8px_40px_rgba(0,153,204,0.18)]
        cursor-default
      "
    >
      {/* Glow blob — top-right, fades in on hover */}
      <div
        className="
          pointer-events-none absolute -top-10 -right-10
          w-40 h-40 rounded-full
          bg-[#0099CC]/10
          blur-2xl
          opacity-0 group-hover:opacity-100
          transition-opacity duration-700
        "
      />

      {/* Step number badge */}
      <div className="mb-5 flex items-center gap-3">
        <span
          className="
            inline-flex items-center justify-center
            w-9 h-9 rounded-full
            text-xs font-bold text-white
            bg-[#0099CC]/20 border border-[#0099CC]/60
            group-hover:bg-[#0099CC]/40
            transition-colors duration-400
            shrink-0
          "
        >
          {String(idx + 1).padStart(2, '0')}
        </span>

        {/* Step title */}
        <h3
          className="
            text-[#0099CC] text-base md:text-lg lg:text-xl
            font-semibold tracking-tight leading-snug
            group-hover:text-[#33b8e0]
            transition-colors duration-300
          "
        >
          {step.title}
        </h3>
      </div>

      {/* Description */}
      <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6">
        {step.description}
      </p>

      {/* Sub-items */}
      {step.subItems?.length > 0 && (
        <>
          {/* Thin divider */}
          <div className="w-full h-px bg-white/10 mb-5" />

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-5 mt-auto">
            {step.subItems.map((item, i) => (
              <div key={i} className="flex items-center gap-3 group/item">
                {/* Dot — maroon fill, teal ring, scales on hover */}
                <div
                  className="
                    w-3 h-3 rounded-full shrink-0
                    bg-[#660033] border border-[#0099CC]/70
                    transition-transform duration-300
                    group-hover/item:scale-125
                  "
                />
                <span className="text-gray-200 text-xs md:text-sm font-medium leading-tight">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default FreezoneSetupProcess;
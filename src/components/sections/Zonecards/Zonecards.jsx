'use client';

import SectionContainer from '@/components/layout/SectionContainer';
import ZoneCard from './ZoneCard';
import { ZONES } from '@/data/zonesData';



export default function ZoneCards() {
  return (
    // <section
    //   className="w-full pt-[48px] sm:pt-[60px] lg:pt-[72px]"
    //   aria-label="Business zones"
    // >
    //   <div className="mx-auto px-[16px] sm:px-[32px] lg:px-[60px] xl:px-[80px] max-w-[1280px]">
         <SectionContainer
                      id="about-company"
                      className="py-[48px] md:py-[80px] lg:py-[120px] bg-white"
                      containerClassName="px-[20px] md:px-[60px] lg:px-[100px]"
                    >
        <div className="grid gap-[16px] sm:gap-[20px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {ZONES.map((zone) => (
            <div
              key={zone.id}
              className={zone.id === 'offshore' ? 'sm:col-span-2 lg:col-span-1' : ''}
            >
              <ZoneCard zone={zone} />
            </div>
          ))}
        </div>
    </SectionContainer>
    // </section>
  );
}
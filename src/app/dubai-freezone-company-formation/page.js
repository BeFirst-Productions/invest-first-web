import React from 'react';
import { freezoneData } from '@/data/FreezoneData';
import WhyChoose from '@/components/Common/WhyChoose';
import FAQAccordion from '@/components/Common/FAQAccordion';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { FreezoneCategorySection, FreezoneFeatures, FreezoneLicenseTypes, FreezoneOverview,FreezoneSetupProcess } from '@/components/sections/Freezone';

import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/dubai-freezone-company-formation');
    return seo;
}


const FreezonePage = () => {
    return (
        <main className="">
            <CommonHeroSection
                highlightedTitle="Freezone"
                plainTitle=""
                description="Launch your Free Zone company in the UAE with 100% foreign ownership, tax exemptions, and full capital repatriation under expert guidance."
                imageUrl="/images/freezone/freezone-banner.jpg"
                imageAlt="Our team at Meydan Free Zone"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Freezone', href: '/dubai-freezone-company-formation' },
                ]}
            />
            
            <FreezoneOverview />
            <FreezoneFeatures />
            <FreezoneCategorySection />
            <FreezoneSetupProcess />
            <FreezoneLicenseTypes />
            <WhyChoose data={freezoneData.whyChoose} />
            <FAQAccordion 
                title={freezoneData.faqs.title} 
                faqItems={freezoneData.faqs.faqItems} 
            />
        </main>
    );
};

export default FreezonePage;

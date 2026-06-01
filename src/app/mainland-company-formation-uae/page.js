import React from 'react';
import { mainlandDetailedData } from '@/data/mainlandData';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { MainlandFeatures, MainlandOverview } from '@/components/sections/Mainland';
import WhyChooseSection from '@/components/Common/WhyChoose';
import FAQAccordion from '@/components/Common/FAQAccordion';
import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/mainland-company-formation-uae');
    return seo;
}


const MainlandPage = () => {
    const service = mainlandDetailedData['main-land'];
    return (
        <main className="">
                 <CommonHeroSection
                highlightedTitle="Mainland"
                plainTitle=""
                description="Start your Mainland Business Setup in UAE with expert support, fast approvals, licensing, and complete company formation solutions for growth. "
                imageUrl="/images/mainland/mainland-hero-banner.jpg"
                imageAlt="Our team at Mainland"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Mainland' },
                ]}
            />
            <MainlandOverview />
            <MainlandFeatures data={service} />
            <WhyChooseSection data={service.whyChoose} />
            <FAQAccordion 
                title={service.faqs.title}
                faqItems={service.faqs.faqItems}
            />
         
        </main>
    );
};

export default MainlandPage;

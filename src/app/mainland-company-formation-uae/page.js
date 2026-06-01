import React from 'react';
import { mainlandDetailedData } from '@/data/mainlandData';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { MainlandFeatures, MainlandOverview } from '@/components/sections/Mainland';
import WhyChooseSection from '@/components/Common/WhyChoose';
import FAQAccordion from '@/components/Common/FAQAccordion';
import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/mainland');
    return seo;
}


const MainlandPage = () => {
    const service = mainlandDetailedData['main-land'];
    return (
        <main className="">
                 <CommonHeroSection
                highlightedTitle="Mainland"
                plainTitle=""
                description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim"
                imageUrl="/images/mainland/mainland-hero-banner.jpg"
                imageAlt="Our team at Meydan Free Zone"
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

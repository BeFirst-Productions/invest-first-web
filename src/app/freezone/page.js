import React from 'react';
import { freezoneData } from '@/data/FreezoneData';
import WhyChoose from '@/Components/Common/WhyChoose';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { FreezoneCategorySection, FreezoneFeatures, FreezoneLicenseTypes, FreezoneOverview,FreezoneSetupProcess } from '@/components/sections/Freezone';

export const metadata = {
    title: "Freezone Company Formation UAE | Invest First",
    description: "Start your company in a UAE Freezone with Invest First. Explore options across Dubai, Abu Dhabi, Sharjah, and more for 100% ownership and tax benefits.",
};

const FreezonePage = () => {
    // The data is imported but we'll use specific parts as needed
    
    return (
        <main className="">
               <CommonHeroSection
                       highlightedTitle="Freezone"
                       plainTitle=""
                       description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim"
                       imageUrl="/images/about/about-banner.jpg"
                       imageAlt="Our team at Meydan Free Zone"
                       breadcrumbs={[
                           { label: 'Home', href: '/' },
                           { label: 'Freezone' },
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

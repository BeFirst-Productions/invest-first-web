import React from 'react';
import { freezoneData } from '@/data/FreezoneData';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import WhyChoose from '@/Components/Common/WhyChoose';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import FreezoneOverview from '@/Components/Freezone/FreezoneOverview';
import FreezoneFeatures from '@/Components/Freezone/FreezoneFeatures';
import FreezoneCategorySection from '@/Components/Freezone/FreezoneCategorySection';
import FreezoneSetupProcess from '@/Components/Freezone/FreezoneSetupProcess';
import FreezoneLicenseTypes from '@/Components/Freezone/FreezoneLicenseTypes';

export const metadata = {
    title: "Freezone Company Formation UAE | Invest First",
    description: "Start your company in a UAE Freezone with Invest First. Explore options across Dubai, Abu Dhabi, Sharjah, and more for 100% ownership and tax benefits.",
};

const FreezonePage = () => {
    // The data is imported but we'll use specific parts as needed
    
    return (
        <main className="">
            <CommonHerosection
                title="Freezone Company Formation"
                description="Expert assistance in setting up your business in UAE's premier free zones, offering 100% ownership and tax-efficient structures."
                cardTitle="Freezone Setup Support"
                cardDescription="We help you navigate the diverse free zone options to find the perfect fit for your business goals."
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

import React from 'react';
import { offshoreData } from '@/data/OffshoreData';
import { OffshoreBenefits, OffshoreFeatures, OffshoreOverview } from '@/components/sections/Offshore';
import WhyChooseSection from '@/components/Common/WhyChoose';
import FAQAccordion from '@/components/Common/FAQAccordion';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';


import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/offshore');
    return seo;
}


const OffshorePage = () => {
    return (
        <main className="">
 

               <CommonHeroSection
                    highlightedTitle="Offshore Company Formation"
                    plainTitle=" "
                    description="Get expert Offshore Setup in Dubai services for international business expansion.protection, tax benefits, company formation."
                    imageUrl="/images/offshore/offshore-hero-banner.jpg"
                    imageAlt="Our team at offshore"
                    breadcrumbs={[
                      { label: "Home", href: "/" },
                      { label: "Offshore" }
                    ]}
                  />
          
            <OffshoreOverview />
            <OffshoreFeatures />
            <OffshoreBenefits />

            <WhyChooseSection data={offshoreData.whyChoose} />
            
            <FAQAccordion
                title={offshoreData.faqs.title} 
                faqItems={offshoreData.faqs.faqItems} 
            />
        </main>
    );
};

export default OffshorePage;

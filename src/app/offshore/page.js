import React from 'react';
import { offshoreData } from '@/data/OffshoreData';
import { OffshoreBenefits, OffshoreFeatures, OffshoreOverview } from '@/components/sections/Offshore';
import WhyChooseSection from '@/components/Common/WhyChoose';
import FAQAccordion from '@/components/Common/FAQAccordion';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';


export const metadata = {
    title: "Offshore Company Formation UAE | Invest First",
    description: "Incorporate your offshore company in the UAE with Invest First. Expert setup services for JAFZA, RAKICC, and Ajman for asset protection and tax efficiency.",
};

const OffshorePage = () => {
    return (
        <main className="">
            {/* <CommonHerosection
                title="Offshore Company Formation"
                description="Expert assistance in setting up your international business presence through UAE's premium offshore jurisdictions, providing maximum privacy and asset protection."
                cardTitle="Offshore Setup Support"
                cardDescription="We handle the complete formation process for international business entities in the most respected UAE jurisdictions."
            /> */}

               <CommonHeroSection
                    highlightedTitle="Offshore Company Formation"
                    plainTitle=" "
                    description="Expert assistance in setting up your international business presence through UAE's premium offshore jurisdictions, providing maximum privacy and asset protection."
                    imageUrl="/images/about/about-banner.jpg"
                    imageAlt="Our team at Meydan Free Zone"
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

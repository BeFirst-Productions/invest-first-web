import React from 'react';
import { offshoreData } from '@/data/OffshoreData';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import WhyChoose from '@/Components/Common/WhyChoose';
import FAQAccordion from '@/Components/Common/FAQAccordion';

import OffshoreOverview from '@/Components/Offshore/OffshoreOverview';
import OffshoreFeatures from '@/Components/Offshore/OffshoreFeatures';
import OffshoreBenefits from '@/Components/Offshore/OffshoreBenefits';

export const metadata = {
    title: "Offshore Company Formation UAE | Invest First",
    description: "Incorporate your offshore company in the UAE with Invest First. Expert setup services for JAFZA, RAKICC, and Ajman for asset protection and tax efficiency.",
};

const OffshorePage = () => {
    return (
        <main className="">
            <CommonHerosection
                title="Offshore Company Formation"
                description="Expert assistance in setting up your international business presence through UAE's premium offshore jurisdictions, providing maximum privacy and asset protection."
                cardTitle="Offshore Setup Support"
                cardDescription="We handle the complete formation process for international business entities in the most respected UAE jurisdictions."
            />
          
            <OffshoreOverview />
            <OffshoreFeatures />
            <OffshoreBenefits />

            <WhyChoose data={offshoreData.whyChoose} />
            
            <FAQAccordion 
                title={offshoreData.faqs.title} 
                faqItems={offshoreData.faqs.faqItems} 
            />
        </main>
    );
};

export default OffshorePage;

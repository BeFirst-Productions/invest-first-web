import React from 'react';
import { mainlandDetailedData } from '@/data/MainlandData';
import LicenseIntro from '@/Components/LicenseServices/LicenseIntro';
import LicenseDocuments from '@/Components/LicenseServices/LicenseDocuments';
import LicenseBenefits from '@/Components/LicenseServices/LicenseBenefits';
import LicenseWhyChoose from '@/Components/LicenseServices/LicenseWhyChoose';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import MainlandOverview from '@/Components/Mainland/MainlandOverview';
import MainlandFeatures from '@/Components/Mainland/MainlandFeatures';
import WhyChoose from '@/Components/Common/WhyChoose';

export const metadata = {
    title: "Mainland Company Formation Dubai | Invest First",
    description: "Start your mainland company in Dubai with Invest First. We offer complete business setup services, including 100% ownership and PRO support.",
};

const MainlandPage = () => {
    const service = mainlandDetailedData['main-land'];

    return (
        <main className="">
            <CommonHerosection
                title={service.bannerTitle}
                description="Expert assistance in setting up your mainland company in Dubai and across the UAE."
                cardTitle="Mainland Setup Support"
                cardDescription="We handle the complete formation process from trade name reservation to license issuance."
            />
            <MainlandOverview />
            <MainlandFeatures data={service} />
            <WhyChoose data={service.whyChoose} />
            <FAQAccordion 
                title={service.faqs.title}
                faqItems={service.faqs.faqItems}
            />
         
        </main>
    );
};

export default MainlandPage;

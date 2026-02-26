import React from 'react';
import ProServicesIntro from '@/Components/ProServices/ProServicesIntro';
import CompanyFormationTypes from '@/Components/ProServices/CompanyFormationTypes';
import WhyChooseDubai from '@/Components/ProServices/WhyChooseDubai';
import FreezonePartnerStatus from '@/Components/ProServices/FreezonePartnerStatus';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import { proServicesData } from '@/data/ProServicesData';

export const metadata = {
    title: proServicesData.seo.title,
    description: proServicesData.seo.description,
    keywords: proServicesData.seo.keywords,
    alternates: {
        canonical: proServicesData.seo.canonical,
    },
    openGraph: {
        title: proServicesData.seo.title,
        description: proServicesData.seo.description,
        images: [
            {
                url: proServicesData.seo.image,
                width: 1200,
                height: 630,
                alt: proServicesData.seo.title,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: proServicesData.seo.title,
        description: proServicesData.seo.description,
        images: [proServicesData.seo.image],
    },
};

const ProServicesPage = () => {
    return (
        <main>
            <CommonHerosection
                title={proServicesData.bannerTitle}
                description={proServicesData.bannerDescription}
                cardTitle={proServicesData.cardTitle}
                cardDescription={proServicesData.cardDescription}
            />
            <ProServicesIntro data={proServicesData.intro} />
            <CompanyFormationTypes data={proServicesData.companyFormationTypes} />
            <WhyChooseDubai data={proServicesData.whyChoose} />
            <FreezonePartnerStatus />
            <FAQAccordion
                title={proServicesData.faq.headingRest}
                faqItems={proServicesData.faq.items}
            />
        </main>
    );
};

export default ProServicesPage;

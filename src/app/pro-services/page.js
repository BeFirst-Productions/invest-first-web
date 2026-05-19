import React from 'react';
import ProServicesIntro from '@/components/ProServices/ProServicesIntro';
import CompanyFormationTypes from '@/components/ProServices/CompanyFormationTypes';
import WhyChooseDubai from '@/components/ProServices/WhyChooseDubai';
import AuthorizedPartnerStatus from '@/components/ProServices/AuthorizedPartnerStatus';
import InnerHero from '@/components/Common/InnerHero';
import FAQAccordion from '@/components/Common/FAQAccordion';
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
            <InnerHero
                title={proServicesData.bannerTitle}
                subtitle={proServicesData.bannerDescription}
            />
            <ProServicesIntro data={proServicesData.intro} />
            <CompanyFormationTypes data={proServicesData.companyFormationTypes} />
            <WhyChooseDubai data={proServicesData.whyChoose} />
            <AuthorizedPartnerStatus data={proServicesData.authorizedPartnerStatus} />
            <FAQAccordion
                title={proServicesData.faq.headingRest}
                faqItems={proServicesData.faq.items}
            />
        </main>
    );
};

export default ProServicesPage;

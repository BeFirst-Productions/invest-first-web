import React from 'react';
import ProServicesIntro from '@/components/ProServices/ProServicesIntro';
import CompanyFormationTypes from '@/components/ProServices/CompanyFormationTypes';
import WhyChooseDubai from '@/components/ProServices/WhyChooseDubai';
import AuthorizedPartnerStatus from '@/components/ProServices/AuthorizedPartnerStatus';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import FAQAccordion from '@/components/Common/FAQAccordion';
import { proServicesData } from '@/data/ProServicesData';

import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/services/pro-services');
    return seo;
}


const ProServicesPage = () => {
    return (
        <main>
            <CommonHeroSection
                highlightedTitle="PRO"
                plainTitle="Services"
                description={proServicesData.bannerDescription}
                imageUrl="/images/services/service-banner.png"
                imageAlt="PRO Services"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'PRO Services', href: '/services/pro-services' }
                ]}
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

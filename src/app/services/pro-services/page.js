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
            {proServicesData.intro && <ProServicesIntro data={proServicesData.intro} />}
            {proServicesData.companyFormationTypes && <CompanyFormationTypes data={proServicesData.companyFormationTypes} />}
            {proServicesData.whyChoose && <WhyChooseDubai data={proServicesData.whyChoose} />}
            {proServicesData.authorizedPartnerStatus && <AuthorizedPartnerStatus data={proServicesData.authorizedPartnerStatus} />}
            {proServicesData.faq && (
                <FAQAccordion
                    title={proServicesData.faq.headingRest}
                    faqItems={proServicesData.faq.items}
                />
            )}
        </main>
    );
};

export default ProServicesPage;

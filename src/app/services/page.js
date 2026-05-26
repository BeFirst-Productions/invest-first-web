
import React from 'react';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import ProServicesSection from '@/components/ServicesPage/ProServicesSection';
import LicenseCategorySection from '@/components/ServicesPage/LicenseCategorySection';
import DocumentServices from '@/components/ServicesPage/DocumentServices';
import ValueAddedServices from '@/components/ServicesPage/ValueAddedServices';
import VisaServices from '@/components/ServicesPage/VisaServices';

import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/services');
    return seo;
}


const ServicesPage = () => {
    return (
        <main>
            <CommonHeroSection
                highlightedTitle="Our"
                plainTitle="Services"
                description="We provide complete business setup services in Dubai, including company formation, trade licenses, PRO services,visa support for smooth business growth in the UAE     "
                imageUrl="/images/services/service-banner.png"
                imageAlt="Comprehensive business setup services"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' }
                ]}
            />
            <ProServicesSection />
            <LicenseCategorySection />
            <VisaServices />
            <DocumentServices />
            <ValueAddedServices />
        </main>
    );
};

export default ServicesPage;

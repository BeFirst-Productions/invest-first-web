
import React from 'react';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import ProServicesSection from '@/components/ServicesPage/ProServicesSection';
import LicenseCategorySection from '@/components/ServicesPage/LicenseCategorySection';
import DocumentServices from '@/components/ServicesPage/DocumentServices';
import ValueAddedServices from '@/components/ServicesPage/ValueAddedServices';
import VisaServices from '@/components/ServicesPage/VisaServices';

export const metadata = {
    title: "Services | Invest First",
    description: "Explore our comprehensive business setup and visa services in the UAE.",
};

const ServicesPage = () => {
    return (
        <main>
            <CommonHeroSection
                highlightedTitle="Our"
                plainTitle="Services"
                description="From licensing to visa processing, we provide end-to-end solutions for your business setup in the UAE."
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

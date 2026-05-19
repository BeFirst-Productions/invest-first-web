
import React from 'react';
import InnerHero from '@/components/Common/InnerHero';
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
            <InnerHero
                title="Our Comprehensive Services"
                subtitle="From licensing to visa processing, we provide end-to-end solutions for your business setup in the UAE."
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

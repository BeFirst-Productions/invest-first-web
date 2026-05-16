
import React from 'react';
import ProServicesSection from '@/components/ServicesPage/ProServicesSection';
import DocumentServices from '@/components/ServicesPage/DocumentServices';
import ValueAddedServices from '@/components/ServicesPage/ValueAddedServices';
import VisaServices from '@/components/ServicesPage/VisaServices';
import InnerHero from '@/components/Common/InnerHero';
import LicenseCategory from '@/components/sections/LicenseCategory';

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
      <LicenseCategory />

            <VisaServices />
            <DocumentServices />
            <ValueAddedServices />
        </main>
    );
};

export default ServicesPage;

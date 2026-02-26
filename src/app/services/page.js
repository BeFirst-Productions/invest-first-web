
import React from 'react';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import ProServicesSection from '@/Components/ServicesPage/ProServicesSection';
import LicenseCategorySection from '@/Components/ServicesPage/LicenseCategorySection';
import DocumentServices from '@/Components/ServicesPage/DocumentServices';
import ValueAddedServices from '@/Components/ServicesPage/ValueAddedServices';
import VisaServices from '@/Components/ServicesPage/VisaServices';

export const metadata = {
    title: "Services | Invest First",
    description: "Explore our comprehensive business setup and visa services in the UAE.",
};

const ServicesPage = () => {
    return (
        <main>
            <CommonHerosection
                title="Our Comprehensive Services"
                description="From licensing to visa processing, we provide end-to-end solutions for your business setup in the UAE."
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

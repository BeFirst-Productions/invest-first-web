import { notFound } from 'next/navigation';
import React from 'react';
import { licenseDetailedData } from '@/data/LicenseData';
import LicenseIntro from '@/Components/LicenseServices/LicenseIntro';
import LicenseDocuments from '@/Components/LicenseServices/LicenseDocuments';
import LicenseTypes from '@/Components/LicenseServices/LicenseTypes';
import LicenseBenefits from '@/Components/LicenseServices/LicenseBenefits';
import LicenseWhyChoose from '@/Components/LicenseServices/LicenseWhyChoose';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';

// List of valid slugs for license services
const VALID_SLUGS = Object.keys(licenseDetailedData);

export async function generateStaticParams() {
    return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = licenseDetailedData[slug];

    if (!service) {
        return {
            title: 'License Services | Invest First',
            description: 'Professional business licensing services in Dubai and UAE.',
        };
    }

    return {
        title: `${service.bannerTitle} | Invest First`,
        description: `Get your ${service.bannerTitle} in Dubai quickly and easily with Invest First's expert licensing services.`,
    };
}

const LicenseServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = licenseDetailedData[slug];

    if (!service) {
        notFound();
    }

    return (
        <main className="">
            <CommonHerosection
                title={service.bannerTitle}
                description={`Expert assistance in obtaining your ${service.bannerTitle} in Dubai and across the UAE.`}
                cardTitle="Quick Licensing Support"
                cardDescription="We handle the complete licensing cycle from documentation to government submission."
            />
            <LicenseIntro data={service.intro} />
            <LicenseDocuments data={service.requiredDocuments} />
            {service.licenseTypes && <LicenseTypes data={service.licenseTypes} />}
            {service.benefits && <LicenseBenefits data={service.benefits} />}
            {service.whyChoose && <LicenseWhyChoose data={service.whyChoose} />}
            {service.faqs && (
                <FAQAccordion
                    title={service.faqs.title}
                    faqItems={service.faqs.faqItems}
                />
            )}
            {/* Additional sections will be added here */}
        </main>
    );
};

export default LicenseServiceDetailPage;

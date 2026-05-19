import { notFound } from 'next/navigation';
import React from 'react';
import { licenseDetailedData } from '@/data/licenseData';
import LicenseIntro from '@/components/LicenseServices/LicenseIntro';
import LicenseDocuments from '@/components/LicenseServices/LicenseDocuments';
import LicenseTypes from '@/components/LicenseServices/LicenseTypes';
import LicenseBenefits from '@/components/LicenseServices/LicenseBenefits';
import LicenseWhyChoose from '@/components/LicenseServices/LicenseWhyChoose';
import FAQAccordion from '@/components/Common/FAQAccordion';
import InnerHero from '@/components/Common/InnerHero';

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
            <InnerHero
                title={service.bannerTitle}
                subtitle={`Expert assistance in obtaining your ${service.bannerTitle} in Dubai and across the UAE.`}
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

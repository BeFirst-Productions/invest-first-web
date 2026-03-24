import { notFound } from 'next/navigation';
import React from 'react';
import { mainlandDetailedData } from '@/data/MainlandData';
import LicenseIntro from '@/Components/LicenseServices/LicenseIntro';
import LicenseDocuments from '@/Components/LicenseServices/LicenseDocuments';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import MainlandOverview from '@/Components/Mainland/MainlandOverview';
import MainlandFeatures from '@/Components/Mainland/MainlandFeatures';
import WhyChoose from '@/Components/Common/WhyChoose';
import MainlandLocationIntro from '@/Components/Mainland/MainlandLocationIntro';
import MainlandLicenseTypes from '@/Components/Mainland/MainlandLicenseTypes';
import MainlandSetupProcess from '@/Components/Mainland/MainlandSetupProcess';
import MainlandDocumentsPill from '@/Components/Mainland/MainlandDocumentsPill';
import MainlandCostFactors from '@/Components/Mainland/MainlandCostFactors';

// Define the valid slugs for dynamic routes
const VALID_SLUGS = ['dubai', 'abu-dhabi'];

export async function generateStaticParams() {
    return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = mainlandDetailedData[slug];

    if (!service) {
        return {
            title: 'Mainland Company Formation | Invest First',
            description: 'Professional mainland business setup services in Dubai and UAE.',
        };
    }

    return {
        title: `${service.bannerTitle} | Invest First`,
        description: `Get your ${service.bannerTitle} in the UAE quickly and easily with Invest First's expert setup services.`,
    };
}

const MainlandLocationDetailPage = async ({ params }) => {
    const { slug } = await params;
    
    // Check if the slug is valid (e.g., /mainland/dubai or /mainland/abu-dhabi)
    if (!VALID_SLUGS.includes(slug)) {
        notFound();
    }

    const service = mainlandDetailedData[slug];

    return (
        <main className="">
            <CommonHerosection
                title={service.bannerTitle}
                description={`Expert assistance in establishing your presence in ${slug.replace('-', ' ')} and across the UAE.`}
                cardTitle={`${slug.charAt(0).toUpperCase() + slug.slice(1).replace('-', ' ')} Setup Support`}
                cardDescription="We handle the complete formation process from trade name reservation to license issuance."
            />
            
            <MainlandLocationIntro data={service.intro} />
            
            {service.typesOfLicenses && <MainlandLicenseTypes data={service.typesOfLicenses} />}

            {service.setupProcess && <MainlandSetupProcess data={service.setupProcess} />}

            {service.documentsPill && <MainlandDocumentsPill data={service.documentsPill} />}

            {service.costFactors && <MainlandCostFactors data={service.costFactors} />}
            
            
            {service.whyChoose && <WhyChoose data={service.whyChoose} />}
            
            {service.faqs && (
                <FAQAccordion
                    title={service.faqs.title}
                    faqItems={service.faqs.faqItems}
                />
            )}
         
        </main>
    );
};

export default MainlandLocationDetailPage;

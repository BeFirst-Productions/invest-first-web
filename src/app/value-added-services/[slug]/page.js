import { notFound } from 'next/navigation';
import React from 'react';
import CommonHerosection from '@/components/Common/Banner/CommonHerosection';
import { valueAddedServicesMap } from '@/data/ValueAddedServicesData';
import VATRegistration from '@/components/ValueAddedServices/VATRegistration';

import VATServiceProcess from '@/components/ValueAddedServices/VATServiceProcess';
import FAQAccordion from '@/components/Common/FAQAccordion';
import WhyChooseDubai from '@/components/ProServices/WhyChooseDubai';
import InnerHero from '@/components/Common/InnerHero';
import LicenseWhyChoose from '@/components/LicenseServices/LicenseWhyChoose';

/* -- Static params - tells Next.js which slugs to pre-render -- */
export async function generateStaticParams() {
    return Object.keys(valueAddedServicesMap).map((slug) => ({ slug }));
}

/* -- Dynamic metadata per service -- */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = valueAddedServicesMap[slug];

    if (!service) {
        return {
            title: 'Service Not Found | Invest First',
            description: 'The requested service was not found.',
        };
    }

    return {
        title: `${service.title} | Invest First`,
        description: service.bannerDescription,
    };
}

const ValueAddedServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = valueAddedServicesMap[slug];

    // 404 for unknown slugs
    if (!service) notFound();

    return (
        <main>
            <InnerHero
                title={service.bannerTitle}
                description={service.bannerDescription}
            />

            {/* Dynamic Service Components */}
            <VATRegistration data={service.intro} />
            
            <VATServiceProcess data={service.process.tabs} />

            <LicenseWhyChoose data={service.whyChoose} />

            <FAQAccordion 
                title={service.faqs.title}
                faqItems={service.faqs.items}
            />


        </main>
    );
};

export default ValueAddedServiceDetailPage;

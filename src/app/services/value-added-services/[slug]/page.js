import { notFound } from 'next/navigation';
import React from 'react';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { valueAddedServicesMap } from '@/data/ValueAddedServicesData';
import VATRegistration from '@/components/ValueAddedServices/VATRegistration';

import VATServiceProcess from '@/components/ValueAddedServices/VATServiceProcess';
import FAQAccordion from '@/components/Common/FAQAccordion';
import WhyChooseDubai from '@/components/ProServices/WhyChooseDubai';
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

    const bannerImageMap = {
        'vat-corporate-tax': '/images/valueAddedServices/vat-corporate-banner.png',
        'medical-insurance': '/images/valueAddedServices/medical-banner.png',
        'trademark-registration': '/images/valueAddedServices/trademark-banner.png',
        'branding-design': '/images/valueAddedServices/branding-design-banner.png',
        'digital-marketing': '/images/valueAddedServices/digital-marketing-banner.png',
        'web-development': '/images/valueAddedServices/web-design-banner.png',
    };

    const imageUrl = bannerImageMap[slug] || '/images/valueAddedServices/vat-corporate-banner.png';

    // Split title by first word to highlight the first word
    const titleParts = service.bannerTitle ? service.bannerTitle.trim().split(/\s+/) : [];
    const highlightedTitle = titleParts[0] || '';
    const plainTitle = titleParts.slice(1).join(' ') || '';

    return (
        <main>
            <CommonHeroSection
                highlightedTitle={highlightedTitle}
                plainTitle={plainTitle}
                description={service.bannerDescription}
                imageUrl={imageUrl}
                imageAlt={service.bannerTitle}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'Value Added Services', href: '/services' },
                    { label: service.bannerTitle }
                ]}
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

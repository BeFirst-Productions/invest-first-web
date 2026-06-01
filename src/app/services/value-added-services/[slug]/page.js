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

    if (!service || !service.seo) {
        return {
            title: 'Value Added Services | Invest First',
            description: 'Professional business support and value added services in Dubai and UAE.',
        };
    }

    return {
        title: service.seo.title,
        description: service.seo.description,
        keywords: service.seo.keywords,
        alternates: {
            canonical: service.seo.canonical,
        },
        openGraph: {
            title: service.seo.title,
            description: service.seo.description,
            images: [
                {
                    url: service.seo.image,
                    width: 1200,
                    height: 630,
                    alt: service.seo.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: service.seo.title,
            description: service.seo.description,
            images: [service.seo.image],
        },
    };
}

const ValueAddedServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = valueAddedServicesMap[slug];

    // 404 for unknown slugs
    if (!service) notFound();

    const bannerImageMap = {
        'vat-corporate-tax-assistence-in-uae': '/images/valueAddedServices/vat-corporate-banner.png',
        'medical-insurence-assistence-in-uae': '/images/valueAddedServices/medical-banner.png',
        'trademark-registration-in-uae': '/images/valueAddedServices/trademark-banner.png',
        'branding-design-services-in-uae': '/images/valueAddedServices/branding-design-banner.png',
        'digital-marketing-services-in-uae': '/images/valueAddedServices/digital-marketing-banner.png',
        'web-developmet-company-in-uae': '/images/valueAddedServices/web-design-banner.png',
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

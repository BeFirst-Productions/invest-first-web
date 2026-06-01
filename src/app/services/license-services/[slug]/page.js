import { notFound } from 'next/navigation';
import React from 'react';
import { licenseDetailedData } from '@/data/licenseData';
import LicenseIntro from '@/components/LicenseServices/LicenseIntro';
import LicenseDocuments from '@/components/LicenseServices/LicenseDocuments';
import LicenseTypes from '@/components/LicenseServices/LicenseTypes';
import LicenseBenefits from '@/components/LicenseServices/LicenseBenefits';
import LicenseWhyChoose from '@/components/LicenseServices/LicenseWhyChoose';
import FAQAccordion from '@/components/Common/FAQAccordion';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';

// List of valid slugs for license services
const VALID_SLUGS = Object.keys(licenseDetailedData);

export async function generateStaticParams() {
    return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = licenseDetailedData[slug];

    if (!service || !service.seo) {
        return {
            title: 'License Services | Invest First',
            description: 'Professional business licensing services in Dubai and UAE.',
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

const LicenseServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = licenseDetailedData[slug];

    if (!service) {
        notFound();
    }

    const bannerImageMap = {
        'professional-license-in-uae': '/images/licenseServices/professional-license-banner.png',
        'commercial-license-in-uae': '/images/licenseServices/commercial-license-banner.png',
        'industrial-license-in-uae': '/images/licenseServices/industrial-license-banner.png',
        'e-trader-license-in-uae': '/images/licenseServices/e-trader-license-banner.png',
        'travel-license-in-uae': '/images/licenseServices/tour-travel-license-banner.png',
    };

    const imageUrl = bannerImageMap[slug] || '/images/licenseServices/professional-license-banner.png';

    // Split title by first word to highlight the first word
    const titleParts = service.bannerTitle ? service.bannerTitle.trim().split(/\s+/) : [];
    const highlightedTitle = titleParts[0] || '';
    const plainTitle = titleParts.slice(1).join(' ') || '';

    const description = service.bannerDescription || `Expert assistance in obtaining your ${service.bannerTitle} in Dubai and across the UAE.`;

    return (
        <main className="">
            <CommonHeroSection
                highlightedTitle={highlightedTitle}
                plainTitle={plainTitle}
                description={description}
                imageUrl={imageUrl}
                imageAlt={service.bannerTitle}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'License Services', href: '/services' },
                    { label: service.bannerTitle }
                ]}
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

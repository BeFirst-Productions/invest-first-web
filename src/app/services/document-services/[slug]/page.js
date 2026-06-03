import { notFound } from 'next/navigation';
import React from 'react';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import FAQAccordion from '@/components/Common/FAQAccordion';
import { documentDataMap } from '@/data/DocumentServicesData';
import DocumentServicesIntro from '@/components/DocumentServices/DocumentServicesIntro';
import DocumentServiceTypes from '@/components/DocumentServices/DocumentServiceTypes';
import DocumentServiceBenefits from '@/components/DocumentServices/DocumentServiceBenefits';
import DocumentServiceProcessTime from '@/components/DocumentServices/DocumentServiceProcessTime';
import DocumentServiceWhyChoose from '@/components/DocumentServices/DocumentServiceWhyChoose';

/* -- Static params - tells Next.js which slugs to pre-render -- */
export async function generateStaticParams() {
    return Object.keys(documentDataMap).map((slug) => ({ slug }));
}

/* -- Dynamic metadata per service -- */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = documentDataMap[slug];

    // Fallback if service or SEO data is missing
    if (!service || !service.seo) {
        return {
            title: 'Document Services | Invest First',
            description: 'Professional document services in Dubai and UAE.',
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

/* -- Page component -- */
const DocumentServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = documentDataMap[slug];

    // 404 for unknown slugs
    if (!service) notFound();

    const bannerImageMap = {
        'uae-attestation-services': '/images/documentServices/attestation-services-banner.png',
        'legal-transalation-dubai': '/images/documentServices/legal-translation-banner.png',
        'typing-services-uae': '/images/documentServices/typing-services-banner.png',
    };

    const imageUrl = bannerImageMap[slug] || '/images/documentServices/attestation-services-banner.png';

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
                    { label: 'Document Services', href: '/services' },
                    { label: service.bannerTitle }
                ]}
            />
            <DocumentServicesIntro data={service.intro} />
            <DocumentServiceTypes data={service.serviceTypes} />
            <DocumentServiceBenefits data={service.benefits} />
            <DocumentServiceProcessTime data={service.processTime} />
            <DocumentServiceWhyChoose data={service.whyInvestFirst} />
            <FAQAccordion
                title={service.faq.headingRest}
                faqItems={service.faq.items}
            />
        </main>
    );
};

export default DocumentServiceDetailPage;

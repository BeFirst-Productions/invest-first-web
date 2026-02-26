import { notFound } from 'next/navigation';
import React from 'react';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import { documentDataMap } from '@/data/DocumentServicesData';
import DocumentServicesIntro from '@/Components/DocumentServices/DocumentServicesIntro';
import DocumentServiceTypes from '@/Components/DocumentServices/DocumentServiceTypes';
import DocumentServiceBenefits from '@/Components/DocumentServices/DocumentServiceBenefits';
import DocumentServiceProcessTime from '@/Components/DocumentServices/DocumentServiceProcessTime';
import DocumentServiceWhyChoose from '@/Components/DocumentServices/DocumentServiceWhyChoose';

/* ── Static params — tells Next.js which slugs to pre-render ── */
export async function generateStaticParams() {
    return Object.keys(documentDataMap).map((slug) => ({ slug }));
}

/* ── Dynamic metadata per service ── */
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

/* ── Page component ── */
const DocumentServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = documentDataMap[slug];

    // 404 for unknown slugs
    if (!service) notFound();

    return (
        <main>
            <CommonHerosection
                title={service.bannerTitle}
                description={service.bannerDescription}
                cardTitle={service.cardTitle}
                cardDescription={service.cardDescription}
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

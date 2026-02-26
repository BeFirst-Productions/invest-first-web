import { notFound } from 'next/navigation';
import React from 'react';
import ProServicesIntro from '@/Components/ProServices/ProServicesIntro';
import CompanyFormationTypes from '@/Components/ProServices/CompanyFormationTypes';
import WhyChooseDubai from '@/Components/ProServices/WhyChooseDubai';
import FreezonePartnerStatus from '@/Components/ProServices/FreezonePartnerStatus';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import { serviceDataMap } from '@/data/ProServicesData';

/* ── Static params — tells Next.js which slugs to pre-render ── */
export async function generateStaticParams() {
    return Object.keys(serviceDataMap).map((slug) => ({ slug }));
}

/* ── Dynamic metadata per service ── */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = serviceDataMap[slug];

    // Fallback if service or SEO data is missing
    if (!service || !service.seo) {
        return {
            title: 'PRO Services | Invest First',
            description: 'Expert PRO services in Dubai and UAE.',
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
const ProServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = serviceDataMap[slug];

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
            <ProServicesIntro data={service.intro} />
            <CompanyFormationTypes data={service.companyFormationTypes} />
            <WhyChooseDubai data={service.whyChoose} />
            <FreezonePartnerStatus />
            <FAQAccordion
                title={service.faq.headingRest}
                faqItems={service.faq.items}
            />
        </main>
    );
};

export default ProServiceDetailPage;

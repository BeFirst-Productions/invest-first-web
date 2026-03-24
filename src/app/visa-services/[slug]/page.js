import { notFound } from 'next/navigation';
import React from 'react';
import ProServicesIntro from '@/Components/ProServices/ProServicesIntro';
import InvestorVisaSolutions from '@/Components/InvestorVisa/InvestorVisaSolutions';
import InvestorVisaOverview from '@/Components/InvestorVisa/InvestorVisaOverview';
import InvestorVisaEligibility from '@/Components/InvestorVisa/InvestorVisaEligibility';
import InvestorVisaProcess from '@/Components/InvestorVisa/InvestorVisaProcess';
import CompanyFormationTypes from '@/Components/ProServices/CompanyFormationTypes';
import WhyChooseDubai from '@/Components/ProServices/WhyChooseDubai';
import AuthorizedPartnerStatus from '@/Components/ProServices/AuthorizedPartnerStatus';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import { visaServiceDataMap } from '@/data/VisaServicesData';

/* ── Static params — tells Next.js which slugs to pre-render ── */
export async function generateStaticParams() {
    return Object.keys(visaServiceDataMap).map((slug) => ({ slug }));
}

/* ── Dynamic metadata per service ── */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = visaServiceDataMap[slug];

    // Fallback if service or SEO data is missing
    if (!service || !service.seo) {
        return {
            title: 'Visa Services | Invest First',
            description: 'Expert residency and visa services in Dubai and UAE.',
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
const VisaServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = visaServiceDataMap[slug];

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
            {/* Using the specialized Visa intro component */}
            <InvestorVisaSolutions data={service.intro} />
            <InvestorVisaOverview data={service.overview} />
            <InvestorVisaEligibility data={service.eligibilityRequirements} />
            <InvestorVisaProcess data={service.applicationProcess} />
            <WhyChooseDubai data={service.whyChoose} />
            <FAQAccordion
                title={service.faq.headingRest}
                faqItems={service.faq.items}
            />
        </main>
    );
};

export default VisaServiceDetailPage;

import { notFound } from 'next/navigation';
import React from 'react';
import InvestorVisaSolutions from '@/components/VisaServices/InvestorVisaSolutions';
import InvestorVisaOverview from '@/components/VisaServices/InvestorVisaOverview';
import InvestorVisaEligibility from '@/components/VisaServices/InvestorVisaEligibility';
import InvestorVisaProcess from '@/components/VisaServices/InvestorVisaProcess';
import WhyChooseDubai from '@/components/ProServices/WhyChooseDubai';
import FAQAccordion from '@/components/Common/FAQAccordion';
import { visaServiceDataMap } from '@/data/VisaServicesData';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';

/* -- Static params - tells Next.js which slugs to pre-render -- */
export async function generateStaticParams() {
    return Object.keys(visaServiceDataMap).map((slug) => ({ slug }));
}

/* -- Dynamic metadata per service -- */
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

/* -- Page component -- */
const VisaServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = visaServiceDataMap[slug];

    // 404 for unknown slugs
    if (!service) notFound();

    const bannerImageMap = {
        'investor-visa': '/images/visaServices/investor-banner.png',
        'golden-visa': '/images/visaServices/golden-visa-banner.png',
        'employment-visa': '/images/visaServices/employment-visa-banner.png',
        'dependent-visa': '/images/visaServices/dependent-visa-banner.png',
        'green-visa': '/images/visaServices/green-visa-banner.png',
        'blue-visa': '/images/visaServices/blue-visa-banner.png',
        'remote-work-visa': '/images/visaServices/remote-visa-banner.png',
        'tourist-visit-visa': '/images/visaServices/tourist-banner.png',
    };

    const imageUrl = bannerImageMap[slug] || '/images/visaServices/investor-banner.png';

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
                    { label: 'Visa Services', href: '' },
                    { label: service.bannerTitle }
                ]}
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

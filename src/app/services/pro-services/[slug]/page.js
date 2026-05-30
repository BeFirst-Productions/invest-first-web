import { notFound } from 'next/navigation';
import React from 'react';
import ProServicesIntro from '@/components/ProServices/ProServicesIntro';
import CompanyFormationTypes from '@/components/ProServices/CompanyFormationTypes';
import WhyChooseDubai from '@/components/ProServices/WhyChooseDubai';
import AuthorizedPartnerStatus from '@/components/ProServices/AuthorizedPartnerStatus';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import FAQAccordion from '@/components/Common/FAQAccordion';
import { serviceDataMap } from '@/data/ProServicesData';

/* -- Static params - tells Next.js which slugs to pre-render -- */
export async function generateStaticParams() {
    return Object.keys(serviceDataMap).map((slug) => ({ slug }));
}

/* -- Dynamic metadata per service -- */
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

    const bannerImageMap = {
        // 'company-formation': '/images/services/service-banner.png',
        'virtual-pro': '/images/visaServices/virtual-pro-banner.png',
        'local-sponsorships': '/images/visaServices/local-sponsorship-banner.png',
        'license-renewals': '/images/visaServices/licnense-renewals-banner.png',
        'visa-renewals': '/images/visaServices/visa-renewals-banner.png',
        'banking-assistance': '/images/visaServices/banking-assistance-banner.png',
        'office-solutions': '/images/visaServices/office-solutions-banner.png',
    };

    const imageUrl = bannerImageMap[slug] || '/images/services/service-banner.png';

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
                    { label: 'PRO Services', href: '/services/pro-services' },
                    { label: service.bannerTitle }
                ]}
            />
            <ProServicesIntro data={service.intro} />
            <CompanyFormationTypes data={service.companyFormationTypes} />
            <WhyChooseDubai data={service.whyChoose} />
            <AuthorizedPartnerStatus data={service.authorizedPartnerStatus} />
            <FAQAccordion
                title={service.faq.headingRest}
                faqItems={service.faq.items}
            />
        </main>
    );
};

export default ProServiceDetailPage;

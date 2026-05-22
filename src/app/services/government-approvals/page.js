import React from 'react';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import GovernmentApprovalsIntro from '@/components/GovernmentApprovals/GovernmentApprovalsIntro';
import GovernmentApprovalsTypes from '@/components/GovernmentApprovals/GovernmentApprovalsTypes';
import GovernmentApprovalsProcess from '@/components/GovernmentApprovals/GovernmentApprovalsProcess';
import GovernmentApprovalsDetails from '@/components/GovernmentApprovals/GovernmentApprovalsDetails';
import GovernmentApprovalsWhyChoose from '@/components/GovernmentApprovals/GovernmentApprovalsWhyChoose';
import FAQAccordion from '@/components/Common/FAQAccordion';
import { governmentApprovalsData } from '@/data/GovernmentApprovalsData';

export const metadata = {
    title: governmentApprovalsData.seo.title,
    description: governmentApprovalsData.seo.description,
    keywords: governmentApprovalsData.seo.keywords,
};

const GovernmentApprovalsPage = () => {
    // Split title by first word to highlight the first word
    const titleParts = governmentApprovalsData.bannerTitle ? governmentApprovalsData.bannerTitle.trim().split(/\s+/) : [];
    const highlightedTitle = titleParts[0] || '';
    const plainTitle = titleParts.slice(1).join(' ') || '';

    const imageUrl = '/images/governmentApprovals/government-approvals-banner.png';

    return (
        <main>
            <CommonHeroSection
                highlightedTitle={highlightedTitle}
                plainTitle={plainTitle}
                description={governmentApprovalsData.bannerDescription}
                imageUrl={imageUrl}
                imageAlt={governmentApprovalsData.bannerTitle}
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Services', href: '/services' },
                    { label: 'PRO Services', href: '/services/pro-services' },
                    { label: governmentApprovalsData.bannerTitle }
                ]}
            />
            <GovernmentApprovalsIntro data={governmentApprovalsData.intro} />
            <GovernmentApprovalsTypes data={governmentApprovalsData.types} />
            <GovernmentApprovalsProcess data={governmentApprovalsData.process} />
            <GovernmentApprovalsDetails 
                documentsData={governmentApprovalsData.documents} 
                benefitsData={governmentApprovalsData.benefits} 
            />
            <GovernmentApprovalsWhyChoose data={governmentApprovalsData.whyChoose} />
            <FAQAccordion
                title={governmentApprovalsData.faq.headingRest}
                faqItems={governmentApprovalsData.faq.items}
            />
        </main>
    );
};

export default GovernmentApprovalsPage;

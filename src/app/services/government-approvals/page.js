import React from 'react';
import InnerHero from '@/components/Common/InnerHero';
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
    return (
        <main>
            <InnerHero
                title={governmentApprovalsData.bannerTitle}
                subtitle={governmentApprovalsData.bannerDescription}
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

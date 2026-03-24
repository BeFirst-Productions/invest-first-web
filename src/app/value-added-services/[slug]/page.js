import { notFound } from 'next/navigation';
import React from 'react';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import ScheduleMeetingSection from '@/Components/Common/Meeting/ScheduleMeeting';
import Newsletter from '@/Components/Common/Newsletter/Newsletter';
import { valueAddedServicesMap } from '@/data/ValueAddedServicesData';
import Container from '@/Components/Common/Layout/Contianer';
import VATRegistration from '@/Components/ValueAddedServices/VATRegistration';
import FAQAccordion from '@/Components/Common/FAQAccordion';
import WhyChoose from '@/Components/Common/WhyChoose';
import VATServiceProcess from '@/Components/ValueAddedServices/VATServiceProcess';

/* ── Static params — tells Next.js which slugs to pre-render ── */
export async function generateStaticParams() {
    return Object.keys(valueAddedServicesMap).map((slug) => ({ slug }));
}

/* ── Dynamic metadata per service ── */
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const service = valueAddedServicesMap[slug];

    if (!service) {
        return {
            title: 'Service Not Found | Invest First',
            description: 'The requested service was not found.',
        };
    }

    return {
        title: `${service.title} | Invest First`,
        description: service.bannerDescription,
    };
}

const ValueAddedServiceDetailPage = async ({ params }) => {
    const { slug } = await params;
    const service = valueAddedServicesMap[slug];

    // 404 for unknown slugs
    if (!service) notFound();

    return (
        <main>
            <CommonHerosection
                title={service.bannerTitle}
                description={service.bannerDescription}
            />

            {/* Dynamic Service Components */}
            <VATRegistration data={service.intro} />
            
            <VATServiceProcess data={service.process.tabs} />

            <WhyChoose data={service.whyChoose} />

            <FAQAccordion 
                title={service.faqs.title}
                faqItems={service.faqs.items}
            />


        </main>
    );
};

export default ValueAddedServiceDetailPage;

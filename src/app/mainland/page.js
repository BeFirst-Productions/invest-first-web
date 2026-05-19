import React from 'react';
import { mainlandDetailedData } from '@/data/mainlandData';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { MainlandFeatures, MainlandOverview } from '@/components/sections/Mainland';


export const metadata = {
    title: "Mainland Company Formation Dubai | Invest First",
    description: "Start your mainland company in Dubai with Invest First. We offer complete business setup services, including 100% ownership and PRO support.",
};

const MainlandPage = () => {
    const service = mainlandDetailedData['main-land'];

    return (
        <main className="">
                 <CommonHeroSection
                highlightedTitle="About"
                plainTitle="Us"
                description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim"
                imageUrl="/images/about/about-banner.jpg"
                imageAlt="Our team at Meydan Free Zone"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us' },
                ]}
            />
            <MainlandOverview />
            <MainlandFeatures data={service} />
            {/* <WhyChoose data={service.whyChoose} /> */}
            {/* <FAQAccordion 
                title={service.faqs.title}
                faqItems={service.faqs.faqItems}
            /> */}
         
        </main>
    );
};

export default MainlandPage;

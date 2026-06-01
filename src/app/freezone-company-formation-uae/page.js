import React from 'react';
import { freezoneData } from '@/data/FreezoneData';
import WhyChoose from '@/components/Common/WhyChoose';
import FAQAccordion from '@/components/Common/FAQAccordion';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { FreezoneCategorySection, FreezoneFeatures, FreezoneLicenseTypes, FreezoneOverview, FreezoneSetupProcess } from '@/components/sections/Freezone';



export async function generateMetadata() {
    const seo = freezoneData.seo;
    return {
        title: seo.title,
        description: seo.description,
        keywords: seo.keywords,
        alternates: {
            canonical: seo.canonical,
        },
        openGraph: {
            title: seo.title,
            description: seo.description,
            url: seo.canonical,
            images: [
                {
                    url: seo.image,
                    width: 1200,
                    height: 630,
                    alt: seo.title,
                },
            ],
            type: 'website',
        },
        twitter: {
            card: 'summary_large_image',
            title: seo.title,
            description: seo.description,
            images: [seo.image],
        },
    };
}

const FreezonePage = () => {
    return (
        <main className="">
            <CommonHeroSection
                highlightedTitle="Freezone"
                plainTitle=""
                description="Launch your Free Zone company in the UAE with 100% foreign ownership, tax exemptions, and full capital repatriation under expert guidance."
                imageUrl="/images/freezone/freezone-banner.jpg"
                imageAlt="Our team at Free Zone"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Freezone', href: '/freezone-company-formation-uae' },
                ]}
            />
            
            <FreezoneOverview />
            <FreezoneFeatures />
            <FreezoneCategorySection />
            <FreezoneSetupProcess />
            <FreezoneLicenseTypes />
            <WhyChoose data={freezoneData.whyChoose} />
            <FAQAccordion 
                title={freezoneData.faqs.title} 
                faqItems={freezoneData.faqs.faqItems} 
            />
        </main>
    );
};

export default FreezonePage;



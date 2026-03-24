import { notFound } from 'next/navigation';
import React from 'react';
import { offshoreData } from '@/data/OffshoreData';
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import WhyChoose from '@/Components/Common/WhyChoose';
import FAQAccordion from '@/Components/Common/FAQAccordion';

// Define the valid slugs for dynamic routes from OffshoreData
const VALID_SLUGS = offshoreData.categories.map(cat => cat.id);

export async function generateStaticParams() {
    return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = offshoreData.categories.find(cat => cat.id === slug);

    if (!category) {
        return {
            title: 'Offshore Company Formation | Invest First',
            description: 'Professional business setup services in UAE offshore jurisdictions.',
        };
    }

    return {
        title: `${category.name} Company Formation | Invest First`,
        description: `Get your business license in ${category.name} with Invest First's expert setup services. Complete support for formation and offshore banking.`,
    };
}

const OffshoreDetailPage = async ({ params }) => {
    const { slug } = await params;

    // Check if the slug is valid (e.g., /offshore/jafza-offshore)
    if (!VALID_SLUGS.includes(slug)) {
        notFound();
    }

    const category = offshoreData.categories.find(cat => cat.id === slug);

    return (
        <main className="">
            <CommonHerosection
                title={`${category.name}`}
                description={`Expert assistance in establishing your company in ${category.name} and across the UAE's offshore jurisdictions.`}
                cardTitle={`${category.name} Setup Support`}
                cardDescription="We handle the complete formation process for international business entities in the most respected UAE jurisdictions."
            />

            {/* 
                Reserved for OffshoreDetailsIntro Component (next step)
                This will provide jurisdiction-specific information.
            */}
            <section className="py-10 md:py-20">
                <div className="container mx-auto px-4">
                    {/* Placeholder for OffshoreDetailsIntro */}
                </div>
            </section>

            {/* 
                Reserved for OffshoreFeatures Component (next step)
                This will show types of services or features available for this offshore location.
            */}
            <section className="py-10 md:py-20 bg-[#030B1B]">
                <div className="container mx-auto px-4 text-center">
                    {/* Placeholder for OffshoreFeatures */}
                </div>
            </section>

            {/* 
                Reserved for OffshoreListingsingsComponent (next step)
                This will list all the individual jurisdictions or entities from category.items.
            */}
            <section className="py-10 md:py-20">
                <div className="container mx-auto px-4">
                    {/* Placeholder for OffshoreListings */}
                </div>
            </section>

            {/* 
                Reserved for OffshoreSetupProcessingsingsComponent (next step)
                Detailed steps for offshore formation in this location.
            */}

            {/* 
                Common Components that can be added later as part of the structure expansion
             */}
            {/* <WhyChoose data={null} /> */}

            {/* <FAQAccordion title={`${category.name} Offshore FAQ`} faqItems={[]} /> */}

        </main>
    );
};

export default OffshoreDetailPage;

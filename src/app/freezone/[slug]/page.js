import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { freezoneData } from '@/data/FreezoneData';
import { notFound } from 'next/navigation';
import React from 'react';




const VALID_SLUGS = freezoneData.categories.map(cat => cat.id);

export async function generateStaticParams() {
    return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const category = freezoneData.categories.find(cat => cat.id === slug);

    if (!category) {
        return {
            title: 'Freezone Company Formation | Invest First',
            description: 'Professional business setup services in UAE free zones.',
        };
    }

    return {
        title: `${category.name} Company Formation | Invest First`,
        description: `Get your business license in ${category.name} with Invest First's expert setup services. Complete support for formation and visa processing.`,
    };
}

const FreezoneLocationDetailPage = async ({ params }) => {
    const { slug } = await params;

 
    if (!VALID_SLUGS.includes(slug)) {
        notFound();
    }

    const category = freezoneData.categories.find(cat => cat.id === slug);

    return (
        <main className="">
            {/* <CommonHerosection
                title={`${category.name}`}
                description={`Expert assistance in establishing your company in ${category.name} free zones and across the UAE.`}
                cardTitle={`${category.name} Setup Support`}
                cardDescription="We handle the complete formation process from selecting the right freezone to license issuance."
            /> */}
                  <CommonHeroSection
        highlightedTitle={`${category.name}`}
        plainTitle=" "
        // description={`Expert assistance in establishing your presence in ${slug.replace('-', ' ')} and across the UAE.`}
        description={`Expert assistance in establishing your company in ${category.name} free zones and across the UAE.`}
        imageUrl="/images/about/about-banner.jpg"
        imageAlt="Our team at Free Zone"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Freezone", href: "/freezone" },
          { label: `${category.name}` },
        ]}
      />

            {/* 
                Reserved for FreezoneDetailsIntro Component (next step)
                This will provide city-specific freezone information.
            */}
            <section className="py-10 md:py-20">
                <div className="container mx-auto px-4">
                    {/* Placeholder for FreezoneDetailsIntro */}
                </div>
            </section>

            {/* 
                Reserved for FreezoneLicenseTypes Component (next step)
                This will display types of licenses available in this city's freezones.
            */}
            <section className="py-10 md:py-20 bg-[#030B1B]">
                <div className="container mx-auto px-4 text-center">
                    {/* Placeholder for FreezoneLicenseTypes */}
                </div>
            </section>

            {/* 
                Reserved for FreezoneListingsingsComponent (next step)
                This will list all the individual freezones (JAFZA, DMCC, etc.) from category.items.
            */}
            <section className="py-10 md:py-20">
                <div className="container mx-auto px-4">
                    {/* Placeholder for FreezoneListings */}
                </div>
            </section>

            {/* 
                Reserved for FreezoneSetupProcessingsingsComponent (next step)
                Detailed steps for freezone formation in this location.
            */}

            {/* 
                Common Components that can be added later as part of the structure expansion
             */}
            {/* <WhyChoose data={null} /> */}

            {/* <FAQAccordion title={`${category.name} Freezone FAQ`} faqItems={[]} /> */}

        </main>
    );
};

export default FreezoneLocationDetailPage;

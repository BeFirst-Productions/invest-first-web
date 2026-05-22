import React from 'react';
import { notFound } from 'next/navigation';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import FAQAccordion from '@/components/Common/FAQAccordion';
import WhyChooseSection from '@/components/Common/WhyChoose';
import { 
    FreezoneOverview, 
    FreezoneFeatures, 
    FreezoneLicenseTypes, 
    FreezoneSetupProcess,
    FreezoneCategorySection,
    FreezoneInnerOverview,
    FreezoneSetupProcessGrid,
    FreezoneCostSection,
    FreezoneDocsAndBenefits
} from '@/components/sections/Freezone';
import { getFreezoneData } from '@/data/freezoneDetailedData';

const VALID_EMIRATES = ['dubai', 'abu-dhabi', 'sharjah', 'ajman', 'umm-al-quwain', 'ras-al-khaimah'];
const VALID_SUBZONES = {
    'dubai': [
        'meydan-free-zone', 'ifza-free-zone', 'dmcc-free-zone', 'jebel-ali-jafza',
        'dda-free-zones', 'dubai-airport-dafza', 'difc', 'dubai-south', 'dubai-healthcare-city'
    ],
    'abu-dhabi': ['masdar-city', 'abu-dhabi-airport-free-zone'],
    'sharjah': [
        'sharjah-media-city-shams', 'sharjah-publishing-city-spcfz',
        'srtip-free-zone', 'hamriyah-free-zone'
    ]
};

function isValidPath(slug) {
    if (!slug || slug.length === 0 || slug.length > 2) return false;
    const emirate = slug[0];
    if (!VALID_EMIRATES.includes(emirate)) return false;
    if (slug.length === 2) {
        const subzone = slug[1];
        const allowedSubzones = VALID_SUBZONES[emirate];
        if (!allowedSubzones || !allowedSubzones.includes(subzone)) return false;
    }
    return true;
}

export async function generateStaticParams() {
    const params = [];
    
    // Level 1: Emirates
    VALID_EMIRATES.forEach(em => {
        params.push({ slug: [em] });
    });

    // Level 2: Subzones
    Object.keys(VALID_SUBZONES).forEach(em => {
        VALID_SUBZONES[em].forEach(sz => {
            params.push({ slug: [em, sz] });
        });
    });

    return params;
}

export async function generateMetadata({ params }) {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    if (!isValidPath(slug)) {
        return {
            title: 'Freezone Setup | Invest First',
            description: 'UAE Free Zone Company Formation.',
        };
    }

    const emirate = slug[0];
    const subzone = slug[1];
    const lookupKey = subzone || emirate;
    const pageData = getFreezoneData(lookupKey);

    return {
        title: `${pageData.bannerTitle} | Invest First`,
        description: pageData.bannerDescription,
    };
}

const FreezoneLocationDetailPage = async ({ params }) => {
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    if (!isValidPath(slug)) {
        notFound();
    }

    const emirateId = slug[0];
    const subzoneId = slug[1];
    const lookupKey = subzoneId || emirateId;
    
    const pageData = getFreezoneData(lookupKey);
    const isLevel2 = slug.length === 2;

    const emirateLabel = emirateId.charAt(0).toUpperCase() + emirateId.slice(1).replace('-', ' ');

    return (
        <main className="">
            <CommonHeroSection
                highlightedTitle={pageData.bannerTitle}
                plainTitle=" "
                description={pageData.bannerDescription}
                imageUrl="/images/about/about-banner.jpg"
                imageAlt={`Our team at ${pageData.bannerTitle}`}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Freezone", href: "/freezone" },
                    ...(isLevel2 ? [{ label: emirateLabel, href: `/freezone/${emirateId}` }] : []),
                    { label: pageData.bannerTitle },
                ]}
            />

            <FreezoneInnerOverview data={pageData} />

            {/* Dynamic Overview Section */}
            {/* <FreezoneOverview data={pageData.intro} /> */}

            {/* If Level 1 (Emirate Overview) and has sub-freezones, render the subzone cards */}
            {/* {!isLevel2 && VALID_SUBZONES[emirateId] && (
                <FreezoneCategorySection emirateId={emirateId} />
            )} */}

            {/* Dynamic Features List */}
            {/* {pageData.keyFeatures && (
                <FreezoneFeatures data={pageData.keyFeatures} />
            )} */}

            {/* Dynamic License Types */}
            {/* {pageData.licenseTypes && (
                <FreezoneLicenseTypes 
                    data={pageData.licenseTypes} 
                    title={pageData.bannerTitle} 
                />
            )} */}

            {/* Dynamic Setup Process */}
            {pageData.setupProcess && (
                <FreezoneSetupProcessGrid data={pageData.setupProcess} />
            )}

            {/* Dynamic Cost Section */}
            {pageData.costSection && (
                <FreezoneCostSection data={pageData.costSection} />
            )}

            {/* Dynamic Docs and Benefits Section */}
            {pageData.docsAndBenefits && (
                <FreezoneDocsAndBenefits data={pageData.docsAndBenefits} />
            )}

            {/* Dynamic Why Choose Section */}
            {pageData.whyChoose && (
                <WhyChooseSection data={pageData.whyChoose} />
            )}

            {/* Dynamic FAQ Accordion */}
            {pageData.faqs && (
                <FAQAccordion
                    title={pageData.faqs.title}
                    faqItems={pageData.faqs.faqItems}
                />
            )}
        </main>
    );
};

export default FreezoneLocationDetailPage;

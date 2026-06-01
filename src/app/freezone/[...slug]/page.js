import React from 'react';
import { notFound, redirect } from 'next/navigation';
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
import { seoData } from '@/data/seoData';
import { getSeoMetadata } from '@/services/seoService';

const VALID_EMIRATES = ['dubai', 'abudhabi-freezone-company-formation', 'abu-dhabi', 'sharjah', 'ajman', 'umm-al-quwain', 'ras-al-khaimah', 'umm-al-quwain-freezone-company-setup', 'ras-al-khaimah-company-formation', 'ajman-freezone-company-setup'];
const VALID_SUBZONES = {
    'dubai': [
        'meydan-freezone-setup-in-dubai', 'ifza-freezone-company-setup-dubai', 'DMCC-company-setup-in-dubai', 'jafza-company-formation-dubai',
        'DDA-freezone-company-setup-in-dubai', 'dafza-company-setup-in-dubai', 'DIFC-setup-in-dubai', 'dubai-south-setup-in-dubai', 'dubai-healthcare-city-company-setup'
    ],
    'abu-dhabi': ['masdar-city-company-setup-in-abudhabi', 'abudhabi-airport-freezone-setup'],
    'abudhabi-freezone-company-formation': [],
    'sharjah': [
        'sharjah-freezone-company-formation', 'sharjah-media-city-shams-setup-in-sharjah', 'SPCFZ-company-setup-in-sharjah',
        'SRTIP-freezone-setup-in-sharjah', 'hamriyah-freezone-setup-in-dubai'
    ],
    'umm-al-quwain-freezone-company-setup': [],
    'ras-al-khaimah-company-formation': [],
    'ajman-freezone-company-setup': []
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

    if (slug && slug.length === 1) {
        if (slug[0] === 'sharjah') redirect('/freezone/sharjah/sharjah-freezone-company-formation');
        if (slug[0] === 'ajman') redirect('/freezone/ajman-freezone-company-setup');
        if (slug[0] === 'umm-al-quwain') redirect('/freezone/umm-al-quwain-freezone-company-setup');
        if (slug[0] === 'ras-al-khaimah') redirect('/freezone/ras-al-khaimah-company-formation');
        if (slug[0] === 'dubai') redirect('/dubai-freezone-company-formation');
        if (slug[0] === 'abu-dhabi') redirect('/freezone/abudhabi-freezone-company-formation');
    }
    if (slug && slug.length === 2) {
        const emirate = slug[0];
        const sub = slug[1];
        if (emirate === 'sharjah') {
            if (sub === 'sharjah-media-city-shams') redirect('/freezone/sharjah/sharjah-media-city-shams-setup-in-sharjah');
            if (sub === 'sharjah-publishing-city-spcfz') redirect('/freezone/sharjah/SPCFZ-company-setup-in-sharjah');
            if (sub === 'srtip-free-zone') redirect('/freezone/sharjah/SRTIP-freezone-setup-in-sharjah');
            if (sub === 'hamriyah-free-zone') redirect('/freezone/sharjah/hamriyah-freezone-setup-in-dubai');
            if (sub === 'ajman-freezone-company-setup') redirect('/freezone/ajman-freezone-company-setup');
        }
        if (emirate === 'dubai') {
            if (sub === 'meydan-free-zone') redirect('/freezone/dubai/meydan-freezone-setup-in-dubai');
            if (sub === 'ifza-free-zone') redirect('/freezone/dubai/ifza-freezone-company-setup-dubai');
            if (sub === 'dmcc-free-zone') redirect('/freezone/dubai/DMCC-company-setup-in-dubai');
            if (sub === 'jebel-ali-jafza') redirect('/freezone/dubai/jafza-company-formation-dubai');
            if (sub === 'dda-free-zones') redirect('/freezone/dubai/DDA-freezone-company-setup-in-dubai');
            if (sub === 'difc') redirect('/freezone/dubai/DIFC-setup-in-dubai');
            if (sub === 'dubai-south') redirect('/freezone/dubai/dubai-south-setup-in-dubai');
            if (sub === 'dubai-healthcare-city') redirect('/freezone/dubai/dubai-healthcare-city-company-setup');
        }
        if (emirate === 'abu-dhabi') {
            if (sub === 'masdar-city') redirect('/freezone/abu-dhabi/masdar-city-company-setup-in-abudhabi');
            if (sub === 'abu-dhabi-airport-free-zone') redirect('/freezone/abu-dhabi/abudhabi-airport-freezone-setup');
        }
    }

    if (!isValidPath(slug)) {
        return {
            title: 'Freezone Setup | Invest First',
            description: 'UAE Free Zone Company Formation.',
        };
    }

    const path = `/freezone/${slug.join('/')}`;
    if (seoData[path]) {
        return await getSeoMetadata(path);
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

    if (slug && slug.length === 1) {
        if (slug[0] === 'sharjah') redirect('/freezone/sharjah/sharjah-freezone-company-formation');
        if (slug[0] === 'ajman') redirect('/freezone/ajman-freezone-company-setup');
        if (slug[0] === 'umm-al-quwain') redirect('/freezone/umm-al-quwain-freezone-company-setup');
        if (slug[0] === 'ras-al-khaimah') redirect('/freezone/ras-al-khaimah-company-formation');
        if (slug[0] === 'dubai') redirect('/dubai-freezone-company-formation');
        if (slug[0] === 'abu-dhabi') redirect('/freezone/abudhabi-freezone-company-formation');
    }
    if (slug && slug.length === 2) {
        const emirate = slug[0];
        const sub = slug[1];
        if (emirate === 'sharjah') {
            if (sub === 'sharjah-media-city-shams') redirect('/freezone/sharjah/sharjah-media-city-shams-setup-in-sharjah');
            if (sub === 'sharjah-publishing-city-spcfz') redirect('/freezone/sharjah/SPCFZ-company-setup-in-sharjah');
            if (sub === 'srtip-free-zone') redirect('/freezone/sharjah/SRTIP-freezone-setup-in-sharjah');
            if (sub === 'hamriyah-free-zone') redirect('/freezone/sharjah/hamriyah-freezone-setup-in-dubai');
            if (sub === 'ajman-freezone-company-setup') redirect('/freezone/ajman-freezone-company-setup');
        }
        if (emirate === 'dubai') {
            if (sub === 'meydan-free-zone') redirect('/freezone/dubai/meydan-freezone-setup-in-dubai');
            if (sub === 'ifza-free-zone') redirect('/freezone/dubai/ifza-freezone-company-setup-dubai');
            if (sub === 'dmcc-free-zone') redirect('/freezone/dubai/DMCC-company-setup-in-dubai');
            if (sub === 'jebel-ali-jafza') redirect('/freezone/dubai/jafza-company-formation-dubai');
            if (sub === 'dda-free-zones') redirect('/freezone/dubai/DDA-freezone-company-setup-in-dubai');
            if (sub === 'difc') redirect('/freezone/dubai/DIFC-setup-in-dubai');
            if (sub === 'dubai-south') redirect('/freezone/dubai/dubai-south-setup-in-dubai');
            if (sub === 'dubai-healthcare-city') redirect('/freezone/dubai/dubai-healthcare-city-company-setup');
        }
        if (emirate === 'abu-dhabi') {
            if (sub === 'masdar-city') redirect('/freezone/abu-dhabi/masdar-city-company-setup-in-abudhabi');
            if (sub === 'abu-dhabi-airport-free-zone') redirect('/freezone/abu-dhabi/abudhabi-airport-freezone-setup');
        }
    }

    if (!isValidPath(slug)) {
        notFound();
    }

    const emirateId = slug[0];
    const subzoneId = slug[1];
    const lookupKey = subzoneId || emirateId;
    
    const pageData = getFreezoneData(lookupKey);
    const isLevel2 = slug.length === 2;

    const emirateLabel = emirateId === 'abu-dhabi' 
        ? 'Abu Dhabi' 
        : emirateId.charAt(0).toUpperCase() + emirateId.slice(1).replace('-', ' ');

    return (
        <main className="">
            <CommonHeroSection
                highlightedTitle={pageData.bannerTitle}
                plainTitle=" "
                description={pageData.bannerDescription}
                imageUrl="/images/freezone/freezone-banner.jpg"
                imageAlt={`Our team at ${pageData.bannerTitle}`}
                breadcrumbs={[
                    { label: "Home", href: "/" },
                    { label: "Freezone", href: "/dubai-freezone-company-formation" },
                    ...(isLevel2 && subzoneId !== 'ajman-freezone-company-setup' ? [{ 
                        label: emirateLabel, 
                        href: emirateId === 'sharjah' 
                            ? '/freezone/sharjah/sharjah-freezone-company-formation' 
                            : emirateId === 'abu-dhabi' 
                                ? '/freezone/abudhabi-freezone-company-formation' 
                                : `/freezone/${emirateId}` 
                    }] : []),
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

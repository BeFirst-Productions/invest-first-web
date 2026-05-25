import React from 'react'
import CommonBanner from '@/components/Common/Banner/CommonBanner';
import { AboutCompanySection,MissionVision, CoreValues } from '@/components/sections/About';
import Schedule from '@/components/sections/Schedule';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';

export const metadata = {
    title: "About Us | Invest First Business Setup in UAE & Dubai Company Formation",
    description: "Learn about Invest First, a trusted UAE business setup in uae We specialize in company formation, and complete business setup solutions in Dubai.",
    keywords: "business setup in UAE, business setup in Dubai, company formation UAE, UAE company formation, Dubai company registration, Dubai business setup consultancy, UAE business consultants, trade license in Dubai, UAE trade license, mainland company formation Dubai, free zone company setup UAE, PRO services UAE, visa services UAE, start business in Dubai, company registration UAE, business incorporation Dubai, PRO Services in Dubai",
    alternates: {
        canonical: "https://investfirst.ae/about-us",
    },
    openGraph: {
        title: "About Us | Invest First Business Setup in UAE & Dubai Company Formation",
        description: "Learn about Invest First, a trusted UAE business setup in uae We specialize in company formation, and complete business setup solutions in Dubai.",
        url: "https://investfirst.ae/about-us",
        type: "website",
    },
};


const page = () => {
    return (
        <>
           <CommonHeroSection
                highlightedTitle="About"
                plainTitle="Us"
                description="We are a trusted business setup company in the UAE, providing company formation, trade license, visa services, and PRO solutions for startups and investors."
                imageUrl="/images/about/about-banner.png"
                imageAlt="Our team at Meydan Free Zone"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us' },
                ]}
            />
            <AboutCompanySection />
            <CommonBanner
                title="UAE Business Setup Cost Calculator"
                description="Estimate your UAE company formation expenses with our easy business setup cost calculator. Get quick insights into trade license fees, visa costs, office requirements, and company registration expenses for starting your business in Dubai and across the UAE."
                buttonLink="/cost-calculator"
                buttonText="Cost Calculator "
                imageSrc="/images/about/uae.png"
                imageAlt="Contact Us"
            />
            <MissionVision />
            <CoreValues />
            <Schedule />

            {/* <ScheduleMeetingSection /> */}
            {/* <Newsletter title='Join the Invest First Community' description='Subscribe to receive updates, news, and exclusive business insights that help you stay ahead in the UAE market.' /> */}
        </>
    )
}

export default page
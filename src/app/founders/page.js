
import CommonBanner from '@/components/Common/Banner/CommonBanner'
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection'
import { MeetFounders, OurTeamsSection } from '@/components/sections/About'
import Schedule from '@/components/sections/Schedule'
import React from 'react'
import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/founders');
    return seo;
}


const page = () => {
    return (
        <>
            <CommonHeroSection
                highlightedTitle="Founders"
                plainTitle=""
                description="Meet the founders behind our trusted UAE business setup company, helping entrepreneurs with company formation,across Dubai and the UAE."
                imageUrl="/images/about/founders-banner.jpg"
                imageAlt="Our team at Meydan Free Zone"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Founders' },
                ]}
            />
            <MeetFounders />
        <CommonBanner
                     title="UAE Business Setup Cost Calculator"
                     description="Estimate your UAE company formation expenses with our easy business setup cost calculator. Get quick insights into trade license fees, visa costs, office requirements, and company registration expenses for starting your business in Dubai and across the UAE."
                     buttonLink="/cost-calculator"
                     buttonText="Cost Calculator "
                     imageSrc="/images/about/uae.png"
                     imageAlt="Contact Us"
                 />
            <OurTeamsSection />
            <Schedule />

        </>
    )
}

export default page
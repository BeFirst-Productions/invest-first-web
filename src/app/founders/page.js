
import CommonBanner from '@/components/Common/Banner/CommonBanner'
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection'
import { MeetFounders, OurTeamsSection } from '@/components/sections/About'
import Schedule from '@/components/sections/Schedule'
import React from 'react'
export const metadata = {
    title: "Founders | Leadership Behind Invest First Business Setup UAE",
    description: "Meet the founders of Invest First, the experts behind trusted business setup and company formation services in Dubai and across the UAE.",
    keywords: "Invest First founders, business setup experts UAE, company formation consultants Dubai, UAE business consultants, leadership team Invest First, Dubai business setup company, entrepreneurs UAE, business advisors Dubai, company formation experts UAE",
    alternates: {
        canonical: "https://investfirst.ae/founders",
    },
    openGraph: {
        title: "Founders | Leadership Behind Invest First Business Setup UAE",
        description: "Meet the founders of Invest First, the experts behind trusted business setup and company formation services in Dubai and across the UAE.",
        url: "https://investfirst.ae/founders",
        type: "website",
    },
};

const page = () => {
    return (
        <>
            <CommonHeroSection
                highlightedTitle="Founders"
                plainTitle=""
                description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim"
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
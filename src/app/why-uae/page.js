
import CommonBanner from '@/components/Common/Banner/CommonBanner'
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection'
import Schedule from '@/components/sections/Schedule'
import { WhyUAEPoints, WhyUAESection } from '@/components/sections/WhyUAE'
import React from 'react'
export const metadata = {
    title: "Why Choose UAE for Business Setup | Invest First Dubai",
    description: "Discover why the UAE is one of the best destinations for business setup, offering tax benefits, 100% foreign ownership, global market access, and investor-friendly policies.",
    keywords: "why invest in UAE, business setup UAE, company formation Dubai, UAE business benefits, start business in Dubai, UAE free zone setup, mainland company UAE, Dubai investment opportunities, entrepreneur visa UAE, Invest First UAE",
    alternates: {
        canonical: "https://investfirst.ae/why-uae",
    },
    openGraph: {
        title: "Why Choose UAE for Business Setup | Invest First Dubai",
        description: "Discover why the UAE is one of the best destinations for business setup, offering tax benefits, 100% foreign ownership, global market access, and investor-friendly policies.",
        url: "https://investfirst.ae/why-uae",
        type: "website",
    },
};

const page = () => {
    return (
        <div>
            <CommonHeroSection
                highlightedTitle="Why"
                plainTitle="UAE"
                description="The UAE offers a strategic business location, tax-friendly environment, global connectivity, and excellent opportunities for entrepreneurs, startups, and investors looking to expand internationally."
                imageUrl="/images/about/why-uae-banner.jpg"
                imageAlt="Our team at Meydan Free Zone"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Why UAE' },
                ]}
            />
            <WhyUAESection />
          <CommonBanner
                title="UAE Business Setup Cost Calculator"
                description="Estimate your UAE company formation expenses with our easy business setup cost calculator. Get quick insights into trade license fees, visa costs, office requirements, and company registration expenses for starting your business in Dubai and across the UAE."
                buttonLink="/cost-calculator"
                buttonText="Cost Calculator "
                imageSrc="/images/about/uae.png"
                imageAlt="Contact Us"
            />
            <WhyUAEPoints />
            <Schedule />
        </div>
    )
}

export default page
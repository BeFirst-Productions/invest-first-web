
import CommonBanner from '@/components/Common/Banner/CommonBanner'
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection'
import Schedule from '@/components/sections/Schedule'
import { WhyUAEPoints, WhyUAESection } from '@/components/sections/WhyUAE'
import React from 'react'
import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/why-uae');
    return seo;
}


const page = () => {
    return (
        <div>
            <CommonHeroSection
                highlightedTitle="Why"
                plainTitle="UAE"
                description="The UAE offers a strategic location, tax-friendly environment, and excellent opportunities for entrepreneurs and investors to grow globally."
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
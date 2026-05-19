
import CommonBanner from '@/components/Common/Banner/CommonBanner'
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection'
import Schedule from '@/components/sections/Schedule'
import { WhyUAEPoints, WhyUAESection } from '@/components/sections/WhyUAE'
import React from 'react'


const page = () => {
    return (
        <div>
            <CommonHeroSection
                highlightedTitle="Why"
                plainTitle="UAE"
                description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim"
                imageUrl="/images/about/why-uae-banner.jpg"
                imageAlt="Our team at Meydan Free Zone"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Why UAE' },
                ]}
            />
            <WhyUAESection />
            <CommonBanner
                title="Yorem ipsum dolor sit 
amet, consectetur"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                buttonLink="#"
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
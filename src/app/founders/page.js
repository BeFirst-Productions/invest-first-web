
import CommonBanner from '@/components/Common/Banner/CommonBanner'
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection'
import { MeetFounders, OurTeamsSection } from '@/components/sections/About'
import Schedule from '@/components/sections/Schedule'
import React from 'react'


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
                title="Yorem ipsum dolor sit 
amet, consectetur"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
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
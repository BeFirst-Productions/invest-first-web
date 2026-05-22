import React from 'react'
import CommonBanner from '@/components/Common/Banner/CommonBanner';
import { AboutCompanySection,MissionVision, CoreValues } from '@/components/sections/About';
import Schedule from '@/components/sections/Schedule';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';


const page = () => {
    return (
        <>
           <CommonHeroSection
                highlightedTitle="About"
                plainTitle="Us"
                description="Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim"
                imageUrl="/images/about/about-banner.jpg"
                imageAlt="Our team at Meydan Free Zone"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'About Us' },
                ]}
            />
            <AboutCompanySection />
            <CommonBanner
                title="Yorem ipsum dolor sit amet, consectetur"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
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
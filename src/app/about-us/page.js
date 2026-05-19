import React from 'react'
import CommonBanner from '@/components/Common/Banner/CommonBanner';
import CommonHerosection from '@/components/Common/Banner/CommonHerosection';
import { AboutCompanySection,MissionVision, CoreValues } from '@/components/sections/About';
import Schedule from '@/components/sections/Schedule';


const page = () => {
    return (
        <>
            <CommonHerosection
                title="About Us"
                description="Invest First is a Business Setup Consultant UAE, authorized channel partner of 20 freezones, helping entrepreneurs establish compliant, scalable businesses through corporate guidance."
                cardTitle='Calculate Your Business Setup Cost'
                cardDescription='Get instant UAE business setup cost estimates.'
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
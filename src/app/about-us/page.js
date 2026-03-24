import AboutCompanySection from '@/Components/AboutUs/AboutCompanySection';
import CommonBanner from '@/Components/Common/Banner/CommonBanner'
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection'
import ScheduleMeetingSection from '@/Components/Common/Meeting/ScheduleMeeting'
import MissionVision from '@/Components/AboutUs/MissionVision';
import CoreValues from '@/Components/AboutUs/CoreValues';
import React from 'react'
import Newsletter from '@/Components/Common/Newsletter/Newsletter';

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
                title="Yorem ipsum dolor sit 
amet, consectetur"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                buttonLink="#"
                buttonText="Cost Calculator "
                imageSrc="/assets/images/common/uae.png"
                imageAlt="Contact Us"
            />
            <MissionVision />
            <CoreValues />
            <ScheduleMeetingSection />
            <Newsletter title='Join the Invest First Community' description='Subscribe to receive updates, news, and exclusive business insights that help you stay ahead in the UAE market.' />
        </>
    )
}

export default page 
import MeetFounders from '@/Components/AboutUs/Founders/MeetFounders'
import OurTeamsSection from '@/Components/AboutUs/Founders/OurTeamsSection'
import CommonBanner from '@/Components/Common/Banner/CommonBanner'
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection'
import ScheduleMeetingSection from '@/Components/Common/Meeting/ScheduleMeeting'
import NewsletterSection from '@/Components/HomePage/NewsletterSection'

import React from 'react'

const page = () => {
    return (
        <>
            <CommonHerosection
                title="Founders"
                description="Invest First is led by visionary leaders committed to transforming the business setup landscape in the UAE. Our founders bring decades of expertise and a passion for entrepreneurial success."
            />
            <MeetFounders />
            <CommonBanner
                title="Yorem ipsum dolor sit 
amet, consectetur"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                buttonLink="#"
                buttonText="Cost Calculator "
                imageSrc="/assets/images/common/uae.png"
                imageAlt="Contact Us"
            />
            <OurTeamsSection />
            <ScheduleMeetingSection />
            <NewsletterSection />

        </>
    )
}

export default page
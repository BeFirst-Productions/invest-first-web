
import CommonBanner from '@/components/Common/Banner/CommonBanner'
import CommonHerosection from '@/components/Common/Banner/CommonHerosection'
import Schedule from '@/components/sections/Schedule'
import { WhyUAEPoints, WhyUAESection } from '@/components/sections/WhyUAE'
import React from 'react'

const page = () => {
    return (
        <div>
            <CommonHerosection
                title="Why UAE"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
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
            <Schedule/>
        </div>
    )
}

export default page
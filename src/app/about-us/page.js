import AboutCompanySection from '@/Components/AboutUs/AboutCompanySection';
import CommonBanner from '@/Components/Common/Banner/CommonBanner'
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection'
import ScheduleMeetingSection from '@/Components/Common/Meeting/ScheduleMeeting'
<<<<<<< HEAD
import MissionVision from '@/Components/AboutUs/MissionVision'

=======
import MissionVision from '@/Components/AboutUs/MissionVision';
import CoreValues from '@/Components/AboutUs/CoreValues';
>>>>>>> c774cee830211560faf09f1a9797117c42c11d30
import React from 'react'
import CoreValues from '@/Components/AboutUs/CoreValues'

const page = () => {
    return (
        <>
            <CommonHerosection
                title="About Us"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
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
<<<<<<< HEAD
            <CoreValues/>
=======
            <CoreValues />
>>>>>>> c774cee830211560faf09f1a9797117c42c11d30
            <ScheduleMeetingSection />
        </>
    )
}

export default page 
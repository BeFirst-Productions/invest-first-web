import ContactPage from '@/components/ContactPage/ContactPage';
import React from 'react';

export const metadata = {
    title: "Contact Us | Business Setup in Dubai",
    description: "Contact Invest First for expert business setup in UAE and Dubai. Get assistance with company formation, trade licenses, PRO services, and complete UAE business setup solutions.",
    keywords: "Invest First, business setup in UAE contact, business setup in Dubai, company formation UAE, UAE business consultants, Dubai business setup support, trade license UAE, PRO services UAE, free zone company setup UAE, mainland company formation Dubai, UAE company registration help, start business in Dubai contact, Dubai business setup services",
    alternates: {
        canonical: "https://investfirst.ae/contactus/",
    },
    openGraph: {
        title: "Contact Us | Business Setup in Dubai",
        description: "Contact Invest First for expert business setup in UAE and Dubai. Get assistance with company formation, trade licenses, PRO services, and complete UAE business setup solutions.",
        url: "https://investfirst.ae/contactus/",
        type: "website",
    },
};

const ContactUs = () => {
    return (
        <>
            <ContactPage />
        </>
    );
};

export default ContactUs;

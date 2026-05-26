import ContactPage from '@/components/ContactPage/ContactPage';
import React from 'react';

import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/contact-us');
    return seo;
}


const ContactUs = () => {
    return (
        <>
            <ContactPage />
        </>
    );
};

export default ContactUs;

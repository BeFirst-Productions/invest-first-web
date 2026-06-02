"use client";
import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ContactInfo from './ContactInfo';
import ContactFormMap from './ContactFormMap';
import CommonBanner from '../Common/Banner/CommonBanner';
import CommonHeroSection from '../Common/Banner/CommonHerosection';

const ContactPage = () => {
    const mainRef = useRef(null);

    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            const sections = mainRef.current.children;
            Array.from(sections).forEach((section) => {
                gsap.fromTo(
                    section,
                    { opacity: 0, y: 30 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 85%",
                            toggleActions: "play none none none",
                        },
                    }
                );
            });
        }, mainRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={mainRef} className="">
            <CommonHeroSection
                highlightedTitle="Contact"
                plainTitle="Us"
                description="Get in touch with our experts for reliable business setup in Dubai, mainland company formation in UAE, investor visa assistance, and professional PRO services tailored to your business needs."
                imageUrl="/images/contact/contact-banner.png"
                imageAlt="Contact Us - Get in Touch with Our Team"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Contact Us' },
                ]}
            />
            <ContactInfo />
            <ContactFormMap />
            <CommonBanner
                title="Get Connected Today with Trusted Experts in Business Setup in Dubai"
                description="Connect with our business setup experts in Dubai for reliable support with company formation, investor visa services, mainland company setup in UAE, and professional PRO services tailored to your business goals."
                buttonLink="/cost-calculator"
                buttonText="Cost Calculator "
                imageSrc="/images/about/uae.png"
                imageAlt="Contact Us"
            />
        </div>
    );
};

export default ContactPage;

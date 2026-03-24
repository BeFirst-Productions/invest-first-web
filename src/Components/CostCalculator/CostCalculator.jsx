
"use client";
import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import Timeline from './Timeline';
import BusinessActivity from './Forms/BusinessActivity';
import Jurisdiction from './Forms/Jurisdiction';
import Owners from './Forms/Owners';
import Visa from './Forms/Visa';
import OfficeSpace from './Forms/OfficeSpace';
import ContactDetails from './Forms/ContactDetails';
import Container from '../Common/Layout/Contianer';

const STEPS = [
    { id: 'business', title: 'Business Activity' },
    { id: 'jurisdiction', title: 'Jurisdiction' },
    { id: 'owners', title: 'Owners' },
    { id: 'visa', title: 'Visa' },
    { id: 'officeSpace', title: 'OfficeSpace' },
    { id: 'businessSetup', title: 'Business Setup' },
    { id: 'contact', title: 'Contact Details' },
];

export default function CostCalculator() {
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        businessActivity: '',
        jurisdiction: '',
        owners: '',
        visa: '',
        officeSpace: '',
        contactDetails: null
    });

    const formContainerRef = useRef(null);

    useEffect(() => {
        if (formContainerRef.current) {
            gsap.fromTo(formContainerRef.current,
                { opacity: 0, x: 20 },
                { opacity: 1, x: 0, duration: 0.4, ease: "power2.out" }
            );
        }
    }, [currentStep]);

    const handleNext = () => {
        if (currentStep < STEPS.length - 1) {
            setCurrentStep(prev => prev + 1);
        }
    };

    const handlePrev = () => {
        if (currentStep > 0) {
            setCurrentStep(prev => prev - 1);
        }
    };

    const handleChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleSendWhatsApp = (contactInfo) => {
        // Validation is handled in ContactDetails button disabled state, but we double check here if needed?
        // Actually ContactDetails handles its own local state before passing it back, 
        // OR we can use the 'value' passed in if it's synced.
        // Let's assume contactInfo is passed from ContactDetails on submit, OR we use formData.contactDetails.

        // We will use the contactInfo passed from the child for most up-to-date data
        const finalData = { ...formData, contactDetails: contactInfo };

        const message = `
*New Cost Calculator Inquiry*

*Business Details:*
- Activity: ${finalData.businessActivity}
- Jurisdiction: ${finalData.jurisdiction}
- Owners: ${finalData.owners}
- Visa: ${finalData.visa}
- Office Space: ${finalData.officeSpace}

*Contact Details:*
- Name: ${contactInfo.name}
- Email: ${contactInfo.email}
- Phone: ${contactInfo.phone}
- Nationality: ${contactInfo.nationality}
- Message: ${contactInfo.message}
        `.trim();

        const phoneNumber = "+971588773753"; // Replace with actual number
        const encodedMessage = encodeURIComponent(message);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');

        // Reset form and return to first step after successful "submission" (redirection)
        setTimeout(() => {
            setFormData({
                businessActivity: '',
                jurisdiction: '',
                owners: '',
                visa: '',
                officeSpace: '',
                contactDetails: null
            });
            setCurrentStep(0);
        }, 1000); // Small delay to allow smoother transition UX
    };

    // Decide which component to render
    const renderStep = () => {
        switch (currentStep) {
            case 0:
                return <BusinessActivity onNext={handleNext} value={formData.businessActivity} onChange={handleChange} />;
            case 1:
                return <Jurisdiction onNext={handleNext} onPrev={handlePrev} value={formData.jurisdiction} onChange={handleChange} />;
            case 2:
                return <Owners onNext={handleNext} onPrev={handlePrev} value={formData.owners} onChange={handleChange} />;
            case 3:
                return <Visa onNext={handleNext} onPrev={handlePrev} value={formData.visa} onChange={handleChange} />;
            case 4:
                return <OfficeSpace onNext={handleNext} onPrev={handlePrev} value={formData.officeSpace} onChange={handleChange} />;
            case 5:
                // Transformation step for Business Setup confirmation
                return (
                    <div className="flex flex-col h-full w-full">
                        <h3 className="text-xl md:text-2xl font-semibold mb-6 text-white text-center md:text-left">Review Your Selections</h3>

                        <div className="flex-1 text-gray-300 space-y-4 text-left bg-black/20 p-6 rounded-xl border border-white/10 w-full mb-8">
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Activity</span>
                                <span className="text-cyan-400 font-medium text-right">{formData.businessActivity || "-"}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Jurisdiction</span>
                                <span className="text-cyan-400 font-medium text-right">{formData.jurisdiction || "-"}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Owners</span>
                                <span className="text-cyan-400 font-medium text-right">{formData.owners || "-"}</span>
                            </div>
                            <div className="flex justify-between border-b border-white/10 pb-2">
                                <span>Visa</span>
                                <span className="text-cyan-400 font-medium text-right">{formData.visa || "-"}</span>
                            </div>
                            <div className="flex justify-between pb-2">
                                <span>Office Space</span>
                                <span className="text-cyan-400 font-medium text-right">{formData.officeSpace || "-"}</span>
                            </div>
                        </div>

                        <div className="mt-auto flex justify-between">
                            <button
                                onClick={handlePrev}
                                className="px-6 py-2 rounded-full text-gray-300 font-medium hover:text-white transition-colors flex items-center gap-2"
                            >
                                Previous
                            </button>

                            <button
                                onClick={handleNext}
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600 text-white font-bold shadow-lg hover:shadow-pink-500/50 transition-all"
                            >
                                Calculated Estimate
                            </button>
                        </div>
                    </div>
                );
            case 6:
                return <ContactDetails onPrev={handlePrev} value={formData.contactDetails} onChange={handleChange} onSubmit={handleSendWhatsApp} />;
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen py-10 md:py-20 relative overflow-hidden font-sans">
            {/* Background Gradients/Effects */}

            <Container>
                {/* Header Row: Title on Left, Description on Right */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 mb-12 md:mb-20 items-end">
                    <div className="md:col-span-5 lg:col-span-4">
                        <h2 className="text-3xl md:text-[2.5rem] font-bold leading-tight text-white">
                            Calculate <span className="text-cyan-400">Your</span><br />
                            Business Setup Cost
                        </h2>
                    </div>

                    <div className="md:col-span-7 lg:col-span-8 flex justify-start md:justify-end">
                        <p className=" text-sm md:text-base leading-relaxed max-w-2xl text-left md:text-right">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus. ut interdum tellus elit sed risus. Maecenas eget condimentum velit, sit amet feugiat lectus.
                        </p>
                    </div>
                </div>

                {/* Main Content Row */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 pb-20">

                    {/* Timeline Column */}
                    <div className="md:col-span-5 lg:col-span-4 relative">
                        <div className="sticky top-10">
                            <Timeline steps={STEPS} activeStep={currentStep} />
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="md:col-span-7 lg:col-span-8 flex items-center">
                        {/* Using the requested gradient: bg-gradient-to-b from-[#14293A] to-[#0B223E] */}
                        <div className="w-full bg-linear-to-b from-[#14293A] to-[#0B223E] backdrop-blur-xl border border-gray-800 rounded-3xl p-6 md:p-12 shadow-2xl relative overflow-hidden">
                            {/* Decorative background element inside card */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/2" />

                            <div className="relative z-10 min-h-[400px] flex flex-col justify-center" ref={formContainerRef}>
                                {renderStep()}
                            </div>
                        </div>
                    </div>

                </div>
            </Container>
        </div>
    );
}

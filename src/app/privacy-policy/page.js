import React from 'react';
import SectionContainer from '@/components/layout/SectionContainer';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/privacy-policy');
    return seo;
}

const PrivacyPolicyPage = () => {
    return (
        <main className="bg-slate-50 min-h-screen">
            <CommonHeroSection
                highlightedTitle="Privacy"
                plainTitle="Policy"
                description="Learn how Invest First Business Services collects, protects, and handles your personal information when you use our UAE company formation and corporate services."
                imageUrl="/images/about/about-banner.png"
                imageAlt="Invest First Privacy Policy"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Privacy Policy' },
                ]}
            />

            <section className="py-12 md:py-20 lg:py-24">
                <SectionContainer className="bg-slate-50" containerClassName="max-w-[1200px]">
                    <div className="bg-white rounded-[24px] border border-gray-100 shadow-xl p-8 md:p-12 lg:p-16 text-left font-outfit text-gray-700 space-y-8 leading-relaxed">
                        
                        <div>
                            <p className="text-sm font-semibold text-[#0099CC] uppercase tracking-wider mb-2">Effective Date: May 2026</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">1. Introduction</h2>
                            <p>
                                Welcome to <strong>Invest First Business Services</strong> ("Invest First", "we", "our", or "us"). We respect your privacy and are committed to protecting the personal data of our clients, website visitors, and partners. 
                            </p>
                            <p className="mt-4">
                                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website <a href="https://investfirst.ae" className="text-[#0099CC] hover:underline font-semibold">https://investfirst.ae</a> or engage our company formation, trade licensing, PRO, and visa services in Dubai and across the United Arab Emirates (UAE).
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">2. Information We Collect</h2>
                            <p>We may collect personal information that you voluntarily provide to us when you express interest in our services, submit a contact form, use our cost calculator, or communicate with us. This information includes:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong>Identity Data:</strong> Full name, passport details, nationality, date of birth, and residency status (required for company formation and visa applications).</li>
                                <li><strong>Contact Data:</strong> Email address, phone number, physical address, and WhatsApp contact details.</li>
                                <li><strong>Business Data:</strong> Proposed company names, business activities, shareholding structures, and corporate documents.</li>
                                <li><strong>Technical Data:</strong> IP address, browser type, device information, and pages visited on our website.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">3. How We Use Your Information</h2>
                            <p>We use your personal data to deliver professional services and maintain our relationship with you. Specifically, we use it for:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong>Service Delivery:</strong> Facilitating company registration (Mainland, Free Zone, and Offshore), trade license issuance, PRO transactions, and visa applications with UAE government authorities.</li>
                                <li><strong>Communication:</strong> Responding to inquiries, providing quotes, sending updates on your applications, and sharing news or articles regarding UAE business regulations.</li>
                                <li><strong>Website Improvement:</strong> Analyzing website traffic and performance to enhance user experience and optimize our cost calculator tool.</li>
                                <li><strong>Legal Compliance:</strong> Meeting statutory requirements and anti-money laundering (AML) regulations in the UAE.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">4. Sharing Your Information</h2>
                            <p>
                                We do not sell, trade, or rent your personal information to third parties. However, we may share your data with trusted partners and government entities to complete your requests:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong>UAE Government Authorities:</strong> Such as the Department of Economy and Tourism (DET), Ministry of Human Resources and Emiratisation (MOHRE), Federal Authority for Identity, Citizenship, Customs and Port Security (ICP), and various Free Zone authorities.</li>
                                <li><strong>Authorized Third-Party Partners:</strong> Bank representatives (for corporate bank account opening), legal advisors, and translation services necessary for business setup.</li>
                                <li><strong>Legal Authorities:</strong> When required by law to comply with judicial proceedings, court orders, or regulations from UAE government bodies.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">5. Data Security</h2>
                            <p>
                                We implement robust technical, physical, and organizational security measures to protect your personal data from unauthorized access, disclosure, alteration, or destruction. However, please be aware that no transmission of data over the internet or method of electronic storage can be guaranteed 100% secure.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">6. Data Retention</h2>
                            <p>
                                We will retain your personal information only for as long as is necessary to fulfill the purposes for which it was collected, including for the purposes of satisfying any legal, accounting, or reporting requirements under UAE law.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">7. Your Rights</h2>
                            <p>Depending on your location and applicable data protection laws, you may have the following rights regarding your personal data:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>The right to request access to and receive copies of the personal data we hold about you.</li>
                                <li>The right to request correction of inaccurate or incomplete personal data.</li>
                                <li>The right to request the erasure of your personal data, subject to legal limits under UAE company law.</li>
                                <li>The right to opt-out of marketing communications by clicking the unsubscribe link or contacting us directly.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">8. Changes to This Privacy Policy</h2>
                            <p>
                                We may update this Privacy Policy from time to time to reflect changes in our practices or changes to UAE regulatory frameworks. We will post any changes on this page and update the "Effective Date" at the top of the policy. We encourage you to review this page periodically.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">9. Contact Us</h2>
                            <p>If you have any questions, concerns, or requests regarding this Privacy Policy or how we handle your personal data, please reach out to us at:</p>
                            <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-gray-200 space-y-2 text-sm md:text-base">
                                <p><strong>Company:</strong> Invest First Business Services</p>
                                <p><strong>Office Address:</strong> 3rd Floor-Arzoo Building, Al Qusais, Dubai, UAE</p>
                                <p><strong>Email:</strong> <a href="mailto:info@investfirst.ae" className="text-[#0099CC] hover:underline font-semibold font-outfit">info@investfirst.ae</a></p>
                                <p><strong>Phone:</strong> <a href="tel:+971588773753" className="text-[#0099CC] hover:underline font-semibold font-outfit">+971 58 877 3753</a></p>
                            </div>
                        </div>

                    </div>
                </SectionContainer>
            </section>
        </main>
    );
};

export default PrivacyPolicyPage;

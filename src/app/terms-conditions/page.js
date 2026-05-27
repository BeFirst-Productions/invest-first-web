import React from 'react';
import SectionContainer from '@/components/layout/SectionContainer';
import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/terms-conditions');
    return seo;
}

const TermsConditionsPage = () => {
    return (
        <main className="bg-slate-50 min-h-screen">
            <CommonHeroSection
                highlightedTitle="Terms &"
                plainTitle="Conditions"
                description="Review the terms and conditions governing the business setup, licensing, and corporate support services provided by Invest First Business Services."
                imageUrl="/images/about/about-banner.png"
                imageAlt="Invest First Terms and Conditions"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Terms & Conditions' },
                ]}
            />

            <section className="py-12 md:py-20 lg:py-24">
                <SectionContainer className="bg-slate-50" containerClassName="max-w-[1200px]">
                    <div className="bg-white rounded-[24px] border border-gray-100 shadow-xl p-8 md:p-12 lg:p-16 text-left font-outfit text-gray-700 space-y-8 leading-relaxed">
                        
                        <div>
                            <p className="text-sm font-semibold text-[#0099CC] uppercase tracking-wider mb-2">Effective Date: May 2026</p>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">1. Agreement to Terms</h2>
                            <p>
                                By accessing our website <a href="https://investfirst.ae" className="text-[#0099CC] hover:underline font-semibold">https://investfirst.ae</a> or engaging the services of <strong>Invest First Business Services</strong> ("Invest First", "we", "our", or "us"), you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, you are prohibited from using our site or services.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">2. Scope of Services</h2>
                            <p>
                                Invest First provides consulting and operational services related to corporate services and business setup in the United Arab Emirates, including:
                            </p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Mainland, Free Zone, and Offshore company registration.</li>
                                <li>Trade license applications, renewals, and amendments.</li>
                                <li>PRO services, government relations, and visa processing.</li>
                                <li>Corporate bank account opening assistance.</li>
                                <li>Office space solutions (Virtual, Flexi Desk, and Physical office registrations).</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">3. Client Responsibilities</h2>
                            <p>To ensure a smooth business incorporation and visa processing experience, the Client agrees to:</p>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li>Provide complete, accurate, and truthful documentation (e.g., passports, bank reference letters, business profile details).</li>
                                <li>Duly pay all government fees, license costs, visa charges, and consultancy fees in a timely manner.</li>
                                <li>Ensure their intended business activities align with UAE regulations and licensing requirements.</li>
                                <li>Hold responsibility for any delays or rejections caused by inaccurate or delayed document submissions.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">4. Payments, Government Fees, and Refunds</h2>
                            <ul className="list-disc pl-6 mt-4 space-y-2">
                                <li><strong>Service Fees:</strong> Payment for consulting and PRO services must be paid as per the agreed service contract.</li>
                                <li><strong>Government Outlays:</strong> Government fees (such as registration fees, security deposits, visa fees) are determined by respective authorities and are non-refundable once paid to government portals.</li>
                                <li><strong>Refund Policy:</strong> Our consultancy fees are non-refundable once work has commenced or registration documents have been drafted. If a company registration is rejected by government authorities due to security checks or policy shifts, refunds will be subject to the terms of the individual service agreement.</li>
                            </ul>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">5. Rejection by Authorities</h2>
                            <p>
                                The Client acknowledges that the approval of trade licenses, company names, business activities, corporate bank accounts, and visas is at the sole discretion of the respective UAE government departments and banking institutions. Invest First will use its professional expertise to facilitate these processes, but cannot guarantee approval. We are not liable for any losses arising from rejections by government bodies or banks.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">6. Intellectual Property</h2>
                            <p>
                                Unless otherwise indicated, all content on our website (including text, graphics, logos, software, and UI design) is the proprietary property of Invest First and is protected by copyright and trademark laws. You are granted a limited license to access the site for personal, non-commercial use only.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">7. Limitation of Liability</h2>
                            <p>
                                In no event shall Invest First, its directors, or employees be liable for any direct, indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, or from changes in UAE government rules and regulations that affect your business status.
                            </p>
                        </div>

                        <div>
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">8. Governing Law</h2>
                            <p>
                                These Terms and Conditions shall be governed by and construed in accordance with the laws of the Emirate of Dubai and the federal laws of the United Arab Emirates. Any dispute arising out of or in connection with these terms shall be subject to the exclusive jurisdiction of the courts of Dubai.
                            </p>
                        </div>

                        <div className="pt-8 border-t border-gray-100">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">9. Contact Information</h2>
                            <p>If you have any questions or require clarification regarding these Terms and Conditions, please contact us at:</p>
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

export default TermsConditionsPage;

import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import CommonHeroSection from "@/components/Common/Banner/CommonHerosection";
import { getSeoMetadata } from "@/services/seoService";

export async function generateMetadata() {
  const seo = await getSeoMetadata("/privacy-policy");
  return seo;
}

const PrivacyPolicyPage = () => {
  return (
    <main className="bg-slate-50 min-h-screen">
      <CommonHeroSection
        highlightedTitle="Privacy"
        plainTitle="Policy"
        description="Learn how Invest First Business Services collects, protects, and handles your personal information when you use our UAE company formation and corporate services."
        imageUrl="/images/documents/privacy-policy-banner.jpg"
        imageAlt="Invest First Privacy Policy"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy" },
        ]}
      />

      <section className="py-12 md:py-20 lg:py-24">
        <SectionContainer
          className="bg-slate-50"
          containerClassName="max-w-[1200px]"
        >
          <div className="bg-white rounded-[24px] border border-gray-100 shadow-xl p-8 md:p-12 lg:p-16 text-left font-outfit text-gray-700 space-y-8 leading-relaxed">
            <div>
              <p>
                At Invest First, we are committed to protecting your privacy and
                safeguarding the personal information you share with us. This
                Privacy Policy explains how we collect, use, store, and protect
                your information when you visit our website or use our business
                setup, visa, taxation, and corporate support services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                1. Information We Collect
              </h2>
              <p>
                We may collect personal information that you voluntarily provide
                when you:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Submit contact forms</li>
                <li>Request consultations or services</li>
                <li>Subscribe to newsletters or updates</li>
                <li>Communicate with our team</li>
              </ul>
              <p className="mt-6">The information collected may include:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Company details</li>
                <li>Business requirements</li>
                <li>
                  Any information provided in inquiries or service requests
                </li>
              </ul>
              <p className="mt-6">
                We may also collect non-personal information such as IP
                addresses, browser type, device information, and website usage
                data.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                2. How We Use Your Information
              </h2>
              <p>We use your information to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Provide business setup and corporate support services</li>
                <li>Process inquiries and service requests</li>
                <li>
                  Communicate regarding consultations, proposals, and updates
                </li>
                <li>Improve our website functionality and user experience</li>
                <li>
                  Comply with legal, regulatory, and government requirements
                </li>
                <li>Maintain internal business records</li>
              </ul>
              <p className="mt-6">
                We do not sell, rent, or trade your personal information to
                third parties.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                3. Data Protection and Security
              </h2>
              <p>
                Invest First implements industry-standard security measures to
                protect your personal information from unauthorized access,
                misuse, disclosure, or alteration. Security measures may include
                secure servers, encrypted communications, and restricted access
                to sensitive data.
              </p>
              <p className="mt-4">
                While we take reasonable precautions, no online transmission or
                storage system can be guaranteed to be completely secure.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                4. Cookies Policy
              </h2>
              <p>Our website may use cookies and similar technologies to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Enhance website functionality</li>
                <li>Analyze website traffic</li>
                <li>Improve user experience</li>
                <li>Remember visitor preferences</li>
              </ul>
              <p className="mt-6">
                You may disable cookies through your browser settings; however,
                some website features may not function properly.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                5. Third-Party Services
              </h2>
              <p>
                We may use trusted third-party service providers such as
                analytics platforms, payment processors, marketing tools, and
                social media integrations to support our operations.
              </p>
              <p className="mt-4">
                These third-party providers maintain their own privacy policies,
                and Invest First is not responsible for their independent data
                handling practices.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                6. Your Rights
              </h2>
              <p>You may have the right to:</p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Access your personal information</li>
                <li>Request correction of inaccurate information</li>
                <li>
                  Request deletion of your information where legally permissible
                </li>
                <li>Withdraw consent for certain communications</li>
                <li>
                  Request information regarding how your data is processed
                </li>
              </ul>
              <p className="mt-6">
                To exercise any of these rights, please contact us using the
                details provided below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                7. Data Retention
              </h2>
              <p>
                We retain personal information only for as long as necessary to
                provide services, meet contractual obligations, comply with
                legal requirements, and maintain legitimate business records.
              </p>
              <p className="mt-4">
                Once retention is no longer required, information is securely
                deleted or anonymized.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                8. International Data Transfers
              </h2>
              <p>
                As an international business services provider, your information
                may be processed or stored in countries outside your country of
                residence.
              </p>
              <p className="mt-4">
                Where such transfers occur, we take appropriate measures to
                ensure compliance with applicable data protection laws and
                maintain adequate safeguards for your information.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                9. Updates to This Privacy Policy
              </h2>
              <p>
                Invest First may update this Privacy Policy periodically to
                reflect changes in legal requirements, business practices, or
                website functionality.
              </p>
              <p className="mt-4">
                Any updates will be posted on this page along with the revised
                effective date.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                10. Contact Us
              </h2>
              <p>
                If you have any questions regarding this Privacy Policy or the
                handling of your personal information, please contact us:
              </p>
              <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-gray-200 space-y-2 text-sm md:text-base">
                <p>
                  <strong>Invest First</strong>
                </p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a
                    href="mailto:info@investfirst.ae"
                    className="text-[#0099CC] hover:underline font-semibold font-outfit"
                  >
                    info@investfirst.ae
                  </a>
                </p>
              </div>
              <p className="mt-6 text-sm font-semibold text-gray-500">
                By using our website and services, you agree to the terms
                outlined in this Privacy Policy.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>
    </main>
  );
};

export default PrivacyPolicyPage;

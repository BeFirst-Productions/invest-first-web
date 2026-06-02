import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import CommonHeroSection from "@/components/Common/Banner/CommonHerosection";
import { getSeoMetadata } from "@/services/seoService";

export async function generateMetadata() {
  const seo = await getSeoMetadata("/terms-and-conditions");
  return seo;
}

const TermsConditionsPage = () => {
  return (
    <main className="bg-slate-50 min-h-screen">
      <CommonHeroSection
        highlightedTitle="Terms &"
        plainTitle="Conditions"
        description="Review the terms and conditions governing the business setup, licensing, and corporate support services provided by Invest First Business Services."
        imageUrl="/images/documents/terms-banner.jpg"
        imageAlt="Invest First Terms and Conditions"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Terms & Conditions" },
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
                Please read these Terms & Conditions carefully before using our
                website and services. By accessing our website or engaging with
                Invest First, you agree to be bound by the terms outlined below.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                1. Acceptance of Terms
              </h2>
              <p>
                By accessing and using the Invest First website and services,
                you acknowledge and agree to comply with these Terms &
                Conditions. If you do not agree with any part of these terms,
                you should discontinue use of our website and services.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                2. Use of the Website
              </h2>
              <p>
                You agree to use this website only for lawful purposes and in
                accordance with applicable laws and regulations. You may not:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Engage in illegal, fraudulent, or misleading activities</li>
                <li>
                  Upload or transmit viruses, malware, or harmful software
                </li>
                <li>Attempt unauthorized access to website systems or data</li>
                <li>
                  Infringe upon intellectual property or legal rights of others
                </li>
                <li>
                  Use the website for spam, unsolicited communications, or
                  abusive conduct
                </li>
              </ul>
              <p className="mt-6">
                Invest First reserves the right to suspend or terminate access
                to users who violate these terms.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                3. Services
              </h2>
              <p>
                Invest First provides business setup, company formation, visa
                assistance, corporate tax assistance, VAT services, banking
                assistance, legal translation, attestation, insurance support,
                and other business-related consultancy services within the UAE.
              </p>
              <p className="mt-4">
                Service availability, requirements, timelines, and approvals may
                vary depending on government regulations and third-party
                authorities.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                4. Intellectual Property Rights
              </h2>
              <p>
                All content available on this website, including text, graphics,
                logos, images, videos, documents, designs, and branding
                materials, is the property of Invest First and is protected
                under applicable intellectual property and copyright laws.
              </p>
              <p className="mt-4">
                No content may be copied, reproduced, modified, distributed, or
                republished without prior written consent.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                5. Service Disclaimer
              </h2>
              <p>
                Invest First strives to provide accurate and updated
                information; however, we do not guarantee the completeness,
                accuracy, or reliability of all website content.
              </p>
              <p className="mt-4">
                Government regulations, licensing requirements, visa policies,
                and business setup procedures may change without notice. Clients
                are advised to verify information before making business
                decisions.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                6. Limitation of Liability
              </h2>
              <p>
                Invest First shall not be liable for any direct, indirect,
                incidental, special, or consequential damages arising from:
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li>Use or inability to use our website</li>
                <li>
                  Delays caused by government authorities or third parties
                </li>
                <li>Changes in laws, regulations, or licensing requirements</li>
                <li>Technical interruptions or website downtime</li>
                <li>
                  Decisions made based on information provided on the website
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                7. Third-Party Services and Links
              </h2>
              <p>
                Our website may contain links to third-party websites or
                services for your convenience.
              </p>
              <p className="mt-4">
                Invest First does not control, endorse, or assume responsibility
                for the content, privacy policies, or practices of third-party
                websites or service providers.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                8. Payment Terms
              </h2>
              <p>
                All fees must be paid according to approved quotations,
                invoices, or service agreements.
              </p>
              <p className="mt-4">
                Government fees, third-party charges, and processing fees are
                subject to change without prior notice.
              </p>
              <p className="mt-4">
                Payments made for completed services, government charges, or
                third-party expenses are generally non-refundable.
              </p>
              <p className="mt-4">
                Refund requests, where applicable, are subject to review and
                approval by Invest First.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                9. Confidentiality
              </h2>
              <p>
                Invest First respects client confidentiality and takes
                reasonable measures to protect personal and business information
                shared during service delivery.
              </p>
              <p className="mt-4">
                However, information may be disclosed when required by law,
                regulatory authorities, or government agencies.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                10. Governing Law
              </h2>
              <p>
                These Terms & Conditions shall be governed by and interpreted in
                accordance with the laws of the United Arab Emirates.
              </p>
              <p className="mt-4">
                Any disputes arising from the use of this website or our
                services shall be subject to the exclusive jurisdiction of the
                competent courts of the UAE.
              </p>
            </div>

            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                11. Amendments
              </h2>
              <p>
                Invest First reserves the right to update, modify, or revise
                these Terms & Conditions at any time without prior notice.
              </p>
              <p className="mt-4">
                Continued use of our website or services following any updates
                constitutes acceptance of the revised terms.
              </p>
            </div>

            <div className="pt-8 border-t border-gray-100">
              <h2 className="text-2xl md:text-3xl font-bold text-[#000F2B] mb-4">
                12. Contact Us
              </h2>
              <p>
                If you have any questions regarding these Terms & Conditions,
                please contact us:
              </p>
              <div className="mt-4 p-6 bg-slate-50 rounded-2xl border border-gray-200 space-y-2 text-sm md:text-base">
                <p>
                  <strong>Company:</strong> Invest First
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
                <p>
                  <strong>Call:</strong>{" "}
                  <a
                    href="tel:+971588773753"
                    className="text-[#0099CC] hover:underline font-semibold font-outfit"
                  >
                    +971 58 877 3753
                  </a>
                </p>
              </div>
              <p className="mt-6 text-sm font-semibold text-gray-500">
                By using our website and services, you acknowledge that you have
                read, understood, and agreed to these Terms & Conditions.
              </p>
            </div>
          </div>
        </SectionContainer>
      </section>
    </main>
  );
};

export default TermsConditionsPage;

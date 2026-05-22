import { notFound } from "next/navigation";
import React from "react";
import { mainlandDetailedData } from "@/data/mainlandData";
import CommonHeroSection from "@/components/Common/Banner/CommonHerosection";
import {
  MainlandCostFactors,
  MainlandDocumentsPill,
  MainlandLicenseTypes,
  MainlandLocationIntro,
  MainlandSetupProcess,
} from "@/components/sections/Mainland";
import FAQAccordion from "@/components/Common/FAQAccordion";
import WhyChooseSection from "@/components/Common/WhyChoose";


const VALID_SLUGS = ["dubai", "abu-dhabi"];

export async function generateStaticParams() {
  return VALID_SLUGS.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = mainlandDetailedData[slug];

  if (!service) {
    return {
      title: "Mainland Company Formation | Invest First",
      description:
        "Professional mainland business setup services in Dubai and UAE.",
    };
  }

  return {
    title: `${service.bannerTitle} | Invest First`,
    description: `Get your ${service.bannerTitle} in the UAE quickly and easily with Invest First's expert setup services.`,
  };
}

const MainlandLocationDetailPage = async ({ params }) => {
  const { slug } = await params;

  if (!VALID_SLUGS.includes(slug)) {
    notFound();
  }

  const service = mainlandDetailedData[slug];

  return (
    <main className="">
      <CommonHeroSection
        highlightedTitle={service.bannerTitle}
        plainTitle=" "
        // description={`Expert assistance in establishing your presence in ${slug.replace('-', ' ')} and across the UAE.`}
        description={service.bannerDescription}
        imageUrl="/images/about/about-banner.jpg"
        imageAlt="Our team at Meydan Free Zone"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Mainland" },
          { label: "About Us" },
        ]}
      />

      <MainlandLocationIntro data={service.intro} />

      {service.typesOfLicenses && (
        <MainlandLicenseTypes data={service.typesOfLicenses} />
      )}

      {service.setupProcess && (
        <MainlandSetupProcess data={service.setupProcess} />
      )}

      {service.documentsPill && (
        <MainlandDocumentsPill data={service.documentsPill} />
      )}

      {service.costFactors && (
        <MainlandCostFactors data={service.costFactors} />
      )}

      {service.whyChoose && <WhyChooseSection data={service.whyChoose} />}

      {service.faqs && (
        <FAQAccordion
          title={service.faqs.title}
          faqItems={service.faqs.faqItems}
        />
      )}
    </main>
  );
};

export default MainlandLocationDetailPage;

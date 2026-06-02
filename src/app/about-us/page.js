import React from "react";
import CommonBanner from "@/components/Common/Banner/CommonBanner";
import {
  AboutCompanySection,
  MissionVision,
  CoreValues,
} from "@/components/sections/About";
import Schedule from "@/components/sections/Schedule";
import CommonHeroSection from "@/components/Common/Banner/CommonHerosection";
import { getSeoMetadata } from "@/services/seoService";

export async function generateMetadata() {
  const seo = await getSeoMetadata("/about-us");
  return seo;
}

const page = () => {
  return (
    <>
      <CommonHeroSection
        highlightedTitle="About"
        plainTitle="Us"
        description="We are a trusted business setup company in the UAE, providing company formation, trade license, visa services, and PRO solutions for startups and investors."
        imageUrl="/images/about/about-banner.png"
        imageAlt="Our team at Meydan Free Zone"
        breadcrumbs={[{ label: "Home", href: "/" }, { label: "About Us" }]}
      />
      <AboutCompanySection />
      <CommonBanner
        title="UAE Business Setup Cost Calculator"
        description="Estimate your UAE company formation expenses with our easy business setup cost calculator. Get quick insights into trade license fees, visa costs, office requirements, and company registration expenses for starting your business in Dubai and across the UAE."
        buttonLink="/cost-calculator"
        buttonText="Cost Calculator "
        imageSrc="/images/about/uae.png"
        imageAlt="Contact Us"
      />
      <MissionVision />
      <CoreValues />
      <Schedule />
    </>
  );
};

export default page;

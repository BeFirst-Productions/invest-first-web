import Hero from "@/components/sections/Hero/index";
import About from "@/components/sections/About/index";
import Partners from "@/components/sections/Partners/index";
import Services from "@/components/sections/Services/index";
import OurServices from "@/components/sections/OurServices/index";
import LicenseCategory from "@/components/sections/LicenseCategory/index";
import Pricing from "@/components/sections/Pricing/index";
import QuoteSection from "@/components/sections/QuoteSection/index";
import SetupCost from "@/components/sections/SetupCost/index";
import Schedule from "@/components/sections/Schedule/index";
import FAQ from "@/components/sections/FAQ/index";
import Testimonials from "@/components/sections/Testimonials/index";
import SocialMedia from "@/components/sections/SocialMedia/index";
import Blog from "@/components/sections/Blog/index";
import ScrollWordReveal from "@/components/sections/scroll";
import { ZoneCards } from "@/components/sections/Zonecards";

import { getSeoMetadata } from "@/services/seoService";

export async function generateMetadata() {
  const seo = await getSeoMetadata("/");
  return seo;
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <About />
      <Partners />
      <ZoneCards />
      <ScrollWordReveal />
      <OurServices />
      <QuoteSection />
      <LicenseCategory />
      <Services />
      <Schedule />
      <Pricing />
      <Testimonials />
      <Blog />
      <SetupCost />
      <FAQ />
      <SocialMedia />
    </main>
  );
}

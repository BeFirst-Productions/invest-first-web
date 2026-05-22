import Hero from '@/components/sections/Hero/index';
import About from '@/components/sections/About/index';
import Partners from '@/components/sections/Partners/index';
import Services from '@/components/sections/Services/index';
import OurServices from '@/components/sections/OurServices/index';
import LicenseCategory from '@/components/sections/LicenseCategory/index';
import Pricing from '@/components/sections/Pricing/index';
import QuoteSection from '@/components/sections/QuoteSection/index';
import SetupCost from '@/components/sections/SetupCost/index';
import Schedule from '@/components/sections/Schedule/index';
import FAQ from '@/components/sections/FAQ/index';
import Testimonials from '@/components/sections/Testimonials/index';
import SocialMedia from '@/components/sections/SocialMedia/index';
import Blog from '@/components/sections/Blog/index';
import ScrollWordReveal from '@/components/sections/scroll';
import { ZoneCards } from '@/components/sections/Zonecards';




export const metadata = {
  title: 'InvestFirst Business Services | Company Formation UAE',
  description:
    'InvestFirst provides expert company formation and business services. Establish your business in the UAE with confidence.',
  alternates: {
    canonical: 'https://yourdomain.com',
  },
  openGraph: {
    title: 'InvestFirst Business Services',
    description: 'Expert company formation and business services in the UAE.',
    url: 'https://yourdomain.com',
    siteName: 'InvestFirst',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <main>

      <Hero />
      <About />
      <Partners />
      <ZoneCards/>
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
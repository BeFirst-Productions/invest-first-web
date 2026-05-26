import CommonHeroSection from '@/components/Common/Banner/CommonHerosection';
import CostCalculator from '@/components/CostCalculator/CostCalculator';
import Schedule from '@/components/sections/Schedule';

import { getSeoMetadata } from '@/services/seoService';

export async function generateMetadata() {
    const seo = await getSeoMetadata('/cost-calculator');
    return seo;
}


export default function CostCalculatorPage() {
    return (
        <main className="">
            <CommonHeroSection
                highlightedTitle="Cost"
                plainTitle="Calculator"
                description="Calculate your business setup cost in UAE with Invest First."
                imageUrl="/images/costCalculator/costcalculator-banner.png"
                imageAlt="Business Setup Cost Calculator"
                breadcrumbs={[
                    { label: 'Home', href: '/' },
                    { label: 'Cost Calculator', href: '/cost-calculator' }
                ]}
            />
            <CostCalculator />
            <Schedule />
        </main>
    );
}

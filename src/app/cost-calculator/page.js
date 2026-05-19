
import InnerHero from '@/components/Common/InnerHero';
import CostCalculator from '@/components/CostCalculator/CostCalculator';
import Schedule from '@/components/sections/Schedule';

export const metadata = {
    title: "Cost Calculator | Invest First",
    description: "Calculate your business setup cost in UAE with Invest First.",
};

export default function CostCalculatorPage() {
    return (
        <main className="">
            <InnerHero title="Cost Calculator" description="Calculate your business setup cost in UAE with Invest First." />
            <CostCalculator />
            <Schedule/>
        </main>
    );
}

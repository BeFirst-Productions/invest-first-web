
import CommonHerosection from '@/Components/Common/Banner/CommonHerosection';
import ScheduleMeetingSection from '@/Components/Common/Meeting/ScheduleMeeting';
import CostCalculator from '@/Components/CostCalculator/CostCalculator';

export const metadata = {
    title: "Cost Calculator | Invest First",
    description: "Calculate your business setup cost in UAE with Invest First.",
};

export default function CostCalculatorPage() {
    return (
        <main className="">
            <CommonHerosection title="Cost Calculator" description="Calculate your business setup cost in UAE with Invest First." />
            <CostCalculator />
            <ScheduleMeetingSection/>
        </main>
    );
}

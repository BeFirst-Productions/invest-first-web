
import React from 'react';
import ServiceCard from '../cards/ServiceCard';
import {
    Building2,
    Settings,
    CreditCard,
    Landmark,
    Calculator,
    FileText,
    FileCheck,
    XCircle,
    ArrowRight
} from 'lucide-react';


const services = [
    {
        number: "01",
        title: "Business Setup",
        description: "Complete UAE business setup services ensuring smooth incorporation, licensing, compliance, and fast market entry.",
        image: "/assets/images/services/business.svg",
        icon: <Building2 className="text-white w-6 h-6" />,
        link: "/services/business-setup"
    },
    {
        number: "02",
        title: "PRO Services",
        description: "Reliable UAE PRO services for seamless government approvals, documentation, renewals, and regulatory compliance.",
        image: "/assets/images/services/settings.svg",
        icon: <Settings className="text-white w-6 h-6" />,
        link: "/services/pro-services"
    },
    {
        number: "03",
        title: "Visa Services",
        description: "UAE visa service handling investor, employment, family visa with accuracy, compliance, and quick approvals.",
        image: "/assets/images/services/visa.svg",
        icon: <CreditCard className="text-white w-6 h-6" />,
        link: "/services/visa-services"
    },
    {
        number: "04",
        title: "Corporate Bank Account Opening",
        description: "Corporate bank account opening in UAE with expert support for documentation, compliance, and approvals.",
        image: "/assets/images/services/corporate Account.svg",
        icon: <Landmark className="text-white w-6 h-6" />,
        link: "/services/bank-account"
    },
    {
        number: "05",
        title: "VAT & Accounting",
        description: "Professional VAT registration and accounting services in UAE ensuring compliance, reporting, and financial clarity.",
        image: "/assets/images/services/Bank.svg",
        icon: <Calculator className="text-white w-6 h-6" />,
        link: "/services/accounting"
    },
    {
        number: "06",
        title: "Trade License Renewal",
        description: "Timely UAE trade license renewal services preventing penalties and ensuring uninterrupted business operations.",
        image: "/assets/images/services/Passport.svg",
        icon: <FileText className="text-white w-6 h-6" />,
        link: "/services/license-renewal"
    },
    {
        number: "07",
        title: "Document Clearing & Attestation",
        description: "Document clearing and attestation services in UAE for legal, educational, and commercial documents.",
        image: "/assets/images/services/PDF.svg",
        icon: <FileCheck className="text-white w-6 h-6" />,
        link: "/services/document-clearing"
    },
    {
        number: "08",
        title: "Company Liquidation",
        description: "UAE company liquidation services ensuring compliant closure, settlements, and government approvals without delays.",
        image: "/assets/images/services/UpToDate.svg",
        icon: <XCircle className="text-white w-6 h-6" />,
        link: "/services/liquidation"
    }
];

const ServicesSection = () => {
    return (
        <section className="relative w-full py-12 md:py-20 px-2 md:px-8 lg:px-16 overflow-hidden flex justify-center">
            {/* Background elements if needed */}

            <div
                className="w-full max-w-[1380px] rounded-[18px] p-4 md:p-12 relative"
                style={{
                    background: 'linear-gradient(180deg, #0B223E 0%, #14293A 100%)',
                }}
            >
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 items-stretch">

                    {/* Title Block (Spans 2 columns on lg) */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-2 w-full h-full flex flex-col justify-center items-start p-2 md:p-4">
                        <span className="text-[#0093e9] font-medium tracking-wider mb-2 text-sm md:text-base">» Our Services «</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                            Get Our Exclusive <br /> Services
                        </h2>
                        {/* Optional Description or Decor */}
                    </div>

                    {/* Mapped Service Cards */}
                    {services.map((service, index) => {
                        // Layout Logic:
                        // Row 1: Title (2), 01, 02
                        // Row 2: 03, 04, 05 (Center? Gap?)
                        // To mimic the image where 03, 04, 05 are roughly centered or consistent,
                        // we might need specific col-place logic.
                        // But standard flow is safe.
                        return (
                            <React.Fragment key={index}>
                                <ServiceCard {...service} />
                                {/* Layout Spacer: Force standard 4-col grid flow to skip the last slot of Row 2 */}
                                {/* Row 1: Header(2), 01, 02 -> Full */}
                                {/* Row 2: 03, 04, 05 -> Spacer needed for 4th slot to push 06 to Row 3? */}
                                {/* Actually, grid auto-placement fills slots. 03->Col1, 04->Col2, 05->Col3. Next is Col4. */}
                                {/* If we want 06 to start on Row 3 Col 1, we must fill Col 4 with empty or use col-start. */}
                                {/* We insert an empty block after index 4 (which is the 5th item "05") */}
                                {index === 4 && <div className="hidden lg:block w-full h-full"></div>}
                            </React.Fragment>
                        );
                    })}

                    {/* View More Card (Last Item) */}
                    <ServiceCard
                        title={
                            <>
                                View More <br /> Services
                            </>
                        }
                        description=""
                        number="view-more"
                        icon={<ArrowRight className="text-white w-6 h-6" />}
                        link="/services"
                        isViewMore={true}
                    />

                </div>
            </div>
        </section >
    );
};

export default ServicesSection;

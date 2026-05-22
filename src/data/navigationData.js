export const companyFormationItems = [
    {
        name: "Mainland",
        href: "/mainland",
        children: [
            { name: "Dubai", href: "/mainland/dubai" },
            { name: "Abu Dhabi", href: "/mainland/abu-dhabi" },
        ]
    },
    {
        name: "Free Zones",
        href: "/freezone",
        children: [
            {
                name: "Dubai",
                href: "#",
                children: [
                    { name: "Meydan Free Zone", href: "#" },
                    { name: "IFZA Free Zone", href: "#" },
                    { name: "DMCC Free Zone", href: "#" },
                    { name: "Jebel Ali (JAFZA)", href: "#" },
                    { name: "DDA Free Zones", href: "#" },
                    { name: "Dubai Airport (DAFZA)", href: "#" },
                    { name: "DIFC", href: "#" },
                    { name: "Dubai South", href: "#" },
                    { name: "Dubai Healthcare City", href: "#" },
                ]
            },
            {
                name: "Abu Dhabi",
                href: "#",
                children: [
                    { name: "Masdar City", href: "#" },
                    { name: "Abu Dhabi Airport Free Zone", href: "#" },
                ]
            },
            {
                name: "Sharjah",
                href: "#",
                children: [
                    { name: "Sharjah Media City (SHAMS)", href: "#" },
                    { name: "Sharjah Publishing City (SPCFZ)", href: "#" },
                    { name: "SRTIP Free Zone", href: "#" },
                    { name: "Hamriyah Free Zone", href: "#" },
                ]
            },
            { name: "Ajman", href: "#" },
            { name: "Umm Al Quwain", href: "#" },
            { name: "Ras Al Khaimah", href: "#" },
        ]
    },
    {
        name: "Offshore",
        href: "/offshore",
    }
];

export const navLinks = [
    {
        name: "About Us",
        href: "/about-us",
        children: [
            { name: "About the Company", href: "/about-us" },
            { name: "The Founders", href: "/founders" },
            { name: "Why UAE?", href: "/why-uae" }
        ]
    },
    { name: "Company Formation", href: "#", children: companyFormationItems },
    {
        name: "Services",
        href: "/services",
        children: [
            {
                name: "PRO Services",
                href: "/services/pro-services/virtual-pro",
                children: [
                    { name: "Virtual PRO", href: "/services/pro-services/virtual-pro" },
                    { name: "Local Sponsorships", href: "/services/pro-services/local-sponsorships" },
                    { name: "License Renewals", href: "/services/pro-services/license-renewals" },
                    { name: "Visa Renewals", href: "/services/pro-services/visa-renewals" },
                    { name: "Banking Assistance", href: "/services/pro-services/banking-assistance" },
                    { name: "Office Solutions", href: "/services/pro-services/office-solutions" },
                ]
            },
            {
                name: "Visa Services",
                href: "#",
                children: [
                    { name: "Investor Visa", href: "/services/visa-services/investor-visa" },
                    { name: "Employment Visa", href: "/services/visa-services/employment-visa" },
                    { name: "Dependent Visa", href: "/services/visa-services/dependent-visa" },
                    { name: "Golden Visa", href: "/services/visa-services/golden-visa" },
                    { name: "Green Visa", href: "/services/visa-services/green-visa" },
                    { name: "Blue Visa", href: "/services/visa-services/blue-visa" },
                    { name: "Remote Work Visa", href: "/services/visa-services/remote-work-visa" },
                    { name: "Tourist/Visit Visa", href: "/services/visa-services/tourist-visit-visa" },
                ]
            },
            { name: "Government Approvals", href: "/services/government-approvals" },
            {
                name: "Document Services",
                href: "#",
                children: [
                    { name: "Attestation Services", href: "/services/document-services/attestation-services" },
                    { name: "Legal Translation", href: "/services/document-services/legal-translation" },
                    { name: "Typing Services", href: "/services/document-services/typing-services" },
                ]
            },
            {
                name: "License Services",
                href: "#",
                children: [
                    { name: "Professional License", href: "/services/license-services/professional-license" },
                    { name: "Commercial License", href: "/services/license-services/commercial-license" },
                    { name: "Industrial License", href: "/services/license-services/industrial-license" },
                    { name: "E-Trader License", href: "/services/license-services/e-trader-license" },
                    { name: "Tourism / Travel License", href: "/services/license-services/tourism-travel-license" },
                ]
            },
            {
                name: "Value-Added Services",
                href: "/services/value-added-services",
                children: [
                    { name: "VAT & Corporate Tax Assistance", href: "/services/value-added-services/vat-corporate-tax" },
                    { name: "Medical Insurance Assistance", href: "/services/value-added-services/medical-insurance" },
                    { name: "Trademark Registration", href: "/services/value-added-services/trademark-registration" },
                    { name: "Branding and Design Services", href: "/services/value-added-services/branding-design" },
                    { name: "Digital Marketing Services", href: "/services/value-added-services/digital-marketing" },
                    { name: "Web Design & Development", href: "/services/value-added-services/web-development" },
                ]
            },
        ]
    },
    {
        name: "Resources",
        href: "#",
        children: [
            { name: "News & Updates", href: "#" },
            { name: "Blogs & Articles", href: "/blogs" },
            { name: "Downloads", href: "#" }
        ]
    },
    { name: "Contact Us", href: "/contact-us" },
];

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
        children: [
            { name: "JAFZA Offshore", href: "/offshore/jafza-offshore" },
            { name: "RAKICC Offshore", href: "/offshore/rakicc-offshore" },
            { name: "Ajman Offshore", href: "/offshore/ajman-offshore" },
        ]
    }
];

export const navItems = [
    { name: "Home", href: "/" },
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
                href: "/pro-services/virtual-pro",
                children: [
                    { name: "Virtual PRO", href: "/pro-services/virtual-pro" },
                    { name: "Local Sponsorships", href: "/pro-services/local-sponsorships" },
                    { name: "License Renewals", href: "/pro-services/license-renewals" },
                    { name: "Visa Renewals", href: "/pro-services/visa-renewals" },
                    { name: "Banking Assistance", href: "/pro-services/banking-assistance" },
                    { name: "Office Solutions", href: "/pro-services/office-solutions" },
                ]
            },
            {
                name: "Visa Services",
                href: "#",
                children: [
                    { name: "Investor Visa", href: "/visa-services/investor-visa" },
                    { name: "Employment Visa", href: "#" },
                    { name: "Dependent Visa", href: "#" },
                    { name: "Golden Visa", href: "/visa-services/golden-visa" },
                    { name: "Green Visa", href: "#" },
                    { name: "Blue Visa", href: "#" },
                    { name: "Remote Work Visa", href: "#" },
                    { name: "Tourist/Visit Visa", href: "#" },
                ]
            },
            { name: "Government Approvals", href: "#" },
            {
                name: "Document Services",
                href: "#",
                children: [
                    { name: "Attestation Services", href: "/document-services/attestation-services" },
                    { name: "Legal Translation", href: "/document-services/legal-translation" },
                    { name: "Typing Services", href: "/document-services/typing-services" },
                ]
            },
            {
                name: "License Services",
                href: "#",
                children: [
                    { name: "Professional License", href: "/license-services/professional-license" },
                    { name: "Commercial License", href: "/license-services/commercial-license" },
                    { name: "Industrial License", href: "/license-services/industrial-license" },
                    { name: "E-Trader License", href: "/license-services/e-trader-license" },
                    { name: "Tourism / Travel License", href: "/license-services/tourism-travel-license" },
                ]
            },
            {
                name: "Value-Added Services",
                href: "/value-added-services",
                children: [
                    { name: "VAT & Corporate Tax Assistance", href: "/value-added-services/vat-corporate-tax" },
                    { name: "Medical Insurance Assistance", href: "/value-added-services/medical-insurance" },
                    { name: "Trademark Registration", href: "/value-added-services/trademark-registration" },
                    { name: "Branding and Design Services", href: "/value-added-services/branding-design" },
                    { name: "Digital Marketing Services", href: "/value-added-services/digital-marketing" },
                    { name: "Web Design & Development", href: "/value-added-services/web-development" },
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

export const companyFormationItems = [
    {
        name: "Mainland",
        href: "#",
        children: [
            { name: "Dubai", href: "#" },
            { name: "Abu Dhabi", href: "#" },
        ]
    },
    {
        name: "Free Zones",
        href: "#",
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
        href: "#"
    }
];

export const navItems = [
    { name: "Home", href: "/" },
    {
        name: "About Us",
        href: "/about-us",
        children: [
            { name: "About the Company", href: "/about-us" },
            { name: "The Founders", href: "#" },
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
                    { name: "Investor Visa", href: "#" },
                    { name: "Employment Visa", href: "#" },
                    { name: "Dependent Visa", href: "#" },
                    { name: "Golden Visa", href: "#" },
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
                href: "#",
                children: [
                    { name: "VAT & Corporate Tax Assistance", href: "#" },
                    { name: "Medical Insurance Assistance", href: "#" },
                    { name: "Trademark Registration", href: "#" },
                    { name: "Branding and Design Services", href: "#" },
                    { name: "Digital Marketing Services", href: "#" },
                    { name: "Web Design & Development", href: "#" },
                ]
            },
        ]
    },
    {
        name: "Resources",
        href: "#",
        children: [
            { name: "News & Updates", href: "#" },
            { name: "Blogs & Articles", href: "/blog" },
            { name: "Downloads", href: "#" }
        ]
    },
    { name: "Contact Us", href: "/contact-us" },
];

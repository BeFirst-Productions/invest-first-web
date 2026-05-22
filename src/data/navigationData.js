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
                href: "/freezone/dubai",
                children: [
                    { name: "Meydan Free Zone", href: "/freezone/dubai/meydan-free-zone" },
                    { name: "IFZA Free Zone", href: "/freezone/dubai/ifza-free-zone" },
                    { name: "DMCC Free Zone", href: "/freezone/dubai/dmcc-free-zone" },
                    { name: "Jebel Ali (JAFZA)", href: "/freezone/dubai/jebel-ali-jafza" },
                    { name: "DDA Free Zones", href: "/freezone/dubai/dda-free-zones" },
                    { name: "Dubai Airport (DAFZA)", href: "/freezone/dubai/dubai-airport-dafza" },
                    { name: "DIFC", href: "/freezone/dubai/difc" },
                    { name: "Dubai South", href: "/freezone/dubai/dubai-south" },
                    { name: "Dubai Healthcare City", href: "/freezone/dubai/dubai-healthcare-city" },
                ]
            },
            {
                name: "Abu Dhabi",
                href: "/freezone/abu-dhabi",
                children: [
                    { name: "Masdar City", href: "/freezone/abu-dhabi/masdar-city" },
                    { name: "Abu Dhabi Airport Free Zone", href: "/freezone/abu-dhabi/abu-dhabi-airport-free-zone" },
                ]
            },
            {
                name: "Sharjah",
                href: "/freezone/sharjah",
                children: [
                    { name: "Sharjah Media City (SHAMS)", href: "/freezone/sharjah/sharjah-media-city-shams" },
                    { name: "Sharjah Publishing City (SPCFZ)", href: "/freezone/sharjah/sharjah-publishing-city-spcfz" },
                    { name: "SRTIP Free Zone", href: "/freezone/sharjah/srtip-free-zone" },
                    { name: "Hamriyah Free Zone", href: "/freezone/sharjah/hamriyah-free-zone" },
                ]
            },
            { name: "Ajman", href: "/freezone/ajman" },
            { name: "Umm Al Quwain", href: "/freezone/umm-al-quwain" },
            { name: "Ras Al Khaimah", href: "/freezone/ras-al-khaimah" },
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

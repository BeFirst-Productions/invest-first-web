// Detailed data mapping for all UAE Free Zones (both Emirates/Level 1 and specific Subzones/Level 2)
export const freezoneDetailedData = {
    // === EMIRATES (Level 1) ===
    'dubai': {
        slug: 'dubai',
        isEmirate: true,
        bannerTitle: "Dubai Free Zone Company Formation",
        bannerDescription: "Expert assistance in establishing your company in Dubai's premier free zones with 100% ownership and full tax benefits.",
        bannerImage: "images/freezone/banners/dubai-international-city-banner.jpg",
        intro: {
            image: "/images/freezone/freezone.png",
            titleHighlight: "Dubai Free Zones",
            titleRest: "Company Setup Overview",
            description1: "Dubai is home to some of the world's most prestigious and advanced free zones, offering specialized ecosystems for trade, technology, media, and finance. Setting up a business in a Dubai free zone provides global connectivity, state-of-the-art infrastructure, and unmatched credibility.",
            description2: "Whether you target logistics at JAFZA, commodity trading at DMCC, or e-commerce at Meydan, Invest First simplifies your setup journey from initial approval to license issuance."
        },
        keyFeatures: [
            "100% foreign ownership of your business",
            "0% corporate and personal income tax",
            "100% repatriation of profits and capital",
            "No customs duties on import and export",
            "World-class infrastructure and logistics support",
            "Flexible office options including flexi-desks and shared spaces"
        ],
        setupProcess: {
            titleHighlight: "Setup Process for",
            titleRest: "Dubai Free Zones",
            description: "Establishing a company in a Dubai free zone is a streamlined and highly structured process. Here are the key phases:",
            steps: [
                {
                    id: 1,
                    title: "Select Free Zone & Activity",
                    description: "Choose the specific Dubai free zone that matches your business activity and operational needs.",
                    subItems: ["Meydan Free Zone for service & e-commerce", "DMCC for trade & commodities", "IFZA for cost-effective startups"]
                },
                {
                    id: 2,
                    title: "Register Trade Name",
                    description: "Select and submit trade name options for reservation according to the free zone authority guidelines.",
                    subItems: ["Must be unique and not match trademarks", "Should reflect business activity if possible"]
                },
                {
                    id: 3,
                    title: "Apply for License & Visa",
                    description: "Submit investor passport copies, business plans (if required), and apply for visa allocations.",
                    subItems: ["Trading, Service, or Industrial license type", "Allocation of visas per office size"]
                },
                {
                    id: 4,
                    title: "Corporate Bank Account Setup",
                    description: "Upon receiving your trade license, finalize office lease and proceed to open a business bank account.",
                    subItems: ["Submit trade license and MOA", "Provide proof of physical address / office lease"]
                }
            ]
        },
        licenseTypes: [
            {
                id: 1,
                title: "Trading License",
                description: "Allows the import, export, distribution, and storage of specified goods within the free zone and global markets.",
                image: "/images/freezone/trading-license.png"
            },
            {
                id: 2,
                title: "Service / Consultancy License",
                description: "Designed for service providers, professionals, and consultants offering services to businesses or individuals.",
                image: "/images/freezone/service-license.png"
            },
            {
                id: 3,
                title: "Industrial License",
                description: "For companies engaging in manufacturing, processing, assembling, and packaging of raw materials.",
                image: "/images/freezone/industrial-license.png"
            },
            {
                id: 4,
                title: "E-Commerce License",
                description: "For entrepreneurs setting up online retail stores, digital services, and web-based trading activities.",
                image: "/images/freezone/ecommerce-license.png"
            }
        ],
        whyChoose: {
            titleHighlight: "Why Establish in",
            titleText: "Dubai Free Zones?",
            descriptions: [
                "Dubai is the commercial gateway connecting the East and the West. Setting up in a Dubai free zone provides direct access to international markets, top-tier international banking, and a highly skilled global talent pool.",
                "With Invest First, we help you choose the best-suited free zone out of over 30 options in Dubai, managing the paperwork, legal translation, and government submissions efficiently."
            ]
        },
        faqs: {
            title: "Dubai Free Zone Setup FAQ",
            faqItems: [
                {
                    question: "Can a Dubai free zone company trade on the mainland?",
                    answer: "Yes, but they must trade via a local distributor, open a mainland branch, or obtain a special permit from the DED."
                },
                {
                    question: "Do I need a physical office in a Dubai free zone?",
                    answer: "Most free zones offer virtual office solutions like flexi-desks or smart offices, which are sufficient for business license issuance."
                }
            ]
        }
    },

    'abu-dhabi': {
        slug: 'abu-dhabi',
        isEmirate: true,
        bannerTitle: "Abu Dhabi Free Zone Company Formation",
        bannerImage: "images/freezone/banners/",
        bannerDescription: "Establish your business in the capital's premier economic zones. Enjoy state-of-the-art logistics and access to key industries.",
        intro: {
            image: "/images/freezone/freezone.png",
            titleHighlight: "Abu Dhabi Free Zones",
            titleRest: "Overview",
            description1: "Abu Dhabi's free zones offer strategic hubs for technology, finance, heavy industries, media, and green energy. Being the capital of the UAE, setting up here places your business close to federal government entities, key industry leaders, and sovereign wealth funds.",
            description2: "From the financial hub of ADGM to the sustainability ecosystem of Masdar City, Abu Dhabi free zones are built to foster long-term growth and innovation."
        },
        keyFeatures: [
            "100% foreign ownership",
            "100% exemption from corporate and personal income taxes",
            "Proximity to government ministries and capital markets",
            "Strategic locations near deep-water ports and airports",
            "Advanced industrial and manufacturing infrastructure"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "Abu Dhabi Free Zones",
            description: "Establishing a business in the capital follows a structured framework designed for security and speed:",
            steps: [
                {
                    id: 1,
                    title: "Identify Free Zone",
                    description: "Select from Masdar City, ADGM, or Abu Dhabi Airport Free Zone based on your business type."
                },
                {
                    id: 2,
                    title: "Submit Initial Application",
                    description: "Prepare and submit required application forms, passport copies, and initial business outlines."
                },
                {
                    id: 3,
                    title: "Legal Structure & MOA",
                    description: "Draft and sign the Memorandum of Association (MOA) and other legal documents."
                },
                {
                    id: 4,
                    title: "License Issuance",
                    description: "Complete lease agreement for office space and receive your active trade license."
                }
            ]
        },
        licenseTypes: [
            {
                id: 1,
                title: "Financial License",
                description: "Available in ADGM for banks, wealth management, asset management, and fintech firms.",
                image: "/images/freezone/service-license.png"
            },
            {
                id: 2,
                title: "Service & Consultancy License",
                description: "For professionals, corporate service providers, and technology consultants.",
                image: "/images/freezone/service-license.png"
            },
            {
                id: 3,
                title: "Trading License",
                description: "For import, export, and distribution of physical goods.",
                image: "/images/freezone/trading-license.png"
            }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Abu Dhabi Free Zones?",
            descriptions: [
                "Abu Dhabi offers unmatched stability, premium infrastructure, and direct access to state-sponsored projects and capital. It is ideal for larger corporate entities, technology pioneers, and industrial businesses."
            ]
        },
        faqs: {
            title: "Abu Dhabi Free Zone FAQ",
            faqItems: [
                {
                    question: "What is the difference between ADGM and other free zones?",
                    answer: "ADGM is a financial free zone operating under its own English Common Law court system, making it unique for financial structures, holdings, and asset management."
                }
            ]
        }
    },

    'abudhabi-freezone-company-formation': {
        slug: 'abudhabi-freezone-company-formation',
        isEmirate: true,
        bannerTitle: "Abu Dhabi Free Zone Company Formation",
        bannerImage: "images/freezone/banners/",
        bannerDescription: "Establish your business in the capital's premier economic zones. Enjoy state-of-the-art logistics and access to key industries.",
        intro: {
            image: "/images/freezone/freezone.png",
            titleHighlight: "Abu Dhabi Free Zones",
            titleRest: "Overview",
            description1: "Abu Dhabi's free zones offer strategic hubs for technology, finance, heavy industries, media, and green energy. Being the capital of the UAE, setting up here places your business close to federal government entities, key industry leaders, and sovereign wealth funds.",
            description2: "From the financial hub of ADGM to the sustainability ecosystem of Masdar City, Abu Dhabi free zones are built to foster long-term growth and innovation."
        },
        keyFeatures: [
            "100% foreign ownership",
            "100% exemption from corporate and personal income taxes",
            "Proximity to government ministries and capital markets",
            "Strategic locations near deep-water ports and airports",
            "Advanced industrial and manufacturing infrastructure"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "Abu Dhabi Free Zones",
            description: "Establishing a business in the capital follows a structured framework designed for security and speed:",
            steps: [
                {
                    id: 1,
                    title: "Identify Free Zone",
                    description: "Select from Masdar City, ADGM, or Abu Dhabi Airport Free Zone based on your business type."
                },
                {
                    id: 2,
                    title: "Submit Initial Application",
                    description: "Prepare and submit required application forms, passport copies, and initial business outlines."
                },
                {
                    id: 3,
                    title: "Legal Structure & MOA",
                    description: "Draft and sign the Memorandum of Association (MOA) and other legal documents."
                },
                {
                    id: 4,
                    title: "License Issuance",
                    description: "Complete lease agreement for office space and receive your active trade license."
                }
            ]
        },
        licenseTypes: [
            {
                id: 1,
                title: "Financial License",
                description: "Available in ADGM for banks, wealth management, asset management, and fintech firms.",
                image: "/images/freezone/service-license.png"
            },
            {
                id: 2,
                title: "Service & Consultancy License",
                description: "For professionals, corporate service providers, and technology consultants.",
                image: "/images/freezone/service-license.png"
            },
            {
                id: 3,
                title: "Trading License",
                description: "For import, export, and distribution of physical goods.",
                image: "/images/freezone/trading-license.png"
            }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Abu Dhabi Free Zones?",
            descriptions: [
                "Abu Dhabi offers unmatched stability, premium infrastructure, and direct access to state-sponsored projects and capital. It is ideal for larger corporate entities, technology pioneers, and industrial businesses."
            ]
        },
        faqs: {
            title: "Abu Dhabi Free Zone FAQ",
            faqItems: [
                {
                    question: "What is Abu Dhabi Free Zone Company Formation?",
                    answer: "Abu Dhabi Free Zone Company Formation is the process of establishing a business in one of Abu Dhabi’s free zones, offering 100% foreign ownership, tax benefits, and simplified business registration."
                },
                {
                    question: "What are the benefits of Abu Dhabi Free Zone Company Formation?",
                    answer: "Abu Dhabi Free Zone Company Formation provides 100% foreign ownership, full profit repatriation, flexible office options, streamlined licensing, and access to regional and global markets."
                },
                {
                    question: "How much does Abu Dhabi Free Zone Company Formation cost?",
                    answer: "The cost of Abu Dhabi Free Zone Company Formation depends on the selected free zone, business activity, license type, visa requirements, and office package."
                },
                {
                    question: "How long does Abu Dhabi Free Zone Company Formation take?",
                    answer: "Most Abu Dhabi Free Zone Company Formation processes can be completed within a few days to a few weeks, depending on the free zone authority and documentation requirements."
                },
                {
                    question: "What documents are required for Abu Dhabi Free Zone Company Formation?",
                    answer: "Typically, applicants need passport copies, passport-sized photographs, proof of address, business activity details, and completed company registration forms for Abu Dhabi Free Zone Company Formation."
                }
            ]
        }
    },

    'sharjah-freezone-company-formation': {
        slug: 'sharjah-freezone-company-formation',
        isEmirate: true,
        bannerTitle: "Sharjah Free Zone Company Formation",
        bannerImage: "images/freezone/banners/",

        bannerDescription: "Cost-effective, business-friendly setups in Sharjah's industrial, publishing, and creative free zones.",
        intro: {
            image: "/images/freezone/freezone.png",
            titleHighlight: "Sharjah Free Zones",
            titleRest: "Setup",
            description1: "Sharjah is recognized as the cultural and industrial capital of the UAE. Its free zones, such as SHAMS, SAIF, and SPCFZ, offer some of the most cost-effective and fastest setup options in the country, with a strong focus on media, publishing, technology, and logistics.",
            description2: "Setting up in Sharjah allows businesses to enjoy low operational costs while maintaining close physical proximity to both Dubai and the Northern Emirates."
        },
        keyFeatures: [
            "Affordable setup packages with flexi-desk options",
            "Quick license issuance within 24-48 hours",
            "Dual-port access (Arabian Gulf & Indian Ocean)",
            "100% foreign ownership and zero taxation"
        ],
        setupProcess: {
            titleHighlight: "Process for",
            titleRest: "Sharjah Free Zone Setup",
            description: "The process in Sharjah is fast, requiring minimal physical presence:",
            steps: [
                {
                    id: 1,
                    title: "Select Package & Activity",
                    description: "Select the desired license activity and visa package offered by the Sharjah free zone."
                },
                {
                    id: 2,
                    title: "Submit Documents Online",
                    description: "Upload passport copy, photograph, and contact details through our client portal."
                },
                {
                    id: 3,
                    title: "Make Payment",
                    description: "Pay the license and registration fees to receive immediate digital approvals."
                },
                {
                    id: 4,
                    title: "Receive License",
                    description: "Get your trade license and corporate registry documents, then start visa and bank processing."
                }
            ]
        },
        licenseTypes: [
            {
                id: 1,
                title: "Creative & Media License",
                description: "Offered in SHAMS for media production, advertising, design, and consultancy.",
                image: "/images/freezone/service-license.png"
            },
            {
                id: 2,
                title: "Publishing License",
                description: "Offered in Sharjah Publishing City for authors, printers, publishers, and distributors.",
                image: "/images/freezone/trading-license.png"
            },
            {
                id: 3,
                title: "General Trading License",
                description: "For import, export, and distribution of multiple unrelated items.",
                image: "/images/freezone/trading-license.png"
            }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Sharjah Free Zones?",
            descriptions: [
                "Sharjah is highly regarded for its support of small-to-medium enterprises and creative professionals. It provides highly competitive pricing, quick turnaround times, and outstanding logistics nodes."
            ]
        },
        faqs: {
            title: "Sharjah Free Zone FAQ",
            faqItems: [
                {
                    question: "How long does it take to register a company in SHAMS?",
                    answer: "SHAMS is one of the fastest free zones in the UAE, often issuing the license within 24 to 48 hours of document submission."
                }
            ]
        }
    },

    // === 1-LEVEL EMIRATES (No submenus, direct detail pages) ===
    'ajman-freezone-company-setup': {
        slug: 'ajman-freezone-company-setup',
        isEmirate: false,
        bannerTitle: "Ajman Free Zone Company Setup",
        bannerImage: "images/freezone/banners/",

        bannerDescription: "Establish your company in Ajman Free Zone (AFZ). Enjoy low costs, rapid setup, and strategic maritime location.",
        intro: {
            image: "/images/freezone/Ajman Free Zone (AFZ).jpg",
            titleHighlight: "Ajman Free Zone",
            titleRest: "Company Formation",
            description1: "Ajman Free Zone (AFZ) offers a highly competitive and cost-effective business environment for startups, freelancers, and industrial firms. Located at the entrance to the Arabian Gulf, Ajman Free Zone provides excellent logistics and transport links for import-export businesses.",
            description2: "Ajman Media City Free Zone (AMCFZ) also offers premium licensing options for digital marketers, e-commerce stores, and consultants with zero physical office requirements."
        },
        keyFeatures: [
            "Affordable licensing packages",
            "100% foreign ownership and repatriation of profits",
            "Flexible office, flexi-desk, and warehouse options",
            "Direct access to Ajman Port and close proximity to Dubai"
        ],
        setupProcess: {
            titleHighlight: "Easy Steps for",
            titleRest: "Ajman Free Zone Setup",
            description: "Setting up a business in Ajman is simple and can be completed remotely:",
            steps: [
                {
                    id: 1,
                    title: "Select Activity & Office Option",
                    description: "Choose your business activity and whether you need a Flexi-Desk, Smart Office, or Warehouse."
                },
                {
                    id: 2,
                    title: "Submit Documents",
                    description: "Provide passport copy, visa copy/entry stamp, and a passport-size photograph."
                },
                {
                    id: 3,
                    title: "Pay Registry Fees",
                    description: "Make payment according to your chosen package."
                },
                {
                    id: 4,
                    title: "License and Establishment Card",
                    description: "Receive your license and start the visa application process immediately."
                }
            ]
        },
        licenseTypes: [
            {
                id: 1,
                title: "Trading License",
                description: "Allows trading of physical goods within the region and globally.",
                image: "/images/freezone/trading-license.png"
            },
            {
                id: 2,
                title: "E-Commerce License",
                description: "Tailored specifically for online retail businesses targeting regional consumers.",
                image: "/images/freezone/ecommerce-license.png"
            },
            {
                id: 3,
                title: "Consultancy License",
                description: "For professionals offering advice, consultancy, and business services.",
                image: "/images/freezone/service-license.png"
            }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Ajman Company Setup?",
            descriptions: [
                "Ajman offers one of the lowest entry barriers in the UAE, making it a favorite for freelancers, young entrepreneurs, and small trading firms. Its strategic port access is also an asset for shipping businesses."
            ]
        },
        faqs: {
            title: "Ajman Freezone Setup FAQ",
            faqItems: [
                {
                    question: "Do I need a high capital to set up in Ajman?",
                    answer: "No, Ajman Free Zone does not require proof of minimum paid-up capital for standard trading and service licenses."
                }
            ]
        }
    },

    'umm-al-quwain-freezone-company-setup': {
        slug: 'umm-al-quwain-freezone-company-setup',
        isEmirate: false,
        bannerTitle: "Umm Al Quwain Free Zone Company Setup",
        bannerImage: "images/freezone/banners/",

        bannerDescription: "Setup your business in UAQ Free Trade Zone (UAQFTZ). The ideal choice for micro-businesses and import-export operations.",
        intro: {
            image: "/images/freezone/Umm Al Quwain Free Trade Zone (UAQFTZ).jpg",
            titleHighlight: "Umm Al Quwain",
            titleRest: "Free Trade Zone Setup",
            description1: "Umm Al Quwain Free Trade Zone (UAQFTZ) is a rapidly growing hub for e-commerce, trade, and consultancy. It provides a secure, user-friendly, and cost-effective environment, making it a preferred choice for micro-enterprises and remote entrepreneurs.",
            description2: "With low setup costs, no physical audit requirements, and a simple registration process, UAQFTZ is highly attractive for international businesses."
        },
        keyFeatures: [
            "Highly competitive pricing",
            "No requirement for physical capital deposit",
            "100% foreign ownership & repatriation of capital",
            "Simple, paperless registration process"
        ],
        setupProcess: {
            titleHighlight: "Steps to Start in",
            titleRest: "Umm Al Quwain FTZ",
            description: "Get your business license in Umm Al Quwain in just a few days:",
            steps: [
                {
                    id: 1,
                    title: "Choose License & Structure",
                    description: "Select from Freelance, Service, or General Trading licenses."
                },
                {
                    id: 2,
                    title: "Submit Documents",
                    description: "Send passport copy, address proof, and contact details."
                },
                {
                    id: 3,
                    title: "Fee Settlement",
                    description: "Pay the required registration fees via bank transfer or card."
                },
                {
                    id: 4,
                    title: "License Dispatch",
                    description: "Receive your active business license via email."
                }
            ]
        },
        licenseTypes: [
            {
                id: 1,
                title: "Freelance Permit",
                description: "Perfect for single practitioners, consultants, and developers.",
                image: "/images/freezone/service-license.png"
            },
            {
                id: 2,
                title: "General Trading License",
                description: "Enables import, export, and trading of a wide range of goods.",
                image: "/images/freezone/trading-license.png"
            }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "UAQ Free Trade Zone?",
            descriptions: [
                "UAQFTZ is highly cost-effective, requires minimal administrative overhead, and provides an exceptionally supportive environment for small businesses looking to operate globally."
            ]
        },
        faqs: {
            title: "Umm Al Quwain FTZ FAQ",
            faqItems: [
                {
                    question: "Is UAQFTZ recognized by UAE banks?",
                    answer: "Yes, companies registered in UAQFTZ are recognized, and you can open corporate bank accounts in the UAE subject to banking compliance guidelines."
                }
            ]
        }
    },

    'ras-al-khaimah-company-formation': {
        slug: 'ras-al-khaimah-company-formation',
        isEmirate: false,
        bannerTitle: "Ras Al Khaimah Company Formation",
        bannerImage: "images/freezone/banners/",

        bannerDescription: "Setup in Ras Al Khaimah Economic Zone (RAKEZ). A premier destination for industrial, trading, and service businesses.",
        intro: {
            image: "/images/freezone/Ras Al Khaimah Economic Zone (RAKEZ).jpg",
            titleHighlight: "RAKEZ Setup",
            titleRest: "Overview",
            description1: "Ras Al Khaimah Economic Zone (RAKEZ) is one of the largest and most diverse economic zones in the region. It hosts over 15,000 companies across 50+ industries, offering highly customizable solutions for industrial giants, startups, and traders.",
            description2: "Located strategically in Ras Al Khaimah, it provides direct access to deep-water ports, airports, and major highways connecting to the rest of the GCC."
        },
        keyFeatures: [
            "Highly customizable warehouse and industrial plot options",
            "100% foreign ownership and zero tax environment",
            "Fast-track visa processing and government liaison services",
            "On-site employee accommodation and custom support"
        ],
        setupProcess: {
            titleHighlight: "Process for",
            titleRest: "RAKEZ Company Setup",
            description: "RAKEZ offers a very professional, customer-centric setup process:",
            steps: [
                {
                    id: 1,
                    title: "Select License & Facility",
                    description: "Select whether you need a Flexi-Desk, Office, Warehouse, or Industrial Land."
                },
                {
                    id: 2,
                    title: "Reserve Trade Name",
                    description: "Submit name choices to the RAKEZ registrar for reservation."
                },
                {
                    id: 3,
                    title: "Submit Registration",
                    description: "Submit passport copies, shareholder resolutions, and lease contracts."
                },
                {
                    id: 4,
                    title: "License Collection",
                    description: "Sign the lease, collect your trade license, and begin immigration processing."
                }
            ]
        },
        licenseTypes: [
            {
                id: 1,
                title: "Industrial License",
                description: "For manufacturing, assembly, processing, and packaging operations.",
                image: "/images/freezone/industrial-license.png"
            },
            {
                id: 2,
                title: "Commercial & General Trading",
                description: "For trading and import-export operations.",
                image: "/images/freezone/trading-license.png"
            },
            {
                id: 3,
                title: "Professional & Service License",
                description: "For consultancy, software, marketing, and professional activities.",
                image: "/images/freezone/service-license.png"
            }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "RAKEZ in Ras Al Khaimah?",
            descriptions: [
                "RAKEZ stands out for its industrial capacity, offering highly competitive rates for large-scale manufacturing, alongside affordable setups for freelancers and consultants."
            ]
        },
        faqs: {
            title: "RAKEZ Setup FAQ",
            faqItems: [
                {
                    question: "Can I open an industrial plant in RAKEZ?",
                    answer: "Yes, RAKEZ features specialized industrial parks with dedicated power grids, logistics facilities, and custom regulations."
                }
            ]
        }
    },

    // === SPECIFIC SUBZONES (Level 2 Detail Pages) ===
    'meydan-freezone-setup-in-dubai': {
        slug: 'meydan-freezone-setup-in-dubai',
        parentEmirate: 'dubai',
        bannerTitle: "Meydan Free Zone Setup in Dubai",
        bannerImage: "images/freezone/banners/meydan-freezone-banner.jpg",

        bannerDescription: "Form your business in Meydan Free Zone. Located inside Meydan Hotel, offering premium setups, e-commerce features, and a prestigious address.",
        intro: {
            image: "/images/freezone/dubai-freezone/meydan.png",
            titleHighlight: "Meydan Free Zone",
            titleRest: "Company Formation",
            description1: "Meydan Free Zone is a highly popular, 100% digital free zone located in the heart of Dubai. Situated inside the prestigious Meydan Hotel, it offers entrepreneurs a premium business address, state-of-the-art facilities, and over 1,500 business activities.",
            description2: "Known for its modern e-commerce license capabilities and easy bank account approvals, Meydan Free Zone is ideal for digital agencies, consultancies, and online traders."
        },
        keyFeatures: [
            "Premium Business Address inside Meydan Hotel, Dubai",
            "100% digital setup process from anywhere in the world",
            "Access to Meydan Pay - instant business banking solutions",
            "Combination of up to 3 business groups in a single license"
        ],
        setupProcess: {
            titleHighlight: "Steps for",
            titleRest: "Meydan Free Zone Setup",
            steps: [
                { id: 1, title: "Choose Business Activities", description: "Select up to three activity groups (e.g. consultancy, e-commerce, IT)." },
                { id: 2, title: "Reserve Name & Submit", description: "Reserve trade name and submit shareholder passport copies online." },
                { id: 3, title: "Online Payment", description: "Pay the license fees via credit card or bank transfer." },
                { id: 4, title: "Receive Digital License", description: "Get your digital trade license, lease agreement, and start visa processing." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "E-Commerce License", description: "Optimized for online sales and dropshipping.", image: "/images/freezone/ecommerce-license.png" },
            { id: 2, title: "Professional License", description: "For advisory, consultancy, design, and software services.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Meydan Free Zone?",
            descriptions: [
                "Meydan Free Zone is renowned for its premium location, fast setup, and digital-first approach. It is one of the only free zones to offer direct integration with banking partners for immediate account openings."
            ]
        },
        faqs: {
            title: "Meydan Free Zone FAQ",
            faqItems: [
                {
                    question: "What is the Meydan Free Zone Setup in Dubai?",
                    answer: "Meydan Free Zone Setup in Dubai allows entrepreneurs and businesses to establish a company in a strategic free zone with 100% foreign ownership, tax benefits, and a streamlined registration process."
                },
                {
                    question: "What are the benefits of Meydan Free Zone Setup in Dubai?",
                    answer: "Meydan Free Zone Setup in Dubai offers 100% foreign ownership, full profit repatriation, flexible office solutions, multiple business activities, and a fast company formation process."
                },
                {
                    question: "How much does Meydan Free Zone Setup in Dubai cost?",
                    answer: "The cost of Meydan Free Zone Setup in Dubai depends on the license type, business activities, visa requirements, and office package selected."
                },
                {
                    question: "How long does the Meydan Free Zone Setup in Dubai take?",
                    answer: "Most Meydan Free Zone Setup in Dubai applications can be completed within a few business days, subject to document verification and approval requirements."
                },
                {
                    question: "What documents are required for Meydan Free Zone Setup in Dubai?",
                    answer: "Typically, applicants need passport copies, passport-sized photographs, proof of address, business activity details, and completed registration forms for Meydan Free Zone Setup in Dubai."
                }
            ]
        },
        costSection: {
            titleHighlight: "Meydan Free Zone",
            titleRest: "Company Setup",
            description: "Meydan Free Zone is a highly popular, modern hub located near Downtown Dubai, offering cost-effective and highly flexible setup options. The overall cost of formation depends on the number of visa allocations, the business activities selected, and any additional services like bank account opening support or VIP medical tests.",
            cards: [
                "License fees vary based on the number of activities selected (up to 3 included).",
                "Visa allocation slots directly affect the total licensing and registration price.",
                "No physical office space is required, reducing initial capital layout.",
                "Additional support services and processing fees may apply based on requirements."
            ]
        },
        docsAndBenefits: {
            subzoneName: "Meydan Free Zone",
            documentsText: "Meydan Free Zone setup is highly simplified and requires minimal documentation. Entrepreneurs need to submit clear passport copies, proof of residence (such as a utility bill or bank statement), and a current UAE visa copy (if resident). For corporate shareholders, a certificate of incorporation, board resolution, and constitutional documents are required. All applications can be submitted and signed entirely electronically.",
            benefitsList: [
                "100% digital setup process from anywhere in the world",
                "Access to Meydan Pay - instant business banking solutions",
                "Combination of up to 3 business groups in a single license",
                "Premium location next to Meydan Racecourse and Downtown Dubai",
                "No paid-up share capital or physical office lease required",
                "Option for multiple residency visas under a single company"
            ]
        }
    },

    'ifza-freezone-company-setup-dubai': {
        slug: 'ifza-freezone-company-setup-dubai',
        parentEmirate: 'dubai',
        bannerTitle: "IFZA Free Zone Company Setup",
        bannerImage: "images/freezone/banners/ifza-freezone-banner.jpg",

        bannerDescription: "Form your business in IFZA (International Free Zone Authority), the most flexible and cost-effective free zone in Dubai.",
        intro: {
            image: "/images/freezone/dubai-freezone/ifza.png",
            titleHighlight: "IFZA Dubai",
            titleRest: "Business Setup",
            description1: "IFZA (International Free Zone Authority) has quickly become one of the leading investment hubs in the UAE. Based in Dubai, IFZA offers highly competitive packages, extremely fast processing times, and a wide array of business activity combinations.",
            description2: "It is particularly popular among international investors, remote entrepreneurs, and startups looking to register a Dubai company with minimal hassle."
        },
        keyFeatures: [
            "Highly competitive pricing with zero-visa startup packages",
            "No requirement to physically submit documents in the UAE",
            "Combine professional, commercial, and industrial activities on one license",
            "Modern co-working spaces and office options in Dubai"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "IFZA Dubai",
            steps: [
                { id: 1, title: "Select Package", description: "Select the license category and count of visas needed." },
                { id: 2, title: "Submit Form & Passports", description: "Provide passport copy and digital photograph." },
                { id: 3, title: "Authorize Documents", description: "Sign the digital application forms for registration." },
                { id: 4, title: "License Issued", description: "The authority issues the trade license and office sharing certificate." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Consultancy License", description: "For professionals offering advisory services.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Trading License", description: "For import, export, and wholesale trade.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "IFZA Dubai?",
            descriptions: [
                "IFZA is the top choice for startups seeking a prestigious Dubai registry at an affordable price, with outstanding support from setup to corporate bank openings."
            ]
        },
        faqs: {
            title: "IFZA Dubai FAQ",
            faqItems: [
                {
                    question: "What is IFZA Free Zone Company Setup Dubai?",
                    answer: "IFZA Free Zone Company Setup Dubai is the process of establishing a business in the International Free Zone Authority (IFZA), offering 100% foreign ownership, tax benefits, and a business-friendly environment."
                },
                {
                    question: "What are the benefits of IFZA Free Zone Company Setup Dubai?",
                    answer: "IFZA Free Zone Company Setup Dubai provides 100% foreign ownership, full profit repatriation, flexible licensing options, cost-effective packages, and a fast company registration process."
                },
                {
                    question: "How much does IFZA Free Zone Company Setup Dubai cost?",
                    answer: "The cost of IFZA Free Zone Company Setup Dubai varies based on the license type, number of visas, business activities, and office requirements selected."
                },
                {
                    question: "How long does IFZA Free Zone Company Setup Dubai take?",
                    answer: "Most IFZA Free Zone Company Setup Dubai applications can be completed within a few business days, depending on documentation and approval requirements."
                },
                {
                    question: "What documents are required for IFZA Free Zone Company Setup Dubai?",
                    answer: "Typically, applicants need passport copies, passport-sized photographs, proof of address, business activity details, and completed application forms for IFZA Free Zone Company Setup Dubai."
                }
            ]
        },
        costSection: {
            titleHighlight: "IFZA Free Zone",
            titleRest: "Company Setup",
            description: "International Free Zone Authority (IFZA) in Dubai is known for its highly competitive pricing and dynamic package structures suitable for startups. The startup costs are affected by office spaces selected (flexi-desks to dedicated offices) and the quantity of investor or employee visas requested.",
            cards: [
                "Flexible package tiers combine incorporation, business license, and visa options.",
                "Requirement for a physical office can be fulfilled via smart-desk options to save cost.",
                "No paid-up share capital requirement makes initial setup highly accessible.",
                "Cost is optimized for single-shareholder startups and professional consultants."
            ]
        },
        docsAndBenefits: {
            subzoneName: "IFZA Dubai",
            documentsText: "IFZA company setup requires passport copies of all shareholders, directors, and managers, along with a passport-size photo with a white background. If the investor is a UAE resident, a copy of the residence visa and Emirates ID must be provided. Corporate entities require attested corporate documents including certificate of incorporation, memorandum of association, and board resolution. No business plan is typically required.",
            benefitsList: [
                "Very competitive setup prices and visa package deals",
                "Ability to combine commercial, professional, and service activities",
                "Fast-track remote incorporation with no physical visit required",
                "No minimum share capital or audit requirement",
                "Modern co-working spaces and virtual office solutions available",
                "Convenient and flexible corporate bank account opening assistance"
            ]
        }
    },

    'DMCC-company-setup-in-dubai': {
        slug: 'DMCC-company-setup-in-dubai',
        parentEmirate: 'dubai',
        bannerTitle: "DMCC Company Setup in Dubai",
        bannerDescription: "Set up in the Dubai Multi Commodities Centre (DMCC), voted the global free zone of the year, located in Jumeirah Lakes Towers (JLT).",
        intro: {
            image: "/images/freezone/dubai-freezone/dubai-multi-commodities.png",
            titleHighlight: "DMCC Dubai",
            titleRest: "Commodities & Trade Hub",
            description1: "Dubai Multi Commodities Centre (DMCC) is the world's leading free zone and a major global hub for commodity trading. Located in the vibrant district of Jumeirah Lakes Towers (JLT), DMCC is home to over 20,000 businesses ranging from multinational conglomerates to fast-growing startups.",
            description2: "If you deal in gold, diamonds, tea, crypto, technology, or finance, DMCC offers a world-class environment with premium offices and unparalleled global network access."
        },
        keyFeatures: [
            "Voted Global Free Zone of the Year multiple times",
            "Prime location in Jumeirah Lakes Towers (JLT), Dubai",
            "Specialized trade hubs for Gold, Diamond, Coffee, Tea, and Crypto",
            "Strong corporate governance and global business network"
        ],
        setupProcess: {
            titleHighlight: "Process for",
            titleRest: "DMCC JLT Setup",
            steps: [
                { id: 1, title: "Pre-Approval Application", description: "Submit basic passport details and business activities for initial compliance check." },
                { id: 2, title: "Company Name & Structure", description: "Reserve your company name and define shareholders and management." },
                { id: 3, title: "Office Selection & Signings", description: "Secure physical office lease or flexi-desk in JLT and sign company documents." },
                { id: 4, title: "Final License Issuance", description: "Pay setup fees, submit lease registration, and collect your trade license." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Trading License", description: "For trading physical commodities, consumer goods, and materials.", image: "/images/freezone/trading-license.png" },
            { id: 2, title: "Service License", description: "For professional consulting, IT services, design, and software development.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "DMCC Dubai?",
            descriptions: [
                "DMCC offers prestige, prime office spaces, a vibrant community in JLT, and direct connections to international supply chains. It is the premier hub for trade and high-end services."
            ]
        },
        faqs: {
            title: "DMCC Dubai FAQ",
            faqItems: [
                {
                    question: "What is DMCC Company Setup in Dubai?",
                    answer: "DMCC Company Setup in Dubai is the process of establishing a business in the Dubai Multi Commodities Centre (DMCC), one of the UAE’s leading free zones offering 100% foreign ownership and world-class business infrastructure."
                },
                {
                    question: "What are the benefits of DMCC Company Setup in Dubai?",
                    answer: "DMCC Company Setup in Dubai provides 100% foreign ownership, full profit repatriation, flexible office solutions, access to global markets, and a business-friendly regulatory environment."
                },
                {
                    question: "How much does DMCC Company Setup in Dubai cost?",
                    answer: "The cost of DMCC Company Setup in Dubai depends on the business activity, license type, office space requirements, visa allocations, and government fees."
                },
                {
                    question: "How long does DMCC Company Setup in Dubai take?",
                    answer: "Most DMCC Company Setup in Dubai applications can be completed within a few days to a few weeks, depending on document submission and approval processes."
                },
                {
                    question: "What documents are required for DMCC Company Setup in Dubai?",
                    answer: "Typically, applicants need passport copies, passport-sized photographs, proof of address, business activity details, and completed registration forms for DMCC Company Setup in Dubai."
                }
            ]
        },
        costSection: {
            titleHighlight: "DMCC Free Zone",
            titleRest: "Company Setup",
            description: "Dubai Multi Commodities Centre (DMCC) is a world-renowned commodity trading hub. Setup costs reflect the premium nature of the free zone, including mandatory physical office space/flexi-desk registration in JLT, minimum share capital requirements, and specialized registration fees depending on license type.",
            cards: [
                "License fees depend heavily on business activities (commodities, services, or trading).",
                "Office rental (flexi-desk or physical office in Jumeirah Lakes Towers) is mandatory.",
                "Minimum share capital must be deposited in a UAE bank and verified by an auditor.",
                "Additional fees for portal registration, medical tests, and Emirates ID apply."
            ]
        },
        docsAndBenefits: {
            subzoneName: "DMCC Dubai",
            documentsText: "DMCC requires comprehensive documentation due to its status as a premium regulated free zone. Individual shareholders must provide passport copies, proof of address (less than 3 months old), and a detailed curriculum vitae (CV) alongside a brief business plan. A third-party reference letter is also needed. For corporate shareholders, parent company registration and constitutional documents must be notarized and legalized.",
            benefitsList: [
                "Voted Global Free Zone of the Year multiple times",
                "Premium JLT location with top-tier commercial office spaces",
                "Ideal for commodities trading, crypto, technology, and finance",
                "Access to proprietary commodity platforms like DMCC Tradeflow",
                "Strong networking ecosystem with over 20,000 active companies",
                "Excellent logistics connections and dual-license options"
            ]
        }
    },

    'jafza-company-formation-dubai': {
        slug: 'jafza-company-formation-dubai',
        parentEmirate: 'dubai',
        bannerTitle: "Jebel Ali Free Zone (JAFZA) Company Formation",
        bannerDescription: "Setup your industrial or logistics company in JAFZA, the oldest and largest industrial free zone in the UAE, directly connected to Jebel Ali Port.",
        intro: {
            image: "/images/freezone/dubai-freezone/jafza-freezone.png",
            titleHighlight: "JAFZA Dubai",
            titleRest: "Global Logistics Gateway",
            description1: "Jebel Ali Free Zone (JAFZA) is the leading source of FDI in Dubai and the oldest free zone in the UAE. Positioned adjacent to the world's largest man-made harbor, Jebel Ali Port, and close to Al Maktoum Airport, JAFZA is the premier global hub for logistics, industrial manufacturing, and trade.",
            description2: "JAFZA hosts thousands of global companies, including Fortune 500 businesses, providing them with unparalleled sea-air connectivity and specialized manufacturing infrastructure."
        },
        keyFeatures: [
            "Direct maritime connectivity to Jebel Ali Port and Al Maktoum Airport",
            "Specialized industrial plots, warehouses, and cold storages",
            "No minimum capital requirements for setup",
            "Access to a vast network of logistics and customs clearing partners"
        ],
        setupProcess: {
            titleHighlight: "Jebel Ali Free Zone Company",
            titleRest: "Setup Process",
            steps: [
                { id: 1, title: "Select Business Activity", description: "Choose the right activity such as trading, logistics, manufacturing, or services to match your operations and ensure correct JAFZA license approval." },
                { id: 2, title: "Choose Legal Structure", description: "Select FZE for a single owner, FZCO for multiple shareholders, or a branch of an existing company based on your ownership and expansion plans." },
                { id: 3, title: "Reserve Company Name", description: "Submit compliant name options and obtain JAFZA approval to secure your company identity and proceed with registration smoothly." },
                { id: 4, title: "Choose License Type", description: "Pick trading, industrial, logistics, or service license according to your approved business activity and operational requirements." },
                { id: 5, title: "Select Facility", description: "Choose office space, warehouse, industrial unit, or land based on storage, staffing, and visa eligibility needs for your business." },
                { id: 6, title: "Submit Documents", description: "Provide shareholder passports, application forms, business plan (if required), and corporate documents." },
                { id: 7, title: "Sign Incorporation & Lease Agreements", description: "Sign MOA, lease agreement, and incorporation documents to finalize company formation and facility allocation in JAFZA." },
                { id: 8, title: "Pay Fees & Receive License", description: "Pay registration and license fees to obtain your JAFZA trade license, company documents, and begin visa and bank processes." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Logistics & Industrial License", description: "Designed for warehousing, manufacturing, assembly, and shipping.", image: "/images/freezone/industrial-license.png" },
            { id: 2, title: "General Trading License", description: "Allows import, export, storage, and wholesale distribution.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "JAFZA Jebel Ali?",
            descriptions: [
                "For logistics, shipping, and manufacturing, JAFZA offers unmatched infrastructure, custom duty exemptions, and direct maritime logistics integrations."
            ]
        },
        faqs: {
            title: "JAFZA FAQ",
            faqItems: [
                {
                    question: "What is Jebel Ali Free Zone (JAFZA) Company Formation?",
                    answer: "Jebel Ali Free Zone (JAFZA) Company Formation is the process of establishing a business in JAFZA, one of the UAE’s largest free zones, offering 100% foreign ownership and access to international markets."
                },
                {
                    question: "What are the benefits of Jebel Ali Free Zone (JAFZA) Company Formation?",
                    answer: "Jebel Ali Free Zone (JAFZA) Company Formation provides 100% foreign ownership, full profit repatriation, customs benefits, strategic logistics advantages, and world-class business infrastructure."
                },
                {
                    question: "How much does Jebel Ali Free Zone (JAFZA) Company Formation cost?",
                    answer: "The cost of Jebel Ali Free Zone (JAFZA) Company Formation varies depending on the license type, business activity, office or warehouse requirements, visa allocations, and government fees."
                },
                {
                    question: "How long does Jebel Ali Free Zone (JAFZA) Company Formation take?",
                    answer: "Most Jebel Ali Free Zone (JAFZA) Company Formation applications can be completed within a few days to a few weeks, subject to documentation and approval requirements."
                },
                {
                    question: "What documents are required for Jebel Ali Free Zone (JAFZA) Company Formation?",
                    answer: "Typically, applicants need passport copies, passport-sized photographs, proof of address, business activity details, and completed registration forms for Jebel Ali Free Zone (JAFZA) Company Formation."
                }
            ]
        },
        costSection: {
            titleHighlight: "JAFZA Free Zone",
            titleRest: "Company Setup",
            description: "JAFZA is a premium free zone suited for medium and large businesses needing warehouses, port access, and advanced logistics infrastructure. The company setup cost depends on business activity, license type, and facility selection such as office, warehouse, or land. Visa quota, share capital requirements, and additional services like PRO support and banking assistance also influence the total investment required.",
            cards: [
                "License, office, product range, and visa quota determine setup cost.",
                "Warehouse size, storage needs, and port access impact pricing.",
                "Unit size, power load, and machinery approvals affect investment.",
                "Flexi-desk, fewer visas, and no warehouse keep costs lower."
            ]
        },
        docsAndBenefits: {
            subzoneName: "Jebel Ali Free Zone",
            documentsText: "Jebel Ali Free Zone company formation requires passport copies of all shareholders and the appointed manager, along with recent passport-size photographs and a UAE entry stamp or residence visa copy if applicable. Corporate shareholders must submit a board resolution, Certificate of Incorporation, and Memorandum and Articles of Association. A business plan may be requested for regulated activities. Applicants must also provide proposed company name options and complete the official JAFZA application forms for authority review and approval.",
            benefitsList: [
                "Ideal for import, export, and large trading operations",
                "Direct access to seaport and logistics hub",
                "On-site warehouses and industrial facilities",
                "Strong global business reputation",
                "100% foreign ownership with full profit repatriation",
                "Scalable infrastructure for regional distribution and growth"
            ]
        }
    },

    'DDA-freezone-company-setup-in-dubai': {
        slug: 'DDA-freezone-company-setup-in-dubai',
        parentEmirate: 'dubai',
        bannerTitle: "DDA Free Zone Company Setup",
        bannerDescription: "Establish your company in the Dubai Development Authority (DDA) Free Zone, regulating Dubai's premier creative and technology clusters.",
        intro: {
            image: "/images/freezone/freezone.png",
            titleHighlight: "DDA Dubai",
            titleRest: "Company Formation",
            description1: "Dubai Development Authority (DDA) regulates and manages the establishment of companies across Dubai's most vibrant and dynamic tech, creative, and service free zones. Formerly known as DTCM/TECOM, DDA covers globally renowned districts including Dubai Internet City, Dubai Media City, Dubai Studio City, Dubai Production City, Dubai Science Park, and Dubai Knowledge Park.",
            description2: "A company setup under the DDA framework offers top-tier corporate status, access to prime office real estate, and a community of leading global brands, innovators, and creative minds."
        },
        keyFeatures: [
            "100% foreign ownership and full profit repatriation",
            "Access to specialized clusters (tech, media, design, science, and education)",
            "Simplified corporate registration and unified licensing",
            "World-class infrastructure, offices, and co-working facilities",
            "Zero personal and corporate tax environment"
        ],
        setupProcess: {
            titleHighlight: "Steps to Start at",
            titleRest: "DDA Dubai",
            steps: [
                { id: 1, title: "Select District & License", description: "Choose the appropriate industry-specific cluster and business activity." },
                { id: 2, title: "Submit Registry Forms", description: "Provide passport copies, proposed trade names, and shareholder details." },
                { id: 3, title: "Sign & Secure Office", description: "Approve corporate documents and secure a smart-desk or office lease within TECOM districts." },
                { id: 4, title: "License Issuance", description: "Receive your DDA trade license, corporate registry, and start residency visa processing." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Free Zone Limited Liability Company (FZ-LLC)", description: "For establishing a new corporate entity under DDA regulations.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Branch Office", description: "Establish a branch of an existing local or foreign parent company.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "DDA Dubai?",
            descriptions: [
                "DDA is the ultimate destination for businesses in creative, tech, and knowledge sectors. Regulating Dubai's flagship innovation hubs, it provides a highly professional, globally recognized regulatory environment with world-class facilities."
            ]
        },
        faqs: {
            title: "DDA Dubai Setup FAQ",
            faqItems: [
                {
                    question: "What is DDA Free Zone Company Setup?",
                    answer: "DDA Free Zone Company Setup is the process of establishing a business in the Dubai Development Authority (DDA) Free Zone, offering 100% foreign ownership, tax advantages, and a streamlined company formation process."
                },
                {
                    question: "What are the benefits of DDA Free Zone Company Setup?",
                    answer: "DDA Free Zone Company Setup provides 100% foreign ownership, full profit repatriation, flexible office solutions, multiple business activities, and access to Dubai’s thriving business ecosystem."
                },
                {
                    question: "How much does DDA Free Zone Company Setup cost?",
                    answer: "The cost of DDA Free Zone Company Setup depends on the license type, business activity, office requirements, visa allocations, and applicable government fees."
                },
                {
                    question: "How long does DDA Free Zone Company Setup take?",
                    answer: "Most DDA Free Zone Company Setup applications can be completed within a few business days to a few weeks, depending on documentation and approval requirements."
                },
                {
                    question: "What documents are required for DDA Free Zone Company Setup?",
                    answer: "Typically, applicants need passport copies, passport-sized photographs, proof of address, business activity details, and completed application forms for DDA Free Zone Company Setup."
                }
            ]
        },
        costSection: {
            titleHighlight: "DDA Dubai",
            titleRest: "Setup Costs",
            description: "DDA setup costs depend on the specific cluster selected, license activity group, office workspace lease options, and residency visa allocations. Each district has unique workspace specifications and pricing structures.",
            cards: [
                "Registry and license fees are tailored to service, commercial, or creative activities.",
                "Real estate solutions, from smart desks to dedicated corporate spaces, impact the total cost.",
                "Visa processing and medical fitness insurance fees apply per residency visa slot requested.",
                "Government administration and channel portal registrations are part of standard setup fees."
            ]
        },
        docsAndBenefits: {
            subzoneName: "DDA Dubai",
            documentsText: "Company setup under DDA requires passport copies of all shareholders, directors, and managers, along with resume/CV copies and a brief description of proposed business activities. A business plan is typically required for creative and media licenses. For branch setups, attested parent company board resolutions, certificate of incorporation, and constitutional documents must be submitted.",
            benefitsList: [
                "100% foreign ownership and complete capital repatriation",
                "Zero corporate and personal tax exemptions",
                "Prime location across Dubai's most iconic commercial districts",
                "Unified visa processing and corporate support services",
                "Access to robust business networking and local talent",
                "Option for flexible corporate bank account setups"
            ]
        }
    },

    'dafza-company-setup-in-dubai': {
        slug: 'dafza-company-setup-in-dubai',
        parentEmirate: 'dubai',
        bannerTitle: "DAFZA Company Setup in Dubai",
        bannerDescription: "Set up your company in the Dubai Airport Freezone (DAFZA) with expert guidance. Enjoy 100% foreign ownership, tax benefits, fast licensing, and a strategic location near Dubai International Airport.",
        intro: {
            image: "/images/freezone/dubai-freezone/dafza.png",
            titleHighlight: "DAFZA Dubai",
            titleRest: "Company Formation",
            description1: "Dubai Airport Freezone (DAFZA) is a premier free zone offering 100% foreign ownership, tax benefits, and strategic access to global markets. Located near Dubai International Airport, it provides world-class business infrastructure and premium facilities for international companies.",
            description2: "Setting up a business in DAFZA grants you full ownership, direct access to the airport's cargo facilities, and an unmatched location for international operations and logistics."
        },
        keyFeatures: [
            "Strategic location next to Dubai International Airport",
            "100% foreign ownership and full profit repatriation",
            "World-class infrastructure and premium office facilities",
            "Fast company registration and licensing process"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "DAFZA Dubai",
            steps: [
                { id: 1, title: "Choose License & Activity", description: "Select your desired license category and business activities suitable for DAFZA regulations." },
                { id: 2, title: "Submit Registration", description: "Submit passport copies, business plan, and shareholder documentation." },
                { id: 3, title: "Select Workspace", description: "Lease your office or facility within the Dubai Airport Freezone." },
                { id: 4, title: "Receive License", description: "Obtain your trade license and start visa processing for yourself and employees." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Trading License", description: "For import, export, distribution, and storage of items.", image: "/images/freezone/trading-license.png" },
            { id: 2, title: "Service License", description: "For professional services, consulting, and IT activities.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "DAFZA Dubai?",
            descriptions: [
                "DAFZA is highly regarded for its premium facilities, unparalleled proximity to Dubai International Airport, and efficient administrative services, making it the perfect choice for aviation, logistics, IT, and pharmaceutical companies."
            ]
        },
        faqs: {
            title: "DAFZA Dubai Setup FAQ",
            faqItems: [
                {
                    question: "What is DAFZA Company Setup in Dubai?",
                    answer: "DAFZA Company Setup in Dubai is the process of establishing a business in the Dubai Airport Free Zone (DAFZA), a premier free zone offering 100% foreign ownership, tax benefits, and strategic access to global markets."
                },
                {
                    question: "What are the benefits of DAFZA Company Setup in Dubai?",
                    answer: "DAFZA Company Setup in Dubai provides 100% foreign ownership, full profit repatriation, customs advantages, premium business facilities, and proximity to Dubai International Airport."
                },
                {
                    question: "How much does DAFZA Company Setup in Dubai cost?",
                    answer: "The cost of DAFZA Company Setup in Dubai depends on the business activity, license type, office space requirements, visa allocations, and applicable government fees."
                },
                {
                    question: "How long does DAFZA Company Setup in Dubai take?",
                    answer: "Most DAFZA Company Setup in Dubai applications can be completed within a few business days to a few weeks, depending on documentation and approval processes."
                },
                {
                    question: "What documents are required for DAFZA Company Setup in Dubai?",
                    answer: "Typically, applicants need passport copies, passport-sized photographs, proof of address, business activity details, and completed registration forms for DAFZA Company Setup in Dubai."
                }
            ]
        },
        costSection: {
            titleHighlight: "DAFZA Dubai",
            titleRest: "Setup Costs",
            description: "DAFZA setup costs reflect its premium status, offering high-end office spaces and direct airport access. The total investment depends on the chosen license, facility type, and visa requirements.",
            cards: [
                "License fees vary based on the selected business activity and license type.",
                "Office rental costs depend on the required space, from smart desks to customized corporate offices.",
                "Visa processing fees apply for each required residency visa.",
                "Additional fees for portal registration, medical tests, and Emirates ID apply."
            ]
        },
        docsAndBenefits: {
            subzoneName: "DAFZA Dubai",
            documentsText: "Company setup in DAFZA requires passport copies of shareholders and managers, passport-size photographs, and a comprehensive business plan. Corporate entities need attested parent company documents, including the Certificate of Incorporation, Memorandum of Association, and Board Resolutions.",
            benefitsList: [
                "100% foreign ownership and full capital repatriation",
                "Strategic location adjacent to Dubai International Airport",
                "World-class administrative and IT infrastructure",
                "Zero corporate and personal tax exemptions",
                "Fast-track visa and licensing processes"
            ]
        }
    },

    'DIFC-setup-in-dubai': {
        slug: 'DIFC-setup-in-dubai',
        parentEmirate: 'dubai',
        bannerTitle: "DIFC Setup in Dubai",
        bannerDescription: "Set up your business in the Dubai International Financial Centre (DIFC), a leading global financial hub offering a world-class regulatory framework.",
        intro: {
            image: "/images/freezone/dubai-freezone/difc.png",
            titleHighlight: "DIFC Dubai",
            titleRest: "Company Formation",
            description1: "Dubai International Financial Centre (DIFC) is one of the world's top ten financial centers, and the leading financial hub for the Middle East, Africa, and South Asia (MEASA) region. It offers an independent, English Common Law regulatory framework.",
            description2: "Establishing a company in DIFC gives you access to a massive market and unparalleled connections to global banks, investment firms, and fintech pioneers in a thriving business ecosystem."
        },
        keyFeatures: [
            "Independent English Common Law legal framework",
            "100% foreign ownership and no restriction on capital repatriation",
            "World-class infrastructure and premium office spaces",
            "Vibrant business ecosystem and networking opportunities"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "DIFC Dubai",
            steps: [
                { id: 1, title: "Initial Approval", description: "Submit your business plan and compliance documents for initial regulatory approval by the DFSA or DIFC Authority." },
                { id: 2, title: "Company Incorporation", description: "Register the corporate entity and submit the required shareholder and director information." },
                { id: 3, title: "Office Space Selection", description: "Lease a physical office space within the DIFC jurisdiction as required by regulations." },
                { id: 4, title: "Final License Issuance", description: "Receive your business license, establish a corporate bank account, and apply for visas." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Regulated License", description: "For financial services, banking, asset management, and fund management.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Non-Regulated License", description: "For holding companies, proprietary investments, corporate offices, and professional services.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "DIFC Dubai?",
            descriptions: [
                "DIFC offers unparalleled prestige, a robust regulatory environment regulated by the DFSA, and a strategic location linking the time zones of London and Hong Kong, making it the ideal hub for global finance and corporate structures."
            ]
        },
        faqs: {
            title: "DIFC Dubai Setup FAQ",
            faqItems: [
                {
                    question: "What is DIFC Setup in Dubai?",
                    answer: "DIFC Setup in Dubai is the process of establishing a business in the Dubai International Financial Centre (DIFC), a leading global financial hub offering a world-class regulatory framework and business-friendly environment."
                },
                {
                    question: "What are the benefits of DIFC Setup in Dubai?",
                    answer: "DIFC Setup in Dubai provides 100% foreign ownership, an independent legal framework, access to global financial markets, premium office spaces, and a strong business ecosystem."
                },
                {
                    question: "How much does DIFC Setup in Dubai cost?",
                    answer: "The cost of DIFC Setup in Dubai depends on the business activity, license category, office requirements, visa needs, and applicable regulatory fees."
                },
                {
                    question: "How long does DIFC Setup in Dubai take?",
                    answer: "Most DIFC Setup in Dubai applications can be completed within a few weeks, depending on the business structure, regulatory approvals, and document submission requirements."
                },
                {
                    question: "What documents are required for DIFC Setup in Dubai?",
                    answer: "Typically, applicants need passport copies, proof of address, business plans, shareholder information, corporate documents (if applicable), and completed application forms for DIFC Setup in Dubai."
                }
            ]
        },
        costSection: {
            titleHighlight: "DIFC Dubai",
            titleRest: "Setup Costs",
            description: "Setting up in DIFC involves premium fees commensurate with its status as a top-tier global financial center. The costs depend on whether the entity is regulated (financial services) or non-regulated.",
            cards: [
                "Application and registration fees vary significantly for regulated vs. non-regulated entities.",
                "Mandatory physical office space lease within DIFC adds to the initial capital requirement.",
                "Regulatory capital requirements apply depending on the specific financial activities.",
                "Annual licensing, visa processing, and compliance fees are required."
            ]
        },
        docsAndBenefits: {
            subzoneName: "DIFC Dubai",
            documentsText: "Setting up a business in DIFC requires extensive documentation, including detailed business plans, financial projections, passports and CVs of directors and shareholders, and proof of address. Regulated entities must meet strict DFSA compliance standards and submit comprehensive risk management and compliance manuals. Corporate shareholders require notarized parent company documents.",
            benefitsList: [
                "Independent legal and regulatory framework (English Common Law)",
                "100% foreign ownership with zero tax on corporate income and profits",
                "Strategic global location for financial services and holding companies",
                "Access to a vast pool of global talent and wealth",
                "World-class commercial real estate and lifestyle amenities"
            ]
        }
    },

    'dubai-healthcare-city-company-setup': {
        slug: 'dubai-healthcare-city-company-setup',
        parentEmirate: 'dubai',
        bannerTitle: "Dubai Healthcare City (DHCC) Company Setup",
        bannerDescription: "Establish your medical, wellness, or healthcare-related business in Dubai Healthcare City, the region's premier healthcare free zone.",
        intro: {
            image: "/images/freezone/dubai-freezone/dubai-healthcare.png",
            titleHighlight: "DHCC Dubai",
            titleRest: "Company Formation",
            description1: "Dubai Healthcare City (DHCC) is a specialized free zone dedicated to the healthcare sector, offering an integrated ecosystem for clinical and non-clinical businesses. It is home to global healthcare networks, research centers, and pharmaceutical companies.",
            description2: "Setting up your business in DHCC provides 100% foreign ownership, specialized infrastructure, and access to a growing market of medical tourism and advanced healthcare services."
        },
        keyFeatures: [
            "100% foreign ownership and zero tax on corporate income",
            "Specialized licensing for clinical and non-clinical healthcare businesses",
            "World-class healthcare infrastructure and research facilities",
            "Strategic location in the heart of Dubai with strong connectivity"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "DHCC Dubai",
            steps: [
                { id: 1, title: "Initial Approval", description: "Submit your business plan and obtain initial approval from the Dubai Healthcare City Authority (DHCA)." },
                { id: 2, title: "Facility Selection", description: "Lease a clinical space, office, or dedicated desk suitable for your approved activities." },
                { id: 3, title: "Professional Licensing", description: "Obtain required DHA/DHCA approvals and professional licenses for healthcare practitioners." },
                { id: 4, title: "License Issuance", description: "Receive your final commercial or clinical license and commence business operations." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Clinical License", description: "For hospitals, clinics, medical centers, and diagnostic laboratories.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Non-Clinical License", description: "For healthcare consultancies, medical equipment trading, and healthcare IT.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "DHCC Dubai?",
            descriptions: [
                "DHCC provides a prestigious address and a fully integrated ecosystem that supports innovation, medical excellence, and business growth in the healthcare and life sciences sectors."
            ]
        },
        faqs: {
            title: "DHCC Dubai Setup FAQ",
            faqItems: [
                {
                    question: "What is Dubai Healthcare City Company Setup in Dubai?",
                    answer: "Dubai Healthcare City Company Setup in Dubai is the process of establishing a healthcare, medical, wellness, pharmaceutical, or related business within Dubai Healthcare City (DHCC), a specialized free zone dedicated to the healthcare sector."
                },
                {
                    question: "What are the benefits of Dubai Healthcare City Company Setup in Dubai?",
                    answer: "Dubai Healthcare City Company Setup in Dubai offers 100% foreign ownership, tax benefits, world-class healthcare infrastructure, specialized licensing, and access to a growing healthcare market."
                },
                {
                    question: "How much does Dubai Healthcare City Company Setup in Dubai cost?",
                    answer: "The cost of Dubai Healthcare City Company Setup in Dubai depends on the business activity, license type, facility requirements, visa allocations, and applicable regulatory fees."
                },
                {
                    question: "How long does Dubai Healthcare City Company Setup in Dubai take?",
                    answer: "Most Dubai Healthcare City Company Setup in Dubai applications can be completed within a few weeks, depending on licensing approvals, business activities, and document verification."
                },
                {
                    question: "What documents are required for Dubai Healthcare City Company Setup in Dubai?",
                    answer: "Typically, applicants need passport copies, proof of address, business plans, qualification certificates (for healthcare professionals), shareholder details, and completed application forms for Dubai Healthcare City Company Setup in Dubai."
                }
            ]
        },
        costSection: {
            titleHighlight: "DHCC Dubai",
            titleRest: "Setup Costs",
            description: "Setting up a business in Dubai Healthcare City involves varying costs depending on whether the business requires a clinical facility, a standard office, or a flexi-desk for non-clinical activities.",
            cards: [
                "License fees vary based on clinical vs. non-clinical and commercial activities.",
                "Facility lease costs range from flexi-desks to fully equipped clinical spaces.",
                "Healthcare professional licensing and regulatory compliance fees apply.",
                "Visa processing and medical fitness test fees apply for all employees."
            ]
        },
        docsAndBenefits: {
            subzoneName: "DHCC Dubai",
            documentsText: "Setting up in DHCC requires comprehensive documentation, particularly for clinical setups. This includes passport copies of shareholders, detailed business and facility plans, and professional qualifications for medical staff which must be verified by the relevant authorities. Corporate shareholders must submit attested parent company documents.",
            benefitsList: [
                "100% foreign ownership and full repatriation of profits",
                "State-of-the-art clinical and research infrastructure",
                "Integration with a massive network of healthcare professionals",
                "Access to specialized regulatory support and framework",
                "Premium facilities in a globally recognized medical tourism hub"
            ]
        }
    },

    'dubai-south-setup-in-dubai': {
        slug: 'dubai-south-setup-in-dubai',
        parentEmirate: 'dubai',
        bannerTitle: "Dubai South Setup in Dubai",
        bannerDescription: "Establish your business in Dubai South Free Zone, a strategic logistics hub offering 100% foreign ownership and direct access to global markets.",
        intro: {
            image: "/images/freezone/dubai-freezone/dubai-south.png",
            titleHighlight: "Dubai South",
            titleRest: "Company Formation",
            description1: "Dubai South is one of the UAE’s most prominent free zones, offering a strategic location adjacent to Al Maktoum International Airport and the Jebel Ali Sea Port. It is a fully integrated ecosystem built for logistics, aviation, commercial, and residential developments.",
            description2: "Setting up a company in Dubai South provides unparalleled connectivity and a highly competitive cost structure, making it ideal for startups, SMEs, and large global enterprises seeking seamless supply chain operations."
        },
        keyFeatures: [
            "100% foreign ownership and full capital repatriation",
            "Direct access to Al Maktoum International Airport and Jebel Ali Port",
            "Cost-effective setup options with flexible workspaces",
            "Comprehensive logistics and aviation infrastructure"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "Dubai South",
            steps: [
                { id: 1, title: "License Selection", description: "Determine the appropriate license type and business activities." },
                { id: 2, title: "Submit Application", description: "Provide passport copies, business plan, and shareholder documentation." },
                { id: 3, title: "Facility Lease", description: "Choose and lease a suitable workspace, office, or warehouse in Dubai South." },
                { id: 4, title: "License Issuance", description: "Receive your business license, corporate documents, and proceed with visa applications." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Logistics License", description: "For warehousing, transportation, and supply chain operations.", image: "/images/freezone/trading-license.png" },
            { id: 2, title: "Commercial License", description: "For general trading, import, export, and professional services.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Dubai South?",
            descriptions: [
                "Dubai South offers unparalleled multi-modal logistics connectivity, a vibrant community, and cost-effective business solutions. It is strategically positioned to serve as a hub for the Middle East, Africa, and South Asia."
            ]
        },
        faqs: {
            title: "Dubai South Setup FAQ",
            faqItems: [
                {
                    question: "What is Dubai South Setup in Dubai?",
                    answer: "Dubai South Setup in Dubai is the process of establishing a business in Dubai South Free Zone, a strategic business hub offering 100% foreign ownership, tax benefits, and access to global trade and logistics networks."
                },
                {
                    question: "What are the benefits of Dubai South Setup in Dubai?",
                    answer: "Dubai South Setup in Dubai provides 100% foreign ownership, full profit repatriation, flexible office solutions, competitive setup costs, and proximity to major transport and logistics facilities."
                },
                {
                    question: "How much does Dubai South Setup in Dubai cost?",
                    answer: "The cost of Dubai South Setup in Dubai depends on the license type, business activity, office requirements, visa allocations, and applicable government fees."
                },
                {
                    question: "How long does Dubai South Setup in Dubai take?",
                    answer: "Most Dubai South Setup in Dubai applications can be completed within a few business days to a few weeks, depending on documentation and approval requirements."
                },
                {
                    question: "What documents are required for Dubai South Setup in Dubai?",
                    answer: "Typically, applicants need passport copies, passport-sized photographs, proof of address, business activity details, and completed application forms for Dubai South Setup in Dubai."
                }
            ]
        },
        costSection: {
            titleHighlight: "Dubai South",
            titleRest: "Setup Costs",
            description: "Dubai South offers some of the most competitive setup packages in Dubai, particularly for logistics and trading companies. Total costs vary based on the required facilities and visa quotas.",
            cards: [
                "License fees are determined by the specific business activities chosen.",
                "Real estate costs range from affordable flexi-desks to dedicated warehouses and premium offices.",
                "Visa processing and medical fitness fees apply per residency visa slot.",
                "Standard administrative and registration fees apply during incorporation."
            ]
        },
        docsAndBenefits: {
            subzoneName: "Dubai South",
            documentsText: "Company formation in Dubai South requires standard documentation, including passport copies, CVs of shareholders, and a business plan for certain activities. Corporate shareholders must provide notarized parent company documents, such as the Certificate of Incorporation and Board Resolution.",
            benefitsList: [
                "100% foreign ownership and complete capital repatriation",
                "Zero corporate and personal income taxes",
                "Strategic location in the Logistics Corridor",
                "Access to world-class aviation and logistics infrastructure",
                "Flexible and cost-effective real estate solutions"
            ]
        }
    },

    'abudhabi-freezone-company-formation': {
        slug: 'abudhabi-freezone-company-formation',
        parentEmirate: 'abu-dhabi',
        bannerTitle: "Abu Dhabi Free Zone Company Formation",
        bannerDescription: "Establish your business in the capital's premier economic zones. Enjoy state-of-the-art logistics, 100% foreign ownership, and access to key industries.",
        intro: {
            image: "/images/freezone/abu-dhabi-freezone/abudhabi-freezone.png",
            titleHighlight: "Abu Dhabi",
            titleRest: "Free Zone Setup",
            description1: "Abu Dhabi is a global powerhouse of business and investment, offering multiple highly specialized free zones such as ADGM, Masdar City, and KIZAD. Setting up here grants you access to top-tier infrastructure and proximity to major decision-makers.",
            description2: "Whether you're in the industrial, media, financial, or green tech sector, Abu Dhabi provides a strategic platform with tax exemptions, full profit repatriation, and rapid licensing processes tailored for international investors."
        },
        keyFeatures: [
            "100% foreign ownership and full profit repatriation",
            "Zero corporate and personal income taxes",
            "World-class industrial, commercial, and financial infrastructure",
            "Strategic access to growing Middle East and global markets"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "Abu Dhabi",
            steps: [
                { id: 1, title: "Select Free Zone", description: "Choose the Abu Dhabi free zone that best suits your business activity (e.g., KIZAD, ADGM, Masdar)." },
                { id: 2, title: "Submit Application", description: "Provide passport copies, business plan, and register your trade name." },
                { id: 3, title: "Lease Workspace", description: "Select an appropriate facility, from flexi-desks to full industrial warehouses." },
                { id: 4, title: "Obtain License", description: "Receive your business license, establish banking, and apply for visas." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Commercial & Trading", description: "For trading goods, import/export, and distribution.", image: "/images/freezone/trading-license.png" },
            { id: 2, title: "Industrial & Service", description: "For manufacturing, consulting, and professional services.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Abu Dhabi?",
            descriptions: [
                "Abu Dhabi offers unparalleled stability, immense financial backing, and a pro-business regulatory environment. It’s an ideal base for companies looking for sustainable growth, robust infrastructure, and seamless global connectivity."
            ]
        },
        faqs: {
            title: "Abu Dhabi Free Zone FAQ",
            faqItems: [
                {
                    question: "What is Abu Dhabi Free Zone Company Formation?",
                    answer: "Abu Dhabi Free Zone Company Formation is the process of establishing a business in one of Abu Dhabi’s free zones, allowing investors to benefit from 100% foreign ownership, tax advantages, and simplified company registration."
                },
                {
                    question: "What are the benefits of Abu Dhabi Free Zone Company Formation?",
                    answer: "Abu Dhabi Free Zone Company Formation offers 100% foreign ownership, full profit repatriation, streamlined licensing, flexible office solutions, and access to regional and international markets."
                },
                {
                    question: "How much does Abu Dhabi Free Zone Company Formation cost?",
                    answer: "The cost of Abu Dhabi Free Zone Company Formation depends on the selected free zone, business activity, license type, visa requirements, and office package."
                },
                {
                    question: "How long does Abu Dhabi Free Zone Company Formation take?",
                    answer: "Most Abu Dhabi Free Zone Company Formation applications can be completed within a few days to a few weeks, depending on the free zone authority, documentation, and approval process."
                },
                {
                    question: "What documents are required for Abu Dhabi Free Zone Company Formation?",
                    answer: "Typically, applicants need passport copies, passport-sized photographs, proof of address, business activity details, and completed registration forms for Abu Dhabi Free Zone Company Formation."
                }
            ]
        },
        costSection: {
            titleHighlight: "Abu Dhabi",
            titleRest: "Setup Costs",
            description: "The costs for setting up in an Abu Dhabi Free Zone vary significantly based on the chosen zone and facility requirements. Specific licenses may also entail different fees.",
            cards: [
                "License fees vary by free zone authority and specific business activity.",
                "Facility costs depend on whether you choose a flexi-desk, office, or land/warehouse lease.",
                "Visa fees apply per employee, including medical tests and Emirates ID.",
                "Additional costs may include portal registration and NOCs."
            ]
        },
        docsAndBenefits: {
            subzoneName: "Abu Dhabi",
            documentsText: "Typical required documentation includes passport copies of shareholders and managers, a detailed business plan (especially for ADGM or Masdar), and proof of residential address. Corporate entities forming a branch or subsidiary will need to provide notarized and attested parent company documents such as the Memorandum of Association and Board Resolution.",
            benefitsList: [
                "100% foreign ownership and full capital repatriation",
                "Tax-friendly environment with numerous financial incentives",
                "Access to some of the largest seaports and airports in the region",
                "Highly developed legal and regulatory frameworks",
                "World-class living and working environments"
            ]
        }
    },

    'masdar-city-company-setup-in-abudhabi': {
        slug: 'masdar-city-company-setup-in-abudhabi',
        parentEmirate: 'abu-dhabi',
        bannerTitle: "Masdar City Company Setup",
        bannerDescription: "Establish your innovative and sustainable business in Masdar City, Abu Dhabi's pioneering clean-tech and innovation free zone.",
        intro: {
            image: "/images/freezone/abu-dhabi-freezone/masdar-city.png",
            titleHighlight: "Masdar City",
            titleRest: "Company Formation",
            description1: "Masdar City Free Zone in Abu Dhabi is a rapidly growing hub designed for businesses focused on clean technology, renewable energy, and sustainable urban development. It offers a unique ecosystem that fosters innovation and collaboration.",
            description2: "Setting up your company in Masdar City provides access to cutting-edge research facilities, a community of like-minded innovators, and a strategic location close to Abu Dhabi International Airport."
        },
        keyFeatures: [
            "100% foreign ownership and full profit repatriation",
            "Zero corporate and personal income taxes",
            "Focus on renewable energy, clean tech, and sustainability",
            "Proximity to Abu Dhabi International Airport and key highways"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "Masdar City",
            steps: [
                { id: 1, title: "Select Activity", description: "Choose business activities aligned with Masdar City's innovative sectors." },
                { id: 2, title: "Submit Application", description: "Provide passport copies, a brief business profile, and application forms." },
                { id: 3, title: "Lease Office Space", description: "Select from sustainable flexi-desks, executive offices, or custom commercial spaces." },
                { id: 4, title: "License Issuance", description: "Receive your business license and proceed with residency visa processing." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Commercial License", description: "For trading, import, export, and distribution of specific products.", image: "/images/freezone/trading-license.png" },
            { id: 2, title: "Service & Consultancy", description: "For professional services, IT, research, and clean-tech consulting.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Masdar City?",
            descriptions: [
                "Masdar City is a pioneering urban community offering an unparalleled environment for green businesses. It provides high-quality infrastructure, R&D opportunities with local universities, and a prestigious global business address."
            ]
        },
        faqs: {
            title: "Masdar City Setup FAQ",
            faqItems: [
                {
                    question: "What are the benefits of setting up a company in Masdar City, Abu Dhabi?",
                    answer: "Masdar City offers 100% foreign ownership, full repatriation of profits and capital, competitive setup costs, flexible office solutions, and access to a thriving business ecosystem focused on innovation, technology, and sustainability."
                },
                {
                    question: "What types of business licenses are available in Masdar City Free Zone?",
                    answer: "Businesses can choose from several license types, including commercial, consultancy, service, trading, technology, and industrial-related activities. Multiple business activities can often be combined under a single license, subject to approval."
                },
                {
                    question: "How long does it take to complete a Masdar City company setup?",
                    answer: "The company formation process in Masdar City is generally fast and efficient. Depending on the business activity, documentation, and approvals required, a company can often be registered within a few business days."
                },
                {
                    question: "Can foreign investors own 100% of a company in Masdar City?",
                    answer: "Yes. Masdar City Free Zone allows foreign entrepreneurs and investors to own 100% of their company without the need for a local Emirati sponsor, making it an attractive option for international businesses."
                },
                {
                    question: "Does Masdar City company setup include UAE residency visa eligibility?",
                    answer: "Yes. Companies established in Masdar City can apply for UAE residence visas for business owners, partners, and employees, subject to visa quotas and compliance with free zone regulations."
                }
            ]
        },
        costSection: {
            titleHighlight: "Masdar City",
            titleRest: "Setup Costs",
            description: "Masdar City offers competitive setup packages tailored to startups, SMEs, and large corporations. The overall costs depend on the required facility and visa allocation.",
            cards: [
                "License fees vary depending on the chosen commercial or service activity.",
                "Real estate costs range from economical flexi-desks to premium sustainable offices.",
                "Visa processing and medical fitness fees apply per residency visa slot.",
                "Standard administrative and portal registration fees apply during incorporation."
            ]
        },
        docsAndBenefits: {
            subzoneName: "Masdar City",
            documentsText: "Company formation requires passport copies of shareholders and managers, passport-size photographs, and a brief business description. Corporate shareholders must provide notarized and attested parent company documents such as the Certificate of Incorporation and Board Resolution.",
            benefitsList: [
                "100% foreign ownership and full capital repatriation",
                "Zero corporate and personal income taxes",
                "Strategic location near Abu Dhabi International Airport",
                "Access to an ecosystem of global tech and green energy leaders",
                "Sustainable and cost-effective office solutions"
            ]
        }
    },

    'abudhabi-airport-freezone-setup': {
        slug: 'abudhabi-airport-freezone-setup',
        parentEmirate: 'abu-dhabi',
        bannerTitle: "Abu Dhabi Airport Free Zone (ADAFZ) Setup",
        bannerDescription: "Establish your logistics, aviation, or trading business at Abu Dhabi Airport Free Zone, offering unparalleled global connectivity and premium facilities.",
        intro: {
            image: "/images/freezone/abu-dhabi-freezone/abudhabi-airport.png",
            titleHighlight: "ADAFZ Abu Dhabi",
            titleRest: "Company Formation",
            description1: "Abu Dhabi Airport Free Zone (ADAFZ) provides a comprehensive business ecosystem strategically located near Abu Dhabi International Airport. It is designed to cater to logistics, aviation, aerospace, IT, and light manufacturing industries.",
            description2: "Operating from ADAFZ offers companies direct access to global markets, zero taxes, 100% foreign ownership, and top-tier commercial infrastructure that facilitates efficient cargo handling and distribution."
        },
        keyFeatures: [
            "100% foreign ownership and full repatriation of capital",
            "Zero corporate, personal, and import/export taxes",
            "Direct access to Abu Dhabi International Airport and key highways",
            "State-of-the-art logistics, warehousing, and commercial facilities"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "ADAFZ",
            steps: [
                { id: 1, title: "Initial Approval", description: "Submit your business plan and selected license type to the ADAFZ authority." },
                { id: 2, title: "Document Submission", description: "Provide passport copies, NOCs, and corporate documentation for review." },
                { id: 3, title: "Facility Selection", description: "Lease a suitable flexi-desk, office, or warehouse space within the free zone." },
                { id: 4, title: "License & Visa", description: "Obtain your trade license and proceed with residency visa applications." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Logistics & Aviation License", description: "For cargo, warehousing, freight forwarding, and aviation services.", image: "/images/freezone/trading-license.png" },
            { id: 2, title: "Commercial & Trading License", description: "For general trading, import, export, and distribution of goods.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "ADAFZ Abu Dhabi?",
            descriptions: [
                "ADAFZ offers a powerful combination of tax exemptions, world-class infrastructure, and a strategic location. It is the ideal gateway for companies looking to connect the East and West through advanced supply chain and aviation networks."
            ]
        },
        faqs: {
            title: "ADAFZ Setup FAQ",
            faqItems: [
                {
                    question: "What is Abu Dhabi Airport Free Zone (ADAFZ)?",
                    answer: "Abu Dhabi Airport Free Zone (ADAFZ) is a strategic free zone located near Abu Dhabi International Airport. It offers businesses access to global markets, world-class infrastructure, 100% foreign ownership, and streamlined company formation services."
                },
                {
                    question: "What are the benefits of setting up a company in ADAFZ?",
                    answer: "ADAFZ provides 100% foreign ownership, full profit repatriation, tax advantages, modern office facilities, proximity to major logistics hubs, and efficient business licensing processes for local and international investors."
                },
                {
                    question: "What types of business licenses are available in ADAFZ?",
                    answer: "Businesses can obtain commercial, trading, service, consultancy, logistics, aviation, and industrial licenses, depending on their activities and operational requirements."
                },
                {
                    question: "How long does it take to complete an ADAFZ company setup?",
                    answer: "The setup timeline varies based on business activity and documentation. In most cases, company registration and licensing can be completed within a few business days after submitting the required documents."
                },
                {
                    question: "Can foreign investors own 100% of their company in ADAFZ?",
                    answer: "Yes. Abu Dhabi Airport Free Zone allows 100% foreign ownership, enabling entrepreneurs and international companies to establish and operate their businesses without a local sponsor."
                }
            ]
        },
        costSection: {
            titleHighlight: "ADAFZ",
            titleRest: "Setup Costs",
            description: "Setup costs in ADAFZ are highly competitive, tailored to the specific needs of logistics, trading, and service companies. Total investment depends on facility choices and visa quotas.",
            cards: [
                "License fees are determined based on the specific business activities required.",
                "Real estate costs vary from dedicated desks to large-scale warehouses and land leases.",
                "Visa processing and medical fitness fees apply per residency visa slot.",
                "Standard administrative, NOC, and portal registration fees apply during incorporation."
            ]
        },
        docsAndBenefits: {
            subzoneName: "ADAFZ",
            documentsText: "Company setup in ADAFZ requires standard documentation such as passport copies, a concise business plan, and a No Objection Certificate (NOC) if currently employed in the UAE. Corporate shareholders must supply notarized and attested parent company documents.",
            benefitsList: [
                "100% foreign ownership and full capital repatriation",
                "Complete exemption from import, export, and corporate taxes",
                "Unmatched connectivity via air, land, and sea",
                "Fast-track company registration and visa processing",
                "Access to robust aviation and logistics infrastructure"
            ]
        }
    },

    'ajman-freezone-company-setup': {
        slug: 'ajman-freezone-company-setup',
        parentEmirate: 'ajman',
        bannerTitle: "Ajman Free Zone Company Setup",
        bannerDescription: "Start your business in Ajman Free Zone, offering cost-effective packages, 100% foreign ownership, and rapid setup for SMEs and freelancers.",
        intro: {
            image: "/images/freezone/ajman-freezone.png",
            titleHighlight: "Ajman Free Zone",
            titleRest: "Setup",
            description1: "Ajman Free Zone (AFZ) is renowned as one of the UAE's most affordable and investor-friendly business hubs. It is specifically designed to support startups, freelancers, and small-to-medium enterprises (SMEs) with low-cost setup packages.",
            description2: "With its strategic location near major ports and international airports, AFZ provides excellent connectivity, world-class facilities, and 100% foreign ownership without the need for a local sponsor."
        },
        keyFeatures: [
            "100% foreign ownership and full repatriation of profits",
            "Highly affordable and cost-effective business license packages",
            "Fast and efficient digital company registration process",
            "Ideal ecosystem for freelancers, startups, and e-commerce businesses"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "Ajman",
            steps: [
                { id: 1, title: "Choose Activity", description: "Select the appropriate license category (e.g., e-commerce, freelance, commercial)." },
                { id: 2, title: "Document Submission", description: "Submit passport copies, a brief business outline, and initial forms." },
                { id: 3, title: "Select Workspace", description: "Choose a smart office, flexi-desk, or executive office based on budget." },
                { id: 4, title: "License Issuance", description: "Receive your e-license quickly and begin visa processing." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "E-Commerce & Freelance", description: "For online businesses, digital marketing, and independent professionals.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Commercial License", description: "For general trading, import/export, and distribution activities.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Ajman Free Zone?",
            descriptions: [
                "AFZ provides unparalleled affordability, minimal bureaucratic hurdles, and excellent multi-modal transport links via the Ajman Port. It is the perfect launchpad for entrepreneurs seeking a cost-effective UAE base."
            ]
        },
        faqs: {
            title: "Ajman Free Zone FAQ",
            faqItems: [
                {
                    question: "What is Ajman Free Zone?",
                    answer: "Ajman Free Zone is one of the UAE’s leading free zones, offering cost-effective business setup solutions, 100% foreign ownership, tax benefits, and a business-friendly environment for startups, SMEs, and international investors."
                },
                {
                    question: "What are the benefits of setting up a company in Ajman Free Zone?",
                    answer: "Key benefits include 100% foreign ownership, full repatriation of profits and capital, affordable license packages, quick company registration, flexible office options, and access to UAE and international markets."
                },
                {
                    question: "What types of business licenses are available in Ajman Free Zone?",
                    answer: "Ajman Free Zone offers commercial, trading, service, industrial, e-commerce, consultancy, and freelance licenses to support a wide range of business activities."
                },
                {
                    question: "How long does it take to set up a company in Ajman Free Zone?",
                    answer: "The company formation process is typically fast and can often be completed within a few business days, depending on the business activity, documentation, and approval requirements."
                },
                {
                    question: "Can foreign investors own 100% of a company in Ajman Free Zone?",
                    answer: "Yes. Ajman Free Zone allows 100% foreign ownership, enabling entrepreneurs and overseas investors to establish and manage their businesses without a local sponsor."
                }
            ]
        },
        costSection: {
            titleHighlight: "Ajman Free Zone",
            titleRest: "Setup Costs",
            description: "Ajman Free Zone offers some of the most competitive pricing in the UAE, especially with their pioneer packages for freelancers and e-commerce.",
            cards: [
                "License fees are very affordable, with special packages for youth and freelancers.",
                "Facility options start with highly economical flexi-desks and smart offices.",
                "Visa fees apply per employee, but investor visa packages are competitively priced.",
                "Minimal administrative and registration fees compared to other emirates."
            ]
        },
        docsAndBenefits: {
            subzoneName: "Ajman Free Zone",
            documentsText: "The documentation process is streamlined and primarily digital. You will need passport copies, a passport-sized photo, and a basic business description. Corporate shareholders require standard attested parent company documents.",
            benefitsList: [
                "100% foreign ownership with zero corporate and personal income taxes",
                "Some of the lowest setup and operational costs in the UAE",
                "Fully digital and rapid company formation process",
                "Strategic access to Ajman Port for trading and logistics",
                "Flexible installment payment plans for startup packages"
            ]
        }
    },

    'umm-al-quwain-freezone-company-setup': {
        slug: 'umm-al-quwain-freezone-company-setup',
        parentEmirate: 'umm-al-quwain',
        bannerTitle: "Umm Al Quwain Free Zone Setup",
        bannerDescription: "Establish your business in UAQ Free Trade Zone, offering rapid incorporation, affordability, and a highly business-friendly environment.",
        intro: {
            image: "/images/freezone/umm-al-quwain.png",
            titleHighlight: "UAQ Free Zone",
            titleRest: "Company Formation",
            description1: "Umm Al Quwain Free Trade Zone (UAQ FTZ) is a rapidly growing, investor-friendly hub located just 45 minutes from Dubai. It is highly regarded for its straightforward registration process, minimal bureaucracy, and exceptional affordability.",
            description2: "Whether you are a freelancer, an SME, or an international corporation, UAQ FTZ provides a secure and progressive ecosystem with 100% foreign ownership, full capital repatriation, and access to an extensive global network."
        },
        keyFeatures: [
            "100% foreign ownership and full repatriation of capital",
            "Extremely affordable business setup packages",
            "Zero corporate and personal taxes",
            "Fast-track company registration with minimal documentation"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "UAQ FTZ",
            steps: [
                { id: 1, title: "Select License", description: "Choose from commercial, freelance, consultancy, or industrial licenses." },
                { id: 2, title: "Submit Documents", description: "Provide passport copies, business details, and the application form." },
                { id: 3, title: "Payment & Lease", description: "Process the fee payment and select your office or warehouse space." },
                { id: 4, title: "Receive License", description: "Collect your trade license and proceed with residency visas." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Commercial & Trading", description: "For importing, exporting, and distributing specified goods.", image: "/images/freezone/trading-license.png" },
            { id: 2, title: "Freelance & Service", description: "For independent professionals and specialized consultancy services.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "UAQ Free Zone?",
            descriptions: [
                "UAQ FTZ offers one of the most cost-effective and hassle-free environments in the UAE. Its open investment climate and modern infrastructure make it the perfect choice for micro-businesses and large conglomerates alike."
            ]
        },
        faqs: {
            title: "UAQ Free Zone Setup FAQ",
            faqItems: [
                {
                    question: "What is Umm Al Quwain Free Zone (UAQ Free Zone)?",
                    answer: "Umm Al Quwain Free Zone is a business-friendly free zone in the UAE that offers affordable company formation solutions, 100% foreign ownership, flexible licensing options, and a simple registration process for entrepreneurs and investors."
                },
                {
                    question: "What are the benefits of setting up a company in Umm Al Quwain Free Zone?",
                    answer: "Key benefits include 100% foreign ownership, full repatriation of profits and capital, cost-effective business setup packages, quick company registration, flexible office solutions, and access to UAE and global markets."
                },
                {
                    question: "What types of business licenses are available in UAQ Free Zone?",
                    answer: "UAQ Free Zone offers commercial, trading, consultancy, service, industrial, freelance, and e-commerce licenses, allowing businesses to operate across various sectors."
                },
                {
                    question: "How long does it take to set up a company in Umm Al Quwain Free Zone?",
                    answer: "The company formation process is usually fast and can often be completed within a few business days, depending on the business activity, documentation, and approval requirements."
                },
                {
                    question: "Can foreign investors own 100% of a company in the UAQ Free Zone?",
                    answer: "Yes. Umm Al Quwain Free Zone allows 100% foreign ownership, enabling international entrepreneurs and investors to establish and operate their businesses without a local sponsor."
                }
            ]
        },
        costSection: {
            titleHighlight: "UAQ Free Zone",
            titleRest: "Setup Costs",
            description: "UAQ FTZ is famous for its budget-friendly licensing, making it an ideal destination for startups. Costs scale based on the number of visas and the type of facility required.",
            cards: [
                "Highly competitive license fees tailored for SMEs and freelancers.",
                "Economical office spaces ranging from flexi-desks to executive offices.",
                "Visa processing and medical fitness fees apply per residency visa slot.",
                "Low administrative and renewal fees compared to other jurisdictions."
            ]
        },
        docsAndBenefits: {
            subzoneName: "UAQ FTZ",
            documentsText: "The setup process in UAQ Free Zone requires minimal paperwork. Standard documents include passport copies, proof of address, and passport-sized photographs. No No Objection Certificate (NOC) is typically required from a current sponsor.",
            benefitsList: [
                "100% foreign ownership and zero tax liability",
                "No proof of share capital required for company formation",
                "Investor-friendly regulations and simplified procedures",
                "Ideal location with easy access to Dubai and Sharjah",
                "Cost-effective real estate and operational expenses"
            ]
        }
    },

    'ras-al-khaimah-company-formation': {
        slug: 'ras-al-khaimah-company-formation',
        parentEmirate: 'ras-al-khaimah',
        bannerTitle: "Ras Al Khaimah Company Formation",
        bannerDescription: "Establish your business in Ras Al Khaimah, offering highly competitive free zone and mainland setup solutions with 100% foreign ownership.",
        intro: {
            image: "/images/freezone/ras-al-khaimah.png",
            titleHighlight: "Ras Al Khaimah",
            titleRest: "Setup",
            description1: "Ras Al Khaimah (RAK) is rapidly emerging as a premier investment destination in the UAE, known for its cost-effectiveness, industrial prowess, and investor-friendly policies. Whether you choose RAKEZ (Ras Al Khaimah Economic Zone) or a mainland setup, RAK provides a solid foundation for growth.",
            description2: "RAK offers specialized zones tailored for industrial, manufacturing, trading, and service sectors. With its strategic geographic location, deep-water ports, and zero taxation, it is an ideal gateway to the Middle East, Africa, and beyond."
        },
        keyFeatures: [
            "100% foreign ownership in free zones and specific mainland activities",
            "Highly competitive setup costs and affordable living standard",
            "Zero corporate and personal income taxes",
            "State-of-the-art industrial, commercial, and logistics infrastructure"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "RAK",
            steps: [
                { id: 1, title: "Select Jurisdiction", description: "Choose between RAK Mainland or RAKEZ based on your target market." },
                { id: 2, title: "Submit Application", description: "Provide passport copies, business plan, and complete the registration forms." },
                { id: 3, title: "Lease Facility", description: "Select from flexi-desks, standard offices, or large industrial warehouses." },
                { id: 4, title: "Obtain License", description: "Receive your business license and proceed with residency visas." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Industrial & Manufacturing", description: "For light to heavy manufacturing, processing, and packaging.", image: "/images/freezone/trading-license.png" },
            { id: 2, title: "Commercial & Service", description: "For trading, consulting, professional services, and e-commerce.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Ras Al Khaimah?",
            descriptions: [
                "RAK combines a low cost of doing business with world-class infrastructure. Its strategic ports and free zones cater extensively to industrial giants and agile startups alike, making it a highly versatile and profitable environment."
            ]
        },
        faqs: {
            title: "Ras Al Khaimah Setup FAQ",
            faqItems: [
                {
                    question: "What is Ras Al Khaimah company formation?",
                    answer: "Ras Al Khaimah (RAK) company formation refers to the process of establishing a business in Ras Al Khaimah through either a free zone or mainland structure. It offers investors a cost-effective and efficient way to start and grow a business in the UAE."
                },
                {
                    question: "What are the benefits of setting up a company in Ras Al Khaimah?",
                    answer: "RAK offers 100% foreign ownership in free zones, competitive setup costs, tax advantages, flexible office solutions, easy business registration, and access to local and international markets."
                },
                {
                    question: "What types of business licenses are available in Ras Al Khaimah?",
                    answer: "Businesses can obtain commercial, trading, consultancy, service, industrial, manufacturing, e-commerce, and professional licenses depending on their business activities."
                },
                {
                    question: "Can foreign investors own 100% of a company in Ras Al Khaimah?",
                    answer: "Yes. Foreign investors can enjoy 100% ownership in Ras Al Khaimah free zones and in many mainland business activities, subject to UAE regulations."
                },
                {
                    question: "How long does it take to complete company formation in Ras Al Khaimah?",
                    answer: "The company registration process is generally quick and can often be completed within a few business days, depending on the business activity, documentation, and approval requirements."
                }
            ]
        },
        costSection: {
            titleHighlight: "Ras Al Khaimah",
            titleRest: "Setup Costs",
            description: "RAK offers highly scalable and affordable pricing structures. It is particularly renowned for its cost-effective industrial land leases and warehouse facilities.",
            cards: [
                "License fees vary based on commercial, service, or industrial activities.",
                "Facility options include everything from cheap co-working spaces to massive industrial plots.",
                "Visa processing and medical fitness fees apply per residency visa slot.",
                "Standard administrative and governmental fees apply during registration."
            ]
        },
        docsAndBenefits: {
            subzoneName: "Ras Al Khaimah",
            documentsText: "Required documents typically include passport copies, a brief business summary, and a passport-size photo. For industrial setups, a detailed business and environmental plan may be required. Corporate shareholders must supply standard attested corporate documents.",
            benefitsList: [
                "100% foreign ownership with zero personal and corporate taxes",
                "Access to specialized industrial and commercial zones",
                "Streamlined and rapid company registration processes",
                "Strategic access to major sea ports and airports",
                "Significantly lower operational and living costs compared to other emirates"
            ]
        }
    },

    'sharjah-freezone-company-formation': {
        slug: 'sharjah-freezone-company-formation',
        parentEmirate: 'sharjah',
        bannerTitle: "Sharjah Free Zone Company Formation",
        bannerDescription: "Establish your business in Sharjah's dynamic free zones, offering 100% foreign ownership, strategic access to ports, and cost-effective setup packages.",
        intro: {
            image: "/images/freezone/sharjah.png",
            titleHighlight: "Sharjah Free Zone",
            titleRest: "Setup",
            description1: "Sharjah is a major industrial and cultural hub in the UAE, providing investors with a highly diversified economy and access to world-class free zones like SHAMS, SAIF Zone, and SPC Free Zone.",
            description2: "Setting up a company in a Sharjah Free Zone offers entrepreneurs unparalleled benefits, including 100% foreign ownership, zero taxes, and streamlined regulatory processes. It is particularly attractive for media, publishing, technology, and manufacturing sectors."
        },
        keyFeatures: [
            "100% foreign ownership and full capital repatriation",
            "Zero corporate and personal income taxes",
            "Access to major seaports on the Arabian Gulf and Indian Ocean",
            "Diverse, specialized free zones catering to specific industries"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "Sharjah",
            steps: [
                { id: 1, title: "Choose Free Zone", description: "Select the specific Sharjah Free Zone (e.g., SHAMS, SAIF) that fits your sector." },
                { id: 2, title: "Submit Application", description: "Provide business plans, passport copies, and required forms." },
                { id: 3, title: "Lease Space", description: "Secure a flexi-desk, office, or warehouse depending on your license type." },
                { id: 4, title: "Receive License", description: "Obtain your trade license and proceed with UAE residency visas." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Media & Publishing", description: "For creative agencies, broadcasting, media production, and publishing.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Commercial & Industrial", description: "For trading, logistics, import/export, and light-to-heavy manufacturing.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Sharjah Free Zones?",
            descriptions: [
                "Sharjah uniquely offers direct access to multiple coasts and major international airports. Its free zones are known for low operational costs, highly skilled labor pools, and business-friendly policies that nurture startups and enterprises."
            ]
        },
        faqs: {
            title: "Sharjah Free Zone FAQ",
            faqItems: [
                {
                    question: "What is Sharjah Free Zone Company Formation?",
                    answer: "Sharjah Free Zone Company Formation is the process of establishing a business in one of Sharjah's free zones, such as SHAMS, SPC Free Zone, SAIF Zone, or SRTIP. These free zones offer 100% foreign ownership, streamlined registration, and business-friendly regulations."
                },
                {
                    question: "What are the benefits of setting up a company in a Sharjah Free Zone?",
                    answer: "Businesses benefit from 100% foreign ownership, cost-effective setup packages, tax advantages, flexible office solutions, visa eligibility, and access to regional and international markets."
                },
                {
                    question: "Which Sharjah free zones are most popular for company formation?",
                    answer: "Popular free zones include Sharjah Media City (SHAMS), Sharjah Publishing City (SPCFZ), Sharjah Airport International Free Zone (SAIF Zone), and Sharjah Research Technology and Innovation Park (SRTIP), each catering to different industries and business requirements."
                },
                {
                    question: "Can foreign investors own 100% of a Sharjah Free Zone company?",
                    answer: "Yes. Sharjah free zones allow 100% foreign ownership, enabling entrepreneurs and investors to fully own and control their businesses without requiring a local sponsor."
                },
                {
                    question: "How long does it take to set up a company in a Sharjah Free Zone?",
                    answer: "The setup timeline depends on the chosen free zone and activity. Some free zones offer fast-track licensing, with certain licenses issued within days once documentation is approved."
                }
            ]
        },
        costSection: {
            titleHighlight: "Sharjah",
            titleRest: "Setup Costs",
            description: "Sharjah offers a variety of setup packages, from highly affordable freelance and media licenses in SHAMS to large-scale industrial leases in SAIF Zone.",
            cards: [
                "License fees are dependent on the specific free zone and activities selected.",
                "Facility costs vary widely from virtual offices to large industrial warehouses.",
                "Visa fees apply for investors and employees, including medical and Emirates ID.",
                "Standard incorporation, portal access, and administrative fees apply."
            ]
        },
        docsAndBenefits: {
            subzoneName: "Sharjah",
            documentsText: "General requirements include passport copies, a brief business summary, and passport photos. Specialized activities (like healthcare or education) may require additional approvals. Corporate entities require standard notarized and attested parent company documentation.",
            benefitsList: [
                "100% foreign ownership and full capital repatriation",
                "Total exemption from corporate and personal income taxes",
                "Strategic location connecting the Arabian Gulf and the Indian Ocean",
                "World-class infrastructure and dedicated industry clusters",
                "Access to a vast and diverse pool of skilled talent"
            ]
        }
    },

    'sharjah-media-city-shams-setup-in-sharjah': {
        slug: 'sharjah-media-city-shams-setup-in-sharjah',
        parentEmirate: 'sharjah',
        bannerTitle: "Sharjah Media City (SHAMS) Setup",
        bannerDescription: "Launch your business in Sharjah Media City (SHAMS), the UAE’s fastest-growing media and creative free zone, offering low-cost licenses and 100% foreign ownership.",
        intro: {
            image: "/images/freezone/sharjah.png",
            titleHighlight: "SHAMS",
            titleRest: "Company Formation",
            description1: "Sharjah Media City (SHAMS) is an innovative, dynamic, and highly affordable free zone designed to foster creative, media, and tech-driven businesses. It is an ideal incubator for entrepreneurs, startups, and freelancers.",
            description2: "SHAMS offers highly flexible and cost-effective setup packages that allow you to combine multiple business activities under a single license. With 100% foreign ownership and zero taxation, it empowers global talent to thrive in a world-class digital ecosystem."
        },
        keyFeatures: [
            "100% foreign ownership and 100% repatriation of capital and profits",
            "Zero corporate and personal income taxes",
            "Ability to combine diverse business activities on one license",
            "Highly affordable freelance and startup license packages"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "SHAMS",
            steps: [
                { id: 1, title: "Select Package", description: "Choose a license package based on your activities and visa requirements." },
                { id: 2, title: "Submit Documents", description: "Provide passport copies, photo, and complete the digital application." },
                { id: 3, title: "Payment Processing", description: "Pay the required fees through SHAMS’ streamlined online portal." },
                { id: 4, title: "Receive E-License", description: "Obtain your digital trade license quickly and begin operations." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Media & Freelance", description: "For creatives, consultants, digital marketers, and solo professionals.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Commercial & Trading", description: "For general trading, e-commerce, and import/export activities.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "SHAMS?",
            descriptions: [
                "SHAMS is celebrated for its incredibly fast and fully digital incorporation process. It is the perfect launchpad for media professionals and SMEs looking for a prestigious UAE address without high overhead costs."
            ]
        },
        faqs: {
            title: "SHAMS Setup FAQ",
            faqItems: [
                {
                    question: "What is Sharjah Media City (SHAMS)?",
                    answer: "Sharjah Media City (SHAMS) is a leading free zone in Sharjah that supports entrepreneurs, startups, freelancers, and international investors. It offers cost-effective company formation, 100% foreign ownership, and a wide range of business activities."
                },
                {
                    question: "What are the benefits of setting up a company in SHAMS?",
                    answer: "SHAMS offers 100% foreign ownership, affordable license packages, quick company registration, flexible office solutions, UAE residency visa eligibility, and the ability to conduct multiple business activities under one license."
                },
                {
                    question: "What types of business licenses are available in SHAMS?",
                    answer: "SHAMS provides various license options, including media, commercial, consultancy, service, trading, e-commerce, and creative industry licenses, catering to different business sectors."
                },
                {
                    question: "Can I obtain a UAE residency visa through a SHAMS company?",
                    answer: "Yes. SHAMS company owners and eligible employees can apply for UAE residency visas, subject to the free zone's visa allocation and immigration requirements."
                },
                {
                    question: "How long does it take to set up a company in SHAMS?",
                    answer: "The SHAMS company formation process is streamlined and can often be completed within a few business days, depending on the selected business activity and documentation requirements."
                }
            ]
        },
        costSection: {
            titleHighlight: "SHAMS",
            titleRest: "Setup Costs",
            description: "SHAMS provides some of the lowest setup costs in the UAE, particularly for zero-visa packages and media freelancers. Costs increase incrementally based on visa quotas.",
            cards: [
                "License fees start at very low rates for zero-visa media or commercial licenses.",
                "Facility options include shared desks, dedicated desks, and private offices.",
                "Visa processing and medical fitness fees apply per residency visa slot.",
                "Standard administrative and e-channel registration fees apply."
            ]
        },
        docsAndBenefits: {
            subzoneName: "SHAMS",
            documentsText: "The registration process is entirely online, requiring only a clear passport copy, a passport-sized photograph, and a brief description of the intended business activities. Corporate shareholders need to provide standard attested corporate documents.",
            benefitsList: [
                "100% foreign ownership with zero tax liability",
                "Fully digital, paperless, and rapid company registration",
                "Wide variety of allowable activities under a single license",
                "No requirement for physical presence during incorporation",
                "Cost-effective visa packages and flexi-desk options"
            ]
        }
    },

    'SRTIP-freezone-setup-in-sharjah': {
        slug: 'SRTIP-freezone-setup-in-sharjah',
        parentEmirate: 'sharjah',
        bannerTitle: "SRTIP Free Zone Setup in Sharjah",
        bannerDescription: "Establish your innovative and tech-driven business in the Sharjah Research, Technology and Innovation Park (SRTIP).",
        intro: {
            image: "/images/freezone/sharjah.png",
            titleHighlight: "SRTIP",
            titleRest: "Company Formation",
            description1: "Sharjah Research, Technology and Innovation Park (SRTIP) is a leading free zone focused on innovation, technology, research, sustainability, advanced manufacturing, and knowledge-based industries.",
            description2: "Setting up your business in SRTIP offers unparalleled access to University City's academic talent pool and provides a highly supportive ecosystem for startups, SMEs, and R&D-focused international corporations."
        },
        keyFeatures: [
            "100% foreign ownership and full repatriation of profits",
            "Zero corporate and personal income taxes",
            "Focus on innovation, research, and emerging technologies",
            "Access to an ecosystem of universities and academic research"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "SRTIP",
            steps: [
                { id: 1, title: "Business Activity", description: "Select the appropriate tech, research, or commercial license." },
                { id: 2, title: "Submit Application", description: "Provide business plans, passport copies, and completed forms." },
                { id: 3, title: "Select Workspace", description: "Choose from smart desks, high-tech labs, or premium offices." },
                { id: 4, title: "Obtain License", description: "Receive your business license and proceed with UAE residency." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Technology & Research", description: "For IT, software, R&D, green tech, and innovation services.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Commercial & Trading", description: "For technology trading, e-commerce, and specialized distribution.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "SRTIP?",
            descriptions: [
                "SRTIP is specifically designed for visionary entrepreneurs. It offers state-of-the-art facilities, access to substantial academic resources, and a thriving community of tech innovators right in the heart of Sharjah."
            ]
        },
        faqs: {
            title: "SRTIP Setup FAQ",
            faqItems: [
                {
                    question: "What is the SRTIP Free Zone in Sharjah?",
                    answer: "Sharjah Research, Technology and Innovation Park (SRTIP) is a leading free zone focused on innovation, technology, research, sustainability, advanced manufacturing, and knowledge-based industries. It provides a supportive environment for startups, SMEs, and international businesses."
                },
                {
                    question: "What are the benefits of setting up a company in SRTIP?",
                    answer: "SRTIP offers 100% foreign ownership, full repatriation of profits and capital, flexible office solutions, access to innovation ecosystems, strategic partnerships, and a streamlined company formation process."
                },
                {
                    question: "What types of business licenses are available in SRTIP?",
                    answer: "SRTIP offers various license options, including commercial, consultancy, service, trading, industrial, research, technology, and innovation-focused business activities."
                },
                {
                    question: "Can foreign investors own 100% of an SRTIP company?",
                    answer: "Yes. SRTIP allows 100% foreign ownership, enabling entrepreneurs and international investors to establish and operate their businesses without a local sponsor."
                },
                {
                    question: "Can I obtain a UAE residency visa through an SRTIP company?",
                    answer: "Yes. SRTIP company owners, shareholders, and employees can apply for UAE residency visas, subject to the selected business package and immigration regulations."
                }
            ]
        },
        costSection: {
            titleHighlight: "SRTIP",
            titleRest: "Setup Costs",
            description: "SRTIP offers specialized setup packages tailored to tech startups and research companies. Total costs vary based on the required laboratory, office space, and visa allocations.",
            cards: [
                "License fees are determined by the specific tech or commercial activities chosen.",
                "Real estate costs range from economical hot desks to advanced research labs.",
                "Visa processing and medical fitness fees apply per residency visa slot.",
                "Standard administrative, NOC, and portal registration fees apply during incorporation."
            ]
        },
        docsAndBenefits: {
            subzoneName: "SRTIP",
            documentsText: "Company formation requires a detailed business plan (especially for research or tech activities), passport copies of shareholders, and passport-size photographs. Corporate entities must provide notarized parent company documents.",
            benefitsList: [
                "100% foreign ownership with zero corporate and personal income taxes",
                "Integration with University City's vast academic network",
                "World-class technology labs and innovation centers",
                "Cost-effective setup and visa packages for tech startups"
            ]
        }
    },

    'SPCFZ-company-setup-in-sharjah': {
        slug: 'SPCFZ-company-setup-in-sharjah',
        parentEmirate: 'sharjah',
        bannerTitle: "Sharjah Publishing City (SPCFZ) Setup",
        bannerDescription: "Establish your company in SPC Free Zone, offering 100% foreign ownership, rapid dual-licensing, and a diverse range of business activities.",
        intro: {
            image: "/images/freezone/sharjah.png",
            titleHighlight: "SPCFZ",
            titleRest: "Company Formation",
            description1: "Sharjah Publishing City Free Zone (SPCFZ) is an exceptionally flexible and business-friendly free zone designed to cater to entrepreneurs, publishers, and investors globally. It provides state-of-the-art infrastructure for various commercial and creative enterprises.",
            description2: "A major advantage of SPCFZ is its unique dual-licensing option, allowing businesses to operate both within the free zone and on the UAE mainland from a single strategic location, streamlining market access across the Emirates."
        },
        keyFeatures: [
            "100% foreign ownership with zero corporate and personal taxes",
            "Unique dual-license option (Free Zone & Mainland in one location)",
            "Ability to combine up to 5 diverse activities under one license",
            "Rapid company formation, often completed in just 45 minutes"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "SPCFZ",
            steps: [
                { id: 1, title: "Select License", description: "Choose up to 5 business activities (publishing, e-commerce, consulting, etc.)." },
                { id: 2, title: "Submit Application", description: "Provide passport copies, photo, and complete the registration form." },
                { id: 3, title: "Choose Workspace", description: "Select from co-working spaces, furnished offices, or storage units." },
                { id: 4, title: "Obtain License", description: "Receive your business license instantly and begin visa processing." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Publishing & Media", description: "For publishers, printing, distribution, and creative agencies.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Commercial & E-commerce", description: "For general trading, e-commerce, consulting, and diverse services.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "SPCFZ?",
            descriptions: [
                "SPCFZ is highly praised for its unmatched speed of incorporation and incredible flexibility. It’s an ideal hub for entrepreneurs wanting to blend e-commerce, consulting, and trading under a single, highly affordable trade license."
            ]
        },
        faqs: {
            title: "SPCFZ Setup FAQ",
            faqItems: [
                {
                    question: "What is SPCFZ in Sharjah?",
                    answer: "Sharjah Publishing City Free Zone (SPCFZ) is a business-friendly free zone in Sharjah that supports entrepreneurs, startups, SMEs, and international investors with flexible company formation solutions and a wide range of licensed business activities."
                },
                {
                    question: "What are the benefits of setting up a company in SPCFZ?",
                    answer: "SPCFZ offers 100% foreign ownership, full repatriation of profits and capital, fast company registration, flexible office solutions, affordable business packages, and eligibility for UAE residency visas."
                },
                {
                    question: "What types of business licenses are available in SPCFZ?",
                    answer: "SPCFZ provides commercial, consultancy, service, trading, media, publishing, e-commerce, and industrial licenses, allowing businesses to operate across multiple sectors."
                },
                {
                    question: "Can foreign investors own 100% of an SPCFZ company?",
                    answer: "Yes. SPCFZ allows 100% foreign ownership, enabling investors to establish and manage their businesses without the need for a local sponsor."
                },
                {
                    question: "How long does it take to set up a company in SPCFZ?",
                    answer: "The company formation process is efficient and can often be completed within a few business days, depending on the business activity, documentation, and approval requirements."
                }
            ]
        },
        costSection: {
            titleHighlight: "SPCFZ",
            titleRest: "Setup Costs",
            description: "SPCFZ is known for highly competitive and comprehensive startup packages, particularly their multi-year visa offerings and dual-license options.",
            cards: [
                "License fees are highly affordable, allowing multiple activities at no extra cost.",
                "Facility options include everything from cheap virtual desks to premium fitted offices.",
                "Visa processing and medical fitness fees apply per residency visa slot.",
                "Multi-year business packages provide significant long-term discounts."
            ]
        },
        docsAndBenefits: {
            subzoneName: "SPCFZ",
            documentsText: "The setup process is entirely digital and paperless. You will need to provide a clear passport copy, a passport-sized photograph, and a brief description of the intended business activities. Standard attested documents are required for corporate shareholders.",
            benefitsList: [
                "100% foreign ownership and zero tax liability",
                "Ultra-fast company registration process",
                "Option to operate both Free Zone and Mainland entities",
                "No No Objection Certificate (NOC) required from current sponsors",
                "Strategic location near Dubai with easy access to major highways"
            ]
        }
    },

    'hamriyah-freezone-setup-in-dubai': {
        slug: 'hamriyah-freezone-setup-in-dubai',
        parentEmirate: 'sharjah',
        bannerTitle: "Hamriyah Free Zone Setup",
        bannerDescription: "Start your business in Hamriyah Free Zone, Sharjah's premier industrial and commercial hub offering 100% foreign ownership and deep-water port access.",
        intro: {
            image: "/images/freezone/sharjah.png",
            titleHighlight: "Hamriyah Free Zone",
            titleRest: "Company Formation",
            description1: "Hamriyah Free Zone (HFZA) is one of the UAE's most dynamic and fast-growing free zones, recognized globally as a prime industrial and commercial hub. Strategically located in Sharjah, it provides investors with a highly competitive edge.",
            description2: "HFZA offers an incredibly versatile ecosystem, seamlessly accommodating heavy manufacturing alongside SMEs and trading companies. It features a deep-water port, extensive logistics infrastructure, and highly affordable land lease rates."
        },
        keyFeatures: [
            "100% foreign ownership with zero corporate and personal taxes",
            "Access to a dedicated deep-water port and extensive logistics network",
            "Highly affordable leasing rates for land, warehouses, and offices",
            "Unrivaled connectivity to major UAE highways and international airports"
        ],
        setupProcess: {
            titleHighlight: "Setup Steps in",
            titleRest: "HFZA",
            steps: [
                { id: 1, title: "Choose Activity", description: "Select the appropriate commercial, industrial, or service license." },
                { id: 2, title: "Submit Documents", description: "Provide business plans, passports, and the application forms." },
                { id: 3, title: "Facility Selection", description: "Lease a standard office, warehouse, or plot of industrial land." },
                { id: 4, title: "Receive License", description: "Obtain your HFZA trade license and process UAE residency visas." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Industrial & Manufacturing", description: "For heavy industry, manufacturing, processing, and assembly.", image: "/images/freezone/trading-license.png" },
            { id: 2, title: "Commercial & Logistics", description: "For trading, import/export, warehousing, and supply chain services.", image: "/images/freezone/service-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Hamriyah Free Zone?",
            descriptions: [
                "HFZA stands out for its vast scale and unparalleled logistics capabilities. With its own deep-water port and highly cost-effective land, it is the undisputed choice for heavy industry, maritime, and large-scale trading enterprises in the region."
            ]
        },
        faqs: {
            title: "Hamriyah Free Zone FAQ",
            faqItems: [
                {
                    question: "What is Hamriyah Free Zone in Sharjah?",
                    answer: "Hamriyah Free Zone (HFZA) is one of the UAE's leading free zones, offering business setup opportunities for trading, manufacturing, logistics, industrial, and service-based companies. It is strategically located near major ports and transportation networks."
                },
                {
                    question: "What are the benefits of setting up a company in Hamriyah Free Zone?",
                    answer: "Hamriyah Free Zone offers 100% foreign ownership, full repatriation of profits and capital, competitive setup costs, world-class infrastructure, warehousing facilities, and access to regional and international markets."
                },
                {
                    question: "What types of business licenses are available in Hamriyah Free Zone?",
                    answer: "HFZA provides commercial, trading, industrial, service, logistics, manufacturing, and consultancy licenses to support a wide range of business activities."
                },
                {
                    question: "Can foreign investors own 100% of a Hamriyah Free Zone company?",
                    answer: "Yes. Foreign investors can enjoy 100% ownership of their company without the need for a local sponsor, making HFZA an attractive option for international businesses."
                },
                {
                    question: "Can I obtain a UAE residency visa through a Hamriyah Free Zone company?",
                    answer: "Yes. Company owners, shareholders, and employees can apply for UAE residency visas through their Hamriyah Free Zone company, subject to visa eligibility and free zone regulations."
                }
            ]
        },
        costSection: {
            titleHighlight: "Hamriyah",
            titleRest: "Setup Costs",
            description: "HFZA provides extremely competitive rates, particularly for industrial land and large warehousing. Costs scale based on the specific facility requirements.",
            cards: [
                "Commercial and service license fees are highly competitive for SMEs.",
                "Industrial leases (land and warehouses) offer some of the best rates in the UAE.",
                "Visa processing and medical fitness fees apply per residency visa slot.",
                "Standard administrative, environmental (if applicable), and registration fees apply."
            ]
        },
        docsAndBenefits: {
            subzoneName: "HFZA",
            documentsText: "General requirements include passport copies and a brief business summary. Industrial activities require detailed business and environmental plans. Corporate shareholders must supply standard attested corporate documents from their home country.",
            benefitsList: [
                "100% foreign ownership and full repatriation of capital",
                "Total exemption from corporate, personal, and import/export taxes",
                "Dedicated 14-meter deep-water port within the free zone",
                "Pre-built warehouses, office units, and vast plots of industrial land",
                "Streamlined setup process tailored for both SMEs and heavy industries"
            ]
        }
    }
};

// A dynamic fallback generator to generate high-quality pages for any other free zone
// e.g., 'dubai-airport-dafza', 'difc', 'dubai-south', 'masdar-city', 'sharjah-media-city-shams', etc.
// This ensures no page has placeholders and all are dynamically supported!
export function getFreezoneData(slug) {
    // If we have custom detailed data, return it
    if (freezoneDetailedData[slug]) {
        return freezoneDetailedData[slug];
    }

    // Otherwise, generate it dynamically based on the slug to make it look professional and real!
    // We break the slug into a human-readable title
    let formattedTitle = '';
    let parentEmirate = 'Dubai';

    // Map specific subzones to their formal names
    if (slug.includes('shams')) {
        formattedTitle = "Sharjah Media City (SHAMS)";
        parentEmirate = 'Sharjah';
    } else if (slug.includes('spcfz')) {
        formattedTitle = "Sharjah Publishing City (SPCFZ)";
        parentEmirate = 'Sharjah';
    } else if (slug.toLowerCase().includes('srtip')) {
        formattedTitle = "SRTIP Free Zone";
        parentEmirate = 'Sharjah';
    } else if (slug.includes('hamriyah')) {
        formattedTitle = "Hamriyah Free Zone";
        parentEmirate = 'Sharjah';
    } else {
        // Fallback title formatting
        let cleanSlug = slug;
        if (cleanSlug.endsWith('-setup-in-sharjah')) {
            cleanSlug = cleanSlug.replace('-setup-in-sharjah', '');
        } else if (cleanSlug.endsWith('-setup-in-dubai')) {
            cleanSlug = cleanSlug.replace('-setup-in-dubai', '');
        } else if (cleanSlug.endsWith('-setup-in-abudhabi')) {
            cleanSlug = cleanSlug.replace('-setup-in-abudhabi', '');
        }
        cleanSlug = cleanSlug.replace(/-/g, ' ');
        const titleWords = cleanSlug.split(' ');
        formattedTitle = titleWords.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

        // Guess parent emirate from slug or default to Dubai
        if (slug.includes('sharjah')) {
            parentEmirate = 'Sharjah';
        } else if (slug.includes('abu-dhabi') || slug.includes('masdar') || slug.includes('adgm')) {
            parentEmirate = 'Abu Dhabi';
        } else if (slug.includes('ajman')) {
            parentEmirate = 'Ajman';
        } else if (slug.includes('rak') || slug.includes('ras-al')) {
            parentEmirate = 'Ras Al Khaimah';
        } else if (slug.includes('umm-al') || slug.includes('uaq')) {
            parentEmirate = 'Umm Al Quwain';
        }
    }

    // Setup beautiful, real-world copy dynamically
    return {
        slug: slug,
        parentEmirate: parentEmirate.toLowerCase(),
        bannerTitle: `${formattedTitle} Setup in ${parentEmirate}`,
        bannerDescription: `Start your business in ${formattedTitle}. Secure 100% foreign ownership, premium infrastructure, and quick setups.`,
        intro: {
            image: "/images/freezone/freezone.png",
            titleHighlight: formattedTitle,
            titleRest: "Company Formation",
            description1: `${formattedTitle} is a premier economic free zone in the UAE, providing global entrepreneurs and businesses with an outstanding hub for growth, innovation, and international trade. Setting up here grants you full ownership of your company and direct access to regional growth opportunities.`,
            description2: `Invest First provides end-to-end guidance for setup at ${formattedTitle}, including document translation, license selection, office desk lease registrations, and residency visa applications.`
        },
        keyFeatures: [
            "100% foreign ownership and zero tax environment",
            "Fast-track company registration and license issuance",
            "Exemption from all import and export customs duties",
            "Advanced co-working spaces and executive office options",
            "Easy corporate bank account openings and visa processing"
        ],
        setupProcess: {
            titleHighlight: "Steps to Start at",
            titleRest: formattedTitle,
            steps: [
                { id: 1, title: "Select Activity", description: "Identify the service, trading, or industrial activities for your license." },
                { id: 2, title: "Name Reservation", description: `Reserve your corporate trade name with the ${formattedTitle} registry.` },
                { id: 3, title: "Document Submission", description: "Submit passport copies, visa copies, and sign application forms." },
                { id: 4, title: "License Issuance", description: "Receive your registration certificate, lease agreement, and start visa processing." }
            ]
        },
        licenseTypes: [
            { id: 1, title: "Service License", description: "Ideal for consultants, software developers, and professional agencies.", image: "/images/freezone/service-license.png" },
            { id: 2, title: "Trading License", description: "Enables import, export, and distribution of goods in the UAE free zone and globally.", image: "/images/freezone/trading-license.png" }
        ],
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: `${formattedTitle}?`,
            descriptions: [
                `${formattedTitle} provides a highly modern, efficient business environment tailored to help startups and international businesses scale. With competitive packages and first-rate infrastructure, it is a leading hub in ${parentEmirate}.`
            ]
        },
        faqs: {
            title: `${formattedTitle} Setup FAQ`,
            faqItems: [
                { question: `What is the setup time at ${formattedTitle}?`, answer: `Standard company registration and license issuance at ${formattedTitle} typically takes between 3 to 5 business days once all required documents are submitted.` },
                { question: "Do I need a local UAE sponsor?", answer: `No. Company setup at ${formattedTitle} grants you 100% foreign ownership without requiring a local UAE national partner.` }
            ]
        },
        costSection: {
            titleHighlight: `${formattedTitle}`,
            titleRest: "Company Setup",
            description: `${formattedTitle} company setup costs are influenced by your chosen license category, the facility or office space required, and the number of visa slots needed. Understanding these variables ensures a cost-effective and streamlined formation process tailored to your budget.`,
            cards: [
                "License and registration fees vary based on commercial, service, or industrial activities.",
                "Facility options, ranging from co-working desks to physical offices, impact setup cost.",
                "Visa quotas and processing fees represent a key factor in the total initial investment.",
                "Additional costs include government fees, corporate channel registration, and service charges."
            ]
        },
        docsAndBenefits: {
            subzoneName: `${formattedTitle}`,
            documentsText: `Company formation in ${formattedTitle} requires passport copies of all shareholders and managers, alongside passport-sized photographs and UAE entry stamps. For corporate entities, certificate of incorporation, board resolutions, and articles of association are required. The registry review process ensures compliance and aligns company activities with approved categories before trade license issuance.`,
            benefitsList: [
                "100% foreign ownership and full profit repatriation",
                "Exemption from personal and corporate tax regimes",
                "Flexible office desk solutions and premium business setups",
                "Fast-track registration and digital document filings",
                "Direct support for residency visas and corporate bank accounts",
                "Strategic geographical access to regional UAE and international markets"
            ]
        }
    };
}

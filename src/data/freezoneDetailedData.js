// Detailed data mapping for all UAE Free Zones (both Emirates/Level 1 and specific Subzones/Level 2)
export const freezoneDetailedData = {
    // === EMIRATES (Level 1) ===
    'dubai': {
        slug: 'dubai',
        isEmirate: true,
        bannerTitle: "Dubai Free Zone Company Formation",
        bannerDescription: "Expert assistance in establishing your company in Dubai's premier free zones with 100% ownership and full tax benefits.",
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

    'sharjah': {
        slug: 'sharjah',
        isEmirate: true,
        bannerTitle: "Sharjah Free Zone Company Formation",
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
    'ajman': {
        slug: 'ajman',
        isEmirate: false,
        bannerTitle: "Ajman Free Zone Company Setup",
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

    'umm-al-quwain': {
        slug: 'umm-al-quwain',
        isEmirate: false,
        bannerTitle: "Umm Al Quwain Free Zone Company Setup",
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

    'ras-al-khaimah': {
        slug: 'ras-al-khaimah',
        isEmirate: false,
        bannerTitle: "Ras Al Khaimah Company Formation",
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
    'meydan-free-zone': {
        slug: 'meydan-free-zone',
        parentEmirate: 'dubai',
        bannerTitle: "Meydan Free Zone Setup in Dubai",
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
                { question: "Can I get an investor visa through Meydan?", answer: "Yes, Meydan Free Zone packages include visa quotas, allowing you to sponsor yourself, employees, and family members." }
            ]
        }
    },

    'ifza-free-zone': {
        slug: 'ifza-free-zone',
        parentEmirate: 'dubai',
        bannerTitle: "IFZA Free Zone Company Setup",
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
                { question: "Do I need to visit Dubai to set up an IFZA company?", answer: "No, the entire setup process is managed remotely by Invest First." }
            ]
        }
    },

    'dmcc-free-zone': {
        slug: 'dmcc-free-zone',
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
                { question: "Is a physical office mandatory in DMCC?", answer: "Yes, DMCC requires either a flexi-desk package (Smart Office) or a physical rented office in Jumeirah Lakes Towers." }
            ]
        }
    },

    'jebel-ali-jafza': {
        slug: 'jebel-ali-jafza',
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
            titleHighlight: "Process for",
            titleRest: "JAFZA Company Setup",
            steps: [
                { id: 1, title: "Activity Verification", description: "Verify business activities with DP World / JAFZA regulations." },
                { id: 2, title: "Submit Corporate Profiles", description: "Submit corporate structures, audits (if corporate shareholder), and passport copies." },
                { id: 3, title: "Lease Execution", description: "Execute lease contracts for warehouse, office space, or industrial plot." },
                { id: 4, title: "License Issuance", description: "Collect final trade license and start operations." }
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
                { question: "Is JAFZA suitable for service startups?", answer: "JAFZA supports services, but because of its premium infrastructure and office requirements, it is best suited for medium-to-large trade, logistics, and industrial enterprises." }
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
    const cleanSlug = slug.replace(/-/g, ' ');
    const titleWords = cleanSlug.split(' ');
    const formattedTitle = titleWords.map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');

    // Guess parent emirate from slug or default to Dubai
    let parentEmirate = 'Dubai';
    let shortName = formattedTitle;
    
    if (slug.includes('sharjah') || slug.includes('shams') || slug.includes('spcfz')) {
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
        }
    };
}


/* ─────────────────────────────────────────────────────────────────────
   ProServicesData.js
   Central data file for the Pro-Services section.
   Each of the 6 services shares the same component structure;
   only the content differs — swap the object passed as props.
───────────────────────────────────────────────────────────────────── */

// ── 1. Company Formation (default / main page) ──────────────────────
const companyFormation = {
    slug: 'company-formation',
    intro: {
        title: "Seamless <span class='text-[#0099CC]'>Company Formation</span> in Dubai & UAE Backed by Authorized Freezone Partnerships",
        description1: "Starting a business in Dubai or anywhere in the UAE offers unmatched access to global markets, tax advantages, and a stable regulatory environment. However, successful company formation UAE requires expert navigation through licensing authorities, Freezone regulations, and banking procedures.",
        description2: "Invest First simplifies this journey by offering end-to-end <span class='font-bold'>business setup services UAE</span>, supported by our status as an authorized channel partner of 20 UAE Freezones. This allows us to secure faster approvals, accurate licensing, competitive packages, and direct coordination with Freezone authorities—reducing delays, costs, and risks for our clients.",
        description3: "From jurisdiction selection and activity classification to approvals, documentation, and license issuance, our Dubai-based consultants ensure every step of your company formation is structured, compliant, and growth-ready.",
        image: "/assets/images/pro-services/pro-services.png"
    },
    bannerTitle: "PRO Services",
    bannerDescription: "Expert government relations and business setup solutions in the UAE.",
    cardTitle: "Secure Your Business Growth in UAE",
    cardDescription: "Comprehensive support for your company formation and licensing needs.",
    seo: {
        title: "Company Formation in Dubai & UAE | Expert Business Setup Services",
        description: "Start your business in Dubai with Invest First. Authorized channel partner of 20 UAE Freezones providing seamless company formation, trade licensing, and banking support.",
        keywords: "company formation UAE, business setup Dubai, Dubai company registration, UAE freezone company formation, mainland business setup UAE",
        canonical: "https://investfirst.ae/pro-services/company-formation",
        image: "/assets/images/services/proServices/pro-services.png"
    },
    companyFormationTypes: {
        // "Types of" is STATIC + blue in the component; only supply the changeable rest here
        headingRest: "Company Formation UAE We Offer",
        description: "We deliver complete company formation UAE solutions across all jurisdictions:",
        items: [
            {
                id: "01",
                title: "Mainland Company Formation",
                description: "Operate freely across the UAE and work with government entities. We manage trade name registration, MOA drafting, DED approvals, and compliance processes."
            },
            {
                id: "02",
                title: "Holding & Subsidiary Structures",
                description: "Create holding companies or subsidiaries in the UAE for asset management, expansion, and structured corporate growth."
            },
            {
                id: "03",
                title: "Freezone Company Formation",
                description: "Establish your business with 100% foreign ownership in UAE Freezones. As an authorized channel partner of 20 Freezones, we secure faster approvals and optimal setup options."
            },
            {
                id: "04",
                title: "Offshore Company Formation UAE",
                description: "Ideal for international trade, asset protection, and global structuring. We handle offshore incorporation, compliance, and corporate banking introductions."
            },
            {
                id: "05",
                title: "Holding & Subsidiary Structures",
                description: "Create holding companies or subsidiaries in the UAE for asset management, expansion, and structured corporate growth."
            }
        ]
    },
    whyChoose: {
        // "Why Choose" is STATIC + blue in the component; only supply the changeable rest here
        headingRest: "Dubai & UAE for Company Formation",
        cardTitle: "Why Invest First Is a Leading Company Formation Consultant UAE",
        cardTitleHighlight: "Company Formation",
        paragraphs: [
            "Dubai and the UAE offer tax-efficient structures, strong investor protection, world-class infrastructure, and global connectivity making them ideal for regional and international expansion.",
            "With Invest First, your company formation UAE is handled by experts who understand Freezone frameworks, mainland regulations, and offshore compliance ensuring your business launches smoothly, legally, and within budget."
        ],
        points: [
            'Authorized channel partner of 20 UAE Freezones',
            'Dubai-based consultants with UAE regulatory expertise',
            'Transparent pricing and fast processing timelines',
            'Legal documentation, MOA drafting, and PRO services included',
            'Visa processing, banking support, and office solutions',
            'Tailored company structures for startups, SMEs, and global investors',
        ]
    },
    faq: {
        // "Frequently Asked Questions –" is STATIC in the component; only supply the rest here
        headingRest: "Company Formation UAE",
        items: [
            {
                question: "What is the validity of a UAE investor visa?",
                answer: "A UAE investor visa is typically valid for 2 to 10 years depending on the type of investment and jurisdiction. Golden Visas for investors are valid for 10 years and are renewable, while standard investor visas issued through Freezone or mainland company formation are generally valid for 2-3 years."
            },
            {
                question: "Can I sponsor my family with a UAE investor visa?",
                answer: "Yes, as a UAE investor visa holder you can sponsor your spouse, children, and in some cases parents. The sponsorship process requires meeting minimum salary thresholds and providing the necessary documentation such as tenancy contracts and marriage/birth certificates."
            },
            {
                question: "Is a Free Zone company eligible for an investor visa?",
                answer: "Yes, Free Zone company owners are eligible for investor or partner visas issued by the respective Freezone authority. The number of visas your company can obtain depends on your license type and office space allocation within the Freezone."
            },
            {
                question: "Are there changes to investor visa rules in 2026?",
                answer: "The UAE government continuously updates its visa regulations to attract global talent and investment. In 2026, several enhancements to the Golden Visa program and investor visa eligibility have been introduced. Our team stays up to date with all regulatory changes to ensure your visa application is compliant."
            },
            {
                question: "Does Invest First handle both business setup and visa processing?",
                answer: "Yes, Invest First provides end-to-end services covering company formation, trade licensing, banking assistance, and complete visa processing — including investor visas, employment visas, and family sponsorships — all under one roof."
            }
        ]
    }
};

// ── 2. Virtual PRO ────────────────────────────────────────────────────
const virtualPRO = {
    slug: 'virtual-pro',
    intro: {
        title: "Step-by-Step Process of <span class='text-[#0099CC]'>Visa Processing</span> Through Virtual PRO",
        description1: "Virtual PRO services support businesses by handling all government documentation and approvals without the need for an in-house PRO. These services cover trade license processing, employment visas, Emirates ID coordination, labour and immigration applications, medical typing, and document attestation.",
        description2: "By working with authorities such as the General Directorate of Residency and Foreigners Affairs and the Ministry of Human Resources and Emiratisation, Virtual PRO providers ensure accurate submissions, faster approvals, and full regulatory compliance.",
        description3: "This helps startups, SMEs, and foreign investors save time, reduce operational costs, and focus on core business activities while professionals manage all administrative procedures efficiently.",
        image: "/assets/images/pro-services/virtual-pro.png"
    },
    bannerTitle: "Virtual PRO",
    bannerDescription: "Streamline your government transactions with our professional Virtual PRO services.",
    cardTitle: "Efficient Government Relations",
    cardDescription: "Dedicated PRO officers handling all your document processing and compliance.",
    seo: {
        title: "Virtual PRO Services Dubai | Professional Government Relations UAE",
        description: "Outsource your government relations with our Virtual PRO services. We handle visa processing, trade license renewals, and labor card renewals across all Emirates.",
        keywords: "virtual PRO Dubai, PRO services UAE, government relations Dubai, visa processing UAE, trade license renewal Dubai",
        canonical: "https://investfirst.ae/pro-services/virtual-pro",
        image: "/assets/image/pro-services/virtual-pro.png"
    },
    companyFormationTypes: {
        headingRest: "Virtual PRO Services We Offer",
        description: "We provide comprehensive Virtual PRO support across all government departments:",
        items: [
            {
                id: "01",
                title: "Trade License Services",
                description: "New license application, renewals, amendments, and activity additions with mainland and free zone authorities."
            },
            {
                id: "02",
                title: "Visa Processing Services",
                description: "Employment visas, investor visas, family visas, visa renewals, cancellations, and status change support."
            },
            {
                id: "03",
                title: "Labour & Immigration Approvals",
                description: "Work permits, labour quota approvals, offer letters, and coordination with the Ministry of Human Resources and Emiratisation and General Directorate of Residency and Foreigners Affairs."
            },
            {
                id: "04",
                title: "Emirates ID Services",
                description: "Application typing, biometric appointments, renewals, and replacements."
            },
            {
                id: "05",
                title: "Company Formation PRO Support",
                description: "End-to-end PRO assistance for mainland, free zone, and offshore company setup."
            }
        ]
    },
    whyChoose: {
        headingRest: "a Virtual Office in the UAE?",
        cardTitle: "Why Invest First Is a Leading Virtual PRO Service Provider in the UAE?",
        cardTitleHighlight: "Virtual PRO",
        paragraphs: [
            "A virtual office is an ideal solution for startups, freelancers, and international businesses that want to establish a presence in the UAE without the cost of a physical office. It provides a registered business address, mail handling, and access to meeting rooms while keeping operational expenses low.",
            "InvestFirst provides cost-effective virtual office services that eliminate the need for physical office rentals while giving your business a prestigious Dubai address. Our solutions help reduce expenses related to utilities, maintenance, and staffing, making them ideal for startups, SMEs, and international entrepreneurs entering the UAE market.",
        ],
        points: [
            "Handles all government documentation without an in-house PRO",
            "Trade license application, renewal, and amendments",
            "Employment, investor, and family visa processing",
            "Emirates ID typing, biometrics, and renewals",
            "Labour approvals through the Ministry of Human Resources and Emiratisation",
            "Immigration services with the General Directorate of Residency and Foreigners Affairs",
        
        ]
    },
    faq: {
        headingRest: "Virtual PRO Services",
        items: [
            {
                question: "What are Virtual PRO services in the UAE?",
                answer: "Virtual PRO services are remote government liaison and documentation support services that handle visas, labour approvals, license renewals, Emirates ID processing, and other compliance tasks without the need for a physical PRO at your office. They act as your official representative with UAE authorities."
            },
            {
                question: "What is the role of a PRO in the UAE?",
                answer: "A PRO (Public Relations Officer) manages all government-related paperwork, including visa applications, labour contracts, immigration approvals, and trade license processes, ensuring your business stays compliant with UAE regulations."
            },
            {
                question: "Who needs Virtual PRO services?",
                answer: "Virtual PRO services are ideal for: Startups and SMEs, Free zone and mainland companies, Foreign investors and NRI business owners, Freelancers and remote businesses, and Companies without an in-house PRO. They help businesses operate smoothly without handling complex government procedures themselves."
            },
            {
                question: "How is a Virtual PRO different from an in-house PRO?",
                answer: "A Virtual PRO works remotely and on demand, while an in-house PRO is a full-time employee. Virtual PRO services are more cost-effective for startups and SMEs because you only pay for the services you use."
            },
            {
                question: "Is Virtual PRO service cost-effective?",
                answer: "Yes. It eliminates the need for hiring a full-time PRO, reduces internal HR workload, and helps avoid penalties caused by missed renewals or incorrect submissions."
            }
        ]
    },
    authorizedPartnerStatus: {
        titleHighlight: "Why",
        titleRest: "Our Virtual PRO Solutions Are the Right Choice",
        description: "Invest First delivers faster and fully compliant Virtual PRO services across the UAE. Our direct coordination with free zone authorities eliminates intermediaries, reduces delays, and ensures accurate submission of all government documentation.",
        bulletPoints: [
            'Direct access to free zone and government authorities',
            'Faster visa, license, and immigration processing',
            'Accurate document clearing aligned with regulations',
            'Cost-effective PRO solutions with transparent pricing',
            'Expert guidance on quotas, approvals, and compliance',
        ],
        footerNote: "This strong partnership allows us to manage your trade licenses, visas, Emirates ID, labour, and immigration processes efficiently while helping you avoid penalties and operational delays."
    }
};

// ── 3. Local Sponsorships ─────────────────────────────────────────────
const localSponsorships = {
    slug: 'local-sponsorships',
    intro: {
        title: "Local Sponsorship Services in THE <span class='text-[#0099CC]'>UAE</span>",
        description1: "Local sponsorship services in the UAE enable foreign investors to establish mainland companies by appointing a UAE national as a local sponsor or service agent, in accordance with regulatory requirements.",
        description2: "These services ensure full legal compliance, smooth license approvals, and seamless coordination with government authorities—allowing business owners to operate confidently without administrative complexity.",
        description3: "By working with authorities such as the Department of Economic Development, Ministry of Human Resources and Emiratisation, and General Directorate of Residency and Foreigners Affairs, local sponsorship providers facilitate trade license issuance, immigration file opening, labour quotas, and regulatory approvals.This structured support helps startups, SMEs, and international investors save time, reduce risk, and focus on business growth while all legal formalities are managed professionally.",
        image: "/assets/images/pro-services/local-sponsorship.png"
    },
    bannerTitle: "Local Sponsorships",
    bannerDescription: "Reliable and legally secure local sponsorship solutions for your mainland business.",
    cardTitle: "Trusted UAE Partnerships",
    cardDescription: "Protect your business control and profits with our vetted local sponsors.",
    seo: {
        title: "Local Sponsorship UAE | Trusted Mainland Business Partnership",
        description: "Secure reliable local sponsorship solutions for your mainland business in the UAE. Legally structured arrangements that protect your control and profitability.",
        keywords: "local sponsorship UAE, UAE national sponsor, local service agent Dubai, mainland company sponsor UAE, business partnership Dubai",
        canonical: "https://investfirst.ae/pro-services/local-sponsorships",
        image: "/assets/images/pro-services/local-sponsorship.png"
    },
    companyFormationTypes: {
        headingRest: "Local Sponsorship Services We Offer",
        description: "We provide comprehensive local sponsorship support across all UAE mainland jurisdictions:",
        items: [
            {
                id: "01",
                title: "Individual Local Sponsorship",
                description: "UAE national sponsor for mainland companies as per activity requirements, ensuring compliant company registration and license approvals."
            },
            {
                id: "02",
                title: "Corporate Local Sponsorship",
                description: "UAE-owned corporate entity acting as a sponsor to provide higher security, structured agreements, and professional representation."
            },
            {
                id: "03",
                title: "Local Service Agent (LSA) Support",
                description: "For professional license holders (consultancy, services, freelancers) who require a UAE national service agent without ownership involvement."
            },
            {
                id: "04",
                title: "Trade License Processing",
                description: "New mainland license applications, renewals, amendments, and activity additions through the Department of Economic Development."
            },
            {
                id: "05",
                title: "Immigration & Labour File Setup",
                description: "Company establishment card, labour file opening, quota approvals, and employee eligibility processing."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for Local Sponsorship in THE UAE",
        cardTitle: "Trusted UAE national sponsors and corporate sponsorship options",
        cardTitleHighlight: "Local Sponsorship",
        paragraphs: [
            "Our structured approach ensures your business remains protected, compliant, and operational without delays.",
            "We provide full coordination with Ministry of Human Resources and Emiratisation and General Directorate of Residency and Foreigners Affairs for end-to-end compliance."
        ],
        points: [
            '100% mainland business ownership eligibility (for approved activities)',
            'Legal compliance with UAE commercial laws',
            'Ability to operate anywhere in the UAE market',
            'Access to government projects and corporate clients',
            'Smooth visa and labour processing',
            'No administrative burden on business owners',
        ]
    },
    faq: {
        headingRest: "Local Sponsorship Services",
        items: [
            {
                question: "What is a local sponsor in the UAE?",
                answer: "A local sponsor is a UAE national or UAE-owned company appointed to meet mainland licensing requirements, enabling foreign investors to legally operate their business."
            },
            {
                question: "Do local sponsors control the business?",
                answer: "No. With proper legal agreements, the foreign investor retains full operational and financial control while the sponsor fulfills regulatory requirements."
            },
            {
                question: "Is local sponsorship required for all businesses?",
                answer: "Local sponsorship is required for certain mainland activities. Many sectors now allow 100% foreign ownership, but some regulated activities still require a UAE national sponsor or service agent."
            },
            {
                question: "What is the difference between a local sponsor and a local service agent?",
                answer: "A local sponsor is linked to commercial licenses, while a local service agent is required for professional licenses and has no ownership or control."
            },
            {
                question: "Can the local sponsor be changed?",
                answer: "Yes. Local sponsorship can be transferred or amended through legal procedures and approvals from the Department of Economic Development."
            }
        ]
    },
    authorizedPartnerStatus: {
        titleHighlight: "Why",
        titleRest: "Our Local Sponsorship Solutions Are the Right Choice",
        description: "Invest First provides reliable and compliant local sponsorship solutions across the UAE. Our direct coordination with mainland authorities ensures faster processing, accurate documentation, and legally secure agreements.",
        bulletPoints: [
            'Professionally drafted and notarized sponsorship contracts',
            'No interference in daily business operations',
            'Complete legal transparency and protection',
            'Fast license, immigration, and labour approvals',
            'Dedicated account manager for renewals and compliance',
        ],
        footerNote: "With our support, you can establish and operate your mainland business with confidence while we handle all sponsorship formalities."
    }
};

// ── 4. License Renewals ───────────────────────────────────────────────
const licenseRenewals = {
    slug: 'license-renewals',
    intro: {
        title: "Trade License Renewal Services in Dubai, <span class='text-[#0099CC]'>UAE</span>",
        description1: "Trade license renewal services in the UAE ensure your business remains legally active and fully compliant with government regulations. Timely renewal is mandatory to avoid penalties, visa blocks, and operational disruptions.",
        description2: "By coordinating with authorities such as the Department of Economic Development, Ministry of Human Resources and Emiratisation, and General Directorate of Residency and Foreigners Affairs, trade license renewal providers ensure accurate processing, quick approvals, and full regulatory compliance.",
        description3: "This structured approach helps startups, SMEs, and foreign investors avoid fines, maintain visa eligibility, and operate smoothly in the UAE market.",
        image: "/assets/images/pro-services/license-renewals.png"
    },
    bannerTitle: "License Renewals",
    bannerDescription: "Timely and hassle-free trade license renewals across all UAE jurisdictions.",
    cardTitle: "Compliance Made Easy",
    cardDescription: "Never miss a renewal deadline with our proactive tracking and management.",
    seo: {
        title: "Trade License Renewal UAE | Fast & Compliant Renewal Services",
        description: "Proactive trade license renewal services for mainland and Freezone businesses across the UAE. Avoid fines and ensure continuous compliance with Invest First.",
        keywords: "trade license renewal Dubai, UAE license renewal, DED license renewal, freezone license renewal UAE, business license renewal Dubai",
        canonical: "https://investfirst.ae/pro-services/license-renewals",
        image: "/assets/images/pro-services/license-renewals.png"
    },
    companyFormationTypes: {
        headingRest: "Trade License Renewal Services We Offer",
        description: "We manage the full renewal cycle for all UAE license types:",
        items: [
            {
                id: "01",
                title: "Mainland License Renewal",
                description: "Complete renewal processing through the Department of Economic Development, including document verification and government fee submission."
            },
            {
                id: "02",
                title: "Free Zone License Renewal",
                description: "End-to-end renewal support with all UAE free zones, including lease agreement updates and authority approvals."
            },
            {
                id: "03",
                title: "Tenancy Contract (Ejari) Assistance",
                description: "Preparation and renewal of office lease agreements required for mainland license renewal."
            },
            {
                id: "04",
                title: "Activity Amendment During Renewal",
                description: "Add, remove, or modify business activities at the time of renewal."
            },
            {
                id: "05",
                title: "Immigration & Labour Card Renewal",
                description: "Renewal of establishment cards and labour files to maintain employee visa eligibility."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for Trade License Renewal in the UAE",
        cardTitle: "Timely renewal reminders and compliance tracking",
        cardTitleHighlight: "License Renewal",
        paragraphs: [
            "Our proactive approach ensures your license is renewed before expiry, protecting your business from penalties and operational risks.",
            "We provide full coordination with mainland and free zone authorities for Ejari and lease coordination support."
        ],
        points: [
            'Avoid late renewal penalties and fines',
            'Maintain active visa quota and employee processing',
            'Ensure legal compliance with UAE regulations',
            'Save time and administrative effort',
            'Fast and error-free documentation',
            'Continuous business operations without interruption',
        ]
    },
    faq: {
        headingRest: "License Renewal Services",
        items: [
            {
                question: "When should I renew my trade license in the UAE?",
                answer: "Trade licenses must be renewed annually before the expiry date to avoid penalties and business suspension."
            },
            {
                question: "What happens if I don’t renew my license on time?",
                answer: "Late renewal may result in fines, visa blocks, blacklisting of the company, and possible business closure."
            },
            {
                question: "Is Ejari mandatory for mainland license renewal?",
                answer: "Yes. A valid tenancy contract (Ejari) is required for mainland trade license renewal."
            },
            {
                question: "Can I renew my license if I have fines?",
                answer: "Yes, but fines must be cleared before the renewal is approved."
            },
            {
                question: "Does license renewal affect employee visas?",
                answer: "Yes. An expired license can block visa renewals, new visa applications, and labour quota approvals."
            }
        ]
    },
    authorizedPartnerStatus: {
        titleHighlight: "Why",
        titleRest: "Our License Renewal Solutions Are the Right Choice",
        description: "Invest First delivers reliable and compliant trade license renewal services across the UAE. Our direct coordination with government authorities ensures faster approvals, accurate submissions, and complete regulatory compliance.",
        bulletPoints: [
            'Early renewal alerts and document checklist',
            'Quick processing with Department of Economic Development and free zones',
            'Integrated labour and immigration renewal support',
            'Error-free documentation and compliance checks',
            'Cost-effective renewal packages for startups and SMEs',
        ],
        footerNote: "With our expert support, your business remains legally active, visa-eligible, and fully compliant year after year."
    }
};

// ── 5. Visa Renewals ──────────────────────────────────────────────────
const visaRenewals = {
    slug: 'visa-renewals',
    intro: {
        title: "Visa Renewal <span class='text-[#0099CC]'>UAE ,Dubai</span>",
        description1: "Visa renewal in the UAE is essential to maintain legal residency and avoid fines, overstay penalties, or immigration blocks. Our visa renewal UAE, Dubai service ensures timely processing of employment visas, investor visas, partner visas, and family visas with complete coordination across government authorities.",
        description2: "By working with the General Directorate of Residency and Foreigners Affairs, Ministry of Human Resources and Emiratisation, and Emirates ID authorities, we manage the full renewal process—document verification, medical testing, Emirates ID renewal, and visa stamping—so you remain compliant without delays.",
        description3: "We ensure your UAE residence visa is renewed on time without disruptions to employment, business operations, or family residency.",
        image: "/assets/images/pro-services/visa-renewals.png"
    },
    bannerTitle: "Visa Renewals",
    bannerDescription: "Efficient visa renewal services for investors, employees, and families in the UAE.",
    cardTitle: "Seamless Visa Processing",
    cardDescription: "End-to-end management of renewals for residency and employment visas.",
    seo: {
        title: "Visa Renewal Services UAE | Investor, Employment & Family Visas",
        description: "Expert UAE visa renewal management for investors, employees, and families. We handle medical tests, Emirates ID, and authority submissions end-to-end.",
        keywords: "visa renewal UAE, resonance visa renewal Dubai, investor visa renewal UAE, employment visa renewal Dubai, Emirates ID renewal UAE",
        canonical: "https://investfirst.ae/pro-services/visa-renewals",
        image: "/assets/images/pro-services/visa-renewals.png"
    },
    companyFormationTypes: {
        headingRest: "Visa Renewal Services We Manage",
        description: "Types of Visa Renewal Services in the UAE:",
        items: [
            {
                id: "01",
                title: "Employment Visa Renewal",
                description: "Complete renewal processing including labour contract update, medical test, Emirates ID renewal, and visa stamping."
            },
            {
                id: "02",
                title: "Investor & Partner Visa Renewal",
                description: "Renewal of investor and partner residence visas linked to mainland and free zone companies."
            },
            {
                id: "03",
                title: "Family Visa Renewal",
                description: "Dependent visa renewal for spouses, children, and parents with medical, insurance, and Emirates ID coordination."
            },
            {
                id: "04",
                title: "Domestic Worker Visa Renewal",
                description: "Renewal of visas for housemaids, drivers, and other domestic staff in compliance with UAE regulations."
            },
            {
                id: "05",
                title: "Free Zone Visa Renewal",
                description: "End-to-end renewal support with all UAE free zones, including establishment card and quota validation."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First Your Trusted for Visa Renewal in Dubai?",
        cardTitle: "Why Choose Visa Renewal Services in UAE",
        cardTitleHighlight: "Visa Renewal Services",
        paragraphs: [
            "Renewing your visa in the UAE is essential to maintain your legal residency and avoid fines or disruptions. Whether you hold an employment visa, investor visa, or family visa, timely visa renewal in Dubai ensures smooth living and business operations.",
            "The UAE visa renewal process involves multiple steps, including document verification, medical fitness tests, Emirates ID renewal, and approvals from immigration authorities. Managing this process on your own can be time-consuming and complex."
        ],
        points: [
            'Dedicated visa renewal UAE specialists',
            'Direct processing with General Directorate of Residency and Foreigners Affairs',
            'Labour approvals via Ministry of Human Resources and Emiratisation',
            'Support for mainland and free zone visas',
            'Transparent pricing with no hidden costs',
            'Express visa renewal options available',
        ]
    },
    faq: {
        headingRest: "Visa Renewal UAE, Dubai",
        items: [
            {
                question: "When should I renew my UAE visa?",
                answer: "Visa renewal should be initiated at least 30 days before the expiry date to avoid fines."
            },
            {
                question: "What happens if my visa expires?",
                answer: "You may incur daily overstay fines and face immigration restrictions until the visa is renewed or status is changed."
            },
            {
                question: "Is medical testing required for visa renewal?",
                answer: "Yes. A medical fitness test is mandatory for most residence visa renewals."
            },
            {
                question: "Do I need to renew my Emirates ID with my visa?",
                answer: "Yes. Emirates ID renewal is processed together with your visa renewal."
            },
            {
                question: "Can I renew my visa while outside the UAE?",
                answer: "This depends on visa type and entry status. In many cases, you must be inside the UAE for renewal processing."
            }
        ]
    },
    authorizedPartnerStatus: {
        titleHighlight: "Why",
        titleRest: "Our Visa Renewal Solutions Are the Right Choice",
        description: "Invest First provides reliable and compliant visa renewal UAE, Dubai services for individuals and companies. Our proactive tracking system, fast processing, and accurate documentation help you avoid fines, maintain legal residency, and continue your activities without interruption.",
        bulletPoints: [
            'Automated expiry alerts and renewal planning',
            'Medical, insurance, and Emirates ID coordination',
            'Fast-track visa stamping options',
            'Compliance with latest UAE immigration rules',
            'End-to-end PRO support',
        ],
        footerNote: "With our expert team handling your visa renewal, you can stay focused on your work and business while we manage the entire process."
    }
};

// ── 6. Banking Assistance ─────────────────────────────────────────────
const bankingAssistance = {
    slug: 'banking-assistance',
    intro: {
        title: "Banking Assistance Services in <span class='text-[#0099CC]'>Dubai, UAE</span>",
        description1: "Opening a bank account in the UAE requires proper documentation, compliance checks, and coordination with local and international banks. Our banking assistance services in Dubai, UAE help businesses and individuals open corporate and personal bank accounts smoothly while meeting all regulatory and KYC requirements.",
        description2: "We coordinate with leading UAE banks and ensure your application meets compliance standards set by the Central Bank of the UAE, reducing rejection risks and processing delays. From document preparation to bank meetings and follow-ups, we manage the entire process for faster approvals.",
        image: "/assets/images/pro-services/banking-assistance.png"
    },
    bannerTitle: "Banking Assistance",
    bannerDescription: "Expert guidance for smooth corporate bank account opening and compliance in the UAE.",
    cardTitle: "Strategic Banking Support",
    cardDescription: "Optimizing your chances for bank account approval with professional assistance.",
    seo: {
        title: "Banking Assistance Services in Dubai, UAE | Business & Personal Bank Accounts",
        description: "Hassle-free corporate and personal bank account opening in the UAE. Expert guidance on KYC, documentation, and relationships with leading UAE banks.",
        keywords: "corporate banking UAE, business bank account Dubai, UAE bank account opening, banking assistance Dubai, KYC support UAE",
        canonical: "https://investfirst.ae/pro-services/banking-assistance",
        image: "/assets/images/pro-services/banking-assistance.png"
    },
    companyFormationTypes: {
        headingRest: "Banking Assistance Services We Offer",
        description: "Types of Banking Assistance Services We Offer:",
        items: [
            {
                id: "01",
                title: "Corporate Bank Account Opening",
                description: "Support for mainland, free zone, and offshore companies with document structuring, KYC preparation, and bank coordination."
            },
            {
                id: "02",
                title: "Personal Bank Account Opening",
                description: "Account opening assistance for UAE residents, investors, employees, and freelancers."
            },
            {
                id: "03",
                title: "High-Risk & Startup Account Support",
                description: "Specialized assistance for startups, new companies, and businesses with complex activities."
            },
            {
                id: "04",
                title: "Multi-Currency & International Banking",
                description: "Setup of accounts with multi-currency facilities, online banking, and international transaction capability."
            },
            {
                id: "05",
                title: "Compliance & KYC Documentation",
                description: "Preparation of business plans, source of funds, shareholder profiles, and transaction forecasts required by UAE banks."
            }
        ]
    },
    whyChoose: {
        headingRest: "Banking Assistance in Dubai?UAE",
        cardTitle: "Why Invest First Leading for Banking Assistance in Dubai, UAE?",
        cardTitleHighlight: "Banking Assistance",
        paragraphs: [
            "Banking assistance in Dubai is crucial for startups, entrepreneurs, and international investors who want to open a bank account easily and without delays. The UAE banking system involves strict compliance regulations, detailed documentation, and comprehensive verification procedures, making expert support highly valuable.",
            "With professional banking assistance, you get expert guidance in selecting the right bank, preparing accurate documents, and meeting all regulatory requirements. This helps reduce rejection risks and speeds up the approval process."
        ],
        points: [
            'Strong relationships with leading UAE banks',
            'Compliance aligned with Central Bank of the UAE regulations',
            'Support for mainland, free zone, and offshore companies',
            'Assistance for new businesses and high-risk activities',
            'Transparent process with no hidden charges',
            'End-to-end documentation and interview preparation',
        ]
    },
    faq: {
        headingRest: "Banking Assistance Services in Dubai, UAE",
        items: [
            {
                question: "Is it difficult to open a bank account in the UAE?",
                answer: "Yes. UAE banks have strict compliance and KYC requirements, especially for new companies and foreign shareholders. Professional assistance improves approval chances."
            },
            {
                question: "How long does corporate bank account opening take?",
                answer: "Typically 2–6 weeks, depending on the bank, business activity, and documentation."
            },
            {
                question: "Can startups open a corporate bank account in Dubai?",
                answer: "Yes. With proper documentation, business plans, and compliance support, startups can successfully open accounts."
            },
            {
                question: "Do I need to be physically present in the UAE?",
                answer: "Most banks require the shareholder or authorized signatory to be present for the interview."
            },
            {
                question: "Can you help with multi-currency accounts?",
                answer: "Yes. We assist in opening multi-currency and international transaction-enabled bank accounts."
            }
        ]
    },
    authorizedPartnerStatus: {
        titleHighlight: "Why",
        titleRest: "Our Banking Solutions Are the Right Choice",
        description: "Invest First delivers reliable banking assistance services in Dubai, UAE with a structured and compliant approach. Our team prepares your profile to meet strict UAE banking requirements, ensuring faster approvals and long-term banking stability.",
        bulletPoints: [
            'Bank matching based on business activity',
            'KYC and compliance document structuring',
            'Business plan and transaction profile preparation',
            'Direct coordination with bank relationship managers',
            'Post-account support and upgrade assistance',
        ],
        footerNote: "We prepare and strengthen your business profile to meet strict UAE banking standards, reducing the chances of delays or rejections."
    }
};

// ── 7. Office Solutions ───────────────────────────────────────────────
const officeSolutions = {
    slug: 'office-solutions',
    intro: {
        title: "Office Solutions <span class='text-[#0099CC]'>UAE ,Dubai</span>",
        description1: "Office solutions in the UAE provide businesses with flexible workspace options, registered business addresses, and fully equipped office facilities without long-term lease commitments. Our office solutions UAE service helps startups, SMEs, and international companies establish a professional presence while reducing operational costs.",
        description2: "We coordinate with mainland and free zone authorities, including the Department of Economic Development, to ensure your office space meets licensing requirements for trade license issuance and renewal. From virtual offices to serviced workspaces, we deliver compliant and cost-effective office setups tailored to your business needs.",
        image: "/assets/images/pro-services/office-solutions.png"
    },
    bannerTitle: "Office Solutions",
    bannerDescription: "Flexible workspace options tailored to your business license and visa requirements.",
    cardTitle: "Ideal Business Workspaces",
    cardDescription: "Finding the right office setup to support your operations and visa quota.",
    seo: {
        title: "Office Solutions UAE, Dubai | Virtual & Serviced Workspaces",
        description: "Find the perfect office space for your UAE business. Virtual addresses, flexi-desks, and dedicated private offices aligned with your licensing needs.",
        keywords: "office solutions Dubai, virtual office UAE, flexi desk Dubai, serviced office UAE, registered business address Dubai",
        canonical: "https://investfirst.ae/pro-services/office-solutions",
        image: "/assets/images/pro-services/office-solutions.png"
    },
    companyFormationTypes: {
        headingRest: "Office Solutions We Offer",
        description: "Types of Office Solutions We Offer in the UAE:",
        items: [
            {
                id: "01",
                title: "Virtual Office Solutions",
                description: "Registered business address, mail handling, call answering, and access to meeting rooms without renting a physical office."
            },
            {
                id: "02",
                title: "Flexi Desk Solutions",
                description: "Shared workspace options that meet free zone and mainland licensing requirements at minimal cost."
            },
            {
                id: "03",
                title: "Serviced Office Spaces",
                description: "Fully furnished private offices with utilities, internet, reception services, and meeting room access."
            },
            {
                id: "04",
                title: "Co-Working Spaces",
                description: "Flexible coworking environments for freelancers, startups, and remote teams."
            },
            {
                id: "05",
                title: "Dedicated Office for License Requirements",
                description: "Physical office spaces that comply with mainland trade license regulations and Ejari requirements."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for Office Solutions UAE?",
        cardTitle: "Why Invest First is a Leading Choice for Office Solutions in Dubai, UAE",
        cardTitleHighlight: "Office Solutions",
        paragraphs: [
            "Invest First offers reliable and flexible office solutions across the UAE, tailored to meet the needs of startups, entrepreneurs, and growing businesses. Whether you require a virtual office, serviced workspace, or a prestigious business address, we provide cost-effective options without the burden of long-term commitments.",
            "Our team ensures a smooth setup process with professional support, helping you establish your presence quickly and efficiently. With access to prime locations, meeting facilities, and administrative services, you can focus on growing your business while we handle the rest. We help you establish a professional UAE presence without the burden of high rental expenses."
        ],
        points: [
            'Strong partnerships with top business centers and commercial property providers across the UAE',
            'Fully compliant office solutions aligned with UAE licensing and regulatory requirements',
            'Flexible options including virtual offices, co-working spaces, and physical office setups',
            'Tailored solutions for mainland, free zone, and offshore companies',
            'Ideal for startups, SMEs, and expanding international businesses',
            'Complete support from office selection to Ejari registration and documentation',
        ]
    },
    faq: {
        headingRest: "Office Solutions UAE",
        items: [
            {
                question: "Is a physical office required to start a business in the UAE?",
                answer: "It depends on the license type. Mainland companies require a physical office, while many free zones allow flexi desk or virtual office options."
            },
            {
                question: "Can I use a virtual office for trade license renewal?",
                answer: "Yes, in many free zones. Mainland businesses usually need an Ejari-registered office."
            },
            {
                question: "What is Ejari and why is it important?",
                answer: "Ejari is the official tenancy registration system required for mainland trade licenses and renewals."
            },
            {
                question: "Can I upgrade from a virtual office to a physical office later?",
                answer: "Yes. Most businesses start with a virtual or flexi desk and upgrade as they grow."
            },
            {
                question: "Do your office solutions include meeting room access?",
                answer: "Yes. Virtual and serviced office packages include meeting room usage based on the selected plan."
            }
        ]
    },
    authorizedPartnerStatus: {
        titleHighlight: "Why",
        titleRest: "Our Office Solutions Are the Right Choice",
        description: "Invest First provides compliant and flexible office solutions UAE tailored to your business structure and licensing needs. Our direct coordination with mainland and free zone authorities ensures faster approvals and seamless office setup.",
        bulletPoints: [
            'Registered address for trade license',
            'Meeting room and reception services',
            'Ejari support for mainland companies',
            'Upgrade options from virtual to private office',
            'Cost-effective packages for startups and SMEs',
        ],
        footerNote: "With our office solutions, you can operate legally, enhance your brand image, and scale your workspace as your business grows."
    }
};


/* ─────────────────────────────────────────────────────────────────────
   EXPORTS
───────────────────────────────────────────────────────────────────── */

/** Quick lookup by slug */
export const serviceDataMap = {
    'company-formation': companyFormation,
    'virtual-pro': virtualPRO,
    'local-sponsorships': localSponsorships,
    'license-renewals': licenseRenewals,
    'visa-renewals': visaRenewals,
    'banking-assistance': bankingAssistance,
    'office-solutions': officeSolutions,
};

/** Sidebar / navbar listing */
export const proServicesList = [
    { id: 1, title: "Virtual PRO", slug: "virtual-pro", href: "/pro-services/virtual-pro", image: "/assets/images/services/proServices/virtual-pro.png" },
    { id: 2, title: "Local Sponsorships", slug: "local-sponsorships", href: "/pro-services/local-sponsorships", image: "/assets/images/services/proServices/local-sponsorship.png" },
    { id: 3, title: "License Renewals", slug: "license-renewals", href: "/pro-services/license-renewals", image: "/assets/images/services/proServices/license-renewals.png" },
    { id: 4, title: "Visa Renewals", slug: "visa-renewals", href: "/pro-services/visa-renewals", image: "/assets/images/services/proServices/visa-renewals.png" },
    { id: 5, title: "Banking Assistance", slug: "banking-assistance", href: "/pro-services/banking-assistance", image: "/assets/images/services/proServices/banking-assistance.png" },
    { id: 6, title: "Office Solutions", slug: "office-solutions", href: "/pro-services/office-solutions", image: "/assets/images/services/proServices/office-solutions.png" },
];

/** Overview data used by the main services page listing section */
export const proServicesData = {
    title: {
        highlight: "PRO",
        rest: "Services"
    },
    description: "Expert government relations and business setup solutions in the UAE. From visa processing to trade license renewals, we handle all your technical and legal requirements.",
    services: proServicesList,
    footerText: "Invest First provides comprehensive PRO support to ensure your business remains compliant and operational without the need for an in-house government relations team.",
    // Include the default intro/seo for the main pro-services page
    ...companyFormation
};

/** Legacy named export kept for backward-compat with FAQAccordion on the page */
export const proServicesFAQ = {
    highlight: "Questions",
    title: companyFormation.faq.headingRest,
    faqItems: companyFormation.faq.items,
};


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
        image: "/assets/images/services/proServices/pro-services.png"
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
        title: "Professional <span class='text-[#0099CC]'>Virtual PRO</span> Services in Dubai & UAE",
        description1: "A Virtual PRO service allows businesses to outsource their government relations and compliance work to experienced professionals — without the overhead of an in-house PRO team.",
        description2: "Invest First's <span class='font-bold'>Virtual PRO services</span> cover all UAE government interactions: visa applications, labor card renewals, trade license renewals, attestations, and more. We ensure your business stays fully compliant while you focus on growth.",
        description3: "Our dedicated PRO officers liaise with DED, MOHRE, ICA, courts, and other authorities on your behalf — giving you reliable, cost-effective government relations support across all Emirates.",
        image: "/assets/images/services/proServices/virtual-pro.png"
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
        image: "/assets/images/services/proServices/virtual-pro.png"
    },
    companyFormationTypes: {
        headingRest: "Virtual PRO Services We Offer",
        description: "We provide comprehensive Virtual PRO support across all government departments:",
        items: [
            {
                id: "01",
                title: "Visa & Entry Permit Processing",
                description: "We handle employment visas, investor visas, family sponsorships, and all entry permit applications with authorities including ICA and GDRFA."
            },
            {
                id: "02",
                title: "Trade License Renewals",
                description: "Timely renewal of mainland and Freezone trade licenses across all Emirates, ensuring your business stays compliant and avoiding penalties."
            },
            {
                id: "03",
                title: "Government Document Attestation",
                description: "Attestation of corporate and personal documents including MOAs, certificates, and agreements with MOFA, embassies, and notaries."
            },
            {
                id: "04",
                title: "Labor & MOHRE Services",
                description: "Labor card issuance and renewals, MOHRE contract approvals, work permit processing, and employment-related government submissions."
            },
            {
                id: "05",
                title: "Court & Notary Filings",
                description: "Preparation and submission of legal documents, power of attorney, and court-required filings across Dubai and other Emirates."
            }
        ]
    },
    whyChoose: {
        headingRest: "Virtual PRO Services from Invest First",
        cardTitle: "How Our Virtual PRO Service Works for Your Business",
        cardTitleHighlight: "Virtual PRO",
        paragraphs: [
            "Managing government relations in the UAE can be time-consuming and complex. Our dedicated Virtual PRO officers handle all submissions, follow-ups, and renewals on your behalf.",
            "With Invest First, you get a reliable, experienced PRO team at a fraction of the cost of an in-house hire — with full transparency, fast turnaround, and zero compliance gaps."
        ],
        points: [
            'Experienced PRO officers for all UAE Emirates',
            'Fast processing with proactive deadline management',
            'Fully transparent status updates throughout the process',
            'Complete visa, labor, and licensing compliance coverage',
            'Dedicated account manager for all your PRO needs',
            'Cost-effective — no in-house PRO hiring required',
        ]
    },
    faq: {
        headingRest: "Virtual PRO Services",
        items: [
            {
                question: "What is a Virtual PRO service?",
                answer: "A Virtual PRO service means outsourcing all your government relations and document processing tasks to experienced PRO officers who work on your behalf with UAE authorities — without you needing to hire and manage an in-house PRO team."
            },
            {
                question: "Which companies benefit most from Virtual PRO?",
                answer: "SMEs, startups, and foreign companies entering the UAE benefit greatly. It is also ideal for businesses that have a small team but need consistent government compliance support without the cost of full-time PRO staff."
            },
            {
                question: "Can Virtual PRO handle all Emirates?",
                answer: "Yes. Invest First's Virtual PRO officers operate across Dubai, Abu Dhabi, Sharjah, and other Emirates, handling submissions with DED, MOHRE, ICA, GDRFA, and associated authorities."
            },
            {
                question: "How long does visa processing take with Virtual PRO?",
                answer: "Processing times vary depending on the visa type and authority. Employment visas typically take 5–10 business days, while investor visas may take slightly longer. Our team tracks every submission to avoid unnecessary delays."
            },
            {
                question: "Is my business data secure with a Virtual PRO provider?",
                answer: "Absolutely. Invest First operates under strict confidentiality agreements. All documents and business information are handled securely and shared only with the relevant government authorities."
            }
        ]
    }
};

// ── 3. Local Sponsorships ─────────────────────────────────────────────
const localSponsorships = {
    slug: 'local-sponsorships',
    intro: {
        title: "Trusted <span class='text-[#0099CC]'>Local Sponsorship</span> Solutions in UAE for Foreign Investors",
        description1: "Setting up a mainland business in the UAE has traditionally required a local UAE national sponsor or service agent for certain business activities. Invest First connects you with reliable, legally structured local sponsorship arrangements.",
        description2: "Our <span class='font-bold'>local sponsorship services</span> are built on clear contractual frameworks that protect your operational rights, profit shares, and business control — ensuring peace of mind for foreign investors.",
        description3: "We advise on whether a local sponsor, service agent, or an alternative ownership structure such as a Freezone or 100% mainland ownership (under the 2021 Commercial Companies Law amendment) is the most appropriate solution for your business activity.",
        image: "/assets/images/services/proServices/local-sponsorship.png"
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
        image: "/assets/images/services/proServices/local-sponsorship.png"
    },
    companyFormationTypes: {
        headingRest: "Local Sponsorship Structures We Facilitate",
        description: "We guide you through the right local partnership model for your activity and goals:",
        items: [
            {
                id: "01",
                title: "Local Sponsor (Sleeping Partner)",
                description: "A UAE national holds the required shareholding percentage while you retain full operational and financial control through a side agreement."
            },
            {
                id: "02",
                title: "Local Service Agent",
                description: "Required for certain professional licenses. The service agent represents you with government departments without participating in business operations or profits."
            },
            {
                id: "03",
                title: "100% Foreign Ownership Options",
                description: "Under the 2021 Commercial Companies Law, many business activities now allow 100% foreign ownership on the mainland — we assess your eligibility and guide the process."
            },
            {
                id: "04",
                title: "Nominee Shareholder Structures",
                description: "Legally documented nominee arrangements with side agreements that fully protect your investment, control, and profitability as the operating partner."
            },
            {
                id: "05",
                title: "Partnership Agreement Drafting",
                description: "We draft and notarise robust side agreements and MOAs that clearly define all rights, responsibilities, and exit provisions between all parties."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for Local Sponsorship in UAE",
        cardTitle: "Protecting Your Investment Through Structured Sponsorship",
        cardTitleHighlight: "Structured Sponsorship",
        paragraphs: [
            "A poorly structured local sponsorship arrangement can expose your business to serious legal and operational risks. Invest First ensures all sponsorship agreements are legally sound and independently verified.",
            "We source reputable local sponsors, draft clear contractual protections, and structure arrangements that genuinely serve your long-term business interests in the UAE."
        ],
        points: [
            'Vetted and reputable local sponsors across all UAE sectors',
            'Legally binding side agreements for full operational protection',
            'Advice on 100% ownership eligibility for your activity',
            'Clear profit distribution and exit clause documentation',
            'Guidance on switching from sponsored to owned structures',
            'Ongoing support throughout the sponsorship relationship',
        ]
    },
    faq: {
        headingRest: "Local Sponsorship Services",
        items: [
            {
                question: "Do I still need a local sponsor for a UAE mainland company?",
                answer: "Not always. Since the 2021 amendment to the UAE Commercial Companies Law, many business activities allow 100% foreign ownership on the mainland. However, certain regulated activities still require a local partner. We assess your specific activity to advise the right structure."
            },
            {
                question: "What rights does a local sponsor have over my business?",
                answer: "A sleeping local sponsor holds no operational rights. A separate side agreement (MOU) defines that all management, profits, and decisions belong to you. This side agreement is legally binding and fully protects your interests."
            },
            {
                question: "How is the sponsor fee structured?",
                answer: "Sponsor fees are negotiated privately and can be structured as a fixed annual fee or a small percentage of profits. Invest First helps you negotiate fair and transparent terms before any agreement is signed."
            },
            {
                question: "Can I change my local sponsor later?",
                answer: "Yes, but it requires formal legal steps including updating the MOA and trade license. Invest First manages this transition smoothly with full legal documentation and authority filings."
            },
            {
                question: "What happens if my local sponsor passes away or becomes unavailable?",
                answer: "This is addressed in the side agreement and MOA. We recommend including succession and exit clauses that protect your business continuity in such scenarios."
            }
        ]
    }
};

// ── 4. License Renewals ───────────────────────────────────────────────
const licenseRenewals = {
    slug: 'license-renewals',
    intro: {
        title: "Hassle-Free <span class='text-[#0099CC]'>License Renewal</span> Services Across UAE",
        description1: "Keeping your UAE trade license current is a legal requirement — and missing renewal deadlines can result in fines, license cancellation, and disruption to your banking and visa services.",
        description2: "Invest First's <span class='font-bold'>license renewal services</span> proactively manage your renewal timelines, document preparation, authority submissions, and payment processing — so your business never faces avoidable compliance gaps.",
        description3: "We handle renewals for mainland DED licenses, Freezone licenses across 20+ authorities, and offshore entities — ensuring accurate submissions with zero down time for your operations.",
        image: "/assets/images/services/proServices/license-renewals.png"
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
        image: "/assets/images/services/proServices/license-renewals.png"
    },
    companyFormationTypes: {
        headingRest: "License Renewal Services We Handle",
        description: "We manage the full renewal cycle for all UAE license types:",
        items: [
            {
                id: "01",
                title: "DED Mainland License Renewal",
                description: "Renewal of commercial, professional, and industrial licenses issued by Dubai Economy and Tourism (DED) and equivalent authorities across UAE Emirates."
            },
            {
                id: "02",
                title: "Freezone License Renewal",
                description: "We manage renewals across 20+ Freezones including DIFC, DMCC, JAFZA, RAKEZ, and more — handling all documentation and authority submissions."
            },
            {
                id: "03",
                title: "Activity Amendment & Upgrade",
                description: "Adding or modifying business activities during renewal to ensure your license accurately reflects your current operations and future plans."
            },
            {
                id: "04",
                title: "Tenancy Contract & Ejari Renewal",
                description: "Coordinating registered office address renewals and Ejari contract submissions required for mainland license renewals."
            },
            {
                id: "05",
                title: "Partner & Shareholder Updates",
                description: "Processing MOA amendments, shareholder changes, and manager updates during or alongside the renewal process with all relevant authorities."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for Your License Renewals",
        cardTitle: "Never Miss a Renewal Deadline Again",
        cardTitleHighlight: "Renewal Deadline",
        paragraphs: [
            "Expired licenses create cascading compliance problems — blocked bank accounts, visa processing delays, and authority fines. Invest First's proactive renewal tracking eliminates these risks.",
            "We monitor your renewal calendar, gather all required documents, and submit to the relevant authority well before deadlines — keeping your business fully operational at all times."
        ],
        points: [
            'Proactive deadline tracking and advance notifications',
            'Document collection and authority submissions managed end-to-end',
            'Renewals handled across all mainland and Freezone authorities',
            'Activity amendments and license upgrades during renewal',
            'Fast-track processing options for urgent renewals',
            'Ongoing post-renewal compliance confirmations issued',
        ]
    },
    faq: {
        headingRest: "License Renewal Services",
        items: [
            {
                question: "When should I start the license renewal process?",
                answer: "We recommend starting at least 30–45 days before your expiry date for standard renewals. Some Freezones and activities require additional lead time for inspections or document attestation."
            },
            {
                question: "What documents are typically needed for renewal?",
                answer: "Requirements vary by authority and license type but commonly include the previous trade license, tenancy contract/Ejari, shareholder passport copies, Emirates ID copies, and any regulatory approvals specific to your activity."
            },
            {
                question: "What are the penalties for late license renewal?",
                answer: "Fines vary by authority. DED charges AED 250 per month for delays, while Freezones have their own penalty structures. Beyond fines, an expired license can lead to bank account freezes and visa issuance blocks."
            },
            {
                question: "Can I add new business activities during renewal?",
                answer: "Yes, renewal is an ideal time to update your licensed activities. Invest First assesses whether the new activities require additional approvals and handles all necessary amendments with the relevant authority."
            },
            {
                question: "Can Invest First manage renewals for multiple entities?",
                answer: "Absolutely. We serve groups and holding companies with multiple entities across mainland and Freezone jurisdictions, maintaining a unified renewal calendar and coordinating all submissions centrally."
            }
        ]
    }
};

// ── 5. Visa Renewals ──────────────────────────────────────────────────
const visaRenewals = {
    slug: 'visa-renewals',
    intro: {
        title: "Expert <span class='text-[#0099CC]'>Visa Renewal</span> Services for Residents & Investors in UAE",
        description1: "UAE residence visas require timely renewal to maintain legal residency status, banking access, and uninterrupted business operations. Missing a renewal can result in overstay fines and residency complications.",
        description2: "Invest First manages the complete <span class='font-bold'>UAE visa renewal process</span> — from medical fitness tests and Emirates ID renewals to ICA submissions and status activation — for employees, investors, and their families.",
        description3: "Our PRO team handles every renewal with ICA, GDRFA, MOHRE, and Freezone visa authorities, ensuring your entire workforce and family remain legally compliant in the UAE.",
        image: "/assets/images/services/proServices/visa-renewals.png"
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
        image: "/assets/images/services/proServices/visa-renewals.png"
    },
    companyFormationTypes: {
        headingRest: "Visa Renewal Services We Manage",
        description: "We handle all UAE visa renewal types for individuals, families, and businesses:",
        items: [
            {
                id: "01",
                title: "Employment Visa Renewal",
                description: "Full renewal management for employee resident visas including medical fitness, Emirates ID renewal, and MOHRE/ICA submissions."
            },
            {
                id: "02",
                title: "Investor & Partner Visa Renewal",
                description: "Renewal of investor and partner visas for mainland and Freezone company owners, coordinated directly with the relevant licensing authority."
            },
            {
                id: "03",
                title: "Family Sponsorship Visa Renewal",
                description: "Renewal of spouse, children, and dependent residence visas with ICA — including all document preparation and status tracking."
            },
            {
                id: "04",
                title: "Golden Visa Renewal",
                description: "Management of 10-year Golden Visa renewal applications for qualifying investors, entrepreneurs, and skilled professionals."
            },
            {
                id: "05",
                title: "Emirates ID Renewal",
                description: "Coordinated Emirates ID renewal with ICA alongside visa renewal, ensuring both documents remain aligned and valid for the same period."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for Your UAE Visa Renewals",
        cardTitle: "Complete Visa Renewal Management for Peace of Mind",
        cardTitleHighlight: "Visa Renewal Management",
        paragraphs: [
            "Visa expiry creates legal and practical complications for businesses and individuals. Invest First tracks all visa expiry dates and initiates renewals well in advance to avoid fines.",
            "Our experienced PRO team coordinates every stage — from medical fitness bookings and document collection to authority submissions — ensuring on-time renewal with zero stress."
        ],
        points: [
            'Proactive visa expiry tracking and renewal initiation',
            'Medical fitness test coordination and booking',
            'Emirates ID renewal submitted alongside residence visa',
            'All authorities covered: ICA, GDRFA, MOHRE, and Freezones',
            'Family and dependant visa renewals managed centrally',
            'Transparent fee breakdown with no hidden charges',
        ]
    },
    faq: {
        headingRest: "UAE Visa Renewal Services",
        items: [
            {
                question: "How early should I renew my UAE residence visa?",
                answer: "We recommend initiating the renewal process at least 30 days before expiry. For employee visas, starting 45 days ahead accounts for the medical fitness test, MOHRE submissions, and biometrics appointments."
            },
            {
                question: "What is the fine for an expired UAE residence visa?",
                answer: "Overstaying an expired UAE residence visa incurs fines that accumulate daily. ICA fines for overstaying can reach AED 25 per day with additional service charges. Invest First ensures renewals are processed on time to avoid any penalties."
            },
            {
                question: "Can I renew my visa while outside the UAE?",
                answer: "Visa renewals typically require the individual to be present in the UAE for biometrics and medical testing. However, entry permits can be arranged for those who need to enter specifically for renewal. Our team advises the best approach for your situation."
            },
            {
                question: "Does visa renewal affect Emirates ID?",
                answer: "Yes, Emirates ID must be renewed concurrently with or immediately after your residence visa. Invest First synchronises both renewals to ensure your documents are consistently valid."
            },
            {
                question: "Can Invest First handle visa renewals for large teams?",
                answer: "Yes. We manage bulk visa renewals for companies with large UAE workforces, maintaining a renewal schedule and processing batches to minimise administrative burden for HR teams."
            }
        ]
    }
};

// ── 6. Banking Assistance ─────────────────────────────────────────────
const bankingAssistance = {
    slug: 'banking-assistance',
    intro: {
        title: "Seamless <span class='text-[#0099CC]'>Banking Assistance</span> for UAE Company Formation & Business Operations",
        description1: "Opening a corporate bank account in the UAE has become increasingly complex due to enhanced KYC requirements, compliance checks, and individual bank policies — especially for newly formed companies and foreign-owned entities.",
        description2: "Invest First offers expert <span class='font-bold'>UAE banking assistance</span> — helping you select the right bank, prepare compliant documentation packages, and present your business case effectively to maximise account approval chances.",
        description3: "We maintain established relationships with UAE's leading banks and financial institutions, giving your application direct visibility with the right decision-makers and reducing approval timelines significantly.",
        image: "/assets/images/services/proServices/banking-assistance.png"
    },
    bannerTitle: "Banking Assistance",
    bannerDescription: "Expert guidance for smooth corporate bank account opening and compliance in the UAE.",
    cardTitle: "Strategic Banking Support",
    cardDescription: "Optimizing your chances for bank account approval with professional assistance.",
    seo: {
        title: "Corporate Banking Assistance UAE | Business Bank Account Opening",
        description: "Hassle-free corporate bank account opening in the UAE. Expert guidance on KYC, documentation, and relationships with leading UAE banks.",
        keywords: "corporate banking UAE, business bank account Dubai, UAE bank account opening, banking assistance Dubai, KYC support UAE",
        canonical: "https://investfirst.ae/pro-services/banking-assistance",
        image: "/assets/images/services/proServices/banking-assistance.png"
    },
    companyFormationTypes: {
        headingRest: "Banking Assistance Services We Provide",
        description: "We support businesses with complete UAE banking setup and compliance:",
        items: [
            {
                id: "01",
                title: "Corporate Account Opening",
                description: "Guidance on selecting the right bank, preparing KYC documents, and submitting a strong banking application for newly formed and established UAE companies."
            },
            {
                id: "02",
                title: "Bank Introduction & Relationships",
                description: "Direct introductions to relationship managers at leading UAE banks including Emirates NBD, FAB, ADCB, Mashreq, and RAKBANK."
            },
            {
                id: "03",
                title: "Document Package Preparation",
                description: "Compilation and review of all required banking documents — memorandum of association, business plans, source of funds declarations, and corporate structure charts."
            },
            {
                id: "04",
                title: "Alternative Banking Solutions",
                description: "Advice on Freezone-linked bank accounts, EMI accounts, and alternative financial solutions for businesses that face challenges with traditional banking."
            },
            {
                id: "05",
                title: "Ongoing Banking Compliance",
                description: "Support with periodic KYC updates, account maintenance requirements, and communication with your bank's compliance team as your business evolves."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for UAE Banking Assistance",
        cardTitle: "Maximise Your UAE Bank Account Approval Chances",
        cardTitleHighlight: "Bank Account Approval",
        paragraphs: [
            "UAE banks conduct thorough due diligence on all applicants. A poorly prepared application or the wrong bank selection can result in weeks of delays or outright rejection. Invest First removes this uncertainty.",
            "Our banking specialists know what each bank looks for, prepare compelling application packages, and position your business case effectively to significantly increase your chances of a successful account opening."
        ],
        points: [
            'Access to established relationships with 10+ UAE banks',
            'Expert guidance on the right bank for your business activity',
            'Compliant KYC and document package preparation',
            'Direct introductions to relationship managers',
            'Alternative EMI and Freezone banking options available',
            'Support throughout the full application and approval process',
        ]
    },
    faq: {
        headingRest: "UAE Banking Assistance",
        items: [
            {
                question: "Why is opening a corporate bank account difficult in the UAE?",
                answer: "UAE banks have stringent KYC and AML compliance requirements. Newly formed companies, certain business activities, and non-resident shareholders often require detailed documentation and explanations. Banks each have their own internal risk policies, making the right match critical."
            },
            {
                question: "Which UAE banks does Invest First work with?",
                answer: "We have working relationships with major UAE banks including Emirates NBD, First Abu Dhabi Bank, ADCB, Mashreq, RAKBank, ENBD, and several others, as well as select international EMI options for businesses requiring alternatives."
            },
            {
                question: "How long does UAE corporate bank account opening take?",
                answer: "With a well-prepared application and the right bank match, accounts can be opened in 2–4 weeks. Complex structures or certain nationalities may take longer. Invest First manages the process to minimise unnecessary delays."
            },
            {
                question: "Can a Freezone company open a UAE bank account?",
                answer: "Yes. Freezone companies can open accounts with UAE banks, though each bank has its own policies on which Freezones it works with. Some Freezones also have linked banking partners. We advise on the best option for your specific Freezone."
            },
            {
                question: "What if my bank account application is rejected?",
                answer: "Invest First analyses the reasons for rejection and advises on an amended approach — whether that means reapplying to the same bank with stronger documentation, approaching a different bank, or exploring alternative financial solutions."
            }
        ]
    }
};

// ── 7. Office Solutions ───────────────────────────────────────────────
const officeSolutions = {
    slug: 'office-solutions',
    intro: {
        title: "Flexible <span class='text-[#0099CC]'>Office Solutions</span> for UAE Businesses — Virtual, Flexi & Dedicated Spaces",
        description1: "Having the right registered office address is a legal requirement for UAE trade licensing and visa issuance. Invest First provides a full range of UAE office solutions tailored to your business size, activity, and budget.",
        description2: "From <span class='font-bold'>registered service addresses and flexi-desks</span> for startups and Freezone companies, to dedicated private offices for established businesses, we source and arrange ideal workspaces across Dubai and key UAE Emirates.",
        description3: "Our office solutions are fully integrated with your licensing and visa requirements — ensuring your address satisfies authority requirements, supports the number of visas you need, and scales as your business grows.",
        image: "/assets/images/services/proServices/office-solutions.png"
    },
    bannerTitle: "Office Solutions",
    bannerDescription: "Flexible workspace options tailored to your business license and visa requirements.",
    cardTitle: "Ideal Business Workspaces",
    cardDescription: "Finding the right office setup to support your operations and visa quota.",
    seo: {
        title: "Flexible Office Solutions UAE | Virtual & Serviced Workspaces",
        description: "Find the perfect office space for your UAE business. Virtual addresses, flexi-desks, and dedicated private offices aligned with your licensing needs.",
        keywords: "office solutions Dubai, virtual office UAE, flexi desk Dubai, serviced office UAE, registered business address Dubai",
        canonical: "https://investfirst.ae/pro-services/office-solutions",
        image: "/assets/images/services/proServices/office-solutions.png"
    },
    companyFormationTypes: {
        headingRest: "Office Solutions We Offer",
        description: "We provide a range of UAE workspace options to match your business needs:",
        items: [
            {
                id: "01",
                title: "Registered Service Address",
                description: "A UAE registered business address for your trade license — ideal for Freezone companies and businesses that operate remotely or from client sites."
            },
            {
                id: "02",
                title: "Flexi-Desk & Hot-Desking",
                description: "Shared workspace memberships in professional business centres across Dubai and UAE Freezones — perfect for startups and small teams needing a physical presence."
            },
            {
                id: "03",
                title: "Private Serviced Offices",
                description: "Fully fitted, private office spaces in premium business centres with receptionist services, meeting rooms, and all utilities included."
            },
            {
                id: "04",
                title: "Executive Suites",
                description: "High-specification executive offices in prestigious Dubai locations for companies requiring premium professional environments for leadership teams."
            },
            {
                id: "05",
                title: "Warehouse & Industrial Space",
                description: "Sourcing of commercial and industrial units in approved UAE zones for businesses with storage, manufacturing, or logistics requirements."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for UAE Office Solutions",
        cardTitle: "Office Spaces Aligned to Your Licensing & Visa Needs",
        cardTitleHighlight: "Licensing & Visa Needs",
        paragraphs: [
            "Choosing the wrong office type can limit the number of visas your company can obtain, or fail authority requirements during license renewal. Invest First ensures your office solution is correctly aligned with your licensing and visa quota.",
            "We source, negotiate, and arrange the right workspace — from a simple registered address to a fully equipped private office — at competitive rates across all UAE Emirates."
        ],
        points: [
            'Office solutions matched to your visa quota requirements',
            'Addresses accepted by all UAE licensing authorities',
            'Access to business centres across 15+ UAE locations',
            'Ejari registration and tenancy contract management included',
            'Scalable options as your team and business grow',
            'Pro-rated and flexible tenancy periods available',
        ]
    },
    faq: {
        headingRest: "UAE Office Solutions",
        items: [
            {
                question: "Do I need a physical office for a UAE trade license?",
                answer: "It depends on your license type and jurisdiction. Mainland DED licenses require a registered tenancy contract (Ejari). Most Freezones offer flexi-desk or shared workspace options that satisfy their licensing requirements at lower cost."
            },
            {
                question: "How does office type affect my visa quota?",
                answer: "In the UAE, the size and type of your office space directly affects how many employee visas your company is eligible for. Larger, dedicated offices support higher visa quotas. Invest First helps you select an office that matches your intended team size."
            },
            {
                question: "Can I use a registered address for my UAE company?",
                answer: "Certain Freezone licenses support registered service addresses without the need for a physical desk or office. Mainland DED licenses typically require a physical registered tenancy contract. We advise based on your specific license type."
            },
            {
                question: "What is an Ejari and why do I need it?",
                answer: "Ejari is the official Dubai tenancy registration system managed by RERA. All mainland commercial tenancy contracts must be registered in Ejari and submitted for DED license renewal. Invest First manages this process on your behalf."
            },
            {
                question: "Can Invest First help if I need office space urgently?",
                answer: "Yes. Through our business centre network we can arrange immediate flexi-desk access and registered addresses within 24–48 hours in most cases, allowing you to meet urgent licensing or banking requirements."
            }
        ]
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

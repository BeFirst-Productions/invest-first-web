
/* ─────────────────────────────────────────────────────────────────────
   DocumentServicesData.js
   Central data file for the Document-Services section.
───────────────────────────────────────────────────────────────────── */

const attestationServices = {
    slug: 'attestation-services',
    bannerTitle: "Attestation Services",
    bannerDescription: "Professional document attestation services for UAE residency, employment, and business needs.",
    cardTitle: "Secure Document Attestation",
    cardDescription: "Hassle-free attestation from MOFA, embassies, and notaries across the UAE.",
    intro: {
        title: "<span class='text-[#0099CC]'>Attestation Services</span> Professional Document Legalization in Dubai",
        description1: "Attesting your personal and commercial documents is a critical step for legalizing your status in the UAE. Whether it's for an employment visa, company formation, or school registration, we ensure your documents are correctly processed by the relevant authorities.",
        description2: "Invest First provides end-to-end attestation services UAE, covering educational certificates, marriage certificates, birth certificates, and corporate documents (MOAs, Powers of Attorney, etc.).",
        image: "/assets/images/document-services/typing-service.png"
    },
    serviceTypes: {
        title: "Types of Attestation Services",
        highlight: "We Offer",
        description: "We handle the complete attestation cycle for all types of personal, educational, and commercial documents, ensuring they are valid for legal use in the UAE and abroad.",
        items: [
            {
                title: "Educational Certificate Attestation",
                description: "Degrees, diplomas, and school certificates legalized by MOFA and relevant embassies for employment and residency permissions."
            },
            {
                title: "Personal Document Legalization",
                description: "Birth certificates, marriage certificates, and medical reports attested to facilitate family sponsorship and legal procedures."
            },
            {
                title: "Commercial Document Attestation",
                description: "MOAs, Power of Attorney, and Board Resolutions legalized for corporate compliance and official business registrations.",
                isHighlighted: true
            },
            {
                title: "MOFA & Embassy Coordination",
                description: "Direct liaison with the Ministry of Foreign Affairs and foreign consulates for seamless outbound and inbound document processing."
            },
            {
                title: "Notary Public & Legal Verification",
                description: "Verification services for legal contracts and agreements requiring official stamps before government submission."
            },
            {
                title: "Certified Document Submission",
                description: "Expert handling of documentation for submission to courts, ministries, and international bodies with full regulatory compliance."
            }
        ]
    },
    benefits: {
        title: "Benefits",
        highlight: "of Attestation Services in Dubai:",
        items: [
            {
                title: "Legal Recognition:",
                description: "Ensures your documents are legally valid for all UAE government and international requirements."
            },
            {
                title: "Global Acceptance:",
                description: "Simplifies the process of using UAE-issued documents in foreign countries and vice versa."
            },
            {
                title: "Expert Verification:",
                description: "Avoids administrative errors by having specialists handle complex MOFA and embassy workflows."
            },
            {
                title: "Time Efficiency:",
                description: "Reduces the time spent traveling to multiple government departments for stamps and signatures."
            },
            {
                title: "Secure Handling:",
                description: "Guarantees that your original documents are handled with the highest level of confidentiality and care."
            },
            {
                title: "Stress-Free Process:",
                description: "We handle the entire end-to-end attestation cycle, so you don't have to navigate government bureaucracy."
            }
        ]
    },
    seo: {
        title: "Document Attestation Services Dubai | MOFA & Embassy Attestation UAE",
        description: "Get your certificates and legal documents attested in Dubai quickly. We handle MOFA, embassy, and notary attestation for personal and commercial documents.",
        keywords: "document attestation Dubai, MOFA attestation UAE, certificate attestation Dubai, marriage certificate attestation UAE, degree attestation Dubai",
        canonical: "https://investfirst.ae/document-services/attestation-services",
        image: "/assets/images/services/documentServices/attestation.png"
    },
    details: {
        headingRest: "Attestation Services We Provide",
        description: "We handle the complete attestation workflow for all document types:",
        items: [
            {
                id: "01",
                title: "Educational Certificate Attestation",
                description: "Degrees, diplomas, and school certificates attested for employment and residency purposes."
            },
            {
                id: "02",
                title: "Personal Document Attestation",
                description: "Birth certificates, marriage certificates, and medical reports legalized for family sponsorship and legal use."
            },
            {
                id: "03",
                title: "Commercial Document Attestation",
                description: "Memorandum of Association (MOA), Power of Attorney, and Board Resolutions attested for corporate setup."
            },
            {
                id: "04",
                title: "MOFA & Embassy Coordination",
                description: "Direct liaison with the UAE Ministry of Foreign Affairs and foreign embassies for outbound and inbound documents."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for Attestation",
        cardTitle: "Why Choose Our Attestation Services",
        cardTitleHighlight: "Attestation Services",
        paragraphs: [
            "Document attestation involves multiple steps across different government departments. Errors can lead to significant delays in your visa or business setup process.",
            "Invest First ensures your documents are handled with care, following exact regulatory paths to guarantee acceptance by UAE authorities and international bodies."
        ],
        points: [
            'End-to-end management of the attestation cycle',
            'Pick-up and delivery services available',
            'Expertise in personal and corporate document requirements',
            'Fast-track options for urgent processing',
            'Direct coordination with MOFA and foreign consulates',
            'Transparent status tracking and deadline management'
        ]
    },
    whyInvestFirst: {
        title: "Why Is Investing First the Best Choice for Your UAE Business?",
        description: "Invest First offers complete business setup services in the UAE, including licensing, visas, PRO services, and attestation solutions. With expert knowledge of UAE regulations, fast processing, transparent guidance, and personalized support, Invest First helps businesses start, operate, and grow smoothly and compliantly in the UAE."
    },
    processTime: {
        title: "Attestation Services UAE",
        subtitle: "Application Process Time",
        highlight: "Process Time",
        items: [
            {
                icon: 'ShieldCheck',
                title: "Document Verification:",
                description: "Certificates are authenticated for validity before starting the attestation cycle."
            },
            {
                icon: 'Building2',
                title: "Ministry Submission:",
                description: "Documents are submitted to MOFA or foreign embassies for official legalization."
            },
            {
                icon: 'Stamp',
                title: "Embassy Coordination:",
                description: "Liaising with consulates for inbound or outbound document certification."
            },
            {
                icon: 'Clock',
                title: "Overall Processing Time:",
                description: "Most attestation tasks are completed within 3 to 7 business days, depending on country of origin."
            }
        ]
    },
    process: {
        title: "How Our Attestation Process",
        highlight: "Works",
        steps: [
            {
                id: "01",
                title: "Submit Documents",
                description: "Provide the original documents and a copies to our experts for initial review."
            },
            {
                id: "02",
                title: "Legal Verification",
                description: "We handle notary public verification and ministry-level certifications."
            },
            {
                id: "03",
                title: "Ministry & Embassy Submission",
                description: "Direct coordination with MOFA and necessary foreign embassies for final stamps."
            },
            {
                id: "04",
                title: "Secure Delivery",
                description: "Your fully attested documents are delivered safely to your preferred location."
            }
        ]
    },
    faq: {
        headingRest: "Document Attestation",
        items: [
            {
                question: "What is document attestation?",
                answer: "Attestation is the process of verifying a document's authenticity by relevant government authorities. In the UAE, this typically involves the Ministry of Foreign Affairs (MOFA) and often the embassy of the country where the document originated."
            },
            {
                question: "How long does the attestation process take?",
                answer: "The duration depends on the document type and origin. Standard UAE MOFA attestation can take 1-3 business days. If international embassy attestation is required, it can take 7-15 business days."
            },
            {
                question: "Do I need to be present for the attestation?",
                answer: "In most cases, no. We can handle the entire process on your behalf. You simply need to provide the original documents and a copy of your passport/Emirates ID."
            }
        ]
    }
};

const legalTranslation = {
    slug: 'legal-translation',
    bannerTitle: "Legal Translation",
    bannerDescription: "Accurate and certified legal translation services accepted by all UAE ministries and courts.",
    cardTitle: "Certified Legal Translation",
    cardDescription: "High-quality translations by licensed professionals for all your legal and business needs.",
    intro: {
        title: "<span class='text-[#0099CC]'>Legal Translation</span> Certified Arabic & Multi-language Experts",
        description1: "Official documents in the UAE must often be translated into Arabic for submission to government departments, courts, and ministries. Our certified translators ensure accuracy and compliance with legal standards.",
        description2: "Invest First provides legal translation services UAE that are recognized by the Ministry of Justice, DED, and all Freezone authorities. From legal contracts and court judgments to personal identification and marketing materials, we bridge the language gap with precision and speed.",
        image: "/assets/images/document-services/typing-service.png"
    },
    serviceTypes: {
        title: "Types of Legal Translation",
        highlight: "We Offer",
        description: "Our certified translators provide accurate translations accepted by all UAE ministries, courts, and government departments in over 50 global languages.",
        items: [
            {
                title: "Legal Contract Translation",
                description: "Certified translation of MOAs, SLAs, and corporate agreements with precision and legal validity in all UAE courts."
            },
            {
                title: "Personal Identification Translation",
                description: "Official Arabic translation of passports, birth certificates, and marriage certificates for immigration and residency requirements."
            },
            {
                title: "Technical & Medical Translation",
                description: "Expert translation of medical reports, pharmacy documents, and technical manuals by specialized linguists.",
                isHighlighted: true
            },
            {
                title: "Financial & Audit Translation",
                description: "Accurate translation of financial statements, audit reports, and banking documents for compliance and official audits."
            },
            {
                title: "Commercial & Marketing Content",
                description: "Translating business plans, marketing materials, and digital content to localize your brand for the Middle Eastern market."
            },
            {
                title: "Website & Digital Localization",
                description: "Comprehensive translation services for websites and software applications, ensuring linguistic and cultural relevance."
            }
        ]
    },
    benefits: {
        title: "Benefits",
        highlight: "of Legal Translation in Dubai:",
        items: [
            {
                title: "Court Recognition:",
                description: "Certified translations are officially accepted by all UAE courts, ministries, and government bodies."
            },
            {
                title: "Linguistic Accuracy:",
                description: "Expert translators ensure every legal nuance is captured correctly in the target language."
            },
            {
                title: "Ministry-Approved Stamps:",
                description: "Our translations carry the necessary legal stamps required for official government submission."
            },
            {
                title: "Language Versatility:",
                description: "Access a wide range of global languages with certified proficiency in legal terminology."
            },
            {
                title: "Confidentiality Guaranteed:",
                description: "We enforce strict data protection protocols for all sensitive legal and corporate documents."
            },
            {
                title: "Fast Turnaround:",
                description: "Get high-quality, certified translations delivered within tight deadlines for urgent legal matters."
            }
        ]
    },
    seo: {
        title: "Legal Translation Services Dubai | Certified Arabic Translation UAE",
        description: "Professional legal translation in Dubai. Certified Arabic to English and English to Arabic translations for contracts, certificates, and legal filings.",
        keywords: "legal translation Dubai, certified translator UAE, Arabic translation Dubai, document translation UAE, official translation services Dubai",
        canonical: "https://investfirst.ae/document-services/legal-translation",
        image: "/assets/images/services/documentServices/translation.png"
    },
    details: {
        headingRest: "Translation Services We Offer",
        description: "We provide translation across a vast range of languages and document types:",
        items: [
            {
                id: "01",
                title: "Legal Contract Translation",
                description: "Translations of MOAs, SLAs, and other corporate agreements with legal certification."
            },
            {
                id: "02",
                title: "Personal Document Translation",
                description: "Certified translation of passports, birth certificates, and marriage certificates for official use."
            },
            {
                id: "03",
                title: "Technical & Medical Translation",
                description: "Specialized translation for medical reports, technical manuals, and industrial documentation."
            },
            {
                id: "04",
                title: "Commercial & Marketing Translation",
                description: "Translating business plans, websites, and promotional materials to resonate with the local market."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for Legal Translation",
        cardTitle: "Accuracy and Certification You Can Trust",
        cardTitleHighlight: "Legal Translation",
        paragraphs: [
            "A minor translation error in a legal document can have serious legal or financial consequences. Our translators are not only linguists but also experts in UAE legal terminology.",
            "We provide fast turnaround times without compromising on quality, ensuring your documents are ready for submission when you need them."
        ],
        points: [
            'Approved by the UAE Ministry of Justice',
            'Translations accepted by all UAE government departments',
            'Expertise in legal, financial, and technical terminology',
            'Strict quality control and proofreading process',
            'Fast turnaround for urgent requirements',
            'Confidential handling of sensitive information'
        ]
    },
    whyInvestFirst: {
        title: "Why Is Investing First the Best Choice for Your UAE Business?",
        description: "Invest First offers complete business setup services in the UAE, including licensing, visas, PRO services, and translation solutions. With expert knowledge of UAE regulations, fast processing, transparent guidance, and personalized support, Invest First helps businesses start, operate, and grow smoothly and compliantly in the UAE."
    },
    processTime: {
        title: "Legal Translation UAE",
        subtitle: "Document Translation Time",
        highlight: "Translation Time",
        items: [
            {
                icon: 'ScanSearch',
                title: "Text Analysis:",
                description: "Analyzing the scope and legal complexity of the documents for accurate terminology mapping."
            },
            {
                icon: 'Languages',
                title: "Expert Translation:",
                description: "Certified translation performed by MOJ-licensed linguists specializing in the target language."
            },
            {
                icon: 'ClipboardCheck',
                title: "Quality Review:",
                description: "Meticulous proofreading and stamping to ensure legal validity in all UAE government offices."
            },
            {
                icon: 'Zap',
                title: "Overall Processing Time:",
                description: "Standard translations (1-5 pages) are typically delivered within 24 to 48 hours."
            }
        ]
    },
    process: {
        title: "How Legal Translation",
        highlight: "Works",
        steps: [
            {
                id: "01",
                title: "Document Submission",
                description: "Send us your source documents digitally or physically for a quick assessment."
            },
            {
                id: "02",
                title: "Expert Translation",
                description: "Our certified linguists perform precise translation into the target language."
            },
            {
                id: "03",
                title: "Proofreading & Legal Stamp",
                description: "The translated work is reviewed and stamped by MOJ-licensed translators."
            },
            {
                id: "04",
                title: "Final Completion",
                description: "Receive your certified translations ready for any UAE government submission."
            }
        ]
    },
    faq: {
        headingRest: "Legal Translation",
        items: [
            {
                question: "Which languages do you translate?",
                answer: "We specialize in Arabic and English, but we also provide translation services for French, German, Russian, Chinese, Hindi, and many other global languages."
            },
            {
                question: "Is your translation accepted by UAE courts?",
                answer: "Yes, our legal translations are certified and stamped by translators licensed by the UAE Ministry of Justice, making them valid for use in all UAE courts and government offices."
            },
            {
                question: "What is the typical turnaround time?",
                answer: "Standard documents (1-3 pages) are typically translated within 24 hours. Larger projects or highly technical documents may require more time."
            }
        ]
    }
};

const typingServices = {
    slug: 'typing-services',
    bannerTitle: "Typing Services",
    bannerDescription: "Fast and accurate typing services for all UAE government applications and forms.",
    cardTitle: "Professional Typing Services",
    cardDescription: "Expert handling of Emirates ID, Visa, and Labor applications with 100% accuracy.",
    intro: {
        title: "<span class='text-[#0099CC]'>Typing Services</span> UAE Professional Typing Center in Dubai",
        description1: "Our typing services UAE are designed to help individuals and businesses complete government documentation accurately and efficiently. As a trusted business setup service provider in Dubai, we offer reliable typing solutions that comply with UAE authority requirements. From visa applications to Emirates ID and labor card processing, our typing center ensures every document is prepared correctly and submitted on time.",
        description2: "As part of our complete business setup services in the UAE, our typing center supports entrepreneurs at every stage of their journey. From initial company formation documentation to ongoing PRO and administrative needs, we act as a single point of contact for efficient processing. Our goal is to reduce your administrative burden so you can focus on growing your business with confidence.",
        image: "/assets/images/document-services/typing-service.png"
    },
    serviceTypes: {
        title: "Types of Typing Services",
        highlight: "We Offer",
        description: "Our typing services cover visas, Emirates ID, labor cards, immigration, GDRFA, and company documentation, with every application carefully typed, reviewed, and verified to meet the latest UAE government regulations.",
        items: [
            {
                title: "Emirates ID Typing Services",
                description: "Our Emirates ID typing services in the UAE ensure accurate support for registrations, renewals, updates, and replacements. We enter every detail correctly and in full compliance with ICP requirements to help avoid delays or rejection."
            },
            {
                title: "Immigration & GDRFA Typing Services",
                description: "Our Immigration & GDRFA typing services offer reliable support for UAE immigration applications. We ensure accurate data entry, compliance with regulations, and error-free documentation to help prevent delays and application rejection."
            },
            {
                title: "PRO & Government Form Typing Services",
                description: "Our PRO & Government Form Typing Services provide complete support for UAE government documentation. We manage accurate typing, submissions, and approvals across departments, simplifying complex processes while ensuring compliance and efficient handling.",
                isHighlighted: true
            },
            {
                title: "Company Formation & Trade License Typing",
                description: "Reliable typing services for company registration and trade license applications, including amendments and renewals across UAE authorities. We ensure accurate documentation, regulatory compliance, and smooth processing to help businesses avoid delays."
            },
            {
                title: "PRO & Government Form Typing Service",
                description: "Comprehensive PRO typing solutions for UAE government forms, submissions, and approvals. Our skilled team ensures accurate paperwork, regulatory compliance, and fast processing to help individuals and businesses avoid delays."
            },
            {
                title: "Document Submission & Application Typing",
                description: "Our Document Submission & Application Typing services in the UAE are designed to provide accurate, reliable, and stress-free support for individuals and businesses handling government documentation and strict compliance with current regulations."
            }
        ]
    },
    benefits: {
        title: "Benefits",
        highlight: "of Typing Services in Dubai:",
        items: [
            {
                title: "Ease of Doing Business:",
                description: "Professional typing services reduce the time spent on preparing and submitting government applications."
            },
            {
                title: "High Accuracy:",
                description: "Experienced typists ensure error-free forms, minimizing rejections and delays."
            },
            {
                title: "Government Compliance:",
                description: "All documents are prepared according to the latest UAE government rules and formats."
            },
            {
                title: "Fast Processing:",
                description: "Most typing services are completed within the same day or 24 hours."
            },
            {
                title: "Hassle-Free Experience:",
                description: "Experts handle the paperwork so you can focus on your business or personal priorities."
            },
            {
                title: "Support for Individuals & Businesses:",
                description: "Suitable for visas, Emirates ID, labor cards, and company documentation."
            }
        ]
    },
    seo: {
        title: "Government Typing Services Dubai | Emirates ID & Visa Typing UAE",
        description: "Professional typing services for Emirates ID, visa applications, and labor contracts in Dubai. Fast, accurate, and compliant government form processing.",
        keywords: "typing services Dubai, Emirates ID typing, visa application typing UAE, labor contract typing Dubai, government form typing Dubai",
        canonical: "https://investfirst.ae/document-services/typing-services",
        image: "/assets/images/services/documentServices/typing.png"
    },
    details: {
        headingRest: "Typing Services We Handle",
        description: "We assist with a wide range of government and administrative typing tasks:",
        items: [
            {
                id: "01",
                title: "Emirates ID Typing",
                description: "Accurate preparation and submission of Emirates ID applications for new issues and renewals."
            },
            {
                id: "02",
                title: "Visa & Entry Permit Typing",
                description: "Typing for all types of visas: investor, employment, family, and tourist applications."
            },
            {
                id: "03",
                title: "Labor & Immigration Forms",
                description: "Preparation of MOHRE labor contracts, offer letters, and immigration-related documentation."
            },
            {
                id: "04",
                title: "E-channel & Portal Submissions",
                description: "Managing registrations and submissions on various governmental e-channels and portals."
            }
        ]
    },
    whyChoose: {
        headingRest: "Invest First for Typing Services",
        cardTitle: "Error-Free Submissions for Faster Approvals",
        cardTitleHighlight: "Typing Services",
        paragraphs: [
            "Inaccurate data entry in government forms is the leading cause of application rejection. Our typing team is trained to double-check every detail before submission.",
            "We provide a seamless experience, handling the technicalities so you can focus on your move or your business in the UAE."
        ],
        points: [
            'Experienced professionals familiar with all UAE portals',
            'Fast and accurate data entry',
            'Reduced risk of application rejections',
            'Support for all government departments (ICA, GDRFA, MOHRE)',
            'Real-time updates on application status',
            'Competitive pricing for all typing tasks'
        ]
    },
    whyInvestFirst: {
        title: "Why Is Investing First the Best Choice for Your UAE Business?",
        description: "Invest First offers complete business setup services in the UAE, including licensing, visas, PRO services, and typing solutions. With expert knowledge of UAE regulations, fast processing, transparent guidance, and personalized support, Invest First helps businesses start, operate, and grow smoothly and compliantly in the UAE."
    },
    processTime: {
        title: "Typing Services UAE",
        subtitle: "Application Process Time",
        highlight: "Process Time",
        items: [
            {
                icon: 'FileText',
                title: "Document Review:",
                description: "Documents are checked for completeness and accuracy before typing begins."
            },
            {
                icon: 'Printer',
                title: "Typing & Form Preparation:",
                description: "Applications are typed according to UAE government formats, usually completed the same day."
            },
            {
                icon: 'Cpu',
                title: "Submission to Authorities:",
                description: "Forms are submitted to the relevant UAE government portal or department."
            },
            {
                icon: 'Settings2',
                title: "Overall Processing Time:",
                description: "Most typing services are completed within a few hours to 24 hours, depending on the application type."
            }
        ]
    },
    process: {
        title: "Our Simplified Typing",
        highlight: "Workflow",
        steps: [
            {
                id: "01",
                title: "Data Submission",
                description: "Submit all necessary information and documents through our secure portal or center."
            },
            {
                id: "02",
                title: "Application Processing",
                description: "Our experts accurately type the applications on official government portals."
            },
            {
                id: "03",
                title: "Government Approval",
                description: "We monitor the application status and coordinate with authorities for approvals."
            },
            {
                id: "04",
                title: "Service Delivery",
                description: "You receive your completed ID, visa, or contract without any administrative hassle."
            }
        ]
    },
    faq: {
        headingRest: "Typing Services",
        items: [
            {
                question: "Do I need to visit your office for typing services?",
                answer: "While you are welcome to visit us, most typing tasks can be handled remotely. You can send us the required documents digitally, and we will process the application for you."
            },
            {
                question: "What documents do I need for Emirates ID typing?",
                answer: "Typically, you need your passport copy, visa copy (or entry permit), and a high-quality photograph. For renewals, your current Emirates ID is also required."
            },
            {
                question: "Can you help with medical test bookings too?",
                answer: "Yes, as part of our typing and visa support services, we can book your medical fitness test appointments at various centers across the UAE."
            }
        ]
    }
};

/* ─────────────────────────────────────────────────────────────────────
   EXPORTS
───────────────────────────────────────────────────────────────────── */

export const documentServicesList = [
    { id: '01', title: "Typing Services", slug: "typing-services", href: "/document-services/typing-services", image: "/assets/images/services/documentServices/typing.png", description: "Professional typing for Emirates ID, Visas, and Labor contracts." },
    { id: '02', title: "Legal Translation", slug: "legal-translation", href: "/document-services/legal-translation", image: "/assets/images/services/documentServices/translation.png", description: "Certified translations recognized by all UAE ministries." },
    { id: '03', title: "Attestation Services", slug: "attestation-services", href: "/document-services/attestation-services", image: "/assets/images/services/documentServices/attestation.png", description: "Reliable document attestation from MOFA and embassies." },
];

export const documentDataMap = {
    'attestation-services': attestationServices,
    'legal-translation': legalTranslation,
    'typing-services': typingServices,
};

export const documentServicesOverview = {
    title: {
        highlight: "Document",
        rest: "Services"
    },
    description: "Efficient handling of all your official paperwork. From legal translations to government attestations, we ensure your documents are legally compliant in the UAE.",
    services: documentServicesList,
    footerText: "Invest First streamlines the paperwork process, providing accurate translations and fast attestations to keep your personal and professional affairs on track.",
    ...attestationServices // default
};

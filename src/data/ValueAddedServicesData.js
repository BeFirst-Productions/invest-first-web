export const valueAddedServicesData = [
    {
        id: 1,
        title: "VAT & Corporate Tax Assistance",
        description: "Expert guidance for VAT registration and corporate tax compliance in the UAE. Stay compliant with the latest tax laws and regulations.",
        icon: "FileText"
    },
    {
        id: 2,
        title: "Medical Insurance Assistance",
        description: "Comprehensive medical insurance solutions for individuals and businesses. We help you navigate the complex health insurance landscape in the UAE.",
        icon: "BriefcaseMedical"
    },
    {
        id: 3,
        title: "Trademark Registration",
        description: "Protect your brand and intellectual property in the UAE market. Professional trademark filing and monitoring services.",
        icon: "UserCheck"
    },
    {
        id: 4,
        title: "Branding and Design Services",
        description: "Elevate your brand with premium design and creative strategy. From logo design to full brand identity development.",
        icon: "PenTool"
    },
    {
        id: 5,
        title: "Digital Marketing Services",
        description: "Grow your online presence and reach your target audience effectively. Comprehensive SEO, PPC, and social media management.",
        icon: "Settings"
    },
    {
        id: 6,
        title: "Web Design & Development",
        description: "High-performance websites and custom web applications. Responsive, fast, and user-centric web development.",
        icon: "Globe"
    }
];

export const valueAddedServicesMap = {
    "vat-corporate-tax": {
        title: "VAT & Corporate Tax Assistance",
        bannerTitle: "VAT & Corporate Tax Assistance",
        bannerDescription: "Expert guidance for VAT registration and corporate tax compliance in the UAE.",
        intro: {
            title: {
                start: "Complete Solutions",
                highlight: "VAT & Corporate",
                highlight2: "Tax Registration",
                end: "In Dubai UAE"
            },
            paragraphs: [
                "VAT registration is the vital step for a business to be able to operate in a fully legal manner under the tax laws of the UAE. VAT corporate tax registration UAE, is basically the first step to keep a business in line with the tax law in the UAE. A company or an individual, if their turnover goes beyond the limit set by law or they make taxable supplies, must register for VAT with the Federal Tax Authority (FTA).",
                "Corporate Tax or CT is a type of direct tax that is imposed on the net profit of businesses and corporations in the UAE. It will be mandatory for companies in the UAE to register for the corporate tax starting from 1 June 2023."
            ],
            image: "/assets/images/about/about.webp"
        },
        process: {
            tabs: [
                {
                    id: 'process',
                    label: 'How to process',
                    content: [
                        { number: 1, title: "Verify Your Eligibility", description: "Understand if your business needs to register for VAT in the UAE." },
                        { number: 2, title: "Prepare Documents", description: "Collect all the required documents for VAT registration, which include identity proof and business details." },
                        { number: 3, title: "Complete the Online Registration Form", description: "Visit the FTA VAT portal and carefully fill out the VAT registration form." },
                        { number: 4, title: "Submit the Application", description: "Upload the documents required for VAT Registration and submit your UAE Value Added Tax (VAT) registration online." },
                        { number: 5, title: "FTA Review & Approval", description: "FTA reviews the application, may request details, approval takes 5–20 days." }
                    ]
                },
                {
                    id: 'benefits',
                    label: 'Benefits',
                    title: "The benefits of VAT Registration in UAE include:",
                    content: [
                        "Legal compliance with UAE tax laws",
                        "Ability to claim input tax credits",
                        "Enhanced business credibility and professional image",
                        "International business expansion opportunities"
                    ]
                },
                {
                    id: 'documents',
                    label: 'Required Documents',
                    title: "Essential documents required for VAT registration:",
                    content: [
                        "Trade License copy",
                        "Passport and Emirates ID of directors/owners",
                        "Memorandum of Association (MOA)",
                        "Contact details and business address",
                        "Bank account details",
                        "Turnover declaration for the last 12 months"
                    ]
                }
            ]
        },
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Our VAT & Corporate Tax Services?",
            descriptions: [
                "Expert Guidance: Our team of tax professionals provides in-depth knowledge and practical solutions tailored to your business needs.",
                "Compliance Simplified: We take the complexity out of VAT and Corporate Tax regulations, ensuring you stay fully compliant with UAE laws.",
                "Timely Filing: Avoid penalties with our efficient registration and filing processes, keeping your business on track with FTA deadlines."
            ]
        },
        faqs: {
            title: "VAT & Corporate Tax UAE",
            items: [
                { question: "What is the VAT rate in the UAE?", answer: "The standard VAT rate in the UAE is 5%." },
                { question: "When do I need to register for VAT?", answer: "Registration is mandatory for businesses with taxable supplies exceeding AED 375,000 in a year." },
                { question: "What is the Corporate Tax rate?", answer: "The Corporate Tax rate is 9% for taxable income exceeding AED 375,000." }
            ]
        }
    },
    "medical-insurance": {
        title: "Medical Insurance Assistance",
        bannerTitle: "Medical Insurance Assistance",
        bannerDescription: "Comprehensive medical insurance solutions for individuals and businesses.",
        intro: {
            title: {
                start: "Comprehensive",
                highlight: "Medical & Health",
                highlight2: "Insurance Plans",
                end: "for UAE Residents"
            },
            paragraphs: [
                "Securing the right medical insurance is not just a regulatory requirement in the UAE; it's a vital part of protecting your well-being and that of your employees. We provide expert assistance in navigating the vast array of insurance options available in the market.",
                "Whether you're looking for basic DHA-compliant plans or premium international coverage, our team helps you find the most cost-effective solution tailored to your specific needs."
            ],
            image: "/assets/images/about/about.webp"
        },
        process: {
            tabs: [
                {
                    id: 'process',
                    label: 'How it works',
                    content: [
                        { number: 1, title: "Initial Consultation", description: "We discuss your budget and coverage requirements." },
                        { number: 2, title: "Plan Comparison", description: "Our team presents multiple quotes from top UAE insurers." },
                        { number: 3, title: "Selection & Tailoring", description: "Choose the plan that best fits and customize add-ons if needed." },
                        { number: 4, title: "Documentation", description: "We handle the submission of all required documents to the insurer." },
                        { number: 5, title: "Policy Issuance", description: "Final approval and delivery of your insurance cards." }
                    ]
                },
                {
                    id: 'benefits',
                    label: 'Benefits',
                    title: "Why get insurance through us?",
                    content: [
                        "Access to a wide network of providers",
                        "Competitive premiums through our partnerships",
                        "Dedicated support for claims and renewals",
                        "Compliance with DHCR and local health authorities"
                    ]
                },
                {
                    id: 'documents',
                    label: 'Required Documents',
                    title: "Commonly required documents:",
                    content: [
                        "Emirates ID copy",
                        "Passport & Visa copy",
                        "Current medical insurance details (if any)",
                        "Establishment card (for corporate plans)",
                        "Trade License (for corporate plans)"
                    ]
                }
            ]
        },
        whyChoose: {
            titleHighlight: "Why Partner",
            titleText: "With Us for Medical Insurance?",
            descriptions: [
                "Comprehensive Coverage: We work with leading insurers to find plans that offer the best protection for you and your employees.",
                "Hassle-Free Processing: From application to policy issuance, we handle all the paperwork for a smooth experience.",
                "Ongoing Support: Our team remains available to assist with renewals, claims, and any policy-related queries."
            ]
        },
        faqs: {
            title: "Medical Insurance UAE",
            items: [
                { question: "Is medical insurance mandatory in UAE?", answer: "Yes, it is mandatory for all residents in Dubai and Abu Dhabi." },
                { question: "Can I add family members to my corporate plan?", answer: "Yes, most insurers allow dependent coverage as part of corporate policies." }
            ]
        }
    },
    "trademark-registration": {
        title: "Trademark Registration",
        bannerTitle: "Trademark Registration",
        bannerDescription: "Protect your brand and intellectual property in the UAE market.",
        intro: {
            title: {
                start: "Complete",
                highlight: "Brand & Logo",
                highlight2: "Trademark Filing",
                end: "Services"
            },
            paragraphs: [
                "Your brand is one of your most valuable assets. Trademark registration in the UAE ensures that your business identity, logo, and slogans are legally protected from unauthorized use and infringement.",
                "We manage the entire lifecycle of trademark registration, from preliminary searches to final publication in the Ministry of Economy's trademark journal."
            ],
            image: "/assets/images/about/about.webp"
        },
        process: {
            tabs: [
                {
                    id: 'process',
                    label: 'Filing Process',
                    content: [
                        { number: 1, title: "Trademark Search", description: "Verification to ensure no similar marks exist in the UAE registry." },
                        { number: 2, title: "Application Filing", description: "Drafting and submitting the application to the Ministry of Economy." },
                        { number: 3, title: "Examination", description: "The Ministry reviews the mark for compliance and originality." },
                        { number: 4, title: "Publication", description: "Successful marks are published in the Official Journal for opposition." },
                        { number: 5, title: "Registration", description: "Final certificate issuance upon completion of the mandatory wait period." }
                    ]
                },
                {
                    id: 'benefits',
                    label: 'Benefits',
                    title: "Protecting your mark provides:",
                    content: [
                        "Exclusive rights to use the mark in the UAE",
                        "Legal grounds to sue against infringement",
                        "Asset value for franchising or sale",
                        "Public notice of ownership"
                    ]
                },
                {
                    id: 'documents',
                    label: 'Required Documents',
                    title: "To start registration, you need:",
                    content: [
                        "Power of Attorney (notarized/legalized)",
                        "Copy of the mark (JPG/PDF)",
                        "List of goods/services to be covered",
                        "Trade License copy",
                        "Priority document (if claiming priority)"
                    ]
                }
            ]
        },
        whyChoose: {
            titleHighlight: "Why Secure",
            titleText: "Your Trademark with Us?",
            descriptions: [
                "Brand Protection: Secure your unique identity and prevent unauthorized use of your brand assets.",
                "Legal Expertise: Our specialists ensure your application meets all UAE Ministry of Economy requirements.",
                "Efficient Filing: We manage the entire registration process, providing regular updates from filing to publication."
            ]
        },
        faqs: {
            title: "Trademark & Intellectual Property",
            items: [
                { question: "How long is a trademark valid in the UAE?", answer: "A trademark registration is valid for 10 years and is renewable indefinitely." },
                { question: "Can I register a trademark globally through you?", answer: "We specialize in UAE registration but can assist with Madrid Protocol filings for international coverage." }
            ]
        }
    },
    "branding-design": {
        title: "Branding and Design Services",
        bannerTitle: "Branding and Design Services",
        bannerDescription: "Elevate your brand with premium design and creative strategy.",
        intro: {
            title: {
                start: "Dynamic",
                highlight: "Creative Branding",
                highlight2: "& Visual Design",
                end: "Solutions"
            },
            paragraphs: [
                "Modern branding is more than just a logo; it's the emotional connection your customers have with your business. We craft visual identities that bridge that gap and tell your story effectively.",
                "From color palettes to typography and marketing collateral, our design team ensures your brand projects professionalism and innovation at every touchpoint."
            ],
            image: "/assets/images/about/about.webp"
        },
        process: {
            tabs: [
                {
                    id: 'process',
                    label: 'Creative Phase',
                    content: [
                        { number: 1, title: "Discovery & Strategy", description: "Understanding your vision, target audience, and competition." },
                        { number: 2, title: "Moodboard Development", description: "Defining the visual direction and aesthetic tone." },
                        { number: 3, title: "Concept Creation", description: "Presenting multiple logo and design directions." },
                        { number: 4, title: "Refinement", description: "Polishing the chosen concept based on your feedback." },
                        { number: 5, title: "Brand Assets Delivery", description: "Exporting all files and creating brand guidelines." }
                    ]
                },
                {
                    id: 'benefits',
                    label: 'Benefits',
                    title: "Our branding services deliver:",
                    content: [
                        "Consistent visual identity across all platforms",
                        "Memorable logo and brand messaging",
                        "Improved customer trust and perception",
                        "High-quality print and digital assets"
                    ]
                },
                {
                    id: 'documents',
                    label: 'Our Services',
                    title: "What we offer:",
                    content: [
                        "Logo Design & Iconography",
                        "Corporate ID (Business Cards, Letterheads)",
                        "Social Media Kit",
                        "Brand Style Guide",
                        "Packaging & Print Design"
                    ]
                }
            ]
        },
        whyChoose: {
            titleHighlight: "Why Choose",
            titleText: "Our Branding & Design Expertise?",
            descriptions: [
                "Tailored Creativity: We craft designs that resonate with your target audience and reflect your business values.",
                "Full-Service Agency: From foundational logo design to comprehensive brand guidelines and marketing assets.",
                "Premium Quality: Our focus is on delivering high-end visual identities that set your brand apart in a competitive market."
            ]
        },
        faqs: {
            title: "Design & Brand Identity",
            items: [
                { question: "How long does a branding project take?", answer: "Typically 2 to 4 weeks depending on the complexity and revisions." },
                { question: "Do I get full ownership of the designs?", answer: "Yes, once final payment is made, all rights to the final designs belong to you." }
            ]
        }
    },
    "digital-marketing": {
        title: "Digital Marketing Services",
        bannerTitle: "Digital Marketing Services",
        bannerDescription: "Grow your online presence and reach your target audience effectively.",
        intro: {
            title: {
                start: "Strategic",
                highlight: "Digital Marketing",
                highlight2: "& Growth",
                end: "Strategies"
            },
            paragraphs: [
                "In today's digital landscape, being 'online' isn't enough. You need to be visible. Our data-driven marketing strategies are designed to put your brand in front of the right eyes at the right time.",
                "We combine SEO, PPC, and social media management into a cohesive engine that drives traffic, engagement, and most importantly, conversions."
            ],
            image: "/assets/images/about/about.webp"
        },
        process: {
            tabs: [
                {
                    id: 'process',
                    label: 'Campaign Flow',
                    content: [
                        { number: 1, title: "Audit & Analysis", description: "Reviewing your current digital footprint and competitor landscape." },
                        { number: 2, title: "Channel Selection", description: "Identifying where your customers are most active." },
                        { number: 3, title: "Content Strategy", description: "Creating compelling ads, posts, and search-optimized copy." },
                        { number: 4, title: "Launch & Monitoring", description: "Pushing campaigns live and tracking performance in real-time." },
                        { number: 5, title: "Optimization", description: "A/B testing and refining to maximize your ROI." }
                    ]
                },
                {
                    id: 'benefits',
                    label: 'Benefits',
                    title: "What we bring to your business:",
                    content: [
                        "Increased organic traffic through SEO",
                        "Higher conversion rates for paid ads",
                        "Engaged social media community",
                        "Clear attribution and transparent ROI"
                    ]
                },
                {
                    id: 'documents',
                    label: 'Our Toolkit',
                    title: "Techniques we use:",
                    content: [
                        "Search Engine Optimization (SEO)",
                        "Pay-Per-Click (PPC/Google Ads)",
                        "Social Media Marketing (SMM)",
                        "Email Marketing Automations",
                        "Performance Analytics"
                    ]
                }
            ]
        },
        whyChoose: {
            titleHighlight: "Why Grow",
            titleText: "Your Business with Our Digital Marketing?",
            descriptions: [
                "Strategic Approach: We develop data-driven campaigns focused on achieving your specific ROI and growth goals.",
                "Multi-Channel Expertise: Reach customers where they are with expert SEO, social media, and paid advertising strategies.",
                "Transparent Reporting: Stay informed with regular updates and detailed analytics on your campaign performance."
            ]
        },
        faqs: {
            title: "Performance & Social Marketing",
            items: [
                { question: "How much should I spend on ads?", answer: "Budgeting depends on your industry and goals; we help you set a target based on desired ROI." },
                { question: "When will I see results from SEO?", answer: "SEO is a long-term play, typically showing significant growth in 3 to 6 months." }
            ]
        }
    },
    "web-development": {
        title: "Web Design & Development",
        bannerTitle: "Web Design & Development",
        bannerDescription: "High-performance websites and custom web applications.",
        intro: {
            title: {
                start: "High Performance",
                highlight: "Web Development",
                highlight2: "& CMS",
                end: "Solutions"
            },
            paragraphs: [
                "Your website is your storefront to the world. We build platforms that are fast, secure, and intuitive, ensuring a friction-less experience for your users regardless of their device.",
                "Using modern stacks like Next.js and high-performance hosting, we create web experiences that don't just look good—they perform at the highest level."
            ],
            image: "/assets/images/about/about.webp"
        },
        process: {
            tabs: [
                {
                    id: 'process',
                    label: 'Dev Cycle',
                    content: [
                        { number: 1, title: "Architecture", description: "Mapping out user flows and technical requirements." },
                        { number: 2, title: "UI/UX Design", description: "Creating high-fidelity mockups of your site's appearance." },
                        { number: 3, title: "Frontend Build", description: "Bringing the design to life with clean, efficient code." },
                        { number: 4, title: "Backend & CMS", description: "Integrating content management systems for easy updates." },
                        { number: 5, title: "Testing & Launch", description: "Vigorous debugging and performance optimization before going live." }
                    ]
                },
                {
                    id: 'benefits',
                    label: 'Benefits',
                    title: "Why our websites win:",
                    content: [
                        "Blazing fast load speeds (90+ Lighthouse scores)",
                        "Mobile-first responsive architecture",
                        "SEO-ready code structures",
                        "Scalable technology stacks"
                    ]
                },
                {
                    id: 'documents',
                    label: 'Tech Stack',
                    title: "What we use:",
                    content: [
                        "Next.js / React.js",
                        "Node.js Backend",
                        "Tailwind CSS",
                        "Headless CMS (Sanity/Strapi)",
                        "Cloud Hosting (Vercel/AWS)"
                    ]
                }
            ]
        },
        whyChoose: {
            titleHighlight: "Why Build",
            titleText: "Your Website with Our Team?",
            descriptions: [
                "Cutting-Edge Technology: We use the latest frameworks like Next.js to build fast, secure, and scalable websites.",
                "Responsive Design: Your site will look stunning and perform perfectly on all devices, from desktops to smartphones.",
                "User-Centric focus: We prioritize user experience (UX) to ensure your website effectively converts visitors into customers."
            ]
        },
        faqs: {
            title: "Web Tech & Maintenance",
            items: [
                { question: "Is the website mobile friendly?", answer: "Yes, every site we build is 100% responsive for all screen sizes." },
                { question: "Do you offer web maintenance?", answer: "Yes, we provide monthly maintenance plans for security updates and performance tweaks." }
            ]
        }
    }
};

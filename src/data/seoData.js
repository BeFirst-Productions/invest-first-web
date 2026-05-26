import { governmentApprovalsData } from '@/data/GovernmentApprovalsData';
import { proServicesData } from '@/data/ProServicesData';

export const defaultSeoData = {
  title: 'InvestFirst Business Services | Company Formation UAE',
  description: 'InvestFirst provides expert company formation and business services. Establish your business in the UAE with confidence.',
  keywords: 'business setup dubai, company formation uae, invest first, dubai visas, trade license uae',
  alternates: {
    canonical: 'https://investfirst.ae',
  },
  openGraph: {
    title: 'InvestFirst Business Services',
    description: 'Expert company formation and business services in the UAE.',
    url: 'https://investfirst.ae',
    siteName: 'InvestFirst',
    images: [
      {
        url: '/images/og-home.jpg',
        width: 1200,
        height: 630,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'InvestFirst Business Services',
    description: 'Expert company formation and business services in the UAE.',
    images: ['/images/og-home.jpg'],
  },
};

export const seoData = {
  '/': {
    title: 'InvestFirst Business Services | Company Formation UAE',
    description: 'InvestFirst provides expert company formation and business services. Establish your business in the UAE with confidence.',
    alternates: {
      canonical: 'https://investfirst.ae',
    },
    openGraph: {
      title: 'InvestFirst Business Services',
      description: 'Expert company formation and business services in the UAE.',
      url: 'https://investfirst.ae',
      siteName: 'InvestFirst',
      images: [
        {
          url: '/images/og-home.jpg',
          width: 1200,
          height: 630,
        },
      ],
      type: 'website',
    }
  },
  '/about-us': {
    title: 'About Us | Invest First Business Setup in UAE & Dubai Company Formation',
    description: 'Learn about Invest First, a trusted UAE business setup in uae We specialize in company formation, and complete business setup solutions in Dubai.',
    keywords: 'business setup in UAE, business setup in Dubai, company formation UAE, UAE company formation, Dubai company registration, Dubai business setup consultancy, UAE business consultants, trade license in Dubai, UAE trade license, mainland company formation Dubai, free zone company setup UAE, PRO services UAE, visa services UAE, start business in Dubai, company registration UAE, business incorporation Dubai, PRO Services in Dubai',
    alternates: {
      canonical: 'https://investfirst.ae/about-us',
    },
    openGraph: {
      title: 'About Us | Invest First Business Setup in UAE & Dubai Company Formation',
      description: 'Learn about Invest First, a trusted UAE business setup in uae We specialize in company formation, and complete business setup solutions in Dubai.',
      url: 'https://investfirst.ae/about-us',
      type: 'website',
    },
  },
  '/why-uae': {
    title: "Why Choose UAE for Business Setup | Invest First Dubai",
    description: "Discover why the UAE is one of the best destinations for business setup, offering tax benefits, 100% foreign ownership, global market access, and investor-friendly policies.",
    keywords: "why invest in UAE, business setup UAE, company formation Dubai, UAE business benefits, start business in Dubai, UAE free zone setup, mainland company UAE, Dubai investment opportunities, entrepreneur visa UAE, Invest First UAE",
    alternates: {
        canonical: "https://investfirst.ae/why-uae",
    },
    openGraph: {
        title: "Why Choose UAE for Business Setup | Invest First Dubai",
        description: "Discover why the UAE is one of the best destinations for business setup, offering tax benefits, 100% foreign ownership, global market access, and investor-friendly policies.",
        url: "https://investfirst.ae/why-uae",
        type: "website",
    },
  },
  '/founders': {
    title: "Founders | Leadership Behind Invest First Business Setup UAE",
    description: "Meet the founders of Invest First, the experts behind trusted business setup and company formation services in Dubai and across the UAE.",
    keywords: "Invest First founders, business setup experts UAE, company formation consultants Dubai, UAE business consultants, leadership team Invest First, Dubai business setup company, entrepreneurs UAE, business advisors Dubai, company formation experts UAE",
    alternates: {
        canonical: "https://investfirst.ae/founders",
    },
    openGraph: {
        title: "Founders | Leadership Behind Invest First Business Setup UAE",
        description: "Meet the founders of Invest First, the experts behind trusted business setup and company formation services in Dubai and across the UAE.",
        url: "https://investfirst.ae/founders",
        type: "website",
    },
  },
  '/contact-us': {
    title: "Contact Us | Business Setup in Dubai",
    description: "Contact Invest First for expert business setup in UAE and Dubai. Get assistance with company formation, trade licenses, PRO services, and complete UAE business setup solutions.",
    keywords: "Invest First, business setup in UAE contact, business setup in Dubai, company formation UAE, UAE business consultants, Dubai business setup support, trade license UAE, PRO services UAE, free zone company setup UAE, mainland company formation Dubai, UAE company registration help, start business in Dubai contact, Dubai business setup services",
    alternates: {
        canonical: "https://investfirst.ae/contactus/",
    },
    openGraph: {
        title: "Contact Us | Business Setup in Dubai",
        description: "Contact Invest First for expert business setup in UAE and Dubai. Get assistance with company formation, trade licenses, PRO services, and complete UAE business setup solutions.",
        url: "https://investfirst.ae/contactus/",
        type: "website",
    },
  },
  '/services': {
    title: "Services | Invest First",
    description: "Explore our comprehensive business setup and visa services in the UAE.",
  },
  '/blogs': {
    title: "Business Setup Blogs in Dubai | UAE Company Formation",
    description: "Explore expert blogs on business setup in Dubai, UAE company formation, trade licences, free zone vs mainland setup, and startup guidance with Invest First.",
    keywords: "business setup in dubai, business setup in uae, company formation in uae, mainland company setup uae, freezone business setup, start a business uae",
    alternates: {
        canonical: "https://investfirst.ae/blogs",
    },
    openGraph: {
        title: "Business Setup Blogs in Dubai | UAE Company Formation",
        description: "Explore expert blogs on business setup in Dubai, UAE company formation, trade licences, free zone vs mainland setup, and startup guidance with Invest First.",
        url: "https://investfirst.ae/blogs",
        type: "website",
    },
  },
  '/cost-calculator': {
    title: "Cost Calculator | Invest First",
    description: "Calculate your business setup cost in UAE with Invest First.",
  },
  '/freezone': {
    title: "Freezone Company Formation UAE | Invest First",
    description: "Start your company in a UAE Freezone with Invest First. Explore options across Dubai, Abu Dhabi, Sharjah, and more for 100% ownership and tax benefits.",
  },
  '/offshore': {
    title: "Offshore Company Formation UAE | Invest First",
    description: "Incorporate your offshore company in the UAE with Invest First. Expert setup services for JAFZA, RAKICC, and Ajman for asset protection and tax efficiency.",
  },
  '/mainland': {
    title: "Mainland Company Formation Dubai | Invest First",
    description: "Start your mainland company in Dubai with Invest First. We offer complete business setup services, including 100% ownership and PRO support.",
  },
  '/services/government-approvals': {
    title: governmentApprovalsData.seo.title,
    description: governmentApprovalsData.seo.description,
    keywords: governmentApprovalsData.seo.keywords,
  },
  '/services/pro-services': {
    title: proServicesData.seo.title,
    description: proServicesData.seo.description,
    keywords: proServicesData.seo.keywords,
    alternates: {
        canonical: proServicesData.seo.canonical,
    },
    openGraph: {
        title: proServicesData.seo.title,
        description: proServicesData.seo.description,
        images: [
            {
                url: proServicesData.seo.image,
                width: 1200,
                height: 630,
                alt: proServicesData.seo.title,
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: proServicesData.seo.title,
        description: proServicesData.seo.description,
        images: [proServicesData.seo.image],
    },
  }
};

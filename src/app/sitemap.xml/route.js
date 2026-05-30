import { blogPosts } from '@/data/blogData';

export const dynamic = 'force-dynamic';

const STATIC_PATHS = [
  '/',
  '/about-us',
  '/why-uae',
  '/founders',
  '/contact-us',
  '/cost-calculator',
  '/terms-conditions',
  '/privacy-policy',
  '/services',
  '/services/government-approvals',
  '/services/pro-services',
  '/investor-visa',
  '/mainland',
  '/mainland/dubai',
  '/mainland/abu-dhabi',
  '/dubai-freezone-company-formation',
  '/freezone/dubai',
  '/freezone/abu-dhabi',
  '/freezone/sharjah',
  '/freezone/ajman',
  '/freezone/umm-al-quwain',
  '/freezone/ras-al-khaimah',
  '/offshore',
  '/offshore/jafza-offshore',
  '/offshore/rakicc-offshore',
  '/offshore/ajman-offshore',
  '/freezone/dubai/meydan-freezone-setup-in-dubai',
  '/freezone/dubai/ifza-free-zone',
  '/freezone/dubai/dmcc-free-zone',
  '/freezone/dubai/jebel-ali-jafza',
  '/freezone/dubai/dda-free-zones',
  '/freezone/dubai/dubai-airport-dafza',
  '/freezone/dubai/difc',
  '/freezone/dubai/dubai-south',
  '/freezone/dubai/dubai-healthcare-city',
  '/freezone/abu-dhabi/masdar-city',
  '/freezone/abu-dhabi/abu-dhabi-airport-free-zone',
  '/freezone/sharjah/sharjah-media-city-shams',
  '/freezone/sharjah/sharjah-publishing-city-spcfz',
  '/freezone/sharjah/srtip-free-zone',
  '/freezone/sharjah/hamriyah-free-zone',
  '/services/pro-services/virtual-pro',
  '/services/pro-services/local-sponsorships',
  '/services/pro-services/license-renewals',
  '/services/pro-services/visa-renewals',
  '/services/pro-services/banking-assistance',
  '/services/pro-services/office-solutions',
  '/services/visa-services/investor-visa',
  '/services/visa-services/employment-visa',
  '/services/visa-services/dependent-visa',
  '/services/visa-services/golden-visa',
  '/services/visa-services/green-visa',
  '/services/visa-services/blue-visa',
  '/services/visa-services/remote-work-visa',
  '/services/visa-services/tourist-visit-visa',
  '/services/document-services/attestation-services',
  '/services/document-services/legal-translation',
  '/services/document-services/typing-services',
  '/services/license-services/professional-license',
  '/services/license-services/commercial-license',
  '/services/license-services/industrial-license',
  '/services/license-services/e-trader-license',
  '/services/license-services/tourism-travel-license',
  '/services/value-added-services/vat-corporate-tax',
  '/services/value-added-services/medical-insurance',
  '/services/value-added-services/trademark-registration',
  '/services/value-added-services/branding-design',
  '/services/value-added-services/digital-marketing',
  '/services/value-added-services/web-development',
  '/blogs'
];

export async function GET() {
  const domain = 'https://investfirst.ae';
  const currentDate = new Date().toISOString();

  // Create sitemap records for static pages
  const staticRecords = STATIC_PATHS.map((path) => `
    <url>
      <loc>${domain}${path === '/' ? '' : path}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>${path === '/' ? '1.0' : '0.7'}</priority>
    </url>
  `).join('');

  // Create sitemap records for dynamic blogs (loaded dynamically)
  const blogRecords = blogPosts.map((post) => `
    <url>
      <loc>${domain}/blogs/${post.slug}</loc>
      <lastmod>${currentDate}</lastmod>
      <changefreq>weekly</changefreq>
      <priority>0.8</priority>
    </url>
  `).join('');

  const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticRecords}
      ${blogRecords}
    </urlset>
  `.trim();

  return new Response(sitemapXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600, stale-while-revalidate=60'
    }
  });
}

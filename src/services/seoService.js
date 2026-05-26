import { seoData, defaultSeoData } from '@/data/seoData';

/**
 * Service to fetch SEO metadata for a given path.
 * 
 * NOTE: Currently this reads from local hardcoded data. 
 * When your admin API is ready, you can simply change this function 
 * to fetch from your API, e.g.:
 * 
 * const res = await fetch(`https://your-api.com/seo?path=${path}`);
 * return await res.json();
 * 
 * @param {string} path - The route path (e.g. '/' or '/about-us')
 * @returns {Promise<Object>} The SEO metadata object
 */
export async function getSeoMetadata(path) {
  // Simulate an async API call so that the transition to `fetch` later is seamless
  return new Promise((resolve) => {
    // Look up the specific path's SEO data
    const pageSeo = seoData[path];

    // If specific SEO is found, merge it with defaults (or return as-is)
    // If not found, fallback to the default global SEO configuration
    const finalSeo = pageSeo ? { ...defaultSeoData, ...pageSeo } : defaultSeoData;

    resolve(finalSeo);
  });
}

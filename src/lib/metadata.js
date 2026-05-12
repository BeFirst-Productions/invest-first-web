const defaults = {
  siteName: 'Your Brand',
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000',
  defaultImage: '/images/og-default.jpg',
};

export function buildMetadata({ title, description, slug = '', image }) {
  const url = `${defaults.siteUrl}/${slug}`;
  return {
    title: `${title} | ${defaults.siteName}`,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      siteName: defaults.siteName,
      images: [{ url: image || defaults.defaultImage, width: 1200, height: 630 }],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image || defaults.defaultImage],
    },
  };
}
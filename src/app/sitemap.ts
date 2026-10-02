import type { MetadataRoute } from 'next';
export default function sitemap(): MetadataRoute.Sitemap {
  const base = process.env.NEXT_PUBLIC_SITE_URL || 'https://m-travels.example';
  return ['', '/services', '/visa-check', '/about', '/contact', '/faq', '/privacy-policy', '/terms-and-conditions'].map(path => ({ url: `${base}${path}`, lastModified: new Date(), changeFrequency: 'monthly', priority: path === '' ? 1 : 0.7 }));
}

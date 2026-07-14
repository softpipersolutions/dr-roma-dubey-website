import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/site';
import { SERVICE_SLUGS } from '@/lib/services';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '/', priority: 1, freq: 'weekly' },
    { path: '/about', priority: 0.8, freq: 'monthly' },
    { path: '/services', priority: 0.9, freq: 'monthly' },
    { path: '/locations', priority: 0.7, freq: 'monthly' },
    { path: '/contact', priority: 0.7, freq: 'monthly' },
    { path: '/faq', priority: 0.6, freq: 'monthly' },
    { path: '/book', priority: 0.8, freq: 'monthly' },
  ];

  const servicePaths = SERVICE_SLUGS.map((slug) => ({
    path: `/services/${slug}`,
    priority: 0.8,
    freq: 'monthly' as const,
  }));

  return [...staticPaths, ...servicePaths].map((p) => ({
    url: absoluteUrl(p.path),
    lastModified: now,
    changeFrequency: p.freq,
    priority: p.priority,
  }));
}

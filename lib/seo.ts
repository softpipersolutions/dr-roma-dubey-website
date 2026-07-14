import type { Metadata } from 'next';
import { SITE, absoluteUrl } from './site';

const OG_IMAGE = { url: absoluteUrl('/opengraph-image'), width: 1200, height: 630, alt: `${SITE.name} — ${SITE.tagline}` };

interface PageMetaInput {
  title: string;
  description: string;
  /** Path starting with "/" — used for canonical + OG url */
  path: string;
  keywords?: string[];
  /** Set false for pages that shouldn't be indexed */
  index?: boolean;
}

/**
 * Build per-page Metadata with canonical URL, Open Graph and Twitter cards.
 * The OG image is generated dynamically by app/opengraph-image.tsx.
 */
export function pageMetadata({ title, description, path, keywords, index = true }: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  const fullTitle = path === '/' ? `${SITE.name} — ${SITE.tagline}` : `${title} · ${SITE.name}`;
  return {
    // Home bypasses the "%s · Dr. Roma Dubey" template to avoid doubling the name.
    title: path === '/' ? { absolute: fullTitle } : title,
    description,
    keywords,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true }
      : { index: false, follow: true },
    openGraph: {
      type: 'website',
      title: fullTitle,
      description,
      url,
      siteName: SITE.legalName,
      locale: 'en_IN',
      images: [OG_IMAGE],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url],
    },
  };
}

import { SITE, CLINICS, absoluteUrl, SITE_URL } from '@/lib/site';

function JsonLd({ data }: { data: unknown }) {
  return (
    <script
      type="application/ld+json"
      // JSON-LD is trusted, static, server-rendered structured data.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/** Site-wide Physician + MedicalClinic graph (rendered once in root layout). */
export function OrganizationJsonLd() {
  const clinics = CLINICS.map((c) => ({
    '@type': 'MedicalClinic',
    name: c.name,
    address: {
      '@type': 'PostalAddress',
      streetAddress: c.area,
      addressLocality: SITE.city,
      addressRegion: SITE.region,
      addressCountry: SITE.countryCode,
    },
    telephone: SITE.phoneDisplay,
    openingHours: 'Mo-Sa 10:00-18:00',
  }));

  const data = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Physician',
        '@id': `${SITE_URL}/#physician`,
        name: SITE.name,
        alternateName: `${SITE.name}, ${SITE.credentials}`,
        description: SITE.description,
        url: SITE_URL,
        telephone: SITE.phoneDisplay,
        medicalSpecialty: ['Gynecologic', 'Obstetric'],
        knowsAbout: ['PCOS', 'Pregnancy care', 'Fertility', 'Laparoscopic surgery', 'Cervical cancer screening'],
        areaServed: { '@type': 'City', name: SITE.city },
        address: {
          '@type': 'PostalAddress',
          streetAddress: CLINICS[0].area,
          addressLocality: SITE.city,
          addressRegion: SITE.region,
          addressCountry: SITE.countryCode,
        },
        location: clinics,
      },
      {
        '@type': 'WebSite',
        '@id': `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE.legalName,
        inLanguage: 'en-IN',
        publisher: { '@id': `${SITE_URL}/#physician` },
      },
    ],
  };
  return <JsonLd data={data} />;
}

export function BreadcrumbJsonLd({ items }: { items: { name: string; path: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: absoluteUrl(it.path),
    })),
  };
  return <JsonLd data={data} />;
}

export function ServiceJsonLd({ name, description, path }: { name: string; description: string; path: string }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'MedicalProcedure',
    name,
    description,
    url: absoluteUrl(path),
    provider: { '@id': `${SITE_URL}/#physician` },
    areaServed: { '@type': 'City', name: SITE.city },
  };
  return <JsonLd data={data} />;
}

export function FaqJsonLd({ items }: { items: { question: string; answer: string }[] }) {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: items.map((q) => ({
      '@type': 'Question',
      name: q.question,
      acceptedAnswer: { '@type': 'Answer', text: q.answer },
    })),
  };
  return <JsonLd data={data} />;
}

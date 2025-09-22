export interface SEOData {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  keywords?: string;
  structuredData?: any;
}

export function generateSEO(data: SEOData) {
  const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Kassiopée Formation";
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://kassiopee-formation.fr";
  
  return {
    title: `${data.title} | ${siteName}`,
    description: data.description,
    canonical: data.canonical || siteUrl,
    openGraph: {
      title: data.title,
      description: data.description,
      url: data.canonical || siteUrl,
      siteName,
      images: [
        {
          url: data.ogImage || `${siteUrl}/images/og-default.jpg`,
          width: 1200,
          height: 630,
          alt: data.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: data.title,
      description: data.description,
      images: [data.ogImage || `${siteUrl}/images/og-default.jpg`],
    },
    keywords: data.keywords,
    other: {
      'structured-data': JSON.stringify(data.structuredData),
    },
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Kassiopée Formation",
  "url": process.env.NEXT_PUBLIC_SITE_URL,
  "logo": `${process.env.NEXT_PUBLIC_SITE_URL}/images/kassiopee-logo.svg`,
  "description": "Organisme de formation professionnelle spécialisé dans les secteurs sanitaire, social et des services à la personne.",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": process.env.NEXT_PUBLIC_TELEPHONE,
    "contactType": "customer service",
    "email": process.env.NEXT_PUBLIC_EMAIL_SIEGE,
    "availableLanguage": "French"
  },
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR",
    "addressLocality": "Paris",
    "streetAddress": process.env.NEXT_PUBLIC_ADDRESS_SIEGE
  },
  "sameAs": [
    "https://www.linkedin.com/company/kassiopee-formation",
    "https://www.facebook.com/kassiopeeformation",
    "https://twitter.com/kassiopeeform"
  ]
};

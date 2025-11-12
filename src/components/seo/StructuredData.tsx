import React from 'react';

interface TrainingCourseProps {
  name: string;
  description: string;
  provider: string;
  duration: string;
  location: string;
  category: string;
  level: string;
  url: string;
  image: string;
  rncp?: string;
  price?: string;
}

export function TrainingCourseStructuredData({
  name,
  description,
  provider,
  duration,
  location,
  category,
  level,
  url,
  image,
  rncp,
  price
}: TrainingCourseProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Course",
    "name": name,
    "description": description,
    "provider": {
      "@type": "Organization",
      "name": provider,
      "url": "https://kassiopee-formation.com"
    },
    "courseMode": "classroom",
    "duration": duration,
    "location": {
      "@type": "Place",
      "name": location,
      "address": {
        "@type": "PostalAddress",
        "addressRegion": location
      }
    },
    "category": category,
    "level": level,
    "url": url,
    "image": image,
    "inLanguage": "fr-FR",
    "isAccessibleForFree": false,
    ...(rncp && {
      "identifier": {
        "@type": "PropertyValue",
        "name": "Code RNCP",
        "value": rncp
      }
    }),
    ...(price && {
      "offers": {
        "@type": "Offer",
        "price": price,
        "priceCurrency": "EUR"
      }
    })
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

interface FormationListProps {
  formations: Array<{
    id: string;
    title: string;
    description: string;
    duration: string;
    region: string;
    category: string;
    level: string;
    href: string;
    rncp?: string;
    isRNCP?: boolean;
  }>;
}

export function FormationListStructuredData({ formations }: FormationListProps) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Formations Professionnelles Kassiopée Formation",
    "description": "Liste des formations professionnelles proposées par Kassiopée Formation",
    "numberOfItems": formations.length,
    "itemListElement": formations.map((formation, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "Course",
        "name": formation.title,
        "description": formation.description,
        "provider": {
          "@type": "Organization",
          "name": "Kassiopée Formation"
        },
        "duration": formation.duration,
        "category": formation.category,
        "level": formation.level,
        "url": `https://kassiopee-formation.com${formation.href}`,
        ...(formation.rncp && {
          "identifier": {
            "@type": "PropertyValue",
            "name": "Code RNCP",
            "value": formation.rncp
          }
        })
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
}

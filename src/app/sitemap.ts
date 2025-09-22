import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://kassiopee-formation.fr';
  
  const routes = [
    // Pages principales
    '',
    '/formations',
    '/inscription',
    '/centres',
    '/contact',
    '/a-propos',
    '/nos-resultats',
    '/actualites',
    
    // Régions
    '/regions/ile-de-france',
    '/regions/paca-aura',
    '/regions/centre-val-de-loire',
    '/regions/hauts-de-france',
    
    // Formations principales
    '/formations/aide-soignant',
    '/formations/auxiliaire-puericultrice',
    '/formations/auxiliaire-vie-sociale',
    '/formations/accompagnant-educatif-social',
    '/formations/sanitaire-social',
    '/formations/services-personne',
    '/formations/savoirs-base',
    
    // Pages légales
    '/mentions-legales',
    '/cgu',
    '/confidentialite',
    '/plan-du-site',
    
    // Pages entreprises
    '/presse',
    '/partenaires',
    '/recrutement',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}

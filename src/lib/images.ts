// Configuration centralisée des images
// Remplacez les URLs Pexels par vos vraies images

export const images = {
  // Images hero (page d'accueil)
  hero: {
    main: '/images/hero/kassiopee-hero-main.jpg', // Image principale de la page d'accueil
    about: '/images/hero/kassiopee-about-hero.jpg', // Image pour la page à propos
    formations: '/images/hero/kassiopee-formations-hero.jpg', // Image pour la page formations
    contact: '/images/hero/kassiopee-contact-hero.jpg', // Image pour la page contact
  },

  // Images des formations
  formations: {
    aideSoignant: '/images/formations/aide-soignant.jpg',
    auxiliaireVie: '/images/formations/auxiliaire-vie-sociale.jpg',
    auxiliairePuericultrice: '/images/formations/auxiliaire-puericultrice.jpg',
    accompagnantEducatif: '/images/formations/accompagnant-educatif-social.jpg',
    agentServiceHospitalier: '/images/formations/agent-service-hospitalier.jpg',
    assistantVieFamilles: '/images/formations/assistant-vie-familles.jpg',
    savoirsBase: '/images/formations/savoirs-base-numerique.jpg',
    preparationConcours: '/images/formations/preparation-concours.jpg',
  },

  // Images de l'équipe
  team: {
    marieDubois: '/images/team/marie-dubois.jpg',
    pierreMartin: '/images/team/pierre-martin.jpg',
    sarahBenali: '/images/team/sarah-benali.jpg',
  },

  // Images des centres
  centres: {
    parisRepublique: '/images/centres/paris-republique.jpg',
    parisBastille: '/images/centres/paris-bastille.jpg',
    lyonPartDieu: '/images/centres/lyon-part-dieu.jpg',
    marseilleVieuxPort: '/images/centres/marseille-vieux-port.jpg',
    lilleCentre: '/images/centres/lille-centre.jpg',
    orleansCentre: '/images/centres/orleans-centre.jpg',
  },

  // Images des régions
  regions: {
    ileDeFrance: '/images/regions/ile-de-france.jpg',
    pacaAura: '/images/regions/paca-aura.jpg',
    centreValDeLoire: '/images/regions/centre-val-de-loire.jpg',
    hautsDeFrance: '/images/regions/hauts-de-france.jpg',
  },

  // Images OpenGraph et SEO
  og: {
    default: '/images/og/kassiopee-og-default.jpg', // 1200x630px
    formations: '/images/og/kassiopee-og-formations.jpg',
    contact: '/images/og/kassiopee-og-contact.jpg',
  },

  // Images de témoignages (optionnel - vous pouvez garder les images Pexels)
  testimonials: {
    marieDubois: 'https://images.pexels.com/photos/3912468/pexels-photo-3912468.jpeg',
    pierreMartin: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg',
    sarahBenali: 'https://images.pexels.com/photos/3912469/pexels-photo-3912469.jpeg',
  }
};

// Images de fallback (si vos images ne sont pas encore prêtes)
export const fallbackImages = {
  hero: 'https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg',
  formation: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg',
  team: 'https://images.pexels.com/photos/3912468/pexels-photo-3912468.jpeg',
  centre: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
  region: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
};

import HeroSection from "@/components/ads/HeroSection";
import StatsSection from "@/components/ads/StatsSection";
import FormationsSection from "@/components/ads/FormationsSection";
import BenefitsSection from "@/components/ads/BenefitsSection";
import CTASection from "@/components/ads/CTASection";
import Script from 'next/script';

export const metadata = {
  title: 'Formations RNCP Certifiantes | Kassiopée Formation - CPF Éligible',
  description: 'Transformez votre carrière avec nos formations RNCP certifiantes : Négociateur Technico-Commercial, Assistant RH, Développement Personnel. 95% de réussite, éligibles CPF. Formation professionnelle reconnue Qualiopi.',
  keywords: 'formation RNCP, formation CPF, négociateur technico-commercial, assistant RH, développement personnel, formation professionnelle, certification Qualiopi, formation certifiante',
  alternates: {
    canonical: 'https://kassiopee-formation.com/ads/details',
  },
  openGraph: {
    title: 'Formations RNCP Certifiantes | Kassiopée Formation',
    description: 'Formations professionnelles certifiantes RNCP avec 95% de réussite. Éligibles CPF. Spécialistes en commerce, RH et développement personnel.',
    type: 'website',
    url: 'https://kassiopee-formation.com/ads/details',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formations RNCP Certifiantes | Kassiopée Formation',
    description: 'Transformez votre carrière avec nos formations RNCP certifiantes. 95% de réussite, éligibles CPF.',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Kassiopée Formation",
  "description": "Organisme de formation professionnelle certifié Qualiopi spécialisé dans les formations RNCP",
  "url": "https://kassiopee-formation.com",
  "logo": "https://kassiopee-formation.com/logo.png",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "FR"
  },
  "sameAs": [
    "https://www.linkedin.com/company/kassiopee-formation"
  ]
};

const coursesSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "itemListElement": [
    {
      "@type": "Course",
      "name": "RNCP Négociateur Technico-Commercial",
      "description": "Formation certifiante niveau 5 pour maîtriser les techniques de vente et négociation commerciale",
      "provider": {
        "@type": "Organization",
        "name": "Kassiopée Formation"
      },
      "educationalLevel": "Niveau 5 (Bac+2)",
      "timeRequired": "P5D"
    },
    {
      "@type": "Course",
      "name": "RNCP Assistant RH",
      "description": "Formation certifiante pour devenir Assistant Ressources Humaines qualifié",
      "provider": {
        "@type": "Organization",
        "name": "Kassiopée Formation"
      },
      "educationalLevel": "Niveau 5 (Bac+2)"
    },
    {
      "@type": "Course",
      "name": "Booster sa Candidature",
      "description": "Formation en développement personnel pour optimiser votre recherche d'emploi et candidatures",
      "provider": {
        "@type": "Organization",
        "name": "Kassiopée Formation"
      }
    }
  ]
};

const AdsDetails = () => {
  return (
    <>
      <Script 
        id="organization-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema)
        }}
      />
      <Script 
        id="courses-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(coursesSchema)
        }}
      />
      
      <main className="min-h-screen bg-background">
        <HeroSection />
        <StatsSection />
        <FormationsSection />
        <BenefitsSection />
        <CTASection />
      </main>
    </>
  );
};

export default AdsDetails;

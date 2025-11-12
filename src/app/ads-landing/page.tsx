import HeroSection from "@/components/ads/landing/HeroSection";
import SocialProof from "@/components/ads/landing/SocialProof";
import ResultsSection from "@/components/ads/landing/ResultsSection";
import ProgramSection from "@/components/ads/landing/ProgramSection";
import PricingSection from "@/components/ads/landing/PricingSection";
import FundingSection from "@/components/ads/landing/FundingSection";
import FaqSection from "@/components/ads/landing/FaqSection";
import FinalCTA from "@/components/ads/landing/FinalCTA";
import MicroFooter from "@/components/ads/landing/MicroFooter";
import Script from 'next/script';

export const metadata = {
  title: 'Formation Marketing Digital & Réseaux Sociaux | Kassiopée Formation',
  description: 'Maîtrisez le marketing digital et les réseaux sociaux avec notre formation certifiante. Stratégie, création de contenu et publicité en ligne. Éligible CPF.',
  keywords: 'formation marketing digital, réseaux sociaux, formation community manager, publicité en ligne, formation certifiante, formation CPF, stratégie digitale, création de contenu',
  alternates: {
    canonical: 'https://kassiopee-formation.com/formation-certifiante',
  },
  openGraph: {
    title: 'Formation Professionnelle Certifiante | Kassiopée Formation',
    description: 'Développez vos compétences avec notre formation certifiante. 95% de réussite, éligible CPF. Inscrivez-vous dès maintenant !',
    type: 'website',
    url: 'https://kassiopee-formation.com/formation-certifiante',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Formation Certifiante - Développez vos compétences',
    description: 'Formation professionnelle avec certification reconnue. 95% de réussite. Financement CPF possible.',
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  "name": "Kassiopée Formation",
  "description": "Organisme de formation professionnelle certifié Qualiopi spécialisé dans les formations certifiantes et qualifiantes",
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

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "Course",
  "name": "Formation Professionnelle Certifiante",
  "description": "Formation complète avec certification reconnue par l'État pour développer des compétences professionnelles avancées",
  "provider": {
    "@type": "Organization",
    "name": "Kassiopée Formation"
  },
  "educationalCredentialAwarded": "Certification professionnelle",
  "timeRequired": "P3M",
  "hasCourseInstance": {
    "@type": "CourseInstance",
    "courseMode": ["online", "classroom"],
    "inLanguage": "fr-FR"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "EUR",
    "price": "2490",
    "url": "https://kassiopee-formation.com/formation-certifiante"
  }
};

const FormationPage = () => {
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
        id="course-schema" 
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(courseSchema)
        }}
      />
      
      <main className="bg-white">
        {/* Hero avec formulaire */}
        <HeroSection />
        
        {/* Preuves sociales */}
        <SocialProof />
        
        {/* Résultats en 3 jours */}
        <ResultsSection />
        
        {/* Programme condensé */}
        <ProgramSection />
        
        {/* Sessions & prix */}
        <PricingSection />
        
        {/* Financement */}
        <FundingSection />
        
        {/* FAQ */}
        <FaqSection />
        
        {/* CTA final */}
        <FinalCTA />
        
        {/* Micro-footer */}
        <MicroFooter />
      </main>
    </>
  );
};

export default FormationPage;

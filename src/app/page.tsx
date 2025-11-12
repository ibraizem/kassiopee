import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, Award, CheckCircle } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import FormationCard from '@/components/ui/FormationCard';
import FAQSection from '@/components/ui/FAQSection';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Accueil - Formations Professionnelles RNCP, CV, Anglais, Marketing Digital",
  description: "Kassiopée Formation : organisme de formation professionnelle spécialisé dans les formations RNCP (Négociateur Technico-Commercial, Assistant RH), développement personnel, anglais professionnel et marketing digital. Formations certifiantes éligibles CPF.",
  keywords: "formation professionnelle, RNCP, négociateur technico-commercial, assistant RH, CV, anglais professionnel, marketing digital, CPF, certification",
});

const featuredFormations = [
  {
    id: 'formation-ntc',
    title: 'RNCP NTC — Négociateur Technico-Commercial',
    description: 'Maîtriser les compétences opérationnelles de prospection, découverte client, argumentation, traitement des objections, closing et fidélisation. Préparer au Titre professionnel « Négociateur Technico-Commercial », niveau 5.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
    duration: '5 jours (35h)',
    region: 'Région parisienne',
    category: 'RNCP Commercial',
    level: 'Conseillers commerciaux',
    nextSession: 'Sessions mensuelles',
    href: '/formations/formation-ntc',
    rncp: '39063',
    isRNCP: true
  },
  {
    id: 'formation-arh',
    title: 'RNCP ARH — Assistant Ressources Humaines',
    description: 'Acquérir les compétences nécessaires à l\'administration du personnel, au recrutement, à l\'intégration et au suivi des compétences. Préparer au Titre professionnel « Assistant Ressources Humaines ».',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    duration: '5 jours (35h)',
    region: 'Région parisienne',
    category: 'RNCP RH',
    level: 'Assistant(e) RH',
    nextSession: 'Sessions mensuelles',
    href: '/formations/formation-arh',
    rncp: '35030',
    isRNCP: true
  },
  {
    id: 'formation-cv',
    title: 'Booster sa Candidature — Un CV Qui Ouvre des Portes',
    description: 'Permettre de rédiger un CV clair, professionnel et personnalisé, capable d\'attirer l\'attention d\'un recruteur et d\'augmenter le taux de convocation en entretien.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    duration: '1 journée (6-7h)',
    region: 'Région parisienne',
    category: 'Développement Personnel',
    level: 'Tout public',
    nextSession: 'Sessions hebdomadaires',
    href: '/formations/formation-cv',
    isRNCP: false
  },
  {
    id: 'formation-lettre-motivation',
    title: 'Rédiger une Lettre de Motivation Efficace',
    description: 'Apprendre à rédiger une lettre de motivation percutante et personnalisée qui donne envie aux recruteurs de vous rencontrer. Maîtriser la structure gagnante.',
    image: 'https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg',
    duration: '1 journée (6-7h)',
    region: 'Région parisienne',
    category: 'Développement Personnel',
    level: 'Tout public',
    nextSession: 'Sessions hebdomadaires',
    href: '/formations/formation-lettre-motivation',
    isRNCP: false
  },
  {
    id: 'formation-entretien-embauche',
    title: 'Réussir son Entretien d\'Embauche',
    description: 'Apprendre à convaincre en face-à-face et réussir ses entretiens d\'embauche. Gérer son stress, maîtriser sa présentation et répondre avec assurance.',
    image: 'https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg',
    duration: '1 journée (6-7h)',
    region: 'Région parisienne',
    category: 'Développement Personnel',
    level: 'Tout public',
    nextSession: 'Sessions hebdomadaires',
    href: '/formations/formation-entretien-embauche',
    isRNCP: false
  }
];

const stats = [
  { number: '500+', label: 'Diplômés' },
  { number: '7', label: 'Formations' },
  { number: '95%', label: 'Taux de réussite' },
  { number: '10+', label: 'Ans d\'expertise' },
];

const domainesFormation = [
  {
    categorie: 'RNCP Commercial',
    competences: ['Prospection', 'Argumentation', 'Closing', 'CRM'],
    certifications: ['RNCP 39063 - Négociateur Technico-Commercial'],
    niveau: 'Conseillers commerciaux',
    duree: '5 jours',
    icon: '💼'
  },
  {
    categorie: 'RNCP Ressources Humaines',
    competences: ['Administration personnel', 'Recrutement', 'GPEC', 'Droit social'],
    certifications: ['RNCP 35030 - Assistant Ressources Humaines'],
    niveau: 'Assistant(e) RH',
    duree: '5 jours',
    icon: '👥'
  },
  {
    categorie: 'Développement Personnel',
    competences: ['Rédaction CV', 'Mise en page', 'Stratégie candidature', 'Personal branding'],
    certifications: ['Certification développement personnel'],
    niveau: 'Tout public',
    duree: '1 jour',
    icon: '📝'
  },
  {
    categorie: 'Langues Professionnelles',
    competences: ['Emails professionnels', 'Téléphone', 'Présentations', 'Vocabulaire métier'],
    certifications: ['Certification anglais professionnel'],
    niveau: 'Salariés, demandeurs d\'emploi',
    duree: '2 jours',
    icon: '🌍'
  },
  {
    categorie: 'Marketing Digital',
    competences: ['Stratégie social media', 'Contenu engageant', 'Campagnes pub', 'Analytics'],
    certifications: ['Certification marketing digital'],
    niveau: 'Entrepreneurs, responsables marketing',
    duree: '3 jours',
    icon: '📱'
  }
];

const partenaires = [
  {
    nom: 'France Compétences',
    type: 'Organisme Certificateur RNCP',
    logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg'
  },
  {
    nom: 'Mon Compte Formation',
    type: 'Plateforme CPF Officielle',
    logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg'
  },
  {
    nom: 'QUALIOPI',
    type: 'Certification Qualité',
    logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg'
  },
  {
    nom: 'Pôle Emploi',
    type: 'Partenaire Formation',
    logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg'
  }
];

const testimonials = [
  {
    name: 'Marie-Claire Dubois',
    role: 'Négociatrice Technico-Commerciale',
    content: 'La formation RNCP NTC m\'a donné toutes les clés pour réussir dans la vente. J\'ai obtenu ma certification et décroché un poste en CDI immédiatement après.',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg'
  },
  {
    name: 'Thomas Martin',
    role: 'Assistant RH',
    content: 'Excellente formation RNCP ARH ! Les compétences en recrutement et administration du personnel sont parfaitement maîtrisées. Je recommande vivement.',
    image: 'https://images.pexels.com/photos/3912468/pexels-photo-3912468.jpeg'
  },
  {
    name: 'Sophie Moreau',
    role: 'Entrepreneur',
    content: 'La formation marketing digital m\'a permis de développer ma présence sur les réseaux sociaux et d\'augmenter mon chiffre d\'affaires de 40% en 6 mois.',
    image: 'https://images.pexels.com/photos/3912469/pexels-photo-3912469.jpeg'
  }
];

const certifications = [
  'QUALIOPI',
  'France Compétences RNCP',
  'Datadock',
  'OPCO Entreprises',
  'CPF Éligible'
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Transformez votre avenir professionnel"
        subtitle="FORMATIONS RNCP & DÉVELOPPEMENT PERSONNEL"
        description="Spécialiste des formations professionnelles certifiantes : RNCP Négociateur Technico-Commercial, Assistant RH, développement personnel, anglais professionnel et marketing digital. Formations éligibles CPF."
        primaryCTA={{
          text: "Découvrir nos formations",
          href: "/formations"
        }}
        secondaryCTA={{
          text: "Nous contacter",
          href: "/contact"
        }}
        backgroundImage="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
      />

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-kassiopee-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Formations */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos formations <span className="text-kassiopee-navy">phares</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos formations professionnelles certifiantes : RNCP, développement personnel, 
              langues et marketing digital. Conçues pour répondre aux besoins du marché de l'emploi et éligibles CPF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-12">
            {featuredFormations.map((formation) => (
              <FormationCard key={formation.id} {...formation} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/formations"
              className="inline-flex items-center bg-kassiopee-navy text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors text-sm sm:text-base"
            >
              Voir toutes nos formations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Domaines de Formation Section */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos domaines de <span className="text-kassiopee-navy">formation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développez vos compétences professionnelles avec nos formations certifiantes 
              dans les domaines les plus recherchés du marché de l'emploi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
            {domainesFormation.map((domaine, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{domaine.icon}</span>
                  <div>
                    <h3 className="text-lg sm:text-xl font-bold text-kassiopee-navy">{domaine.categorie}</h3>
                    <p className="text-sm text-gray-600">{domaine.niveau} • {domaine.duree}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🛠️ Compétences</h4>
                  <div className="flex flex-wrap gap-1">
                    {domaine.competences.map((competence, idx) => (
                      <span key={idx} className="bg-kassiopee-navy text-white px-2 py-1 rounded text-xs">
                        {competence}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🏆 Certifications</h4>
                  <div className="space-y-1">
                    {domaine.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-kassiopee-gold mr-2" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/formations"
              className="inline-flex items-center bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors"
            >
              Découvrir toutes nos formations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partenaires Section */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos <span className="text-kassiopee-navy">Partenaires & Certifications</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec les organismes officiels pour vous offrir des formations 
              certifiantes reconnues par l'État et éligibles au financement CPF.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            {partenaires.map((partenaire, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-16 w-16 mx-auto mb-4">
                  <div className="bg-kassiopee-navy text-white rounded-lg h-full w-full flex items-center justify-center font-bold text-lg">
                    {partenaire.nom.charAt(0)}
                  </div>
                </div>
                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1">{partenaire.nom}</h4>
                <p className="text-xs text-gray-600">{partenaire.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir <span className="text-kassiopee-gold">Kassiopée Formation</span> ?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Plus de 15 ans d'expertise dans la formation professionnelle 
              pour vous garantir des compétences alignées avec le marché de l'emploi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">Certifications reconnues</h3>
              <p className="text-gray-200">
                QUALIOPI, France Compétences RNCP, Datadock : nos formations sont certifiées et reconnues par les professionnels.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">Accompagnement personnalisé</h3>
              <p className="text-gray-200">
                Chaque apprenant bénéficie d'un suivi individualisé par nos formateurs experts en formations professionnelles et développement personnel.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-bold mb-4">Taux de réussite élevé</h3>
              <p className="text-gray-200">
                95% de taux de réussite aux certifications grâce à notre pédagogie pratique et nos études de cas réels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils témoignent de leur <span className="text-kassiopee-navy">réussite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos apprenants qui ont réussi leur reconversion professionnelle et obtenu leurs certifications RNCP.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos certifications et <span className="text-kassiopee-navy">agréments</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kassiopée Formation est certifié par les principaux organismes de qualité 
              et reconnu par France Compétences pour ses formations RNCP et professionnelles.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Questions Fréquentes"
        subtitle="Trouvez rapidement les réponses à vos questions sur nos formations RNCP et le financement CPF"
        showCategories={true}
        maxItems={6}
        className="bg-gray-50"
      />

      {/* CTA Section */}
      <section className="py-16 sm:py-20 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-6">
            Prêt à transformer votre avenir professionnel ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez les centaines de professionnels qui ont fait confiance à Kassiopée Formation 
            pour développer leurs compétences et obtenir leurs certifications RNCP.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscription"
              className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center"
            >
              M'INSCRIRE MAINTENANT
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-kassiopee-navy hover:text-white transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

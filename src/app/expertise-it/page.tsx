import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Code, 
  Database, 
  Cloud, 
  Shield, 
  Zap, 
  Users, 
  Award, 
  CheckCircle,
  ArrowRight,
  Target,
  Lightbulb,
  TrendingUp
} from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Notre Expertise Formation - Kassiopée Formation',
  description: 'Découvrez l\'expertise de Kassiopée Formation : formations RNCP, développement personnel, anglais professionnel, marketing digital et accompagnement personnalisé.',
  keywords: 'expertise formation, RNCP, développement personnel, anglais professionnel, marketing digital, formation professionnelle, CPF',
  ogImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
});

const expertises = [
  {
    icon: Award,
    title: 'Formations RNCP Certifiantes',
    description: 'Expertise dans les formations RNCP pour obtenir des certifications reconnues par l\'État.',
    competences: [
      'RNCP Négociateur Technico-Commercial',
      'RNCP Assistant Ressources Humaines',
      'Accompagnement certification',
      'Suivi post-formation'
    ]
  },
  {
    icon: Users,
    title: 'Développement Personnel',
    description: 'Accompagnement personnalisé pour développer vos compétences professionnelles et personnelles.',
    competences: [
      'Optimisation CV et candidature',
      'Techniques de recherche d\'emploi',
      'Confiance en soi',
      'Communication professionnelle'
    ]
  },
  {
    icon: TrendingUp,
    title: 'Marketing Digital',
    description: 'Maîtrise des outils et stratégies marketing digital pour développer votre activité.',
    competences: [
      'Stratégie réseaux sociaux',
      'Création de contenu engageant',
      'Campagnes publicitaires',
      'Analyse de performance'
    ]
  },
  {
    icon: Target,
    title: 'Techniques Commerciales',
    description: 'Développement des compétences commerciales pour exceller dans la vente et la négociation.',
    competences: [
      'Prospection efficace',
      'Techniques d\'argumentation',
      'Gestion des objections',
      'Closing et fidélisation'
    ]
  },
  {
    icon: Lightbulb,
    title: 'Langues Professionnelles',
    description: 'Formation en langues étrangères adaptées au contexte professionnel.',
    competences: [
      'Anglais des affaires',
      'Communication écrite professionnelle',
      'Présentations orales',
      'Vocabulaire métier spécialisé'
    ]
  },
  {
    icon: CheckCircle,
    title: 'Accompagnement RH',
    description: 'Expertise en gestion des ressources humaines pour optimiser la gestion du personnel.',
    competences: [
      'Administration du personnel',
      'Processus de recrutement',
      'Gestion des compétences',
      'Droit social et paie'
    ]
  }
];

const certifications = [
  {
    name: 'RNCP 39063 - Négociateur Technico-Commercial',
    description: 'Certification reconnue par l\'\u00c9tat pour les compétences commerciales',
    logo: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg'
  },
  {
    name: 'RNCP 35030 - Assistant Ressources Humaines',
    description: 'Titre professionnel pour l\'administration du personnel et RH',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
  },
  {
    name: 'Formations Éligibles CPF',
    description: 'Toutes nos formations sont finançables via le Compte Personnel de Formation',
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
  }
];

const stats = [
  { number: '500+', label: 'Diplômes délivrés' },
  { number: '5', label: 'Formations disponibles' },
  { number: '95%', label: 'Taux de réussite' },
  { number: '10+', label: 'Années d\'expertise' }
];

const methodologie = [
  {
    step: '01',
    title: 'Analyse des besoins',
    description: 'Diagnostic approfondi de vos enjeux et objectifs de formation'
  },
  {
    step: '02',
    title: 'Conception sur mesure',
    description: 'Création de parcours de formation adaptés à votre contexte'
  },
  {
    step: '03',
    title: 'Mise en œuvre',
    description: 'Déploiement des formations avec suivi personnalisé'
  },
  {
    step: '04',
    title: 'Évaluation & Suivi',
    description: 'Mesure des résultats et accompagnement post-formation'
  }
];

export default function ExpertiseITPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-kassiopee-navy to-kassiopee-lightblue text-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                Notre Expertise Formation
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                Kassiopée Formation s'appuie sur une expertise pédagogique approfondie et une 
                connaissance fine des enjeux professionnels pour vous accompagner dans votre développement de compétences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/formations"
                  className="bg-kassiopee-gold text-kassiopee-navy px-6 py-3 rounded-md font-semibold hover:bg-kassiopee-gold/90 transition-colors text-center"
                >
                  Découvrir nos formations
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-kassiopee-navy transition-colors text-center"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Expertise IT Kassiopée Formation"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-2xl sm:text-3xl lg:text-4xl font-bold text-kassiopee-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-gray-600">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Domaines d'expertise */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Domaines d'Expertise
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Une expertise pédagogique complète pour répondre à tous vos besoins de formation professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {expertises.map((expertise, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6 sm:p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-kassiopee-lightblue/10 p-3 rounded-full mr-4">
                    <expertise.icon className="h-6 w-6 sm:h-8 sm:w-8 text-kassiopee-navy" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900">
                    {expertise.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 sm:mb-6 text-sm sm:text-base">
                  {expertise.description}
                </p>
                
                <ul className="space-y-2">
                  {expertise.competences.map((competence, idx) => (
                    <li key={idx} className="flex items-center text-sm sm:text-base">
                      <CheckCircle className="h-4 w-4 text-kassiopee-gold mr-2 flex-shrink-0" />
                      <span className="text-gray-700">{competence}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Notre Méthodologie
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Une approche personnalisée pour garantir votre réussite professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {methodologie.map((etape, index) => (
              <div key={index} className="relative">
                <div className="bg-kassiopee-navy text-white rounded-xl p-6 sm:p-8 text-center">
                  <div className="text-2xl sm:text-3xl font-bold text-kassiopee-gold mb-4">
                    {etape.step}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold mb-3">
                    {etape.title}
                  </h3>
                  <p className="text-sm sm:text-base text-gray-200">
                    {etape.description}
                  </p>
                </div>
                {index < methodologie.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-kassiopee-gold" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-12 sm:py-16 lg:py-20 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 lg:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Nos Certifications & Agréments
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Des formations reconnues et certifiantes pour valoriser vos compétences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="relative h-48">
                  <Image
                    src={cert.logo}
                    alt={cert.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3">
                    {cert.name}
                  </h3>
                  <p className="text-gray-600 text-sm sm:text-base">
                    {cert.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
            Prêt à développer vos compétences professionnelles ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Découvrez nos formations certifiantes et donnez un nouvel élan à votre carrière professionnelle
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/formations"
              className="bg-kassiopee-gold text-kassiopee-navy px-8 py-3 rounded-md font-semibold hover:bg-kassiopee-gold/90 transition-colors"
            >
              Voir nos formations
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-3 rounded-md font-semibold hover:bg-white hover:text-kassiopee-navy transition-colors"
            >
              Demander un devis
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

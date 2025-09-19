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
  title: 'Notre Expertise IT - Kassiopée Formation',
  description: 'Découvrez l\'expertise IT de Kassiopée Formation : transformation digitale, gestion de projets informatiques, ITIL, Scrum, IA et plus encore.',
  keywords: 'expertise IT, transformation digitale, formation informatique, ITIL, Scrum, intelligence artificielle, gestion projets IT',
  ogImage: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
});

const expertises = [
  {
    icon: Code,
    title: 'Développement & Technologies',
    description: 'Maîtrise des dernières technologies et méthodologies de développement pour accompagner vos projets digitaux.',
    competences: [
      'Langages de programmation modernes',
      'Frameworks et librairies actuels',
      'Architecture logicielle',
      'DevOps et CI/CD'
    ]
  },
  {
    icon: Database,
    title: 'Gestion de Données',
    description: 'Expertise en bases de données, Big Data et intelligence artificielle pour optimiser vos processus métier.',
    competences: [
      'Bases de données relationnelles et NoSQL',
      'Data Analytics et Business Intelligence',
      'Machine Learning et IA',
      'Gouvernance des données'
    ]
  },
  {
    icon: Cloud,
    title: 'Cloud & Infrastructure',
    description: 'Accompagnement dans la migration et l\'optimisation de vos infrastructures cloud.',
    competences: [
      'AWS, Azure, Google Cloud Platform',
      'Architecture cloud native',
      'Conteneurisation (Docker, Kubernetes)',
      'Sécurité cloud'
    ]
  },
  {
    icon: Shield,
    title: 'Cybersécurité',
    description: 'Protection de vos systèmes d\'information avec les meilleures pratiques de sécurité.',
    competences: [
      'Audit de sécurité',
      'Gestion des risques cyber',
      'Conformité RGPD',
      'Formation sensibilisation sécurité'
    ]
  },
  {
    icon: Zap,
    title: 'Transformation Digitale',
    description: 'Stratégie et mise en œuvre de votre transformation digitale pour rester compétitif.',
    competences: [
      'Diagnostic digital',
      'Stratégie de transformation',
      'Conduite du changement',
      'ROI et mesure de performance'
    ]
  },
  {
    icon: Users,
    title: 'Gestion de Projets IT',
    description: 'Méthodologies agiles et traditionnelles pour mener vos projets informatiques au succès.',
    competences: [
      'Scrum, Kanban, SAFe',
      'Cycle en V, PRINCE2',
      'Gestion des risques projets',
      'Leadership d\'équipes techniques'
    ]
  }
];

const certifications = [
  {
    name: 'ITIL V4 Foundation',
    description: 'Gestion des services informatiques selon les meilleures pratiques ITIL',
    logo: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg'
  },
  {
    name: 'Scrum Alliance',
    description: 'Méthodologies agiles et certification Scrum Master',
    logo: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg'
  },
  {
    name: 'France Compétences RS6074',
    description: 'Certification officielle transformation digitale TPE',
    logo: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg'
  }
];

const stats = [
  { number: '500+', label: 'Professionnels formés' },
  { number: '15+', label: 'Années d\'expérience' },
  { number: '95%', label: 'Taux de satisfaction' },
  { number: '50+', label: 'Entreprises partenaires' }
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
                Notre Expertise IT
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                Kassiopée Formation s'appuie sur une expertise technique approfondie et une 
                connaissance fine des enjeux digitaux pour vous accompagner dans votre transformation.
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
              Une expertise technique complète pour répondre à tous vos besoins de formation IT
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
              Une approche structurée pour garantir l'efficacité de vos formations
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
            Prêt à développer vos compétences IT ?
          </h2>
          <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 max-w-3xl mx-auto">
            Découvrez nos formations spécialisées et donnez un nouvel élan à votre carrière dans l'IT
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

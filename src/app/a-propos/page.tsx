import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Users, Award, MapPin, Calendar, CheckCircle, ArrowRight } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "À propos - Qui sommes-nous ? Notre histoire et nos valeurs",
  description: "Découvrez l'histoire de Kassiopée Formation, organisme de formation professionnelle depuis plus de 25 ans. Nos valeurs, notre équipe, nos certifications.",
  keywords: "à propos, histoire, valeurs, équipe, organisme formation, certification QUALIOPI",
});

const histoire = [
  {
    year: '1998',
    title: 'Création de Kassiopée Formation',
    description: 'Fondation de l\'organisme avec un premier centre à Paris, spécialisé dans les formations sanitaires.'
  },
  {
    year: '2005',
    title: 'Expansion régionale',
    description: 'Ouverture de nouveaux centres en région PACA et développement des formations sociales.'
  },
  {
    year: '2012',
    title: 'Diversification des formations',
    description: 'Élargissement de l\'offre aux services à la personne et aux savoirs de base.'
  },
  {
    year: '2018',
    title: 'Certification QUALIOPI',
    description: 'Obtention de la certification QUALIOPI, gage de qualité reconnu par l\'État.'
  },
  {
    year: '2023',
    title: 'Innovation pédagogique',
    description: 'Déploiement de nouvelles méthodes : e-learning, réalité virtuelle, simulation.'
  }
];

const valeurs = [
  {
    title: 'Excellence pédagogique',
    description: 'Nous mettons tout en œuvre pour offrir des formations de qualité supérieure avec des formateurs experts.',
    icon: Award
  },
  {
    title: 'Accompagnement personnalisé',
    description: 'Chaque apprenant bénéficie d\'un suivi individualisé adapté à son profil et ses objectifs.',
    icon: Users
  },
  {
    title: 'Proximité territoriale',
    description: 'Présents dans toute la France, nous privilégions la proximité avec nos apprenants.',
    icon: MapPin
  },
  {
    title: 'Innovation constante',
    description: 'Nous investissons continuellement dans de nouveaux outils et méthodes pédagogiques.',
    icon: CheckCircle
  }
];

const chiffres = [
  { number: '25+', label: 'Années d\'expérience' },
  { number: '40+', label: 'Centres de formation' },
  { number: '8 500+', label: 'Apprenants par an' },
  { number: '95%', label: 'Taux de réussite' },
  { number: '200+', label: 'Formateurs experts' },
  { number: '500+', label: 'Entreprises partenaires' }
];

const equipe = [
  {
    name: 'Marie Dubois',
    role: 'Directrice Générale',
    description: 'Plus de 20 ans d\'expérience dans la formation professionnelle.',
    image: 'https://images.pexels.com/photos/3912468/pexels-photo-3912468.jpeg'
  },
  {
    name: 'Pierre Martin',
    role: 'Directeur Pédagogique',
    description: 'Expert en ingénierie pédagogique et innovation éducative.',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg'
  },
  {
    name: 'Sarah Benali',
    role: 'Responsable Qualité',
    description: 'Garant de la qualité de nos formations et de la satisfaction client.',
    image: 'https://images.pexels.com/photos/3912469/pexels-photo-3912469.jpeg'
  }
];

const certifications = [
  {
    name: 'QUALIOPI',
    description: 'Certification qualité des organismes de formation',
    image: '/images/qualiopi.svg'
  },
  {
    name: 'ICERT',
    description: 'Certification internationale des organismes de formation',
    image: '/images/icert.svg'
  },
  {
    name: 'Datadock',
    description: 'Base de données unique sur la formation professionnelle',
    image: '/images/datadock.svg'
  }
];

export default function AProposPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-kassiopee-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg"
            alt="À propos Kassiopée Formation"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              À propos de <span className="text-kassiopee-gold">Kassiopée Formation</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Depuis plus de 25 ans, nous accompagnons des milliers d'apprenants vers la réussite 
              dans les métiers du sanitaire, du social et des services à la personne.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Notre <span className="text-kassiopee-navy">mission</span>
              </h2>
              <div className="space-y-4 text-lg text-gray-700">
                <p>
                  Kassiopée Formation a pour mission de favoriser l'insertion professionnelle 
                  et la progression de carrière dans les secteurs en pleine croissance du sanitaire, 
                  du social et des services à la personne.
                </p>
                <p>
                  Nous croyons fermement que chacun mérite une formation de qualité, adaptée à ses 
                  besoins et à son rythme. C'est pourquoi nous mettons l'accompagnement personnalisé 
                  au cœur de notre pédagogie.
                </p>
                <p>
                  Nos formations allient théorie et pratique grâce à nos plateaux techniques modernes 
                  et nos partenariats avec plus de 500 entreprises et établissements de santé.
                </p>
              </div>
            </div>
            <div className="relative h-96 rounded-2xl overflow-hidden">
              <Image
                src="https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg"
                alt="Notre mission"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="py-16 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              Kassiopée Formation en <span className="text-kassiopee-gold">chiffres</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Des résultats qui témoignent de notre engagement et de notre expertise
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {chiffres.map((chiffre, index) => (
              <div key={index}>
                <div className="text-3xl lg:text-4xl font-bold text-kassiopee-gold mb-2">
                  {chiffre.number}
                </div>
                <div className="text-gray-200 font-medium text-sm">
                  {chiffre.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Histoire */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre <span className="text-kassiopee-navy">histoire</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              25 ans d'évolution et d'innovation au service de la formation professionnelle
            </p>
          </div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-kassiopee-gold hidden md:block"></div>

            <div className="space-y-8">
              {histoire.map((etape, index) => (
                <div key={index} className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="hidden md:flex absolute left-6 w-4 h-4 bg-kassiopee-gold rounded-full border-4 border-white shadow-lg"></div>
                  
                  <div className="md:ml-16 bg-gray-50 p-6 rounded-xl">
                    <div className="flex items-center mb-3">
                      <Calendar className="h-5 w-5 text-kassiopee-navy mr-2" />
                      <span className="text-kassiopee-navy font-bold text-lg">{etape.year}</span>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{etape.title}</h3>
                    <p className="text-gray-700">{etape.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos <span className="text-kassiopee-navy">valeurs</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des principes forts qui guident notre action au quotidien
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-kassiopee-lightblue text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <valeur.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{valeur.title}</h3>
                <p className="text-gray-600">{valeur.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre <span className="text-kassiopee-navy">équipe dirigeante</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des professionnels expérimentés au service de votre réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {equipe.map((membre, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-xl text-center">
                <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                  <Image
                    src={membre.image}
                    alt={membre.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1">{membre.name}</h3>
                <p className="text-kassiopee-navy font-medium mb-3">{membre.role}</p>
                <p className="text-gray-600 text-sm">{membre.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos <span className="text-kassiopee-navy">certifications</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Des garanties de qualité reconnues par les professionnels et les organismes publics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Award className="h-8 w-8 text-kassiopee-navy" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{cert.name}</h3>
                <p className="text-gray-600 text-sm">{cert.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-6">
            Rejoignez l'aventure Kassiopée Formation
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-8 max-w-2xl mx-auto">
            Faites confiance à notre expertise pour transformer votre avenir professionnel. 
            Plus de 25 ans d'excellence à votre service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/formations"
              className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center"
            >
              Découvrir nos formations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/centres"
              className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
            >
              Nos centres
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
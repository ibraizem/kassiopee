import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Users, Building } from 'lucide-react';
import { generateSEO } from '@/lib/seo';
import FormationCard from '@/components/ui/FormationCard';

export const metadata = generateSEO({
  title: "Formations en Île-de-France - Paris et région parisienne",
  description: "Découvrez nos centres de formation en Île-de-France : Paris République, Paris Bastille. Formations sanitaire, social et services à la personne.",
  keywords: "formation île-de-france, formation paris, centre formation paris, aide-soignant paris",
});

const centres = [
  {
    name: 'Paris République',
    address: '15 rue du Faubourg du Temple, 75011 Paris',
    phone: '01 XX XX XX XX',
    email: 'paris-republique@kassiopee-formation.fr',
    description: 'Notre centre historique au cœur de Paris, entièrement rénové avec des plateaux techniques modernes.',
    specialites: ['Aide-soignant', 'Auxiliaire de puériculture', 'DEAVS'],
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg'
  },
  {
    name: 'Paris Bastille',
    address: '28 boulevard Beaumarchais, 75011 Paris',
    phone: '01 XX XX XX XX',
    email: 'paris-bastille@kassiopee-formation.fr',
    description: 'Centre moderne avec des équipements de pointe et des salles de simulation haute-fidélité.',
    specialites: ['DEAES', 'Agent service hospitalier', 'Prépa concours'],
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg'
  },
  {
    name: 'Créteil',
    address: '45 avenue du Général de Gaulle, 94000 Créteil',
    phone: '01 XX XX XX XX',
    email: 'creteil@kassiopee-formation.fr',
    description: 'Centre accessible, proche des transports, avec parking gratuit.',
    specialites: ['Services à la personne', 'Savoirs de base'],
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg'
  }
];

const formations = [
  {
    id: 'aide-soignant-idf',
    title: 'Formation Aide-Soignant (DEAS)',
    description: 'Formation complète de 10 mois avec stages en établissements partenaires franciliens.',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg',
    duration: '10 mois',
    region: 'Île-de-France',
    category: 'Sanitaire & Social',
    level: 'Niveau 4',
    nextSession: 'Sept. 2024',
    href: '/formations/aide-soignant'
  },
  {
    id: 'auxiliaire-puericulture-idf',
    title: 'Auxiliaire de Puériculture (DEAP)',
    description: 'Spécialisez-vous dans l\'accompagnement du jeune enfant avec nos partenaires parisiens.',
    image: 'https://images.pexels.com/photos/7551634/pexels-photo-7551634.jpeg',
    duration: '10 mois',
    region: 'Île-de-France',
    category: 'Sanitaire & Social',
    level: 'Niveau 4',
    nextSession: 'Sept. 2024',
    href: '/formations/auxiliaire-puericultrice'
  }
];

const stats = [
  { number: '2 500', label: 'Apprenants formés par an' },
  { number: '97%', label: 'Taux de réussite' },
  { number: '12', label: 'Centres en Île-de-France' },
  { number: '150', label: 'Partenaires entreprises' },
];

const avantages = [
  {
    title: 'Proximité des transports',
    description: 'Tous nos centres sont desservis par les transports en commun franciliens.',
    icon: MapPin
  },
  {
    title: 'Partenariats renforcés',
    description: 'Plus de 150 entreprises et établissements partenaires en région parisienne.',
    icon: Building
  },
  {
    title: 'Équipements modernes',
    description: 'Plateaux techniques à la pointe de la technologie et salles de simulation.',
    icon: Users
  }
];

export default function IleDeFrancePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero */}
      <section className="relative py-20 bg-kassiopee-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg"
            alt="Formation Île-de-France"
            fill
            className="object-cover opacity-20"
          />
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Formations en <span className="text-kassiopee-gold">Île-de-France</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Découvrez nos 12 centres de formation en région parisienne. Plus de 25 ans d'expérience 
              dans la formation aux métiers du sanitaire, du social et des services à la personne.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/inscription"
                className="bg-kassiopee-gold text-kassiopee-navy px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
              >
                M'INSCRIRE
              </Link>
              <Link
                href="/contact"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-kassiopee-navy transition-colors inline-flex items-center justify-center"
              >
                Nous contacter
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index}>
                <div className="text-3xl lg:text-4xl font-bold text-kassiopee-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Pourquoi choisir <span className="text-kassiopee-navy">l'Île-de-France</span> ?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              La région parisienne offre de nombreux avantages pour votre formation professionnelle
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {avantages.map((avantage, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="bg-kassiopee-lightblue text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <avantage.icon className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">{avantage.title}</h3>
                <p className="text-gray-600">{avantage.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centres */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Nos <span className="text-kassiopee-navy">centres</span> en Île-de-France
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              12 centres répartis dans toute la région parisienne pour être au plus près de vous
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {centres.map((centre, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={centre.image}
                    alt={centre.name}
                    fill
                    className="object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{centre.name}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-kassiopee-lightblue mt-0.5 mr-2 flex-shrink-0" />
                      <span className="text-sm text-gray-600">{centre.address}</span>
                    </div>
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-kassiopee-lightblue mr-2" />
                      <span className="text-sm text-gray-600">{centre.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail className="h-4 w-4 text-kassiopee-lightblue mr-2" />
                      <span className="text-sm text-gray-600">{centre.email}</span>
                    </div>
                  </div>

                  <p className="text-gray-700 mb-4 text-sm">{centre.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-sm mb-2">Spécialités :</h4>
                    <div className="flex flex-wrap gap-2">
                      {centre.specialites.map((specialite, idx) => (
                        <span key={idx} className="bg-kassiopee-gold/20 text-kassiopee-navy px-2 py-1 rounded text-xs font-medium">
                          {specialite}
                        </span>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-kassiopee-navy font-semibold hover:text-kassiopee-lightblue transition-colors text-sm"
                  >
                    Contacter ce centre →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Formations */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Formations <span className="text-kassiopee-navy">disponibles</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Toutes nos formations sont disponibles dans nos centres franciliens
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {formations.map((formation) => (
              <FormationCard key={formation.id} {...formation} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/formations"
              className="inline-flex items-center bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors"
            >
              Voir toutes nos formations
              →
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-6">
            Prêt à commencer votre formation en Île-de-France ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-8 max-w-2xl mx-auto">
            Nos conseillers franciliens sont là pour vous accompagner dans votre projet de formation.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscription"
              className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-kassiopee-navy/90 transition-colors"
            >
              M'INSCRIRE MAINTENANT
            </Link>
            <Link
              href="/contact"
              className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
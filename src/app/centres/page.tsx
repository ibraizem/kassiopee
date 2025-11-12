import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Phone, Mail, Clock, Users, Award, ArrowRight } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Nos centres de formation - Kassiopée Formation",
  description: "Découvrez nos 40 centres de formation répartis dans toute la France. Trouvez le centre le plus proche de chez vous pour votre formation professionnelle.",
  keywords: "centres formation, localisation, adresses, Kassiopée Formation, France",
});

const centres = [
  {
    id: 'paris-republique',
    name: 'Paris - République',
    address: '15 rue de la Formation, 75001 Paris',
    phone: '01 XX XX XX XX',
    email: 'paris-republique@kassiopee-formation.fr',
    region: 'Île-de-France',
    formations: ['Aide-soignant', 'Auxiliaire de vie', 'Accompagnant éducatif'],
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
    capacity: 120,
    equipments: ['Plateau technique', 'Salle de simulation', 'Bibliothèque']
  },
  {
    id: 'paris-bastille',
    name: 'Paris - Bastille',
    address: '8 place de la Bastille, 75011 Paris',
    phone: '01 XX XX XX XX',
    email: 'paris-bastille@kassiopee-formation.fr',
    region: 'Île-de-France',
    formations: ['Auxiliaire de puériculture', 'Agent de service hospitalier'],
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
    capacity: 80,
    equipments: ['Laboratoire', 'Salle informatique', 'Espace détente']
  },
  {
    id: 'lyon-part-dieu',
    name: 'Lyon - Part-Dieu',
    address: '25 cours Vitton, 69003 Lyon',
    phone: '04 XX XX XX XX',
    email: 'lyon@kassiopee-formation.fr',
    region: 'PACA/AURA',
    formations: ['Aide-soignant', 'Auxiliaire de vie', 'Savoirs de base'],
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
    capacity: 100,
    equipments: ['Plateau technique', 'Salle de cours', 'Cafétéria']
  },
  {
    id: 'marseille-vieux-port',
    name: 'Marseille - Vieux-Port',
    address: '12 quai du Port, 13002 Marseille',
    phone: '04 XX XX XX XX',
    email: 'marseille@kassiopee-formation.fr',
    region: 'PACA/AURA',
    formations: ['Auxiliaire de vie', 'Accompagnant éducatif', 'Préparation concours'],
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
    capacity: 90,
    equipments: ['Salle de simulation', 'Bibliothèque', 'Parking']
  },
  {
    id: 'lille-centre',
    name: 'Lille - Centre',
    address: '30 rue de la République, 59000 Lille',
    phone: '03 XX XX XX XX',
    email: 'lille@kassiopee-formation.fr',
    region: 'Hauts-de-France',
    formations: ['Aide-soignant', 'Agent de service hospitalier', 'Savoirs de base'],
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg',
    capacity: 70,
    equipments: ['Plateau technique', 'Salle informatique', 'Espace détente']
  },
  {
    id: 'orleans-centre',
    name: 'Orléans - Centre',
    address: '18 place du Martroi, 45000 Orléans',
    phone: '02 XX XX XX XX',
    email: 'orleans@kassiopee-formation.fr',
    region: 'Centre-Val de Loire',
    formations: ['Auxiliaire de vie', 'Assistant de vie aux familles', 'Préparation concours'],
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg',
    capacity: 60,
    equipments: ['Salle de cours', 'Laboratoire', 'Parking']
  }
];

const regions = [
  {
    name: 'Île-de-France',
    centres: 12,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    name: 'PACA/AURA',
    centres: 8,
    color: 'bg-green-100 text-green-800'
  },
  {
    name: 'Hauts-de-France',
    centres: 4,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    name: 'Centre-Val de Loire',
    centres: 6,
    color: 'bg-orange-100 text-orange-800'
  }
];

export default function CentresPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Nos <span className="text-kassiopee-gold">centres</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-4xl mx-auto leading-relaxed">
              Découvrez nos 40 centres de formation répartis dans toute la France. 
              Trouvez le centre le plus proche de chez vous pour commencer votre formation.
            </p>
          </div>
        </div>
      </section>

      {/* Stats by Region */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Répartition par <span className="text-kassiopee-navy">région</span>
            </h2>
            <p className="text-lg text-gray-600">
              Nos centres couvrent 4 régions pour vous offrir une proximité maximale
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {regions.map((region, index) => (
              <div key={index} className="text-center p-6 bg-gray-50 rounded-xl">
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-3 ${region.color}`}>
                  {region.centres} centres
                </div>
                <h3 className="text-lg font-semibold text-gray-900">{region.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Centres List */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tous nos <span className="text-kassiopee-navy">centres</span>
            </h2>
            <p className="text-lg text-gray-600">
              Cliquez sur un centre pour plus d'informations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {centres.map((centre) => (
              <div key={centre.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                {/* Image */}
                <div className="relative h-48">
                  <Image
                    src={centre.image}
                    alt={centre.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-kassiopee-navy text-white px-3 py-1 rounded-full text-xs font-semibold">
                      {centre.region}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{centre.name}</h3>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-start">
                      <MapPin className="h-4 w-4 text-kassiopee-lightblue mt-1 mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{centre.address}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Phone className="h-4 w-4 text-kassiopee-lightblue mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">{centre.phone}</p>
                    </div>
                    
                    <div className="flex items-center">
                      <Users className="h-4 w-4 text-kassiopee-lightblue mr-2 flex-shrink-0" />
                      <p className="text-sm text-gray-600">Capacité : {centre.capacity} places</p>
                    </div>
                  </div>

                  {/* Formations */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Formations proposées :</h4>
                    <div className="flex flex-wrap gap-1">
                      {centre.formations.map((formation, index) => (
                        <span key={index} className="bg-kassiopee-gold text-kassiopee-navy px-2 py-1 rounded text-xs font-medium">
                          {formation}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Equipments */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">Équipements :</h4>
                    <div className="flex flex-wrap gap-1">
                      {centre.equipments.map((equipment, index) => (
                        <span key={index} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {equipment}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex gap-2">
                    <Link
                      href={`/contact?centre=${centre.id}`}
                      className="flex-1 bg-kassiopee-navy text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-kassiopee-navy/90 transition-colors text-center"
                    >
                      Contacter ce centre
                    </Link>
                    <Link
                      href="/formations"
                      className="flex-1 border border-kassiopee-navy text-kassiopee-navy px-4 py-2 rounded-lg text-sm font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors text-center"
                    >
                      Voir formations
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-6">
            Trouvez le centre idéal pour votre formation
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Nos conseillers vous aident à choisir le centre le plus adapté à vos besoins 
            et à votre situation géographique.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center"
            >
              <MapPin className="mr-2 h-5 w-5" />
              Nous contacter
            </Link>
            <Link
              href="/formations"
              className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-kassiopee-navy hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <ArrowRight className="mr-2 h-5 w-5" />
              Découvrir nos formations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

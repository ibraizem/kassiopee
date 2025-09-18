import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, Award, CheckCircle } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import FormationCard from '@/components/ui/FormationCard';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Accueil - Formation professionnelle sanitaire, sociale et services",
  description: "Kassiopée Formation : organisme de formation professionnelle spécialisé dans les secteurs sanitaire, social et services à la personne. Formations certifiantes dans toute la France.",
  keywords: "formation professionnelle, sanitaire, social, services à la personne, certification, QUALIOPI",
});

const featuredFormations = [
  {
    id: 'aide-soignant',
    title: 'Formation Aide-Soignant',
    description: 'Accompagnement complet vers le diplôme d\'aide-soignant. Formation théorique et pratique avec stages en établissements partenaires.',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg',
    duration: '10 mois',
    region: 'Toutes régions',
    category: 'Sanitaire & Social',
    level: 'Niveau 4',
    nextSession: 'Sept. 2024',
    href: '/formations/aide-soignant'
  },
  {
    id: 'auxiliaire-vie-sociale',
    title: 'Auxiliaire de Vie Sociale',
    description: 'Devenez professionnel de l\'accompagnement à domicile. Formation complète aux gestes techniques et à la relation d\'aide.',
    image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg',
    duration: '9 mois',
    region: 'Île-de-France',
    category: 'Services à la personne',
    level: 'Niveau 3',
    nextSession: 'Oct. 2024',
    href: '/formations/auxiliaire-vie-sociale'
  },
  {
    id: 'assistant-medico-social',
    title: 'Assistant Médico-Social',
    description: 'Formation aux métiers de l\'accompagnement en établissement médico-social. Développez vos compétences relationnelles.',
    image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
    duration: '8 mois',
    region: 'PACA/AURA',
    category: 'Sanitaire & Social',
    level: 'Niveau 4',
    nextSession: 'Nov. 2024',
    href: '/formations/assistant-medico-social'
  }
];

const stats = [
  { number: '95%', label: 'Taux de réussite aux examens' },
  { number: '8 500+', label: 'Apprenants formés par an' },
  { number: '40+', label: 'Centres de formation' },
  { number: '25', label: 'Années d\'expérience' },
];

const regions = [
  {
    name: 'Île-de-France',
    description: 'Paris et sa région - 12 centres',
    href: '/regions/ile-de-france',
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg'
  },
  {
    name: 'PACA/AURA',
    description: 'Marseille, Lyon, Nice - 8 centres',
    href: '/regions/paca-aura',
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg'
  },
  {
    name: 'Centre-Val de Loire',
    description: 'Orléans, Tours, Blois - 6 centres',
    href: '/regions/centre-val-de-loire',
    image: 'https://images.pexels.com/photos/2363/france-landmark-lights-night.jpg'
  },
  {
    name: 'Hauts-de-France',
    description: 'Lille, Amiens - 4 centres',
    href: '/regions/hauts-de-france',
    image: 'https://images.pexels.com/photos/2026324/pexels-photo-2026324.jpeg'
  }
];

const testimonials = [
  {
    name: 'Marie Dubois',
    role: 'Aide-soignante diplômée',
    content: 'Grâce à Kassiopée Formation, j\'ai pu réaliser mon rêve de travailler dans le secteur médical. L\'accompagnement était exceptionnel.',
    image: 'https://images.pexels.com/photos/3912468/pexels-photo-3912468.jpeg'
  },
  {
    name: 'Pierre Martin',
    role: 'Auxiliaire de vie',
    content: 'Formation très complète qui m\'a donné toutes les compétences nécessaires pour exercer avec confiance. Formateurs bienveillants.',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg'
  },
  {
    name: 'Sarah Benali',
    role: 'Reconversion professionnelle',
    content: 'À 45 ans, j\'ai changé de vie grâce à cette formation. Le centre de Lyon m\'a parfaitement accompagnée.',
    image: 'https://images.pexels.com/photos/3912469/pexels-photo-3912469.jpeg'
  }
];

const certifications = [
  'QUALIOPI',
  'ICERT',
  'Datadock',
  'OPCO Santé'
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Votre avenir commence ici"
        subtitle="FORMATIONS PROFESSIONNELLES"
        description="Spécialiste de la formation aux métiers du sanitaire, du social et des services à la personne. Plus de 25 ans d'expertise au service de votre réussite."
        primaryCTA={{
          text: "Découvrir nos formations",
          href: "/formations"
        }}
        secondaryCTA={{
          text: "Nous contacter",
          href: "/contact"
        }}
        backgroundImage="https://images.pexels.com/photos/7551662/pexels-photo-7551662.jpeg"
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-kassiopee-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Formations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos formations <span className="text-kassiopee-navy">phares</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos formations les plus demandées, conçues pour répondre aux besoins 
              du marché de l'emploi dans les secteurs porteurs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredFormations.map((formation) => (
              <FormationCard key={formation.id} {...formation} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/formations"
              className="inline-flex items-center bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors"
            >
              Voir toutes nos formations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Regions Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Présents dans <span className="text-kassiopee-navy">toute la France</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Avec plus de 40 centres de formation répartis dans 4 régions, 
              nous sommes proches de vous pour vous accompagner.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {regions.map((region, index) => (
              <Link
                key={index}
                href={region.href}
                className="group block bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative h-48">
                  <Image
                    src={region.image}
                    alt={`Formation ${region.name}`}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-kassiopee-navy bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300" />
                  <div className="absolute inset-0 flex items-center justify-center text-center p-6">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">
                        {region.name}
                      </h3>
                      <p className="text-gray-200 text-sm">
                        {region.description}
                      </p>
                      <MapPin className="h-6 w-6 text-kassiopee-gold mx-auto mt-3" />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              href="/centres"
              className="inline-flex items-center text-kassiopee-navy font-semibold hover:text-kassiopee-lightblue transition-colors"
            >
              Voir tous nos centres
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir <span className="text-kassiopee-gold">Kassiopée Formation</span> ?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Plus de 25 ans d'expérience dans la formation professionnelle 
              pour vous garantir une formation de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Certifications reconnues</h3>
              <p className="text-gray-200">
                QUALIOPI, ICERT, Datadock : nos formations sont certifiées et reconnues par les professionnels.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Accompagnement personnalisé</h3>
              <p className="text-gray-200">
                Chaque apprenant bénéficie d'un suivi individualisé par nos équipes pédagogiques expertes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Taux de réussite élevé</h3>
              <p className="text-gray-200">
                95% de taux de réussite aux examens grâce à notre pédagogie adaptée et nos plateaux techniques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils témoignent de leur <span className="text-kassiopee-navy">réussite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos apprenants qui ont transformé leur vie professionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
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
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos certifications et <span className="text-kassiopee-navy">agréments</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kassiopée Formation est certifié par les principaux organismes de qualité 
              du secteur de la formation professionnelle.
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

      {/* CTA Section */}
      <section className="py-20 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-6">
            Prêt à transformer votre avenir professionnel ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez les milliers d'apprenants qui ont fait confiance à Kassiopée Formation 
            pour développer leurs compétences.
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
import React from 'react';
import Link from 'next/link';
import { ArrowRight, Award, CheckCircle, ExternalLink } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Certifications - Kassiopée Formation",
  description: "Découvrez toutes les certifications professionnelles que vous pouvez obtenir avec nos formations informatiques et transformation digitale.",
  keywords: "certifications informatiques, RS6074, ITIL V4, Scrum Master, certifications professionnelles",
});

const certifications = [
  {
    nom: "RS6074 - Transformation Digitale TPE",
    organisme: "France Compétences",
    description: "Certification officielle pour élaborer et piloter un plan d'action de transformation digitale adapté aux TPE.",
    formation: "Transformation Digitale pour TPE",
    duree: "5 jours (28h)",
    prix: "3100€ TTC",
    href: "/formations/transformation-digitale-tpe",
    niveau: "Dirigeants TPE",
    reconnaissance: "Reconnue par l'État",
    avantages: [
      "Certification enregistrée au Répertoire Spécifique",
      "Éligible au CPF",
      "Reconnaissance professionnelle",
      "Compétences digitales certifiées"
    ]
  },
  {
    nom: "ITIL V4 Foundation",
    organisme: "AXELOS",
    description: "Certification internationale de référence pour la gestion des services informatiques selon le framework ITIL V4.",
    formation: "ITIL V4 - Fondements et Concepts",
    duree: "3 jours (21h)",
    prix: "1800€ TTC",
    href: "/formations/itil-v4-fondements",
    niveau: "Professionnels IT",
    reconnaissance: "Certification internationale",
    avantages: [
      "Standard mondial ITIL",
      "Reconnaissance internationale",
      "Évolution de carrière",
      "Amélioration des processus IT"
    ]
  },
  {
    nom: "Scrum Master Certified",
    organisme: "Scrum Alliance",
    description: "Certification pour maîtriser le rôle et les missions du Scrum Master dans une équipe Agile.",
    formation: "Scrum Master Agile",
    duree: "3 jours (21h)",
    prix: "1900€ TTC",
    href: "/formations/scrum-master-agile",
    niveau: "Chefs de projet",
    reconnaissance: "Certification Agile",
    avantages: [
      "Méthodologie Agile certifiée",
      "Leadership d'équipe",
      "Gestion de projets innovants",
      "Compétences recherchées"
    ]
  }
];

const partenaires = [
  {
    nom: "France Compétences",
    description: "Organisme national de financement et de régulation de la formation professionnelle",
    logo: "🇫🇷"
  },
  {
    nom: "AXELOS",
    description: "Propriétaire officiel du framework ITIL et des certifications associées",
    logo: "🛠️"
  },
  {
    nom: "Scrum Alliance",
    description: "Organisation mondiale de certification des pratiques Agiles et Scrum",
    logo: "⚡"
  },
  {
    nom: "QUALIOPI",
    description: "Certification qualité des organismes de formation professionnelle",
    logo: "✅"
  }
];

export default function CertificationsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-kassiopee-gold">Certifications</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Obtenez des certifications reconnues par l'industrie et boostez votre carrière 
              avec nos formations informatiques et transformation digitale.
            </p>
          </div>
        </div>
      </section>

      {/* Certifications principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Certifications <span className="text-kassiopee-navy">Disponibles</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos formations vous préparent aux certifications les plus recherchées 
              du marché informatique et digital.
            </p>
          </div>

          <div className="space-y-12">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-2">
                    <div className="flex items-center mb-4">
                      <Award className="h-8 w-8 text-kassiopee-gold mr-3" />
                      <div>
                        <h3 className="text-2xl font-bold text-kassiopee-navy">{cert.nom}</h3>
                        <p className="text-sm text-gray-600">{cert.organisme} • {cert.reconnaissance}</p>
                      </div>
                    </div>
                    
                    <p className="text-lg text-gray-700 mb-6">{cert.description}</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">📚 Formation associée</h4>
                        <p className="text-gray-700">{cert.formation}</p>
                      </div>
                      <div>
                        <h4 className="font-bold text-gray-900 mb-2">🎯 Public cible</h4>
                        <p className="text-gray-700">{cert.niveau}</p>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <h4 className="font-bold text-gray-900 mb-3">✨ Avantages de cette certification</h4>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {cert.avantages.map((avantage, idx) => (
                          <div key={idx} className="flex items-center text-gray-700">
                            <CheckCircle className="h-4 w-4 text-kassiopee-gold mr-2" />
                            {avantage}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white p-6 rounded-xl shadow-lg">
                    <div className="text-center mb-6">
                      <div className="text-3xl font-bold text-kassiopee-gold mb-2">{cert.prix}</div>
                      <div className="text-sm text-gray-600">{cert.duree}</div>
                    </div>
                    
                    <Link
                      href={cert.href}
                      className="w-full bg-kassiopee-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center mb-4"
                    >
                      Découvrir la formation
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                    
                    <Link
                      href="/contact"
                      className="w-full border-2 border-kassiopee-navy text-kassiopee-navy px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors inline-flex items-center justify-center"
                    >
                      Nous contacter
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nos partenaires */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-kassiopee-navy">Partenaires</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nous collaborons avec les organismes de certification les plus reconnus 
              pour vous garantir des formations de qualité.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {partenaires.map((partenaire, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg text-center">
                <div className="text-4xl mb-4">{partenaire.logo}</div>
                <h3 className="text-lg font-bold text-kassiopee-navy mb-2">{partenaire.nom}</h3>
                <p className="text-sm text-gray-600">{partenaire.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pourquoi choisir nos certifications */}
      <section className="py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi Choisir Nos <span className="text-kassiopee-gold">Certifications</span> ?
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Reconnaissance Officielle</h3>
              <p className="text-gray-200">
                Toutes nos certifications sont reconnues par les organismes officiels 
                et les entreprises du secteur.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Taux de Réussite Élevé</h3>
              <p className="text-gray-200">
                95% de nos apprenants obtiennent leur certification grâce à notre 
                méthode pédagogique éprouvée.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <ExternalLink className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Évolution de Carrière</h3>
              <p className="text-gray-200">
                Nos certifications ouvrent de nouvelles opportunités professionnelles 
                et augmentent votre valeur sur le marché.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-6">
            Prêt à Obtenir Votre Certification ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez nos formations et obtenez les certifications qui feront 
            la différence dans votre carrière IT.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/formations"
              className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center"
            >
              Découvrir nos formations
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

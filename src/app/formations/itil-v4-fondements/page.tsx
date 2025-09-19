import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Users, Award, CheckCircle, Calendar, Euro, Phone, Mail, BookOpen } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Formation ITIL V4 - Fondements et Concepts Essentiels - Kassiopée Formation",
  description: "Formation aux fondements de la gestion des services selon ITIL V4. Préparation à la certification officielle avec études de cas.",
  keywords: "ITIL V4, gestion des services informatiques, certification ITIL, fondements ITIL, formation IT",
});

const objectifs = [
  "Comprendre les concepts fondamentaux d'ITIL V4 et la gestion des services",
  "Maîtriser les principes directeurs et les dimensions de la gestion des services",
  "Appréhender le système de valeur des services (SVS) et la chaîne de valeur des services",
  "Connaître les pratiques ITIL V4 les plus importantes",
  "Se préparer efficacement à l'examen de certification ITIL V4 Foundation"
];

const competences = [
  "Compréhension des concepts clés d'ITIL V4",
  "Application des principes directeurs dans la gestion des services",
  "Utilisation du système de valeur des services",
  "Mise en œuvre des pratiques ITIL essentielles",
  "Préparation à la certification ITIL V4 Foundation"
];

const pratiques = [
  "Gestion des incidents",
  "Gestion des problèmes", 
  "Gestion des changements",
  "Gestion des actifs informatiques",
  "Gestion de la configuration",
  "Gestion des niveaux de service",
  "Amélioration continue",
  "Gestion des versions et des déploiements"
];

const principes = [
  "Se concentrer sur la valeur",
  "Commencer là où vous êtes",
  "Progresser de manière itérative avec des commentaires",
  "Collaborer et promouvoir la visibilité",
  "Penser et travailler de manière holistique",
  "Rester simple et pratique",
  "Optimiser et automatiser"
];

export default function ItilV4FondementsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Certification ITIL V4 Foundation
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                ITIL V4 - <span className="text-kassiopee-gold">Fondements et Concepts Essentiels</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Formation aux fondements de la gestion des services selon ITIL V4. Préparation à la certification officielle avec études de cas pratiques.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/inscription"
                  className="bg-kassiopee-gold text-kassiopee-navy px-8 py-4 rounded-lg font-bold hover:bg-kassiopee-gold/90 transition-colors inline-flex items-center justify-center"
                >
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="border-2 border-kassiopee-gold text-kassiopee-gold px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-gold hover:text-kassiopee-navy transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            <div className="relative h-96 lg:h-full">
              <Image
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg"
                alt="Formation ITIL V4"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Informations clés */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-navy text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Durée</h3>
              <p className="text-gray-600">3 jours (21 heures)</p>
            </div>
            <div className="text-center">
              <div className="bg-kassiopee-navy text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <MapPin className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Lieu</h3>
              <p className="text-gray-600">Région parisienne</p>
            </div>
            <div className="text-center">
              <div className="bg-kassiopee-navy text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Euro className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Tarif</h3>
              <p className="text-gray-600">1800€ TTC</p>
              <p className="text-sm text-gray-500">Paiement en plusieurs fois possible</p>
            </div>
            <div className="text-center">
              <div className="bg-kassiopee-navy text-white p-4 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">Délai d'accès</h3>
              <p className="text-gray-600">10 à 20 jours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8 text-center">
              Description de la formation
            </h2>
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <p className="text-lg text-gray-700 mb-6">
                Cette formation vous permettra de maîtriser les concepts fondamentaux d'ITIL V4, le référentiel de bonnes pratiques pour la gestion des services informatiques le plus utilisé au monde.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Vous découvrirez les principes directeurs, les dimensions de la gestion des services, le système de valeur des services (SVS) et les pratiques essentielles d'ITIL V4.
              </p>
              <p className="text-lg text-gray-700">
                Cette formation vous prépare efficacement à l'examen de certification ITIL V4 Foundation et vous donne les clés pour améliorer la qualité des services IT dans votre organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Principes directeurs ITIL V4 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Les 7 Principes Directeurs ITIL V4
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {principes.map((principe, index) => (
              <div key={index} className="bg-kassiopee-navy text-white p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <div className="bg-kassiopee-gold text-kassiopee-navy p-2 rounded-full mr-3">
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="font-semibold">{principe}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Objectifs de la formation
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {objectifs.map((objectif, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-kassiopee-gold text-kassiopee-navy p-2 rounded-full mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <p className="text-gray-700">{objectif}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pratiques ITIL */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Pratiques ITIL V4 Couvertes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pratiques.map((pratique, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <BookOpen className="h-8 w-8 text-kassiopee-gold mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{pratique}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences acquises */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Compétences acquises en fin de formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competences.map((competence, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-kassiopee-gold mr-3" />
                  <h3 className="font-semibold text-gray-900">{competence}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certification */}
      <section className="py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-kassiopee-gold">
              Certification ITIL V4 Foundation
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Cette formation vous prépare à l'examen officiel ITIL V4 Foundation, reconnu mondialement dans le domaine de la gestion des services IT.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Examen inclus</h3>
              <p className="text-gray-200">
                L'examen de certification ITIL V4 Foundation est inclus dans le prix de la formation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Accompagnement personnalisé</h3>
              <p className="text-gray-200">
                Nos formateurs experts vous accompagnent dans votre préparation à l'examen.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Taux de réussite élevé</h3>
              <p className="text-gray-200">
                95% de taux de réussite grâce à notre méthode pédagogique éprouvée.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prérequis et informations pratiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Prérequis</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  Cette formation s'adresse aux professionnels IT souhaitant acquérir les fondamentaux d'ITIL V4 :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Responsables IT et DSI</li>
                  <li>Chefs de projet informatique</li>
                  <li>Consultants en organisation IT</li>
                  <li>Techniciens et administrateurs système</li>
                  <li>Toute personne impliquée dans la gestion des services IT</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Aucun prérequis technique spécifique n'est requis.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Modalités d'inscription</h2>
              <div className="bg-white p-6 rounded-lg shadow-lg">
                <p className="text-gray-700 mb-4">
                  Pour toutes nos formations, merci de vous inscrire par courrier, par mail, par téléphone ou via le formulaire de contact sur notre site internet.
                </p>
                <p className="text-gray-700">
                  Votre demande d'inscription sera traitée dans un délai de 3 jours ouvrés. La formation ne pourra débuter qu'au moins après les 10 jours de traitement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact et accessibilité */}
      <section className="py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-kassiopee-gold">Contact</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-kassiopee-gold mr-4" />
                  <span className="text-gray-200">07 65 67 63 41</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-kassiopee-gold mr-4" />
                  <span className="text-gray-200">contact@kassiopee-formation.com</span>
                </div>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-kassiopee-gold">Accessibilité PSH</h2>
              <p className="text-gray-200">
                Le référent en la matière se tient à votre écoute pour évaluer puis préciser votre projet de formation et anticiper les éventuels aménagements à réaliser pour vous accueillir.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-6">
            Prêt à obtenir votre certification ITIL V4 ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez notre formation et maîtrisez les meilleures pratiques de gestion des services IT.
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
              Demander des informations
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

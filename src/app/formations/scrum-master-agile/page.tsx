import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Users, Award, CheckCircle, Calendar, Euro, Phone, Mail, Target } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Formation Le rôle et les missions du Scrum Master - Kassiopée Formation",
  description: "Formation spécialisée sur le rôle du Scrum Master dans une équipe Agile. Méthodologies, outils et bonnes pratiques.",
  keywords: "Scrum Master, Agile, méthodologies agiles, formation Scrum, équipe Agile, gestion de projet",
});

const objectifs = [
  "Comprendre le rôle et les responsabilités du Scrum Master",
  "Maîtriser les événements Scrum et leur facilitation",
  "Apprendre à accompagner l'équipe dans l'adoption des pratiques Agiles",
  "Développer les compétences de coaching et de facilitation",
  "Gérer les obstacles et améliorer la performance de l'équipe"
];

const competences = [
  "Animation des cérémonies Scrum",
  "Coaching d'équipe Agile",
  "Facilitation et résolution de conflits",
  "Gestion des obstacles (impediments)",
  "Amélioration continue des processus"
];

const ceremonies = [
  {
    nom: "Sprint Planning",
    description: "Planification du sprint avec l'équipe de développement"
  },
  {
    nom: "Daily Scrum",
    description: "Point quotidien de synchronisation de l'équipe"
  },
  {
    nom: "Sprint Review",
    description: "Présentation du travail réalisé aux parties prenantes"
  },
  {
    nom: "Sprint Retrospective",
    description: "Réflexion sur le processus et identification d'améliorations"
  }
];

const competencesScrum = [
  "Servant Leadership",
  "Facilitation",
  "Coaching",
  "Mentoring",
  "Enseignement",
  "Résolution de conflits"
];

export default function ScrumMasterAgilePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Méthodes Agiles - Scrum
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Le rôle et les missions du <span className="text-kassiopee-gold">Scrum Master</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Formation spécialisée sur le rôle du Scrum Master dans une équipe Agile. Méthodologies, outils et bonnes pratiques pour accompagner efficacement votre équipe.
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
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg"
                alt="Formation Scrum Master"
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
              <p className="text-gray-600">1900€ TTC</p>
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
                Cette formation vous permettra de maîtriser le rôle complexe et essentiel du Scrum Master dans une équipe Agile. Vous apprendrez à faciliter les processus Scrum et à accompagner votre équipe vers l'excellence.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Au-delà des aspects théoriques, cette formation met l'accent sur la pratique avec de nombreux exercices, jeux de rôles et mises en situation réelles.
              </p>
              <p className="text-lg text-gray-700">
                Vous développerez les compétences de leadership serviteur, de facilitation et de coaching nécessaires pour exceller dans ce rôle pivot de l'agilité.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les cérémonies Scrum */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Maîtrisez les Cérémonies Scrum
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {ceremonies.map((ceremonie, index) => (
              <div key={index} className="bg-kassiopee-navy text-white p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Target className="h-8 w-8 text-kassiopee-gold mr-3" />
                  <h3 className="text-xl font-bold">{ceremonie.nom}</h3>
                </div>
                <p className="text-gray-200">{ceremonie.description}</p>
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

      {/* Compétences du Scrum Master */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Compétences Clés du Scrum Master
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competencesScrum.map((competence, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <Award className="h-8 w-8 text-kassiopee-gold mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{competence}</h3>
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
                  <CheckCircle className="h-6 w-6 text-kassiopee-gold mr-3" />
                  <h3 className="font-semibold text-gray-900">{competence}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodes pédagogiques */}
      <section className="py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-kassiopee-gold">
            Approche Pédagogique Interactive
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Jeux de rôles</h3>
              <p className="text-gray-200">
                Mises en situation réelles pour pratiquer les techniques de facilitation et de coaching.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Target className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ateliers pratiques</h3>
              <p className="text-gray-200">
                Exercices concrets d'animation des cérémonies Scrum et de résolution de problèmes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Retours d'expérience</h3>
              <p className="text-gray-200">
                Partage d'expériences réelles et de bonnes pratiques par nos formateurs experts.
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
                  Cette formation s'adresse aux professionnels souhaitant exercer le rôle de Scrum Master :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Chefs de projet souhaitant évoluer vers l'agilité</li>
                  <li>Développeurs expérimentés</li>
                  <li>Consultants en organisation</li>
                  <li>Managers d'équipe</li>
                  <li>Toute personne impliquée dans des projets Agiles</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Une connaissance de base des méthodes Agiles est recommandée.
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
                  <span className="text-gray-200">direction@kassiopee-formation.com</span>
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
            Prêt à devenir un Scrum Master expert ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez notre formation et maîtrisez l'art de faciliter et d'accompagner les équipes Agiles.
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

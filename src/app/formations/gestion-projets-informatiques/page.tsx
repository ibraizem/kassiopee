import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Users, Award, CheckCircle, Calendar, Euro, Phone, Mail, BookOpen } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Formation Fondamentaux de la Gestion de Projets Informatiques - Kassiopée Formation",
  description: "Maîtrisez les méthodologies de gestion de projet IT : cycle en V, Agile, Scrum, Kanban. Formation complète avec études de cas pratiques.",
  keywords: "gestion de projets informatiques, Agile, Scrum, Kanban, cycle en V, formation IT, chef de projet",
});

const objectifs = [
  "Maîtriser les concepts fondamentaux de la gestion de projets informatiques",
  "Comprendre et appliquer différentes méthodologies de gestion de projet (traditionnelles et agiles)",
  "Utiliser les outils de planification, de suivi et de gestion des ressources adaptés aux projets IT",
  "Identifier et gérer les risques, les problèmes et les changements au cours d'un projet",
  "Assurer la clôture efficace d'un projet en capitalisant sur les leçons apprises"
];

const competences = [
  "Maîtrise des méthodologies de gestion de projet informatique",
  "Planification et suivi de projet",
  "Gestion des ressources et des parties prenantes",
  "Anticipation et gestion des risques",
  "Utilisation des outils de gestion de projet"
];

const methodes = [
  "Théorie : cours oral exécuté par nos formateurs et support visuel. Cours sur support papier, cahier de formation",
  "Pratique : Exposés interactifs, cas pratique, exercices imposés afin d'évaluer vos progrès et vos compétences",
  "Exposés interactifs : Présentations où vous engagez régulièrement les participants par des questions, des réflexions ou des débats",
  "Études de cas : Analyses de situations concrètes pour mettre en application les concepts théoriques",
  "Travail en sous-groupes : Les participants se répartissent en petits groupes pour résoudre des problèmes ou réaliser des activités spécifiques",
  "Brainstorming : Encourager les participants à générer des idées ou des solutions de manière créative",
  "Ateliers pratiques : Sessions où les participants mettent en pratique les compétences enseignées",
  "Mises en situation : Plonger les participants dans des situations réalistes pour développer des compétences pratiques",
  "Utilisation de supports visuels : Diapositives, vidéos, infographies, etc., pour illustrer et renforcer les points clés"
];

const evaluations = [
  "Questionnaire",
  "Passage à l'oral devant un jury",
  "Remise d'une attestation de suivi en fin de formation",
  "Études de Cas Complexes",
  "Analyse Critique de Projets",
  "Exercices Pratiques",
  "Études de Cas Avancées",
  "Passation d'une Évaluation Approfondie",
  "Evaluation finale"
];

const programme = [
  {
    jour: "Journée 1",
    titre: "Comprendre les fondamentaux de la gestion de projets informatiques",
    description: "Introduction aux concepts de base, cycle de vie des projets IT, rôles et responsabilités"
  },
  {
    jour: "Journée 2", 
    titre: "Méthodologies de gestion de projets informatiques",
    description: "Cycle en V, méthodologies Agiles, Scrum, Kanban, comparaison et choix des approches"
  },
  {
    jour: "Journée 3",
    titre: "Outils et techniques pour la gestion efficace de projets IT",
    description: "Planification, suivi, gestion des ressources, outils collaboratifs et de reporting"
  },
  {
    jour: "Journée 4",
    titre: "Bonnes pratiques et clôture de projet",
    description: "Gestion des risques, communication, capitalisation des connaissances, retour d'expérience"
  }
];

export default function GestionProjetsInformatiquesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Formation Professionnelle IT
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Fondamentaux de la <span className="text-kassiopee-gold">Gestion de Projets Informatiques</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Cette formation vous apportera les clés pour piloter efficacement un projet informatique, en maîtrisant les méthodologies adaptées et en adoptant les meilleures pratiques de gestion.
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
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Formation Gestion de Projets Informatiques"
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
              <p className="text-gray-600">4 jours (28 heures)</p>
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
              <p className="text-gray-600">2400€ TTC</p>
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
                Cette formation vous apportera les clés pour piloter efficacement un projet informatique, en maîtrisant les méthodologies adaptées et en adoptant les meilleures pratiques de gestion.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Vous développerez une vision structurée de la gestion de projet, apprendrez à choisir les approches les plus pertinentes (cycle en V, Agile, Scrum, Kanban) et découvrirez comment organiser, planifier et suivre chaque étape d'un projet, tout en anticipant les risques et en optimisant l'utilisation des ressources.
              </p>
              <p className="text-lg text-gray-700">
                À travers des études de cas et des mises en situation, vous serez en mesure d'élaborer une stratégie de gestion adaptée à vos besoins, de coordonner les équipes et d'assurer la réussite de vos projets informatiques, même dans un environnement complexe et évolutif.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Programme de formation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Programme de formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {programme.map((jour, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <BookOpen className="h-6 w-6 text-kassiopee-gold mr-3" />
                  <h3 className="text-xl font-bold text-kassiopee-navy">{jour.jour}</h3>
                </div>
                <h4 className="font-semibold text-gray-900 mb-3">{jour.titre}</h4>
                <p className="text-gray-700">{jour.description}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              href="#"
              className="inline-flex items-center text-kassiopee-navy font-semibold hover:text-kassiopee-lightblue transition-colors"
            >
              Télécharger ici le programme détaillé de la formation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
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

      {/* Compétences acquises */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Compétences acquises en fin de formation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {competences.map((competence, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg">
                <div className="flex items-center mb-3">
                  <Award className="h-6 w-6 text-kassiopee-gold mr-3" />
                  <h3 className="font-semibold text-gray-900">{competence}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodes pédagogiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Méthodes mobilisées
          </h2>
          <div className="bg-kassiopee-navy text-white p-8 rounded-xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {methodes.map((methode, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-kassiopee-gold text-kassiopee-navy p-1 rounded-full mr-3 mt-1 flex-shrink-0">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <p className="text-gray-200">{methode}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Modalités d'évaluation */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Modalités d'évaluation
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {evaluations.map((evaluation, index) => (
              <div key={index} className="bg-gray-50 p-4 rounded-lg text-center">
                <CheckCircle className="h-6 w-6 text-kassiopee-gold mx-auto mb-2" />
                <p className="font-semibold text-gray-900">{evaluation}</p>
              </div>
            ))}
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
                  Cette formation s'adresse aux chefs de projet, responsables IT, développeurs souhaitant évoluer vers des postes de gestion, et toute personne impliquée dans la conduite de projets informatiques.
                </p>
                <p className="text-gray-700">
                  Des connaissances de base en informatique sont requises pour suivre cette formation.
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
            Prêt à maîtriser la gestion de projets IT ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez notre formation et développez vos compétences en gestion de projets informatiques.
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

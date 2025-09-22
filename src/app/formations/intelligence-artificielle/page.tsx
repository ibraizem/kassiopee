import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Users, Award, CheckCircle, Calendar, Euro, Phone, Mail, Brain, Cpu, Database } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Formation en Intelligence Artificielle - Kassiopée Formation",
  description: "Introduction aux technologies d'IA, machine learning et applications pratiques en entreprise. Formation adaptée aux besoins actuels.",
  keywords: "intelligence artificielle, IA, machine learning, deep learning, formation IA, technologies IA",
});

const objectifs = [
  "Comprendre les concepts fondamentaux de l'Intelligence Artificielle",
  "Découvrir les différentes technologies et approches de l'IA",
  "Identifier les opportunités d'application de l'IA dans votre secteur",
  "Appréhender les enjeux éthiques et réglementaires de l'IA",
  "Élaborer une stratégie d'adoption de l'IA en entreprise"
];

const competences = [
  "Compréhension des technologies IA actuelles",
  "Identification des cas d'usage pertinents",
  "Évaluation des solutions IA du marché",
  "Gestion de projets IA",
  "Sensibilisation aux enjeux éthiques et légaux"
];

const technologies = [
  {
    nom: "Machine Learning",
    description: "Apprentissage automatique et algorithmes prédictifs",
    icon: Brain
  },
  {
    nom: "Deep Learning",
    description: "Réseaux de neurones profonds et apprentissage complexe",
    icon: Cpu
  },
  {
    nom: "Natural Language Processing",
    description: "Traitement et compréhension du langage naturel",
    icon: Database
  },
  {
    nom: "Computer Vision",
    description: "Analyse et reconnaissance d'images et vidéos",
    icon: Brain
  },
  {
    nom: "IA Générative",
    description: "Création de contenu par intelligence artificielle",
    icon: Cpu
  },
  {
    nom: "Robotique Intelligente",
    description: "Intégration de l'IA dans les systèmes robotiques",
    icon: Database
  }
];

const applications = [
  "Automatisation des processus métier",
  "Analyse prédictive et aide à la décision",
  "Personnalisation de l'expérience client",
  "Optimisation des opérations",
  "Détection de fraudes et anomalies",
  "Maintenance prédictive",
  "Chatbots et assistants virtuels",
  "Analyse de données massives"
];

const enjeux = [
  {
    titre: "Éthique de l'IA",
    description: "Développement responsable et équitable des systèmes IA"
  },
  {
    titre: "Protection des données",
    description: "Respect du RGPD et sécurisation des données personnelles"
  },
  {
    titre: "Transparence et explicabilité",
    description: "Compréhension des décisions prises par les systèmes IA"
  },
  {
    titre: "Impact sur l'emploi",
    description: "Accompagnement des transformations du marché du travail"
  }
];

export default function IntelligenceArtificiellePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Technologies Émergentes
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Formation en <span className="text-kassiopee-gold">Intelligence Artificielle</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Introduction aux technologies d'IA, machine learning et applications pratiques en entreprise. Formation adaptée aux besoins actuels du marché.
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
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg"
                alt="Formation Intelligence Artificielle"
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
              <p className="text-gray-600">5 jours (35 heures)</p>
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
              <p className="text-gray-600">2800€ TTC</p>
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
                Cette formation complète vous permettra de découvrir l'univers fascinant de l'Intelligence Artificielle et ses applications concrètes en entreprise.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Vous explorerez les différentes technologies IA, du machine learning traditionnel aux dernières innovations en IA générative, tout en comprenant leurs implications pratiques et stratégiques.
              </p>
              <p className="text-lg text-gray-700">
                À travers des cas d'usage concrets et des démonstrations pratiques, vous serez capable d'identifier les opportunités d'IA dans votre secteur et d'élaborer une stratégie d'adoption adaptée à votre organisation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Technologies IA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Technologies IA Couvertes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {technologies.map((tech, index) => {
              const IconComponent = tech.icon;
              return (
                <div key={index} className="bg-kassiopee-navy text-white p-6 rounded-lg">
                  <div className="flex items-center mb-4">
                    <IconComponent className="h-8 w-8 text-kassiopee-gold mr-3" />
                    <h3 className="text-xl font-bold">{tech.nom}</h3>
                  </div>
                  <p className="text-gray-200">{tech.description}</p>
                </div>
              );
            })}
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

      {/* Applications pratiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Applications Pratiques de l'IA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {applications.map((application, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-lg text-center">
                <Brain className="h-8 w-8 text-kassiopee-gold mx-auto mb-3" />
                <h3 className="font-semibold text-gray-900">{application}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enjeux et défis */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Enjeux et Défis de l'IA
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {enjeux.map((enjeu, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-xl font-bold text-kassiopee-navy mb-4">{enjeu.titre}</h3>
                <p className="text-gray-700">{enjeu.description}</p>
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

      {/* Approche pédagogique */}
      <section className="py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-kassiopee-gold">
            Approche Pédagogique Innovante
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Brain className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Démonstrations pratiques</h3>
              <p className="text-gray-200">
                Découverte des outils IA à travers des démonstrations concrètes et interactives.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Études de cas sectoriels</h3>
              <p className="text-gray-200">
                Analyse d'applications IA réussies dans différents secteurs d'activité.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Cpu className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Ateliers stratégiques</h3>
              <p className="text-gray-200">
                Élaboration de votre propre stratégie d'adoption de l'IA en entreprise.
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
                  Cette formation s'adresse aux professionnels souhaitant comprendre et exploiter l'IA :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Dirigeants et décideurs</li>
                  <li>Responsables IT et innovation</li>
                  <li>Chefs de projet digital</li>
                  <li>Consultants en transformation</li>
                  <li>Professionnels IT curieux des nouvelles technologies</li>
                </ul>
                <p className="text-gray-700 mt-4">
                  Aucun prérequis technique spécifique en programmation n'est requis.
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
                  <span className="text-gray-200">07 43 67 87 68</span>
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
            Prêt à explorer l'avenir avec l'IA ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez notre formation et découvrez comment l'Intelligence Artificielle peut transformer votre activité.
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

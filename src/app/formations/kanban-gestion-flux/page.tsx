import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Users, Award, CheckCircle, Calendar, Euro, Phone, Mail, BarChart3, TrendingUp } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Formation Mise en place d'un système Kanban - Kassiopée Formation",
  description: "Formation pratique pour la gestion des flux de travail avec la méthode Kanban. Optimisation des processus et amélioration continue.",
  keywords: "Kanban, gestion des flux, amélioration continue, lean, agilité, optimisation processus",
});

const objectifs = [
  "Comprendre les principes fondamentaux de la méthode Kanban",
  "Apprendre à visualiser et optimiser les flux de travail",
  "Maîtriser la mise en place d'un système Kanban efficace",
  "Développer une culture d'amélioration continue",
  "Gérer les goulots d'étranglement et optimiser les performances"
];

const competences = [
  "Conception et mise en place de tableaux Kanban",
  "Gestion des flux de travail (WIP limits)",
  "Mesure et analyse des métriques Kanban",
  "Animation des réunions d'amélioration continue",
  "Optimisation des processus métier"
];

const principes = [
  {
    titre: "Commencer par ce que vous faites maintenant",
    description: "Kanban ne révolutionne pas, il améliore l'existant progressivement"
  },
  {
    titre: "Accepter de poursuivre avec les rôles et responsabilités actuels",
    description: "Pas de changement organisationnel brutal, évolution progressive"
  },
  {
    titre: "Respecter le processus actuel",
    description: "Partir de l'existant pour identifier les améliorations possibles"
  },
  {
    titre: "Encourager le leadership à tous les niveaux",
    description: "Favoriser l'initiative et l'amélioration continue par tous"
  }
];

const pratiques = [
  {
    nom: "Visualiser le flux de travail",
    description: "Rendre visible l'ensemble du processus de travail"
  },
  {
    nom: "Limiter le travail en cours (WIP)",
    description: "Contrôler la quantité de travail simultané pour optimiser le flux"
  },
  {
    nom: "Gérer le flux",
    description: "Surveiller et optimiser la circulation du travail"
  },
  {
    nom: "Rendre les politiques explicites",
    description: "Clarifier les règles et critères de passage entre étapes"
  },
  {
    nom: "Implémenter des boucles de feedback",
    description: "Mettre en place des mécanismes de retour d'information"
  },
  {
    nom: "Améliorer collaborativement",
    description: "Évoluer ensemble vers l'excellence opérationnelle"
  }
];

export default function KanbanGestionFluxPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Méthodes Agiles - Lean
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Mise en place d'un système <span className="text-kassiopee-gold">Kanban</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Formation pratique pour la gestion des flux de travail avec la méthode Kanban. Optimisation des processus et amélioration continue pour une meilleure performance.
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
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg"
                alt="Formation Kanban"
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
              <p className="text-gray-600">2 jours (14 heures)</p>
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
              <p className="text-gray-600">1200€ TTC</p>
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
                Cette formation pratique vous permettra de maîtriser la méthode Kanban pour optimiser la gestion des flux de travail dans votre organisation.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Vous apprendrez à visualiser votre travail, à identifier et éliminer les goulots d'étranglement, et à mettre en place une culture d'amélioration continue.
              </p>
              <p className="text-lg text-gray-700">
                À travers des exercices pratiques et des études de cas réels, vous serez capable de concevoir et déployer un système Kanban efficace adapté à votre contexte métier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Les 4 principes de Kanban */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Les 4 Principes Fondamentaux de Kanban
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principes.map((principe, index) => (
              <div key={index} className="bg-kassiopee-navy text-white p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <div className="bg-kassiopee-gold text-kassiopee-navy p-2 rounded-full mr-3">
                    <span className="font-bold text-sm">{index + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold">{principe.titre}</h3>
                </div>
                <p className="text-gray-200">{principe.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Les 6 pratiques */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Les 6 Pratiques Essentielles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pratiques.map((pratique, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-4">
                  <BarChart3 className="h-8 w-8 text-kassiopee-gold mr-3" />
                  <h3 className="font-bold text-gray-900">{pratique.nom}</h3>
                </div>
                <p className="text-gray-700">{pratique.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-white">
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

      {/* Bénéfices de Kanban */}
      <section className="py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-kassiopee-gold">
            Bénéfices de la Méthode Kanban
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Amélioration de la productivité</h3>
              <p className="text-gray-200">
                Réduction des temps de cycle et augmentation du débit de travail.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <BarChart3 className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Visibilité accrue</h3>
              <p className="text-gray-200">
                Transparence totale sur l'état d'avancement du travail et les blocages.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Collaboration renforcée</h3>
              <p className="text-gray-200">
                Amélioration de la communication et de la collaboration entre équipes.
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
                  Cette formation s'adresse aux professionnels souhaitant optimiser leurs processus :
                </p>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Gestionnaires de projet et d'équipe</li>
                  <li>Responsables opérationnels</li>
                  <li>Consultants en amélioration continue</li>
                  <li>Chefs d'équipe et superviseurs</li>
                  <li>Toute personne impliquée dans l'optimisation des processus</li>
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
            Prêt à optimiser vos flux de travail ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez notre formation Kanban et transformez votre façon de gérer le travail.
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

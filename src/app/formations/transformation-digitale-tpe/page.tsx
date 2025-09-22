import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, MapPin, Users, Award, CheckCircle, Calendar, Euro, Phone, Mail } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Formation Transformation Digitale pour TPE (RS6074) - Kassiopée Formation",
  description: "Formation certifiante RS6074 pour élaborer et piloter un plan d'action de transformation digitale adapté à votre TPE. Certification reconnue par France Compétences.",
  keywords: "transformation digitale, TPE, RS6074, France Compétences, digitalisation, plan d'action digital",
});

const objectifs = [
  "Analyser la situation et le contexte de l'entreprise en identifiant ses besoins, ses pratiques actuelles, ses ressources ou contraintes, ses enjeux et priorités",
  "Évaluer la capacité de l'organisation à évoluer vers la digitalisation de son activité, en appréciant son degré de maturité ainsi que sa capacité à gérer les différents impacts sur ses métiers",
  "Analyser les différents services (production – commercial – gestion...) et postes de l'organisation, en prenant en compte leurs modalités de fonctionnements, les processus mis en place",
  "Réaliser une analyse comparative des différents outils digitaux sur le marché en tenant compte des outils pouvant être adaptés aux personnes de situation de handicap",
  "Elaborer le plan d'action de transformation digitale de l'organisation, en y intégrant les différentes étapes d'implémentation des outils digitaux sélectionnés"
];

const competences = [
  "Savoir conseiller un client",
  "Accompagner un client lors du processus de vente",
  "Construire une relation de confiance avec le client",
  "Savoir traiter des objections",
  "Mettre en avant les caractéristiques d'un produit"
];

const methodes = [
  "Exposés interactifs : Présentations où vous engagez régulièrement les participants par des questions, des réflexions ou des débats",
  "Études de cas : Analyses de situations concrètes pour mettre en application les concepts théoriques",
  "Travail en sous-groupes : Les participants se répartissent en petits groupes pour résoudre des problèmes ou réaliser des activités spécifiques",
  "Brainstorming : Encourager les participants à générer des idées ou des solutions de manière créative",
  "Ateliers pratiques : Sessions où les participants mettent en pratique les compétences enseignées",
  "Mise en situation : Plonger les participants dans des situations réalistes pour développer des compétences pratiques",
  "Utilisation de supports visuels : diapositives, vidéos, infographies, etc., pour illustrer et renforcer les points clés"
];

export default function TransformationDigitalePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-full text-sm font-semibold inline-block mb-4">
                Certification RS6074 - France Compétences
              </div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Transformation Digitale pour <span className="text-kassiopee-gold">TPE</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                Notre formation vous enseignera les compétences essentielles pour élaborer et piloter un plan d'action de transformation digitale adapté à votre TPE.
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
                src="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
                alt="Formation Transformation Digitale"
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
              <p className="text-gray-600">28 heures (5 jours)</p>
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
              <p className="text-gray-600">3100€ TTC</p>
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
                Notre formation vous enseignera les compétences essentielles pour élaborer et piloter un plan d'action de transformation digitale adapté à votre TPE.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                Ensemble, nous développerons vos compétences stratégiques, votre compréhension des outils numériques et votre capacité à identifier les leviers digitaux les plus adaptés à votre activité.
              </p>
              <p className="text-lg text-gray-700">
                Au cours de cette formation, vous apprendrez à concevoir une feuille de route digitale efficace, à intégrer des solutions numériques pour optimiser vos processus, à améliorer votre visibilité en ligne, et bien plus encore. Vous serez en mesure de réagir face aux défis technologiques et d'adapter votre entreprise aux exigences du marché numérique.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Objectifs de la formation
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {objectifs.map((objectif, index) => (
              <div key={index} className="flex items-start">
                <div className="bg-kassiopee-gold text-kassiopee-navy p-1.5 sm:p-2 rounded-full mr-3 sm:mr-4 mt-1 flex-shrink-0">
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
                </div>
                <p className="text-gray-700 text-sm sm:text-base">{objectif}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compétences acquises */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-8 sm:mb-12 text-center">
            Compétences acquises en fin de formation
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {competences.map((competence, index) => (
              <div key={index} className="bg-white p-4 sm:p-6 rounded-lg shadow-lg">
                <div className="flex items-center mb-3">
                  <Award className="h-5 w-5 sm:h-6 sm:w-6 text-kassiopee-gold mr-2 sm:mr-3" />
                  <h3 className="font-semibold text-gray-900 text-sm sm:text-base">{competence}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodes pédagogiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Méthodes pédagogiques
          </h2>
          <div className="bg-kassiopee-navy text-white p-8 rounded-xl">
            <h3 className="text-xl font-bold mb-6 text-kassiopee-gold">Formation en présentiel mobilisant les méthodes suivantes :</h3>
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
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-12 text-center">
            Modalités d'évaluation
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Mise en situation professionnelle</h3>
                <p className="text-gray-700 mb-4">
                  Mise en situation professionnelle portant sur la conception et la mise en place d'un plan d'action de transformation digitale avec soutenance orale et remise d'un rapport écrit.
                </p>
                <p className="text-gray-700">
                  À partir des caractéristiques spécifiques et des besoins de l'entreprise TPE du candidat, (transformation des activités métiers en activités digitalisées pour répondre aux nouveaux besoins du marché et usages des clients, réduction des coûts, optimisation des processus internes…), le candidat présente ses problématiques et propose des objectifs opérationnels liés à une transformation digitale de ses activités.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prérequis et informations pratiques */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Prérequis</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  La certification s'adresse à des entrepreneurs et dirigeants de TPE souhaitant digitaliser leurs activités par la mise en œuvre d'un plan de transformation digitale pour des entreprises existant depuis plus de 2 ans.
                </p>
                <p className="text-gray-700">
                  Les prérequis sont vérifiés au décours d'un entretien de motivation et des documents complémentaires et éléments de preuves peuvent être demandés.
                </p>
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Modalités d'inscription</h2>
              <div className="bg-gray-50 p-6 rounded-lg">
                <p className="text-gray-700 mb-4">
                  Pour toutes nos formations, merci de vous inscrire par courrier, par mail, par téléphone ou via le formulaire de contact sur notre site internet.
                </p>
                <p className="text-gray-700 mb-4">
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
            Prêt à transformer votre entreprise ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez notre formation certifiante et donnez un nouvel élan digital à votre TPE.
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

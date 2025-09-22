import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Award, CheckCircle, Download, ExternalLink, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formation Réussir son Entretien d\'Embauche - Convaincre en Face-à-Face | Kassiopée Formation',
  description: 'Formation 1 jour pour apprendre à réussir ses entretiens d\'embauche. Maîtrisez votre présentation, gérez votre stress et répondez avec assurance. Éligible CPF.',
  keywords: 'formation entretien embauche, réussir entretien, préparation entretien, recherche emploi, reconversion professionnelle, CPF',
  openGraph: {
    title: 'Formation Entretien d\'Embauche - Kassiopée Formation',
    description: 'Apprenez à convaincre en face-à-face et réussir vos entretiens d\'embauche. Formation pratique avec mises en situation réelles.',
    images: ['/images/formations/entretien-embauche.jpg'],
  },
};

const formationData = {
  titre: "Réussir son Entretien d'Embauche",
  sousTitre: "Convaincre en Face-à-Face : L'Entretien Comme Tremplin",
  duree: "1 jour (6h à 7h)",
  prix: 450,
  modalite: "Présentiel ou distanciel",
  niveau: "Tous niveaux",
  cpfEligible: true,
  participants: "8 participants maximum",
  
  objectifs: [
    "Apprendre à se présenter de manière convaincante",
    "Gérer le stress et les émotions pendant l'entretien", 
    "Répondre aux questions de manière confiante et structurée",
    "Adopter la bonne attitude et communication non verbale",
    "Se préparer efficacement à tout type d'entretien"
  ],

  publicCible: [
    "Toute personne préparant un entretien d'embauche",
    "Candidats en recherche de premier emploi",
    "Professionnels en reconversion",
    "Personnes souhaitant évoluer professionnellement"
  ],

  programme: [
    {
      module: "Partie 1 : Bien se préparer",
      duree: "2h",
      contenu: [
        "Les types d'entretien (physique, téléphone, visio)",
        "Que faut-il connaître sur l'entreprise ?",
        "Préparer sa présentation : le pitch personnel (30 sec à 2 min)",
        "Les questions classiques à préparer",
        "Comment répondre à : \"Parlez-moi de vous ?\", \"Pourquoi vous ?\", \"Quels sont vos défauts ?\""
      ]
    },
    {
      module: "Partie 2 : Adopter la bonne attitude",
      duree: "2h30",
      contenu: [
        "Communication non verbale : regard, posture, mains, ton",
        "Gérer le trac et les silences",
        "Être honnête sans se dévaloriser",
        "Valoriser ses compétences sans arrogance",
        "Adapter son discours au type de recruteur"
      ]
    },
    {
      module: "Partie 3 : S'entraîner en conditions réelles",
      duree: "2h30",
      contenu: [
        "Mises en situation individuelles ou en binômes",
        "Simulations enregistrées (optionnelles)",
        "Débriefing collectif et individuel",
        "Recommandations personnalisées"
      ]
    }
  ],

  bonus: [
    "Fiche \"Questions types\" avec exemples de bonnes réponses",
    "Liste de questions à poser au recruteur",
    "Modèle de pitch professionnel",
    "Guide de préparation pré-entretien"
  ],

  prerequis: "Aucun prérequis. Formation accessible à tous.",
  
  modalitesPedagogiques: [
    "Apports théoriques et méthodologiques",
    "Mises en situation et jeux de rôles",
    "Simulations d'entretiens filmées",
    "Débriefings individuels et collectifs",
    "Supports pédagogiques fournis"
  ],

  evaluation: "Évaluation continue par les mises en situation et la simulation d'entretien personnalisée.",
  
  formateur: "Consultant RH expert en recrutement et techniques d'entretien, 10+ ans d'expérience en cabinet de recrutement.",
  
  delaiAcces: "Inscription possible jusqu'à 48h avant le début de la formation.",
  
  accessibilite: "Formation accessible aux personnes en situation de handicap. Nous contacter pour étudier les modalités d'accueil."
};

export default function FormationEntretienEmbauche() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-kassiopee-navy via-kassiopee-navy to-blue-900 text-white py-16 sm:py-20">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="h-4 w-4 mr-2" />
                Formation Développement Personnel
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                {formationData.titre}
              </h1>
              
              <p className="text-xl sm:text-2xl text-kassiopee-gold font-semibold mb-6">
                {formationData.sousTitre}
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-kassiopee-gold" />
                  <span>{formationData.duree}</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 mr-2 text-kassiopee-gold" />
                  <span>{formationData.participants}</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="h-5 w-5 mr-2 text-kassiopee-gold" />
                  <span>CPF Éligible</span>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/inscription"
                  className="inline-flex items-center justify-center bg-kassiopee-gold text-kassiopee-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors"
                >
                  S'inscrire maintenant
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-kassiopee-navy transition-colors"
                >
                  Nous contacter
                </Link>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-video rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg"
                  alt="Formation entretien d'embauche"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Informations clés */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-6">
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Clock className="h-8 w-8 text-kassiopee-navy mx-auto mb-3" />
              <h3 className="font-bold text-kassiopee-navy mb-2">Durée</h3>
              <p className="text-gray-600">{formationData.duree}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Users className="h-8 w-8 text-kassiopee-navy mx-auto mb-3" />
              <h3 className="font-bold text-kassiopee-navy mb-2">Participants</h3>
              <p className="text-gray-600">{formationData.participants}</p>
            </div>
            <div className="text-center p-6 bg-gray-50 rounded-lg">
              <Award className="h-8 w-8 text-kassiopee-navy mx-auto mb-3" />
              <h3 className="font-bold text-kassiopee-navy mb-2">Niveau</h3>
              <p className="text-gray-600">{formationData.niveau}</p>
            </div>
            <div className="text-center p-6 bg-kassiopee-gold rounded-lg">
              <CheckCircle className="h-8 w-8 text-kassiopee-navy mx-auto mb-3" />
              <h3 className="font-bold text-kassiopee-navy mb-2">Financement</h3>
              <p className="text-kassiopee-navy font-semibold">CPF Éligible</p>
            </div>
          </div>
        </div>
      </section>

      {/* Objectifs */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Objectifs de la formation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              À la fin de cette formation, vous maîtriserez toutes les clés pour réussir vos entretiens d'embauche.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {formationData.objectifs.map((objectif, index) => (
              <div key={index} className="flex items-start bg-white p-6 rounded-lg shadow-sm">
                <CheckCircle className="h-6 w-6 text-kassiopee-gold mr-4 mt-1 flex-shrink-0" />
                <p className="text-gray-700">{objectif}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programme détaillé */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Programme détaillé
            </h2>
            <p className="text-xl text-gray-600">
              Une journée intensive avec mises en situation réelles pour maîtriser l'art de l'entretien
            </p>
          </div>
          
          <div className="space-y-8">
            {formationData.programme.map((module, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-8">
                <div className="flex items-center mb-6">
                  <div className="bg-kassiopee-navy text-white w-8 h-8 rounded-full flex items-center justify-center font-bold mr-4">
                    {index + 1}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-kassiopee-navy">{module.module}</h3>
                    <p className="text-kassiopee-gold font-semibold">{module.duree}</p>
                  </div>
                </div>
                
                <ul className="grid md:grid-cols-2 gap-3">
                  {module.contenu.map((item, idx) => (
                    <li key={idx} className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-kassiopee-gold mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bonus */}
      <section className="py-16 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">
              🎁 Bonus inclus
            </h2>
            <p className="text-xl text-gray-200">
              Des outils pratiques pour optimiser vos entretiens
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {formationData.bonus.map((bonus, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
                <Download className="h-8 w-8 text-kassiopee-gold mx-auto mb-4" />
                <p className="font-semibold">{bonus}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-kassiopee-navy mb-6">
            Prêt à décrocher le poste de vos rêves ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-8">
            Rejoignez notre formation et apprenez à convaincre en face-à-face lors de vos entretiens d'embauche.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Link
              href="/inscription"
              className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center"
            >
              S'INSCRIRE MAINTENANT
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="tel:0743678768"
              className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-kassiopee-navy hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <Phone className="mr-2 h-5 w-5" />
              07 43 67 87 68
            </Link>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.moncompteformation.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-kassiopee-navy hover:text-kassiopee-navy/80 font-semibold"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              Financer avec Mon Compte Formation
            </Link>
            <Link
              href="/financement-cpf"
              className="inline-flex items-center text-kassiopee-navy hover:text-kassiopee-navy/80 font-semibold"
            >
              <CheckCircle className="mr-2 h-4 w-4" />
              Guide financement CPF
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

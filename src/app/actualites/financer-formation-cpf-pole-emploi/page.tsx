import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, CheckCircle, Euro, FileText, Phone } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Comment Financer sa Formation : CPF, Pôle Emploi et Autres Aides - Kassiopée Formation",
  description: "Découvrez tous les dispositifs de financement disponibles pour votre formation professionnelle et les démarches à suivre pour obtenir une prise en charge.",
  keywords: "financement formation, CPF, Pôle Emploi, aides formation, financer reconversion, dispositifs financement",
});

const dispositifsFinancement = [
  {
    nom: "CPF (Compte Personnel de Formation)",
    montant: "Jusqu'à 5 000€",
    public: "Tous les actifs",
    description: "Chaque personne dispose d'un compte crédité automatiquement chaque année.",
    avantages: [
      "Utilisable à tout moment",
      "Cumulable avec d'autres aides",
      "Démarches 100% en ligne",
      "Pas d'accord employeur nécessaire"
    ],
    demarches: [
      "Se connecter sur moncompteformation.gouv.fr",
      "Vérifier son solde disponible",
      "Rechercher sa formation",
      "S'inscrire directement en ligne"
    ]
  },
  {
    nom: "Pôle Emploi (AIF - Aide Individuelle à la Formation)",
    montant: "Jusqu'à 100% du coût",
    public: "Demandeurs d'emploi",
    description: "Financement pour les formations non prises en charge par d'autres dispositifs.",
    avantages: [
      "Prise en charge totale possible",
      "Maintien des allocations",
      "Accompagnement personnalisé",
      "Formations certifiantes prioritaires"
    ],
    demarches: [
      "Présenter le projet à son conseiller",
      "Constituer le dossier de demande",
      "Attendre la validation",
      "Commencer la formation"
    ]
  },
  {
    nom: "Transition Pro (ex-CIF)",
    montant: "Jusqu'à 24 000€/an",
    public: "Salariés en CDI",
    description: "Congé de transition professionnelle pour se reconvertir.",
    avantages: [
      "Maintien du salaire",
      "Protection du contrat de travail",
      "Formations longues possibles",
      "Accompagnement complet"
    ],
    demarches: [
      "Justifier de 2 ans d'ancienneté",
      "Déposer sa demande 4 mois avant",
      "Obtenir l'accord de l'employeur",
      "Validation par Transition Pro"
    ]
  },
  {
    nom: "Plan de Développement des Compétences",
    montant: "100% pris en charge",
    public: "Salariés",
    description: "Formation à l'initiative de l'employeur dans le cadre du plan de formation.",
    avantages: [
      "Aucun coût pour le salarié",
      "Formation sur temps de travail",
      "Maintien du salaire",
      "Évolution professionnelle"
    ],
    demarches: [
      "Faire la demande à son employeur",
      "Justifier l'intérêt pour l'entreprise",
      "Obtenir l'accord de la direction",
      "Planifier la formation"
    ]
  }
];

const aidesComplementaires = [
  {
    nom: "Conseil Régional",
    description: "Chèques formation, bourses d'études, aides spécifiques selon la région",
    montant: "Variable selon région"
  },
  {
    nom: "OPCO (Opérateurs de Compétences)",
    description: "Financement pour les entreprises de moins de 50 salariés",
    montant: "Jusqu'à 100%"
  },
  {
    nom: "Agefiph",
    description: "Aides spécifiques pour les personnes en situation de handicap",
    montant: "Jusqu'à 5 000€"
  },
  {
    nom: "Pôle Emploi - AFPR/POE",
    description: "Action de Formation Préalable au Recrutement ou Préparation Opérationnelle à l'Emploi",
    montant: "Jusqu'à 8 000€"
  }
];

const etapesFinancement = [
  {
    etape: "1. Définir son projet",
    description: "Clarifiez vos objectifs professionnels et choisissez votre formation",
    duree: "1-2 semaines"
  },
  {
    etape: "2. Identifier les financements",
    description: "Selon votre statut, identifiez les dispositifs applicables",
    duree: "1 semaine"
  },
  {
    etape: "3. Vérifier l'éligibilité",
    description: "Assurez-vous que votre formation est éligible aux financements choisis",
    duree: "Quelques jours"
  },
  {
    etape: "4. Constituer le dossier",
    description: "Rassemblez tous les documents nécessaires",
    duree: "1-2 semaines"
  },
  {
    etape: "5. Déposer la demande",
    description: "Soumettez votre dossier dans les délais impartis",
    duree: "1 jour"
  },
  {
    etape: "6. Suivre le dossier",
    description: "Attendez la réponse et relancez si nécessaire",
    duree: "2-8 semaines"
  }
];

export default function FinancerFormationPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/actualites" className="text-kassiopee-navy hover:text-kassiopee-lightblue">
              ← Retour aux actualités
            </Link>
          </nav>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-kassiopee-gold text-kassiopee-navy px-3 py-1 rounded-full text-sm font-semibold">
                Conseils de Reconversion
              </span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Pierre Durand
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  28 novembre 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  10 min de lecture
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Comment Financer sa Formation : CPF, Pôle Emploi et Autres Aides
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Vous avez trouvé la formation de vos rêves mais vous vous demandez comment la financer ? Bonne nouvelle : de nombreux dispositifs existent pour vous aider. Découvrez tous les financements disponibles et les démarches à suivre.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-12">
            <Image
              src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
              alt="Financer sa formation professionnelle"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le financement d'une formation professionnelle peut sembler complexe, mais rassurez-vous : <strong>il existe de nombreuses solutions adaptées à chaque situation</strong>. Que vous soyez salarié, demandeur d'emploi ou en reconversion, des dispositifs sont là pour vous accompagner.
            </p>
            
            <div className="bg-kassiopee-gold p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-kassiopee-navy mb-4">💡 Le saviez-vous ?</h3>
              <p className="text-kassiopee-navy">
                <strong>87% des formations professionnelles</strong> peuvent être financées en totalité ou en partie grâce aux dispositifs publics. Il suffit de connaître les bonnes démarches !
              </p>
            </div>
          </div>

          {/* Dispositifs principaux */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Les 4 Dispositifs <span className="text-kassiopee-navy">Principaux</span>
            </h2>
            
            <div className="space-y-12">
              {dispositifsFinancement.map((dispositif, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-2xl font-bold text-kassiopee-navy">{dispositif.nom}</h3>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-kassiopee-gold">{dispositif.montant}</div>
                      <div className="text-sm text-gray-600">{dispositif.public}</div>
                    </div>
                  </div>
                  
                  <p className="text-lg text-gray-700 mb-6">{dispositif.description}</p>
                  
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                        Avantages
                      </h4>
                      <ul className="space-y-2">
                        {dispositif.avantages.map((avantage, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="text-green-500 mr-2">•</span>
                            {avantage}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                        <FileText className="h-5 w-5 text-blue-500 mr-2" />
                        Démarches
                      </h4>
                      <ol className="space-y-2">
                        {dispositif.demarches.map((demarche, idx) => (
                          <li key={idx} className="flex items-start text-gray-700">
                            <span className="bg-blue-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs mr-2 mt-0.5 flex-shrink-0">
                              {idx + 1}
                            </span>
                            {demarche}
                          </li>
                        ))}
                      </ol>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Aides complémentaires */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Aides <span className="text-kassiopee-navy">Complémentaires</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {aidesComplementaires.map((aide, index) => (
                <div key={index} className="bg-white border border-gray-200 p-6 rounded-xl shadow-lg">
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-bold text-kassiopee-navy">{aide.nom}</h4>
                    <span className="text-sm font-semibold text-kassiopee-gold">{aide.montant}</span>
                  </div>
                  <p className="text-gray-700 text-sm">{aide.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Étapes pour obtenir un financement */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les 6 Étapes pour Obtenir un <span className="text-kassiopee-navy">Financement</span>
            </h2>
            
            <div className="space-y-6">
              {etapesFinancement.map((etape, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-kassiopee-navy text-white p-3 rounded-full mr-6 mt-1 flex-shrink-0">
                    <span className="font-bold">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-white border-l-4 border-kassiopee-gold p-6 rounded-r-xl shadow-lg">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-gray-900">{etape.etape}</h4>
                        <span className="text-sm text-gray-500 font-semibold">{etape.duree}</span>
                      </div>
                      <p className="text-gray-700">{etape.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="bg-kassiopee-navy text-white p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-kassiopee-gold mb-6">
              💡 Nos Conseils Pratiques
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-bold text-kassiopee-gold mb-3">✅ À faire</h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Anticiper : commencez vos démarches 3-6 mois avant</li>
                  <li>• Vérifier l'éligibilité de votre formation</li>
                  <li>• Constituer un dossier complet</li>
                  <li>• Combiner plusieurs dispositifs si possible</li>
                  <li>• Garder tous les justificatifs</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-kassiopee-gold mb-3">❌ À éviter</h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Attendre la dernière minute</li>
                  <li>• Négliger les délais de traitement</li>
                  <li>• Oublier de relancer si pas de réponse</li>
                  <li>• Choisir une formation non éligible</li>
                  <li>• Abandonner au premier refus</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Comment Kassiopée vous aide */}
          <div className="bg-kassiopee-gold p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-6">
              Comment Kassiopée Formation Vous Accompagne
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-kassiopee-navy mb-2">🎯 Conseil personnalisé</h4>
                <p className="text-gray-700 text-sm">Nous vous aidons à identifier les financements adaptés à votre situation</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-kassiopee-navy mb-2">📋 Aide aux démarches</h4>
                <p className="text-gray-700 text-sm">Accompagnement dans la constitution de vos dossiers</p>
              </div>
              <div className="bg-white p-4 rounded-lg">
                <h4 className="font-bold text-kassiopee-navy mb-2">✅ Formations éligibles</h4>
                <p className="text-gray-700 text-sm">Toutes nos formations sont éligibles aux principaux dispositifs</p>
              </div>
            </div>

            <div className="text-center">
              <p className="text-kassiopee-navy mb-6">
                <strong>Notre équipe vous accompagne gratuitement</strong> dans vos démarches de financement. 
                N'hésitez pas à nous contacter pour un conseil personnalisé !
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/contact"
                  className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Nous contacter pour un conseil
                </Link>
                <Link
                  href="/formations"
                  className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
                >
                  Découvrir nos formations éligibles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Articles similaires */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Articles <span className="text-kassiopee-navy">similaires</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/actualites/reconversion-metiers-passion-2024" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
                    alt="Reconversion métiers passion"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                    5 Métiers Passion qui Recrutent
                  </h3>
                  <p className="text-gray-600">Découvrez les métiers de la beauté qui offrent de réelles opportunités...</p>
                </div>
              </article>
            </Link>
            
            <Link href="/actualites/cap-esthetique-candidat-libre-guide" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg"
                    alt="CAP Esthétique candidat libre"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                    CAP Esthétique en Candidat Libre
                  </h3>
                  <p className="text-gray-600">Le guide complet pour réussir son CAP...</p>
                </div>
              </article>
            </Link>
            
            <Link href="/actualites/temoignage-sophie-prothesiste-ongulaire" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg"
                    alt="Témoignage Sophie"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                    De Comptable à Prothésiste Ongulaire
                  </h3>
                  <p className="text-gray-600">Le parcours inspirant de Sophie...</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

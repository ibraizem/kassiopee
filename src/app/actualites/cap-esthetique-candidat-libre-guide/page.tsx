import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, CheckCircle, AlertTriangle, BookOpen, Target } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "CAP Esthétique-Cosmétique en Candidat Libre : Le Guide Complet Kassiopée",
  description: "Passer son CAP Esthétique en candidat libre est un excellent choix de flexibilité. Découvrez comment s'organiser, quel programme suivre et maximiser vos chances de réussite.",
  keywords: "cap esthétique candidat libre, préparer cap esthétique, formation cap esthétique, programme cap esthétique, examen esthétique",
});

const epreuvesCAP = [
  {
    nom: "EP1 - Techniques esthétiques du visage, des mains et des pieds",
    type: "Pratique",
    duree: "2h30",
    coefficient: "7",
    description: "Soins du visage, manucurie, beauté des pieds, épilation"
  },
  {
    nom: "EP2 - Techniques esthétiques liées aux phanères",
    type: "Pratique", 
    duree: "3h",
    coefficient: "7",
    description: "Épilation, coloration des cils et sourcils, maquillage"
  },
  {
    nom: "EP3 - Conduite d'un institut de beauté et de bien-être",
    type: "Écrite",
    duree: "4h",
    coefficient: "4",
    description: "Vente, conseil, gestion, réglementation"
  }
];

const piegesEviter = [
  {
    titre: "Sous-estimer la partie pratique",
    description: "Beaucoup de candidats libres négligent l'entraînement pratique. Il est essentiel de s'exercer régulièrement sur modèles.",
    solution: "Pratiquez au minimum 3h par semaine sur différents modèles"
  },
  {
    titre: "Négliger les matières générales",
    description: "Si vous n'avez pas le niveau bac, vous devez passer les épreuves générales (français, maths, histoire-géo).",
    solution: "Vérifiez vos dispenses et préparez-vous en conséquence"
  },
  {
    titre: "Mauvaise gestion du temps",
    description: "L'organisation est cruciale quand on prépare seul son CAP.",
    solution: "Établissez un planning de révision strict et tenez-vous-y"
  },
  {
    titre: "Manque de matériel professionnel",
    description: "L'examen nécessite du matériel professionnel de qualité.",
    solution: "Investissez dans du matériel conforme aux exigences de l'examen"
  }
];

const planningType = [
  {
    periode: "6 mois avant l'examen",
    objectifs: [
      "Inscription à l'examen",
      "Acquisition du matériel",
      "Début de la théorie (anatomie, cosmétologie)"
    ]
  },
  {
    periode: "4 mois avant l'examen", 
    objectifs: [
      "Approfondissement théorique",
      "Début de la pratique intensive",
      "Recherche de modèles"
    ]
  },
  {
    periode: "2 mois avant l'examen",
    objectifs: [
      "Révisions intensives",
      "Entraînements pratiques quotidiens",
      "Simulations d'examen"
    ]
  },
  {
    periode: "1 mois avant l'examen",
    objectifs: [
      "Révisions ciblées",
      "Préparation mentale",
      "Vérification du matériel"
    ]
  }
];

export default function CAPEsthetiqueCandidatLibrePage() {
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
                Conseils Pédagogiques
              </span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Marie Dubois
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  10 décembre 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  12 min de lecture
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              CAP Esthétique-Cosmétique en Candidat Libre : Le Guide Complet
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Passer son CAP Esthétique en candidat libre est un excellent choix de flexibilité. Mais comment s'organiser ? Quel programme suivre ? Kassiopée Formation vous explique tout pour bien préparer votre examen et maximiser vos chances de réussite.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-12">
            <Image
              src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg"
              alt="CAP Esthétique candidat libre"
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
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Qu'est-ce que le candidat libre ?
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le <strong>candidat libre</strong> (ou candidat individuel) est une personne qui se présente à un examen sans suivre une formation dans un établissement scolaire. Pour le CAP Esthétique, cela signifie que vous préparez l'examen de manière autonome, à votre rythme.
            </p>
            
            <div className="bg-kassiopee-navy text-white p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-kassiopee-gold mb-4">✅ Avantages du candidat libre</h3>
              <ul className="space-y-2">
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-kassiopee-gold mr-2" /> Flexibilité totale dans l'organisation</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-kassiopee-gold mr-2" /> Coût réduit (pas de frais de scolarité)</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-kassiopee-gold mr-2" /> Possibilité de continuer à travailler</li>
                <li className="flex items-center"><CheckCircle className="h-5 w-5 text-kassiopee-gold mr-2" /> Rythme personnalisé</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-8">
              <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <AlertTriangle className="h-6 w-6 mr-2" />
                ⚠️ Inconvénients à connaître
              </h3>
              <ul className="space-y-2 text-red-700">
                <li>• Aucun encadrement pédagogique</li>
                <li>• Difficulté à trouver des lieux de pratique</li>
                <li>• Risque de découragement</li>
                <li>• Pas d'aide pour trouver des stages</li>
              </ul>
            </div>
          </div>

          {/* Programme officiel */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Le Programme Officiel du CAP Esthétique
            </h2>
            
            <div className="space-y-6">
              {epreuvesCAP.map((epreuve, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-xl">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-kassiopee-navy">{epreuve.nom}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`px-3 py-1 rounded-full font-semibold ${
                        epreuve.type === 'Pratique' ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                      }`}>
                        {epreuve.type}
                      </span>
                      <span className="text-gray-600">Durée: {epreuve.duree}</span>
                      <span className="text-gray-600">Coef: {epreuve.coefficient}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{epreuve.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Planning de préparation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Comment se Préparer Efficacement ?
            </h2>
            
            <div className="bg-kassiopee-gold p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-kassiopee-navy mb-4">
                📅 Planning de Préparation Recommandé
              </h3>
              <p className="text-kassiopee-navy">
                Voici un planning type pour optimiser votre préparation sur 6 mois :
              </p>
            </div>

            <div className="space-y-6">
              {planningType.map((periode, index) => (
                <div key={index} className="bg-white border-l-4 border-kassiopee-navy p-6 rounded-r-xl shadow-lg">
                  <h4 className="text-lg font-bold text-kassiopee-navy mb-3">{periode.periode}</h4>
                  <ul className="space-y-2">
                    {periode.objectifs.map((objectif, idx) => (
                      <li key={idx} className="flex items-center text-gray-700">
                        <Target className="h-4 w-4 text-kassiopee-gold mr-2" />
                        {objectif}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Pièges à éviter */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les Pièges à Éviter Absolument
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {piegesEviter.map((piege, index) => (
                <div key={index} className="bg-red-50 p-6 rounded-xl border border-red-200">
                  <h4 className="text-lg font-bold text-red-800 mb-3 flex items-center">
                    <AlertTriangle className="h-5 w-5 mr-2" />
                    {piege.titre}
                  </h4>
                  <p className="text-red-700 mb-4">{piege.description}</p>
                  <div className="bg-green-100 p-3 rounded-lg">
                    <p className="text-green-800 font-semibold">💡 Solution :</p>
                    <p className="text-green-700">{piege.solution}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comment Kassiopée peut aider */}
          <div className="bg-kassiopee-navy text-white p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-kassiopee-gold mb-6">
              Comment Kassiopée Formation Peut Vous Aider ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-kassiopee-gold mb-3">🎯 Accompagnement personnalisé</h4>
                <p className="text-gray-200">Même en candidat libre, bénéficiez d'un suivi pédagogique adapté à votre rythme.</p>
              </div>
              <div>
                <h4 className="font-bold text-kassiopee-gold mb-3">📚 Supports de qualité</h4>
                <p className="text-gray-200">Cours complets, fiches techniques et exercices d'entraînement.</p>
              </div>
              <div>
                <h4 className="font-bold text-kassiopee-gold mb-3">🏢 Accès aux plateaux techniques</h4>
                <p className="text-gray-200">Possibilité de s'entraîner dans nos centres avec du matériel professionnel.</p>
              </div>
              <div>
                <h4 className="font-bold text-kassiopee-gold mb-3">👥 Réseau de modèles</h4>
                <p className="text-gray-200">Aide pour trouver des modèles pour vos entraînements pratiques.</p>
              </div>
            </div>

            <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-lg">
              <p className="font-semibold mb-2">🎓 Notre formation au CAP Esthétique vous offre :</p>
              <ul className="space-y-1 text-sm">
                <li>• Programme sur-mesure adapté aux candidats libres</li>
                <li>• Simulations d'examen en conditions réelles</li>
                <li>• Suivi jusqu'à l'obtention du diplôme</li>
                <li>• Taux de réussite de 94% en 2024</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-kassiopee-gold p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">
              Prêt(e) à Réussir Votre CAP Esthétique ?
            </h2>
            <p className="text-kassiopee-navy mb-6">
              Notre formation au CAP Esthétique vous offre tout le nécessaire pour réussir, même en candidat libre. Bénéficiez d'un programme sur-mesure et d'un accompagnement personnalisé.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/formations"
                className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center"
              >
                Découvrir nos formations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
              >
                Contactez-nous pour un programme sur-mesure
              </Link>
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
                    5 Métiers Passion qui Recrutent en 2024
                  </h3>
                  <p className="text-gray-600">Découvrez les métiers de la beauté qui offrent de réelles opportunités...</p>
                </div>
              </article>
            </Link>
            
            <Link href="/actualites/financer-formation-cpf-pole-emploi" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                    alt="Financer sa formation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                    Comment Financer sa Formation
                  </h3>
                  <p className="text-gray-600">CPF, Pôle Emploi... tous les dispositifs disponibles...</p>
                </div>
              </article>
            </Link>
            
            <Link href="/actualites/tendances-coiffure-2024" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg"
                    alt="Tendances coiffure"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                    Tendances Coiffure 2024
                  </h3>
                  <p className="text-gray-600">Ce que les professionnels doivent savoir...</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

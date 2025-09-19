import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Share2, Heart, BookOpen, TrendingUp, Users } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Reconversion Professionnelle : 5 Métiers Passion qui Recrutent en 2024",
  description: "Envie de donner un nouveau sens à votre carrière ? Découvrez 5 professions dans les secteurs de la coiffure, de l'esthétique et de la petite enfance qui recherchent activement des talents.",
  keywords: "reconversion professionnelle, métier qui recrute, métier passion, devenir coiffeur, formation esthétique, métier petite enfance",
});

const metiers = [
  {
    titre: "Coiffeur(se) Coloriste",
    description: "Un métier créatif en constante évolution où la technique rencontre l'art.",
    salaire: "1 800€ - 3 500€/mois",
    recrutement: "Très forte demande",
    formation: "CAP Coiffure + spécialisations",
    avantages: [
      "Créativité au quotidien",
      "Contact client privilégié", 
      "Évolution vers l'entrepreneuriat",
      "Secteur en croissance"
    ],
    lienFormation: "/formations/coiffure"
  },
  {
    titre: "Esthéticienne(ien) Expert(e) en Soins",
    description: "Spécialiste du bien-être et de la beauté, un métier qui allie technique et relationnel.",
    salaire: "1 600€ - 3 000€/mois",
    recrutement: "Forte demande",
    formation: "CAP Esthétique-Cosmétique",
    avantages: [
      "Secteur du bien-être en expansion",
      "Diversité des techniques",
      "Possibilité de spécialisation",
      "Contact humain enrichissant"
    ],
    lienFormation: "/formations/esthetique"
  },
  {
    titre: "Technicien(ne) en Prothésie Ongulaire",
    description: "Un métier artistique et technique dans l'univers de la beauté des mains.",
    salaire: "1 500€ - 2 800€/mois",
    recrutement: "Demande croissante",
    formation: "Formation spécialisée Onglerie",
    avantages: [
      "Métier artistique et précis",
      "Clientèle fidèle",
      "Investissement initial modéré",
      "Flexibilité horaire"
    ],
    lienFormation: "/formations/onglerie"
  },
  {
    titre: "Auxiliaire de Puériculture",
    description: "Accompagner les tout-petits dans leurs premiers pas, un métier de vocation.",
    salaire: "1 700€ - 2 400€/mois",
    recrutement: "Très forte demande",
    formation: "CAP AEPE (tremplin)",
    avantages: [
      "Métier de vocation sociale",
      "Sécurité de l'emploi",
      "Évolution de carrière possible",
      "Secteur public et privé"
    ],
    lienFormation: "/formations/cap-aepe"
  },
  {
    titre: "Masseur(se) Bien-Être",
    description: "Apporter détente et bien-être, un métier en pleine expansion.",
    salaire: "1 600€ - 3 200€/mois",
    recrutement: "Forte croissance",
    formation: "Formation Massage Bien-Être",
    avantages: [
      "Secteur du bien-être en boom",
      "Techniques variées",
      "Clientèle diversifiée",
      "Possibilité de spécialisation"
    ],
    lienFormation: "/formations/massage-bien-etre"
  }
];

const temoignages = [
  {
    nom: "Claire Moreau",
    ancienMetier: "Comptable",
    nouveauMetier: "Coiffeuse",
    temoignage: "Après 15 ans dans la comptabilité, j'ai osé me reconvertir dans la coiffure. Aujourd'hui, je ne regrette rien ! Chaque jour est différent et créatif."
  },
  {
    nom: "Thomas Dubois", 
    ancienMetier: "Commercial",
    nouveauMetier: "Masseur bien-être",
    temoignage: "La reconversion vers le massage bien-être m'a permis de retrouver du sens dans mon travail. J'aide vraiment les gens à se sentir mieux."
  }
];

export default function ReconversionMetiersPassionPage() {
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
            <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 mb-4">
              <span className="bg-kassiopee-gold text-kassiopee-navy px-3 py-1 rounded-full text-sm font-semibold w-fit">
                Guide des Métiers
              </span>
              <div className="flex flex-wrap items-center text-gray-500 text-xs sm:text-sm gap-2 sm:gap-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Équipe Kassiopée
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  15 décembre 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  8 min de lecture
                </div>
              </div>
            </div>
            
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
              Reconversion Professionnelle : 5 Métiers Passion qui Recrutent en 2024
            </h1>
            
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Envie de donner un nouveau sens à votre carrière ? De vous épanouir dans un métier qui a du sens et qui offre de réelles opportunités ? Découvrez 5 professions dans les secteurs de la coiffure, de l'esthétique et de la petite enfance qui recherchent activement des talents.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative h-48 sm:h-64 md:h-80 lg:h-96 rounded-xl overflow-hidden mb-8 sm:mb-12">
            <Image
              src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
              alt="Reconversion professionnelle métiers passion"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-8 sm:py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction */}
          <div className="prose prose-base sm:prose-lg max-w-none mb-8 sm:mb-12">
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
              La quête de sens au travail n'a jamais été aussi présente. Selon une étude récente, <strong>67% des Français</strong> envisagent une reconversion professionnelle. Si vous faites partie de ces personnes qui rêvent d'un métier épanouissant, les secteurs de la beauté, du bien-être et de la petite enfance offrent des opportunités exceptionnelles.
            </p>
            
            <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
              Ces métiers combinent passion, contact humain et perspectives d'évolution. Voici 5 professions qui recrutent activement et qui pourraient transformer votre vie professionnelle.
            </p>
          </div>

          {/* Métiers Section */}
          <div className="space-y-8 sm:space-y-12">
            {metiers.map((metier, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-4 sm:p-6 lg:p-8">
                <div className="flex items-center mb-4 sm:mb-6">
                  <div className="bg-kassiopee-navy text-white p-2 sm:p-3 rounded-full mr-3 sm:mr-4">
                    <span className="font-bold text-base sm:text-lg">{index + 1}</span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-gray-900">{metier.titre}</h2>
                </div>
                
                <p className="text-base sm:text-lg text-gray-700 mb-4 sm:mb-6">{metier.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 lg:gap-6 mb-4 sm:mb-6">
                  <div className="bg-white p-3 sm:p-4 rounded-lg">
                    <h4 className="font-semibold text-kassiopee-navy mb-2 text-sm sm:text-base">💰 Salaire</h4>
                    <p className="text-gray-700 text-sm sm:text-base">{metier.salaire}</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg">
                    <h4 className="font-semibold text-kassiopee-navy mb-2 text-sm sm:text-base">📈 Recrutement</h4>
                    <p className="text-gray-700 text-sm sm:text-base">{metier.recrutement}</p>
                  </div>
                  <div className="bg-white p-3 sm:p-4 rounded-lg sm:col-span-2 lg:col-span-1">
                    <h4 className="font-semibold text-kassiopee-navy mb-2 text-sm sm:text-base">🎓 Formation</h4>
                    <p className="text-gray-700 text-sm sm:text-base">{metier.formation}</p>
                  </div>
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm sm:text-base">✨ Avantages du métier :</h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {metier.avantages.map((avantage, idx) => (
                      <li key={idx} className="flex items-center text-gray-700 text-sm sm:text-base">
                        <Heart className="h-3 w-3 sm:h-4 sm:w-4 text-kassiopee-gold mr-2" />
                        {avantage}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <Link
                  href={metier.lienFormation}
                  className="inline-flex items-center bg-kassiopee-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors"
                >
                  Découvrir la formation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            ))}
          </div>

          {/* Témoignages */}
          <div className="mt-16 mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ils ont osé la <span className="text-kassiopee-navy">reconversion</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {temoignages.map((temoignage, index) => (
                <div key={index} className="bg-kassiopee-navy text-white p-6 rounded-xl">
                  <div className="mb-4">
                    <h4 className="font-bold text-kassiopee-gold">{temoignage.nom}</h4>
                    <p className="text-sm text-gray-200">
                      {temoignage.ancienMetier} → {temoignage.nouveauMetier}
                    </p>
                  </div>
                  <p className="italic">"{temoignage.temoignage}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Conclusion */}
          <div className="bg-kassiopee-gold p-8 rounded-xl">
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">
              Prêt(e) à transformer votre passion en expertise ?
            </h2>
            <p className="text-kassiopee-navy mb-6">
              Ces métiers demandent une formation qualifiante pour exceller. Chez Kassiopée Formation, nous vous accompagnons dans cette transformation avec des formations certifiantes, un suivi personnalisé et des débouchés concrets.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
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
                Télécharger notre brochure gratuite
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
                    CAP Esthétique en Candidat Libre : Le Guide Complet
                  </h3>
                  <p className="text-gray-600">Comment s'organiser et maximiser ses chances de réussite...</p>
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
                    Comment Financer sa Formation : CPF, Pôle Emploi...
                  </h3>
                  <p className="text-gray-600">Tous les dispositifs de financement disponibles...</p>
                </div>
              </article>
            </Link>
            
            <Link href="/actualites/temoignage-sophie-prothesiste-ongulaire" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg"
                    alt="Témoignage reconversion"
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

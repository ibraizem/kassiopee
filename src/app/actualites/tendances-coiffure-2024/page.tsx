import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Palette, Scissors, Star, TrendingUp } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Tendances Coiffure 2025 : Ce que les Professionnels Doivent Savoir",
  description: "Couleurs, coupes, techniques... Découvrez les tendances coiffure qui marquent 2024 et comment les maîtriser pour satisfaire votre clientèle.",
  keywords: "tendances coiffure 2025, coiffure tendance, techniques coiffure, couleurs cheveux 2025, coupes tendance",
});

const tendancesCoupes = [
  {
    nom: "Le Bob Asymétrique",
    description: "Une version moderne du carré classique avec des longueurs inégales pour un effet dynamique",
    difficulte: "Intermédiaire",
    clientele: "Femmes 25-45 ans",
    techniques: ["Coupe au rasoir", "Dégradé asymétrique", "Texturisation"],
    prix: "45-65€",
    image: "https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg"
  },
  {
    nom: "Le Shag Moderne",
    description: "Coupe effilée et déstructurée inspirée des années 70, adaptée aux cheveux fins",
    difficulte: "Avancé",
    clientele: "Femmes 20-40 ans",
    techniques: ["Effilage", "Coupe en couches", "Texturisation"],
    prix: "50-70€",
    image: "https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
  },
  {
    nom: "Le Buzz Cut Féminin",
    description: "Coupe très courte qui gagne en popularité chez les femmes audacieuses",
    difficulte: "Débutant",
    clientele: "Femmes 18-35 ans",
    techniques: ["Tondeuse", "Dégradé", "Finitions ciseaux"],
    prix: "30-45€",
    image: "https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg"
  }
];

const tendancesCouleurs = [
  {
    nom: "Copper Glow",
    description: "Des reflets cuivrés chaleureux qui illuminent tous les types de cheveux",
    technique: "Balayage + patine",
    entretien: "6-8 semaines",
    produits: ["Décolorant doux", "Patine cuivrée", "Shampoing spécifique"],
    prix: "80-120€"
  },
  {
    nom: "Chocolate Cherry",
    description: "Un brun chocolat avec des reflets cerise subtils pour un effet gourmand",
    technique: "Coloration + mèches",
    entretien: "8-10 semaines",
    produits: ["Coloration permanente", "Reflets rouges", "Masque nourrissant"],
    prix: "70-100€"
  },
  {
    nom: "Vanilla Blonde",
    description: "Un blond vanille doux et naturel, parfait pour l'hiver",
    technique: "Décoloration + tonification",
    entretien: "4-6 semaines",
    produits: ["Décolorant", "Toner violet", "Shampoing déjaunissant"],
    prix: "100-150€"
  },
  {
    nom: "Money Piece",
    description: "Mèches encadrant le visage pour un effet lumineux instantané",
    technique: "Mèches ciblées",
    entretien: "8-12 semaines",
    produits: ["Décolorant", "Toner", "Soin réparateur"],
    prix: "60-90€"
  }
];

const techniquesTendance = [
  {
    nom: "Hair Contouring",
    description: "Technique de coloration qui sculpte le visage en jouant sur les ombres et lumières",
    formation: "1 jour",
    investissement: "Faible",
    rentabilite: "Élevée"
  },
  {
    nom: "Lived-in Color",
    description: "Couleur naturelle qui vieillit bien, nécessitant moins d'entretien",
    formation: "2 jours",
    investissement: "Moyen",
    rentabilite: "Très élevée"
  },
  {
    nom: "Curtain Bangs",
    description: "Frange rideau qui encadre le visage de façon naturelle",
    formation: "1/2 journée",
    investissement: "Faible",
    rentabilite: "Élevée"
  }
];

const conseilsProfessionnels = [
  {
    titre: "Formez-vous régulièrement",
    description: "Les tendances évoluent vite. Participez à des formations pour maîtriser les nouvelles techniques.",
    icone: "🎓"
  },
  {
    titre: "Investissez dans les bons produits",
    description: "La qualité des produits fait la différence. Choisissez des marques professionnelles reconnues.",
    icone: "💎"
  },
  {
    titre: "Communiquez sur les réseaux",
    description: "Instagram et TikTok sont essentiels pour montrer votre travail et attirer de nouveaux clients.",
    icone: "📱"
  },
  {
    titre: "Adaptez aux morphologies",
    description: "Une tendance doit toujours être adaptée à la morphologie et au style de vie du client.",
    icone: "✂️"
  },
  {
    titre: "Proposez l'entretien",
    description: "Expliquez l'entretien nécessaire et vendez les produits adaptés pour fidéliser.",
    icone: "🔄"
  }
];

export default function TendancesCoiffure2024Page() {
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
                Actualité des Secteurs
              </span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Laura Coiffure
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  20 novembre 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  7 min de lecture
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tendances Coiffure 2024 : Ce que les Professionnels Doivent Savoir
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              L'année 2024 marque un tournant dans l'univers de la coiffure avec des tendances qui mélangent nostalgie et modernité. Couleurs audacieuses, coupes structurées et techniques innovantes : découvrez ce qui fait vibrer vos clients cette année.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-12">
            <Image
              src="https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg"
              alt="Tendances coiffure 2024"
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
              2024 est une année charnière pour la coiffure professionnelle. Les clients recherchent des looks qui allient <strong>praticité et esthétisme</strong>, avec une forte demande pour des coupes et couleurs nécessitant moins d'entretien mais offrant un maximum d'impact visuel.
            </p>
            
            <div className="bg-kassiopee-navy text-white p-6 rounded-xl mb-8">
              <h3 className="text-xl font-bold text-kassiopee-gold mb-4">📊 Chiffres clés 2024</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-2xl font-bold text-kassiopee-gold">+23%</div>
                  <div className="text-sm text-gray-200">Demande pour les coupes courtes</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-kassiopee-gold">+35%</div>
                  <div className="text-sm text-gray-200">Colorations naturelles</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-kassiopee-gold">+18%</div>
                  <div className="text-sm text-gray-200">Techniques de contouring</div>
                </div>
              </div>
            </div>
          </div>

          {/* Tendances Coupes */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Scissors className="h-8 w-8 text-kassiopee-gold mr-3" />
              Les Coupes qui Font Sensation
            </h2>
            
            <div className="space-y-8">
              {tendancesCoupes.map((coupe, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <div className="lg:col-span-2">
                      <div className="flex items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-kassiopee-navy">{coupe.nom}</h3>
                        <span className="bg-kassiopee-gold text-kassiopee-navy px-3 py-1 rounded-full text-sm font-semibold">
                          {coupe.prix}
                        </span>
                      </div>
                      
                      <p className="text-lg text-gray-700 mb-6">{coupe.description}</p>
                      
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">🎯 Clientèle cible</h4>
                          <p className="text-gray-700">{coupe.clientele}</p>
                        </div>
                        <div>
                          <h4 className="font-bold text-gray-900 mb-2">⚡ Difficulté</h4>
                          <p className="text-gray-700">{coupe.difficulte}</p>
                        </div>
                      </div>
                      
                      <div className="mt-4">
                        <h4 className="font-bold text-gray-900 mb-2">🛠️ Techniques requises</h4>
                        <div className="flex flex-wrap gap-2">
                          {coupe.techniques.map((technique, idx) => (
                            <span key={idx} className="bg-white px-3 py-1 rounded-full text-sm text-gray-700 border">
                              {technique}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative h-64 lg:h-full rounded-lg overflow-hidden">
                      <Image
                        src={coupe.image}
                        alt={coupe.nom}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tendances Couleurs */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Palette className="h-8 w-8 text-kassiopee-gold mr-3" />
              Les Couleurs Incontournables
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tendancesCouleurs.map((couleur, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-kassiopee-navy">{couleur.nom}</h3>
                    <span className="text-lg font-bold text-kassiopee-gold">{couleur.prix}</span>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{couleur.description}</p>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Technique :</span>
                      <span className="text-gray-700">{couleur.technique}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Entretien :</span>
                      <span className="text-gray-700">{couleur.entretien}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4">
                    <h4 className="font-semibold text-gray-900 mb-2">Produits nécessaires :</h4>
                    <div className="flex flex-wrap gap-1">
                      {couleur.produits.map((produit, idx) => (
                        <span key={idx} className="bg-gray-100 px-2 py-1 rounded text-xs text-gray-600">
                          {produit}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Techniques tendance */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <Star className="h-8 w-8 text-kassiopee-gold mr-3" />
              Les Techniques à Maîtriser
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {techniquesTendance.map((technique, index) => (
                <div key={index} className="bg-kassiopee-navy text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-kassiopee-gold mb-3">{technique.nom}</h3>
                  <p className="text-gray-200 mb-4">{technique.description}</p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Formation :</span>
                      <span className="text-kassiopee-gold">{technique.formation}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Investissement :</span>
                      <span className="text-kassiopee-gold">{technique.investissement}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Rentabilité :</span>
                      <span className="text-kassiopee-gold">{technique.rentabilite}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conseils professionnels */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 flex items-center">
              <TrendingUp className="h-8 w-8 text-kassiopee-gold mr-3" />
              Conseils pour Réussir en 2024
            </h2>
            
            <div className="space-y-6">
              {conseilsProfessionnels.map((conseil, index) => (
                <div key={index} className="bg-white border-l-4 border-kassiopee-gold p-6 rounded-r-xl shadow-lg">
                  <div className="flex items-start">
                    <span className="text-3xl mr-4">{conseil.icone}</span>
                    <div>
                      <h4 className="text-lg font-bold text-kassiopee-navy mb-2">{conseil.titre}</h4>
                      <p className="text-gray-700">{conseil.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Formation */}
          <div className="bg-kassiopee-gold p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">
              Envie de Maîtriser ces Tendances ?
            </h2>
            <p className="text-kassiopee-navy mb-6">
              Chez Kassiopée Formation, nous vous proposons des formations spécialisées pour maîtriser toutes les techniques tendance. Restez à la pointe de votre métier !
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
                Demander des informations
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
            <Link href="/actualites/massage-bien-etre-debouches" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
                    alt="Massage bien-être"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                    Massage Bien-Être : Secteur en Expansion
                  </h3>
                  <p className="text-gray-600">Le secteur du bien-être connaît une croissance exceptionnelle...</p>
                </div>
              </article>
            </Link>
            
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
          </div>
        </div>
      </section>
    </div>
  );
}

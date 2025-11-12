import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, TrendingUp, Users, Heart, DollarSign, MapPin, Star } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Massage Bien-Être : Un Secteur en Pleine Expansion - Kassiopée Formation",
  description: "Le secteur du bien-être connaît une croissance exceptionnelle. Découvrez les opportunités du massage bien-être et comment vous former à ce métier d'avenir.",
  keywords: "massage bien-être, débouchés massage, secteur bien-être, formation massage, métier massage, reconversion massage",
});

const chiffresMarche = [
  {
    chiffre: "12,5%",
    description: "Croissance annuelle du marché du bien-être",
    icon: TrendingUp
  },
  {
    chiffre: "15 000+",
    description: "Nouveaux emplois créés chaque année",
    icon: Users
  },
  {
    chiffre: "2 400€",
    description: "Salaire moyen mensuel d'un masseur",
    icon: DollarSign
  },
  {
    chiffre: "89%",
    description: "Taux de satisfaction des professionnels",
    icon: Heart
  }
];

const typesMassage = [
  {
    nom: "Massage Suédois",
    description: "Massage classique de relaxation, le plus demandé en institut",
    dureeFormation: "3 jours",
    tarif: "60-80€/séance",
    difficulte: "Débutant",
    demande: "Très forte"
  },
  {
    nom: "Massage aux Pierres Chaudes",
    description: "Technique utilisant des pierres volcaniques pour une détente profonde",
    dureeFormation: "2 jours",
    tarif: "80-100€/séance",
    difficulte: "Intermédiaire",
    demande: "Forte"
  },
  {
    nom: "Massage Californien",
    description: "Massage enveloppant et fluide, très apprécié pour la relaxation",
    dureeFormation: "4 jours",
    tarif: "70-90€/séance",
    difficulte: "Intermédiaire",
    demande: "Forte"
  },
  {
    nom: "Réflexologie Plantaire",
    description: "Stimulation des zones réflexes du pied pour un bien-être global",
    dureeFormation: "5 jours",
    tarif: "50-70€/séance",
    difficulte: "Avancé",
    demande: "Très forte"
  },
  {
    nom: "Massage Ayurvédique",
    description: "Massage traditionnel indien aux huiles chaudes",
    dureeFormation: "6 jours",
    tarif: "90-120€/séance",
    difficulte: "Avancé",
    demande: "Croissante"
  }
];

const lieuxExercice = [
  {
    lieu: "Instituts de beauté",
    avantages: ["Clientèle établie", "Matériel fourni", "Horaires fixes"],
    inconvenients: ["Salariat", "Moins d'autonomie"],
    salaire: "1800-2500€/mois"
  },
  {
    lieu: "Spas et centres de bien-être",
    avantages: ["Environnement luxueux", "Clientèle aisée", "Équipe pluridisciplinaire"],
    inconvenients: ["Concurrence", "Pression commerciale"],
    salaire: "2000-3000€/mois"
  },
  {
    lieu: "À domicile",
    avantages: ["Liberté totale", "Pas de charges fixes", "Relation client privilégiée"],
    inconvenients: ["Déplacements", "Matériel à transporter"],
    salaire: "2200-3500€/mois"
  },
  {
    lieu: "Cabinet libéral",
    avantages: ["Indépendance", "Tarifs libres", "Fidélisation client"],
    inconvenients: ["Investissement initial", "Gestion administrative"],
    salaire: "2500-4000€/mois"
  }
];

const competencesRequises = [
  {
    categorie: "Techniques",
    competences: ["Maîtrise des gestes", "Connaissance anatomique", "Adaptation à la morphologie", "Hygiène et sécurité"]
  },
  {
    categorie: "Relationnelles",
    competences: ["Écoute active", "Empathie", "Communication", "Gestion du stress client"]
  },
  {
    categorie: "Commerciales",
    competences: ["Conseil personnalisé", "Vente de prestations", "Fidélisation", "Marketing personnel"]
  },
  {
    categorie: "Administratives",
    competences: ["Gestion planning", "Facturation", "Déclarations", "Assurances professionnelles"]
  }
];

const temoignagesPro = [
  {
    nom: "Amélie Rousseau",
    age: 32,
    parcours: "Ancienne infirmière",
    specialite: "Massage thérapeutique",
    temoignage: "Après 8 ans en hôpital, j'ai découvert ma passion pour le massage. Aujourd'hui, j'ai mon propre cabinet et je ne regrette rien !",
    chiffres: "45 clients réguliers, 3200€/mois"
  },
  {
    nom: "Thomas Dubois",
    age: 28,
    parcours: "Reconversion commercial",
    specialite: "Massage sportif",
    temoignage: "Le massage m'a permis d'allier ma passion pour le sport et le contact humain. Je travaille avec des clubs professionnels.",
    chiffres: "Contrats avec 3 clubs, 3800€/mois"
  }
];

export default function MassageBienEtreDebouchesPage() {
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
                Guide des Métiers
              </span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Équipe Kassiopée
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  15 novembre 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  9 min de lecture
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Massage Bien-Être : Un Secteur en Pleine Expansion
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Le secteur du bien-être connaît une croissance exceptionnelle depuis plusieurs années. Entre quête de détente et prise de conscience de l'importance du bien-être, le massage thérapeutique et de relaxation offre des opportunités professionnelles remarquables.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-12">
            <Image
              src="https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg"
              alt="Massage bien-être professionnel"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction marché */}
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Le marché du bien-être représente aujourd'hui <strong>plus de 4,5 milliards d'euros en France</strong>. Cette croissance s'explique par plusieurs facteurs : stress de la vie moderne, vieillissement de la population, et surtout une prise de conscience collective de l'importance de prendre soin de soi.
            </p>
            
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Le massage bien-être, en particulier, bénéficie de cette dynamique avec une <strong>demande en constante augmentation</strong> et des débouchés variés qui s'adaptent à tous les profils professionnels.
            </p>
          </div>

          {/* Chiffres du marché */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Le Marché en <span className="text-kassiopee-navy">Chiffres</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {chiffresMarche.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="bg-kassiopee-navy text-white p-6 rounded-xl text-center">
                    <IconComponent className="h-12 w-12 text-kassiopee-gold mx-auto mb-4" />
                    <div className="text-3xl font-bold text-kassiopee-gold mb-2">{stat.chiffre}</div>
                    <div className="text-sm text-gray-200">{stat.description}</div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Types de massage */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Les Techniques les Plus <span className="text-kassiopee-navy">Demandées</span>
            </h2>
            
            <div className="space-y-6">
              {typesMassage.map((massage, index) => (
                <div key={index} className="bg-gray-50 rounded-xl p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-kassiopee-navy">{massage.nom}</h3>
                    <div className="flex items-center space-x-4 text-sm">
                      <span className={`px-3 py-1 rounded-full font-semibold ${
                        massage.demande === 'Très forte' ? 'bg-green-100 text-green-800' :
                        massage.demande === 'Forte' ? 'bg-blue-100 text-blue-800' :
                        'bg-yellow-100 text-yellow-800'
                      }`}>
                        {massage.demande}
                      </span>
                      <span className="text-kassiopee-gold font-bold">{massage.tarif}</span>
                    </div>
                  </div>
                  
                  <p className="text-gray-700 mb-4">{massage.description}</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Formation :</span>
                      <span className="text-gray-700">{massage.dureeFormation}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="font-semibold text-gray-900">Difficulté :</span>
                      <span className="text-gray-700">{massage.difficulte}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Lieux d'exercice */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Où <span className="text-kassiopee-navy">Exercer</span> ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {lieuxExercice.map((lieu, index) => (
                <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-bold text-kassiopee-navy">{lieu.lieu}</h3>
                    <span className="text-lg font-bold text-kassiopee-gold">{lieu.salaire}</span>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-green-700 mb-2">✅ Avantages</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {lieu.avantages.map((avantage, idx) => (
                          <li key={idx}>• {avantage}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-red-700 mb-2">⚠️ Inconvénients</h4>
                      <ul className="text-sm text-gray-700 space-y-1">
                        {lieu.inconvenients.map((inconvenient, idx) => (
                          <li key={idx}>• {inconvenient}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Compétences requises */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Compétences <span className="text-kassiopee-navy">Requises</span>
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {competencesRequises.map((categorie, index) => (
                <div key={index} className="bg-kassiopee-navy text-white p-6 rounded-xl">
                  <h3 className="text-xl font-bold text-kassiopee-gold mb-4">{categorie.categorie}</h3>
                  <ul className="space-y-2">
                    {categorie.competences.map((competence, idx) => (
                      <li key={idx} className="flex items-center text-gray-200">
                        <Star className="h-4 w-4 text-kassiopee-gold mr-2" />
                        {competence}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Témoignages */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
              Ils ont Réussi leur <span className="text-kassiopee-navy">Reconversion</span>
            </h2>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {temoignagesPro.map((temoignage, index) => (
                <div key={index} className="bg-kassiopee-gold p-6 rounded-xl">
                  <div className="flex items-center mb-4">
                    <div className="bg-white p-3 rounded-full mr-4">
                      <Heart className="h-6 w-6 text-kassiopee-navy" />
                    </div>
                    <div>
                      <h4 className="font-bold text-kassiopee-navy">{temoignage.nom}, {temoignage.age} ans</h4>
                      <p className="text-sm text-kassiopee-navy/80">{temoignage.parcours} → {temoignage.specialite}</p>
                    </div>
                  </div>
                  
                  <p className="text-kassiopee-navy italic mb-4">"{temoignage.temoignage}"</p>
                  
                  <div className="bg-white p-3 rounded-lg">
                    <p className="text-kassiopee-navy font-semibold text-sm">📊 Résultats : {temoignage.chiffres}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Comment se former */}
          <div className="bg-kassiopee-navy text-white p-8 rounded-xl mb-12">
            <h2 className="text-2xl font-bold text-kassiopee-gold mb-6">
              Comment se Former au Massage Bien-Être ?
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-bold text-kassiopee-gold mb-3">🎓 Chez Kassiopée Formation</h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Formations courtes et intensives</li>
                  <li>• Apprentissage sur modèles réels</li>
                  <li>• Formateurs professionnels en activité</li>
                  <li>• Matériel professionnel fourni</li>
                  <li>• Suivi post-formation</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-kassiopee-gold mb-3">💼 Accompagnement installation</h4>
                <ul className="space-y-2 text-gray-200">
                  <li>• Aide au choix du statut juridique</li>
                  <li>• Conseils matériel et local</li>
                  <li>• Stratégies de communication</li>
                  <li>• Réseau d'anciens élèves</li>
                  <li>• Formation continue</li>
                </ul>
              </div>
            </div>

            <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-lg">
              <p className="font-semibold mb-2">🏆 Nos formations massage :</p>
              <ul className="text-sm space-y-1">
                <li>• Massage Suédois (3 jours) - 590€</li>
                <li>• Massage aux Pierres Chaudes (2 jours) - 450€</li>
                <li>• Réflexologie Plantaire (5 jours) - 890€</li>
                <li>• Pack Complet Massage Bien-Être (10 jours) - 1590€</li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-kassiopee-gold p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">
              Prêt(e) à Vous Lancer dans le Massage Bien-Être ?
            </h2>
            <p className="text-kassiopee-navy mb-6">
              Le secteur du massage bien-être vous tend les bras ! Avec nos formations professionnelles, développez rapidement les compétences nécessaires pour réussir dans ce métier passionnant.
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
                  <p className="text-gray-600">Découvrez les métiers de la beauté et du bien-être...</p>
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
          </div>
        </div>
      </section>
    </div>
  );
}

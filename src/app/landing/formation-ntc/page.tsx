import React from 'react';
import Link from 'next/link';
import { 
  Award, 
  CheckCircle, 
  Clock, 
  Users, 
  TrendingUp, 
  Target,
  ArrowRight,
  Star,
  CreditCard,
  Phone,
  Calendar,
  MapPin
} from 'lucide-react';
import { generateSEO } from '@/lib/seo';
import CPFCalculator from '@/components/ui/CPFCalculator';
import FAQSection from '@/components/ui/FAQSection';

export const metadata = generateSEO({
  title: "Formation RNCP Négociateur Technico-Commercial - Certification Niveau 5 | Kassiopée Formation",
  description: "Obtenez votre certification RNCP Négociateur Technico-Commercial (39063) en 5 jours. Formation éligible CPF, techniques de vente, prospection, closing. Taux de réussite 95%.",
  keywords: "RNCP négociateur technico-commercial, formation vente, techniques commerciales, prospection, closing, CPF, certification niveau 5",
});

const competencesAcquises = [
  {
    titre: "Prospection commerciale",
    description: "Identifier et qualifier les prospects, développer un portefeuille client",
    icon: Target
  },
  {
    titre: "Techniques de vente",
    description: "Maîtriser l'argumentation, traiter les objections, conclure efficacement",
    icon: TrendingUp
  },
  {
    titre: "Négociation avancée",
    description: "Conduire des négociations complexes, défendre ses marges",
    icon: Users
  },
  {
    titre: "Gestion de la relation client",
    description: "Fidéliser, développer le chiffre d'affaires, utiliser les outils CRM",
    icon: Star
  }
];

const programmeDétaillé = [
  {
    jour: "Jour 1",
    titre: "Fondamentaux de la vente",
    contenu: [
      "Les étapes du processus de vente",
      "Psychologie du client et motivations d'achat",
      "Préparation et planification commerciale",
      "Techniques de prise de contact"
    ]
  },
  {
    jour: "Jour 2", 
    titre: "Prospection et qualification",
    contenu: [
      "Stratégies de prospection multicanales",
      "Qualification des besoins clients",
      "Outils de prospection digitale",
      "Gestion du pipeline commercial"
    ]
  },
  {
    jour: "Jour 3",
    titre: "Argumentation et présentation",
    contenu: [
      "Techniques d'argumentation SONCAS",
      "Présentation de solutions adaptées",
      "Gestion des objections clients",
      "Démonstration produit/service"
    ]
  },
  {
    jour: "Jour 4",
    titre: "Négociation et closing",
    contenu: [
      "Stratégies de négociation gagnant-gagnant",
      "Techniques de closing efficaces",
      "Gestion des situations difficiles",
      "Défense des marges et conditions"
    ]
  },
  {
    jour: "Jour 5",
    titre: "Fidélisation et développement",
    contenu: [
      "Suivi et fidélisation client",
      "Développement du chiffre d'affaires",
      "Utilisation des outils CRM",
      "Évaluation et certification RNCP"
    ]
  }
];

const temoignages = [
  {
    nom: "Sarah Martinez",
    poste: "Négociatrice Technico-Commerciale",
    entreprise: "TechSolutions",
    photo: "https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg",
    temoignage: "Cette formation m'a donné toutes les clés pour exceller dans la vente B2B. J'ai augmenté mon chiffre d'affaires de 40% en 6 mois !",
    note: 5
  },
  {
    nom: "Marc Dubois", 
    poste: "Commercial Senior",
    entreprise: "InnovateCorp",
    photo: "https://images.pexels.com/photos/3912468/pexels-photo-3912468.jpeg",
    temoignage: "Le contenu est très pratique avec de nombreux cas concrets. La certification RNCP a vraiment boosté ma crédibilité auprès des clients.",
    note: 5
  },
  {
    nom: "Julie Chen",
    poste: "Responsable Commerciale",
    entreprise: "Digital Partners",
    photo: "https://images.pexels.com/photos/3912469/pexels-photo-3912469.jpeg",
    temoignage: "Formation excellente qui m'a permis de structurer ma démarche commerciale. Les techniques de négociation sont redoutablement efficaces.",
    note: 5
  }
];

const statistiques = [
  { chiffre: "95%", label: "Taux de réussite à la certification" },
  { chiffre: "156", label: "Professionnels certifiés" },
  { chiffre: "4.9/5", label: "Note de satisfaction" },
  { chiffre: "94%", label: "Retour à l'emploi sous 6 mois" }
];

export default function LandingFormationNTCPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kassiopee-navy via-kassiopee-navy to-kassiopee-lightblue text-white py-20 pt-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center mb-4">
                <div className="bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-full font-bold text-sm mr-4">
                  RNCP 39063
                </div>
                <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  ✓ Éligible CPF
                </div>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                Devenez <span className="text-kassiopee-gold">Négociateur Technico-Commercial</span> Certifié
              </h1>
              
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Obtenez votre certification RNCP niveau 5 en 5 jours intensifs. 
                Maîtrisez les techniques de vente avancées et boostez votre carrière commerciale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Link
                  href="#inscription"
                  className="bg-kassiopee-gold text-kassiopee-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  S'inscrire avec le CPF
                </Link>
                <Link
                  href="#programme"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-kassiopee-navy transition-colors inline-flex items-center justify-center"
                >
                  Voir le programme
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
              
              <div className="flex items-center space-x-6 text-sm">
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-2" />
                  5 jours (35h)
                </div>
                <div className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  Région parisienne
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-2" />
                  Sessions mensuelles
                </div>
              </div>
            </div>
            
            {/* Stats Card */}
            <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
              <h3 className="text-2xl font-bold text-kassiopee-gold mb-6 text-center">
                Nos résultats parlent d'eux-mêmes
              </h3>
              <div className="grid grid-cols-2 gap-6">
                {statistiques.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-kassiopee-gold mb-2">
                      {stat.chiffre}
                    </div>
                    <div className="text-sm text-gray-200">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-kassiopee-gold/20 rounded-lg">
                <p className="text-sm text-center text-white">
                  🏆 Certification reconnue par l'État - Niveau 5 (Bac+2)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Compétences acquises */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Compétences que vous allez <span className="text-kassiopee-navy">maîtriser</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Développez votre expertise commerciale avec des compétences recherchées par les entreprises
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {competencesAcquises.map((competence, index) => {
              const IconComponent = competence.icon;
              return (
                <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center">
                  <div className="bg-kassiopee-navy text-kassiopee-gold rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{competence.titre}</h3>
                  <p className="text-gray-600">{competence.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Programme détaillé */}
      <section id="programme" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Programme de <span className="text-kassiopee-navy">formation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              5 jours intensifs pour maîtriser toutes les facettes du métier de négociateur technico-commercial
            </p>
          </div>

          <div className="space-y-6">
            {programmeDétaillé.map((jour, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center mb-4">
                  <div className="bg-kassiopee-navy text-kassiopee-gold rounded-lg px-4 py-2 font-bold mr-4">
                    {jour.jour}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">{jour.titre}</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 ml-20">
                  {jour.contenu.map((item, idx) => (
                    <div key={idx} className="flex items-center">
                      <CheckCircle className="h-4 w-4 text-kassiopee-gold mr-3 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Témoignages */}
      <section className="py-16 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ils ont réussi leur <span className="text-kassiopee-gold">certification</span>
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Découvrez les témoignages de nos apprenants certifiés RNCP
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {temoignages.map((temoignage, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                <div className="flex items-center mb-4">
                  <img
                    src={temoignage.photo}
                    alt={temoignage.nom}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-bold text-kassiopee-gold">{temoignage.nom}</h4>
                    <p className="text-sm text-gray-200">{temoignage.poste}</p>
                    <p className="text-xs text-gray-300">{temoignage.entreprise}</p>
                  </div>
                </div>
                <div className="flex mb-3">
                  {[...Array(temoignage.note)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-kassiopee-gold fill-current" />
                  ))}
                </div>
                <p className="text-gray-200 italic">"{temoignage.temoignage}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calculateur CPF */}
      <section id="inscription" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Financez votre formation avec le <span className="text-kassiopee-navy">CPF</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vérifiez votre éligibilité et découvrez comment financer votre certification RNCP
            </p>
          </div>
          
          <CPFCalculator />
        </div>
      </section>

      {/* FAQ */}
      <FAQSection 
        title="Questions fréquentes sur la formation NTC"
        subtitle="Tout ce que vous devez savoir sur notre formation RNCP Négociateur Technico-Commercial"
        showCategories={false}
        maxItems={8}
      />

      {/* CTA Final */}
      <section className="py-16 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-6">
            Prêt à obtenir votre certification RNCP ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez les 156 professionnels déjà certifiés et boostez votre carrière commerciale
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.moncompteformation.gouv.fr"
              target="_blank"
              className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              S'inscrire avec le CPF
            </Link>
            <Link
              href="/contact"
              className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-kassiopee-navy hover:text-white transition-colors inline-flex items-center justify-center"
            >
              <Phone className="h-5 w-5 mr-2" />
              Être rappelé(e)
            </Link>
          </div>
          
          <div className="mt-8 text-center">
            <p className="text-kassiopee-navy/70 text-sm">
              💡 Formation 100% finançable par vos droits CPF • Certification reconnue par l'État
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

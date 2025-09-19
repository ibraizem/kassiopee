import React from 'react';
import { TrendingUp, Users, Award, Target, CheckCircle, Star, BarChart3, Trophy } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Nos résultats - Kassiopée Formation",
  description: "Découvrez nos indicateurs de réussite, taux de satisfaction et résultats de nos formations informatiques et transformation digitale.",
  keywords: "résultats formation, taux réussite, satisfaction, indicateurs qualité, QUALIOPI",
});

const statistiques = [
  {
    chiffre: "95%",
    description: "Taux de réussite aux certifications",
    icon: Trophy,
    couleur: "text-green-600"
  },
  {
    chiffre: "500+",
    description: "Professionnels IT formés",
    icon: Users,
    couleur: "text-kassiopee-navy"
  },
  {
    chiffre: "4.8/5",
    description: "Note de satisfaction moyenne",
    icon: Star,
    couleur: "text-kassiopee-gold"
  },
  {
    chiffre: "92%",
    description: "Taux de retour à l'emploi",
    icon: TrendingUp,
    couleur: "text-kassiopee-lightblue"
  },
  {
    chiffre: "10+",
    description: "Années d'expertise IT",
    icon: Award,
    couleur: "text-purple-600"
  },
  {
    chiffre: "98%",
    description: "Recommandation par nos apprenants",
    icon: Target,
    couleur: "text-red-600"
  }
];

const resultatsFormations = [
  {
    formation: "Transformation Digitale TPE (RS6074)",
    participants: 156,
    tauxReussite: 97,
    satisfaction: 4.9,
    emploi: 94
  },
  {
    formation: "ITIL V4 - Fondements et Concepts",
    participants: 89,
    tauxReussite: 93,
    satisfaction: 4.7,
    emploi: 89
  },
  {
    formation: "Scrum Master Agile",
    participants: 124,
    tauxReussite: 96,
    satisfaction: 4.8,
    emploi: 95
  },
  {
    formation: "Gestion de Projets Informatiques",
    participants: 78,
    tauxReussite: 94,
    satisfaction: 4.6,
    emploi: 91
  },
  {
    formation: "Intelligence Artificielle",
    participants: 45,
    tauxReussite: 91,
    satisfaction: 4.9,
    emploi: 87
  },
  {
    formation: "Kanban Gestion des Flux",
    participants: 67,
    tauxReussite: 98,
    satisfaction: 4.7,
    emploi: 93
  }
];

const temoignagesEntreprises = [
  {
    entreprise: "TechCorp Solutions",
    secteur: "Développement logiciel",
    temoignage: "Nos équipes ont été formées sur ITIL V4 et Scrum. L'amélioration de nos processus est remarquable. +30% d'efficacité sur nos projets.",
    responsable: "Marie Dubois, DSI"
  },
  {
    entreprise: "Digital Innovations",
    secteur: "Transformation digitale",
    temoignage: "La formation RS6074 a permis à nos dirigeants de structurer notre transformation digitale. ROI de 250% sur 18 mois.",
    responsable: "Pierre Martin, CEO"
  },
  {
    entreprise: "AI Consulting",
    secteur: "Intelligence artificielle",
    temoignage: "Formation IA excellente, très pratique. Nos consultants maîtrisent maintenant les dernières technologies ML et Deep Learning.",
    responsable: "Sophie Chen, CTO"
  }
];

const certifications = [
  {
    nom: "QUALIOPI",
    description: "Certification qualité des organismes de formation",
    obtenue: "2023",
    validite: "2026"
  },
  {
    nom: "France Compétences RS6074",
    description: "Enregistrement au Répertoire Spécifique",
    obtenue: "2023",
    validite: "2026"
  },
  {
    nom: "Datadock",
    description: "Référencement qualité formation",
    obtenue: "2022",
    validite: "Permanent"
  }
];

export default function NosResultatsPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-kassiopee-gold">Résultats</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Découvrez les indicateurs de qualité et de performance de nos formations informatiques. 
              Des résultats concrets qui témoignent de notre excellence pédagogique.
            </p>
          </div>
        </div>
      </section>

      {/* Statistiques principales */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-kassiopee-navy">Indicateurs Clés</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Des chiffres qui parlent d'eux-mêmes et reflètent notre engagement 
              pour l'excellence dans la formation professionnelle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {statistiques.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-8 text-center border border-gray-100 hover:shadow-xl transition-shadow duration-300">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 mb-6`}>
                    <IconComponent className={`h-8 w-8 ${stat.couleur}`} />
                  </div>
                  <div className={`text-4xl font-bold mb-2 ${stat.couleur}`}>
                    {stat.chiffre}
                  </div>
                  <p className="text-gray-600 font-medium">
                    {stat.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Résultats par formation */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Résultats par <span className="text-kassiopee-navy">Formation</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Performance détaillée de chacune de nos formations informatiques.
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-kassiopee-navy text-white">
                  <tr>
                    <th className="px-3 sm:px-6 py-3 sm:py-4 text-left font-semibold text-sm sm:text-base">Formation</th>
                    <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">Participants</th>
                    <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">Taux</th>
                    <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">Note</th>
                    <th className="px-2 sm:px-6 py-3 sm:py-4 text-center font-semibold text-sm sm:text-base">Emploi</th>
                  </tr>
                </thead>
                <tbody>
                  {resultatsFormations.map((formation, index) => (
                    <tr key={index} className={`${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'} hover:bg-kassiopee-gold/10 transition-colors`}>
                      <td className="px-3 sm:px-6 py-3 sm:py-4 font-medium text-gray-900 text-sm sm:text-base">
                        <div className="max-w-xs sm:max-w-none">{formation.formation}</div>
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-4 text-center text-kassiopee-navy font-semibold text-sm sm:text-base">
                        {formation.participants}
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-4 text-center">
                        <span className={`inline-flex items-center px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm font-semibold ${
                          formation.tauxReussite >= 95 ? 'bg-green-100 text-green-800' :
                          formation.tauxReussite >= 90 ? 'bg-yellow-100 text-yellow-800' :
                          'bg-red-100 text-red-800'
                        }`}>
                          {formation.tauxReussite}%
                        </span>
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-4 text-center">
                        <div className="flex items-center justify-center">
                          <Star className="h-3 w-3 sm:h-4 sm:w-4 text-kassiopee-gold mr-1" />
                          <span className="font-semibold text-sm sm:text-base">{formation.satisfaction}</span>
                        </div>
                      </td>
                      <td className="px-2 sm:px-6 py-3 sm:py-4 text-center">
                        <span className="text-kassiopee-lightblue font-semibold text-sm sm:text-base">
                          {formation.emploi}%
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Témoignages entreprises */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Témoignages <span className="text-kassiopee-navy">Entreprises</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Nos clients témoignent de l'impact concret de nos formations sur leur activité.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {temoignagesEntreprises.map((temoignage, index) => (
              <div key={index} className="bg-kassiopee-navy text-white p-8 rounded-xl">
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-kassiopee-gold mb-2">
                    {temoignage.entreprise}
                  </h3>
                  <p className="text-kassiopee-lightblue text-sm">
                    {temoignage.secteur}
                  </p>
                </div>
                
                <blockquote className="text-gray-200 italic mb-6">
                  "{temoignage.temoignage}"
                </blockquote>
                
                <footer className="text-kassiopee-gold font-semibold text-sm">
                  — {temoignage.responsable}
                </footer>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-kassiopee-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-4">
              Nos Certifications <span className="text-white">Qualité</span>
            </h2>
            <p className="text-xl text-kassiopee-navy/80 max-w-3xl mx-auto">
              Des certifications qui garantissent la qualité et la conformité de nos formations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <div key={index} className="bg-white rounded-xl p-8 text-center shadow-lg">
                <div className="bg-kassiopee-navy text-kassiopee-gold p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                  <Award className="h-8 w-8" />
                </div>
                
                <h3 className="text-xl font-bold text-kassiopee-navy mb-3">
                  {cert.nom}
                </h3>
                
                <p className="text-gray-600 mb-4">
                  {cert.description}
                </p>
                
                <div className="flex justify-between text-sm">
                  <span className="text-gray-500">Obtenue : {cert.obtenue}</span>
                  <span className="text-kassiopee-navy font-semibold">Valide jusqu'en {cert.validite}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Méthodologie */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre <span className="text-kassiopee-navy">Méthodologie</span>
            </h2>
          </div>

          <div className="bg-white rounded-xl p-8 shadow-lg">
            <div className="space-y-6">
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-kassiopee-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Évaluation continue</h3>
                  <p className="text-gray-600">Suivi personnalisé et évaluations régulières pour garantir l'acquisition des compétences.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-kassiopee-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Enquêtes de satisfaction</h3>
                  <p className="text-gray-600">Questionnaires détaillés à chaud et à froid pour mesurer la satisfaction et l'impact.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-kassiopee-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Suivi post-formation</h3>
                  <p className="text-gray-600">Accompagnement à 3, 6 et 12 mois pour mesurer l'impact sur l'emploi et l'évolution professionnelle.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="h-6 w-6 text-kassiopee-gold mr-4 mt-1" />
                <div>
                  <h3 className="font-bold text-gray-900 mb-2">Amélioration continue</h3>
                  <p className="text-gray-600">Analyse des résultats et adaptation constante de nos programmes pour maintenir l'excellence.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



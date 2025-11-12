import React from 'react';
import Link from 'next/link';
import { Users, Heart, TrendingUp, Award, Mail, MapPin, Clock, Send, CheckCircle } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Recrutement - Rejoignez l'équipe Kassiopée Formation",
  description: "Rejoignez Kassiopée Formation et participez au développement des compétences professionnelles. Découvrez nos offres d'emploi et notre culture d'entreprise.",
  keywords: "recrutement, emploi, carrière, formation professionnelle, RNCP, équipe, culture entreprise",
});

const valeurs = [
  {
    titre: "Excellence Pédagogique",
    description: "Nous visons l'excellence dans chaque formation dispensée",
    icon: Award,
    couleur: "text-kassiopee-gold"
  },
  {
    titre: "Innovation Continue",
    description: "Nous restons à la pointe des technologies et méthodes",
    icon: TrendingUp,
    couleur: "text-kassiopee-lightblue"
  },
  {
    titre: "Esprit d'Équipe",
    description: "Nous cultivons la collaboration et l'entraide",
    icon: Users,
    couleur: "text-kassiopee-navy"
  },
  {
    titre: "Passion du Métier",
    description: "Nous aimons transmettre et faire grandir les compétences",
    icon: Heart,
    couleur: "text-red-500"
  }
];

const offresEmploi = [
  {
    poste: "Formateur/Formatrice RNCP Commercial",
    type: "CDI",
    lieu: "Région parisienne",
    experience: "5+ ans",
    description: "Nous recherchons un formateur expert en techniques commerciales pour animer nos formations RNCP Négociateur Technico-Commercial.",
    competences: ["Expérience commerciale", "Pédagogie", "RNCP ou équivalent", "Techniques de vente"],
    salaire: "45-55K€",
    urgent: true
  },
  {
    poste: "Formateur/Formatrice RH",
    type: "CDI",
    lieu: "Région parisienne / Remote",
    experience: "3+ ans",
    description: "Rejoignez notre équipe pour former les futurs Assistants Ressources Humaines.",
    competences: ["Expérience RH", "Administration personnel", "Droit social", "Pédagogie"],
    salaire: "42-50K€",
    urgent: false
  },
  {
    poste: "Responsable Pédagogique",
    type: "CDI",
    lieu: "Région parisienne",
    experience: "7+ ans",
    description: "Pilotez le développement de nos programmes de formation professionnelle et RNCP.",
    competences: ["Management", "Ingénierie pédagogique", "RNCP", "Gestion de projet"],
    salaire: "55-65K€",
    urgent: false
  },
  {
    poste: "Commercial B2B - Formations Professionnelles",
    type: "CDI",
    lieu: "Région parisienne",
    experience: "3+ ans",
    description: "Développez notre portefeuille clients entreprises en formations professionnelles et RNCP.",
    competences: ["Vente B2B", "Connaissance formations", "Prospection", "CPF"],
    salaire: "40-50K€ + variable",
    urgent: false
  }
];

const avantages = [
  "Télétravail possible (2-3 jours/semaine)",
  "Formation continue prise en charge",
  "Participation aux bénéfices",
  "Mutuelle d'entreprise premium",
  "RTT et congés flexibles",
  "Équipement informatique fourni",
  "Ambiance startup dans un secteur stable",
  "Évolution de carrière rapide"
];

const processusRecrutement = [
  {
    etape: 1,
    titre: "Candidature",
    description: "Envoyez votre CV et lettre de motivation",
    duree: "Immédiat"
  },
  {
    etape: 2,
    titre: "Pré-sélection",
    description: "Étude de votre profil par notre équipe RH",
    duree: "48h"
  },
  {
    etape: 3,
    titre: "Entretien RH",
    description: "Échange sur votre parcours et motivations",
    duree: "30 min"
  },
  {
    etape: 4,
    titre: "Entretien technique",
    description: "Validation de vos compétences métier",
    duree: "1h"
  },
  {
    etape: 5,
    titre: "Rencontre équipe",
    description: "Découverte de l'équipe et de l'environnement",
    duree: "30 min"
  },
  {
    etape: 6,
    titre: "Proposition",
    description: "Offre personnalisée et négociation",
    duree: "48h"
  }
];

export default function RecrutementPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Rejoignez l'équipe <span className="text-kassiopee-gold">Kassiopée</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto mb-8">
              Participez au développement des compétences professionnelles en formant les talents de demain. 
              Rejoignez une équipe passionnée dans un secteur en pleine croissance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#offres"
                className="bg-kassiopee-gold text-kassiopee-navy px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors"
              >
                Voir nos offres
              </Link>
              <Link
                href="#candidature-spontanee"
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-kassiopee-navy transition-colors"
              >
                Candidature spontanée
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Nos valeurs */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-kassiopee-navy">Valeurs</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez l'esprit Kassiopée et ce qui nous anime au quotidien.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {valeurs.map((valeur, index) => {
              const IconComponent = valeur.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-gray-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className={`h-10 w-10 ${valeur.couleur}`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{valeur.titre}</h3>
                  <p className="text-gray-600">{valeur.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Offres d'emploi */}
      <section id="offres" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos <span className="text-kassiopee-navy">Offres d'Emploi</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les postes disponibles et rejoignez notre équipe de passionnés.
            </p>
          </div>

          <div className="space-y-8">
            {offresEmploi.map((offre, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow">
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                  <div className="flex-1">
                    <div className="flex items-center gap-4 mb-2">
                      <h3 className="text-2xl font-bold text-kassiopee-navy">{offre.poste}</h3>
                      {offre.urgent && (
                        <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-sm font-semibold">
                          Urgent
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {offre.type}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="h-4 w-4 mr-1" />
                        {offre.lieu}
                      </span>
                      <span className="flex items-center">
                        <Users className="h-4 w-4 mr-1" />
                        {offre.experience}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{offre.description}</p>
                  </div>
                  <div className="lg:ml-8 lg:text-right">
                    <div className="text-2xl font-bold text-kassiopee-gold mb-4">{offre.salaire}</div>
                    <Link
                      href={`mailto:direction@kassiopee-formation.com?subject=Candidature ${offre.poste}`}
                      className="bg-kassiopee-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center"
                    >
                      <Send className="h-4 w-4 mr-2" />
                      Postuler
                    </Link>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-3">Compétences recherchées :</h4>
                  <div className="flex flex-wrap gap-2">
                    {offre.competences.map((competence, idx) => (
                      <span key={idx} className="bg-kassiopee-lightblue/10 text-kassiopee-navy px-3 py-1 rounded-full text-sm">
                        {competence}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="py-20 bg-kassiopee-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-4">
              Pourquoi nous <span className="text-white">rejoindre</span> ?
            </h2>
            <p className="text-xl text-kassiopee-navy/80 max-w-3xl mx-auto">
              Découvrez tous les avantages de travailler chez Kassiopée Formation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {avantages.map((avantage, index) => (
              <div key={index} className="bg-white rounded-lg p-6 text-center shadow-lg">
                <CheckCircle className="h-8 w-8 text-kassiopee-navy mx-auto mb-4" />
                <p className="text-gray-700 font-medium">{avantage}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Processus de recrutement */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Notre Processus de <span className="text-kassiopee-navy">Recrutement</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Un processus transparent et bienveillant pour mieux nous connaître mutuellement.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {processusRecrutement.map((etape, index) => (
              <div key={index} className="relative">
                <div className="bg-kassiopee-navy text-white rounded-xl p-6 text-center">
                  <div className="bg-kassiopee-gold text-kassiopee-navy rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-4 font-bold text-xl">
                    {etape.etape}
                  </div>
                  <h3 className="text-xl font-bold text-kassiopee-gold mb-3">{etape.titre}</h3>
                  <p className="text-gray-200 mb-4">{etape.description}</p>
                  <div className="text-kassiopee-lightblue font-semibold">{etape.duree}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Candidature spontanée */}
      <section id="candidature-spontanee" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Candidature <span className="text-kassiopee-navy">Spontanée</span>
            </h2>
            <p className="text-xl text-gray-600">
              Vous ne trouvez pas le poste qui vous correspond ? Envoyez-nous votre candidature !
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-kassiopee-navy mb-6">Nous recherchons toujours :</h3>
                <ul className="space-y-3">
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-kassiopee-gold mr-3" />
                    <span>Formateurs experts RNCP</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-kassiopee-gold mr-3" />
                    <span>Formateurs en développement personnel</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-kassiopee-gold mr-3" />
                    <span>Commerciaux B2B formations</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-kassiopee-gold mr-3" />
                    <span>Chefs de projet formation</span>
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="h-5 w-5 text-kassiopee-gold mr-3" />
                    <span>Consultants en accompagnement professionnel</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-kassiopee-navy text-white p-6 rounded-xl">
                <h3 className="text-xl font-bold text-kassiopee-gold mb-4">Comment postuler ?</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 text-kassiopee-gold mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Email :</p>
                      <p className="text-gray-200">direction@kassiopee-formation.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="h-5 w-5 text-kassiopee-gold mr-3 mt-1" />
                    <div>
                      <p className="font-semibold">Objet :</p>
                      <p className="text-gray-200">Candidature spontanée - [Votre spécialité]</p>
                    </div>
                  </div>
                </div>
                
                <Link
                  href="mailto:direction@kassiopee-formation.com?subject=Candidature spontanée"
                  className="bg-kassiopee-gold text-kassiopee-navy px-6 py-3 rounded-lg font-bold hover:bg-yellow-400 transition-colors inline-flex items-center mt-6"
                >
                  <Send className="h-4 w-4 mr-2" />
                  Envoyer ma candidature
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}



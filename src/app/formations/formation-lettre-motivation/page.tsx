import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Clock, Users, Award, CheckCircle, Download, ExternalLink, Phone, Mail } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Formation Rédiger une Lettre de Motivation Efficace - La Lettre Qui Donne Envie de Vous Rencontrer | Kassiopée Formation',
  description: 'Formation 1 jour pour apprendre à rédiger une lettre de motivation percutante et personnalisée. Maîtrisez la structure gagnante et valorisez vos compétences. Éligible CPF.',
  keywords: 'formation lettre motivation, rédaction lettre motivation, candidature efficace, recherche emploi, reconversion professionnelle, CPF',
  openGraph: {
    title: 'Formation Lettre de Motivation Efficace - Kassiopée Formation',
    description: 'Apprenez à rédiger une lettre de motivation qui donne envie de vous rencontrer. Formation pratique 1 jour avec atelier d\'écriture personnalisé.',
    images: ['/images/formations/lettre-motivation.jpg'],
  },
};

const formationData = {
  titre: "Rédiger une Lettre de Motivation Efficace",
  sousTitre: "La Lettre Qui Donne Envie de Vous Rencontrer",
  duree: "1 jour (6h à 7h)",
  prix: 450,
  modalite: "Présentiel ou distanciel",
  niveau: "Tous niveaux",
  cpfEligible: true,
  participants: "8 participants maximum",
  
  objectifs: [
    "Comprendre ce qu'attend un recruteur dans une lettre",
    "Structurer vos idées et vos arguments de manière fluide", 
    "Rédiger une lettre claire, motivée, professionnelle et personnalisée",
    "Gagner en confiance dans vos futures candidatures"
  ],

  publicCible: [
    "Toute personne souhaitant apprendre à valoriser son parcours",
    "Candidats voulant personnaliser leurs lettres de motivation",
    "Professionnels en reconversion",
    "Demandeurs d'emploi de tous niveaux"
  ],

  programme: [
    {
      module: "Partie 1 : Comprendre l'importance de la lettre de motivation",
      duree: "2h",
      contenu: [
        "Pourquoi la lettre reste importante malgré les CV modernes",
        "Ce que le recruteur cherche à comprendre à travers la lettre",
        "Lettres standards vs personnalisées",
        "Exemples de lettres faibles / fortes",
        "Les erreurs à éviter : copier-coller, fautes, trop de blabla"
      ]
    },
    {
      module: "Partie 2 : Construire une lettre convaincante",
      duree: "2h30",
      contenu: [
        "La structure gagnante : vous – moi – nous",
        "Techniques pour rédiger une accroche forte",
        "Valorisation des compétences et de la motivation",
        "Adapter la lettre à l'entreprise (secteur, valeurs, mission)",
        "Astuces pour éviter les phrases toutes faites"
      ]
    },
    {
      module: "Partie 3 : Mise en forme + Atelier d'écriture",
      duree: "2h30",
      contenu: [
        "Mise en page : longueur, polices, marges, formules de politesse",
        "Exemples de lettres réussies par niveau d'expérience",
        "Atelier pratique : rédaction d'une lettre selon un cas réel",
        "Lecture et corrections en petit groupe ou individuel"
      ]
    }
  ],

  bonus: [
    "Modèle de lettre personnalisable (Word + PDF)",
    "Fiche \"phrases clés à éviter et à privilégier\"",
    "Liste de connecteurs logiques et tournures professionnelles",
    "Astuce bonus : adapter sa lettre pour une candidature spontanée"
  ],

  prerequis: "Aucun prérequis. Formation accessible à tous.",
  
  modalitesPedagogiques: [
    "Apports théoriques et méthodologiques",
    "Exemples concrets et études de cas",
    "Atelier d'écriture personnalisé",
    "Corrections individuelles et collectives",
    "Supports pédagogiques fournis"
  ],

  evaluation: "Évaluation continue par la mise en pratique et la rédaction d'une lettre de motivation personnalisée.",
  
  formateur: "Consultant RH expert en recrutement et techniques de recherche d'emploi, 10+ ans d'expérience.",
  
  delaiAcces: "Inscription possible jusqu'à 48h avant le début de la formation.",
  
  accessibilite: "Formation accessible aux personnes en situation de handicap. Nous contacter pour étudier les modalités d'accueil."
};

export default function FormationLettreMotivationPage() {
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
                  src="https://images.pexels.com/photos/7688336/pexels-photo-7688336.jpeg"
                  alt="Formation lettre de motivation"
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
              À la fin de cette formation, vous maîtriserez l'art de rédiger une lettre de motivation qui fait la différence.
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
              Une journée intensive pour maîtriser la rédaction de lettres de motivation efficaces
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
              Des outils pratiques pour optimiser vos candidatures
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
            Prêt à rédiger des lettres de motivation qui marquent ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-8">
            Rejoignez notre formation et apprenez à valoriser votre profil avec des lettres personnalisées et convaincantes.
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

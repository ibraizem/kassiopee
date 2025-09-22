import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Users, Award, CheckCircle, ArrowRight, ExternalLink } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'RNCP ARH - Assistant Ressources Humaines | Kassiopée Formation',
  description: 'Formation certifiante RNCP 35030 Assistant Ressources Humaines. Administration du personnel, recrutement, intégration. Éligible CPF.',
  keywords: 'RNCP ARH, assistant ressources humaines, formation RH, administration personnel, recrutement, CPF',
  ogImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
});

export default function FormationARHPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-kassiopee-navy to-kassiopee-lightblue text-white py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-full text-sm font-bold">
                  RNCP 35030
                </span>
                <span className="bg-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  Niveau 5
                </span>
              </div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
                RNCP ARH — Assistant Ressources Humaines
              </h1>
              <p className="text-lg sm:text-xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
                Acquérir les compétences nécessaires à l'administration du personnel, au recrutement, 
                à l'intégration et au suivi des compétences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="bg-kassiopee-gold text-kassiopee-navy px-6 py-3 rounded-md font-semibold hover:bg-kassiopee-gold/90 transition-colors text-center"
                >
                  S'inscrire maintenant
                </Link>
                <a
                  href="https://www.francecompetences.fr/recherche/rncp/35030/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-white text-white px-6 py-3 rounded-md font-semibold hover:bg-white hover:text-kassiopee-navy transition-colors text-center inline-flex items-center justify-center gap-2"
                >
                  Voir sur FranceCompétences
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96">
              <Image
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg"
                alt="Formation RNCP Assistant Ressources Humaines"
                fill
                className="object-cover rounded-xl"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Formation Details */}
      <section className="py-12 sm:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Objectif général */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  🎯 Objectif général
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Acquérir les compétences nécessaires à l'administration du personnel, au recrutement, 
                  à l'intégration et au suivi des compétences. Préparer au <strong>Titre professionnel 
                  « Assistant Ressources Humaines »</strong>.
                </p>
              </div>

              {/* Programme détaillé */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  📌 Programme détaillé (35 h)
                </h2>
                <div className="space-y-6">
                  <div className="border-l-4 border-kassiopee-gold pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Partie 1 — Administration du personnel (10 h)
                    </h3>
                    <p className="text-gray-700">
                      Contrats, DPAE, gestion des temps, RGPD RH, documents obligatoires.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-kassiopee-lightblue pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Partie 2 — Recrutement & intégration (12 h)
                    </h3>
                    <p className="text-gray-700">
                      Sourcing, tri CV, conduite d'entretien structuré, onboarding.
                    </p>
                  </div>
                  
                  <div className="border-l-4 border-kassiopee-navy pl-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-3">
                      Partie 3 — Carrières, formation & dialogue social (13 h)
                    </h3>
                    <p className="text-gray-700">
                      Entretiens professionnels, GPEC, suivi formation, indicateurs RH.
                    </p>
                  </div>
                </div>
              </div>

              {/* Bonus inclus */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  🎁 Bonus inclus
                </h2>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kassiopee-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Modèles de contrats & grilles d'entretien</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kassiopee-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Templates Excel/Google Sheets pour suivi RH</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-kassiopee-gold mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">Guide résumé droit du travail & FAQ pratique</span>
                  </li>
                </ul>
              </div>

              {/* Résultats attendus */}
              <div className="bg-white rounded-xl shadow-lg p-6 sm:p-8">
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6 flex items-center">
                  ✅ Résultats attendus
                </h2>
                <p className="text-gray-700 text-lg leading-relaxed">
                  Gérer l'administration du personnel, conduire un recrutement structuré, organiser l'intégration, 
                  contribuer au suivi des compétences. Préparer la validation du titre RNCP.
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              {/* Formation Info */}
              <div className="bg-white rounded-xl shadow-lg p-6 mb-8 sticky top-24">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Informations pratiques</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-3 text-kassiopee-lightblue" />
                    <span><strong>Durée :</strong> 5 jours (35h)</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <MapPin className="h-5 w-5 mr-3 text-kassiopee-lightblue" />
                    <span><strong>Lieu :</strong> Région parisienne</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5 mr-3 text-kassiopee-lightblue" />
                    <span><strong>Public :</strong> Assistant(e) RH, gestionnaire administratif du personnel</span>
                  </div>
                  
                  <div className="flex items-center text-gray-600">
                    <Award className="h-5 w-5 mr-3 text-kassiopee-lightblue" />
                    <span><strong>Code RNCP :</strong> 35030</span>
                  </div>
                </div>

                <div className="space-y-3">
                  <Link
                    href="/contact"
                    className="w-full bg-kassiopee-gold text-kassiopee-navy py-3 px-4 rounded-md font-semibold hover:bg-kassiopee-gold/90 transition-colors text-center block"
                  >
                    Demander un devis
                  </Link>
                  
                  <a
                    href="https://www.francecompetences.fr/recherche/rncp/35030/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-kassiopee-navy text-white py-3 px-4 rounded-md font-semibold hover:bg-kassiopee-navy/90 transition-colors text-center block"
                  >
                    Voir sur FranceCompétences
                  </a>
                  
                  <a
                    href="https://www.moncompteformation.gouv.fr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full border-2 border-kassiopee-navy text-kassiopee-navy py-3 px-4 rounded-md font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors text-center block"
                  >
                    Vérifier l'éligibilité CPF
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

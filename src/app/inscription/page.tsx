import React from 'react';
import { generateSEO } from '@/lib/seo';
import ContactForm from '@/components/ui/ContactForm';

export const metadata = generateSEO({
  title: "Inscription - Candidater à nos formations",
  description: "Inscrivez-vous à l'une de nos formations professionnelles. Kassiopée Formation vous accompagne dans votre projet de formation et votre réussite professionnelle.",
  keywords: "inscription, candidature, formation professionnelle, dossier, admission",
});

export default function InscriptionPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-kassiopee-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Inscription et <span className="text-kassiopee-gold">candidature</span>
          </h1>
          <p className="text-xl text-gray-200">
            Démarrez votre parcours de formation avec Kassiopée Formation. 
            Notre équipe vous accompagne dans toutes les étapes de votre inscription.
          </p>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Votre inscription en <span className="text-kassiopee-navy">3 étapes</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Un processus simple et accompagné pour maximiser vos chances de réussite
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-lightblue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold mb-3">Candidature en ligne</h3>
              <p className="text-gray-600">
                Remplissez le formulaire ci-dessous avec vos informations personnelles 
                et votre projet de formation.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-lightblue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold mb-3">Entretien personnalisé</h3>
              <p className="text-gray-600">
                Un conseiller vous contacte sous 48h pour un entretien téléphonique 
                ou en présentiel dans nos centres.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-lightblue text-white rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold mb-3">Finalisation du dossier</h3>
              <p className="text-gray-600">
                Constitution du dossier complet et inscription définitive. 
                Début de votre formation !
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <ContactForm
            title="Formulaire d'inscription"
            subtitle="Démarrez votre projet de formation dès maintenant"
            sourceePage="/inscription"
          />
        </div>
      </section>

      {/* Info Section */}
      <section className="py-16 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-kassiopee-navy mb-6">
            Besoin d'aide pour votre inscription ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-8 max-w-2xl mx-auto">
            Nos conseillers sont à votre disposition pour vous accompagner dans votre démarche 
            et répondre à toutes vos questions.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-kassiopee-navy">
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Par téléphone</h3>
              <p className="text-2xl font-bold">01 XX XX XX XX</p>
              <p className="text-sm mt-2">Du lundi au vendredi, 9h-18h</p>
            </div>
            
            <div className="bg-white/20 backdrop-blur-sm rounded-lg p-6">
              <h3 className="font-semibold text-lg mb-2">Par email</h3>
              <p className="text-xl font-bold">inscription@kassiopee-formation.fr</p>
              <p className="text-sm mt-2">Réponse sous 24h ouvrées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Pièces à prévoir pour votre <span className="text-kassiopee-navy">dossier</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-6 text-kassiopee-navy">
                Documents obligatoires
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  Pièce d'identité (recto-verso)
                </li>
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  CV détaillé et actualisé
                </li>
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  Lettre de motivation manuscrite
                </li>
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  Diplômes et certificats de formation
                </li>
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  Attestations d'expérience professionnelle
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-kassiopee-navy">
                Selon votre situation
              </h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  Notification Pôle emploi (si demandeur d'emploi)
                </li>
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  Accord employeur (si salarié)
                </li>
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  Justificatifs de financement
                </li>
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  Certificat médical (selon formation)
                </li>
                <li className="flex items-start">
                  <span className="text-kassiopee-gold mr-3">•</span>
                  Casier judiciaire (secteur sanitaire/social)
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-12 p-6 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-kassiopee-navy mb-2">
              💡 Conseil de nos équipes
            </h4>
            <p className="text-gray-700">
              Préparez vos documents en amont pour accélérer le traitement de votre dossier. 
              Nos conseillers vous aideront à constituer un dossier complet et optimisé pour votre réussite.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
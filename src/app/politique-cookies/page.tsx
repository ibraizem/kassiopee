import React from 'react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Politique des cookies - Kassiopée Formation",
  description: "Découvrez comment nous utilisons les cookies sur notre site pour améliorer votre expérience utilisateur et analyser le trafic.",
  keywords: "politique des cookies, cookies, vie privée, données personnelles, RGPD, préférences",
  canonical: "/politique-cookies"
});

export default function PolitiqueCookiesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique des cookies</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">1. Qu'est-ce qu'un cookie ?</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Un cookie est un petit fichier texte déposé sur votre ordinateur, tablette ou mobile lors de la consultation d'un site internet. 
                Il contient des données qui permettent de mémoriser votre navigation pour vous offrir une meilleure expérience utilisateur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">2. Les cookies que nous utilisons</h2>
            <div className="text-gray-700 space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-2">2.1. Cookies techniques (obligatoires)</h3>
                <p>Ces cookies sont essentiels au bon fonctionnement du site :</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Maintien de la session utilisateur</li>
                  <li>Sécurité du site</li>
                  <li>Mémorisation des préférences de confidentialité</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2.2. Cookies analytiques</h3>
                <p>Ces cookies nous aident à comprendre comment les visiteurs interagissent avec notre site :</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Analyse du trafic et des performances</li>
                  <li>Détection des problèmes techniques</li>
                  <li>Amélioration continue du site</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-semibold mb-2">2.3. Cookies de préférences</h3>
                <p>Ces cookies mémorisent vos choix pour personnaliser votre expérience :</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li>Préférences linguistiques</li>
                  <li>Paramètres d'affichage</li>
                  <li>Préférences de notification</li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">3. Gestion des cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>Vous pouvez contrôler et/ou supprimer les cookies comme vous le souhaitez :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Supprimer les cookies de votre navigateur</li>
                <li>Configurer votre navigateur pour bloquer les cookies</li>
                <li>Utiliser les paramètres de notre bannière de consentement</li>
              </ul>
              
              <div className="bg-kassiopee-gold/10 p-4 rounded-lg mt-4">
                <p className="font-medium">Pour plus d'informations sur la gestion des cookies :</p>
                <ul className="list-disc list-inside space-y-1 ml-4 mt-2">
                  <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">Chrome</a></li>
                  <li><a href="https://support.mozilla.org/fr/kb/activer-desactiver-cookies" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">Firefox</a></li>
                  <li><a href="https://support.apple.com/fr-fr/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">Safari</a></li>
                  <li><a href="https://support.microsoft.com/fr-fr/microsoft-edge/supprimer-les-cookies-dans-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">Edge</a></li>
                </ul>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">4. Durée de conservation</h2>
            <div className="text-gray-700 space-y-4">
              <p>La durée de vie des cookies varie selon leur type :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Cookies de session :</strong> supprimés à la fermeture du navigateur</li>
                <li><strong>Cookies persistants :</strong> jusqu'à 13 mois maximum</li>
              </ul>
              <p>Vous pouvez consulter la liste complète des cookies utilisés et leur durée dans les paramètres de votre navigateur.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">5. Vos choix concernant les cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>Vous avez la possibilité d'accepter ou de refuser les cookies non essentiels via notre bannière de consentement. Vous pouvez modifier vos préférences à tout moment en cliquant sur le bouton "Gérer les cookies" en bas de chaque page.</p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="font-medium">Vos préférences actuelles :</p>
                <div className="mt-2 space-y-2">
                  <div className="flex items-center">
                    <input type="checkbox" id="analytics" checked readOnly className="mr-2" />
                    <label htmlFor="analytics">Cookies analytiques</label>
                  </div>
                  <div className="flex items-center">
                    <input type="checkbox" id="preferences" checked readOnly className="mr-2" />
                    <label htmlFor="preferences">Cookies de préférences</label>
                  </div>
                </div>
                <button className="mt-4 px-4 py-2 bg-kassiopee-navy text-white rounded hover:bg-kassiopee-navy/90 transition-colors">
                  Mettre à jour les préférences
                </button>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">6. Modifications de la politique des cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>Nous nous réservons le droit de modifier cette politique à tout moment. Les changements prendront effet dès leur publication sur cette page.</p>
              <p>Nous vous recommandons de consulter régulièrement cette page pour prendre connaissance des éventuelles mises à jour.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">7. Contact</h2>
            <div className="text-gray-700 space-y-4">
              <p>Pour toute question concernant notre politique des cookies :</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Délégué à la Protection des Données</strong></p>
                <p>Email : <a href="mailto:dpo@kassiopee-formation.fr" className="text-kassiopee-navy hover:underline">dpo@kassiopee-formation.fr</a></p>
                <p>Téléphone : {process.env.NEXT_PUBLIC_TELEPHONE || '07 43 67 87 68'}</p>
              </div>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p className="mt-2">
              Pour en savoir plus sur la protection de vos données, consultez notre 
              <Link href="/confidentialite" className="text-kassiopee-navy hover:underline ml-1">
                Politique de confidentialité
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

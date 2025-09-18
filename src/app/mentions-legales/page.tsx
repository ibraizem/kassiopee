import React from 'react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Mentions légales - Kassiopée Formation",
  description: "Mentions légales de Kassiopée Formation : informations légales, éditeur du site, hébergement, propriété intellectuelle.",
  keywords: "mentions légales, informations légales, éditeur, hébergement",
});

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">1. Informations générales</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Raison sociale :</strong> Kassiopée Formation</p>
              <p><strong>Forme juridique :</strong> [À COMPLÉTER - ex: SARL, SAS]</p>
              <p><strong>Capital social :</strong> [À COMPLÉTER]</p>
              <p><strong>SIRET :</strong> [À COMPLÉTER]</p>
              <p><strong>Code NAF :</strong> [À COMPLÉTER]</p>
              <p><strong>N° de déclaration d'activité :</strong> [À COMPLÉTER]</p>
              <p><strong>Siège social :</strong> {process.env.NEXT_PUBLIC_ADDRESS_SIEGE || '[À COMPLÉTER]'}</p>
              <p><strong>Téléphone :</strong> {process.env.NEXT_PUBLIC_TELEPHONE || '[À COMPLÉTER]'}</p>
              <p><strong>Email :</strong> {process.env.NEXT_PUBLIC_EMAIL_SIEGE || '[À COMPLÉTER]'}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">2. Directeur de la publication</h2>
            <div className="text-gray-700">
              <p><strong>Nom :</strong> [À COMPLÉTER]</p>
              <p><strong>Fonction :</strong> [À COMPLÉTER - ex: Directeur Général]</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">3. Hébergement du site</h2>
            <div className="text-gray-700">
              <p><strong>Hébergeur :</strong> Netlify Inc.</p>
              <p><strong>Adresse :</strong> 44 Tehama Street, San Francisco, CA 94105, USA</p>
              <p><strong>Site web :</strong> <a href="https://netlify.com" className="text-kassiopee-navy hover:underline">https://netlify.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">4. Propriété intellectuelle</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                L'ensemble des contenus présents sur ce site (textes, images, vidéos, logos, icônes, etc.) 
                est protégé par le droit d'auteur et appartient à Kassiopée Formation ou à ses partenaires.
              </p>
              <p>
                Toute reproduction, représentation, modification, publication, adaptation de tout ou partie 
                des éléments du site, quel que soit le moyen ou le procédé utilisé, est interdite, 
                sauf autorisation écrite préalable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">5. Protection des données personnelles</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Kassiopée Formation s'engage à respecter la réglementation en vigueur en matière 
                de protection des données personnelles, notamment le Règlement Général sur la 
                Protection des Données (RGPD).
              </p>
              <p>
                Pour plus d'informations sur le traitement de vos données personnelles, 
                consultez notre <a href="/confidentialite" className="text-kassiopee-navy hover:underline">
                politique de confidentialité
                </a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">6. Cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Ce site utilise des cookies techniques nécessaires à son bon fonctionnement. 
                Ces cookies ne collectent aucune donnée personnelle et ne nécessitent pas votre consentement.
              </p>
              <p>
                Les cookies analytiques (Google Analytics) sont utilisés uniquement avec votre consentement 
                pour améliorer l'expérience utilisateur.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">7. Responsabilité</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Kassiopée Formation met tout en œuvre pour fournir des informations exactes et actualisées. 
                Cependant, nous ne garantissons pas l'exactitude, la complétude ou la pertinence des informations.
              </p>
              <p>
                Kassiopée Formation ne saurait être tenue responsable des dommages directs ou indirects 
                résultant de l'utilisation de ce site.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">8. Droit applicable</h2>
            <div className="text-gray-700">
              <p>
                Les présentes mentions légales sont soumises au droit français. 
                Tout litige sera de la compétence exclusive des tribunaux français.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">9. Contact</h2>
            <div className="text-gray-700 space-y-2">
              <p>Pour toute question relative aux présentes mentions légales :</p>
              <p><strong>Email :</strong> legal@kassiopee-formation.fr</p>
              <p><strong>Courrier :</strong> Service Juridique - Kassiopée Formation<br />
              {process.env.NEXT_PUBLIC_ADDRESS_SIEGE || '[Adresse à compléter]'}</p>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
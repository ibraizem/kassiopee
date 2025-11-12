import React from 'react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Politique de confidentialité - Protection des données | Kassiopée Formation",
  description: "Découvrez comment Kassiopée Formation traite et protège vos données personnelles. Politique de confidentialité conforme au RGPD. Vos droits, nos engagements et procédures de protection des données.",
  keywords: "politique de confidentialité, protection des données, RGPD, confidentialité, cookies, données personnelles, formation professionnelle, Kassiopée",
  canonical: "/confidentialite"
});

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          {/* Contenu existant */}
          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">1. Introduction</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Kassiopée Formation s'engage à protéger la confidentialité de vos données personnelles. 
                Cette politique vous informe sur la manière dont nous collectons, utilisons et protégeons 
                vos informations conformément au Règlement Général sur la Protection des Données (RGPD).
              </p>
              <p>
                En utilisant notre site web ou nos services, vous acceptez les pratiques décrites 
                dans cette politique de confidentialité.
              </p>
            </div>
          </section>

          {/* Autres sections... */}
          
          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">17. Contact</h2>
            <div className="text-gray-700 space-y-4">
              <p>Pour toute question relative à cette politique :</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Délégué à la Protection des Données</strong></p>
                <p>Email : <a href="mailto:dpo@kassiopee-formation.fr" className="text-kassiopee-navy hover:underline">dpo@kassiopee-formation.fr</a></p>
                <p>Téléphone : {process.env.NEXT_PUBLIC_TELEPHONE || '07 43 67 87 68'}</p>
              </div>
            </div>
          </section>

          {/* Section de mise à jour et téléchargement */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}</p>
            <p className="mt-2">
              Version complète téléchargeable : 
              <Link 
                href="/documents/politique-confidentialite.pdf" 
                className="text-kassiopee-navy hover:underline ml-1"
              >
                Politique de confidentialité (PDF)
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

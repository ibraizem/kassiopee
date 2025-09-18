import React from 'react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Politique de confidentialité - Protection des données",
  description: "Découvrez comment Kassiopée Formation traite et protège vos données personnelles. Politique de confidentialité conforme au RGPD.",
  keywords: "confidentialité, données personnelles, RGPD, protection données, cookies",
});

export default function ConfidentialitePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Politique de confidentialité</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
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

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">2. Responsable du traitement</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>Kassiopée Formation</strong></p>
              <p>Adresse : {process.env.NEXT_PUBLIC_ADDRESS_SIEGE || '[À COMPLÉTER]'}</p>
              <p>Email : privacy@kassiopee-formation.fr</p>
              <p>Téléphone : {process.env.NEXT_PUBLIC_TELEPHONE || '[À COMPLÉTER]'}</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">3. Données collectées</h2>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold mb-2">3.1. Données collectées directement</h3>
              <p>Lorsque vous nous contactez ou vous inscrivez, nous collectons :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Nom et prénom</li>
                <li>Adresse email</li>
                <li>Numéro de téléphone</li>
                <li>Message ou demande d'information</li>
                <li>Formation d'intérêt</li>
                <li>Région et centre de préférence</li>
              </ul>

              <h3 className="text-lg font-semibold mb-2 mt-6">3.2. Données collectées automatiquement</h3>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Adresse IP (hachée pour la conformité RGPD)</li>
                <li>Type de navigateur et version</li>
                <li>Pages visitées et temps de visite</li>
                <li>Données de géolocalisation générale</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">4. Finalités du traitement</h2>
            <div className="text-gray-700 space-y-4">
              <p>Nous utilisons vos données personnelles pour :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Répondre à vos demandes d'information</li>
                <li>Traiter vos candidatures et inscriptions</li>
                <li>Vous contacter concernant nos formations</li>
                <li>Améliorer nos services et notre site web</li>
                <li>Respecter nos obligations légales</li>
                <li>Réaliser des statistiques anonymisées</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">5. Base légale du traitement</h2>
            <div className="text-gray-700 space-y-4">
              <p>Le traitement de vos données repose sur :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Votre consentement</strong> pour les demandes de contact et la newsletter</li>
                <li><strong>L'intérêt légitime</strong> pour améliorer nos services</li>
                <li><strong>L'exécution d'un contrat</strong> pour les inscriptions aux formations</li>
                <li><strong>Le respect d'obligations légales</strong> pour certaines données de formation</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">6. Durée de conservation</h2>
            <div className="text-gray-700 space-y-4">
              <p>Nous conservons vos données personnelles :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Demandes de contact :</strong> 3 ans après le dernier contact</li>
                <li><strong>Dossiers de formation :</strong> 30 ans (obligation légale)</li>
                <li><strong>Données de navigation :</strong> 13 mois maximum</li>
                <li><strong>Newsletter :</strong> jusqu'à votre désinscription</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">7. Partage des données</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Vos données personnelles ne sont jamais vendues à des tiers. 
                Elles peuvent être partagées avec :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Nos partenaires pédagogiques</strong> (avec votre consentement)</li>
                <li><strong>Nos prestataires techniques</strong> (hébergement, CRM) sous contrat de confidentialité</li>
                <li><strong>Les autorités compétentes</strong> si requis par la loi</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">8. Sécurité des données</h2>
            <div className="text-gray-700 space-y-4">
              <p>Nous mettons en place des mesures techniques et organisationnelles appropriées :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Chiffrement des données sensibles</li>
                <li>Accès restreint aux données personnelles</li>
                <li>Sauvegardes régulières et sécurisées</li>
                <li>Formation de notre personnel à la protection des données</li>
                <li>Audits de sécurité réguliers</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">9. Vos droits</h2>
            <div className="text-gray-700 space-y-4">
              <p>Vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Droit d'accès :</strong> obtenir une copie de vos données</li>
                <li><strong>Droit de rectification :</strong> corriger vos données inexactes</li>
                <li><strong>Droit à l'effacement :</strong> supprimer vos données sous conditions</li>
                <li><strong>Droit à la limitation :</strong> restreindre le traitement</li>
                <li><strong>Droit à la portabilité :</strong> récupérer vos données</li>
                <li><strong>Droit d'opposition :</strong> vous opposer au traitement</li>
                <li><strong>Droit de retrait du consentement</strong> à tout moment</li>
              </ul>
              
              <div className="bg-kassiopee-gold/10 p-4 rounded-lg mt-4">
                <p className="font-medium">Pour exercer vos droits :</p>
                <p>Email : <a href="mailto:privacy@kassiopee-formation.fr" className="text-kassiopee-navy hover:underline">privacy@kassiopee-formation.fr</a></p>
                <p>Courrier : Service Protection des Données - Kassiopée Formation</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">10. Cookies et technologies similaires</h2>
            <div className="text-gray-700 space-y-4">
              <h3 className="text-lg font-semibold mb-2">10.1. Cookies techniques</h3>
              <p>Ces cookies sont essentiels au fonctionnement du site (navigation, sécurité). Ils ne nécessitent pas votre consentement.</p>

              <h3 className="text-lg font-semibold mb-2">10.2. Cookies analytiques</h3>
              <p>Nous utilisons Google Analytics pour analyser l'utilisation du site. Ces cookies nécessitent votre consentement.</p>

              <h3 className="text-lg font-semibold mb-2">10.3. Gestion des cookies</h3>
              <p>Vous pouvez modifier vos préférences de cookies à tout moment via les paramètres de votre navigateur ou notre bannière de consentement.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">11. Transferts internationaux</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Certains de nos prestataires (hébergement, analytics) peuvent traiter vos données 
                en dehors de l'Union Européenne. Ces transferts sont encadrés par des garanties 
                appropriées (clauses contractuelles types, décisions d'adéquation).
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">12. Réclamations</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Si vous estimez que le traitement de vos données personnelles ne respecte pas 
                la réglementation, vous pouvez déposer une réclamation auprès de la CNIL :
              </p>
              <p>
                <strong>CNIL</strong><br />
                3 Place de Fontenoy - TSA 80715<br />
                75334 PARIS CEDEX 07<br />
                Site web : <a href="https://www.cnil.fr" className="text-kassiopee-navy hover:underline">www.cnil.fr</a>
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">13. Modifications</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Cette politique de confidentialité peut être mise à jour. 
                Toute modification importante vous sera notifiée par email ou via notre site web.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">14. Contact</h2>
            <div className="text-gray-700 space-y-4">
              <p>Pour toute question relative à cette politique :</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Délégué à la Protection des Données</strong></p>
                <p>Email : <a href="mailto:dpo@kassiopee-formation.fr" className="text-kassiopee-navy hover:underline">dpo@kassiopee-formation.fr</a></p>
                <p>Téléphone : {process.env.NEXT_PUBLIC_TELEPHONE || '[À COMPLÉTER]'}</p>
              </div>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
            <p className="mt-2">
              Version complète téléchargeable : 
              <Link href="/documents/politique-confidentialite.pdf" className="text-kassiopee-navy hover:underline ml-1">
                Politique de confidentialité (PDF)
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
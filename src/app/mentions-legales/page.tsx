import React from 'react';
import Link from 'next/link';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Mentions légales - Kassiopée Formation",
  description: "Mentions légales complètes de Kassiopée Formation : informations légales, éditeur, hébergement, propriété intellectuelle et conditions d'utilisation.",
  keywords: "mentions légales, informations légales, éditeur, hébergement, propriété intellectuelle, RGPD, Kassiopée Formation",
  canonical: "/mentions-legales"
});

export default function MentionsLegalesPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Mentions légales</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">1. Éditeur du site</h2>
            <div className="space-y-2 text-gray-700">
              <p><strong>Raison sociale :</strong> Kassiopée Formation</p>
              <p><strong>Forme juridique :</strong> SASU au capital de 7 600 €</p>
              <p><strong>SIRET :</strong> 984 459 776 00014</p>
              <p><strong>N° d'activité :</strong> 11931071993</p>
              <p><strong>RCS :</strong> Bobigny 978 900 154</p>
              <p><strong>N° TVA intracommunautaire :</strong> FR 39 978900154</p>
              <p><strong>Siège social :</strong> 35 rue Armand Brette, 93380 Pierrefitte-sur-Seine, France</p>
              <p><strong>Téléphone :</strong> 07 43 67 87 68</p>
              <p><strong>Email :</strong> formationkassiopee@gmail.com</p>
              <p><strong>Directeur de la publication :</strong> El-Fka Brahim</p>
              <p><strong>Responsable éditorial :</strong> Service Communication</p>
              <p><strong>Horaires d'ouverture :</strong> Lundi au vendredi de 9h à 18h</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">2. Hébergement</h2>
            <div className="text-gray-700 space-y-4">
              <p><strong>Hébergeur :</strong> Netlify Inc.</p>
              <p><strong>Adresse :</strong> 44 Tehama Street, San Francisco, CA 94105, États-Unis</p>
              <p><strong>Site web :</strong> <a href="https://www.netlify.com" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">www.netlify.com</a></p>
              <p><strong>Téléphone :</strong> +1 844-899-7312</p>
              <p className="mt-4">
                L'hébergeur assure une continuité de service 24h/24 et 7j/7, mais ne peut être tenu responsable 
                des dysfonctionnements du réseau Internet ou des défaillances des serveurs ou autres événements 
                échappant à son contrôle raisonnable.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">3. Propriété intellectuelle</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                L'ensemble des éléments composant le site (textes, images, vidéos, logos, marques, charte graphique, 
                structure, bases de données, etc.) sont la propriété exclusive de Kassiopée Formation ou de ses partenaires 
                et sont protégés par les lois relatives à la propriété intellectuelle.
              </p>
              <p>
                Toute reproduction, représentation, utilisation, adaptation, modification, incorporation, traduction, 
                commercialisation, partielles ou intégrales du site ou de l'un quelconque des éléments qui y figurent, 
                par quelque procédé que ce soit et sur quelque support que ce soit, sans l'autorisation écrite préalable 
                de Kassiopée Formation, est strictement interdite et constituerait un acte de contrefaçon sanctionné 
                par les articles L.335-2 et suivants du Code de la propriété intellectuelle.
              </p>
              <p>
                Les marques et logos figurant sur le site sont des marques déposées. Toute reproduction, imitation 
                ou usage, total ou partiel, de ces marques ou logos, sans l'accord écrit préalable de Kassiopée Formation, 
                est strictement interdit.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">4. Données personnelles</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Conformément à la loi « informatique et libertés » du 6 janvier 1978 modifiée et au Règlement Général 
                sur la Protection des Données (RGPD) entré en vigueur le 25 mai 2018, vous disposez d'un droit d'accès, 
                de rectification, de suppression, de limitation, de portabilité et d'opposition aux données vous concernant.
              </p>
              <p>
                Pour exercer ces droits, vous pouvez contacter notre Délégué à la Protection des Données :
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Par email :</strong> <a href="mailto:dpo@kassiopee-formation.fr" className="text-kassiopee-navy hover:underline">dpo@kassiopee-formation.fr</a></p>
                <p><strong>Par courrier :</strong> DPO - Kassiopée Formation, 35 rue Armand Brette, 93380 Pierrefitte-sur-Seine</p>
              </div>
              <p>
                Pour plus d'informations sur la gestion de vos données, consultez notre 
                <Link href="/confidentialite" className="text-kassiopee-navy hover:underline ml-1">
                  politique de confidentialité
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">5. Cookies</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Le site utilise des cookies pour améliorer l'expérience utilisateur. Un cookie est un petit fichier texte 
                enregistré sur votre ordinateur lorsque vous visitez un site. Il permet de conserver des informations 
                relatives à votre navigation.
              </p>
              <p>
                Nous utilisons différents types de cookies :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li><strong>Cookies techniques :</strong> nécessaires au bon fonctionnement du site</li>
                <li><strong>Cookies analytiques :</strong> pour analyser l'audience et l'utilisation du site</li>
                <li><strong>Cookies de préférences :</strong> pour mémoriser vos choix</li>
              </ul>
              <p>
                Vous pouvez configurer votre navigateur pour refuser les cookies, mais certaines fonctionnalités du site 
                pourraient ne plus fonctionner correctement.
              </p>
              <p>
                Pour plus d'informations, consultez notre 
                <Link href="/politique-cookies" className="text-kassiopee-navy hover:underline ml-1">
                  politique des cookies
                </Link>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">6. Liens hypertextes</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Le site peut contenir des liens hypertextes vers d'autres sites. Kassiopée Formation n'exerce aucun contrôle 
                sur ces sites et décline toute responsabilité quant à leur contenu, leur politique de confidentialité 
                et leurs pratiques en matière de protection des données personnelles.
              </p>
              <p>
                La création de liens vers le site est autorisée sous réserve de l'accord préalable de Kassiopée Formation 
                et à condition que ces liens ne portent pas atteinte à ses intérêts ou à sa réputation.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">7. Responsabilité</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Kassiopée Formation s'efforce d'assurer au mieux de ses possibilités l'exactitude et la mise à jour 
                des informations diffusées sur le site. Toutefois, Kassiopée Formation ne peut garantir l'exactitude, 
                la précision ou l'exhaustivité des informations mises à la disposition sur le site.
              </p>
              <p>
                En conséquence, Kassiopée Formation décline toute responsabilité :
              </p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Pour toute imprécision, inexactitude ou omission portant sur des informations disponibles sur le site</li>
                <li>Pour tous dommages résultant d'une intrusion frauduleuse d'un tiers ayant entraîné une modification 
                    des informations mises à la disposition sur le site</li>
                <li>Et plus généralement, pour tous dommages, directs ou indirects, quelles qu'en soient les causes, 
                    origines, nature ou conséquences, provoqués à raison de l'accès de quiconque au site ou de l'impossibilité 
                    d'y accéder, de même que l'utilisation du site et/ou du crédit accordé à une quelconque information 
                    provenant de ce dernier</li>
              </ul>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">8. Droit applicable et juridiction compétente</h2>
            <div className="text-gray-700 space-y-4">
              <p>
                Les présentes mentions légales sont régies par le droit français. En cas de litige, les tribunaux français 
                seront seuls compétents.
              </p>
              <p>
                Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, 
                Kassiopée Formation adhère au Service du Médiateur du e-commerce de la FEVAD (Fédération du e-commerce 
                et de la vente à distance) dont les coordonnées sont les suivantes : 60 rue de la Boétie - 75008 Paris 
                - <a href="https://www.mediateurfevad.fr" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">www.mediateurfevad.fr</a>.
              </p>
              <p>
                Après démarche préalable des consommateurs auprès du Service Client de Kassiopée Formation, le Service 
                du Médiateur peut être saisi pour tout litige de consommation dont le règlement n'aurait pas abouti. 
                Pour connaître les modalités de saisine du Médiateur, <a href="https://www.mediateurfevad.fr/le-mediateur/comment-ca-marche/" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">cliquez ici</a>.
              </p>
              <p>
                Le consommateur peut également recourir au règlement en ligne des litiges (RLL) proposé par la Commission 
                européenne : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">https://ec.europa.eu/consumers/odr</a>.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">9. Contact</h2>
            <div className="text-gray-700 space-y-4">
              <p>Pour toute question ou réclamation concernant le site ou les présentes mentions légales :</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Par email :</strong> formationkassiopee@gmail.com</p>
                <p><strong>Par téléphone :</strong> 07 43 67 87 68 (du lundi au vendredi de 9h à 18h)</p>
                <p><strong>Par courrier :</strong> Service Juridique - Kassiopée Formation<br />
                35 rue Armand Brette<br />
                93380 Pierrefitte-sur-Seine<br />
                France</p>
              </div>
              <p>
                Pour toute question relative à la protection des données personnelles, veuillez contacter notre Délégué à la Protection 
                des Données à l'adresse <a href="mailto:dpo@kassiopee-formation.fr" className="text-kassiopee-navy hover:underline">dpo@kassiopee-formation.fr</a>.
              </p>
            </div>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <p className="mt-2">
              <Link href="/" className="text-kassiopee-navy hover:underline">
                ← Retour à l'accueil
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

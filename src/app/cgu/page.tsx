import React from 'react';
import Link from 'next/link';
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Conditions Générales d'Utilisation - Kassiopée Formation",
  description: "Consultez les conditions générales d'utilisation du site Kassiopée Formation. Découvrez vos droits et obligations en tant qu'utilisateur de nos services de formation professionnelle.",
  keywords: "CGU, conditions générales d'utilisation, formation professionnelle, contrat formation, modalités d'inscription, politique d'annulation, Kassiopée Formation",
  canonical: "/cgu"
});

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <div className="text-gray-700 space-y-4">
              <p>
                Les présentes conditions générales d'utilisation (ci-après les « CGU ») ont pour objet de définir les modalités de mise à disposition des services du site internet <a href="https://www.kassiopee-formation.fr" className="text-kassiopee-navy hover:underline">www.kassiopee-formation.fr</a> (ci-après le « Site ») édité par la société Kassiopée Formation, et leurs conditions d'utilisation par l'Utilisateur.
              </p>
              <p>
                Toute utilisation du Site implique l'acceptation pleine et entière des présentes CGU. En accédant au Site, l'Utilisateur reconnaît avoir pris connaissance des présentes CGU et s'engage à les respecter sans réserve.
              </p>
              <p>
                Les présentes CGU sont accessibles à tout moment sur le Site et prévalent sur tout autre document. Elles peuvent être modifiées à tout moment par Kassiopée Formation, les modifications s'appliquant dès leur mise en ligne.
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">1. Définitions</h2>
            <div className="text-gray-700 space-y-2">
              <p><strong>« Site »</strong> : désigne le site internet accessible à l'adresse www.kassiopee-formation.fr, ainsi que l'ensemble de ses sous-domaines.</p>
              <p><strong>« Éditeur »</strong> : désigne la société Kassiopée Formation, éditrice du Site, dont les coordonnées complètes figurent dans les mentions légales.</p>
              <p><strong>« Utilisateur »</strong> : désigne toute personne physique ou morale qui accède au Site et/ou utilise les Services.</p>
              <p><strong>« Services »</strong> : désigne l'ensemble des services proposés par Kassiopée Formation via le Site, notamment l'accès aux informations sur les formations et les modalités d'inscription.</p>
              <p><strong>« Contenu »</strong> : désigne l'ensemble des éléments constituant le Site, notamment textes, images, vidéos, photographies, logos, marques, etc.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">2. Objet du Site</h2>
            <div className="text-gray-700 space-y-4">
              <p>Le Site a pour objet :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>De présenter les formations professionnelles proposées par Kassiopée Formation</li>
                <li>De fournir des informations pratiques sur les formations (programme, durée, tarifs, modalités, etc.)</li>
                <li>De permettre aux visiteurs de prendre contact avec Kassiopée Formation</li>
                <li>De permettre l'inscription en ligne aux formations</li>
                <li>De fournir un espace personnel aux apprenants</li>
              </ul>
              <p>Kassiopée Formation s'efforce de maintenir les informations accessibles par l'intermédiaire du Site à jour et exactes. Toutefois, Kassiopée Formation ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur le Site.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">3. Conditions d'accès</h2>
            <div className="text-gray-700 space-y-4">
              <p>3.1. <strong>Accès au Site</strong></p>
              <p>L'accès au Site est libre et gratuit, à l'exception des coûts de connexion facturés par les fournisseurs d'accès à Internet, qui restent à la charge de l'Utilisateur.</p>
              
              <p>3.2. <strong>Compte Utilisateur</strong></p>
              <p>L'utilisation de certains Services, notamment l'inscription à une formation, peut nécessiter la création d'un compte utilisateur. L'Utilisateur s'engage à fournir des informations exactes et à jour. L'Utilisateur est seul responsable de la confidentialité de son identifiant et de son mot de passe.</p>
              
              <p>3.3. <strong>Compatibilité</strong></p>
              <p>Le Site est accessible depuis les navigateurs Internet les plus récents. L'Utilisateur reconnaît avoir vérifié que la configuration qu'il utilise ne contient aucun virus et qu'elle est en parfait état de fonctionnement.</p>
              
              <p>3.4. <strong>Disponibilité</strong></p>
              <p>Kassiopée Formation s'efforce d'assurer l'accessibilité du Site 24h/24 et 7j/7, sans pouvoir toutefois garantir une disponibilité permanente. L'accès au Site peut être interrompu pour des raisons de maintenance, de mise à jour ou pour tout autre motif, notamment techniques.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">4. Inscription aux formations</h2>
            <div className="text-gray-700 space-y-4">
              <p>4.1. <strong>Conditions d'inscription</strong></p>
              <p>Pour s'inscrire à une formation, l'Utilisateur doit :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Remplir le formulaire d'inscription en ligne en fournissant des informations exactes et complètes</li>
                <li>Accepter les présentes CGU</li>
                <li>Pour les formations payantes, effectuer le paiement selon les modalités prévues</li>
              </ul>
              
              <p>4.2. <strong>Validation de l'inscription</strong></p>
              <p>L'inscription n'est définitive qu'après :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>La réception du paiement intégral ou de l'acompte selon les conditions prévues</li>
                <li>La validation par Kassiopée Formation du dossier d'inscription</li>
                <li>L'envoi d'un email de confirmation</li>
              </ul>
              
              <p>4.3. <strong>Droit de rétractation</strong></p>
              <p>Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de formation professionnelle continue conclus à distance entre un professionnel et un particulier.</p>
              
              <p>4.4. <strong>Annulation par l'Utilisateur</strong></p>
              <p>En cas d'annulation par l'Utilisateur :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Plus de 30 jours avant le début de la formation : remboursement intégral</li>
                <li>Entre 15 et 30 jours avant le début de la formation : retenue de 50% du montant total</li>
                <li>Moins de 15 jours avant le début de la formation : aucun remboursement n'est dû</li>
              </ul>
              
              <p>4.5. <strong>Report d'inscription</strong></p>
              <p>En cas d'empêchement, l'Utilisateur peut reporter sa participation à une session ultérieure, sous réserve d'en faire la demande écrite au moins 10 jours ouvrables avant le début de la formation et sous réserve de places disponibles.</p>
              
              <p>4.6. <strong>Annulation par Kassiopée Formation</strong></p>
              <p>Kassiopée Formation se réserve le droit d'anneler ou de reporter une formation en cas de force majeure ou de nombre insuffisant de participants. Dans ce cas, l'Utilisateur sera intégralement remboursé ou pourra reporter son inscription à une session ultérieure.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">5. Modalités de paiement</h2>
            <div className="text-gray-700 space-y-4">
              <p>5.1. <strong>Tarifs</strong></p>
              <p>Les tarifs des formations sont indiqués en euros, toutes taxes comprises (TVA non applicable, article 293 B du CGI). Kassiopée Formation se réserve le droit de modifier ses tarifs à tout moment, étant entendu que le prix appliqué sera celui en vigueur au moment de l'enregistrement de la commande.</p>
              
              <p>5.2. <strong>Modalités de paiement</strong></p>
              <p>Le paiement s'effectue :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Soit en une seule fois par carte bancaire lors de l'inscription</li>
                <li>Soit en plusieurs fois selon un échéancier défini dans le contrat de formation</li>
                <li>Soit par prise en charge par un organisme financeur (OPCO, Pôle Emploi, etc.)</li>
              </ul>
              
              <p>5.3. <strong>Paiement en plusieurs fois</strong></p>
              <p>En cas de paiement en plusieurs fois, un échéancier de paiement sera établi. Le non-paiement d'une échéance entraîne de plein droit l'exigibilité immédiate des sommes restant dues, sans préjudice des pénalités de retard.</p>
              
              <p>5.4. <strong>Prise en charge par un organisme financeur</strong></p>
              <p>En cas de prise en charge par un organisme financeur, l'Utilisateur doit fournir toutes les pièces justificatives nécessaires dans un délai de 15 jours suivant l'inscription. À défaut, l'inscription pourra être annulée.</p>
              
              <p>5.5. <strong>Retard de paiement</strong></p>
              <p>Tout retard de paiement entraîne de plein droit, sans mise en demeure préalable :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>L'exigibilité immédiate des sommes restant dues</li>
                <li>L'application de pénalités de retard au taux de 3 fois le taux d'intérêt légal</li>
                <li>Une indemnité forfaitaire pour frais de recouvrement de 40 €</li>
              </ul>
              
              <p>5.6. <strong>Facturation</strong></p>
              <p>Une facture est établie après réception du paiement et envoyée par email à l'Utilisateur. Les factures sont également disponibles dans l'espace personnel de l'Utilisateur.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">6. Propriété intellectuelle</h2>
            <div className="text-gray-700 space-y-4">
              <p>6.1. <strong>Propriété du Site</strong></p>
              <p>La structure du Site, ainsi que les textes, images, photographies, logos, marques, vidéos, sons, applications et tous autres éléments composant le Site sont la propriété exclusive de Kassiopée Formation ou de ses partenaires et sont protégés par les lois relatives à la propriété intellectuelle.</p>
              
              <p>6.2. <strong>Contenu des formations</strong></p>
              <p>Les supports de formation, quels que soient leur forme et leur support, sont protégés par le droit d'auteur. Toute reproduction, représentation, diffusion ou utilisation, sous quelque forme que ce soit, est strictement interdite sans l'autorisation écrite préalable de Kassiopée Formation.</p>
              
              <p>6.3. <strong>Sanctions</strong></p>
              <p>Toute reproduction, représentation, diffusion ou utilisation non autorisée du Site ou de l'un quelconque des éléments qu'il contient, par quelque procédé que ce soit, constituera considérée comme une contrefaçon et poursuivie conformément aux dispositions des articles L.335-2 et suivants du Code de la propriété intellectuelle.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">7. Données personnelles</h2>
            <div className="text-gray-700 space-y-4">
              <p>7.1. <strong>Responsable du traitement</strong></p>
              <p>Kassiopée Formation est responsable du traitement des données à caractère personnel collectées sur le Site, au sens du Règlement Général sur la Protection des Données (RGPD).</p>
              
              <p>7.2. <strong>Données collectées</strong></p>
              <p>Les données personnelles susceptibles d'être collectées sont notamment :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Identité (nom, prénom, date de naissance, etc.)</li>
                <li>Coordonnées (adresse postale, email, téléphone, etc.)</li>
                <li>Données de formation (niveau d'études, expérience professionnelle, etc.)</li>
                <li>Données de connexion (adresse IP, jour et heure de connexion, etc.)</li>
              </ul>
              
              <p>7.3. <strong>Finalités</strong></p>
              <p>Les données collectées sont utilisées pour :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Gérer les inscriptions aux formations</li>
                <li>Assurer le suivi pédagogique des apprenants</li>
                <li>Établir les documents administratifs (contrats, factures, attestations, etc.)</li>
                <li>Envoyer des informations relatives aux formations</li>
                <li>Améliorer la qualité des services proposés</li>
              </ul>
              
              <p>7.4. <strong>Droits des personnes</strong></p>
              <p>Conformément à la réglementation en vigueur, vous disposez des droits suivants :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Droit d'accès, de rectification et d'effacement de vos données</li>
                <li>Droit à la limitation du traitement de vos données</li>
                <li>Droit à la portabilité de vos données</li>
                <li>Droit d'opposition au traitement de vos données</li>
              </ul>
              <p>Pour exercer ces droits, vous pouvez contacter notre Délégué à la Protection des Données :</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-2">
                <p><strong>Email :</strong> <a href="mailto:dpo@kassiopee-formation.fr" className="text-kassiopee-navy hover:underline">dpo@kassiopee-formation.fr</a></p>
                <p><strong>Courrier :</strong> DPO - Kassiopée Formation, 35 rue Armand Brette, 93380 Pierrefitte-sur-Seine</p>
              </div>
              <p>Pour plus d'informations, consultez notre <Link href="/confidentialite" className="text-kassiopee-navy hover:underline">Politique de confidentialité</Link>.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">8. Responsabilités</h2>
            <div className="text-gray-700 space-y-4">
              <p>8.1. <strong>Responsabilité de Kassiopée Formation</strong></p>
              <p>Kassiopée Formation s'engage à mettre en œuvre tous les moyens raisonnables pour assurer un accès continu et de qualité au Site. Toutefois, Kassiopée Formation ne peut garantir :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>L'absence de dysfonctionnement, d'erreur ou d'interruption du service</li>
                <li>L'absence de virus ou d'éléments nuisibles sur le Site</li>
                <li>L'exactitude et l'exhaustivité des informations diffusées</li>
              </ul>
              
              <p>8.2. <strong>Responsabilité de l'Utilisateur</strong></p>
              <p>L'Utilisateur s'engage à :</p>
              <ul className="list-disc list-inside space-y-1 ml-4">
                <li>Ne pas perturber le bon fonctionnement du Site</li>
                <li>Ne pas accéder ou tenter d'accéder à des zones du Site qui lui sont réservées</li>
                <li>Ne pas utiliser le Site à des fins illicites ou préjudiciables</li>
                <li>Fournir des informations exactes et à jour</li>
              </ul>
              
              <p>8.3. <strong>Liens hypertextes</strong></p>
              <p>Le Site peut contenir des liens vers des sites tiers. Kassiopée Formation n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu et aux pratiques en matière de protection des données personnelles.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">9. Modification des CGU</h2>
            <div className="text-gray-700 space-y-4">
              <p>Kassiopée Formation se réserve le droit de modifier à tout moment les présentes CGU. Les modifications entreront en vigueur dès leur publication en ligne et seront applicables à compter de cette date. Il est donc conseillé à l'Utilisateur de consulter régulièrement cette page.</p>
              <p>En cas de désaccord avec les CGU modifiées, l'Utilisateur doit cesser d'utiliser le Site. La poursuite de l'utilisation du Site vaut acceptation des nouvelles CGU.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">10. Droit applicable et juridiction compétente</h2>
            <div className="text-gray-700 space-y-4">
              <p>10.1. <strong>Droit applicable</strong></p>
              <p>Les présentes CGU sont régies par le droit français, quelle que soit la localisation de l'Utilisateur.</p>
              
              <p>10.2. <strong>Médiation</strong></p>
              <p>Conformément aux articles L.611-1 et suivants du Code de la consommation, tout consommateur a le droit de recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable du litige qui l'oppose à un professionnel.</p>
              <p>Kassiopée Formation adhère au Service du Médiateur du e-commerce de la FEVAD (Fédération du e-commerce et de la vente à distance) dont les coordonnées sont les suivantes :</p>
              <div className="bg-gray-50 p-4 rounded-lg mt-2">
                <p><strong>Médiateur de la consommation FEVAD</strong></p>
                <p>60 rue de la Boétie - 75008 Paris</p>
                <p>Site web : <a href="https://www.mediateurfevad.fr" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">www.mediateurfevad.fr</a></p>
              </div>
              <p>Après démarche préalable des consommateurs auprès du Service Client de Kassiopée Formation, le Service du Médiateur peut être saisi pour tout litige de consommation dont le règlement n'aurait pas abouti. Pour connaître les modalités de saisine du Médiateur, <a href="https://www.mediateurfevad.fr/le-mediateur/comment-ca-marche/" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">cliquez ici</a>.</p>
              
              <p>10.3. <strong>Plateforme de Règlement des Litiges en Ligne</strong></p>
              <p>Conformément au Règlement (UE) n°524/2013, la Commission Européenne a mis en place une plateforme de règlement en ligne des litiges, facilitant le règlement indépendant par voie extrajudiciaire des litiges en ligne entre consommateurs et professionnels de l'Union européenne.</p>
              <p>Cette plateforme est accessible à l'adresse suivante : <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-kassiopee-navy hover:underline">https://ec.europa.eu/consumers/odr</a></p>
              
              <p>10.4. <strong>Compétence juridictionnelle</strong></p>
              <p>En cas de litige n'ayant pas pu être résolu à l'amiable, les tribunaux français seront seuls compétents.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">11. Dispositions diverses</h2>
            <div className="text-gray-700 space-y-4">
              <p>11.1. <strong>Nullité partielle</strong></p>
              <p>Si une ou plusieurs dispositions des présentes CGU sont tenues pour non valides ou déclarées telles en application d'une loi, d'un règlement ou à la suite d'une décision définitive d'une juridiction compétente, les autres dispositions garderont toute leur force et leur portée.</p>
              
              <p>11.2. <strong>Non-renonciation</strong></p>
              <p>Le fait pour Kassiopée Formation de ne pas se prévaloir d'un manquement par l'Utilisateur à l'une quelconque des obligations visées aux présentes CGU ne saurait être interprété pour l'avenir comme une renonciation à l'obligation en cause.</p>
              
              <p>11.3. <strong>Preuve</strong></p>
              <p>Les registres informatisés, conservés dans les systèmes informatiques de Kassiopée Formation dans des conditions raisonnables de sécurité, seront considérés comme les preuves des communications, commandes et paiements intervenus entre les parties.</p>
              
              <p>11.4. <strong>Langue du contrat</strong></p>
              <p>Les présentes CGU sont rédigées en langue française. Dans le cas où elles seraient traduites en une ou plusieurs langues étrangères, seul le texte français ferait foi en cas de litige.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">12. Contact</h2>
            <div className="text-gray-700 space-y-4">
              <p>Pour toute question relative aux présentes CGU, vous pouvez nous contacter :</p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p><strong>Par email :</strong> formationkassiopee@gmail.com</p>
                <p><strong>Par téléphone :</strong> 07 43 67 87 68 (du lundi au vendredi de 9h à 18h)</p>
                <p><strong>Par courrier :</strong> Service Client - Kassiopée Formation<br />
                35 rue Armand Brette<br />
                93380 Pierrefitte-sur-Seine<br />
                France</p>
              </div>
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

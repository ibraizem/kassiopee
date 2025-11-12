import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Conditions Générales d'Utilisation - Kassiopée Formation",
  description: "Consultez les conditions générales d'utilisation du site Kassiopée Formation.",
  keywords: "CGU, conditions d'utilisation, mentions légales, formation professionnelle"
});

export default function CGUPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Conditions Générales d'Utilisation</h1>
        
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          <section>
            <p className="text-gray-700 mb-6">
              Les présentes conditions générales d'utilisation (ci-après les « CGU ») ont pour objet de définir les modalités de mise à disposition des services du site Kassiopée Formation, ci-après dénommé « le Site », et leurs conditions d'utilisation par l'Utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">1. Objet</h2>
            <p className="text-gray-700">
              Le Site a pour objet de fournir des informations concernant les formations proposées par Kassiopée Formation et de permettre aux utilisateurs de s'inscrire à ces formations.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">2. Acceptation des CGU</h2>
            <p className="text-gray-700">
              L'accès au Site et à ses services implique l'acceptation pleine et entière des présentes CGU. En accédant au Site, l'Utilisateur reconnaît avoir pris connaissance des présentes CGU et s'engage à les respecter sans réserve.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">3. Inscription aux formations</h2>
            <div className="space-y-4 text-gray-700">
              <p>3.1. Pour s'inscrire à une formation, l'Utilisateur doit remplir le formulaire d'inscription en ligne et fournir des informations exactes et complètes.</p>
              <p>3.2. L'inscription ne sera définitive qu'après réception du paiement intégral ou d'un acompte selon les conditions prévues dans le contrat de formation.</p>
              <p>3.3. Kassiopée Formation se réserve le droit de refuser une inscription sans avoir à motiver sa décision.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">4. Modalités de paiement</h2>
            <div className="space-y-4 text-gray-700">
              <p>4.1. Le paiement s'effectue selon les modalités indiquées lors de l'inscription.</p>
              <p>4.2. En cas de prise en charge par un organisme financeur, les pièces justificatives doivent être fournies dans un délai de 15 jours suivant l'inscription.</p>
              <p>4.3. En cas de retard de paiement, des pénalités de 3 fois le taux d'intérêt légal seront appliquées.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">5. Droit de rétractation</h2>
            <div className="space-y-4 text-gray-700">
              <p>5.1. Conformément à l'article L.221-28 du Code de la consommation, le droit de rétractation ne peut être exercé pour les contrats de formation professionnelle continue.</p>
              <p>5.2. Toutefois, des conditions d'annulation spécifiques sont prévues dans le contrat de formation.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">6. Propriété intellectuelle</h2>
            <p className="text-gray-700">
              L'ensemble des éléments constituant le Site (textes, images, logos, etc.) est la propriété exclusive de Kassiopée Formation ou de ses partenaires. Toute reproduction, représentation ou diffusion, par quelque procédé que ce soit, ne pourra être faite sans l'autorisation écrite préalable de Kassiopée Formation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">7. Données personnelles</h2>
            <p className="text-gray-700">
              Les données personnelles collectées font l'objet d'un traitement informatique destiné à la gestion des inscriptions et à la relation commerciale. Conformément à la loi "Informatique et Libertés" du 6 janvier 1978 modifiée et au RGPD, vous disposez d'un droit d'accès, de rectification, de suppression et de portabilité de vos données personnelles.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">8. Responsabilité</h2>
            <p className="text-gray-700">
              Kassiopée Formation ne saurait être tenue pour responsable des dommages directs ou indirects qui pourraient résulter de l'accès ou de l'utilisation du Site, y compris l'inaccessibilité, les pertes de données, détériorations, destructions ou virus qui pourraient affecter l'équipement informatique de l'utilisateur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">9. Modification des CGU</h2>
            <p className="text-gray-700">
              Kassiopée Formation se réserve le droit de modifier les présentes CGU à tout moment. Les modifications entreront en vigueur dès leur mise en ligne et seront applicables à tous les utilisateurs à compter de cette mise en ligne.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">10. Droit applicable et juridiction compétente</h2>
            <p className="text-gray-700">
              Les présentes CGU sont soumises au droit français. En cas de litige, les tribunaux français seront seuls compétents.
            </p>
          </section>

          <div className="mt-8 pt-8 border-t border-gray-200 text-sm text-gray-500">
            <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR')}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

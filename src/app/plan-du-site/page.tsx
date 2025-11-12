import Link from 'next/link';
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Plan du site | Kassiopée Formation",
  description: "Retrouvez l'ensemble des pages et formations disponibles sur le site de Kassiopée Formation. Navigation facile et complète.",
  keywords: "plan du site, navigation, formations, Kassiopée, formation professionnelle, formations certifiantes",
  canonical: "/plan-du-site"
});

const sitemap = {
  pages: [
    { title: "Accueil", href: "/" },
    { title: "À propos", href: "/a-propos" },
    { title: "Nos formations", href: "/formations" },
    { title: "Financements", href: "/financements" },
    { title: "Espace apprenant", href: "/espace-apprenant" },
    { title: "Actualités", href: "/actualites" },
    { title: "Contact", href: "/contact" },
  ],
  formations: [
    { title: "RNCP Négociateur Technico-Commercial", href: "/formations/formation-ntc" },
    { title: "RNCP Assistant Ressources Humaines", href: "/formations/formation-arh" },
    { title: "Booster sa Candidature (CV)", href: "/formations/formation-cv" },
    { title: "Lettre de Motivation Efficace", href: "/formations/formation-lettre-motivation" },
    { title: "Réussir son Entretien d'Embauche", href: "/formations/formation-entretien-embauche" },
    { title: "Anglais Professionnel", href: "/formations/formation-anglais" },
    { title: "Marketing Digital", href: "/formations/formation-marketing" },
  ],
  ressources: [
    { title: "Blog", href: "/blog" },
    { title: "Témoignages", href: "/temoignages" },
    { title: "FAQ", href: "/faq" },
    { title: "Ressources pédagogiques", href: "/ressources" },
  ],
  legal: [
    { title: "Mentions légales", href: "/mentions-legales" },
    { title: "Politique de confidentialité", href: "/confidentialite" },
    { title: "Conditions générales d'utilisation", href: "/cgu" },
    { title: "Politique des cookies", href: "/politique-cookies" },
  ],
  contact: [
    { title: "Nous contacter", href: "/contact" },
    { title: "Demander un devis", href: "/devis" },
    { title: "Prendre rendez-vous", href: "/rdv" },
  ]
};

export default function PlanDuSite() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-4">Plan du site</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Retrouvez l'ensemble des pages et formations disponibles sur notre site.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Pages principales */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-kassiopee-navy mb-4">Pages principales</h2>
            <ul className="space-y-2">
              {sitemap.pages.map((page) => (
                <li key={page.href}>
                  <Link 
                    href={page.href}
                    className="text-gray-700 hover:text-kassiopee-navy transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-kassiopee-gold rounded-full mr-2"></span>
                    {page.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Formations */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-kassiopee-navy mb-4">Nos formations</h2>
            <ul className="space-y-2">
              {sitemap.formations.map((formation) => (
                <li key={formation.href}>
                  <Link 
                    href={formation.href}
                    className="text-gray-700 hover:text-kassiopee-navy transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-kassiopee-gold rounded-full mr-2"></span>
                    {formation.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Ressources */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-kassiopee-navy mb-4">Ressources</h2>
            <ul className="space-y-2">
              {sitemap.ressources.map((ressource) => (
                <li key={ressource.href}>
                  <Link 
                    href={ressource.href}
                    className="text-gray-700 hover:text-kassiopee-navy transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-kassiopee-gold rounded-full mr-2"></span>
                    {ressource.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations légales */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-kassiopee-navy mb-4">Informations légales</h2>
            <ul className="space-y-2">
              {sitemap.legal.map((item) => (
                <li key={item.href}>
                  <Link 
                    href={item.href}
                    className="text-gray-700 hover:text-kassiopee-navy transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-kassiopee-gold rounded-full mr-2"></span>
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="bg-white p-6 rounded-xl shadow-sm">
            <h2 className="text-xl font-bold text-kassiopee-navy mb-4">Contact</h2>
            <ul className="space-y-2">
              {sitemap.contact.map((contact) => (
                <li key={contact.href}>
                  <Link 
                    href={contact.href}
                    className="text-gray-700 hover:text-kassiopee-navy transition-colors flex items-center"
                  >
                    <span className="w-2 h-2 bg-kassiopee-gold rounded-full mr-2"></span>
                    {contact.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Informations complémentaires */}
          <div className="bg-kassiopee-navy p-6 rounded-xl shadow-sm text-white">
            <h2 className="text-xl font-bold text-kassiopee-gold mb-4">Informations</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-kassiopee-gold">Kassiopée Formation</h3>
                <p className="text-sm text-gray-200">35 rue Armand Brette<br />
                93380 Pierrefitte-sur-Seine<br />
                France</p>
              </div>
              <div>
                <h3 className="font-semibold text-kassiopee-gold">Contact</h3>
                <p className="text-sm text-gray-200">
                  Tél : 07 43 67 87 68<br />
                  Email : formationkassiopee@gmail.com
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-kassiopee-gold">Horaires</h3>
                <p className="text-sm text-gray-200">
                  Lundi - Vendredi : 9h - 18h<br />
                  Samedi : Sur rendez-vous
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center text-sm text-gray-500">
          <p>Dernière mise à jour : {new Date().toLocaleDateString('fr-FR', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          <p className="mt-2">© {new Date().getFullYear()} Kassiopée Formation - Tous droits réservés</p>
        </div>
      </div>
    </div>
  );
}

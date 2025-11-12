import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Calendar, Clock, User, Quote, Heart, TrendingUp, Users, Star } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "De Comptable à Prothésiste Ongulaire : Le Parcours Inspirant de Sophie",
  description: "Il y a trois ans, Sophie était comptable. Aujourd'hui, elle est à son compte comme technicienne en prothésie ongulaire et ne regrette rien. Elle nous raconte son parcours de reconversion avec Kassiopée Formation.",
  keywords: "reconversion onglerie, témoignage formation onglerie, devenir prothésiste ongulaire, formation nail art, success story",
});

const etapesReconversion = [
  {
    titre: "Le déclic",
    periode: "Janvier 2021",
    description: "Après 12 ans en comptabilité, Sophie ressent un profond ennui et l'envie de créer quelque chose de beau.",
    emotion: "😔 Lassitude professionnelle"
  },
  {
    titre: "La découverte",
    periode: "Mars 2021", 
    description: "En se faisant poser des ongles, Sophie découvre l'univers de la prothésie ongulaire et a un véritable coup de cœur.",
    emotion: "✨ Révélation"
  },
  {
    titre: "La formation",
    periode: "Septembre 2021",
    description: "Sophie s'inscrit chez Kassiopée Formation pour une formation complète en prothésie ongulaire.",
    emotion: "🎓 Détermination"
  },
  {
    titre: "Les premiers pas",
    periode: "Février 2022",
    description: "Diplômée, Sophie commence par exercer à domicile le week-end tout en gardant son emploi.",
    emotion: "🚀 Premiers succès"
  },
  {
    titre: "Le grand saut",
    periode: "Septembre 2022",
    description: "Sophie quitte définitivement la comptabilité et ouvre son institut 'Ongles de Rêve'.",
    emotion: "💪 Liberté totale"
  },
  {
    titre: "Aujourd'hui",
    periode: "Décembre 2024",
    description: "Sophie a une clientèle fidèle de 200 clientes et emploie une assistante. Elle ne regrette rien !",
    emotion: "🌟 Épanouissement"
  }
];

const chiffresSucces = [
  {
    nombre: "200+",
    description: "Clientes fidèles",
    icon: Users
  },
  {
    nombre: "3 500€",
    description: "CA mensuel moyen",
    icon: TrendingUp
  },
  {
    nombre: "98%",
    description: "Clients satisfaits",
    icon: Star
  },
  {
    nombre: "1",
    description: "Employée recrutée",
    icon: Heart
  }
];

const conseilsSophie = [
  {
    conseil: "N'ayez pas peur de l'âge",
    explication: "J'ai commencé à 35 ans et c'est finalement un avantage. J'ai de l'expérience, de la maturité et mes clientes me font confiance."
  },
  {
    conseil: "Investissez dans une formation de qualité",
    explication: "Kassiopée m'a donné des bases solides. Les formatrices étaient professionnelles et bienveillantes. C'est essentiel pour bien démarrer."
  },
  {
    conseil: "Commencez en douceur",
    explication: "Gardez votre emploi au début et développez votre activité progressivement. Cela rassure et permet de constituer une clientèle."
  },
  {
    conseil: "Soignez votre communication",
    explication: "Instagram et Facebook sont indispensables. Montrez votre travail, vos créations. C'est votre meilleure publicité !"
  },
  {
    conseil: "Restez passionnée",
    explication: "Ce métier demande de la créativité et de la patience. Si vous aimez vraiment ce que vous faites, ça se ressent et les clientes reviennent."
  }
];

export default function TemoignageSophieProthesisteOngulairePage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <Link href="/actualites" className="text-kassiopee-navy hover:text-kassiopee-lightblue">
              ← Retour aux actualités
            </Link>
          </nav>

          {/* Article Header */}
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-4">
              <span className="bg-kassiopee-gold text-kassiopee-navy px-3 py-1 rounded-full text-sm font-semibold">
                Témoignages & Réussites
              </span>
              <div className="flex items-center text-gray-500 text-sm space-x-4">
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  Sophie Martin
                </div>
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  5 décembre 2024
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  6 min de lecture
                </div>
              </div>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              De Comptable à Prothésiste Ongulaire : Le Parcours Inspirant de Sophie
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Il y a trois ans, Sophie était comptable dans un cabinet parisien. Aujourd'hui, elle est à son compte comme technicienne en prothésie ongulaire et ne regrette rien. Elle nous raconte son parcours de reconversion avec Kassiopée Formation.
            </p>
          </div>

          {/* Featured Image */}
          <div className="relative h-96 rounded-xl overflow-hidden mb-12">
            <Image
              src="https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg"
              alt="Sophie prothésiste ongulaire"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="bg-white py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Introduction Sophie */}
          <div className="bg-kassiopee-navy text-white p-8 rounded-xl mb-12">
            <div className="flex items-center mb-6">
              <Quote className="h-12 w-12 text-kassiopee-gold mr-4" />
              <div>
                <h2 className="text-2xl font-bold text-kassiopee-gold">Sophie Martin, 38 ans</h2>
                <p className="text-gray-200">Ancienne comptable devenue prothésiste ongulaire</p>
              </div>
            </div>
            <p className="text-lg italic">
              "Si quelqu'un m'avait dit il y a 4 ans que je quitterais mon bureau pour créer de la beauté avec mes mains, je ne l'aurais jamais cru. Aujourd'hui, je me lève chaque matin avec le sourire !"
            </p>
          </div>

          {/* Le déclic */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Le Déclic : Quand Tout a Basculé</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>"J'étais comptable depuis mes 23 ans"</strong>, raconte Sophie. <em>"Un métier stable, bien payé, mais qui ne me passionnait plus du tout. Chaque lundi matin était un calvaire. Je me levais en me demandant si c'était vraiment ça, ma vie."</em>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                Le déclic est venu d'une façon inattendue : <strong>"En mars 2021, je suis allée me faire poser des ongles pour un mariage. En voyant la prothésiste travailler, j'ai été fascinée par sa créativité, sa précision, et surtout par le bonheur qu'elle procurait à ses clientes. J'ai su à ce moment-là que c'était ça que je voulais faire."</strong>
              </p>
            </div>
          </div>

          {/* Parcours de reconversion */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Son Parcours de Reconversion</h2>
            
            <div className="space-y-8">
              {etapesReconversion.map((etape, index) => (
                <div key={index} className="flex items-start">
                  <div className="bg-kassiopee-gold text-kassiopee-navy p-3 rounded-full mr-6 mt-1 flex-shrink-0">
                    <span className="font-bold text-lg">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <div className="bg-gray-50 p-6 rounded-xl">
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-xl font-bold text-kassiopee-navy">{etape.titre}</h3>
                        <span className="text-sm text-gray-500 font-semibold">{etape.periode}</span>
                      </div>
                      <p className="text-gray-700 mb-3">{etape.description}</p>
                      <div className="text-lg">{etape.emotion}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Le choix de la formation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Pourquoi Kassiopée Formation ?</h2>
            
            <div className="bg-kassiopee-gold p-8 rounded-xl">
              <Quote className="h-8 w-8 text-kassiopee-navy mb-4" />
              <p className="text-lg text-kassiopee-navy italic mb-4">
                "J'ai comparé plusieurs organismes de formation. Kassiopée m'a convaincue par le sérieux de leur programme, la qualité de leurs plateaux techniques et surtout l'accompagnement personnalisé qu'ils proposent."
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-kassiopee-navy mb-2">🎓 Formation complète</h4>
                  <p className="text-gray-700 text-sm">Techniques de base, nail art, hygiène, gestion d'institut</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-kassiopee-navy mb-2">👩‍🏫 Formatrices expertes</h4>
                  <p className="text-gray-700 text-sm">Professionnelles en activité, bienveillantes et pédagogues</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-kassiopee-navy mb-2">🏢 Matériel professionnel</h4>
                  <p className="text-gray-700 text-sm">Équipements de qualité, produits haut de gamme</p>
                </div>
                <div className="bg-white p-4 rounded-lg">
                  <h4 className="font-bold text-kassiopee-navy mb-2">🤝 Suivi post-formation</h4>
                  <p className="text-gray-700 text-sm">Conseils pour l'installation, réseau d'anciennes élèves</p>
                </div>
              </div>
            </div>
          </div>

          {/* Le déroulé de la formation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">L'Expérience de Formation</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <em>"La formation a duré 4 mois en cours du soir et week-ends"</em>, explique Sophie. <strong>"C'était intense mais passionnant. J'ai appris toutes les techniques : pose de gel, résine, nail art, french manucure... Mais aussi la partie business : comment gérer un institut, fidéliser sa clientèle, respecter les normes d'hygiène."</strong>
              </p>
              
              <div className="bg-blue-50 p-6 rounded-xl mb-6">
                <h4 className="font-bold text-blue-800 mb-3">💡 Ce qui l'a le plus marquée :</h4>
                <ul className="space-y-2 text-blue-700">
                  <li>• La bienveillance des formatrices : "Elles nous ont vraiment accompagnées"</li>
                  <li>• La qualité du matériel : "On travaillait avec du matériel professionnel"</li>
                  <li>• L'entraide entre élèves : "On s'est créé un vrai réseau d'entraide"</li>
                  <li>• Les modèles : "Kassiopée nous aidait à trouver des modèles pour s'entraîner"</li>
                </ul>
              </div>
            </div>
          </div>

          {/* L'installation */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">L'Installation : Comment S'est Passée la Recherche de Clientèle ?</h2>
            
            <div className="prose prose-lg max-w-none">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>"J'ai commencé doucement"</strong>, raconte Sophie. <em>"Les premiers mois, je travaillais encore à mi-temps en comptabilité et je faisais de la prothésie ongulaire le soir et le week-end, à domicile."</em>
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                <strong>"Ma première cliente était ma voisine. Puis le bouche-à-oreille a fonctionné. J'ai aussi créé un compte Instagram pour montrer mes créations. En 6 mois, j'avais une cinquantaine de clientes régulières."</strong>
              </p>
            </div>

            {/* Chiffres du succès */}
            <div className="bg-kassiopee-navy text-white p-8 rounded-xl">
              <h3 className="text-xl font-bold text-kassiopee-gold mb-6 text-center">
                📊 Sophie en Chiffres Aujourd'hui
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {chiffresSucces.map((chiffre, index) => {
                  const IconComponent = chiffre.icon;
                  return (
                    <div key={index} className="text-center">
                      <IconComponent className="h-8 w-8 text-kassiopee-gold mx-auto mb-2" />
                      <div className="text-2xl font-bold text-kassiopee-gold">{chiffre.nombre}</div>
                      <div className="text-sm text-gray-200">{chiffre.description}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Conseils de Sophie */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Ses Conseils pour Ceux qui Veulent se Lancer
            </h2>
            
            <div className="space-y-6">
              {conseilsSophie.map((item, index) => (
                <div key={index} className="bg-white border-l-4 border-kassiopee-gold p-6 rounded-r-xl shadow-lg">
                  <h4 className="text-lg font-bold text-kassiopee-navy mb-3">
                    💡 {item.conseil}
                  </h4>
                  <p className="text-gray-700 italic">"{item.explication}"</p>
                </div>
              ))}
            </div>
          </div>

          {/* Message final */}
          <div className="bg-kassiopee-gold p-8 rounded-xl text-center">
            <Quote className="h-12 w-12 text-kassiopee-navy mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-kassiopee-navy mb-4">
              Son Message Final
            </h2>
            <p className="text-lg text-kassiopee-navy italic mb-6">
              "Si vous hésitez encore, n'hésitez plus ! La reconversion, c'est possible à tout âge. Il faut juste oser franchir le pas. Moi, j'ai retrouvé la passion, l'épanouissement et même une meilleure situation financière. Que demander de plus ?"
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/formations"
                className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center"
              >
                Découvrir nos formations
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
              >
                Prêt(e) à écrire votre propre success story ?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Articles similaires */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
            Autres <span className="text-kassiopee-navy">témoignages</span>
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link href="/actualites/reconversion-metiers-passion-2024" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg"
                    alt="Reconversion métiers passion"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                    5 Métiers Passion qui Recrutent
                  </h3>
                  <p className="text-gray-600">Découvrez les métiers de la beauté qui offrent de réelles opportunités...</p>
                </div>
              </article>
            </Link>
            
            <Link href="/actualites/cap-esthetique-candidat-libre-guide" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg"
                    alt="CAP Esthétique candidat libre"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                    CAP Esthétique en Candidat Libre
                  </h3>
                  <p className="text-gray-600">Le guide complet pour réussir son CAP en candidat libre...</p>
                </div>
              </article>
            </Link>
            
            <Link href="/actualites/financer-formation-cpf-pole-emploi" className="group block">
              <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="relative h-48">
                  <Image
                    src="https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg"
                    alt="Financer sa formation"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                    Comment Financer sa Formation
                  </h3>
                  <p className="text-gray-600">CPF, Pôle Emploi... tous les dispositifs disponibles...</p>
                </div>
              </article>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

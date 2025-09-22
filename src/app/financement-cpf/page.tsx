import React from 'react';
import Link from 'next/link';
import { 
  CreditCard, 
  CheckCircle, 
  ArrowRight, 
  Calculator, 
  FileText, 
  Users, 
  Clock,
  Euro,
  Smartphone,
  Shield,
  TrendingUp,
  Award
} from 'lucide-react';
import { generateSEO } from '@/lib/seo';
import FAQSection from '@/components/ui/FAQSection';
import CPFCalculator from '@/components/ui/CPFCalculator';

export const metadata = generateSEO({
  title: "Financement CPF - Utilisez vos droits pour nos formations RNCP | Kassiopée Formation",
  description: "Découvrez comment utiliser votre Compte Personnel de Formation (CPF) pour financer vos formations RNCP. Guide complet, étapes détaillées et conseils d'experts.",
  keywords: "CPF, compte personnel formation, financement formation, RNCP, moncompteformation, droits formation",
});

const etapesCPF = [
  {
    numero: 1,
    titre: "Vérifiez vos droits",
    description: "Connectez-vous sur moncompteformation.gouv.fr pour connaître le montant de vos droits CPF disponibles",
    icon: Calculator,
    temps: "2 min"
  },
  {
    numero: 2,
    titre: "Trouvez votre formation",
    description: "Recherchez 'Kassiopée Formation' et sélectionnez la formation RNCP qui vous intéresse",
    icon: FileText,
    temps: "5 min"
  },
  {
    numero: 3,
    titre: "Créez votre dossier",
    description: "Remplissez votre demande de financement directement sur la plateforme officielle",
    icon: Users,
    temps: "10 min"
  },
  {
    numero: 4,
    titre: "Validation et inscription",
    description: "Une fois validé, vous recevez votre convocation et pouvez commencer votre formation",
    icon: CheckCircle,
    temps: "48h"
  }
];

const avantagesCPF = [
  {
    titre: "Financement jusqu'à 100%",
    description: "Vos formations RNCP peuvent être entièrement financées par vos droits CPF",
    icon: Euro
  },
  {
    titre: "Démarches simplifiées",
    description: "Inscription directe en ligne sur moncompteformation.gouv.fr",
    icon: Smartphone
  },
  {
    titre: "Sécurisé et officiel",
    description: "Plateforme gouvernementale sécurisée et organismes certifiés",
    icon: Shield
  },
  {
    titre: "Formations certifiantes",
    description: "Toutes nos formations RNCP sont reconnues par l'État",
    icon: Award
  }
];

const formationsEligibles = [
  {
    titre: "RNCP Négociateur Technico-Commercial",
    code: "RNCP 39063",
    duree: "5 jours (35h)",
    prix: "2 500€",
    description: "Formation certifiante pour maîtriser les techniques de vente et négociation commerciale",
    href: "/formations/formation-ntc"
  },
  {
    titre: "RNCP Assistant Ressources Humaines", 
    code: "RNCP 35030",
    duree: "5 jours (35h)",
    prix: "2 300€",
    description: "Formation certifiante en administration du personnel et gestion RH",
    href: "/formations/formation-arh"
  },
  {
    titre: "Booster sa Candidature (CV)",
    code: "Certification professionnelle",
    duree: "1 jour (7h)",
    prix: "450€",
    description: "Optimisation CV et stratégie de candidature pour décrocher un emploi",
    href: "/formations/formation-cv"
  },
  {
    titre: "Anglais Professionnel",
    code: "Certification TOEIC",
    duree: "2 jours (14h)",
    prix: "800€",
    description: "Anglais des affaires et communication professionnelle",
    href: "/formations/formation-anglais"
  },
  {
    titre: "Marketing Digital",
    code: "Certification digitale",
    duree: "3 jours (21h)",
    prix: "1 200€",
    description: "Stratégie réseaux sociaux et campagnes d'acquisition",
    href: "/formations/formation-marketing"
  }
];

const solutionsComplementaires = [
  {
    titre: "Abondement employeur",
    description: "Votre employeur peut compléter vos droits CPF pour financer votre formation",
    pourcentage: "60%"
  },
  {
    titre: "Pôle Emploi (AIF)",
    description: "Aide Individuelle à la Formation pour les demandeurs d'emploi",
    pourcentage: "45%"
  },
  {
    titre: "OPCO",
    description: "Opérateurs de Compétences selon votre secteur d'activité",
    pourcentage: "35%"
  },
  {
    titre: "Région / Département",
    description: "Aides locales selon votre région de résidence",
    pourcentage: "25%"
  }
];

export default function FinancementCPFPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-kassiopee-navy to-kassiopee-lightblue text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Financez votre formation avec votre <span className="text-kassiopee-gold">CPF</span>
              </h1>
              <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                Utilisez vos droits à la formation pour obtenir une certification RNCP reconnue par l'État. 
                Jusqu'à 5000€ disponibles pour votre développement professionnel.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="https://www.moncompteformation.gouv.fr"
                  target="_blank"
                  className="bg-kassiopee-gold text-kassiopee-navy px-8 py-4 rounded-lg font-bold hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
                >
                  <CreditCard className="h-5 w-5 mr-2" />
                  Vérifier mes droits CPF
                </Link>
                <Link
                  href="/formations"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-kassiopee-navy transition-colors inline-flex items-center justify-center"
                >
                  Voir nos formations
                  <ArrowRight className="h-5 w-5 ml-2" />
                </Link>
              </div>
            </div>
            
            {/* CPF Card Mockup */}
            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-xl font-bold">Mon Compte Formation</h3>
                  <div className="bg-kassiopee-gold text-kassiopee-navy px-3 py-1 rounded-full text-sm font-bold">
                    CPF
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200">Droits disponibles :</span>
                    <span className="text-kassiopee-gold font-bold text-2xl">2 450€</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-200">Formations éligibles :</span>
                    <span className="text-white font-semibold">7 formations</span>
                  </div>
                  <div className="bg-kassiopee-gold/20 rounded-lg p-4 mt-4">
                    <p className="text-sm text-white">
                      💡 Vos droits CPF peuvent financer intégralement nos formations RNCP !
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Avantages CPF */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Pourquoi utiliser votre <span className="text-kassiopee-navy">CPF</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Le Compte Personnel de Formation vous donne accès à des formations de qualité 
              sans avancer d'argent.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {avantagesCPF.map((avantage, index) => {
              const IconComponent = avantage.icon;
              return (
                <div key={index} className="text-center">
                  <div className="bg-kassiopee-lightblue/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                    <IconComponent className="h-8 w-8 text-kassiopee-navy" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{avantage.titre}</h3>
                  <p className="text-gray-600">{avantage.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Calculateur CPF */}
      <section id="calculateur" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Calculez vos droits <span className="text-kassiopee-navy">CPF</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Vérifiez votre éligibilité et découvrez comment financer votre certification RNCP
            </p>
          </div>
          
          <CPFCalculator />
        </div>
      </section>

      {/* Étapes pour utiliser le CPF */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comment utiliser votre <span className="text-kassiopee-navy">CPF</span> ?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              4 étapes simples pour financer votre formation avec vos droits CPF
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {etapesCPF.map((etape, index) => {
              const IconComponent = etape.icon;
              return (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <div className="flex items-center justify-between mb-4">
                      <div className="bg-kassiopee-navy text-kassiopee-gold rounded-full w-10 h-10 flex items-center justify-center font-bold text-lg">
                        {etape.numero}
                      </div>
                      <div className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {etape.temps}
                      </div>
                    </div>
                    <div className="bg-kassiopee-lightblue/10 rounded-lg p-3 mb-4">
                      <IconComponent className="h-8 w-8 text-kassiopee-navy mx-auto" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{etape.titre}</h3>
                    <p className="text-gray-600 text-sm">{etape.description}</p>
                  </div>
                  {index < etapesCPF.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <ArrowRight className="h-6 w-6 text-kassiopee-gold" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Formations éligibles */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Formations <span className="text-kassiopee-navy">éligibles CPF</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Toutes nos formations sont référencées sur moncompteformation.gouv.fr
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {formationsEligibles.map((formation, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-kassiopee-navy mb-2">{formation.titre}</h3>
                    <div className="flex items-center gap-4 text-sm text-gray-600 mb-3">
                      <span className="bg-kassiopee-gold/20 text-kassiopee-navy px-2 py-1 rounded-full font-semibold">
                        {formation.code}
                      </span>
                      <span className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {formation.duree}
                      </span>
                    </div>
                    <p className="text-gray-700 mb-4">{formation.description}</p>
                  </div>
                  <div className="text-right ml-4">
                    <div className="text-2xl font-bold text-kassiopee-navy">{formation.prix}</div>
                    <div className="text-sm text-gray-500">Finançable CPF</div>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link
                    href={formation.href}
                    className="flex-1 bg-kassiopee-navy text-white px-4 py-2 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors text-center"
                  >
                    Voir la formation
                  </Link>
                  <Link
                    href="https://www.moncompteformation.gouv.fr"
                    target="_blank"
                    className="border-2 border-kassiopee-navy text-kassiopee-navy px-4 py-2 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
                  >
                    S'inscrire CPF
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solutions complémentaires */}
      <section className="py-16 bg-kassiopee-gold">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-4">
              Vos droits CPF ne suffisent pas ?
            </h2>
            <p className="text-xl text-kassiopee-navy/80 max-w-3xl mx-auto">
              Découvrez les solutions de financement complémentaires disponibles
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {solutionsComplementaires.map((solution, index) => (
              <div key={index} className="bg-white rounded-xl p-6 text-center shadow-lg">
                <div className="text-3xl font-bold text-kassiopee-navy mb-2">{solution.pourcentage}</div>
                <div className="text-sm text-gray-500 mb-3">des cas financés</div>
                <h3 className="text-lg font-bold text-kassiopee-navy mb-3">{solution.titre}</h3>
                <p className="text-gray-700 text-sm">{solution.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6">
              <h3 className="text-xl font-bold text-kassiopee-navy mb-4">
                Besoin d'aide pour votre financement ?
              </h3>
              <p className="text-kassiopee-navy/80 mb-6">
                Nos conseillers vous accompagnent gratuitement dans vos démarches
              </p>
              <Link
                href="/contact"
                className="bg-kassiopee-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center"
              >
                <Users className="h-5 w-5 mr-2" />
                Être accompagné(e)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection 
        title="Questions fréquentes sur le CPF"
        subtitle="Tout ce que vous devez savoir sur le financement de votre formation"
        showCategories={false}
        maxItems={6}
        className="bg-gray-50"
      />

      {/* CTA Final */}
      <section className="py-16 bg-kassiopee-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à utiliser votre CPF ?
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Vérifiez vos droits et inscrivez-vous directement en ligne sur la plateforme officielle
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://www.moncompteformation.gouv.fr"
              target="_blank"
              className="bg-kassiopee-gold text-kassiopee-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-colors inline-flex items-center justify-center"
            >
              <CreditCard className="h-5 w-5 mr-2" />
              Accéder à Mon Compte Formation
            </Link>
            <Link
              href="/contact"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-kassiopee-navy transition-colors"
            >
              Être accompagné(e)
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

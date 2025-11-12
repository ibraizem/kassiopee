'use client';

import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Award, CreditCard, Clock, Users, BookOpen } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'rncp' | 'cpf' | 'inscription' | 'formation' | 'certification';
  icon: React.ComponentType<any>;
}

const faqData: FAQItem[] = [
  // Questions RNCP
  {
    id: 'rncp-1',
    question: 'Qu\'est-ce qu\'une certification RNCP ?',
    answer: 'Le RNCP (Répertoire National des Certifications Professionnelles) est un registre officiel qui recense les certifications reconnues par l\'État français. Une certification RNCP atteste que les compétences acquises correspondent aux besoins du marché du travail et sont reconnues par les employeurs.',
    category: 'rncp',
    icon: Award
  },
  {
    id: 'rncp-2',
    question: 'Quelle est la différence entre RNCP niveau 5 et niveau 6 ?',
    answer: 'Le niveau 5 RNCP correspond à un niveau Bac+2 (BTS, DUT) et le niveau 6 à un niveau Bac+3/4 (Licence, Master 1). Nos formations RNCP Négociateur Technico-Commercial (39063) et Assistant RH (35030) sont de niveau 5.',
    category: 'rncp',
    icon: Award
  },
  {
    id: 'rncp-3',
    question: 'Comment obtenir ma certification RNCP ?',
    answer: 'Pour obtenir votre certification RNCP, vous devez : 1) Suivre la formation complète, 2) Réussir les évaluations continues, 3) Présenter un dossier professionnel, 4) Passer un entretien final avec un jury de professionnels. Notre équipe vous accompagne à chaque étape.',
    category: 'rncp',
    icon: Award
  },

  // Questions CPF
  {
    id: 'cpf-1',
    question: 'Comment utiliser mon CPF pour financer ma formation ?',
    answer: 'Connectez-vous sur moncompteformation.gouv.fr, recherchez notre organisme "Kassiopée Formation", sélectionnez votre formation et utilisez vos droits CPF. Toutes nos formations RNCP sont éligibles au financement CPF.',
    category: 'cpf',
    icon: CreditCard
  },
  {
    id: 'cpf-2',
    question: 'Combien de droits CPF ai-je accumulés ?',
    answer: 'Vos droits CPF sont visibles sur moncompteformation.gouv.fr. En général, vous cumulez 500€ par an (800€ si vous n\'avez pas le bac), plafonnés à 5000€ (8000€ sans le bac). Les droits acquis avant 2019 en heures ont été convertis en euros (1h = 15€).',
    category: 'cpf',
    icon: CreditCard
  },
  {
    id: 'cpf-3',
    question: 'Que faire si mes droits CPF ne suffisent pas ?',
    answer: 'Plusieurs solutions existent : abondement employeur, financement Pôle Emploi, OPCO, région, ou complément personnel. Nous vous accompagnons pour trouver la solution de financement adaptée à votre situation.',
    category: 'cpf',
    icon: CreditCard
  },

  // Questions inscription
  {
    id: 'inscription-1',
    question: 'Quels sont les prérequis pour s\'inscrire ?',
    answer: 'Les prérequis varient selon la formation : RNCP NTC (expérience commerciale souhaitée), RNCP ARH (niveau bac recommandé). Pour les autres formations (CV, Anglais, Marketing), aucun prérequis spécifique. Nous évaluons chaque candidature individuellement.',
    category: 'inscription',
    icon: Users
  },
  {
    id: 'inscription-2',
    question: 'Combien de temps avant le début de formation dois-je m\'inscrire ?',
    answer: 'Nous recommandons de vous inscrire au moins 15 jours avant le début de la formation pour les démarches administratives. Pour les formations RNCP, un délai de 1 mois est préférable pour constituer le dossier complet.',
    category: 'inscription',
    icon: Clock
  },
  {
    id: 'inscription-3',
    question: 'Puis-je annuler mon inscription ?',
    answer: 'Oui, vous disposez d\'un délai de rétractation de 14 jours. Au-delà, les conditions d\'annulation dépendent du mode de financement (CPF, employeur, personnel). Consultez nos CGV pour plus de détails.',
    category: 'inscription',
    icon: Users
  },

  // Questions formation
  {
    id: 'formation-1',
    question: 'Les formations se déroulent-elles en présentiel ou à distance ?',
    answer: 'Nos formations sont principalement en présentiel dans notre centre en région parisienne. Certaines formations peuvent être proposées en format mixte (blended learning) avec des modules à distance. Le format est précisé lors de l\'inscription.',
    category: 'formation',
    icon: BookOpen
  },
  {
    id: 'formation-2',
    question: 'Que se passe-t-il si je rate une session ?',
    answer: 'En cas d\'absence justifiée, nous proposons des sessions de rattrapage ou la possibilité d\'intégrer la session suivante. Pour les formations RNCP, la présence est obligatoire pour valider la certification.',
    category: 'formation',
    icon: BookOpen
  },
  {
    id: 'formation-3',
    question: 'Recevrai-je un certificat à la fin de ma formation ?',
    answer: 'Oui, vous recevrez : une attestation de formation pour toutes nos formations, un certificat RNCP pour les formations certifiantes (après validation par le jury), et une attestation de compétences détaillant les acquis.',
    category: 'formation',
    icon: BookOpen
  }
];

const categories = [
  { id: 'all', name: 'Toutes', icon: HelpCircle },
  { id: 'rncp', name: 'Certifications RNCP', icon: Award },
  { id: 'cpf', name: 'Financement CPF', icon: CreditCard },
  { id: 'inscription', name: 'Inscription', icon: Users },
  { id: 'formation', name: 'Formation', icon: BookOpen }
];

interface FAQSectionProps {
  title?: string;
  subtitle?: string;
  showCategories?: boolean;
  maxItems?: number;
  className?: string;
}

export default function FAQSection({
  title = "Questions Fréquentes",
  subtitle = "Trouvez rapidement les réponses à vos questions sur nos formations RNCP et le financement CPF",
  showCategories = true,
  maxItems,
  className = ""
}: FAQSectionProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFAQ = activeCategory === 'all' 
    ? faqData 
    : faqData.filter(item => item.category === activeCategory);

  const displayedFAQ = maxItems ? filteredFAQ.slice(0, maxItems) : filteredFAQ;

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className={`py-16 bg-white ${className}`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            {title.split(' ').map((word, index) => 
              index === title.split(' ').length - 1 ? (
                <span key={index} className="text-kassiopee-navy">{word}</span>
              ) : (
                <span key={index}>{word} </span>
              )
            )}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {subtitle}
          </p>
        </div>

        {/* Category Filter */}
        {showCategories && (
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => {
              const IconComponent = category.icon;
              const isActive = activeCategory === category.id;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full font-medium transition-all duration-200 ${
                    isActive
                      ? 'bg-kassiopee-navy text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-kassiopee-lightblue/10 hover:text-kassiopee-navy'
                  }`}
                >
                  <IconComponent className="h-4 w-4 mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        )}

        {/* FAQ Items */}
        <div className="space-y-4">
          {displayedFAQ.map((item) => {
            const isOpen = openItems.includes(item.id);
            const IconComponent = item.icon;
            
            return (
              <div
                key={item.id}
                className="bg-gray-50 rounded-xl border border-gray-200 hover:border-kassiopee-lightblue transition-colors duration-200"
              >
                <button
                  onClick={() => toggleItem(item.id)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-100 rounded-xl transition-colors duration-200"
                >
                  <div className="flex items-center">
                    <div className="bg-kassiopee-navy text-white p-2 rounded-lg mr-4">
                      <IconComponent className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 pr-4">
                      {item.question}
                    </h3>
                  </div>
                  <div className="flex-shrink-0">
                    {isOpen ? (
                      <ChevronUp className="h-5 w-5 text-kassiopee-navy" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-kassiopee-navy" />
                    )}
                  </div>
                </button>
                
                {isOpen && (
                  <div className="px-6 pb-4">
                    <div className="pl-14">
                      <p className="text-gray-700 leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center">
          <div className="bg-kassiopee-gold/10 rounded-xl p-8">
            <h3 className="text-xl font-bold text-kassiopee-navy mb-4">
              Vous ne trouvez pas la réponse à votre question ?
            </h3>
            <p className="text-gray-700 mb-6">
              Notre équipe est là pour vous accompagner dans votre projet de formation
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-kassiopee-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors"
              >
                Nous contacter
              </a>
              <a
                href="tel:0743678768"
                className="border-2 border-kassiopee-navy text-kassiopee-navy px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
              >
                07 43 67 87 68
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

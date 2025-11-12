"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

type FaqItem = {
  id: number;
  question: string;
  answer: string;
};

const FaqSection = () => {
  const [openItem, setOpenItem] = useState<number | null>(1);

  const faqItems: FaqItem[] = [
    {
      id: 1,
      question: "Quels sont les prérequis pour suivre cette formation ?",
      answer: "Notre formation est accessible à tous les profils, sans prérequis spécifiques. Une bonne maîtrise de l'outil informatique et une connexion internet stable sont recommandées pour la version en ligne."
    },
    {
      id: 2,
      question: "Comment se passe l'inscription à la formation ?",
      answer: "L'inscription se fait en ligne via notre plateforme sécurisée. Après avoir choisi votre session, vous recevrez un email de confirmation avec toutes les informations nécessaires pour finaliser votre inscription."
    },
    {
      id: 3,
      question: "Quelle est la durée de la formation ?",
      answer: "La formation dure 3 jours consécutifs, soit 21 heures de formation intensive. Des options en soirée ou en week-end sont également disponibles selon les sessions."
    },
    {
      id: 4,
      question: "La formation est-elle éligible au CPF ?",
      answer: "Oui, notre formation est éligible au Compte Personnel de Formation (CPF). Nos conseillers peuvent vous accompagner dans vos démarches de financement."
    },
    {
      id: 5,
      question: "Quelle est la différence entre la formation en présentiel et en ligne ?",
      answer: "Le contenu pédagogique est identique dans les deux formats. La version en présentiel permet des échanges plus directs avec le formateur, tandis que la version en ligne offre plus de flexibilité géographique."
    },
    {
      id: 6,
      question: "Quel est le délai d'accès après inscription ?",
      answer: "Pour les formations en présentiel, vous recevrez une convocation avec le lieu exact 10 jours avant le début. Pour le e-learning, vos identifiants vous seront envoyés sous 24h ouvrées."
    }
  ];

  const toggleItem = (id: number) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600">
            Retrouvez les réponses aux questions les plus courantes
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <div key={item.id} className="bg-white rounded-xl overflow-hidden shadow-sm">
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium text-gray-900">{item.question}</span>
                {openItem === item.id ? (
                  <ChevronUp className="h-5 w-5 text-gray-500" />
                ) : (
                  <ChevronDown className="h-5 w-5 text-gray-500" />
                )}
              </button>
              
              {openItem === item.id && (
                <div className="px-6 pb-6 pt-0">
                  <div className="text-gray-600">
                    {item.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center"
            >
              Poser une question
            </a>
            <a
              href="tel:+33123456789"
              className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center justify-center"
            >
              Appeler un conseiller
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            Nos conseillers sont disponibles du lundi au vendredi de 9h à 18h
          </p>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

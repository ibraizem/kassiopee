"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, MessageCircle, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1.5 rounded-full mb-4">
            FAQ
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
            Questions fréquentes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Retrouvez les réponses aux questions les plus courantes sur nos formations et démarches
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqItems.map((item) => (
            <motion.div 
              key={item.id} 
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 border border-gray-100"
              initial={false}
              animate={{
                boxShadow: openItem === item.id 
                  ? '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
                  : '0 1px 3px 0 rgba(0, 0, 0, 0.05)'
              }}
            >
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex justify-between items-center hover:bg-gray-50 transition-colors group"
                aria-expanded={openItem === item.id}
                aria-controls={`faq-${item.id}`}
              >
                <span className="font-medium text-gray-900 text-lg group-hover:text-blue-600 transition-colors">
                  {item.question}
                </span>
                <div className="ml-4 flex-shrink-0">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openItem === item.id ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600'}`}>
                    {openItem === item.id ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </div>
                </div>
              </button>
              
              <AnimatePresence>
                {openItem === item.id && (
                  <motion.div
                    id={`faq-${item.id}`}
                    initial="collapsed"
                    animate="open"
                    exit="collapsed"
                    variants={{
                      open: { opacity: 1, height: 'auto' },
                      collapsed: { opacity: 0, height: 0 }
                    }}
                    transition={{ duration: 0.3, ease: 'easeInOut' }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-gray-600">
                      <div className="border-t border-gray-100 pt-5">
                        {item.answer}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-6">
            Vous ne trouvez pas de réponse à votre question ?
          </h3>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour répondre à toutes vos interrogations sur nos formations et vos possibilités de financement.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 max-w-md mx-auto">
            <a
              href="mailto:contact@kassiopee-formation.com"
              className="group px-6 py-3.5 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl font-medium hover:shadow-lg hover:shadow-blue-100 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <MessageCircle className="h-5 w-5" />
              <span>Nous écrire</span>
              <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a
              href="tel:0743678768"
              className="group px-6 py-3.5 border-2 border-blue-600 text-blue-600 rounded-xl font-medium hover:bg-blue-50 transition-all duration-300 inline-flex items-center justify-center gap-2"
            >
              <Phone className="h-5 w-5" />
              <span>07 43 67 87 68</span>
            </a>
          </div>
          
          <p className="mt-6 text-sm text-gray-500 flex items-center justify-center gap-2">
            <span className="inline-flex h-2 w-2 rounded-full bg-green-400"></span>
            Nos conseillers sont disponibles du lundi au vendredi de 9h à 18h
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

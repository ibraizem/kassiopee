'use client';

import { ChevronDown, ChevronUp, Download, CheckCircle } from "lucide-react";
import { useState } from "react";

type Day = {
  id: number;
  title: string;
  content: string[];
};

const ProgramSection = () => {
  const [openDay, setOpenDay] = useState<number | null>(1);

  const days: Day[] = [
    {
      id: 1,
      title: "Partie 1 : Stratégie & positionnement (6h)",
      content: [
        "Analyse de marché et veille concurrentielle",
        "Définition des personas et parcours client",
        "Choix des plateformes et positionnement de marque",
        "Définition d'objectifs SMART pour les réseaux sociaux"
      ]
    },
    {
      id: 2,
      title: "Partie 2 : Création de contenu & animation (8h)",
      content: [
        "Les différents types de contenus et leur optimisation",
        "Mise en place d'un calendrier éditorial efficace",
        "Maîtrise des outils de création (Canva, etc.)",
        "Storytelling et techniques d'engagement",
        "Gestion de communauté et modération"
      ]
    },
    {
      id: 3,
      title: "Partie 3 : Publicité & acquisition (7h)",
      content: [
        "Fonctionnement des algorithmes des réseaux sociaux",
        "Création de campagnes publicitaires efficaces",
        "Ciblage avancé et optimisation des audiences",
        "Analyse des performances et KPI clés",
        "Techniques d'optimisation du ROI"
      ]
    }
  ];

  const toggleDay = (id: number) => {
    setOpenDay(openDay === id ? null : id);
  };

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Programme de la formation</h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Un parcours complet sur 21 heures pour maîtriser tous les aspects du marketing digital
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {days.map((day, index) => (
            <div 
              key={day.id} 
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-md transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 50}
            >
              <button
                onClick={() => toggleDay(day.id)}
                className={`w-full px-6 py-5 text-left flex justify-between items-center transition-colors duration-200 ${
                  openDay === day.id 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-800'
                }`}
              >
                <span className="font-medium text-base md:text-lg">{day.title}</span>
                {openDay === day.id ? (
                  <ChevronUp className="h-5 w-5 flex-shrink-0" />
                ) : (
                  <ChevronDown className="h-5 w-5 flex-shrink-0" />
                )}
              </button>
              {openDay === day.id && (
                <div className="p-6 bg-white border-t border-gray-100">
                  <ul className="space-y-3">
                    {day.content.map((item, itemIndex) => (
                      <li 
                        key={itemIndex} 
                        className="flex items-start group"
                        data-aos="fade-up"
                        data-aos-delay={itemIndex * 50}
                      >
                        <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-50 flex items-center justify-center mr-3 mt-0.5 group-hover:bg-blue-100 transition-colors">
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a 
            href="/programme-complet.pdf" 
            className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
            download
          >
            <Download className="h-5 w-5 mr-2" />
            Télécharger le programme détaillé (PDF)
          </a>
        </div>

        <div className="mt-12 text-center bg-white p-6 rounded-lg shadow-sm border border-gray-100 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Contactez-nous pour plus d'informations</h3>
          <div className="space-y-2 text-gray-700">
            <p className="flex items-center justify-center">
              <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href="tel:0123456789" className="hover:text-blue-700">01 23 45 67 89</a>
            </p>
            <p className="flex items-center justify-center">
              <svg className="h-5 w-5 text-blue-600 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href="mailto:formationkassiopee@gmail.com" className="hover:text-blue-700">formationkassiopee@gmail.com</a>
            </p>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-500">
          Kassiopée Formation - Organisme de formation certifié QUALIOPI
        </p>
      </div>
    </section>
  );
};

export default ProgramSection;

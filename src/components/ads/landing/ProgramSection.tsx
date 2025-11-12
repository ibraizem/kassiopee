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
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Programme détaillé
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Programme de la formation
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En seulement 21 heures, vous maîtriserez :<br />
            <span className="font-medium text-gray-800">Une formation intensive pour des résultats concrets et immédiats dans votre stratégie digitale</span>
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

        {/* Section Ce qui est inclus */}
        <div className="mt-20 max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
              Vos avantages
            </span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
              Ce qui est inclus dans votre formation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Tous les outils et ressources nécessaires pour votre réussite
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Accès à la plateforme d'apprentissage en ligne",
              "Support de cours complet (PDF)",
              "Exercices pratiques et études de cas",
              "Accès au groupe privé d'entraide",
              "Support pédagogique pendant 3 mois",
              "Attestation de formation",
              "Préparation à la certification",
              "Accès aux mises à jour du contenu"
            ].map((item, index) => (
              <div 
                key={index}
                className="bg-white p-6 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group"
                data-aos="fade-up"
                data-aos-delay={(index % 3) * 100}
              >
                <div className="flex items-start">
                  <div className="flex-shrink-0 h-10 w-10 rounded-xl bg-blue-50 flex items-center justify-center mr-4 group-hover:bg-blue-100 transition-colors">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-800 font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;

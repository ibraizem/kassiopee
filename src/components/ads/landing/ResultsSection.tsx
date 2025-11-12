import { CheckCircle } from "lucide-react";

const results = [
  {
    id: 1,
    title: "Maîtrise des fondamentaux",
    description: "Acquérez les bases solides nécessaires pour démarrer immédiatement.",
  },
  {
    id: 2,
    title: "Méthodologie éprouvée",
    description: "Découvrez des techniques qui ont fait leurs preuves sur le terrain.",
  },
  {
    id: 3,
    title: "Plan d'action personnalisé",
    description: "Repartez avec une feuille de route claire pour atteindre vos objectifs.",
  },
];

const ResultsSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Résultats concrets
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            En seulement <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">21 heures</span>, vous maîtriserez :
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Une formation intensive pour des résultats concrets et immédiats dans votre stratégie digitale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {results.map((result, index) => (
            <div 
              key={result.id}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-blue-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl flex items-center justify-center mb-6 mx-auto transition-all duration-500 group-hover:rotate-6">
                <CheckCircle className="h-7 w-7 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4 text-center">
                {result.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-5xl mx-auto shadow-xl overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="relative z-10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg flex-shrink-0 transform transition-all duration-300 hover:scale-105">
                <div className="text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">95%</div>
                <div className="text-sm font-medium text-gray-600">de réussite</div>
              </div>
              <div className="text-white">
                <h3 className="text-2xl font-bold mb-3">
                  Résultats garantis
                </h3>
                <p className="text-blue-100 leading-relaxed">
                  Avec un taux de réussite de 95% à l'examen final, notre formation est conçue pour vous faire réussir.
                  Notre méthode unique et notre accompagnement personnalisé font toute la différence.
                </p>
              </div>
            </div>
            <div className="mt-8 text-center">
              <a 
                href="https://calendly.com/kassiopee-formation/rdv" 
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center bg-white hover:bg-gray-100 text-blue-600 font-bold py-4 px-10 rounded-xl transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                <span>Réserver ma place maintenant</span>
                <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

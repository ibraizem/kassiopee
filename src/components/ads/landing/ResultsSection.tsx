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
    <section className="py-12 md:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            En seulement <span className="text-blue-600">21 heures</span>, vous maîtriserez :
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            Une formation intensive pour des résultats concrets et immédiats dans votre stratégie digitale
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {results.map((result, index) => (
            <div 
              key={result.id}
              className="group bg-white p-6 md:p-8 rounded-xl border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-blue-100"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-50 rounded-full flex items-center justify-center mb-6 mx-auto transition-all duration-300 group-hover:bg-blue-100">
                <CheckCircle className="h-6 w-6 md:h-7 md:w-7 text-blue-600" />
              </div>
              <h3 className="text-lg md:text-xl font-bold text-gray-900 mb-3 text-center">
                {result.title}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-6">
            <div className="bg-white p-4 rounded-lg shadow-md flex-shrink-0">
              <div className="text-4xl font-bold text-blue-600">95%</div>
              <div className="text-sm text-gray-600">de réussite</div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Résultats garantis
              </h3>
              <p className="text-gray-600">
                Avec un taux de réussite de 95% à l'examen final, notre formation est conçue pour vous faire réussir.
                Notre méthode unique et notre accompagnement personnalisé font toute la différence.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <a 
              href="/contact" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
            >
              Réserver ma place maintenant
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;

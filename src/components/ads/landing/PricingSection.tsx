import { Calendar, Clock, Users, CheckCircle2, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const sessions = [
  {
    id: 1,
    date: "18-20 Nov 2025",
    format: "Présentiel",
    location: "35 rue Armand Brette, 93380 Pierrefitte-sur-Seine",
    places: "4 places restantes",
    price: "1 390 €",
    earlyBird: "1 190 € si inscription avant le 1er Nov 2025",
  },
  {
    id: 2,
    date: "9-11 Déc 2025",
    format: "En ligne",
    location: "Classe virtuelle (visioconférence)",
    places: "8 places restantes",
    price: "1 090 €",
    earlyBird: "990 € si inscription avant le 20 Nov 2025",
  },
  {
    id: 3,
    date: "13-15 Jan 2026",
    format: "Présentiel",
    location: "35 rue Armand Brette, 93380 Pierrefitte-sur-Seine",
    places: "6 places restantes",
    price: "1 390 €",
    earlyBird: "1 190 € si inscription avant le 15 Déc 2025",
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-3">
            Sessions à venir
          </span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Prochaines sessions et tarifs
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choisissez la session qui correspond le mieux à vos besoins et démarrez votre parcours de formation
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {sessions.map((session, index) => (
            <div 
              key={session.id}
              className={`bg-white rounded-2xl overflow-hidden shadow-lg transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl ${
                index % 2 === 0 ? 'ring-2 ring-blue-200' : 'ring-1 ring-gray-200'
              }`}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{session.date}</h3>
                    <p className="text-sm text-gray-500">3 jours • 9h-17h</p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    session.format === 'En ligne' 
                      ? 'bg-purple-100 text-purple-800' 
                      : 'bg-blue-100 text-blue-800'
                  }`}>
                    {session.format}
                  </span>
                </div>
                
                <div className="space-y-4 my-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-blue-500 mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-gray-700">{session.location}</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="h-5 w-5 text-blue-500" />
                    <p className="text-sm font-medium">{session.places}</p>
                  </div>
                </div>
                
                <div className="mt-6 pt-6 border-t border-gray-100">
                  <div className="flex items-baseline mb-2">
                    <span className="text-3xl font-extrabold text-gray-900">{session.price}</span>
                    <span className="ml-2 text-sm text-gray-500">/ session</span>
                  </div>
                  <p className="text-xs text-blue-600 font-medium mb-4">{session.earlyBird}</p>
                  
                  <a 
                    href="https://calendly.com/kassiopee-formation/rdv" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`block w-full text-center py-3 px-4 rounded-lg font-medium transition-colors ${
                      index % 2 === 0 
                        ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white hover:from-blue-700 hover:to-blue-800'
                        : 'bg-gray-900 text-white hover:bg-gray-800'
                    }`}
                  >
                    S'inscrire maintenant
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 bg-gray-50 px-6 py-4 rounded-xl flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center text-sm text-gray-600 mb-4 md:mb-0">
            <CheckCircle2 className="h-5 w-5 text-green-500 mr-2 flex-shrink-0" />
            <span>Pris en charge par le CPF et autres financements</span>
          </div>
          <a href="#financement" className="scroll-smooth">
            <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
              Voir les options de financement
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

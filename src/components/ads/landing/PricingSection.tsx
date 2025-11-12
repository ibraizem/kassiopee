import { Calendar, Clock, Users, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const sessions = [
  {
    id: 1,
    date: "18-20 Nov 2025",
    format: "Présentiel",
    location: "Paris",
    places: "4 places restantes",
    price: "1 390 €",
    earlyBird: "1 190 € si inscription avant le 1er Nov 2025",
  },
  {
    id: 2,
    date: "9-11 Déc 2025",
    format: "En ligne",
    location: "Classe virtuelle",
    places: "8 places restantes",
    price: "1 090 €",
    earlyBird: "990 € si inscription avant le 20 Nov 2025",
  },
  {
    id: 3,
    date: "13-15 Jan 2026",
    format: "Présentiel",
    location: "Lyon",
    places: "6 places restantes",
    price: "1 390 €",
    earlyBird: "1 190 € si inscription avant le 15 Déc 2025",
  },
];

const PricingSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Prochaines sessions et tarifs
          </h2>
          <p className="text-xl text-gray-600">
            Choisissez la session qui vous convient le mieux
          </p>
        </div>

        <div className="max-w-5xl mx-auto overflow-hidden shadow-sm rounded-xl border border-gray-200">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Format
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Lieu
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Places
                  </th>
                  <th scope="col" className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Tarif
                  </th>
                  <th scope="col" className="relative px-6 py-4">
                    <span className="sr-only">Réserver</span>
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {sessions.map((session) => (
                  <tr key={session.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Calendar className="h-5 w-5 text-blue-500 mr-2" />
                        <div>
                          <div className="text-sm font-medium text-gray-900">{session.date}</div>
                          <div className="text-xs text-gray-500">3 jours</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{session.format}</div>
                      <div className="text-xs text-gray-500 flex items-center">
                        <Clock className="h-3 w-3 mr-1" /> 9h-17h
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm text-gray-900">{session.location}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <Users className="h-4 w-4 text-gray-400 mr-1" />
                        <span className="text-sm text-gray-900">{session.places}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{session.price}</div>
                      <div className="text-xs text-blue-600">{session.earlyBird}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a href="/contact" className="inline-block">
                        <Button className="bg-blue-600 hover:bg-blue-700">
                          S'inscrire
                        </Button>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-gray-50 px-6 py-4 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center text-sm text-gray-600 mb-4 md:mb-0">
              <CheckCircle2 className="h-5 w-5 text-green-500 mr-2" />
              <span>Pris en charge par le CPF et autres financements</span>
            </div>
            <a href="/contact?financement=1">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Voir les options de financement
              </Button>
            </a>
          </div>
        </div>

        <div className="mt-12 bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
            Ce qui est inclus dans votre formation :
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
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
              <div key={index} className="flex items-start">
                <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

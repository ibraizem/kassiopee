import { Linkedin, Award, BookOpen, Users as UsersIcon, Briefcase } from "lucide-react";

const trainers = [
  {
    id: 1,
    name: "Sophie Martin",
    role: "Formatrice principale",
    bio: "Avec plus de 15 ans d'expérience dans la formation professionnelle, Sophie a accompagné plus de 2000 apprenants vers la réussite. Spécialiste reconnue dans son domaine, elle allie expertise technique et pédagogie innovante.",
    image: "/images/trainers/sophie-martin.jpg",
    credentials: [
      "Certifiée par l'État niveau 7",
      "15 ans d'expérience",
      "Expertise en pédagogie active"
    ]
  },
  {
    id: 2,
    name: "Thomas Leroy",
    role: "Expert technique",
    bio: "Fort de 12 ans d'expérience en entreprise, Thomas apporte son expertise terrain et son réseau professionnel. Il est spécialisé dans les mises en situation pratiques et les études de cas concrets.",
    image: "/images/trainers/thomas-leroy.jpg",
    credentials: [
      "Diplômé d'école d'ingénieur",
      "12 ans en entreprise",
      "Formateur certifié"
    ]
  }
];

const stats = [
  { value: "15+", label: "Années d'expérience" },
  { value: "2000+", label: "Apprenants formés" },
  { value: "98%", label: "Taux de satisfaction" },
  { value: "50+", label: "Entreprises partenaires" }
];

const TrainersSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Nos formateurs experts
          </h2>
          <p className="text-xl text-gray-600">
            Des professionnels passionnés pour vous accompagner vers la réussite
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          {trainers.map((trainer) => (
            <div key={trainer.id} className="flex flex-col md:flex-row gap-6">
              <div className="w-48 h-48 rounded-xl bg-gray-200 overflow-hidden flex-shrink-0 mx-auto md:mx-0">
                {/* Image du formateur */}
                <div className="w-full h-full bg-blue-100 flex items-center justify-center text-blue-600">
                  <UsersIcon className="h-16 w-16" />
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{trainer.name}</h3>
                  <a 
                    href="#" 
                    className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                  >
                    <Linkedin className="h-4 w-4 mr-1" />
                    Profil LinkedIn
                  </a>
                </div>
                <div className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-0.5 rounded-full w-fit mb-3">
                  {trainer.role}
                </div>
                <p className="text-gray-600 mb-4">
                  {trainer.bio}
                </p>
                <div className="space-y-2">
                  {trainer.credentials.map((credential, index) => (
                    <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                      <Award className="h-4 w-4 text-blue-600 flex-shrink-0" />
                      {credential}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-8">
            Notre approche pédagogique
          </h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
                <BookOpen className="h-5 w-5 text-blue-600 mr-2" />
                Méthode active
              </h4>
              <p className="text-gray-600">
                Nous privilégions une approche pratique avec des mises en situation, des ateliers et des échanges pour une meilleure assimilation des connaissances.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-lg text-gray-900 mb-4 flex items-center">
                <UsersIcon className="h-5 w-5 text-blue-600 mr-2" />
                Suivi personnalisé
              </h4>
              <p className="text-gray-600">
                Chaque apprenant bénéficie d'un accompagnement individuel pour progresser à son rythme et atteindre ses objectifs professionnels.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white rounded-lg">
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrainersSection;

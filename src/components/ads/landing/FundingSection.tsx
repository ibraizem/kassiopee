import { Building2, GraduationCap, User, Briefcase, ExternalLink, CheckCircle2 } from "lucide-react";

const fundingOptions = [
  {
    id: 1,
    title: "CPF (Compte Personnel de Formation)",
    description: "Utilisez votre compte CPF pour financer tout ou partie de votre formation.",
    icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
    link: "/contact?source=cpf",
    linkText: "Vérifier mon éligibilité CPF"
  },
  {
    id: 2,
    title: "Financement par votre entreprise",
    description: "Votre employeur peut prendre en charge votre formation via le plan de développement des compétences.",
    icon: <Building2 className="h-8 w-8 text-green-600" />,
    link: "/contact?source=entreprise",
    linkText: "Télécharger le dossier entreprise"
  },
  {
    id: 3,
    title: "OPCO (Opérateurs de Compétences)",
    description: "Financement possible selon votre convention collective et votre situation professionnelle.",
    icon: <Briefcase className="h-8 w-8 text-purple-600" />,
    link: "/contact?source=opco",
    linkText: "En savoir plus sur les OPCO"
  },
  {
    id: 4,
    title: "Paiement en plusieurs fois",
    description: "Solution de paiement échelonné sans frais pour faciliter votre investissement.",
    icon: <User className="h-8 w-8 text-orange-600" />,
    link: "/contact?source=paiement",
    linkText: "Découvrir nos solutions de paiement"
  }
];

const FundingSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Solutions de financement
          </h2>
          <p className="text-xl text-gray-600">
            Plusieurs options pour financer votre formation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {fundingOptions.map((option) => (
            <div 
              key={option.id}
              className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="h-16 w-16 rounded-full bg-blue-50 flex items-center justify-center mb-6">
                {option.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {option.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {option.description}
              </p>
              <a 
                href={option.link} 
                className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium"
              >
                {option.linkText}
                <ExternalLink className="h-4 w-4 ml-1" />
              </a>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-xl p-8 max-w-4xl mx-auto shadow-sm">
          <h3 className="text-2xl font-bold text-center text-gray-900 mb-6">
            Vous ne trouvez pas votre solution de financement ?
          </h3>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Notre équipe est à votre disposition pour vous accompagner dans vos démarches et trouver la solution la plus adaptée à votre situation.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/contact?rappel=1" className="inline-block">
              <button className="px-8 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors">
                Être rappelé par un conseiller
              </button>
            </a>
            <a href="/contact?source=email" className="inline-block">
              <button className="px-8 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-50 transition-colors">
                Nous contacter par email
              </button>
            </a>
          </div>
        </div>

        <div className="mt-16 bg-blue-50 rounded-xl p-8 max-w-4xl mx-auto">
          <h3 className="text-xl font-bold text-center text-gray-900 mb-6">
            Aides et financements complémentaires
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              "Pôle Emploi",
              "Contrat de professionnalisation",
              "Projet de transition professionnelle",
              "Aide individuelle à la formation (AIF)",
              "AGEFIPH (pour les travailleurs handicapés)",
              "Régions et collectivités locales"
            ].map((item, index) => (
              <div key={index} className="flex items-center">
                <CheckCircle2 className="h-5 w-5 text-blue-600 mr-2" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-center text-sm text-gray-500 mt-6">
            Nos conseillers sont formés pour vous accompagner dans vos démarches de financement.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;

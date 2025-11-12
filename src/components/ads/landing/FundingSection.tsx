import { Building2, GraduationCap, User, Briefcase, ExternalLink, CheckCircle2 } from "lucide-react";

const fundingOptions = [
  {
    id: 1,
    title: "CPF (Compte Personnel de Formation)",
    description: "Utilisez votre compte CPF pour financer tout ou partie de votre formation.",
    icon: <GraduationCap className="h-8 w-8 text-blue-600" />,
    link: "https://www.moncompteformation.gouv.fr",
    linkText: "Vérifier mon éligibilité CPF"
  },
  {
    id: 2,
    title: "Financement par votre entreprise",
    description: "Votre employeur peut prendre en charge votre formation via le plan de développement des compétences.",
    icon: <Building2 className="h-8 w-8 text-green-600" />,
    link: "/pdf/dossier-entreprise.pdf",
    linkText: "Télécharger le dossier entreprise"
  },
  {
    id: 3,
    title: "OPCO (Opérateurs de Compétences)",
    description: "Financement possible selon votre convention collective et votre situation professionnelle.",
    icon: <Briefcase className="h-8 w-8 text-purple-600" />,
    link: "https://travail-emploi.gouv.fr/formation-professionnelle/acteurs-cadre/opco",
    linkText: "En savoir plus sur les OPCO"
  },
  {
    id: 4,
    title: "Paiement en plusieurs fois",
    description: "Solution de paiement échelonné sans frais pour faciliter votre investissement.",
    icon: <User className="h-8 w-8 text-orange-600" />,
    link: "/financement#paiement-echelonne",
    linkText: "Découvrir nos solutions de paiement"
  }
];

const FundingSection = () => {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Financement
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Solutions de financement
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Trouvez la solution la plus adaptée à votre situation
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {fundingOptions.map((option) => (
            <div 
              key={option.id}
              className="group bg-white p-8 rounded-2xl border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              data-aos="fade-up"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  {option.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {option.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {option.description}
                </p>
                <a 
                  href={option.link} 
                  className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group-hover:underline"
                  target={
                    option.link.startsWith('http') || option.link.endsWith('.pdf') 
                    ? '_blank' 
                    : '_self'
                  }
                  rel={option.link.startsWith('http') ? 'noopener noreferrer' : ''}
                >
                  {option.linkText}
                  {(option.link.startsWith('http') || option.link.endsWith('.pdf')) && (
                    <ExternalLink className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                  )}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-10 max-w-5xl mx-auto shadow-xl overflow-hidden relative">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-white/10 rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-white mb-4">
              Vous ne trouvez pas votre solution de financement ?
            </h3>
            <p className="text-center text-blue-100 mb-8 max-w-2xl mx-auto text-lg">
              Notre équipe est à votre disposition pour vous accompagner dans vos démarches et trouver la solution la plus adaptée à votre situation.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:0743678768" className="inline-block">
                <button className="w-full sm:w-auto px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                    Être rappelé par un conseiller
                  </span>
                </button>
              </a>
              <a href="mailto:formationkassiopee@gmail.com" className="inline-block">
                <button className="w-full sm:w-auto px-8 py-4 bg-transparent border-2 border-white text-white rounded-xl font-bold hover:bg-white/10 transition-colors">
                  <span className="flex items-center justify-center">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    Nous contacter par email
                  </span>
                </button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-20 bg-white rounded-2xl p-8 max-w-5xl mx-auto border border-gray-100 shadow-sm">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-gray-900 mb-3">
              Aides et financements complémentaires
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              D'autres solutions peuvent être envisagées selon votre situation personnelle et professionnelle.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { text: "Pôle Emploi", icon: "💼" },
              { text: "Contrat de professionnalisation", icon: "📝" },
              { text: "Projet de transition professionnelle", icon: "🔄" },
              { text: "Aide individuelle à la formation (AIF)", icon: "🎯" },
              { text: "AGEFIPH (travailleurs handicapés)", icon: "♿" },
              { text: "Régions et collectivités locales", icon: "🏛️" }
            ].map((item, index) => (
              <div 
                key={index} 
                className="flex items-start p-4 bg-gray-50 rounded-xl hover:bg-blue-50 transition-colors"
                data-aos="fade-up"
                data-aos-delay={index * 50}
              >
                <span className="text-2xl mr-3 mt-0.5">{item.icon}</span>
                <span className="text-gray-700 font-medium">{item.text}</span>
              </div>
            ))}
          </div>
          
          <div className="mt-10 text-center">
            <p className="text-gray-600 mb-6">
              Nos conseillers sont formés pour vous accompagner dans vos démarches de financement.
            </p>
            <a 
              href="https://calendly.com/kassiopee-formation/rdv" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium group"
            >
              Prendre rendez-vous en ligne
              <svg 
                className="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FundingSection;

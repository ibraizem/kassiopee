'use client'

import { Shield, Users, Briefcase, Trophy, Headphones, Zap } from "lucide-react";

const benefits = [
  {
    icon: Shield,
    title: "Certifications reconnues",
    description: "Formations certifiées Qualiopi et RNCP reconnues par l'État et les entreprises.",
    gradient: "bg-kassiopee-lightblue/10 border-kassiopee-lightblue/20 text-kassiopee-lightblue"
  },
  {
    icon: Trophy,
    title: "Excellence prouvée",
    description: "95% de taux de réussite grâce à un accompagnement personnalisé et des formateurs experts.",
    gradient: "bg-kassiopee-gold/10 border-kassiopee-gold/20 text-kassiopee-gold"
  },
  {
    icon: Briefcase,
    title: "Financement CPF",
    description: "Toutes nos formations sont éligibles CPF pour faciliter votre montée en compétences.",
    gradient: "bg-kassiopee-navy/5 border-kassiopee-navy/10 text-kassiopee-navy"
  },
  {
    icon: Users,
    title: "Communauté active",
    description: "Rejoignez un réseau de plus de 500 alumni et bénéficiez d'opportunités professionnelles.",
    gradient: "bg-kassiopee-lightblue/10 border-kassiopee-lightblue/20 text-kassiopee-lightblue"
  },
  {
    icon: Zap,
    title: "Formation flexible",
    description: "Formats adaptés à votre emploi du temps : présentiel, distanciel ou format hybride.",
    gradient: "bg-kassiopee-gold/10 border-kassiopee-gold/20 text-kassiopee-gold"
  },
  {
    icon: Headphones,
    title: "Support dédié",
    description: "Un conseiller vous accompagne de l'inscription jusqu'à l'obtention de votre certification.",
    gradient: "bg-kassiopee-navy/5 border-kassiopee-navy/10 text-kassiopee-navy"
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-kassiopee-navy">
            Pourquoi choisir{" "}
            <span className="bg-gradient-to-r from-kassiopee-gold to-kassiopee-lightblue bg-clip-text text-transparent">
              Kassiopée Formation
            </span>
            ?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Plus de 10 ans d'expérience dans la formation professionnelle au service de votre réussite
          </p>
        </div>

        {/* Benefits grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="group relative p-6 md:p-8 rounded-xl bg-white border border-gray-200 hover:border-kassiopee-gold/50 transition-all duration-300 hover:shadow-lg hover:shadow-kassiopee-gold/5 hover:scale-[1.02]"
                style={{
                  animation: `fadeInUp 0.5s ease-out ${index * 0.1}s forwards`,
                  opacity: 0,
                  transform: 'translateY(20px)'
                }}
              >
                {/* Icon with background */}
                <div className="relative mb-6">
                  <div className={`inline-flex p-3 rounded-lg border ${benefit.gradient} transition-colors duration-300 group-hover:shadow-md`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl font-bold text-kassiopee-navy group-hover:text-kassiopee-gold transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-kassiopee-gold/0 via-kassiopee-lightblue/0 to-kassiopee-gold/0 group-hover:from-kassiopee-gold/5 group-hover:via-kassiopee-lightblue/5 group-hover:to-kassiopee-gold/5 transition-all duration-300 -z-10" />
              </div>
            );
          })}
        </div>

        {/* Trust section */}
        <div className="mt-16 p-8 md:p-12 rounded-2xl bg-gradient-to-br from-kassiopee-navy/5 via-white to-kassiopee-navy/5 border border-kassiopee-navy/10">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-kassiopee-gold/10 border border-kassiopee-gold/20">
              <Shield className="w-5 h-5 text-kassiopee-gold" />
              <span className="text-sm font-semibold text-kassiopee-gold">Organisme certifié Qualiopi</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-kassiopee-navy">
              Un gage de qualité et de confiance
            </h3>
            <p className="text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Notre certification Qualiopi garantit la qualité de nos processus de formation. 
              Nous respectons les critères du Référentiel National Qualité pour vous offrir 
              une expérience d'apprentissage d'excellence.
            </p>
          </div>
        </div>
      </div>
      
      {/* Animation keyframes */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
};

export default BenefitsSection;

"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Clock, Award, CheckCircle2 } from "lucide-react";
import DefaultFormationImage from "@/components/ui/DefaultFormationImage";

// Chemins des images des formations
const formationNTC = "/images/formations/négociateur.jpg";
const formationRH = "/images/formations/RNCP Assistant RH.jpg";
const formationDev = "/images/formations/Booster sa Candidature.jpg";

const formations = [
  {
    id: "ntc",
    title: "RNCP Négociateur Technico-Commercial",
    subtitle: "Niveau 5 (Bac+2) - Certification professionnelle",
    description: "Maîtrisez les compétences opérationnelles essentielles : prospection stratégique, découverte client approfondie, argumentation percutante, traitement des objections, techniques de closing et fidélisation client. Préparez-vous au Titre professionnel reconnu par l'État.",
    duration: "5 jours (35h)",
    successRate: "95%",
    image: formationNTC,
    highlights: [
      "Certification RNCP niveau 5",
      "Techniques de vente avancées",
      "Stratégies de négociation",
      "Gestion de la relation client",
    ],
    badge: "BEST-SELLER",
    badgeColor: "bg-kassiopee-gold text-kassiopee-navy border-kassiopee-gold/30",
  },
  {
    id: "rh",
    title: "RNCP Assistant RH",
    subtitle: "Niveau 5 (Bac+2) - Certification professionnelle",
    description: "Devenez un expert en gestion des ressources humaines. Formation complète couvrant le recrutement, la gestion administrative du personnel, la paie, le droit du travail et l'accompagnement des collaborateurs. Préparez-vous au Titre professionnel Assistant Ressources Humaines.",
    duration: "Formation complète",
    successRate: "88%",
    image: formationRH,
    highlights: [
      "Certification RNCP niveau 5",
      "Recrutement et intégration",
      "Gestion administrative RH",
      "Droit du travail appliqué",
    ],
    badge: "MÉTIER D'AVENIR",
    badgeColor: "bg-kassiopee-lightblue text-white border-kassiopee-lightblue/30",
  },
  {
    id: "dev",
    title: "Booster sa Candidature",
    subtitle: "Développement personnel et employabilité",
    description: "Optimisez votre recherche d'emploi et démarquez-vous auprès des recruteurs. Apprenez à créer un CV percutant, rédiger des lettres de motivation convaincantes, préparer vos entretiens et développer votre personal branding sur LinkedIn.",
    duration: "Formation modulable",
    successRate: "92%",
    image: formationDev,
    highlights: [
      "CV et lettre de motivation",
      "Préparation entretiens",
      "Personal branding",
      "Stratégie de recherche",
    ],
    badge: "ACCÈS RAPIDE",
    badgeColor: "bg-kassiopee-gold/80 text-kassiopee-navy border-kassiopee-gold/30",
  },
];

const FormationsSection = () => {
  return (
    <section id="formations" className="py-20 bg-white scroll-mt-20">
      <div className="container px-4 mx-auto">
        {/* Section header */}
        <div className="max-w-3xl mx-auto text-center mb-16 space-y-4">
          <Badge className="mb-4 px-4 py-2 text-sm font-semibold bg-kassiopee-lightblue/10 text-kassiopee-lightblue border-kassiopee-lightblue/20">
            Nos 3 Formations Phares
          </Badge>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-kassiopee-navy">
            Formations professionnelles{" "}
            <span className="bg-gradient-to-r from-kassiopee-gold to-kassiopee-lightblue bg-clip-text text-transparent">
              certifiantes
            </span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez nos formations RNCP et développement personnel, conçues pour répondre 
            aux besoins du marché de l'emploi. Éligibles CPF et certifiées Qualiopi.
          </p>
        </div>

        {/* Formations grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {formations.map((formation, index) => (
            <article
              key={formation.id}
              className="group relative flex flex-col rounded-2xl overflow-hidden bg-white border border-gray-200 hover:border-kassiopee-gold/50 transition-all duration-300 hover:shadow-xl hover:shadow-kassiopee-gold/10 hover:scale-[1.02]"
              style={{ 
                animation: `fadeInUp 0.5s ease-out ${index * 0.15}s forwards`,
                opacity: 0,
                transform: 'translateY(20px)'
              }}
            >
              {/* Badge */}
              <div className="absolute top-4 right-4 z-10">
                <Badge className={`${formation.badgeColor} font-bold shadow-md border`}>
                  {formation.badge}
                </Badge>
              </div>

              {/* Image de la formation */}
              <div className="relative h-48 md:h-56 w-full overflow-hidden rounded-t-xl bg-kassiopee-navy/5">
                <div className="absolute inset-0 flex items-center justify-center p-1">
                  <img
                    src={formation.image}
                    alt={formation.title}
                    className="h-full w-auto max-w-full object-contain"
                    style={{
                      maxHeight: '100%',
                      maxWidth: '100%',
                      width: 'auto',
                      height: 'auto',
                      objectFit: 'contain',
                      objectPosition: 'center',
                      transition: 'transform 0.5s ease',
                    }}
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      
                      // Créer un conteneur pour l'image par défaut
                      const container = target.parentElement?.parentElement;
                      if (container) {
                        const fallback = document.createElement('div');
                        fallback.className = 'absolute inset-0 flex items-center justify-center';
                        container.appendChild(fallback);
                        
                        // Créer un élément pour le composant DefaultFormationImage
                        const fallbackContent = document.createElement('div');
                        fallbackContent.className = 'w-full h-full';
                        fallback.appendChild(fallbackContent);
                        
                        // Rendre le composant React dans le conteneur
                        import('react-dom/client').then(({ createRoot }) => {
                          createRoot(fallbackContent).render(
                            <DefaultFormationImage 
                              title={formation.title}
                              className="w-full h-full"
                            />
                          );
                        });
                      }
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.05)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                    }}
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex-1 flex flex-col p-5 md:p-6 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-xl md:text-2xl font-bold text-kassiopee-navy group-hover:text-kassiopee-gold transition-colors">
                    {formation.title}
                  </h3>
                  <p className="text-sm text-kassiopee-lightblue font-medium">
                    {formation.subtitle}
                  </p>
                </div>

                <p className="text-gray-600 text-sm leading-relaxed flex-1">
                  {formation.description}
                </p>

                {/* Highlights */}
                <ul className="space-y-2">
                  {formation.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-kassiopee-gold mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{highlight}</span>
                    </li>
                  ))}
                </ul>

                {/* Meta info */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100 text-sm">
                  <div className="flex items-center gap-1 text-gray-500">
                    <Clock className="w-4 h-4 text-kassiopee-lightblue" />
                    <span>{formation.duration}</span>
                  </div>
                  <div className="flex items-center gap-1 text-gray-500">
                    <Award className="w-4 h-4 text-kassiopee-gold" />
                    <span className="font-semibold text-kassiopee-gold">{formation.successRate}</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  className="w-full mt-4 rounded-lg bg-kassiopee-navy hover:bg-kassiopee-navy/90 text-white font-medium transition-colors"
                  onClick={() => {
                    window.location.href = '/contact';
                  }}
                >
                  Je m'inscris
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-kassiopee-gold/0 via-kassiopee-lightblue/0 to-kassiopee-gold/0 group-hover:from-kassiopee-gold/5 group-hover:via-kassiopee-lightblue/5 group-hover:to-kassiopee-gold/5 transition-all duration-300 pointer-events-none" />
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-gray-600 mb-6">
            💡 <strong className="text-kassiopee-navy">Toutes nos formations sont éligibles CPF</strong> et peuvent être financées
          </p>
          <Button
            size="lg"
            variant="outline"
            className="rounded-lg border-kassiopee-navy/30 text-kassiopee-navy hover:bg-kassiopee-navy/5 hover:border-kassiopee-navy/50"
            onClick={() => window.open("/formations", "_self")}
          >
            Voir toutes nos formations
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
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

export default FormationsSection;

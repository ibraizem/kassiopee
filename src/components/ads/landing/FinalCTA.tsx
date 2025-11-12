import { ArrowRight, Phone, Mail } from "lucide-react";

const FinalCTA = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Prêt à transformer votre avenir professionnel ?
          </h2>
          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Rejoignez nos prochaines sessions et développez des compétences recherchées par les recruteurs.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-blue-700 rounded-lg font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
            >
              S'inscrire maintenant
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="/contact?rappel=1"
              className="px-8 py-4 border-2 border-white text-white rounded-lg font-bold text-lg hover:bg-white/10 transition-colors flex items-center justify-center gap-2"
            >
              Être rappelé
            </a>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-8 text-blue-100">
            <div className="flex items-center gap-2">
              <Phone className="h-5 w-5" />
              <a href="tel:+33123456789" className="hover:text-white">01 23 45 67 89</a>
            </div>
            <div className="h-8 w-px bg-blue-600 hidden sm:block"></div>
            <div className="flex items-center gap-2">
              <Mail className="h-5 w-5" />
              <a href="mailto:contact@kassiopee-formation.com" className="hover:text-white">contact@kassiopee-formation.com</a>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-blue-600">
            <p className="text-blue-200 text-sm">
              Besoin d'aide pour choisir votre formation ? Nos conseillers sont là pour vous guider.
            </p>
            <p className="text-blue-300 text-xs mt-2">
              Réponse sous 24h ouvrées | Service client 5/5
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTA;

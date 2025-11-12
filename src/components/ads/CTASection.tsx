'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <div className="relative">
      <section className="py-20 relative overflow-hidden bg-kassiopee-navy">
        {/* Animated background */}
        <div className="absolute inset-0 bg-gradient-to-br from-kassiopee-navy via-kassiopee-navy/90 to-kassiopee-navy">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-96 h-96 bg-kassiopee-gold/30 rounded-full blur-3xl animate-float" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-kassiopee-lightblue/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
          </div>
        </div>

        <div className="container relative z-10 px-4 mx-auto">
          <div className="max-w-4xl mx-auto">
            {/* Main CTA card */}
            <div className="p-8 md:p-12 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 shadow-xl">
              <div className="text-center space-y-8">
                {/* Heading */}
                <div className="space-y-4">
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
                    Prêt à transformer{" "}
                    <span className="bg-gradient-to-r from-kassiopee-gold to-kassiopee-lightblue bg-clip-text text-transparent">
                      votre carrière
                    </span>
                    ?
                  </h2>
                  <p className="text-lg text-white/90 max-w-2xl mx-auto leading-relaxed">
                    Nos conseillers sont à votre écoute pour vous aider à choisir 
                    la formation qui correspond à vos objectifs professionnels.
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                  <Button
                    size="lg"
                    className="text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl bg-kassiopee-gold hover:bg-kassiopee-gold/90 text-kassiopee-navy font-bold shadow-lg hover:shadow-xl hover:shadow-kassiopee-gold/20 transition-all"
                    onClick={() => {
                      window.location.href = '/contact';
                    }}
                  >
                    Demander un conseil gratuit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl border-2 border-white/20 hover:border-white/40 hover:bg-white/5 text-white font-bold transition-all group"
                    onClick={() => {
                      window.location.href = '/formations';
                    }}
                  >
                    Voir toutes les formations
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>

                {/* Trust indicators */}
                <div className="pt-8">
                  <p className="text-sm text-white/70">
                    Plus de 95% de satisfaction • Accompagnement personnalisé • Paiement en plusieurs fois
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-kassiopee-gold">95%</p>
                <p className="text-sm text-white/80">de réussite</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-kassiopee-gold">100%</p>
                <p className="text-sm text-white/80">en ligne</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-kassiopee-gold">24/7</p>
                <p className="text-sm text-white/80">accès plateforme</p>
              </div>
              <div className="space-y-2">
                <p className="text-3xl md:text-4xl font-bold text-kassiopee-gold">100%</p>
                <p className="text-sm text-white/80">CPF éligible</p>
              </div>
            </div>

            {/* Testimonial */}
            <div className="mt-16 max-w-2xl mx-auto text-center">
              <blockquote className="text-lg italic text-white/80">
                "Grâce à la formation de Kassiopée, j'ai pu obtenir ma certification et trouver un emploi dans les 2 mois qui ont suivi. L'accompagnement a été exceptionnel !"
              </blockquote>
              <p className="mt-4 text-kassiopee-gold font-medium">
                Marie D., ancienne élève
              </p>
              <p className="mt-8 text-sm text-white/60">
                Nos formations ont déjà permis à plus de 500 apprenants de se reconvertir avec succès.{" "}
                <br className="hidden sm:inline" />
                Rejoignez-les et donnez un nouvel élan à votre carrière !
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mini Footer */}
      <footer className="bg-gray-900 text-white py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">
                © {new Date().getFullYear()} Kassiopée Formation. Tous droits réservés.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/mentions-legales" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Mentions légales
              </a>
              <a 
                href="/confidentialite" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                Politique de confidentialité
              </a>
              <a 
                href="/cgu" 
                className="text-sm text-gray-400 hover:text-white transition-colors"
              >
                CGU
              </a>
              <a 
                href="mailto:contact@kassiopee-formation.fr" 
                className="text-sm text-gray-400 hover:text-white transition-colors flex items-center"
              >
                <Mail className="w-4 h-4 mr-1" />
                Contact
              </a>
            </div>
          </div>
          <div className="mt-4 pt-4 border-t border-gray-800 text-center">
            <p className="text-xs text-gray-500">
              Organisme de formation enregistré sous le numéro 11922352492. Cet enregistrement ne vaut pas agrément de l'État.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default CTASection;

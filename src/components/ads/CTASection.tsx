'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Mail, Phone } from "lucide-react";

const CTASection = () => {
  return (
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
                  className="text-lg px-6 md:px-8 py-5 md:py-6 rounded-xl bg-white/5 backdrop-blur-sm border-white/30 text-white hover:bg-white/10 transition-colors"
                  onClick={() => window.open("/formations", "_self")}
                >
                  Explorer toutes les formations
                </Button>
              </div>

              {/* Contact info */}
              <div className="pt-8 border-t border-white/10">
                <p className="text-white/80 mb-4">Ou contactez-nous directement</p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-white/90">
                  <a 
                    href="tel:0743678768" 
                    className="flex items-center gap-2 hover:text-kassiopee-gold transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-kassiopee-gold/20 group-hover:bg-kassiopee-gold/30 transition-colors">
                      <Phone className="w-4 h-4 text-kassiopee-gold" />
                    </div>
                    <span className="font-medium">07 43 67 87 68</span>
                  </a>
                  <a 
                    href="mailto:formationkassiopee@gmail.com" 
                    className="flex items-center gap-2 hover:text-kassiopee-gold transition-colors group"
                  >
                    <div className="p-2 rounded-lg bg-kassiopee-gold/20 group-hover:bg-kassiopee-gold/30 transition-colors">
                      <Mail className="w-4 h-4 text-kassiopee-gold" />
                    </div>
                    <span className="font-medium">formationkassiopee@gmail.com</span>
                  </a>
                </div>
              </div>

              {/* Trust badges */}
              <div className="flex flex-wrap items-center justify-center gap-3 pt-8">
                <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <span className="text-sm font-medium text-white">✓ Réponse sous 24h</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10">
                  <span className="text-sm font-medium text-white">✓ Sans engagement</span>
                </div>
                <div className="px-4 py-2 rounded-lg bg-kassiopee-gold/10 backdrop-blur-sm border border-kassiopee-gold/20">
                  <span className="text-sm font-medium text-kassiopee-gold">✓ Financement CPF</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer note */}
          <div className="text-center mt-12 text-white/70 text-sm">
            <p>
              🌟 Plus de 500 professionnels nous ont fait confiance pour leur formation. 
              <br className="hidden sm:inline" />
              Rejoignez-les et donnez un nouvel élan à votre carrière !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;

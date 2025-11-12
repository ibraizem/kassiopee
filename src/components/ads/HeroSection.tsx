'use client'

import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import HeroCPFCalculator from "./HeroCPFCalculator";
import Link from 'next/link';     
import { useRouter } from 'next/navigation';

const scrollToElement = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    window.location.href = `/#${id}`;
  }
};

const HeroSection = () => {
  const router = useRouter();

  const handleFormationsClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const formationsElement = document.getElementById('formations');
    if (formationsElement) {
      scrollToElement('formations');
    } else {
      router.push('/#formations');
    }
  };

  const handleContactClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      scrollToElement('contact');
    } else {
      router.push('/contact');
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-kassiopee-navy">
      {/* Background with gradient */}
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-kassiopee-navy via-kassiopee-lightblue/20 to-kassiopee-navy">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'url("data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          backgroundSize: '60px 60px'
        }} />
        
        {/* Animated particles effect */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-kassiopee-gold/30 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-kassiopee-lightblue/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 mx-auto">
        <div className="max-w-5xl mx-auto text-center space-y-8 animate-slide-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-kassiopee-gold/20 backdrop-blur-sm border border-kassiopee-gold/30 text-kassiopee-gold animate-glow">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-semibold">Formations RNCP & Développement Personnel</span>
          </div>

          {/* Main heading - H1 for SEO */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-tight">
            Transformez votre
            <span className="block bg-gradient-to-r from-kassiopee-gold via-kassiopee-lightblue to-kassiopee-gold bg-clip-text text-transparent animate-shimmer bg-[length:200%_100%]">
              avenir numérique
            </span>
          </h1>

          {/* Title and subtitle */}
          <div className="text-center space-y-6 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed">
              Développez vos compétences avec nos formations éligibles au CPF et obtenez une certification reconnue par l'État.
            </p>
          </div>

          {/* Calculateur CPF */}
          <div className="max-w-2xl mx-auto w-full">
            <HeroCPFCalculator />
          </div>

          {/* Subheading */}
          <p className="text-lg md:text-xl lg:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Spécialiste des formations professionnelles certifiantes RNCP : 
            Négociateur Technico-Commercial, Assistant RH, développement personnel. 
            <strong className="text-kassiopee-gold"> Formations éligibles CPF</strong> avec 95% de taux de réussite.
          </p>

          {/* Trust badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-4">
            <div className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-sm font-bold text-white">🏆 QUALIOPI</span>
            </div>
            <div className="px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20">
              <span className="text-sm font-bold text-white">📜 RNCP</span>
            </div>
            <div className="px-6 py-3 rounded-lg bg-kassiopee-gold/20 backdrop-blur-sm border border-kassiopee-gold/30">
              <span className="text-sm font-bold text-kassiopee-gold">95% de réussite</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <Button
              size="lg"
              className="text-lg px-8 py-6 rounded-xl bg-kassiopee-gold hover:bg-kassiopee-gold/90 text-kassiopee-navy font-bold transition-colors"
              onClick={handleFormationsClick}
            >
              Découvrir nos formations
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 py-6 rounded-xl bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20"
              onClick={handleContactClick}
            >
              Nous contacter
            </Button>
          </div>

          {/* Social proof */}
          <div className="pt-8 text-white/80 text-sm">
            <p>Rejoignez plus de <strong className="text-kassiopee-gold">500+ diplômés</strong> qui ont transformé leur carrière</p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-kassiopee-gold rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

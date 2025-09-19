import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play, Code, Cpu, Zap, Shield, Cloud, Database } from 'lucide-react';

interface HeroProps {
  title: string;
  subtitle?: string;
  description: string;
  primaryCTA: {
    text: string;
    href: string;
  };
  secondaryCTA?: {
    text: string;
    href: string;
  };
  backgroundImage: string;
  overlayOpacity?: number;
}

export default function Hero({
  title,
  subtitle,
  description,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlayOpacity = 0.7,
}: HeroProps) {
  const techIcons = [Code, Cpu, Zap, Shield, Cloud, Database];

  return (
    <section className="relative min-h-screen lg:min-h-[110vh] flex items-center justify-center overflow-hidden">
      {/* Background with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        {/* Multi-layer overlay for better contrast */}
        <div className="absolute inset-0 bg-gradient-to-br from-kassiopee-navy via-kassiopee-navy/90 to-kassiopee-lightblue/80" />
        <div className="absolute inset-0 bg-gradient-to-t from-kassiopee-navy/50 via-transparent to-transparent" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating Tech Icons */}
        {techIcons.map((Icon, index) => (
          <div
            key={index}
            className={`absolute text-kassiopee-gold/20 animate-float`}
            style={{
              left: `${15 + index * 15}%`,
              top: `${20 + (index % 2) * 40}%`,
              animationDelay: `${index * 0.5}s`,
              animationDuration: `${4 + index * 0.5}s`
            }}
          >
            <Icon className="h-8 w-8 md:h-12 md:w-12" />
          </div>
        ))}
        
        {/* Geometric Shapes */}
        <div className="absolute top-1/4 right-10 w-32 h-32 border border-kassiopee-gold/30 rotate-45 animate-pulse" />
        <div className="absolute bottom-1/3 left-10 w-24 h-24 bg-kassiopee-gold/10 rounded-full animate-bounce" style={{ animationDuration: '3s' }} />
        <div className="absolute top-1/2 right-1/4 w-16 h-16 border-2 border-kassiopee-lightblue/40 rounded-full animate-spin" style={{ animationDuration: '8s' }} />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
          {/* Left Column - Text Content */}
          <div className="text-center lg:text-left">
            {subtitle && (
              <div className="flex items-center justify-center lg:justify-start mb-4 sm:mb-6">
                <div className="h-1 w-8 sm:w-12 bg-kassiopee-gold mr-3 sm:mr-4"></div>
                <p className="text-kassiopee-gold text-sm sm:text-lg font-bold tracking-wider uppercase">
                  {subtitle}
                </p>
              </div>
            )}
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 sm:mb-8 leading-tight">
              <span className="block">
                <span className="text-kassiopee-gold">Transformez</span>
              </span>
              <span className="block">
                votre avenir
              </span>
              <span className="block bg-gradient-to-r from-kassiopee-lightblue to-kassiopee-gold bg-clip-text text-transparent">
                numérique
              </span>
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl lg:text-2xl text-gray-200 mb-8 sm:mb-10 leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {description}
            </p>
            
            {/* Trust Indicators */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 lg:gap-8 mb-8 sm:mb-10 lg:mb-12">
              <div className="flex items-center text-kassiopee-gold">
                <Shield className="h-5 w-5 mr-2" />
                <span className="text-xs sm:text-sm font-semibold">QUALIOPI</span>
              </div>
              <div className="flex items-center text-kassiopee-gold">
                <Zap className="h-5 w-5 mr-2" />
                <span className="text-xs sm:text-sm font-semibold">RS6074</span>
              </div>
              <div className="flex items-center text-kassiopee-gold">
                <Code className="h-5 w-5 mr-2" />
                <span className="text-xs sm:text-sm font-semibold">95% de réussite</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 items-center lg:items-start">
              <Link
                href={primaryCTA.href}
                className="group bg-kassiopee-gold text-kassiopee-navy px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-center gap-2 relative overflow-hidden w-full sm:w-auto"
              >
                <span className="relative z-10">{primaryCTA.text}</span>
                <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform relative z-10" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-kassiopee-gold opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
              
              {secondaryCTA && (
                <Link
                  href={secondaryCTA.href}
                  className="group border-2 border-kassiopee-lightblue text-kassiopee-lightblue px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:bg-kassiopee-lightblue hover:text-kassiopee-navy transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                >
                  <Play className="h-5 w-5 group-hover:scale-110 transition-transform" />
                  <span>{secondaryCTA.text}</span>
                </Link>
              )}
            </div>
          </div>
          
          {/* Right Column - Visual Elements */}
          <div className="hidden lg:block relative mt-8 lg:mt-0 order-first lg:order-last">
            <div className="relative">
              {/* Main Card */}
              <div className="bg-white/10 backdrop-blur-lg rounded-2xl p-10 border border-white/20 shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-white font-bold text-xl">Formations Disponibles</h3>
                    <div className="bg-kassiopee-gold text-kassiopee-navy px-3 py-1 rounded-full text-sm font-bold">
                      6 formations
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[
                      { name: 'Transformation Digitale', icon: Zap, progress: 95 },
                      { name: 'ITIL V4 Foundation', icon: Shield, progress: 88 },
                      { name: 'Scrum Master', icon: Code, progress: 92 },
                      { name: 'Intelligence Artificielle', icon: Cpu, progress: 90 }
                    ].map((item, index) => (
                      <div key={index} className="flex items-center space-x-4">
                        <div className="bg-kassiopee-gold/20 p-2 rounded-lg">
                          <item.icon className="h-5 w-5 text-kassiopee-gold" />
                        </div>
                        <div className="flex-1">
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-white font-medium text-sm">{item.name}</span>
                            <span className="text-kassiopee-gold text-sm">{item.progress}%</span>
                          </div>
                          <div className="w-full bg-white/20 rounded-full h-2">
                            <div 
                              className="bg-gradient-to-r from-kassiopee-gold to-kassiopee-lightblue h-2 rounded-full transition-all duration-1000"
                              style={{ width: `${item.progress}%` }}
                            />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Stats */}
              <div className="absolute -top-4 -right-4 bg-kassiopee-lightblue text-white px-4 py-2 rounded-xl font-bold shadow-lg">
                500+ diplômés
              </div>
              <div className="absolute -bottom-4 -left-4 bg-kassiopee-gold text-kassiopee-navy px-4 py-2 rounded-xl font-bold shadow-lg">
                10+ ans d'expertise
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Enhanced Wave */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-16 md:h-20 fill-white"
        >
          <path d="M0,120 L1200,120 L1200,60 Q900,0 600,60 Q300,120 0,60 Z" />
        </svg>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 lg:bottom-12 xl:bottom-16 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-6 sm:w-8 h-10 sm:h-12 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 sm:w-1.5 h-3 sm:h-4 bg-white/70 rounded-full mt-2 sm:mt-3 animate-pulse" />
        </div>
      </div>
    </section>
  );
}
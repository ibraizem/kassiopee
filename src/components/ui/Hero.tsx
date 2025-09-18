import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

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
  overlayOpacity = 0.6,
}: HeroProps) {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-cover"
          priority
        />
        <div 
          className="absolute inset-0 bg-kassiopee-navy"
          style={{ opacity: overlayOpacity }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          {subtitle && (
            <p className="text-kassiopee-gold text-lg font-semibold mb-4 animate-fade-in">
              {subtitle}
            </p>
          )}
          
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight animate-slide-up">
            <span className="font-serif">{title}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-200 mb-10 leading-relaxed animate-fade-in">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in">
            <Link
              href={primaryCTA.href}
              className="bg-kassiopee-gold text-kassiopee-navy px-8 py-4 rounded-lg font-bold text-lg hover:bg-yellow-400 transition-all duration-300 hover:scale-105 hover:shadow-xl flex items-center gap-2"
            >
              {primaryCTA.text}
              <ArrowRight className="h-5 w-5" />
            </Link>
            
            {secondaryCTA && (
              <Link
                href={secondaryCTA.href}
                className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-kassiopee-navy transition-all duration-300 flex items-center gap-2"
              >
                <Play className="h-5 w-5" />
                {secondaryCTA.text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
          className="w-full h-12 md:h-16 fill-white"
        >
          <path d="M0,120 L1200,120 L1200,60 Q900,0 600,60 Q300,120 0,60 Z" />
        </svg>
      </div>
    </section>
  );
}
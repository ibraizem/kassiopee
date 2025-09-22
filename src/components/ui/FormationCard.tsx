import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Clock, MapPin, Users, ArrowRight } from 'lucide-react';

interface FormationCardProps {
  id: string;
  title: string;
  description: string;
  image: string;
  duration: string;
  region: string;
  category: string;
  level: string;
  nextSession?: string;
  href: string;
  rncp?: string;
  isRNCP?: boolean;
}

export default function FormationCard({
  id,
  title,
  description,
  image,
  duration,
  region,
  category,
  level,
  nextSession,
  href,
  rncp,
  isRNCP,
}: FormationCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      {/* Image */}
      <div className="relative h-48 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-kassiopee-navy text-white px-3 py-1 rounded-full text-xs font-semibold">
            {category}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span className="bg-kassiopee-gold text-kassiopee-navy px-3 py-1 rounded-full text-xs font-bold">
            {level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 line-clamp-2">
          {title}
        </h3>
        
        <p className="text-gray-600 mb-4 line-clamp-3 leading-relaxed">
          {description}
        </p>

        {/* Meta Information */}
        <div className="space-y-2 mb-4 text-sm">
          <div className="flex items-center text-gray-500">
            <Clock className="h-4 w-4 mr-2 text-kassiopee-lightblue" />
            <span>Durée : {duration}</span>
          </div>
          
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-2 text-kassiopee-lightblue" />
            <span>Région : {region}</span>
          </div>
          
          {nextSession && (
            <div className="flex items-center text-gray-500">
              <Users className="h-4 w-4 mr-2 text-kassiopee-lightblue" />
              <span>Prochaine session : {nextSession}</span>
            </div>
          )}
        </div>

        {/* CTA Buttons */}
        <div className="pt-4 border-t border-gray-100 space-y-3">
          <Link
            href={href}
            className="inline-flex items-center text-kassiopee-navy font-semibold hover:text-kassiopee-lightblue transition-colors group w-full justify-center bg-gray-50 py-2 px-4 rounded-md"
          >
            Voir les détails
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-2">
            {isRNCP && rncp && (
              <a
                href={`https://www.francecompetences.fr/recherche/rncp/${rncp}/`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-kassiopee-navy text-white text-center py-2 px-3 rounded-md text-sm font-medium hover:bg-kassiopee-navy/90 transition-colors"
              >
                Voir sur FranceCompétences
              </a>
            )}
            <a
              href="https://www.moncompteformation.gouv.fr"
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-kassiopee-gold text-kassiopee-navy text-center py-2 px-3 rounded-md text-sm font-medium hover:bg-kassiopee-gold/90 transition-colors"
            >
              Vérifier l'éligibilité CPF
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
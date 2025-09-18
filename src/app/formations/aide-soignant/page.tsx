import React from 'react';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Formation Aide-Soignant (DEAS) - Kassiopée Formation",
  description: "Formation complète pour devenir aide-soignant. Diplôme d'État d'Aide-Soignant (DEAS) en 10 mois.",
  keywords: "formation aide-soignant, DEAS, diplôme aide-soignant, formation sanitaire",
});

export default function AideSoignantPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Formation <span className="text-kassiopee-gold">Aide-Soignant</span>
          </h1>
          <p className="text-xl text-gray-200 mb-8">
            Devenez aide-soignant avec notre formation complète. Diplôme d'État d'Aide-Soignant (DEAS) 
            en 10 mois avec stages pratiques.
          </p>
        </div>
      </section>
      
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Programme de formation
          </h2>
          <p className="text-lg text-gray-600">
            Formation complète en 8 modules théoriques + 15 semaines de stages pratiques.
          </p>
        </div>
      </section>
    </div>
  );
}
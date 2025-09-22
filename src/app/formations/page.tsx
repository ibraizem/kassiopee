'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Clock, Users } from 'lucide-react';
import FormationCard from '@/components/ui/FormationCard';
import { generateSEO } from '@/lib/seo';
import { FormationListStructuredData } from '@/components/seo/StructuredData';

const allFormations = [
  {
    id: 'formation-ntc',
    title: 'RNCP NTC — Négociateur Technico-Commercial',
    description: 'Maîtriser les compétences opérationnelles de prospection, découverte client, argumentation, traitement des objections, closing et fidélisation. Préparer au Titre professionnel « Négociateur Technico-Commercial », niveau 5.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
    duration: '5 jours (35h)',
    region: 'Région parisienne',
    category: 'RNCP Commercial',
    level: 'Conseillers commerciaux',
    nextSession: 'Sessions mensuelles',
    href: '/formations/formation-ntc',
    rncp: '39063',
    isRNCP: true
  },
  {
    id: 'formation-arh',
    title: 'RNCP ARH — Assistant Ressources Humaines',
    description: 'Acquérir les compétences nécessaires à l\'administration du personnel, au recrutement, à l\'intégration et au suivi des compétences. Préparer au Titre professionnel « Assistant Ressources Humaines ».',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    duration: '5 jours (35h)',
    region: 'Région parisienne',
    category: 'RNCP RH',
    level: 'Assistant(e) RH',
    nextSession: 'Sessions mensuelles',
    href: '/formations/formation-arh',
    rncp: '35030',
    isRNCP: true
  },
  {
    id: 'formation-cv',
    title: 'Booster sa Candidature — Un CV Qui Ouvre des Portes',
    description: 'Permettre de rédiger un CV clair, professionnel et personnalisé, capable d\'attirer l\'attention d\'un recruteur et d\'augmenter le taux de convocation en entretien.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    duration: '1 journée (6-7h)',
    region: 'Région parisienne',
    category: 'Développement Personnel',
    level: 'Tout public',
    nextSession: 'Sessions hebdomadaires',
    href: '/formations/formation-cv',
    isRNCP: false
  },
  {
    id: 'formation-anglais',
    title: 'Anglais Professionnel — Niveau Opérationnel',
    description: 'Gagner en aisance dans les échanges professionnels courants (emails, téléphone, présentations simples) et acquérir un vocabulaire métier opérationnel.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    duration: '2 jours (14h)',
    region: 'Région parisienne',
    category: 'Langues',
    level: 'Tout niveau',
    nextSession: 'Sessions bimensuelles',
    href: '/formations/formation-anglais',
    isRNCP: false
  },
  {
    id: 'formation-marketing',
    title: 'Marketing Digital — Réseaux Sociaux & Acquisition',
    description: 'Définir une stratégie social media, produire du contenu engageant et lancer des campagnes d\'acquisition basiques (Facebook/Instagram/LinkedIn).',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    duration: '3 jours (21h)',
    region: 'Région parisienne',
    category: 'Marketing Digital',
    level: 'Entrepreneurs, responsables marketing',
    nextSession: 'Sessions mensuelles',
    href: '/formations/formation-marketing',
    isRNCP: false
  }
];

const categories = [
  'Toutes les catégories',
  'RNCP Commercial',
  'RNCP RH',
  'Développement Personnel',
  'Langues',
  'Marketing Digital'
];

const regions = [
  'Toutes les régions',
  'Région parisienne'
];

export default function FormationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories');
  const [selectedRegion, setSelectedRegion] = useState('Toutes les régions');
  const [showFilters, setShowFilters] = useState(false);

  const filteredFormations = useMemo(() => {
    return allFormations.filter(formation => {
      const matchesSearch = formation.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          formation.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === 'Toutes les catégories' ||
                             formation.category === selectedCategory;
      const matchesRegion = selectedRegion === 'Toutes les régions' ||
                           formation.region === selectedRegion ||
                           formation.region === 'Toutes régions';
      
      return matchesSearch && matchesCategory && matchesRegion;
    });
  }, [searchTerm, selectedCategory, selectedRegion]);

  return (
    <>
      <FormationListStructuredData formations={allFormations} />
      <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-kassiopee-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-kassiopee-gold">formations</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Découvrez nos formations professionnelles : RNCP Négociateur Technico-Commercial, Assistant RH, 
              développement personnel, anglais professionnel et marketing digital. Formations certifiantes et éligibles CPF.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-white shadow-sm sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher une formation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
              />
            </div>

            {/* Filter Toggle (Mobile) */}
            <button
              onClick={() => setShowFilters(!showFilters)}
              className="lg:hidden flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-lg"
            >
              <Filter className="h-4 w-4" />
              Filtres
            </button>

            {/* Filters (Desktop) */}
            <div className={`flex flex-col sm:flex-row gap-4 ${showFilters ? 'block' : 'hidden lg:flex'} w-full lg:w-auto`}>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              <select
                value={selectedRegion}
                onChange={(e) => setSelectedRegion(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
              >
                {regions.map(region => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredFormations.length} formation{filteredFormations.length > 1 ? 's' : ''} trouvée{filteredFormations.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Formations Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredFormations.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredFormations.map((formation) => (
                <FormationCard key={formation.id} {...formation} />
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucune formation trouvée
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche ou de filtrage.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Toutes les catégories');
                  setSelectedRegion('Toutes les régions');
                }}
                className="text-kassiopee-navy font-semibold hover:text-kassiopee-lightblue transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="flex items-center justify-center mb-4">
                <Users className="h-8 w-8 text-kassiopee-gold mr-3" />
                <span className="text-3xl font-bold">500+</span>
              </div>
              <p className="text-gray-200">Professionnels formés</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-kassiopee-gold mr-3" />
                <span className="text-3xl font-bold">95%</span>
              </div>
              <p className="text-gray-200">Taux de réussite aux certifications</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-kassiopee-gold mr-3" />
                <span className="text-3xl font-bold">5</span>
              </div>
              <p className="text-gray-200">Formations professionnelles disponibles</p>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
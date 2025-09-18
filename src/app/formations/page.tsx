'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Clock, Users } from 'lucide-react';
import FormationCard from '@/components/ui/FormationCard';
import { generateSEO } from '@/lib/seo';

const allFormations = [
  {
    id: 'aide-soignant',
    title: 'Formation Aide-Soignant (DEAS)',
    description: 'Accompagnement complet vers le diplôme d\'aide-soignant. Formation théorique et pratique avec stages en établissements partenaires pour acquérir toutes les compétences nécessaires.',
    image: 'https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg',
    duration: '10 mois',
    region: 'Toutes régions',
    category: 'Sanitaire & Social',
    level: 'Niveau 4',
    nextSession: 'Sept. 2024',
    href: '/formations/aide-soignant'
  },
  {
    id: 'auxiliaire-puericultrice',
    title: 'Auxiliaire de Puériculture (DEAP)',
    description: 'Formation complète aux soins et à l\'accompagnement du jeune enfant en maternité, PMI et structures d\'accueil. Stages pratiques inclus.',
    image: 'https://images.pexels.com/photos/7551634/pexels-photo-7551634.jpeg',
    duration: '10 mois',
    region: 'Île-de-France',
    category: 'Sanitaire & Social',
    level: 'Niveau 4',
    nextSession: 'Sept. 2024',
    href: '/formations/auxiliaire-puericultrice'
  },
  {
    id: 'auxiliaire-vie-sociale',
    title: 'Auxiliaire de Vie Sociale (DEAVS)',
    description: 'Devenez professionnel de l\'accompagnement à domicile. Formation complète aux gestes techniques et à la relation d\'aide auprès des personnes fragiles.',
    image: 'https://images.pexels.com/photos/7551659/pexels-photo-7551659.jpeg',
    duration: '9 mois',
    region: 'Toutes régions',
    category: 'Services à la personne',
    level: 'Niveau 3',
    nextSession: 'Oct. 2024',
    href: '/formations/auxiliaire-vie-sociale'
  },
  {
    id: 'accompagnant-educatif-social',
    title: 'Accompagnant Éducatif et Social (DEAES)',
    description: 'Formation aux métiers de l\'accompagnement en établissement ou à domicile. Développez vos compétences relationnelles et techniques.',
    image: 'https://images.pexels.com/photos/7551667/pexels-photo-7551667.jpeg',
    duration: '12 mois',
    region: 'PACA/AURA',
    category: 'Sanitaire & Social',
    level: 'Niveau 3',
    nextSession: 'Nov. 2024',
    href: '/formations/accompagnant-educatif-social'
  },
  {
    id: 'assistant-vie-dependance',
    title: 'Assistant de Vie aux Familles',
    description: 'Accompagnement des familles dans leur quotidien : entretien du domicile, garde d\'enfants, aide aux personnes âgées.',
    image: 'https://images.pexels.com/photos/7551630/pexels-photo-7551630.jpeg',
    duration: '6 mois',
    region: 'Centre-Val de Loire',
    category: 'Services à la personne',
    level: 'Niveau 3',
    nextSession: 'Déc. 2024',
    href: '/formations/assistant-vie-dependance'
  },
  {
    id: 'agent-service-hospitalier',
    title: 'Agent de Service Hospitalier',
    description: 'Formation aux techniques d\'hygiène et de nettoyage en milieu hospitalier. Acquisition des gestes professionnels et des protocoles.',
    image: 'https://images.pexels.com/photos/7551638/pexels-photo-7551638.jpeg',
    duration: '4 mois',
    region: 'Hauts-de-France',
    category: 'Sanitaire & Social',
    level: 'Niveau 3',
    nextSession: 'Jan. 2025',
    href: '/formations/agent-service-hospitalier'
  },
  {
    id: 'savoirs-base-numerique',
    title: 'Savoirs de Base et Numérique',
    description: 'Remise à niveau en français, mathématiques et compétences numériques. Préparation aux concours et certifications.',
    image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg',
    duration: '3 mois',
    region: 'Toutes régions',
    category: 'Savoirs de base',
    level: 'Tous niveaux',
    nextSession: 'Permanent',
    href: '/formations/savoirs-base-numerique'
  },
  {
    id: 'preparation-concours',
    title: 'Préparation aux Concours',
    description: 'Préparation intensive aux concours d\'entrée des formations sanitaires et sociales. Méthodologie, tests et entretiens.',
    image: 'https://images.pexels.com/photos/5428007/pexels-photo-5428007.jpeg',
    duration: '6 mois',
    region: 'Toutes régions',
    category: 'Savoirs de base',
    level: 'Tous niveaux',
    nextSession: 'Fév. 2025',
    href: '/formations/preparation-concours'
  },
];

const categories = [
  'Toutes les catégories',
  'Sanitaire & Social',
  'Services à la personne',
  'Savoirs de base'
];

const regions = [
  'Toutes les régions',
  'Île-de-France',
  'PACA/AURA',
  'Centre-Val de Loire',
  'Hauts-de-France'
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
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-kassiopee-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-kassiopee-gold">formations</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Découvrez toutes nos formations dans les secteurs sanitaire, social et services à la personne. 
              Plus de 40 formations certifiantes pour développer vos compétences.
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
                <span className="text-3xl font-bold">8 500+</span>
              </div>
              <p className="text-gray-200">Apprenants formés par an</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <Clock className="h-8 w-8 text-kassiopee-gold mr-3" />
                <span className="text-3xl font-bold">95%</span>
              </div>
              <p className="text-gray-200">Taux de réussite aux examens</p>
            </div>
            
            <div>
              <div className="flex items-center justify-center mb-4">
                <MapPin className="h-8 w-8 text-kassiopee-gold mr-3" />
                <span className="text-3xl font-bold">40+</span>
              </div>
              <p className="text-gray-200">Centres dans toute la France</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
'use client';

import React, { useState, useMemo } from 'react';
import { Search, Filter, MapPin, Clock, Users } from 'lucide-react';
import FormationCard from '@/components/ui/FormationCard';
import { generateSEO } from '@/lib/seo';

const allFormations = [
  {
    id: 'transformation-digitale-tpe',
    title: 'Transformation Digitale pour TPE (RS6074)',
    description: 'Formation certifiante pour élaborer et piloter un plan d\'action de transformation digitale adapté à votre TPE. Certification reconnue par France Compétences.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
    duration: '5 jours (28h)',
    region: 'Région parisienne',
    category: 'Transformation Digitale',
    level: 'Dirigeants TPE',
    nextSession: 'Sessions mensuelles',
    href: '/formations/transformation-digitale-tpe'
  },
  {
    id: 'gestion-projets-informatiques',
    title: 'Fondamentaux de la Gestion de Projets Informatiques',
    description: 'Maîtrisez les méthodologies de gestion de projet IT : cycle en V, Agile, Scrum, Kanban. Formation complète avec études de cas pratiques.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    duration: '4 jours (28h)',
    region: 'Région parisienne',
    category: 'Gestion de Projets IT',
    level: 'Chefs de projet',
    nextSession: 'Sessions bimensuelles',
    href: '/formations/gestion-projets-informatiques'
  },
  {
    id: 'itil-v4-fondements',
    title: 'ITIL V4 - Fondements et Concepts Essentiels',
    description: 'Formation aux fondements de la gestion des services selon ITIL V4. Préparation à la certification officielle avec études de cas.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    duration: '3 jours (21h)',
    region: 'Région parisienne',
    category: 'ITIL & Services',
    level: 'Professionnels IT',
    nextSession: 'Sessions mensuelles',
    href: '/formations/itil-v4-fondements'
  },
  {
    id: 'scrum-master-agile',
    title: 'Le rôle et les missions du Scrum Master',
    description: 'Formation spécialisée sur le rôle du Scrum Master dans une équipe Agile. Méthodologies, outils et bonnes pratiques.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg',
    duration: '3 jours (21h)',
    region: 'Région parisienne',
    category: 'Méthodes Agiles',
    level: 'Scrum Masters',
    nextSession: 'Sessions mensuelles',
    href: '/formations/scrum-master-agile'
  },
  {
    id: 'kanban-gestion-flux',
    title: 'Mise en place d\'un système Kanban',
    description: 'Formation pratique pour la gestion des flux de travail avec la méthode Kanban. Optimisation des processus et amélioration continue.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg',
    duration: '2 jours (14h)',
    region: 'Région parisienne',
    category: 'Méthodes Agiles',
    level: 'Gestionnaires de projet',
    nextSession: 'Sessions bimensuelles',
    href: '/formations/kanban-gestion-flux'
  },
  {
    id: 'intelligence-artificielle',
    title: 'Formation en Intelligence Artificielle',
    description: 'Introduction aux technologies d\'IA, machine learning et applications pratiques en entreprise. Formation adaptée aux besoins actuels.',
    image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
    duration: '5 jours (35h)',
    region: 'Région parisienne',
    category: 'Intelligence Artificielle',
    level: 'Professionnels IT',
    nextSession: 'Sessions trimestrielles',
    href: '/formations/intelligence-artificielle'
  }
];

const categories = [
  'Toutes les catégories',
  'Transformation Digitale',
  'Gestion de Projets IT',
  'ITIL & Services',
  'Méthodes Agiles',
  'Intelligence Artificielle'
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
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-kassiopee-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nos <span className="text-kassiopee-gold">formations</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Découvrez toutes nos formations spécialisées en informatique, transformation digitale et gestion de projets IT. 
              Formations certifiantes reconnues par France Compétences.
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
              <p className="text-gray-200">Professionnels IT formés</p>
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
                <span className="text-3xl font-bold">6</span>
              </div>
              <p className="text-gray-200">Formations spécialisées disponibles</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
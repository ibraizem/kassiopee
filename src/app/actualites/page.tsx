'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, Search, Tag, User } from 'lucide-react';
import { generateSEO } from '@/lib/seo';

const blogPosts = [
  {
    id: 'reconversion-metiers-passion-2024',
    title: 'Reconversion Professionnelle : 5 Métiers Passion qui Recrutent en 2024',
    excerpt: 'Envie de donner un nouveau sens à votre carrière ? Découvrez 5 professions dans les secteurs de la coiffure, de l\'esthétique et de la petite enfance qui recherchent activement des talents.',
    image: 'https://images.pexels.com/photos/3993449/pexels-photo-3993449.jpeg',
    category: 'Guide des Métiers',
    author: 'Équipe Kassiopée',
    date: '2024-12-15',
    readTime: '8 min',
    featured: true,
    tags: ['reconversion', 'métiers', 'coiffure', 'esthétique', 'petite-enfance']
  },
  {
    id: 'cap-esthetique-candidat-libre-guide',
    title: 'CAP Esthétique-Cosmétique en Candidat Libre : Le Guide Complet',
    excerpt: 'Passer son CAP Esthétique en candidat libre est un excellent choix de flexibilité. Découvrez comment s\'organiser et maximiser vos chances de réussite.',
    image: 'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg',
    category: 'Conseils Pédagogiques',
    author: 'Marie Dubois',
    date: '2024-12-10',
    readTime: '12 min',
    featured: true,
    tags: ['cap-esthetique', 'candidat-libre', 'formation', 'conseils']
  },
  {
    id: 'temoignage-sophie-prothesiste-ongulaire',
    title: 'De Comptable à Prothésiste Ongulaire : Le Parcours Inspirant de Sophie',
    excerpt: 'Il y a trois ans, Sophie était comptable. Aujourd\'hui, elle est à son compte comme technicienne en prothésie ongulaire. Elle nous raconte son parcours de reconversion.',
    image: 'https://images.pexels.com/photos/3997987/pexels-photo-3997987.jpeg',
    category: 'Témoignages & Réussites',
    author: 'Sophie Martin',
    date: '2024-12-05',
    readTime: '6 min',
    featured: true,
    tags: ['témoignage', 'reconversion', 'onglerie', 'success-story']
  },
  {
    id: 'financer-formation-cpf-pole-emploi',
    title: 'Comment Financer sa Formation : CPF, Pôle Emploi et Autres Aides',
    excerpt: 'Découvrez tous les dispositifs de financement disponibles pour votre formation professionnelle et les démarches à suivre.',
    image: 'https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg',
    category: 'Conseils de Reconversion',
    author: 'Pierre Durand',
    date: '2024-11-28',
    readTime: '10 min',
    featured: false,
    tags: ['financement', 'cpf', 'pole-emploi', 'aides']
  },
  {
    id: 'tendances-coiffure-2024',
    title: 'Tendances Coiffure 2024 : Ce que les Professionnels Doivent Savoir',
    excerpt: 'Couleurs, coupes, techniques... Découvrez les tendances coiffure qui marquent 2024 et comment les maîtriser.',
    image: 'https://images.pexels.com/photos/3993456/pexels-photo-3993456.jpeg',
    category: 'Actualité des Secteurs',
    author: 'Laura Coiffure',
    date: '2024-11-20',
    readTime: '7 min',
    featured: false,
    tags: ['coiffure', 'tendances', 'techniques', '2024']
  },
  {
    id: 'massage-bien-etre-debouches',
    title: 'Massage Bien-Être : Un Secteur en Pleine Expansion',
    excerpt: 'Le secteur du bien-être connaît une croissance exceptionnelle. Découvrez les opportunités du massage bien-être.',
    image: 'https://images.pexels.com/photos/3757942/pexels-photo-3757942.jpeg',
    category: 'Guide des Métiers',
    author: 'Équipe Kassiopée',
    date: '2024-11-15',
    readTime: '9 min',
    featured: false,
    tags: ['massage', 'bien-être', 'débouchés', 'secteur']
  }
];

const categories = [
  'Toutes les catégories',
  'Guide des Métiers',
  'Conseils de Reconversion',
  'Témoignages & Réussites',
  'Conseils Pédagogiques',
  'Actualité des Secteurs'
];

export default function ActualitesPage() {
  const [selectedCategory, setSelectedCategory] = useState('Toutes les catégories');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === 'Toutes les catégories' || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = filteredPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Hero Section */}
      <section className="bg-kassiopee-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Le Mag' <span className="text-kassiopee-gold">Kassiopée</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Conseils, témoignages et actualités pour réussir votre reconversion professionnelle 
              dans l'informatique, la transformation digitale et les technologies de pointe.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="bg-white shadow-sm sticky top-16 z-40 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              <input
                type="text"
                placeholder="Rechercher un article..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {/* Results Count */}
          <div className="mt-4 text-sm text-gray-600">
            {filteredPosts.length} article{filteredPosts.length > 1 ? 's' : ''} trouvé{filteredPosts.length > 1 ? 's' : ''}
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      {selectedCategory === 'Toutes les catégories' && !searchTerm && (
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Articles à la <span className="text-kassiopee-navy">une</span>
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {featuredPosts.map((post, index) => (
                <Link
                  key={post.id}
                  href={`/actualites/${post.id}`}
                  className={`group block ${index === 0 ? 'lg:col-span-2 lg:row-span-2' : ''}`}
                >
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className={`relative ${index === 0 ? 'h-80' : 'h-48'}`}>
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-kassiopee-gold text-kassiopee-navy px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className={`font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors ${
                        index === 0 ? 'text-2xl' : 'text-xl'
                      }`}>
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 mr-1" />
                            {new Date(post.date).toLocaleDateString('fr-FR')}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Articles */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {selectedCategory !== 'Toutes les catégories' || searchTerm ? (
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              {searchTerm ? `Résultats pour "${searchTerm}"` : selectedCategory}
            </h2>
          ) : (
            <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">
              Tous nos <span className="text-kassiopee-navy">articles</span>
            </h2>
          )}
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {(selectedCategory === 'Toutes les catégories' && !searchTerm ? regularPosts : filteredPosts).map((post) => (
                <Link key={post.id} href={`/actualites/${post.id}`} className="group block">
                  <article className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full">
                    <div className="relative h-48">
                      <Image
                        src={post.image}
                        alt={post.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="bg-kassiopee-gold text-kassiopee-navy px-3 py-1 rounded-full text-sm font-semibold">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-kassiopee-navy transition-colors">
                        {post.title}
                      </h3>
                      <p className="text-gray-600 mb-4 line-clamp-3">{post.excerpt}</p>
                      <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center">
                            <User className="h-4 w-4 mr-1" />
                            {post.author}
                          </div>
                          <div className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {post.readTime}
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {post.tags.slice(0, 3).map((tag) => (
                          <span key={tag} className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Aucun article trouvé
              </h3>
              <p className="text-gray-600 mb-6">
                Essayez de modifier vos critères de recherche.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Toutes les catégories');
                }}
                className="text-kassiopee-navy font-semibold hover:text-kassiopee-lightblue transition-colors"
              >
                Réinitialiser les filtres
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 bg-kassiopee-navy text-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Restez informé de nos <span className="text-kassiopee-gold">derniers articles</span>
          </h2>
          <p className="text-xl text-gray-200 mb-10 max-w-2xl mx-auto">
            Recevez chaque semaine nos conseils, témoignages et actualités pour réussir votre reconversion professionnelle.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Votre adresse email"
              className="flex-1 px-4 py-3 rounded-lg text-gray-900 focus:ring-2 focus:ring-kassiopee-gold focus:outline-none"
            />
            <button className="bg-kassiopee-gold text-kassiopee-navy px-8 py-3 rounded-lg font-bold hover:bg-kassiopee-gold/90 transition-colors inline-flex items-center justify-center">
              S'abonner
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}



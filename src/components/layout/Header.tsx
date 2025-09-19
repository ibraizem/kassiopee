'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const navigation = [
  {
    name: 'Formations IT',
    href: '/formations',
    children: [
      { name: 'Transformation Digitale TPE', href: '/formations/transformation-digitale-tpe' },
      { name: 'Gestion de Projets IT', href: '/formations/gestion-projets-informatiques' },
      { name: 'ITIL V4 Fondements', href: '/formations/itil-v4-fondements' },
      { name: 'Scrum Master Agile', href: '/formations/scrum-master-agile' },
      { name: 'Kanban Gestion des Flux', href: '/formations/kanban-gestion-flux' },
      { name: 'Intelligence Artificielle', href: '/formations/intelligence-artificielle' },
      { name: 'Toutes les formations', href: '/formations' },
    ],
  },
  {
    name: 'Le Mag\' Kassiopée',
    href: '/actualites',
    children: [
      { name: 'Guide des Métiers', href: '/actualites?category=Guide+des+Métiers' },
      { name: 'Conseils de Reconversion', href: '/actualites?category=Conseils+de+Reconversion' },
      { name: 'Témoignages & Réussites', href: '/actualites?category=Témoignages+%26+Réussites' },
      { name: 'Conseils Pédagogiques', href: '/actualites?category=Conseils+Pédagogiques' },
      { name: 'Actualité des Secteurs', href: '/actualites?category=Actualité+des+Secteurs' },
      { name: 'Tous les articles', href: '/actualites' },
    ],
  },
  {
    name: 'Certifications',
    href: '/certifications',
    children: [
      { name: 'RS6074 France Compétences', href: '/formations/transformation-digitale-tpe' },
      { name: 'ITIL V4 Foundation', href: '/formations/itil-v4-fondements' },
      { name: 'Scrum Master Certified', href: '/formations/scrum-master-agile' },
      { name: 'Toutes les certifications', href: '/certifications' },
    ],
  },
  {
    name: 'À propos',
    href: '/a-propos',
    children: [
      { name: 'Qui sommes-nous', href: '/a-propos' },
      { name: 'Notre expertise IT', href: '/expertise-it' },
      { name: 'Nos résultats', href: '/nos-resultats' },
      { name: 'Recrutement', href: '/recrutement' },
    ],
  },
  {
    name: 'Contact',
    href: '/contact',
  },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDropdownToggle = (itemName: string) => {
    setActiveDropdown(activeDropdown === itemName ? null : itemName);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" aria-label="Navigation principale">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Logo className="h-10 w-auto" width={160} height={40} />
              <span className="sr-only">Kassiopée Formation</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigation.map((item) => (
                <div key={item.name} className="relative group">
                  {item.children ? (
                    <div>
                      <button
                        className="flex items-center px-3 py-2 text-sm font-medium text-gray-700 hover:text-kassiopee-navy transition-colors"
                        onClick={() => handleDropdownToggle(item.name)}
                        onMouseEnter={() => setActiveDropdown(item.name)}
                      >
                        {item.name}
                        <ChevronDown className="ml-1 h-4 w-4" />
                      </button>
                      {activeDropdown === item.name && (
                        <div
                          className="absolute left-0 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5"
                          onMouseLeave={() => setActiveDropdown(null)}
                        >
                          <div className="py-1">
                            {item.children.map((child) => (
                              <Link
                                key={child.name}
                                href={child.href}
                                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-kassiopee-navy"
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3 py-2 text-sm font-medium ${
                        pathname === item.href
                          ? 'text-kassiopee-navy border-b-2 border-kassiopee-gold'
                          : 'text-gray-700 hover:text-kassiopee-navy'
                      }`}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Link
              href="/contact"
              className="bg-kassiopee-navy text-white px-6 py-2 rounded-md font-semibold hover:bg-kassiopee-navy/90 transition-colors"
            >
              NOUS CONTACTER
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-kassiopee-navy hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-kassiopee-navy"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu principal</span>
              {mobileMenuOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              {navigation.map((item) => (
                <div key={item.name}>
                  {item.children ? (
                    <div>
                      <button
                        className="flex items-center justify-between w-full px-3 py-2 text-base font-medium text-gray-700 hover:text-kassiopee-navy hover:bg-gray-50"
                        onClick={() => handleDropdownToggle(item.name)}
                      >
                        {item.name}
                        <ChevronDown className={`h-4 w-4 transform transition-transform ${
                          activeDropdown === item.name ? 'rotate-180' : ''
                        }`} />
                      </button>
                      {activeDropdown === item.name && (
                        <div className="pl-4 space-y-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.name}
                              href={child.href}
                              className="block px-3 py-2 text-sm text-gray-600 hover:text-kassiopee-navy hover:bg-gray-50"
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {child.name}
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className={`block px-3 py-2 text-base font-medium ${
                        pathname === item.href
                          ? 'text-kassiopee-navy bg-gray-50'
                          : 'text-gray-700 hover:text-kassiopee-navy hover:bg-gray-50'
                      }`}
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  )}
                </div>
              ))}
              <div className="mt-4 pt-4 border-t border-gray-200">
                <Link
                  href="/contact"
                  className="block w-full text-center bg-kassiopee-navy text-white px-6 py-2 rounded-md font-semibold hover:bg-kassiopee-navy/90 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  NOUS CONTACTER
                </Link>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
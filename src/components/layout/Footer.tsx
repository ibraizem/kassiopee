import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const footerLinks = {
  formations: [
    { name: 'Transformation Digitale TPE', href: '/formations/transformation-digitale-tpe' },
    { name: 'Gestion de Projets IT', href: '/formations/gestion-projets-informatiques' },
    { name: 'ITIL V4 Fondements', href: '/formations/itil-v4-fondements' },
    { name: 'Toutes les formations', href: '/formations' },
  ],
  certifications: [
    { name: 'RS6074 France Compétences', href: '/formations/transformation-digitale-tpe' },
    { name: 'ITIL V4 Foundation', href: '/formations/itil-v4-fondements' },
    { name: 'Scrum Master Certified', href: '/formations/scrum-master-agile' },
    { name: 'Toutes les certifications', href: '/certifications' },
  ],
  company: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Le Mag\' Kassiopée', href: '/actualites' },
    { name: 'Nos résultats', href: '/nos-resultats' },
    { name: 'Recrutement', href: '/recrutement' },
    { name: 'Contact', href: '/contact' },
  ],
  legal: [
    { name: 'Mentions légales', href: '/mentions-legales' },
    { name: 'CGU', href: '/cgu' },
    { name: 'Politique de confidentialité', href: '/confidentialite' },
    { name: 'Plan du site', href: '/plan-du-site' },
  ],
};

const socialLinks = [
  { name: 'LinkedIn', href: '#', icon: Linkedin },
  { name: 'Facebook', href: '#', icon: Facebook },
  { name: 'Twitter', href: '#', icon: Twitter },
];

const certifications = [
  'QUALIOPI',
  'France Compétences RS6074',
  'ITIL V4 Foundation',
  'Scrum Alliance',
];

export default function Footer() {
  return (
    <footer className="bg-kassiopee-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="mb-6">
              <Logo className="mb-4 filter brightness-0 invert" width={160} height={45} />
              <p className="text-gray-300 text-sm leading-relaxed">
                Organisme de formation professionnelle spécialisé dans l'informatique, 
                la transformation digitale et les nouvelles technologies.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-kassiopee-gold mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Siège social</p>
                  <p className="text-xs text-gray-300">
                    Région parisienne
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-kassiopee-gold" />
                <div>
                  <p className="text-sm font-medium">Téléphone</p>
                  <p className="text-xs text-gray-300">
                    07 65 67 63 41
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-kassiopee-gold" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-gray-300">
                    contact@kassiopee-formation.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formations */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-kassiopee-gold">Nos formations</h3>
            <ul className="space-y-2">
              {footerLinks.formations.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-kassiopee-gold">Certifications</h3>
            <ul className="space-y-2">
              {footerLinks.certifications.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal */}
          <div className="mt-8 sm:mt-0">
            <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-kassiopee-gold">L'entreprise</h3>
            <ul className="space-y-2 mb-6">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <h4 className="text-xs sm:text-sm font-semibold mb-2 text-kassiopee-gold">Informations légales</h4>
            <ul className="space-y-1">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.href}
                    className="text-gray-300 hover:text-white transition-colors text-xs"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Certifications */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 mb-6 sm:mb-8">
          <h3 className="text-base sm:text-lg font-semibold mb-3 sm:mb-4 text-kassiopee-gold">Nos certifications et agréments</h3>
          <div className="flex flex-wrap gap-2 sm:gap-4">
            {certifications.map((cert) => (
              <div 
                key={cert}
                className="bg-white/10 px-2 sm:px-3 py-1 rounded-full text-xs font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 sm:space-x-6 mb-4 md:mb-0">
            {socialLinks.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-300 hover:text-kassiopee-gold transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="sr-only">{item.name}</span>
                <item.icon className="h-6 w-6" />
              </a>
            ))}
          </div>
          
          <div className="text-center md:text-right">
            <p className="text-xs sm:text-sm text-gray-300">
              © {new Date().getFullYear()} Kassiopée Formation. Tous droits réservés.
            </p>
            <p className="text-xs text-gray-400 mt-1">
              Organisme de formation enregistré sous le n° XX XX XXXXX XX
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
import React from 'react';
import Link from 'next/link';
import { Facebook, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';
import Logo from '@/components/ui/Logo';

const footerLinks = {
  formations: [
    { name: 'Sanitaire & Social', href: '/formations/sanitaire-social' },
    { name: 'Services à la personne', href: '/formations/services-personne' },
    { name: 'Savoirs de base', href: '/formations/savoirs-base' },
    { name: 'Catalogue complet', href: '/formations' },
  ],
  regions: [
    { name: 'Île-de-France', href: '/regions/ile-de-france' },
    { name: 'PACA/AURA', href: '/regions/paca-aura' },
    { name: 'Centre-Val de Loire', href: '/regions/centre-val-de-loire' },
    { name: 'Hauts-de-France', href: '/regions/hauts-de-france' },
  ],
  company: [
    { name: 'À propos', href: '/a-propos' },
    { name: 'Nos centres', href: '/centres' },
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
  'ICERT',
  'Datadock',
  'OPCO Santé',
];

export default function Footer() {
  return (
    <footer className="bg-kassiopee-navy text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <Logo className="mb-4 filter brightness-0 invert" width={180} height={50} />
              <p className="text-gray-300 text-sm leading-relaxed">
                Organisme de formation professionnelle spécialisé dans les secteurs 
                sanitaire, social et des services à la personne.
              </p>
            </div>
            
            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-kassiopee-gold mt-0.5" />
                <div>
                  <p className="text-sm font-medium">Siège social</p>
                  <p className="text-xs text-gray-300">
                    {process.env.NEXT_PUBLIC_ADDRESS_SIEGE}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-kassiopee-gold" />
                <div>
                  <p className="text-sm font-medium">Téléphone</p>
                  <p className="text-xs text-gray-300">
                    {process.env.NEXT_PUBLIC_TELEPHONE}
                  </p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-kassiopee-gold" />
                <div>
                  <p className="text-sm font-medium">Email</p>
                  <p className="text-xs text-gray-300">
                    {process.env.NEXT_PUBLIC_EMAIL_SIEGE}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Formations */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kassiopee-gold">Nos formations</h3>
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

          {/* Regions */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kassiopee-gold">Nos régions</h3>
            <ul className="space-y-2">
              {footerLinks.regions.map((link) => (
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
          <div>
            <h3 className="text-lg font-semibold mb-4 text-kassiopee-gold">L'entreprise</h3>
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
            
            <h4 className="text-sm font-semibold mb-2 text-kassiopee-gold">Informations légales</h4>
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
        <div className="border-t border-gray-700 pt-8 mb-8">
          <h3 className="text-lg font-semibold mb-4 text-kassiopee-gold">Nos certifications et agréments</h3>
          <div className="flex flex-wrap gap-4">
            {certifications.map((cert) => (
              <div 
                key={cert}
                className="bg-white/10 px-3 py-1 rounded-full text-xs font-medium"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-6 mb-4 md:mb-0">
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
            <p className="text-sm text-gray-300">
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
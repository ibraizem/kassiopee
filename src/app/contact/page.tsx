import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ui/ContactForm';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Contact - Kassiopée Formation",
  description: "Contactez Kassiopée Formation pour toute question sur nos formations informatiques. Notre équipe vous accompagne dans votre projet de reconversion IT.",
  keywords: "contact, formation professionnelle, conseil, inscription, Kassiopée Formation",
});

const contactInfo = [
  {
    icon: Phone,
    title: "Téléphone",
    content: "07 43 67 87 68",
    description: "Du lundi au vendredi, 9h-18h"
  },
  {
    icon: Mail,
    title: "Email",
    content: "direction@kassiopee-formation.com",
    description: "Réponse sous 24h ouvrées"
  },
  {
    icon: MapPin,
    title: "Centre de formation",
    content: "Région parisienne",
    description: "Formations sur site ou à distance"
  },
  {
    icon: Clock,
    title: "Horaires",
    content: "9h - 18h",
    description: "Lundi au vendredi"
  }
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-kassiopee-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Contactez-<span className="text-kassiopee-gold">nous</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Notre équipe de conseillers est à votre disposition pour vous accompagner 
              dans votre projet de formation et répondre à toutes vos questions.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {contactInfo.map((info, index) => (
              <div key={index} className="text-center">
                <div className="bg-kassiopee-lightblue text-white rounded-full w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center mx-auto mb-3 sm:mb-4">
                  <info.icon className="h-6 w-6 sm:h-8 sm:w-8" />
                </div>
                <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                <p className="text-kassiopee-navy font-semibold mb-1 text-sm sm:text-base">{info.content}</p>
                <p className="text-xs sm:text-sm text-gray-600">{info.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Envoyez-nous un <span className="text-kassiopee-navy">message</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Remplissez le formulaire ci-dessous et notre équipe vous recontactera rapidement.
            </p>
          </div>
          
          <ContactForm 
            title="Formulaire de contact"
            subtitle="Nous vous répondrons dans les plus brefs délais"
            sourceePage="/contact"
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">
              Questions <span className="text-kassiopee-navy">fréquentes</span>
            </h2>
            <p className="text-base sm:text-lg text-gray-600">
              Retrouvez les réponses aux questions les plus courantes
            </p>
          </div>

          <div className="space-y-4 sm:space-y-6">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-2">
                Comment s'inscrire à une formation ?
              </h3>
              <p className="text-sm sm:text-base text-gray-600">
                Vous pouvez vous inscrire directement en ligne via notre formulaire d'inscription, 
                ou nous contacter par téléphone pour un accompagnement personnalisé.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Quels sont les prérequis pour nos formations ?
              </h3>
              <p className="text-gray-600">
                Les prérequis varient selon la formation. Pour nos formations IT, une expérience professionnelle 
                ou des bases en informatique sont recommandées.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Comment financer ma formation ?
              </h3>
              <p className="text-gray-600">
                Plusieurs solutions de financement sont possibles : CPF, Pôle Emploi, 
                OPCO, financement personnel. Nos conseillers vous accompagnent dans vos démarches.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

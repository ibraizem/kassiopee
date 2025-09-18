'use client';

import React, { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  subtitle?: string;
  formationInterest?: string;
  sourceePage?: string;
}

interface FormData {
  nom: string;
  prenom: string;
  email: string;
  telephone: string;
  message: string;
  formation_interest: string;
  region: string;
  centre_preference: string;
  consentement_rgpd: boolean;
}

const regions = [
  'Île-de-France',
  'PACA/AURA',
  'Centre-Val de Loire/Nouvelle-Aquitaine',
  'Hauts-de-France',
];

const centres = [
  'Paris - République',
  'Paris - Bastille',
  'Lyon - Part-Dieu',
  'Marseille - Vieux-Port',
  'Lille - Centre',
  'Orléans - Centre',
];

export default function ContactForm({
  title = "Contactez-nous",
  subtitle = "Nous sommes là pour répondre à vos questions",
  formationInterest = "",
  sourceePage = ""
}: ContactFormProps) {
  const [formData, setFormData] = useState<FormData>({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    message: '',
    formation_interest: formationInterest,
    region: '',
    centre_preference: '',
    consentement_rgpd: false,
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!formData.consentement_rgpd) {
      setError('Vous devez accepter le traitement de vos données personnelles.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          source_page: sourceePage || window.location.pathname,
        }),
      });

      if (response.ok) {
        setSuccess(true);
        setFormData({
          nom: '',
          prenom: '',
          email: '',
          telephone: '',
          message: '',
          formation_interest: formationInterest,
          region: '',
          centre_preference: '',
          consentement_rgpd: false,
        });
      } else {
        const errorData = await response.json();
        setError(errorData.message || 'Une erreur est survenue. Veuillez réessayer.');
      }
    } catch (err) {
      setError('Une erreur réseau est survenue. Veuillez réessayer.');
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-xl shadow-lg p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Message envoyé !</h3>
        <p className="text-gray-600 mb-6">
          Merci pour votre message. Notre équipe vous recontactera dans les plus brefs délais.
        </p>
        <button
          onClick={() => setSuccess(false)}
          className="text-kassiopee-navy font-semibold hover:text-kassiopee-lightblue transition-colors"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">{title}</h2>
        <p className="text-gray-600">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Nom et Prénom */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
              Nom *
            </label>
            <input
              type="text"
              id="nom"
              name="nom"
              required
              value={formData.nom}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent transition-colors"
              placeholder="Votre nom"
            />
          </div>
          
          <div>
            <label htmlFor="prenom" className="block text-sm font-medium text-gray-700 mb-2">
              Prénom *
            </label>
            <input
              type="text"
              id="prenom"
              name="prenom"
              required
              value={formData.prenom}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent transition-colors"
              placeholder="Votre prénom"
            />
          </div>
        </div>

        {/* Email et Téléphone */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent transition-colors"
              placeholder="votre.email@exemple.fr"
            />
          </div>
          
          <div>
            <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
              Téléphone
            </label>
            <input
              type="tel"
              id="telephone"
              name="telephone"
              value={formData.telephone}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent transition-colors"
              placeholder="01 23 45 67 89"
            />
          </div>
        </div>

        {/* Formation d'intérêt */}
        <div>
          <label htmlFor="formation_interest" className="block text-sm font-medium text-gray-700 mb-2">
            Formation d'intérêt
          </label>
          <input
            type="text"
            id="formation_interest"
            name="formation_interest"
            value={formData.formation_interest}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent transition-colors"
            placeholder="Quelle formation vous intéresse ?"
          />
        </div>

        {/* Région et Centre */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="region" className="block text-sm font-medium text-gray-700 mb-2">
              Région préférée
            </label>
            <select
              id="region"
              name="region"
              value={formData.region}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent transition-colors"
            >
              <option value="">Sélectionnez une région</option>
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>
          
          <div>
            <label htmlFor="centre_preference" className="block text-sm font-medium text-gray-700 mb-2">
              Centre de préférence
            </label>
            <select
              id="centre_preference"
              name="centre_preference"
              value={formData.centre_preference}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent transition-colors"
            >
              <option value="">Sélectionnez un centre</option>
              {centres.map((centre) => (
                <option key={centre} value={centre}>
                  {centre}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent transition-colors resize-vertical"
            placeholder="Décrivez votre projet de formation, vos questions..."
          />
        </div>

        {/* Consentement RGPD */}
        <div className="space-y-4">
          <div className="flex items-start space-x-3">
            <input
              type="checkbox"
              id="consentement_rgpd"
              name="consentement_rgpd"
              checked={formData.consentement_rgpd}
              onChange={handleInputChange}
              className="mt-1 h-4 w-4 text-kassiopee-lightblue focus:ring-kassiopee-lightblue border-gray-300 rounded"
            />
            <label htmlFor="consentement_rgpd" className="text-sm text-gray-700">
              J'accepte que mes données personnelles soient traitées par Kassiopée Formation dans le cadre de ma demande de contact. 
              Je peux exercer mes droits d'accès, de rectification et de suppression en me rendant sur la page{' '}
              <a href="/confidentialite" className="text-kassiopee-navy hover:text-kassiopee-lightblue">
                politique de confidentialité
              </a>. *
            </label>
          </div>
          
          <p className="text-xs text-gray-500">
            * Champs obligatoires. Vos données ne seront jamais transmises à des tiers.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-md p-4">
            <p className="text-red-700 text-sm">{error}</p>
          </div>
        )}

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-kassiopee-navy text-white px-6 py-3 rounded-md font-semibold hover:bg-kassiopee-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
        >
          {loading ? (
            <>
              <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent" />
              Envoi en cours...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Envoyer le message
            </>
          )}
        </button>
      </form>
    </div>
  );
}
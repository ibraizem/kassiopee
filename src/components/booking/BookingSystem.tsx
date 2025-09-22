'use client';

import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  Users, 
  MapPin, 
  CreditCard, 
  CheckCircle, 
  AlertCircle,
  ArrowRight,
  User,
  Mail,
  Phone,
  FileText
} from 'lucide-react';

interface BookingSession {
  id: string;
  formationId: string;
  formationName: string;
  date: string;
  startTime: string;
  endTime: string;
  duration: string;
  price: number;
  maxParticipants: number;
  currentParticipants: number;
  location: string;
  instructor: string;
  isRNCP: boolean;
  cpfEligible: boolean;
}

interface BookingFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company?: string;
  position?: string;
  experience: string;
  motivation: string;
  financingMethod: 'cpf' | 'company' | 'personal' | 'pole_emploi' | 'other';
  cpfRights?: number;
  specialRequests?: string;
  gdprConsent: boolean;
  marketingConsent: boolean;
}

const mockSessions: BookingSession[] = [
  {
    id: 'ntc-2025-02-15',
    formationId: 'formation-ntc',
    formationName: 'RNCP Négociateur Technico-Commercial',
    date: '2025-02-15',
    startTime: '09:00',
    endTime: '17:00',
    duration: '5 jours',
    price: 2500,
    maxParticipants: 12,
    currentParticipants: 8,
    location: 'Région parisienne',
    instructor: 'Marie Dubois',
    isRNCP: true,
    cpfEligible: true
  },
  {
    id: 'arh-2025-02-22',
    formationId: 'formation-arh',
    formationName: 'RNCP Assistant Ressources Humaines',
    date: '2025-02-22',
    startTime: '09:00',
    endTime: '17:00',
    duration: '5 jours',
    price: 2300,
    maxParticipants: 10,
    currentParticipants: 6,
    location: 'Région parisienne',
    instructor: 'Pierre Martin',
    isRNCP: true,
    cpfEligible: true
  },
  {
    id: 'cv-2025-02-10',
    formationId: 'formation-cv',
    formationName: 'Booster sa Candidature (CV)',
    date: '2025-02-10',
    startTime: '09:00',
    endTime: '17:00',
    duration: '1 jour',
    price: 450,
    maxParticipants: 15,
    currentParticipants: 12,
    location: 'Région parisienne',
    instructor: 'Sophie Chen',
    isRNCP: false,
    cpfEligible: true
  },
  {
    id: 'marketing-2025-03-05',
    formationId: 'formation-marketing',
    formationName: 'Marketing Digital',
    date: '2025-03-05',
    startTime: '09:00',
    endTime: '17:00',
    duration: '3 jours',
    price: 1200,
    maxParticipants: 12,
    currentParticipants: 4,
    location: 'Région parisienne',
    instructor: 'Thomas Leroy',
    isRNCP: false,
    cpfEligible: true
  }
];

interface BookingSystemProps {
  formationId?: string;
  className?: string;
}

export default function BookingSystem({ formationId, className = '' }: BookingSystemProps) {
  const [step, setStep] = useState<'sessions' | 'form' | 'confirmation'>('sessions');
  const [selectedSession, setSelectedSession] = useState<BookingSession | null>(null);
  const [formData, setFormData] = useState<BookingFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    position: '',
    experience: '',
    motivation: '',
    financingMethod: 'cpf',
    specialRequests: '',
    gdprConsent: false,
    marketingConsent: false
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  // Filtrer les sessions selon la formation sélectionnée
  const availableSessions = formationId 
    ? mockSessions.filter(session => session.formationId === formationId)
    : mockSessions;

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('fr-FR', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const getAvailabilityStatus = (session: BookingSession) => {
    const remaining = session.maxParticipants - session.currentParticipants;
    if (remaining === 0) return { status: 'full', text: 'Complet', color: 'text-red-600' };
    if (remaining <= 2) return { status: 'limited', text: `${remaining} places restantes`, color: 'text-orange-600' };
    return { status: 'available', text: `${remaining} places disponibles`, color: 'text-green-600' };
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Prénom requis';
    if (!formData.lastName.trim()) newErrors.lastName = 'Nom requis';
    if (!formData.email.trim()) newErrors.email = 'Email requis';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = 'Email invalide';
    if (!formData.phone.trim()) newErrors.phone = 'Téléphone requis';
    if (!formData.experience.trim()) newErrors.experience = 'Expérience requise';
    if (!formData.motivation.trim()) newErrors.motivation = 'Motivation requise';
    if (!formData.gdprConsent) newErrors.gdprConsent = 'Consentement RGPD requis';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateForm() || !selectedSession) return;

    setIsSubmitting(true);
    
    try {
      // Simuler l'envoi des données
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Ici, vous intégreriez votre API de réservation
      console.log('Booking data:', {
        session: selectedSession,
        participant: formData
      });
      
      setStep('confirmation');
    } catch (error) {
      console.error('Booking error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof BookingFormData, value: string | boolean | number) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  if (step === 'confirmation') {
    return (
      <div className={`bg-white rounded-2xl shadow-xl p-8 text-center ${className}`}>
        <div className="bg-green-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="h-10 w-10 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Réservation confirmée !
        </h3>
        <p className="text-gray-600 mb-6">
          Votre demande de réservation pour <strong>{selectedSession?.formationName}</strong> 
          le <strong>{selectedSession && formatDate(selectedSession.date)}</strong> a été envoyée.
        </p>
        <div className="bg-blue-50 rounded-lg p-4 mb-6">
          <h4 className="font-semibold text-blue-900 mb-2">Prochaines étapes :</h4>
          <ul className="text-sm text-blue-800 space-y-1 text-left">
            <li>• Vous recevrez un email de confirmation sous 24h</li>
            <li>• Notre équipe vous contactera pour finaliser votre inscription</li>
            <li>• Vous recevrez votre convocation 1 semaine avant la formation</li>
          </ul>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => {
              setStep('sessions');
              setSelectedSession(null);
              setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phone: '',
                company: '',
                position: '',
                experience: '',
                motivation: '',
                financingMethod: 'cpf',
                specialRequests: '',
                gdprConsent: false,
                marketingConsent: false
              });
            }}
            className="bg-kassiopee-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors"
          >
            Nouvelle réservation
          </button>
          <a
            href="/formations"
            className="border-2 border-kassiopee-navy text-kassiopee-navy px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
          >
            Voir d'autres formations
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-2xl shadow-xl overflow-hidden ${className}`}>
      {/* Header avec étapes */}
      <div className="bg-kassiopee-navy text-white p-6">
        <h3 className="text-2xl font-bold mb-4">Réserver votre formation</h3>
        <div className="flex items-center space-x-4">
          <div className={`flex items-center ${step === 'sessions' ? 'text-kassiopee-gold' : 'text-white'}`}>
            <div className={`rounded-full w-8 h-8 flex items-center justify-center mr-2 ${
              step === 'sessions' ? 'bg-kassiopee-gold text-kassiopee-navy' : 'bg-white/20'
            }`}>
              1
            </div>
            <span className="font-medium">Sessions</span>
          </div>
          <ArrowRight className="h-4 w-4 text-white/60" />
          <div className={`flex items-center ${step === 'form' ? 'text-kassiopee-gold' : 'text-white/60'}`}>
            <div className={`rounded-full w-8 h-8 flex items-center justify-center mr-2 ${
              step === 'form' ? 'bg-kassiopee-gold text-kassiopee-navy' : 'bg-white/20'
            }`}>
              2
            </div>
            <span className="font-medium">Informations</span>
          </div>
          <ArrowRight className="h-4 w-4 text-white/60" />
          <div className="flex items-center text-white/60">
            <div className="bg-white/20 rounded-full w-8 h-8 flex items-center justify-center mr-2">
              3
            </div>
            <span className="font-medium">Confirmation</span>
          </div>
        </div>
      </div>

      <div className="p-6">
        {step === 'sessions' && (
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Choisissez votre session
            </h4>
            
            {availableSessions.length === 0 ? (
              <div className="text-center py-8">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">Aucune session disponible pour cette formation.</p>
                <p className="text-sm text-gray-500 mt-2">
                  Contactez-nous pour être informé des prochaines dates.
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                {availableSessions.map((session) => {
                  const availability = getAvailabilityStatus(session);
                  const isDisabled = availability.status === 'full';
                  
                  return (
                    <div
                      key={session.id}
                      className={`border rounded-xl p-6 cursor-pointer transition-all ${
                        selectedSession?.id === session.id
                          ? 'border-kassiopee-navy bg-kassiopee-navy/5'
                          : isDisabled
                          ? 'border-gray-200 bg-gray-50 cursor-not-allowed'
                          : 'border-gray-200 hover:border-kassiopee-lightblue hover:shadow-md'
                      }`}
                      onClick={() => !isDisabled && setSelectedSession(session)}
                    >
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <div className="flex items-center mb-2">
                            <h5 className="text-lg font-bold text-gray-900 mr-3">
                              {session.formationName}
                            </h5>
                            {session.isRNCP && (
                              <span className="bg-kassiopee-gold text-kassiopee-navy px-2 py-1 rounded-full text-xs font-bold">
                                RNCP
                              </span>
                            )}
                          </div>
                          
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 mr-2" />
                              {formatDate(session.date)}
                            </div>
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 mr-2" />
                              {session.startTime} - {session.endTime}
                            </div>
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 mr-2" />
                              {session.location}
                            </div>
                          </div>
                          
                          <div className="flex items-center justify-between mt-4">
                            <div className="flex items-center space-x-4">
                              <div className="flex items-center">
                                <Users className="h-4 w-4 mr-1 text-gray-500" />
                                <span className="text-sm text-gray-600">
                                  Formateur: {session.instructor}
                                </span>
                              </div>
                              <div className={`text-sm font-medium ${availability.color}`}>
                                {availability.text}
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-2xl font-bold text-kassiopee-navy">
                                {session.price}€
                              </div>
                              {session.cpfEligible && (
                                <div className="text-xs text-green-600 font-medium">
                                  ✓ Éligible CPF
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}
            
            {selectedSession && (
              <div className="mt-6 text-center">
                <button
                  onClick={() => setStep('form')}
                  className="bg-kassiopee-navy text-white px-8 py-3 rounded-lg font-bold hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center"
                >
                  Continuer l'inscription
                  <ArrowRight className="h-5 w-5 ml-2" />
                </button>
              </div>
            )}
          </div>
        )}

        {step === 'form' && selectedSession && (
          <div>
            <h4 className="text-xl font-bold text-gray-900 mb-6">
              Vos informations
            </h4>
            
            <div className="space-y-6">
              {/* Informations personnelles */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Informations personnelles</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Prénom *
                    </label>
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent ${
                        errors.firstName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre prénom"
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nom *
                    </label>
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent ${
                        errors.lastName ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="Votre nom"
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange('email', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent ${
                        errors.email ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="votre.email@exemple.com"
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Téléphone *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => handleInputChange('phone', e.target.value)}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent ${
                        errors.phone ? 'border-red-500' : 'border-gray-300'
                      }`}
                      placeholder="01 23 45 67 89"
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                </div>
              </div>

              {/* Informations professionnelles */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Informations professionnelles</h5>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Entreprise
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => handleInputChange('company', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
                      placeholder="Nom de votre entreprise"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Poste actuel
                    </label>
                    <input
                      type="text"
                      value={formData.position}
                      onChange={(e) => handleInputChange('position', e.target.value)}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
                      placeholder="Votre poste"
                    />
                  </div>
                </div>
                
                <div className="mt-4">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Expérience dans le domaine *
                  </label>
                  <select
                    value={formData.experience}
                    onChange={(e) => handleInputChange('experience', e.target.value)}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent ${
                      errors.experience ? 'border-red-500' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Sélectionnez votre niveau</option>
                    <option value="debutant">Débutant (moins de 1 an)</option>
                    <option value="intermediaire">Intermédiaire (1-3 ans)</option>
                    <option value="confirme">Confirmé (3-5 ans)</option>
                    <option value="expert">Expert (plus de 5 ans)</option>
                  </select>
                  {errors.experience && <p className="text-red-500 text-sm mt-1">{errors.experience}</p>}
                </div>
              </div>

              {/* Financement */}
              <div>
                <h5 className="text-lg font-semibold text-gray-900 mb-4">Mode de financement</h5>
                <div className="space-y-3">
                  {[
                    { value: 'cpf', label: 'CPF (Compte Personnel de Formation)', recommended: true },
                    { value: 'company', label: 'Financement employeur' },
                    { value: 'pole_emploi', label: 'Pôle Emploi (AIF)' },
                    { value: 'personal', label: 'Financement personnel' },
                    { value: 'other', label: 'Autre (préciser)' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-center">
                      <input
                        type="radio"
                        name="financingMethod"
                        value={option.value}
                        checked={formData.financingMethod === option.value}
                        onChange={(e) => handleInputChange('financingMethod', e.target.value)}
                        className="mr-3 text-kassiopee-navy focus:ring-kassiopee-lightblue"
                      />
                      <span className="flex-1">
                        {option.label}
                        {option.recommended && (
                          <span className="ml-2 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium">
                            Recommandé
                          </span>
                        )}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Motivation */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Motivation pour cette formation *
                </label>
                <textarea
                  value={formData.motivation}
                  onChange={(e) => handleInputChange('motivation', e.target.value)}
                  rows={4}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent ${
                    errors.motivation ? 'border-red-500' : 'border-gray-300'
                  }`}
                  placeholder="Expliquez vos objectifs et ce que vous attendez de cette formation..."
                />
                {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
              </div>

              {/* Demandes spéciales */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Demandes spéciales ou besoins d'accessibilité
                </label>
                <textarea
                  value={formData.specialRequests}
                  onChange={(e) => handleInputChange('specialRequests', e.target.value)}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
                  placeholder="Régime alimentaire, accessibilité, autres besoins..."
                />
              </div>

              {/* Consentements */}
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.gdprConsent}
                    onChange={(e) => handleInputChange('gdprConsent', e.target.checked)}
                    className={`mt-1 mr-3 text-kassiopee-navy focus:ring-kassiopee-lightblue ${
                      errors.gdprConsent ? 'border-red-500' : ''
                    }`}
                  />
                  <span className="text-sm text-gray-700">
                    J'accepte que mes données personnelles soient traitées par Kassiopée Formation 
                    dans le cadre de ma demande d'inscription. *
                  </span>
                </label>
                {errors.gdprConsent && <p className="text-red-500 text-sm">{errors.gdprConsent}</p>}
                
                <label className="flex items-start">
                  <input
                    type="checkbox"
                    checked={formData.marketingConsent}
                    onChange={(e) => handleInputChange('marketingConsent', e.target.checked)}
                    className="mt-1 mr-3 text-kassiopee-navy focus:ring-kassiopee-lightblue"
                  />
                  <span className="text-sm text-gray-700">
                    J'accepte de recevoir des informations sur les formations et actualités 
                    de Kassiopée Formation.
                  </span>
                </label>
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button
                onClick={() => setStep('sessions')}
                className="flex-1 border-2 border-kassiopee-navy text-kassiopee-navy px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
              >
                Retour
              </button>
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="flex-1 bg-kassiopee-navy text-white px-6 py-3 rounded-lg font-bold hover:bg-kassiopee-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent mr-2" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Confirmer la réservation
                    <CheckCircle className="h-5 w-5 ml-2" />
                  </>
                )}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

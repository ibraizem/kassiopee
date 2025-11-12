'use client';

import React, { useState, useEffect } from 'react';
import { Calculator, CheckCircle, AlertCircle, Info, TrendingUp, Award, ExternalLink } from 'lucide-react';

interface CalculatorResult {
  estimatedRights: number;
  canFinanceFormations: string[];
  needsAdditionalFunding: string[];
  recommendations: string[];
}

interface FormationOption {
  id: string;
  name: string;
  price: number;
  duration: string;
  type: 'rncp' | 'professional';
}

const formations: FormationOption[] = [
  { id: 'ntc', name: 'RNCP Négociateur Technico-Commercial', price: 2500, duration: '5 jours', type: 'rncp' },
  { id: 'arh', name: 'RNCP Assistant Ressources Humaines', price: 2300, duration: '5 jours', type: 'rncp' },
  { id: 'cv', name: 'Booster sa Candidature (CV)', price: 450, duration: '1 jour', type: 'professional' },
  { id: 'anglais', name: 'Anglais Professionnel', price: 800, duration: '2 jours', type: 'professional' },
  { id: 'marketing', name: 'Marketing Digital', price: 1200, duration: '3 jours', type: 'professional' }
];

export default function CPFCalculator() {
  const [formData, setFormData] = useState({
    employmentStatus: '',
    yearsWorked: '',
    hasHighSchoolDiploma: '',
    currentRights: '',
    knowsRights: false
  });

  const [result, setResult] = useState<CalculatorResult | null>(null);
  const [showResult, setShowResult] = useState(false);

  const calculateRights = () => {
    const yearsWorked = parseInt(formData.yearsWorked) || 0;
    const hasHighSchoolDiploma = formData.hasHighSchoolDiploma === 'yes';
    const knowsRights = formData.knowsRights;
    const currentRights = knowsRights ? parseInt(formData.currentRights) || 0 : 0;

    let estimatedRights = 0;

    if (knowsRights) {
      estimatedRights = currentRights;
    } else {
      // Calcul estimatif basé sur les années travaillées
      const annualRights = hasHighSchoolDiploma ? 500 : 800;
      const maxRights = hasHighSchoolDiploma ? 5000 : 8000;
      estimatedRights = Math.min(yearsWorked * annualRights, maxRights);
    }

    const canFinanceFormations: string[] = [];
    const needsAdditionalFunding: string[] = [];

    formations.forEach(formation => {
      if (estimatedRights >= formation.price) {
        canFinanceFormations.push(formation.name);
      } else {
        needsAdditionalFunding.push(`${formation.name} (manque ${formation.price - estimatedRights}€)`);
      }
    });

    const recommendations: string[] = [];
    
    if (estimatedRights >= 2500) {
      recommendations.push('Vous pouvez financer nos formations RNCP les plus complètes !');
    } else if (estimatedRights >= 1200) {
      recommendations.push('Parfait pour nos formations professionnelles courtes.');
    } else if (estimatedRights >= 450) {
      recommendations.push('Idéal pour commencer par notre formation CV.');
    } else {
      recommendations.push('Contactez-nous pour étudier les solutions de financement complémentaire.');
    }

    if (needsAdditionalFunding.length > 0) {
      recommendations.push('Pour les formations nécessitant un complément, nous vous aidons à trouver des financements (employeur, Pôle Emploi, OPCO).');
    }

    if (!knowsRights) {
      recommendations.push('Ces montants sont estimatifs. Vérifiez vos droits exacts sur moncompteformation.gouv.fr');
    }

    setResult({
      estimatedRights,
      canFinanceFormations,
      needsAdditionalFunding,
      recommendations
    });

    setShowResult(true);
  };

  const resetCalculator = () => {
    setFormData({
      employmentStatus: '',
      yearsWorked: '',
      hasHighSchoolDiploma: '',
      currentRights: '',
      knowsRights: false
    });
    setResult(null);
    setShowResult(false);
  };

  const isFormValid = () => {
    if (formData.knowsRights) {
      return formData.currentRights !== '';
    }
    return formData.employmentStatus !== '' && 
           formData.yearsWorked !== '' && 
           formData.hasHighSchoolDiploma !== '';
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-6 lg:p-8 border border-gray-100">
      <div className="flex items-center mb-6">
        <div className="bg-kassiopee-navy text-kassiopee-gold p-3 rounded-xl mr-4">
          <Calculator className="h-6 w-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-gray-900">Calculateur d'éligibilité CPF</h3>
          <p className="text-gray-600">Estimez vos droits et découvrez quelles formations vous pouvez financer</p>
        </div>
      </div>

      {!showResult ? (
        <div className="space-y-6">
          {/* Connaissance des droits */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-3">
              Connaissez-vous le montant exact de vos droits CPF ?
            </label>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="knowsRights"
                  checked={formData.knowsRights === true}
                  onChange={() => setFormData(prev => ({ ...prev, knowsRights: true, employmentStatus: '', yearsWorked: '', hasHighSchoolDiploma: '' }))}
                  className="mr-3 text-kassiopee-navy focus:ring-kassiopee-lightblue"
                />
                <span>Oui, je connais mes droits exacts</span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="knowsRights"
                  checked={formData.knowsRights === false}
                  onChange={() => setFormData(prev => ({ ...prev, knowsRights: false, currentRights: '' }))}
                  className="mr-3 text-kassiopee-navy focus:ring-kassiopee-lightblue"
                />
                <span>Non, j'aimerais une estimation</span>
              </label>
            </div>
          </div>

          {formData.knowsRights === true && (
            <div>
              <label htmlFor="currentRights" className="block text-sm font-medium text-gray-700 mb-2">
                Montant de vos droits CPF (en euros)
              </label>
              <input
                type="number"
                id="currentRights"
                value={formData.currentRights}
                onChange={(e) => setFormData(prev => ({ ...prev, currentRights: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
                placeholder="Ex: 2500"
                min="0"
                max="8000"
              />
              <p className="text-xs text-gray-500 mt-1">
                Vous pouvez vérifier ce montant sur moncompteformation.gouv.fr
              </p>
            </div>
          )}

          {formData.knowsRights === false && (
            <>
              <div>
                <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700 mb-2">
                  Votre statut professionnel
                </label>
                <select
                  id="employmentStatus"
                  value={formData.employmentStatus}
                  onChange={(e) => setFormData(prev => ({ ...prev, employmentStatus: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
                >
                  <option value="">Sélectionnez votre statut</option>
                  <option value="employee">Salarié(e)</option>
                  <option value="unemployed">Demandeur d'emploi</option>
                  <option value="freelance">Indépendant/Freelance</option>
                  <option value="student">Étudiant(e)</option>
                </select>
              </div>

              <div>
                <label htmlFor="yearsWorked" className="block text-sm font-medium text-gray-700 mb-2">
                  Nombre d'années travaillées (approximatif)
                </label>
                <input
                  type="number"
                  id="yearsWorked"
                  value={formData.yearsWorked}
                  onChange={(e) => setFormData(prev => ({ ...prev, yearsWorked: e.target.value }))}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
                  placeholder="Ex: 8"
                  min="0"
                  max="50"
                />
                <p className="text-xs text-gray-500 mt-1">
                  Incluez toutes vos années d'activité salariée
                </p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Avez-vous un diplôme de niveau Bac ou supérieur ?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasHighSchoolDiploma"
                      value="yes"
                      checked={formData.hasHighSchoolDiploma === 'yes'}
                      onChange={(e) => setFormData(prev => ({ ...prev, hasHighSchoolDiploma: e.target.value }))}
                      className="mr-3 text-kassiopee-navy focus:ring-kassiopee-lightblue"
                    />
                    <span>Oui (Bac, BTS, Licence, Master...)</span>
                  </label>
                  <label className="flex items-center">
                    <input
                      type="radio"
                      name="hasHighSchoolDiploma"
                      value="no"
                      checked={formData.hasHighSchoolDiploma === 'no'}
                      onChange={(e) => setFormData(prev => ({ ...prev, hasHighSchoolDiploma: e.target.value }))}
                      className="mr-3 text-kassiopee-navy focus:ring-kassiopee-lightblue"
                    />
                    <span>Non (CAP, BEP ou sans diplôme)</span>
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="bg-blue-50 rounded-lg p-4">
            <div className="flex items-start">
              <Info className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
              <div className="text-sm text-blue-800">
                <p className="font-medium mb-1">Information importante</p>
                <p>Ce calculateur fournit une estimation basée sur les règles générales du CPF. Pour connaître vos droits exacts, consultez moncompteformation.gouv.fr</p>
              </div>
            </div>
          </div>

          <button
            onClick={calculateRights}
            disabled={!isFormValid()}
            className="w-full bg-kassiopee-navy text-white px-6 py-4 rounded-lg font-bold text-lg hover:bg-kassiopee-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
          >
            <Calculator className="h-5 w-5 mr-2" />
            Calculer mes droits CPF
          </button>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Résultat principal */}
          <div className="text-center">
            <div className="bg-kassiopee-gold/10 rounded-2xl p-6 mb-6">
              <TrendingUp className="h-12 w-12 text-kassiopee-navy mx-auto mb-4" />
              <h4 className="text-2xl font-bold text-kassiopee-navy mb-2">
                Vos droits CPF estimés
              </h4>
              <div className="text-4xl font-bold text-kassiopee-navy">
                {result?.estimatedRights}€
              </div>
              {!formData.knowsRights && (
                <p className="text-sm text-gray-600 mt-2">
                  *Estimation basée sur vos informations
                </p>
              )}
            </div>
          </div>

          {/* Formations finançables */}
          {result && result.canFinanceFormations.length > 0 && (
            <div className="bg-green-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
                <h4 className="text-lg font-bold text-green-800">
                  Formations entièrement finançables
                </h4>
              </div>
              <ul className="space-y-2">
                {result.canFinanceFormations.map((formation, index) => (
                  <li key={index} className="flex items-center text-green-700">
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {formation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Formations nécessitant un complément */}
          {result && result.needsAdditionalFunding.length > 0 && (
            <div className="bg-orange-50 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <AlertCircle className="h-6 w-6 text-orange-600 mr-3" />
                <h4 className="text-lg font-bold text-orange-800">
                  Formations nécessitant un financement complémentaire
                </h4>
              </div>
              <ul className="space-y-2">
                {result.needsAdditionalFunding.map((formation, index) => (
                  <li key={index} className="flex items-center text-orange-700">
                    <AlertCircle className="h-4 w-4 mr-2" />
                    {formation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Recommandations */}
          {result && result.recommendations.length > 0 && (
            <div className="bg-kassiopee-lightblue/10 rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Award className="h-6 w-6 text-kassiopee-navy mr-3" />
                <h4 className="text-lg font-bold text-kassiopee-navy">
                  Nos recommandations
                </h4>
              </div>
              <ul className="space-y-3">
                {result.recommendations.map((recommendation, index) => (
                  <li key={index} className="flex items-start text-gray-700">
                    <div className="bg-kassiopee-navy rounded-full w-2 h-2 mt-2 mr-3 flex-shrink-0"></div>
                    {recommendation}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Actions */}
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a
                href="https://www.moncompteformation.gouv.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-kassiopee-navy text-white px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors flex items-center justify-center"
              >
                <ExternalLink className="h-4 w-4 mr-2" />
                Vérifier sur Mon Compte Formation
              </a>
              <a
                href="/formations"
                className="border-2 border-kassiopee-navy text-kassiopee-navy px-6 py-3 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors text-center"
              >
                Voir nos formations
              </a>
            </div>
            
            <button
              onClick={resetCalculator}
              className="w-full bg-gray-100 text-gray-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-200 transition-colors"
            >
              Faire un nouveau calcul
            </button>
          </div>

          {/* Contact CTA */}
          <div className="bg-kassiopee-gold/10 rounded-xl p-6 text-center">
            <h4 className="text-lg font-bold text-kassiopee-navy mb-2">
              Besoin d'aide pour votre financement ?
            </h4>
            <p className="text-gray-700 mb-4">
              Nos conseillers vous accompagnent gratuitement dans vos démarches
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href="/contact"
                className="bg-kassiopee-navy text-white px-6 py-2 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors"
              >
                Être accompagné(e)
              </a>
              <a
                href="tel:0743678768"
                className="border-2 border-kassiopee-navy text-kassiopee-navy px-6 py-2 rounded-lg font-semibold hover:bg-kassiopee-navy hover:text-white transition-colors"
              >
                07 43 67 87 68
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

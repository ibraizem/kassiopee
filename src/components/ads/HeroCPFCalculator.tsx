'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Calculator, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const HeroCPFCalculator = () => {
  const router = useRouter();
  const [showCalculator, setShowCalculator] = useState(false);
  const [knowsRights, setKnowsRights] = useState<boolean | null>(null);
  const [rights, setRights] = useState('');
  const [result, setResult] = useState<number | null>(null);
  
  const scrollToFormations = (e: React.MouseEvent) => {
    e.preventDefault();
    const formationsElement = document.getElementById('formations');
    if (formationsElement) {
      formationsElement.scrollIntoView({ behavior: 'smooth' });
    } else {
      router.push('/#formations');
    }
  };

  const calculateRights = () => {
    if (knowsRights === null || (knowsRights && !rights)) return;
    
    const estimatedRights = knowsRights 
      ? parseInt(rights) || 0 
      : Math.floor(Math.random() * 5000) + 1000; // Estimation aléatoire pour l'exemple
    
    setResult(estimatedRights);
  };

  const resetCalculator = () => {
    setKnowsRights(null);
    setRights('');
    setResult(null);
  };

  return (
    <div className="mt-8 max-w-2xl mx-auto bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 shadow-xl">
      {!showCalculator ? (
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-3 flex items-center justify-center">
            <Calculator className="mr-2 text-kassiopee-gold w-6 h-6" />
            Découvrez vos droits CPF en 30 secondes
          </h3>
          <p className="text-white/90 mb-6 text-lg">
            Estimez le montant disponible pour financer votre formation
          </p>
          <Button 
            onClick={() => setShowCalculator(true)}
            className="bg-kassiopee-gold hover:bg-kassiopee-gold/90 text-kassiopee-navy font-bold text-lg px-6 py-6 rounded-xl"
            size="lg"
          >
            Calculer mes droits <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      ) : (
        <div className="space-y-6">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center">
              <Calculator className="mr-2 text-kassiopee-gold w-6 h-6" />
              {result ? 'Vos droits CPF estimés' : 'Estimation de vos droits CPF'}
            </h3>
            <button 
              onClick={resetCalculator}
              className="text-white/70 hover:text-white text-sm flex items-center"
              aria-label="Fermer le calculateur"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
          
          {result === null ? (
            <div className="space-y-6">
              <div className="space-y-4 bg-white/5 p-4 rounded-lg border border-white/10">
                <p className="text-white/90 font-medium">Connaissez-vous le montant exact de vos droits CPF ?</p>
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant={knowsRights === true ? 'default' : 'outline'}
                    onClick={() => setKnowsRights(true)}
                    className={`py-6 ${knowsRights === true ? 'bg-kassiopee-gold text-kassiopee-navy hover:bg-kassiopee-gold/90' : 'bg-white/5 hover:bg-white/10'}`}
                  >
                    Oui
                  </Button>
                  <Button 
                    variant={knowsRights === false ? 'default' : 'outline'}
                    onClick={() => setKnowsRights(false)}
                    className={`py-6 ${knowsRights === false ? 'bg-kassiopee-gold text-kassiopee-navy hover:bg-kassiopee-gold/90' : 'bg-white/5 hover:bg-white/10'}`}
                  >
                    Non, faire une estimation
                  </Button>
                </div>
              </div>

                {knowsRights !== null && (
                  <div className="space-y-2 bg-white/5 p-4 rounded-lg border border-white/10">
                    <label htmlFor="cpfRights" className="block text-sm font-medium text-white/90 mb-2">
                      {knowsRights 
                        ? 'Montant de vos droits CPF (€)'
                        : 'Combien d\'années avez-vous travaillé ?'}
                    </label>
                    <input
                      type="number"
                      id="cpfRights"
                      value={rights}
                      onChange={(e) => setRights(e.target.value)}
                      placeholder={knowsRights ? 'Ex: 2500' : 'Ex: 5'}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:ring-2 focus:ring-kassiopee-gold focus:border-transparent text-lg"
                    />
                    {!knowsRights && (
                      <p className="text-sm text-white/70 mt-2">
                        Nous estimerons vos droits en fonction de votre expérience
                      </p>
                    )}
                  </div>
                )}

                <div className="grid grid-cols-2 gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    onClick={() => setShowCalculator(false)}
                    className="py-6 text-white border-white/30 hover:bg-white/10"
                  >
                    Annuler
                  </Button>
                  <Button 
                    onClick={calculateRights}
                    disabled={knowsRights === null || (knowsRights && !rights)}
                    className="py-6 bg-kassiopee-gold hover:bg-kassiopee-gold/90 text-kassiopee-navy font-bold"
                  >
                    Calculer mes droits
                  </Button>
                </div>
              </div>
          ) : (
            <div className="text-center space-y-4">
              <div className="bg-white/5 p-6 rounded-xl border border-white/10 text-center">
                <p className="text-white/80 mb-2">Vos droits CPF estimés sont de</p>
                <div className="text-4xl font-bold text-kassiopee-gold mb-4">
                  {result.toLocaleString()} €
                </div>
                <div className="flex items-center justify-center gap-2 text-sm bg-kassiopee-gold/10 text-kassiopee-gold py-2 px-3 rounded-full w-max mx-auto">
                  <CheckCircle className="w-4 h-4" />
                  <span>Éligible au financement de nos formations</span>
                </div>
              </div>
              <div className="pt-4 space-y-3">
                <Button 
                  onClick={scrollToFormations}
                  className="bg-kassiopee-gold hover:bg-kassiopee-gold/90 text-kassiopee-navy font-bold w-full py-6 text-lg"
                >
                  Découvrir les formations éligibles
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button 
                  variant="outline" 
                  onClick={resetCalculator}
                  className="text-white border-white/30 hover:bg-white/10 w-full py-6 text-lg"
                >
                  Faire une nouvelle simulation
                </Button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default HeroCPFCalculator;

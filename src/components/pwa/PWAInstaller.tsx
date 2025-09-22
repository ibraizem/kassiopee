'use client';

import React, { useState, useEffect } from 'react';
import { Download, X, Smartphone, Monitor } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

declare global {
  interface WindowEventMap {
    beforeinstallprompt: BeforeInstallPromptEvent;
  }
}

export default function PWAInstaller() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallBanner, setShowInstallBanner] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [showIOSInstructions, setShowIOSInstructions] = useState(false);

  useEffect(() => {
    // Détecter si l'app est déjà installée
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    const isInWebAppiOS = (window.navigator as any).standalone === true;
    setIsInstalled(isStandalone || isInWebAppiOS);

    // Détecter iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    setIsIOS(iOS);

    // Écouter l'événement beforeinstallprompt
    const handleBeforeInstallPrompt = (e: BeforeInstallPromptEvent) => {
      e.preventDefault();
      setDeferredPrompt(e);
      
      // Afficher la bannière après un délai
      setTimeout(() => {
        setShowInstallBanner(true);
      }, 3000);
    };

    // Écouter l'événement appinstalled
    const handleAppInstalled = () => {
      setIsInstalled(true);
      setShowInstallBanner(false);
      setDeferredPrompt(null);
      
      // Analytics
      if (typeof window !== 'undefined' && window.gtag) {
        window.gtag('event', 'pwa_installed', {
          event_category: 'PWA',
          event_label: 'App Installed'
        });
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      if (isIOS) {
        setShowIOSInstructions(true);
      }
      return;
    }

    try {
      await deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        setShowInstallBanner(false);
        
        // Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'pwa_install_accepted', {
            event_category: 'PWA',
            event_label: 'Install Accepted'
          });
        }
      } else {
        // Analytics
        if (typeof window !== 'undefined' && window.gtag) {
          window.gtag('event', 'pwa_install_dismissed', {
            event_category: 'PWA',
            event_label: 'Install Dismissed'
          });
        }
      }
      
      setDeferredPrompt(null);
    } catch (error) {
      console.error('Error during PWA installation:', error);
    }
  };

  const handleDismiss = () => {
    setShowInstallBanner(false);
    
    // Ne plus afficher pendant cette session
    sessionStorage.setItem('pwa-banner-dismissed', 'true');
    
    // Analytics
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'pwa_banner_dismissed', {
        event_category: 'PWA',
        event_label: 'Banner Dismissed'
      });
    }
  };

  // Ne pas afficher si déjà installé ou si déjà refusé dans cette session
  if (isInstalled || sessionStorage.getItem('pwa-banner-dismissed')) {
    return null;
  }

  return (
    <>
      {/* Bannière d'installation */}
      {showInstallBanner && (
        <div className="fixed bottom-0 left-0 right-0 bg-kassiopee-navy text-white p-4 shadow-lg z-50 transform transition-transform duration-300">
          <div className="max-w-4xl mx-auto flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-2 rounded-lg mr-4">
                <Smartphone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-bold text-lg">Installer l'app Kassiopée Formation</h3>
                <p className="text-gray-200 text-sm">
                  Accédez rapidement à vos formations, même hors ligne !
                </p>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <button
                onClick={handleInstallClick}
                className="bg-kassiopee-gold text-kassiopee-navy px-6 py-2 rounded-lg font-bold hover:bg-yellow-400 transition-colors flex items-center"
              >
                <Download className="h-4 w-4 mr-2" />
                Installer
              </button>
              <button
                onClick={handleDismiss}
                className="text-gray-300 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Instructions iOS */}
      {showIOSInstructions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 max-w-md w-full">
            <div className="text-center mb-6">
              <div className="bg-kassiopee-navy text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                <Smartphone className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Installer sur iOS
              </h3>
              <p className="text-gray-600">
                Suivez ces étapes pour installer l'app sur votre iPhone/iPad
              </p>
            </div>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <div className="bg-kassiopee-navy text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                  1
                </div>
                <div>
                  <p className="font-medium">Appuyez sur le bouton de partage</p>
                  <p className="text-sm text-gray-600">En bas de votre navigateur Safari</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-kassiopee-navy text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                  2
                </div>
                <div>
                  <p className="font-medium">Sélectionnez "Sur l'écran d'accueil"</p>
                  <p className="text-sm text-gray-600">Dans la liste des options</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-kassiopee-navy text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold mr-3 mt-1">
                  3
                </div>
                <div>
                  <p className="font-medium">Appuyez sur "Ajouter"</p>
                  <p className="text-sm text-gray-600">L'app apparaîtra sur votre écran d'accueil</p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowIOSInstructions(false)}
              className="w-full bg-kassiopee-navy text-white py-3 rounded-lg font-bold hover:bg-kassiopee-navy/90 transition-colors"
            >
              Compris !
            </button>
          </div>
        </div>
      )}

      {/* Bouton d'installation flottant (pour desktop) */}
      {deferredPrompt && !showInstallBanner && (
        <button
          onClick={handleInstallClick}
          className="fixed bottom-6 left-6 bg-kassiopee-navy text-white p-4 rounded-full shadow-lg hover:bg-kassiopee-navy/90 transition-all duration-300 hover:scale-110 z-40"
          title="Installer l'application"
        >
          <Monitor className="h-6 w-6" />
        </button>
      )}
    </>
  );
}

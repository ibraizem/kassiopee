'use client';

import { useEffect } from 'react';
import { usePathname, useSearchParams } from 'next/navigation';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: {
      (...args: any[]): void;
      q?: any[];
    };
    dataLayer: any[];
    hj?: {
      (...args: any[]): void;
      q?: any[];
    };
  }
}

interface AnalyticsEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
  formation_id?: string;
  formation_name?: string;
  formation_price?: number;
  user_type?: string;
  cpf_eligible?: boolean;
}

class AdvancedAnalyticsManager {
  private static instance: AdvancedAnalyticsManager;
  private isInitialized = false;

  static getInstance(): AdvancedAnalyticsManager {
    if (!AdvancedAnalyticsManager.instance) {
      AdvancedAnalyticsManager.instance = new AdvancedAnalyticsManager();
    }
    return AdvancedAnalyticsManager.instance;
  }

  // Initialisation des scripts analytics
  init() {
    if (this.isInitialized || typeof window === 'undefined') return;

    // Google Analytics 4
    this.initGoogleAnalytics();
    
    // Facebook Pixel
    this.initFacebookPixel();
    
    // Hotjar
    this.initHotjar();
    
    this.isInitialized = true;
  }

  private initGoogleAnalytics() {
    const GA_MEASUREMENT_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
    if (!GA_MEASUREMENT_ID) return;

    // Charger le script GA4
    const script = document.createElement('script');
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    script.async = true;
    document.head.appendChild(script);

    // Initialiser gtag
    window.dataLayer = window.dataLayer || [];
    window.gtag = function() {
      window.dataLayer.push(arguments);
    };
    
    window.gtag('js', new Date());
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_title: document.title,
      page_location: window.location.href,
      custom_map: {
        'custom_parameter_1': 'formation_type',
        'custom_parameter_2': 'user_journey_stage'
      }
    });
  }

  private initFacebookPixel() {
    const FB_PIXEL_ID = process.env.NEXT_PUBLIC_FB_PIXEL_ID;
    if (!FB_PIXEL_ID) return;

    if (!window.fbq) {
      window.fbq = function() {
        (window.fbq.q = window.fbq.q || []).push(arguments);
      } as any;
      window.fbq.q = [];
    }
    
    const script = document.createElement('script');
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    script.async = true;
    document.head.appendChild(script);

    window.fbq('init', FB_PIXEL_ID);
    window.fbq('track', 'PageView');
  }

  private initHotjar() {
    const HOTJAR_ID = process.env.NEXT_PUBLIC_HOTJAR_ID;
    if (!HOTJAR_ID) return;

    const script = document.createElement('script');
    script.innerHTML = `
      (function(h,o,t,j,a,r){
        h.hj=h.hj||function(){(h.hj.q=h.hj.q||[]).push(arguments)};
        h._hjSettings={hjid:${HOTJAR_ID},hjsv:6};
        a=o.getElementsByTagName('head')[0];
        r=o.createElement('script');r.async=1;
        r.src=t+h._hjSettings.hjid+j+h._hjSettings.hjsv;
        a.appendChild(r);
      })(window,document,'https://static.hotjar.com/c/hotjar-','.js?sv=');
    `;
    document.head.appendChild(script);
  }

  // Tracking des événements personnalisés
  trackEvent(event: AnalyticsEvent) {
    if (typeof window === 'undefined') return;

    // Google Analytics 4
    if (window.gtag) {
      window.gtag('event', event.action, {
        event_category: event.category,
        event_label: event.label,
        value: event.value,
        custom_parameter_1: event.formation_id,
        custom_parameter_2: event.user_type,
        formation_name: event.formation_name,
        formation_price: event.formation_price,
        cpf_eligible: event.cpf_eligible
      });
    }

    // Facebook Pixel
    if (window.fbq) {
      const fbEventName = this.mapToFacebookEvent(event.action);
      if (fbEventName) {
        const fbParams: any = {
          content_name: event.formation_name,
          content_category: event.category,
          value: event.formation_price,
          currency: 'EUR'
        };
        
        window.fbq('track', fbEventName, fbParams);
      }
    }

    // Console log pour debug (uniquement en dev)
    if (process.env.NODE_ENV === 'development') {
      console.log('Analytics Event:', event);
    }
  }

  private mapToFacebookEvent(action: string): string | null {
    const mapping: Record<string, string> = {
      'view_formation': 'ViewContent',
      'start_cpf_calculator': 'InitiateCheckout',
      'complete_cpf_calculator': 'AddToCart',
      'click_cta_inscription': 'InitiateCheckout',
      'contact_form_submit': 'Lead',
      'phone_click': 'Contact',
      'download_program': 'Download'
    };
    
    return mapping[action] || null;
  }

  // Tracking spécifique aux formations
  trackFormationView(formationId: string, formationName: string, price: number, isRNCP: boolean) {
    this.trackEvent({
      action: 'view_formation',
      category: 'Formation',
      label: formationName,
      formation_id: formationId,
      formation_name: formationName,
      formation_price: price,
      cpf_eligible: true,
      user_type: isRNCP ? 'rncp_seeker' : 'skill_seeker'
    });
  }

  // Tracking du calculateur CPF
  trackCPFCalculatorStart() {
    this.trackEvent({
      action: 'start_cpf_calculator',
      category: 'CPF',
      label: 'Calculator Started'
    });
  }

  trackCPFCalculatorComplete(estimatedRights: number, eligibleFormations: number) {
    this.trackEvent({
      action: 'complete_cpf_calculator',
      category: 'CPF',
      label: 'Calculator Completed',
      value: estimatedRights,
      formation_id: `eligible_${eligibleFormations}`
    });
  }

  // Tracking des CTA
  trackCTAClick(ctaType: string, formationId?: string, location?: string) {
    this.trackEvent({
      action: 'click_cta_inscription',
      category: 'CTA',
      label: `${ctaType}_${location || 'unknown'}`,
      formation_id: formationId
    });
  }

  // Tracking du formulaire de contact
  trackContactFormSubmit(formationType: string, source: string) {
    this.trackEvent({
      action: 'contact_form_submit',
      category: 'Lead',
      label: formationType,
      user_type: source
    });
  }

  // Tracking des clics téléphone
  trackPhoneClick(source: string) {
    this.trackEvent({
      action: 'phone_click',
      category: 'Contact',
      label: source
    });
  }

  // Tracking du chatbot
  trackChatbotInteraction(action: string, topic: string) {
    this.trackEvent({
      action: `chatbot_${action}`,
      category: 'Chatbot',
      label: topic
    });
  }

  // Tracking de la navigation
  trackPageView(path: string, title: string) {
    if (typeof window === 'undefined') return;

    if (window.gtag) {
      window.gtag('config', process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID, {
        page_title: title,
        page_location: window.location.href,
        page_path: path
      });
    }

    if (window.fbq) {
      window.fbq('track', 'PageView');
    }
  }

  // Tracking des erreurs
  trackError(error: string, page: string) {
    this.trackEvent({
      action: 'error',
      category: 'Error',
      label: `${page}: ${error}`
    });
  }

  // Tracking des téléchargements
  trackDownload(fileName: string, formationId?: string) {
    this.trackEvent({
      action: 'download_program',
      category: 'Download',
      label: fileName,
      formation_id: formationId
    });
  }
}

// Hook React pour utiliser les analytics
export function useAdvancedAnalytics() {
  const pathname = usePathname();
  
  useEffect(() => {
    const analytics = AdvancedAnalyticsManager.getInstance();
    analytics.init();
  }, []);

  useEffect(() => {
    const analytics = AdvancedAnalyticsManager.getInstance();
    const title = document.title;
    analytics.trackPageView(pathname, title);
  }, [pathname]);

  return AdvancedAnalyticsManager.getInstance();
}

// Composant pour initialiser les analytics
export default function AdvancedAnalytics() {
  useAdvancedAnalytics();
  return null;
}

// Export des fonctions utilitaires
export const analytics = AdvancedAnalyticsManager.getInstance();

// Types pour TypeScript
export type { AnalyticsEvent };

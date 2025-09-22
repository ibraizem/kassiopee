'use client';

import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Bot, User, ExternalLink, Phone, Mail } from 'lucide-react';

interface Message {
  id: string;
  type: 'bot' | 'user';
  content: string;
  timestamp: Date;
  options?: ChatOption[];
  links?: ChatLink[];
}

interface ChatOption {
  id: string;
  text: string;
  action: string;
}

interface ChatLink {
  text: string;
  url: string;
  external?: boolean;
}

const initialMessage: Message = {
  id: '1',
  type: 'bot',
  content: 'Bonjour ! Je suis votre assistant virtuel pour toutes vos questions sur le CPF et nos formations RNCP. Comment puis-je vous aider ?',
  timestamp: new Date(),
  options: [
    { id: 'cpf-droits', text: 'Mes droits CPF', action: 'cpf-droits' },
    { id: 'formations', text: 'Formations éligibles', action: 'formations' },
    { id: 'inscription', text: 'Comment s\'inscrire', action: 'inscription' },
    { id: 'financement', text: 'Solutions de financement', action: 'financement' }
  ]
};

const chatResponses: Record<string, Message> = {
  'cpf-droits': {
    id: 'cpf-droits-response',
    type: 'bot',
    content: 'Pour connaître vos droits CPF, vous devez vous connecter sur moncompteformation.gouv.fr avec vos identifiants France Connect ou créer un compte. Vous y trouverez le montant exact de vos droits disponibles.',
    timestamp: new Date(),
    links: [
      { text: 'Accéder à Mon Compte Formation', url: 'https://www.moncompteformation.gouv.fr', external: true }
    ],
    options: [
      { id: 'cpf-calcul', text: 'Comment sont calculés mes droits ?', action: 'cpf-calcul' },
      { id: 'cpf-montant', text: 'Quel est le montant maximum ?', action: 'cpf-montant' },
      { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
    ]
  },
  'cpf-calcul': {
    id: 'cpf-calcul-response',
    type: 'bot',
    content: 'Vos droits CPF sont calculés ainsi :\n• 500€ par an pour tous les salariés\n• 800€ par an si vous n\'avez pas le bac\n• Plafond à 5000€ (8000€ sans le bac)\n• Les droits acquis avant 2019 en heures ont été convertis (1h = 15€)',
    timestamp: new Date(),
    options: [
      { id: 'cpf-droits', text: 'Vérifier mes droits', action: 'cpf-droits' },
      { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
    ]
  },
  'cpf-montant': {
    id: 'cpf-montant-response',
    type: 'bot',
    content: 'Le montant maximum de droits CPF est :\n• 5000€ pour les salariés qualifiés\n• 8000€ pour les salariés non qualifiés (sans diplôme de niveau 3)\n\nCes plafonds permettent de financer plusieurs formations au cours de votre carrière.',
    timestamp: new Date(),
    options: [
      { id: 'formations', text: 'Voir nos formations', action: 'formations' },
      { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
    ]
  },
  'formations': {
    id: 'formations-response',
    type: 'bot',
    content: 'Toutes nos formations sont éligibles au CPF ! Voici notre catalogue :\n\n🏆 RNCP Négociateur Technico-Commercial (2500€)\n🏆 RNCP Assistant Ressources Humaines (2300€)\n📝 Booster sa Candidature - CV (450€)\n🌍 Anglais Professionnel (800€)\n📱 Marketing Digital (1200€)',
    timestamp: new Date(),
    links: [
      { text: 'Voir toutes nos formations', url: '/formations' }
    ],
    options: [
      { id: 'formation-rncp', text: 'Formations RNCP', action: 'formation-rncp' },
      { id: 'formation-courte', text: 'Formations courtes', action: 'formation-courte' },
      { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
    ]
  },
  'formation-rncp': {
    id: 'formation-rncp-response',
    type: 'bot',
    content: 'Nos formations RNCP sont des certifications reconnues par l\'État :\n\n🏆 RNCP Négociateur Technico-Commercial (Code 39063)\n• 5 jours de formation\n• Certification niveau 5 (Bac+2)\n• Financement CPF : 2500€\n\n🏆 RNCP Assistant Ressources Humaines (Code 35030)\n• 5 jours de formation  \n• Certification niveau 5 (Bac+2)\n• Financement CPF : 2300€',
    timestamp: new Date(),
    links: [
      { text: 'RNCP Négociateur Commercial', url: '/formations/formation-ntc' },
      { text: 'RNCP Assistant RH', url: '/formations/formation-arh' }
    ],
    options: [
      { id: 'inscription', text: 'Comment s\'inscrire', action: 'inscription' },
      { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
    ]
  },
  'formation-courte': {
    id: 'formation-courte-response',
    type: 'bot',
    content: 'Nos formations courtes pour développer des compétences spécifiques :\n\n📝 Booster sa Candidature - CV (450€)\n• 1 jour de formation\n• Optimisation CV et candidature\n\n🌍 Anglais Professionnel (800€)\n• 2 jours de formation\n• Communication professionnelle\n\n📱 Marketing Digital (1200€)\n• 3 jours de formation\n• Réseaux sociaux et acquisition',
    timestamp: new Date(),
    links: [
      { text: 'Formation CV', url: '/formations/formation-cv' },
      { text: 'Anglais Professionnel', url: '/formations/formation-anglais' },
      { text: 'Marketing Digital', url: '/formations/formation-marketing' }
    ],
    options: [
      { id: 'inscription', text: 'Comment s\'inscrire', action: 'inscription' },
      { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
    ]
  },
  'inscription': {
    id: 'inscription-response',
    type: 'bot',
    content: 'Pour vous inscrire avec votre CPF, suivez ces étapes :\n\n1️⃣ Connectez-vous sur moncompteformation.gouv.fr\n2️⃣ Recherchez "Kassiopée Formation"\n3️⃣ Sélectionnez votre formation\n4️⃣ Utilisez vos droits CPF pour le financement\n5️⃣ Validez votre inscription\n\nVous recevrez ensuite votre convocation par email.',
    timestamp: new Date(),
    links: [
      { text: 'Mon Compte Formation', url: 'https://www.moncompteformation.gouv.fr', external: true },
      { text: 'Guide complet CPF', url: '/financement-cpf' }
    ],
    options: [
      { id: 'financement', text: 'Autres financements', action: 'financement' },
      { id: 'contact', text: 'Être accompagné(e)', action: 'contact' },
      { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
    ]
  },
  'financement': {
    id: 'financement-response',
    type: 'bot',
    content: 'Si vos droits CPF ne suffisent pas, plusieurs solutions existent :\n\n💼 Abondement employeur (60% des cas)\n🏢 Pôle Emploi - AIF (45% des cas)\n🏭 OPCO selon votre secteur (35% des cas)\n🏛️ Aides régionales/départementales (25% des cas)\n💰 Complément personnel\n\nNos conseillers vous aident à trouver la meilleure solution !',
    timestamp: new Date(),
    links: [
      { text: 'Guide financement complet', url: '/financement-cpf' }
    ],
    options: [
      { id: 'contact', text: 'Être accompagné(e)', action: 'contact' },
      { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
    ]
  },
  'contact': {
    id: 'contact-response',
    type: 'bot',
    content: 'Notre équipe est là pour vous accompagner gratuitement dans vos démarches !\n\n📞 Téléphone : 07 65 67 63 41\n📧 Email : direction@kassiopee-formation.com\n\nNous vous rappelons sous 24h pour étudier votre projet de formation et vous aider dans le financement.',
    timestamp: new Date(),
    links: [
      { text: 'Formulaire de contact', url: '/contact' }
    ],
    options: [
      { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
    ]
  },
  'menu': {
    id: 'menu-response',
    type: 'bot',
    content: 'Comment puis-je vous aider aujourd\'hui ?',
    timestamp: new Date(),
    options: [
      { id: 'cpf-droits', text: 'Mes droits CPF', action: 'cpf-droits' },
      { id: 'formations', text: 'Formations éligibles', action: 'formations' },
      { id: 'inscription', text: 'Comment s\'inscrire', action: 'inscription' },
      { id: 'financement', text: 'Solutions de financement', action: 'financement' }
    ]
  }
};

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([initialMessage]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleOptionClick = (action: string) => {
    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: chatResponses[action]?.options?.find(opt => opt.action === action)?.text || 'Option sélectionnée',
      timestamp: new Date()
    };

    // Add bot response
    const botResponse = chatResponses[action];
    
    if (botResponse) {
      setMessages(prev => [...prev, userMessage, { ...botResponse, id: `bot-${Date.now()}`, timestamp: new Date() }]);
    }
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: `user-${Date.now()}`,
      type: 'user',
      content: inputValue,
      timestamp: new Date()
    };

    const botResponse: Message = {
      id: `bot-${Date.now()}`,
      type: 'bot',
      content: 'Merci pour votre message ! Pour une réponse personnalisée, je vous invite à utiliser les options proposées ou à contacter directement notre équipe au 07 65 67 63 41.',
      timestamp: new Date(),
      options: [
        { id: 'contact', text: 'Contacter l\'équipe', action: 'contact' },
        { id: 'retour-menu', text: 'Retour au menu principal', action: 'menu' }
      ]
    };

    setMessages(prev => [...prev, userMessage, botResponse]);
    setInputValue('');
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`bg-kassiopee-navy text-white p-4 rounded-full shadow-lg hover:bg-kassiopee-navy/90 transition-all duration-300 ${
            isOpen ? 'scale-0' : 'scale-100'
          }`}
        >
          <MessageCircle className="h-6 w-6" />
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white rounded-2xl shadow-2xl z-50 flex flex-col border border-gray-200">
          {/* Header */}
          <div className="bg-kassiopee-navy text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center">
              <div className="bg-kassiopee-gold rounded-full p-2 mr-3">
                <Bot className="h-5 w-5 text-kassiopee-navy" />
              </div>
              <div>
                <h3 className="font-bold">Assistant CPF</h3>
                <p className="text-xs text-gray-200">En ligne</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div key={message.id} className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] ${message.type === 'user' ? 'order-2' : 'order-1'}`}>
                  <div className={`flex items-start space-x-2 ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center ${
                      message.type === 'user' 
                        ? 'bg-kassiopee-lightblue text-white' 
                        : 'bg-kassiopee-gold text-kassiopee-navy'
                    }`}>
                      {message.type === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`rounded-2xl px-4 py-2 ${
                      message.type === 'user'
                        ? 'bg-kassiopee-lightblue text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}>
                      <p className="text-sm whitespace-pre-line">{message.content}</p>
                      
                      {/* Links */}
                      {message.links && message.links.length > 0 && (
                        <div className="mt-3 space-y-1">
                          {message.links.map((link, index) => (
                            <a
                              key={index}
                              href={link.url}
                              target={link.external ? '_blank' : '_self'}
                              rel={link.external ? 'noopener noreferrer' : undefined}
                              className="flex items-center text-kassiopee-navy hover:text-kassiopee-lightblue text-sm font-medium"
                            >
                              {link.text}
                              {link.external && <ExternalLink className="h-3 w-3 ml-1" />}
                            </a>
                          ))}
                        </div>
                      )}
                      
                      {/* Options */}
                      {message.options && message.options.length > 0 && (
                        <div className="mt-3 space-y-2">
                          {message.options.map((option) => (
                            <button
                              key={option.id}
                              onClick={() => handleOptionClick(option.action)}
                              className="block w-full text-left bg-white border border-kassiopee-navy text-kassiopee-navy px-3 py-2 rounded-lg text-sm font-medium hover:bg-kassiopee-navy hover:text-white transition-colors"
                            >
                              {option.text}
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                  <div className={`text-xs text-gray-500 mt-1 ${message.type === 'user' ? 'text-right' : 'text-left'}`}>
                    {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex space-x-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Tapez votre message..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-kassiopee-lightblue focus:border-transparent"
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim()}
                className="bg-kassiopee-navy text-white p-2 rounded-lg hover:bg-kassiopee-navy/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2 text-center">
              Powered by Kassiopée Formation
            </p>
          </div>
        </div>
      )}
    </>
  );
}

'use client';

import { Button } from "@/components/ui/button";
import { Check, CheckCircle, Star, Calendar, MapPin, Tag, ArrowRight } from "lucide-react";
import { useForm, Controller, FieldValues, Control } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion } from 'framer-motion';

// Types pour le formulaire
type FormData = {
  firstName: string;
  email: string;
  phone: string;
};

// Composants UI personnalisés pour éviter les dépendances manquantes
const Form = {
  Root: ({ children, className = '', ...props }: { children: React.ReactNode } & React.FormHTMLAttributes<HTMLFormElement> & { className?: string }) => (
    <form className={className} {...props}>{children}</form>
  ),
  Control: ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <div className={`form-control ${className}`}>{children}</div>
  ),
  Item: ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <div className={`form-item ${className}`.trim()}>{children}</div>
  ),
  Message: ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
    <div className={`text-sm text-red-500 mt-1 ${className}`.trim()}>{children}</div>
  ),
};

const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement> & { className?: string }> = ({
  className = "",
  ...props
}) => (
  <input
    className={`w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${className}`}
    {...props}
  />
);

const formSchema = z.object({
  firstName: z.string().min(2, 'Le prénom est requis'),
  email: z.string().email('Email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
});

const HeroSection = () => {
  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: '',
      email: '',
      phone: '',
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          to: 'direction@kassiopee-formation.com',
          subject: 'Nouvelle demande de contact - Formation Marketing Digital',
          text: `Nouvelle demande d'information pour la formation Marketing Digital :
          
          Prénom: ${values.firstName}
          Email: ${values.email}
          Téléphone: ${values.phone}
          
          Date d'envoi: ${new Date().toLocaleString()}`,
        }),
      });

      if (response.ok) {
        alert('Votre demande a bien été envoyée ! Nous vous contacterons rapidement.');
      } else {
        throw new Error("Erreur lors de l'envoi du formulaire");
      }
    } catch (error) {
      console.error('Erreur:', error);
      alert("Une erreur s'est produite. Veuillez réessayer ou nous contacter directement à direction@kassiopee-formation.com");
    }
  };

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-blue-900 text-white pt-12 md:pt-20 pb-20 md:pb-32">
      {/* Arrière-plan animé */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ duration: 2 }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 via-purple-400/30 to-cyan-400/30" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-transparent from-0% to-gray-900/80 to-70%]" />
      </motion.div>

      <div className="container mx-auto px-4 relative">
        <div className="flex flex-col lg:flex-row items-center">
          <motion.div 
            className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-10"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="inline-flex items-center bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-sm font-semibold px-5 py-2.5 rounded-full mb-6 shadow-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <Star className="h-5 w-5 mr-2" />
              <span>Formation Marketing Digital • Éligible CPF</span>
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Devenez Expert en Stratégie Digitale et Réseaux Sociaux
            </motion.h1>
            <motion.p 
              className="text-xl text-blue-100 mb-8 max-w-2xl"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Formation intensive de 21h pour développer une stratégie social media performante, créer du contenu engageant et maîtriser la publicité en ligne.
            </motion.p>
            <motion.div 
              className="space-y-3 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Stratégie et positionnement sur les réseaux sociaux</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Création de contenu engageant et animation de communauté</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-300 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Publicité sur Facebook, Instagram et LinkedIn</span>
                </li>
              </ul>
            </motion.div>

            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span>Formation éligible au CPF et autres financements</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span>95% de réussite aux examens</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0 mt-1" />
                <span>Accompagnement personnalisé par des experts</span>
              </li>
            </ul>

            <div className="flex items-center gap-2 text-yellow-300">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-current" />
              ))}
              <span className="ml-2 text-white">4.9/5 sur 128 avis</span>
            </div>
          </motion.div>

          {/* Formulaire */}
          <motion.div 
            className="lg:w-1/2 bg-white rounded-xl p-8 shadow-2xl"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold mb-4">Formation Marketing Digital - 21h</h2>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
              <div className="flex items-start mb-3">
                <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Prochaine session</p>
                  <p className="text-gray-600">5 décembre 2025 - 9h à 17h</p>
                </div>
              </div>
              <div className="flex items-start mb-3">
                <MapPin className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Lieu de formation</p>
                  <p className="text-gray-600">Paris 17e - En présentiel ou à distance</p>
                </div>
              </div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-2">Réservez votre place</h3>
              <p className="text-gray-600 mb-6">
                Recevez le programme complet et les modalités d'inscription.
              </p>
              
              <Form.Root onSubmit={handleSubmit(onSubmit)} className="space-y-5 mt-6">
                <motion.div 
                  className="space-y-5"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                >
                  <div>
                    <div className="relative">
                      <Controller
                        name="firstName"
                        control={control as unknown as Control<FieldValues>}
                        render={({ field }) => (
                          <div className="relative">
                            <Input
                              {...field}
                              id="firstName"
                              className={`pl-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                                errors.firstName ? 'border-red-500' : ''
                              }`}
                              placeholder="Votre prénom"
                            />
                          </div>
                        )}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        </svg>
                      </div>
                    </div>
                    {errors.firstName && (
                      <Form.Message className="text-red-400 text-sm mt-1 flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.firstName.message as string}
                      </Form.Message>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Controller
                        name="email"
                        control={control as unknown as Control<FieldValues>}
                        render={({ field }) => (
                          <div className="relative">
                            <Input
                              {...field}
                              type="email"
                              id="email"
                              className={`pl-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                                errors.email ? 'border-red-500' : ''
                              }`}
                              placeholder="votre@email.com"
                            />
                          </div>
                        )}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                      </div>
                    </div>
                    {errors.email && (
                      <Form.Message className="text-red-400 text-sm mt-1 flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.email.message as string}
                      </Form.Message>
                    )}
                  </div>

                  <div>
                    <div className="relative">
                      <Controller
                        name="phone"
                        control={control as unknown as Control<FieldValues>}
                        render={({ field }) => (
                          <div className="relative">
                            <Input
                              {...field}
                              type="tel"
                              id="phone"
                              className={`pl-12 py-4 bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                                errors.phone ? 'border-red-500' : ''
                              }`}
                              placeholder="06 12 34 56 78"
                            />
                          </div>
                        )}
                      />
                      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <svg className="h-5 w-5 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                        </svg>
                      </div>
                    </div>
                    {errors.phone && (
                      <Form.Message className="text-red-400 text-sm mt-1 flex items-center">
                        <svg className="h-4 w-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                        </svg>
                        {errors.phone.message as string}
                      </Form.Message>
                    )}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.6 }}
                >
                  <Button
                    type="submit"
                    className="group w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white py-4 px-6 rounded-xl font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 flex items-center justify-center"
                  >
                    <span>Recevoir le programme complet</span>
                    <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                  </Button>

                  <p className="text-xs text-blue-100/70 text-center mt-4">
                    En soumettant ce formulaire, vous acceptez notre{' '}
                    <a href="/confidentialite" className="text-blue-300 hover:text-white underline transition-colors">
                      politique de confidentialité
                    </a>.
                  </p>
                </motion.div>
              </Form.Root>
            </motion.div>
          </motion.div>
        </div>

        {/* Badges de confiance */}
        <div className="container mx-auto px-4">
          <motion.div 
            className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-white">95%</div>
              <div className="text-blue-200">de réussite</div>
            </div>
            <div className="h-12 w-px bg-blue-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">10+</div>
              <div className="text-blue-200">années d'expérience</div>
            </div>
            <div className="h-12 w-px bg-blue-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">1000+</div>
              <div className="text-blue-200">apprenants formés</div>
            </div>
            <div className="h-12 w-px bg-blue-600"></div>
            <div className="text-center">
              <div className="text-3xl font-bold text-white">4.9/5</div>
              <div className="text-blue-200">satisfaction</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

'use client';

import { Button } from "@/components/ui/button";
import { Check, CheckCircle, Star, Calendar, MapPin, Tag } from "lucide-react";
import { useForm, Controller, FieldValues, Control } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';

// Types pour le formulaire
type FormData = {
  firstName: string;
  email: string;
  phone: string;
};

// Composants UI personnalisés pour éviter les dépendances manquantes
const Form = {
  Root: ({ children, ...props }: { children: React.ReactNode } & React.FormHTMLAttributes<HTMLFormElement>) => (
    <form {...props}>{children}</form>
  ),
  Control: ({ children }: { children: React.ReactNode }) => <div className="form-control">{children}</div>,
  Item: ({ children }: { children: React.ReactNode }) => <div className="form-item">{children}</div>,
  Message: ({ children }: { children: React.ReactNode }) => (
    <div className="text-sm text-red-500 mt-1">{children}</div>
  ),
};

const Input = ({
  className = "",
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { className?: string }) => (
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
    <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white pt-4 md:pt-8 pb-16 md:pb-24">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-10 lg:mb-0 lg:pr-10">
            <div className="inline-flex items-center bg-blue-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4">
              <Star className="h-4 w-4 mr-2" />
              Formation Marketing Digital • Éligible CPF
            </div>
            <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Maîtrisez les Réseaux Sociaux & le Marketing Digital
            </h1>
            <p className="text-xl text-blue-100 mb-6">
              Formation intensive de 21h pour développer une stratégie social media performante, créer du contenu engageant et maîtriser la publicité en ligne.
            </p>
            <ul className="space-y-3 mb-8">
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
          </div>

          {/* Formulaire */}
          <div className="bg-white rounded-xl p-8 shadow-2xl">
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
                  <p className="font-medium text-gray-800">Lieu</p>
                  <p className="text-gray-600">35 rue Armand Brette<br />93380 Pierrefitte-sur-Seine<br />(ou en visioconférence)</p>
                </div>
              </div>
              <div className="flex items-start">
                <Tag className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-800">Tarif</p>
                  <p className="text-gray-600">1 290 € HT (financement CPF possible)</p>
                </div>
              </div>
            </div>
            <Form.Root onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <Form.Item>
                <Controller
                  name="firstName"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input 
                        placeholder="Votre prénom" 
                        className="h-14 text-base w-full"
                        {...field} 
                      />
                      {errors.firstName && <Form.Message>{errors.firstName.message}</Form.Message>}
                    </div>
                  )}
                />
              </Form.Item>
              
              <Form.Item>
                <Controller
                  name="email"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input 
                        type="email" 
                        placeholder="Votre email" 
                        className="h-14 text-base w-full"
                        {...field} 
                      />
                      {errors.email && <Form.Message>{errors.email.message}</Form.Message>}
                    </div>
                  )}
                />
              </Form.Item>
              
              <Form.Item>
                <Controller
                  name="phone"
                  control={control}
                  render={({ field }) => (
                    <div>
                      <Input 
                        type="tel" 
                        placeholder="Votre numéro de téléphone" 
                        className="h-14 text-base w-full"
                        {...field} 
                      />
                      {errors.phone && <Form.Message>{errors.phone.message}</Form.Message>}
                    </div>
                  )}
                />
              </Form.Item>
              
              <Button 
                type="submit" 
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 text-lg font-semibold"
              >
                Réserver mon entretien
              </Button>
              
              <p className="text-xs text-gray-500 text-center mt-4">
                En cliquant, vous acceptez notre politique de confidentialité. 
                Vos données ne seront jamais partagées sans votre accord.
              </p>
            </Form.Root>
          </div>
        </div>

        {/* Badges de confiance */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6 md:gap-12">
          <div className="text-center">
            <div className="text-3xl font-bold">95%</div>
            <div className="text-blue-200">de réussite</div>
          </div>
          <div className="h-12 w-px bg-blue-600"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">10+</div>
            <div className="text-blue-200">années d'expérience</div>
          </div>
          <div className="h-12 w-px bg-blue-600"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">1000+</div>
            <div className="text-blue-200">apprenants formés</div>
          </div>
          <div className="h-12 w-px bg-blue-600"></div>
          <div className="text-center">
            <div className="text-3xl font-bold">4.9/5</div>
            <div className="text-blue-200">satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

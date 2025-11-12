import { Star } from 'lucide-react';
import Image from 'next/image';
import CompanyLogo from './CompanyLogo';

const testimonials = [
  {
    id: 1,
    name: "Marie D.",
    role: "Chef de projet",
    content: "Une formation complète qui m'a permis d'acquérir des compétences immédiatement applicables. L'accompagnement personnalisé fait toute la différence !",
    rating: 5,
  },
  {
    id: 2,
    name: "Thomas L.",
    role: "Développeur",
    content: "Le formateur est vraiment à l'écoute et les mises en pratique sont très concrètes. Je recommande vivement cette formation.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sophie M.",
    role: "Responsable RH",
    content: "Un excellent rapport qualité-prix. Les supports de cours sont clairs et les exercices pertinents. Je suis ravie du résultat.",
    rating: 4,
  },
];

const SocialProof = () => {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Ils nous font confiance</h2>
          <div className="flex items-center justify-center gap-2 text-lg text-gray-600">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-medium text-gray-700">4.9/5 sur 128 avis</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-4">
                <div className="flex">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 mb-6 leading-relaxed">"{testimonial.content}"</p>
              <div className="flex items-center border-t border-gray-100 pt-4">
                <div className="h-12 w-12 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 text-lg font-bold mr-4">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{testimonial.name}</p>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;

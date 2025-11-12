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
    <section className="py-16 md:py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-4 py-1 rounded-full mb-4">
            Témoignages
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
            Ils nous font confiance
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 text-lg">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <span className="font-bold text-gray-700">4.9/5</span>
            <span className="hidden sm:block text-gray-400">•</span>
            <span className="text-gray-600">Basé sur 128 avis vérifiés</span>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.id} 
              className="group bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-100 relative overflow-hidden"
              data-aos="fade-up"
            >
              <div className="absolute top-0 right-0 w-24 h-24 -mr-6 -mt-6 bg-blue-50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative z-10">
                <div className="flex items-center gap-1 mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-5 w-5 ${i < testimonial.rating ? 'text-yellow-400 fill-current' : 'text-gray-200'}`} 
                    />
                  ))}
                </div>
                
                <div className="relative">
                  <svg 
                    className="h-8 w-8 text-blue-100 absolute -left-2 -top-2" 
                    viewBox="0 0 24 20" 
                    fill="currentColor"
                  >
                    <path d="M8.8 0c1.3 0 2.4 1 2.4 2.2v2.7c0 .3.2.5.5.5h2.5c1.3 0 2.4 1 2.4 2.2v9.6c0 1.2-1.1 2.2-2.4 2.2H2.4C1.1 19.2 0 18.2 0 17V7.6C0 6.4 1.1 5.4 2.4 5.4h2.5c.3 0 .5-.2.5-.5V2.2C5.4 1 6.5 0 7.8 0h1zm0 1.5h-1c-.4 0-.8.3-.8.7v3.2c0 1-.8 1.8-1.8 1.8H2.4c-.4 0-.8.3-.8.7v9.4c0 .4.4.7.8.7h11.2c.4 0 .8-.3.8-.7V7.6c0-.4-.4-.7-.8-.7h-2.5c-1 0-1.8-.8-1.8-1.8V2.2c0-.4-.4-.7-.8-.7h-1z" />
                  </svg>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed pl-6">
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="flex items-center pt-6 border-t border-gray-100">
                  <div className="h-14 w-14 rounded-full bg-gradient-to-br from-blue-100 to-purple-100 flex items-center justify-center text-blue-600 text-xl font-bold mr-4 flex-shrink-0">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
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

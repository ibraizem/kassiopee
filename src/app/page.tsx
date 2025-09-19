import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, Award, CheckCircle } from 'lucide-react';
import Hero from '@/components/ui/Hero';
import FormationCard from '@/components/ui/FormationCard';
import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: "Accueil - Formation professionnelle informatique et transformation digitale",
  description: "Kassiopée Formation : organisme de formation professionnelle spécialisé dans l'informatique, la gestion de projets IT et la transformation digitale. Formations certifiantes reconnues par France Compétences.",
  keywords: "formation professionnelle, informatique, transformation digitale, gestion de projets IT, certification RS6074, ITIL, Scrum, Kanban, IA",
});

const featuredFormations = [
  {
    id: 'transformation-digitale-tpe',
    title: 'Transformation Digitale pour TPE',
    description: 'Formation certifiante RS6074 pour élaborer et piloter un plan d\'action de transformation digitale adapté à votre TPE. Certification reconnue par France Compétences.',
    image: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
    duration: '5 jours (28h)',
    region: 'Région parisienne',
    category: 'Transformation Digitale',
    level: 'Dirigeants TPE',
    nextSession: 'Sessions mensuelles',
    href: '/formations/transformation-digitale-tpe'
  },
  {
    id: 'gestion-projets-informatiques',
    title: 'Gestion de Projets Informatiques',
    description: 'Maîtrisez les méthodologies de gestion de projet IT : Agile, Scrum, Kanban. Formation complète avec études de cas pratiques.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg',
    duration: '4 jours (28h)',
    region: 'Région parisienne',
    category: 'Gestion de Projets IT',
    level: 'Chefs de projet',
    nextSession: 'Sessions bimensuelles',
    href: '/formations/gestion-projets-informatiques'
  },
  {
    id: 'itil-v4-fondements',
    title: 'ITIL V4 - Fondements et Concepts',
    description: 'Formation aux fondements de la gestion des services selon ITIL V4. Préparation à la certification officielle.',
    image: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg',
    duration: '3 jours (21h)',
    region: 'Région parisienne',
    category: 'ITIL & Services',
    level: 'Professionnels IT',
    nextSession: 'Sessions mensuelles',
    href: '/formations/itil-v4-fondements'
  }
];

const stats = [
  { number: '95%', label: 'Taux de réussite aux certifications' },
  { number: '500+', label: 'Professionnels IT formés' },
  { number: '1', label: 'Centre spécialisé région parisienne' },
  { number: '10+', label: 'Années d\'expertise IT' },
];

const technologiesCertifications = [
  {
    categorie: 'Transformation Digitale',
    technologies: ['Digital Strategy', 'E-commerce', 'Marketing Digital', 'Analytics'],
    certifications: ['RS6074 France Compétences', 'Certification Digitale'],
    niveau: 'Dirigeants & Managers',
    duree: '5 jours',
    icon: '🚀'
  },
  {
    categorie: 'Méthodologies Agiles',
    technologies: ['Scrum', 'Kanban', 'Lean', 'Design Thinking'],
    certifications: ['Scrum Master Certified', 'Kanban Practitioner'],
    niveau: 'Chefs de projet',
    duree: '2-4 jours',
    icon: '⚡'
  },
  {
    categorie: 'ITIL & Gouvernance',
    technologies: ['ITIL V4', 'Service Management', 'COBIT', 'DevOps'],
    certifications: ['ITIL V4 Foundation', 'Service Management'],
    niveau: 'Professionnels IT',
    duree: '3 jours',
    icon: '🛠️'
  },
  {
    categorie: 'Intelligence Artificielle',
    technologies: ['Machine Learning', 'Deep Learning', 'NLP', 'Computer Vision'],
    certifications: ['AI Fundamentals', 'ML Practitioner'],
    niveau: 'Développeurs & Data',
    duree: '5 jours',
    icon: '🤖'
  },
  {
    categorie: 'Cloud & Infrastructure',
    technologies: ['AWS', 'Azure', 'Docker', 'Kubernetes'],
    certifications: ['Cloud Practitioner', 'DevOps Engineer'],
    niveau: 'Administrateurs',
    duree: '3-5 jours',
    icon: '☁️'
  },
  {
    categorie: 'Cybersécurité',
    technologies: ['Ethical Hacking', 'SIEM', 'Forensics', 'Risk Management'],
    certifications: ['Security+', 'Ethical Hacker'],
    niveau: 'Experts Sécurité',
    duree: '4-6 jours',
    icon: '🔒'
  }
];

const partenaires = [
  {
    nom: 'Microsoft',
    type: 'Partenaire Technologique',
    logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg'
  },
  {
    nom: 'Amazon Web Services',
    type: 'Cloud Partner',
    logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg'
  },
  {
    nom: 'Scrum Alliance',
    type: 'Certification Partner',
    logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg'
  },
  {
    nom: 'AXELOS (ITIL)',
    type: 'Official Training Partner',
    logo: 'https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg'
  }
];

const testimonials = [
  {
    name: 'Jean-Michel Dupont',
    role: 'Dirigeant TPE - E-commerce',
    content: 'La formation transformation digitale m\'a permis de digitaliser mon entreprise avec succès. Le plan d\'action était parfaitement adapté à mes besoins.',
    image: 'https://images.pexels.com/photos/3785077/pexels-photo-3785077.jpeg'
  },
  {
    name: 'Sophie Moreau',
    role: 'Chef de projet IT',
    content: 'Excellente formation en gestion de projets informatiques. Les méthodologies Agile et Scrum sont maintenant parfaitement maîtrisées.',
    image: 'https://images.pexels.com/photos/3912468/pexels-photo-3912468.jpeg'
  },
  {
    name: 'Alexandre Bernard',
    role: 'Responsable IT',
    content: 'Formation ITIL V4 très professionnelle. J\'ai obtenu ma certification et applique maintenant les bonnes pratiques dans mon entreprise.',
    image: 'https://images.pexels.com/photos/3912469/pexels-photo-3912469.jpeg'
  }
];

const certifications = [
  'QUALIOPI',
  'France Compétences RS6074',
  'Datadock',
  'OPCO Entreprises'
];

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero
        title="Transformez votre avenir numérique"
        subtitle="FORMATIONS INFORMATIQUES & DIGITALES"
        description="Spécialiste de la formation aux métiers de l'informatique, de la transformation digitale et de la gestion de projets IT. Formations certifiantes reconnues par France Compétences."
        primaryCTA={{
          text: "Découvrir nos formations",
          href: "/formations"
        }}
        secondaryCTA={{
          text: "Nous contacter",
          href: "/contact"
        }}
        backgroundImage="https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg"
      />

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl lg:text-4xl font-bold text-kassiopee-navy mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Formations */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nos formations <span className="text-kassiopee-navy">phares</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez nos formations spécialisées en informatique et transformation digitale, 
              conçues pour répondre aux besoins du marché IT et accompagner les entreprises dans leur évolution numérique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredFormations.map((formation) => (
              <FormationCard key={formation.id} {...formation} />
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/formations"
              className="inline-flex items-center bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors"
            >
              Voir toutes nos formations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Technologies & Certifications Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies & <span className="text-kassiopee-navy">Certifications</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Maîtrisez les technologies les plus demandées et obtenez des certifications 
              reconnues par l'industrie pour booster votre carrière IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {technologiesCertifications.map((tech, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{tech.icon}</span>
                  <div>
                    <h3 className="text-xl font-bold text-kassiopee-navy">{tech.categorie}</h3>
                    <p className="text-sm text-gray-600">{tech.niveau} • {tech.duree}</p>
                  </div>
                </div>
                
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">🛠️ Technologies</h4>
                  <div className="flex flex-wrap gap-1">
                    {tech.technologies.map((technology, idx) => (
                      <span key={idx} className="bg-kassiopee-navy text-white px-2 py-1 rounded text-xs">
                        {technology}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">🏆 Certifications</h4>
                  <div className="space-y-1">
                    {tech.certifications.map((cert, idx) => (
                      <div key={idx} className="flex items-center text-sm text-gray-700">
                        <CheckCircle className="h-4 w-4 text-kassiopee-gold mr-2" />
                        {cert}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link
              href="/formations"
              className="inline-flex items-center bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-semibold hover:bg-kassiopee-navy/90 transition-colors"
            >
              Découvrir toutes nos formations
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Partenaires Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos <span className="text-kassiopee-navy">Partenaires Technologiques</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Nous collaborons avec les leaders du marché pour vous offrir des formations 
              à la pointe de la technologie et des certifications reconnues.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {partenaires.map((partenaire, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow duration-300">
                <div className="relative h-16 w-16 mx-auto mb-4">
                  <div className="bg-kassiopee-navy text-white rounded-lg h-full w-full flex items-center justify-center font-bold text-lg">
                    {partenaire.nom.charAt(0)}
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 mb-1">{partenaire.nom}</h4>
                <p className="text-xs text-gray-600">{partenaire.type}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-kassiopee-navy text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Pourquoi choisir <span className="text-kassiopee-gold">Kassiopée Formation</span> ?
            </h2>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Plus de 10 ans d'expertise dans la formation informatique et digitale 
              pour vous garantir des compétences alignées avec le marché.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Certifications reconnues</h3>
              <p className="text-gray-200">
                QUALIOPI, France Compétences RS6074, Datadock : nos formations sont certifiées et reconnues par les professionnels IT.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Accompagnement personnalisé</h3>
              <p className="text-gray-200">
                Chaque apprenant bénéficie d'un suivi individualisé par nos formateurs experts en technologies et transformation digitale.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-kassiopee-gold text-kassiopee-navy p-4 rounded-full w-16 h-16 mx-auto mb-6 flex items-center justify-center">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-4">Taux de réussite élevé</h3>
              <p className="text-gray-200">
                95% de taux de réussite aux certifications grâce à notre pédagogie pratique et nos études de cas réels.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Ils témoignent de leur <span className="text-kassiopee-navy">réussite</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Découvrez les témoignages de nos apprenants qui ont réussi leur transformation digitale et leur montée en compétences IT.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Nos certifications et <span className="text-kassiopee-navy">agréments</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Kassiopée Formation est certifié par les principaux organismes de qualité 
              et reconnu par France Compétences pour ses formations en transformation digitale.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="bg-gray-50 border border-gray-200 px-6 py-3 rounded-lg font-semibold text-gray-700"
              >
                {cert}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-kassiopee-gold">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-kassiopee-navy mb-6">
            Prêt à transformer votre avenir professionnel ?
          </h2>
          <p className="text-xl text-kassiopee-navy/80 mb-10 max-w-2xl mx-auto">
            Rejoignez les centaines de professionnels qui ont fait confiance à Kassiopée Formation 
            pour développer leurs compétences IT et digitales.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/inscription"
              className="bg-kassiopee-navy text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-kassiopee-navy/90 transition-colors inline-flex items-center justify-center"
            >
              M'INSCRIRE MAINTENANT
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link
              href="/contact"
              className="border-2 border-kassiopee-navy text-kassiopee-navy px-8 py-4 rounded-lg font-semibold text-lg hover:bg-kassiopee-navy hover:text-white transition-colors"
            >
              Nous contacter
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
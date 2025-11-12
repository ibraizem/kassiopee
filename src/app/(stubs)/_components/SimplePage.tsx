import React from 'react';

interface SimplePageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function SimplePage({ title, description, children }: SimplePageProps) {
  return (
    <div className="min-h-screen bg-gray-50 pt-16">
      {/* Header */}
      <section className="bg-kassiopee-navy text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            {title}
          </h1>
          <p className="text-xl text-gray-200">
            {description}
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {children || (
            <div className="prose prose-lg max-w-none">
              <p className="text-gray-600 text-center">
                Cette page est en cours de développement. Revenez bientôt pour découvrir son contenu complet.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

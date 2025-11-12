import React from 'react';

interface SimplePageProps {
  title: string;
  description: string;
  children?: React.ReactNode;
}

export default function SimplePage({ title, description, children }: SimplePageProps) {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{title}</h1>
      <p className="text-lg mb-6">{description}</p>
      {children}
    </div>
  );
}

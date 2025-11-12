'use client';

import { useState } from 'react';

interface CompanyLogoProps {
  src: string;
  alt: string;
  name: string;
  className?: string;
}

export default function CompanyLogo({ src, alt, name, className = '' }: CompanyLogoProps) {
  const [error, setError] = useState(false);

  if (error) {
    return (
      <div className={`flex items-center justify-center h-16 ${className}`}>
        <span className="text-lg font-semibold text-gray-700 text-center">{name}</span>
      </div>
    );
  }

  return (
    <div className={`flex items-center justify-center h-16 ${className}`}>
      <img 
        src={src} 
        alt={alt}
        className="h-full w-auto max-w-full object-contain"
        onError={() => setError(true)}
      />
    </div>
  );
}

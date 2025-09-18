import React from 'react';

interface LogoProps {
  className?: string;
  width?: number;
  height?: number;
}

export default function Logo({ className = '', width = 160, height = 40 }: LogoProps) {
  return (
    <div className={`flex items-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox="0 0 160 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-auto"
      >
        {/* Background circle */}
        <circle
          cx="20"
          cy="20"
          r="18"
          fill="#1e3a8a"
          stroke="#fbbf24"
          strokeWidth="2"
        />
        
        {/* K letter */}
        <path
          d="M12 8 L12 32 M12 20 L20 12 M12 20 L20 28"
          stroke="#fbbf24"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        
        {/* Company name */}
        <text
          x="45"
          y="16"
          fontSize="14"
          fontWeight="bold"
          fill="#1e3a8a"
          fontFamily="Inter, sans-serif"
        >
          KASSIOPÉE
        </text>
        <text
          x="45"
          y="30"
          fontSize="10"
          fontWeight="500"
          fill="#6b7280"
          fontFamily="Inter, sans-serif"
        >
          FORMATION
        </text>
      </svg>
    </div>
  );
}
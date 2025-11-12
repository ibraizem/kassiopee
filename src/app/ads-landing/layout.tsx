
'use client';

import { ReactNode } from 'react';

export default function AdsLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <div className="min-h-screen bg-white">
        {children}
      </div>
      <style jsx global>{`
        /* Désactive le défilement de la page principale */
        html, body {
          overflow-x: hidden;
        }
        /* Cache le header et le footer */
        header, footer {
          display: none !important;
        }
      `}</style>
    </>
  );
}

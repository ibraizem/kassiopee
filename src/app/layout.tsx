import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { organizationJsonLd } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://kassiopee-formation.fr'),
  title: {
    default: "Kassiopée Formation - Formation professionnelle informatique et transformation digitale",
    template: "%s | Kassiopée Formation",
  },
  description: "Organisme de formation professionnelle spécialisé dans l'informatique, la transformation digitale et la gestion de projets IT. Formations certifiantes reconnues par France Compétences.",
  keywords: "formation professionnelle, informatique, transformation digitale, gestion de projets IT, certification RS6074, ITIL, Scrum, Kanban, IA, QUALIOPI",
  authors: [{ name: "Kassiopée Formation" }],
  creator: "Kassiopée Formation",
  publisher: "Kassiopée Formation",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'fr_FR',
    url: process.env.NEXT_PUBLIC_SITE_URL,
    siteName: 'Kassiopée Formation',
    title: 'Kassiopée Formation - Formation professionnelle informatique et transformation digitale',
    description: 'Organisme de formation professionnelle spécialisé dans l\'informatique, la transformation digitale et la gestion de projets IT.',
    images: [
      {
        url: '/images/og-default.jpg',
        width: 1200,
        height: 630,
        alt: 'Kassiopée Formation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@kassiopeeform',
    creator: '@kassiopeeform',
  },
  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION,
  },
  alternates: {
    canonical: process.env.NEXT_PUBLIC_SITE_URL,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        {process.env.GOOGLE_ANALYTICS_ID && (
          <>
            <script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GOOGLE_ANALYTICS_ID}`}
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', '${process.env.GOOGLE_ANALYTICS_ID}', {
                    page_title: document.title,
                    page_location: window.location.href,
                  });
                `,
              }}
            />
          </>
        )}
      </head>
      <body className="font-sans antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
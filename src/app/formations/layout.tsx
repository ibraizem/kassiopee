import { generateSEO } from '@/lib/seo';

export const metadata = generateSEO({
  title: 'Formations Professionnelles - RNCP, CV, Anglais, Marketing Digital | Kassiopée Formation',
  description: 'Découvrez nos formations professionnelles : RNCP Négociateur Technico-Commercial, Assistant RH, développement personnel, anglais professionnel et marketing digital. Formations certifiantes et éligibles CPF.',
  keywords: 'formations professionnelles, RNCP, négociateur technico-commercial, assistant RH, CV, anglais professionnel, marketing digital, CPF, certification',
  ogImage: 'https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg',
});

export default function FormationsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}

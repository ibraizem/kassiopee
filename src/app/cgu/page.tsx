import SimplePage from "../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Conditions Générales d'Utilisation",
  description: "CGU du site Kassiopée Formation.",
});

export default function Page() {
  return <SimplePage title="Conditions Générales d'Utilisation" description="Contenu légal à venir." />;
}



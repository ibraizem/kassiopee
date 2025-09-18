import SimplePage from "../../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Savoirs de base et Numérique",
  description: "Catalogue Savoirs de base et compétences numériques.",
});

export default function Page() {
  return <SimplePage title="Savoirs de base et Numérique" description="Catalogue détaillé à venir." />;
}



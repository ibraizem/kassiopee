import SimplePage from "../../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Formation Auxiliaire de Puériculture (DEAP)",
  description: "Détails de la formation Auxiliaire de Puériculture (DEAP).",
});

export default function Page() {
  return <SimplePage title="Formation Auxiliaire de Puériculture (DEAP)" description="Contenu détaillé à venir." />;
}



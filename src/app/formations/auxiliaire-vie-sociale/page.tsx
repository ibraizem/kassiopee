import SimplePage from "../../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Formation Auxiliaire de Vie Sociale (DEAVS)",
  description: "Détails de la formation Auxiliaire de Vie Sociale (DEAVS).",
});

export default function Page() {
  return <SimplePage title="Formation Auxiliaire de Vie Sociale (DEAVS)" description="Contenu détaillé à venir." />;
}



import SimplePage from "../../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Formation Accompagnant Éducatif et Social (DEAES)",
  description: "Détails de la formation Accompagnant Éducatif et Social (DEAES).",
});

export default function Page() {
  return <SimplePage title="Formation Accompagnant Éducatif et Social (DEAES)" description="Contenu détaillé à venir." />;
}



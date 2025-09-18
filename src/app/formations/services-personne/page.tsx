import SimplePage from "../../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Formations Services à la personne",
  description: "Catalogue des formations Services à la personne.",
});

export default function Page() {
  return <SimplePage title="Formations Services à la personne" description="Catalogue détaillé à venir." />;
}



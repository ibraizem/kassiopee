import SimplePage from "../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Partenaires",
  description: "Nos partenaires engagés et entreprises associées.",
});

export default function Page() {
  return <SimplePage title="Partenaires" description="Liste des partenaires et dispositifs à venir." />;
}



import SimplePage from "../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Actualités",
  description: "Dernières nouvelles et articles de Kassiopée Formation.",
});

export default function Page() {
  return <SimplePage title="Actualités" description="Nos articles et actualités à venir." />;
}



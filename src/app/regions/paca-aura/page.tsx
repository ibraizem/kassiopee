import SimplePage from "../../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Formations en PACA et AURA",
  description: "Découvrez nos centres et formations en PACA et Auvergne-Rhône-Alpes.",
});

export default function Page() {
  return <SimplePage title="Région PACA / AURA" description="Centres, formations et informations à venir." />;
}



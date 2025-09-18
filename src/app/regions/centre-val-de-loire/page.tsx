import SimplePage from "../../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Formations en Centre-Val de Loire",
  description: "Découvrez nos centres et formations en Centre-Val de Loire.",
});

export default function Page() {
  return <SimplePage title="Région Centre-Val de Loire" description="Centres, formations et informations à venir." />;
}



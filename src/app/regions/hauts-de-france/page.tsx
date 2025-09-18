import SimplePage from "../../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Formations en Hauts-de-France",
  description: "Découvrez nos centres et formations en région Hauts-de-France.",
});

export default function Page() {
  return <SimplePage title="Région Hauts-de-France" description="Centres, formations et informations à venir." />;
}



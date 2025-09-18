import SimplePage from "../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Nos résultats",
  description: "Découvrez nos indicateurs de réussite et de satisfaction.",
});

export default function Page() {
  return <SimplePage title="Nos résultats" description="Indicateurs et rapport qualité à venir." />;
}



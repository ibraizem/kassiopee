import SimplePage from "../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Recrutement",
  description: "Rejoignez Kassiopée Formation : nos offres d'emploi et candidatures.",
});

export default function Page() {
  return <SimplePage title="Recrutement" description="Offres et candidatures spontanées à venir." />;
}



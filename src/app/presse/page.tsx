import SimplePage from "../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Presse",
  description: "Espace presse et kit média Kassiopée Formation.",
});

export default function Page() {
  return <SimplePage title="Presse" description="Dossier et contacts presse à venir." />;
}



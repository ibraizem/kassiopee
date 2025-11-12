import SimplePage from "../../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Formations Sanitaire & Social",
  description: "Catalogue des formations du secteur Sanitaire & Social.",
});

export default function Page() {
  return <SimplePage title="Formations Sanitaire & Social" description="Catalogue détaillé à venir." />;
}



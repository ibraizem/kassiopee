import SimplePage from "../(stubs)/_components/SimplePage";
import { generateSEO } from "@/lib/seo";

export const metadata = generateSEO({
  title: "Plan du site",
  description: "Plan du site Kassiopée Formation.",
});

export default function Page() {
  return <SimplePage title="Plan du site" description="Liste des pages à venir." />;
}



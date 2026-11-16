import { getLandingPageConfig } from "@/lib/landing-page-config";
import Demographics from "./Demographics";

export default async function Page() {
  const { demographics } = await getLandingPageConfig();
  return <Demographics {...demographics} />;
}

import { getLandingPageConfig } from "@/lib/landing-page-config";
import HowToReachIITI from "./HowToReachIITI";

export default async function Page() {
  const { directions } = await getLandingPageConfig();
  return <HowToReachIITI {...directions} />;
}

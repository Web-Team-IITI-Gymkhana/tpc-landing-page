import { getLandingPageConfig } from "@/lib/landing-page-config";
import { Timeline } from "@/components/ui/timeline";

export default async function Timelines() {
  const { recruiterProcess } = await getLandingPageConfig();
  return (
    <>
      <div className="min-h-screen ">
        <Timeline data={recruiterProcess} />
      </div>
    </>
  );
}

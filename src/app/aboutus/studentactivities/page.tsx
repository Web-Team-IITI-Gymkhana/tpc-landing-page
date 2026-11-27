import { getLandingPageConfig } from "@/lib/landing-page-config";
import Activities from "./studentactivities";
import Gymkhana from "./gymkhana";

export default async function StudentActivities() {
  const { studentActivities } = await getLandingPageConfig();
  return (
    <div className=" flex flex-col gap-[40px]">
      <div className="text-3xl font-semibold  text-center text-[#2C3E50]">
        Student Activities
      </div>
      <Activities activities={studentActivities.activities} insta={studentActivities.insta} />

      <Gymkhana {...studentActivities} />
    </div>
  );
}

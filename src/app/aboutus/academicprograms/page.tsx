import { getLandingPageConfig } from "@/lib/landing-page-config";
import CourseDetails from "./CourseDetails";

export default async function Page() {
  const { academicPrograms } = await getLandingPageConfig();
  return <CourseDetails {...academicPrograms} />;
}

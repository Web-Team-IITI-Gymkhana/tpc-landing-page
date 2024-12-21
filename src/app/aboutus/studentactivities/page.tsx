import Activities from "./studentactivities";
import Gymkhana from "./gymkhana";

export default function StudentActivities() {
  return (
    <div className=" flex flex-col gap-[40px]">
      <div className="text-3xl font-semibold  text-center text-[#2C3E50]">
        Student Activities
      </div>
      <Activities></Activities>

      <Gymkhana></Gymkhana>
    </div>
  );
}

import { getLandingPageConfig } from "@/lib/landing-page-config";
import styles from "./ach.module.css";
import List from "./components/list/list";

export default async function Achievements() {
  const { achievements: data } = await getLandingPageConfig();
  return (
    <div>
      <div className={`${styles.header}`}>Achievements</div>

      <List {...data} />
    </div>
  );
}

import styles from "./ach.module.css";
import List from "./components/list/list";
import data from "./data/datacombined.json";

export default function Achievements() {
  return (
    <div>
      <div className={`${styles.header}`}>Achievements</div>

      <List {...data} />
    </div>
  );
}

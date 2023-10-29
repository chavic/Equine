import { FunctionComponent } from "react";
import ScheduleForm from "./ScheduleForm";
import styles from "./DashboardContainer.module.css";

const DashboardContainer: FunctionComponent = () => {
  return (
    <div className={styles.dashboard}>
      <ScheduleForm />
      <div className={styles.bottomcontaner}>
        <button className={styles.button}>
          <div className={styles.icontylPluslightboldaddParent}>
            <img
              className={styles.icontylPluslightboldadd}
              alt=""
              src="/icontyl-pluslightboldadd.svg"
            />
            <div className={styles.newEvent}>New Event</div>
          </div>
        </button>
      </div>
      <div className={styles.overviewcontainer}>
        <div className={styles.rectangle} />
        <div className={styles.rectangle} />
        <div className={styles.rectangle} />
      </div>
    </div>
  );
};

export default DashboardContainer;

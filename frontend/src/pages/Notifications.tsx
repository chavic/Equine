import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import styles from "./Notifications.module.css";

const Notifications: FunctionComponent = () => {
  return (
    <div className={styles.notifications}>
      <EquineContainer />
      <div className={styles.main}>
        <Header iconCode="/search1.svg" iconTextCode="/group-24.svg" />
        <div className={styles.greetings}>
          <div className={styles.notifications1}>Notifications</div>
        </div>
        <div className={styles.dashboard} />
      </div>
    </div>
  );
};

export default Notifications;

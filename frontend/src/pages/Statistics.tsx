import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import styles from "./Statistics.module.css";

const Statistics: FunctionComponent = () => {
  return (
    <div className={styles.statistics}>
      <EquineContainer />
      <div className={styles.main}>
        <Header iconCode="/search2.svg" iconTextCode="/group-25.svg" />
        <div className={styles.greetings}>
          <div className={styles.statistics1}>Statistics</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

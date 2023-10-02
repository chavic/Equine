import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import styles from "./ChangeHistory.module.css";

const ChangeHistory: FunctionComponent = () => {
  return (
    <div className={styles.changeHistory}>
      <EquineContainer
        dimensions="/25848008227682.svg"
        imageDimensions="/icontyl-pluslightboldhome1.svg"
        imageSize="/home1.svg"
        imageDimensionsText="/users4.svg"
        imageDimensionsText2="/map1.svg"
        imageDimensionsText3="/object--align--down1.svg"
        imageDimensionsText4="/notification1.svg"
        imageDimensionsText5="/folders1.svg"
        imageDimensions2="/user-outline1.svg"
        imageDimensionsText6="/settings1.svg"
        frameDivBackgroundColor="unset"
        wardsBtnColor="#050505"
      />
      <div className={styles.main}>
        <Header iconCode="/search2.svg" iconTextCode="/group-23.svg" />
        <div className={styles.greetings}>
          <div className={styles.changeHistory1}>Change History</div>
        </div>
        <div className={styles.dashboard} />
      </div>
    </div>
  );
};

export default ChangeHistory;

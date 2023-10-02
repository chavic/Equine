import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import styles from "./Notifications.module.css";

const Notifications: FunctionComponent = () => {
  return (
    <div className={styles.notifications}>
      <EquineContainer
        dimensions="/25848008227683.svg"
        imageDimensions="/icontyl-pluslightboldhome1.svg"
        imageSize="/home1.svg"
        imageDimensionsText="/users5.svg"
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

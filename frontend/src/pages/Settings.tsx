import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import styles from "./Settings.module.css";

const Settings: FunctionComponent = () => {
  return (
    <div className={styles.settings}>
      <EquineContainer
        dimensions="/2584800822768.svg"
        imageDimensions="/icontyl-pluslightboldhome1.svg"
        imageSize="/home1.svg"
        imageDimensionsText="/users3.svg"
        imageDimensionsText2="/map1.svg"
        imageDimensionsText3="/object--align--down1.svg"
        imageDimensionsText4="/notification1.svg"
        imageDimensionsText5="/folders1.svg"
        imageDimensions2="/user-outline1.svg"
        imageDimensionsText6="/settings1.svg"
      />
      <div className={styles.main}>
        <Header iconCode="/search.svg" iconTextCode="/group-22.svg" />
        <div className={styles.greetings}>
          <div className={styles.settings1}>Settings</div>
        </div>
        <div className={styles.dashboard} />
      </div>
    </div>
  );
};

export default Settings;

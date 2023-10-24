import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import styles from "./Statistics.module.css";

const Statistics: FunctionComponent = () => {
  return (
    <div className={styles.statistics}>
      <EquineContainer
        dimensions="/25848008227681.svg"
        imageDimensions="/icontyl-pluslightboldhome2.svg"
        imageSize="/home2.svg"
        imageDimensionsText="/users2.svg"
        imageDimensionsText2="/map2.svg"
        imageDimensionsText3="/object--align--down2.svg"
        imageDimensionsText4="/notification.svg"
        imageDimensionsText5="/folders2.svg"
        imageDimensions2="/user-outline2.svg"
        imageDimensionsText6="/settings2.svg"
        frameDivBackgroundColor="unset"
        wardsBtnColor="#050505"
      />
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

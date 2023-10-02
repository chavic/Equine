import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import styles from "./Statistics.module.css";

const Statistics: FunctionComponent = () => {
  return (
    <div className={styles.statistics}>
      <EquineContainer
        dimensions="/2584800822768.svg"
        imageDimensions="/icontyl-pluslightboldhome.svg"
        imageSize="/home.svg"
        imageDimensionsText="/users.svg"
        imageDimensionsText2="/map.svg"
        imageDimensionsText3="/object--align--down.svg"
        imageDimensionsText4="/notification.svg"
        imageDimensionsText5="/folders.svg"
        imageDimensions2="/user-outline.svg"
        imageDimensionsText6="/settings.svg"
        frameDivBackgroundColor="unset"
        wardsBtnColor="#050505"
      />
      <div className={styles.main}>
        <Header iconCode="/search.svg" iconTextCode="/group-25.svg" />
        <div className={styles.greetings}>
          <div className={styles.statistics1}>Statistics</div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;

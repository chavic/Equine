import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import FormContainer1 from "../components/FormContainer1";
import styles from "./ChangeHistory.module.css";

const ChangeHistory: FunctionComponent = () => {
  return (
    <div className={styles.changeHistory}>
      <EquineContainer
        dimensions="/2584800822768.svg"
        imageDimensions="/icontyl-pluslightboldhome.svg"
        imageSize="/home.svg"
        imageDimensionsText="/users.svg"
        imageDimensionsText2="/map.svg"
        imageDimensionsText5="/folders.svg"
        imageDimensions2="/user-outline.svg"
        imageDimensionsText6="/settings.svg"
        frameDivBackgroundColor="unset"
        wardsBtnColor="#050505"
      />
      <div className={styles.main}>
        <Header iconCode="/search.svg" />
        <div className={styles.greetings}>
          <div className={styles.changeHistory1}>Change History</div>
        </div>
        <div className={styles.dashboard}>
          <FormContainer1 propWidth="111px" />
        </div>
      </div>
    </div>
  );
};

export default ChangeHistory;

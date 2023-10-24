import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import FormContainer from "../components/FormContainer";
import styles from "./Wards.module.css";

const Wards: FunctionComponent = () => {
  return (
    <div className={styles.wards}>
      <EquineContainer
        dimensions="/2584800822768.svg"
        imageDimensions="/icontyl-pluslightboldhome.svg"
        imageSize="/home.svg"
        imageDimensionsText="/users.svg"
        imageDimensionsText2="/map.svg"
        imageDimensionsText3="/object--align--down1.svg"
        imageDimensionsText5="/folders.svg"
        imageDimensions2="/user-outline.svg"
        imageDimensionsText6="/settings.svg"
        frameDivBackgroundColor="unset"
        wardsBtnColor="#050505"
      />
      <div className={styles.main}>
        <Header iconCode="/search.svg" />
        <div className={styles.greetings}>
          <div className={styles.wards1}>Wards</div>
        </div>
        <div className={styles.dashboard}>
          <FormContainer />
        </div>
      </div>
    </div>
  );
};

export default Wards;

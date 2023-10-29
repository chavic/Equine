import { FunctionComponent } from "react";
import FormContainer2 from "../components/FormContainer2";
import MainHeader from "../components/MainHeader";
import FormContainer from "../components/FormContainer";
import styles from "./Wards.module.css";

const Wards: FunctionComponent = () => {
  return (
    <div className={styles.wards}>
      <FormContainer2
        iconCode="/users.svg"
        itemCode="/map1.svg"
        itemSizeCode="/settings1.svg"
        frameDivBackgroundColor="transparent"
        buttonColor="#050505"
        frameDivBackgroundColor1="#050505"
        frameDivColor="#fff"
        frameDivBackgroundColor2="transparent"
        propColor="#050505"
      />
      <div className={styles.main}>
        <MainHeader />
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

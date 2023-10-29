import { FunctionComponent } from "react";
import EquineFormContainer from "../components/EquineFormContainer";
import MainHeader from "../components/MainHeader";
import FormContainer1 from "../components/FormContainer1";
import styles from "./ChangeHistory.module.css";

const ChangeHistory: FunctionComponent = () => {
  return (
    <div className={styles.changeHistory}>
      <EquineFormContainer />
      <div className={styles.main}>
        <MainHeader />
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

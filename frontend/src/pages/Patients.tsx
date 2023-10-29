import { FunctionComponent } from "react";
import FormContainer2 from "../components/FormContainer2";
import MainHeader from "../components/MainHeader";
import FilteredPatientsTable from "../components/FilteredPatientsTable";
import styles from "./Patients.module.css";

const Patients: FunctionComponent = () => {
  return (
    <div className={styles.patients}>
      <FormContainer2
        iconCode="/users1.svg"
        itemCode="/map.svg"
        itemSizeCode="/settings1.svg"
        frameDivBackgroundColor="#050505"
        buttonColor="#fff"
        frameDivBackgroundColor1="transparent"
        frameDivColor="#050505"
        frameDivBackgroundColor2="transparent"
        propColor="#050505"
      />
      <div className={styles.main}>
        <MainHeader />
        <div className={styles.greetings}>
          <div className={styles.patients1}>Patients</div>
        </div>
        <div className={styles.dashboard}>
          <FilteredPatientsTable />
        </div>
      </div>
    </div>
  );
};

export default Patients;

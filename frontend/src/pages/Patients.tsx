import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import FilteredPatientsTable from "../components/FilteredPatientsTable";
import styles from "./Patients.module.css";

const Patients: FunctionComponent = () => {
  return (
    <div className={styles.patients}>
      <EquineContainer
        dimensions="/25848008227681.svg"
        imageDimensions="/icontyl-pluslightboldhome.svg"
        imageSize="/home.svg"
        imageDimensionsText="/users2.svg"
        imageDimensionsText2="/map.svg"
        imageDimensionsText3="/object--align--down.svg"
        imageDimensionsText4="/notification.svg"
        imageDimensionsText5="/folders.svg"
        imageDimensions2="/user-outline.svg"
        imageDimensionsText6="/settings.svg"
        frameDivBackgroundColor="#050505"
        wardsBtnColor="#fff"
      />
      <div className={styles.main}>
        <Header iconCode="/search2.svg" iconTextCode="/group-2.svg" />
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

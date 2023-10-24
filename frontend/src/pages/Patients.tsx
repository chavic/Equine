import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import FilteredPatientsTable from "../components/FilteredPatientsTable";
import styles from "./Patients.module.css";

const Patients: FunctionComponent = () => {
  return (
    <div className={styles.patients}>
      <EquineContainer
        dimensions="/2584800822768.svg"
        imageDimensions="/icontyl-pluslightboldhome.svg"
        imageSize="/home.svg"
        imageDimensionsText="/users1.svg"
        imageDimensionsText2="/map.svg"
        imageDimensionsText5="/folders.svg"
        imageDimensions2="/user-outline.svg"
        imageDimensionsText6="/settings.svg"
        frameDivBackgroundColor="#050505"
        wardsBtnColor="#fff"
      />
      <div className={styles.main}>
        <Header iconCode="/search.svg" />
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

import { FunctionComponent } from "react";
import styles from "./Header.module.css";

type HeaderType = {
  iconCode?: string;
  iconTextCode?: string;
};

const Header: FunctionComponent<HeaderType> = ({ iconCode, iconTextCode }) => {
  return (
    <div className={styles.header}>
      <div className={styles.seachBox}>
        <div className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <img className={styles.searchIcon} alt="" src={iconCode} />
        </div>
        <div className={styles.textInput}>
          <div className={styles.findPatientWard}>
            Find Patient, Ward, Nurse or Records
          </div>
        </div>
      </div>
      <div className={styles.spacer} />
      <div className={styles.profile}>
        <div className={styles.profile1}>
          <div className={styles.rectangleGroup}>
            <div className={styles.groupChild} />
            <div className={styles.groupItem} />
            <div className={styles.gr}>GR</div>
          </div>
          <div className={styles.georgeRuneParent}>
            <div className={styles.georgeRune}>{`George Rune `}</div>
            <div className={styles.gruneequinemed}>{`grune@equine.med `}</div>
          </div>
          <img className={styles.profileChild} alt="" src={iconTextCode} />
        </div>
      </div>
    </div>
  );
};

export default Header;

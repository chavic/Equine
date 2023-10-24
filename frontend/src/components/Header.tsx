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
        <div className={styles.searchbtn}>
          <img className={styles.searchIcon} alt="" src={iconCode} />
        </div>
        <div className={styles.textInput}>
          <div className={styles.findPatientWard}>
            Find Patient, Ward, Nurse or User
          </div>
        </div>
      </div>
      <div className={styles.spacer} />
      <div className={styles.profile}>
        <div className={styles.profile1}>
          <div className={styles.georgeRuneParent}>
            <div className={styles.georgeRune}>{`George Rune `}</div>
            <div className={styles.gruneequinemed}>{`grune@equine.med `}</div>
          </div>
          <img
            className={styles.icontylPluslightbolddown}
            alt=""
            src="/icontyl-pluslightbolddown.svg"
          />
          <div className={styles.frameParent}>
            <div className={styles.frame} />
            <div className={styles.frame1}>
              <div className={styles.gr}>GR</div>
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

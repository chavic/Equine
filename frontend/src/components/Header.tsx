import { FunctionComponent } from "react";
import styles from "./Header.module.css";
import { getAuthUser } from "../auth";
import { Doctor, Nurse } from "../models";

type HeaderType = {
  iconCode?: string;
  iconTextCode?: string;
};

const Header: FunctionComponent<HeaderType> = ({ iconCode, iconTextCode }) => {
  let user: any = getAuthUser();
  
  return (
    <div className={styles.header}>
      {/* <div className={styles.seachBox}>
        <div className={styles.searchWrapper}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
        </div>
        <div className={styles.textInput}>
          <div className={styles.findPatientWard}>
            Find Patient, Ward, Nurse or Records
          </div>
        </div>
      </div> */}
      <div className={styles.spacer} />
      <div className={styles.profile}>
        <div className={styles.profile1}>
          <div className={styles.georgeRuneParent}>
            <div className={styles.georgeRune}>{user.DoctorName || user.NurseName}</div>
            <div className={styles.gruneequinemed}>{`${user.user}@equine.med `}</div>
          </div>
          <img
            className={styles.odamabolddownIcon}
            alt=""
            src="/odamabolddown.svg"
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

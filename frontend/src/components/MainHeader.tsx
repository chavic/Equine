import { FunctionComponent } from "react";
import styles from "./MainHeader.module.css";

const MainHeader: FunctionComponent = () => {
  return (
    <div className={styles.header}>
      <div className={styles.seachBox}>
        <div className={styles.searchWrapper}>
          <img className={styles.searchIcon} alt="" src="/search.svg" />
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
          <div className={styles.georgeRuneParent}>
            <div className={styles.georgeRune}>{`George Rune `}</div>
            <div className={styles.gruneequinemed}>{`grune@equine.med `}</div>
          </div>
          <img
            className={styles.odamabolddownIcon}
            alt=""
            src="/odamabolddown.svg"
          />
          <div className={styles.frameParent}>
            <div className={styles.frame} />
            <div className={styles.frame1}>
              <div className={styles.frame2}>
                <div className={styles.georgeRune}>GR</div>
              </div>
              <div className={styles.frameChild} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainHeader;

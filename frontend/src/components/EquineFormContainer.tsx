import { FunctionComponent } from "react";
import styles from "./EquineFormContainer.module.css";

const EquineFormContainer: FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logocontainer}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/2584800822768.svg" />
          <b className={styles.equine}>Equine</b>
        </div>
      </div>
      <div className={styles.pagebuttonscontainer}>
        <div className={styles.button}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.icontylPluslightboldhome}
              alt=""
              src="/icontyl-pluslightboldhome.svg"
            />
            <img className={styles.homeIcon} alt="" src="/home1.svg" />
            <div className={styles.home}>Home</div>
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img className={styles.usersIcon} alt="" src="/users.svg" />
            <div className={styles.home}>Patients</div>
          </div>
        </div>
        <div className={styles.button1}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img className={styles.homeIcon} alt="" src="/map.svg" />
            <div className={styles.home}>Wards</div>
          </div>
        </div>
      </div>
      <div className={styles.sidebarInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.actionbuttonscontainer}>
        <div className={styles.button3}>
          <div className={styles.icontylPluslightboldaddParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src="/icontyl-pluslightboldadd.svg"
            />
            <div className={styles.home}>Add Patient</div>
          </div>
        </div>
        <div className={styles.button3}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src="/icontyl-pluslightboldadd.svg"
            />
            <div className={styles.home}>Add Ward</div>
          </div>
        </div>
      </div>
      <div className={styles.sidebarInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.actionbuttonscontainer}>
        <div className={styles.button3}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img className={styles.homeIcon} alt="" src="/folders1.svg" />
            <div className={styles.home}>Change History</div>
          </div>
        </div>
        <div className={styles.button6}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.icontylPluslightboldhome}
              alt=""
              src="/user-outline.svg"
            />
            <img className={styles.homeIcon} alt="" src="/settings1.svg" />
            <div className={styles.home}>Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquineFormContainer;

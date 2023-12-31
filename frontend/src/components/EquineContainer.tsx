import { FunctionComponent } from "react";
import styles from "./EquineContainer.module.css";

const EquineContainer: FunctionComponent = () => {
  return (
    <div className={styles.sidebar}>
      <div className={styles.logocontainer}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src="/25848008227681.svg" />
          <b className={styles.equine}>Equine</b>
        </div>
      </div>
      <div className={styles.pagebuttonscontainer}>
        <div className={styles.homebtn}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.icontylPluslightboldhome}
              alt=""
              src="/icontyl-pluslightboldhome2.svg"
            />
            <img className={styles.homeIcon} alt="" src="/home2.svg" />
            <div className={styles.home}>Home</div>
          </div>
        </div>
        <div className={styles.patientsbtn}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img className={styles.usersIcon} alt="" src="/users2.svg" />
            <div className={styles.home}>Patients</div>
          </div>
        </div>
        <div className={styles.patientsbtn}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img className={styles.homeIcon} alt="" src="/map2.svg" />
            <div className={styles.home}>Wards</div>
          </div>
        </div>
        <div className={styles.patientsbtn}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src="/object--align--down2.svg"
            />
            <div className={styles.home}>Statistics</div>
          </div>
        </div>
      </div>
      <div className={styles.sidebarInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.actionbuttonscontainer}>
        <div className={styles.addpatientbtn}>
          <div className={styles.icontylPluslightboldaddParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src="/icontyl-pluslightboldadd1.svg"
            />
            <div className={styles.home}>Add Patient</div>
          </div>
        </div>
        <div className={styles.addpatientbtn}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src="/icontyl-pluslightboldadd1.svg"
            />
            <div className={styles.home}>Add Ward</div>
          </div>
        </div>
      </div>
      <div className={styles.sidebarInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.pagebuttonscontainer}>
        <div className={styles.patientsbtn}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img className={styles.homeIcon} alt="" src="/notification.svg" />
            <div className={styles.home}>Notifications</div>
          </div>
        </div>
        <div className={styles.patientsbtn}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img className={styles.homeIcon} alt="" src="/folders2.svg" />
            <div className={styles.home}>Change History</div>
          </div>
        </div>
        <div className={styles.patientsbtn}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.icontylPluslightboldhome}
              alt=""
              src="/user-outline2.svg"
            />
            <img className={styles.homeIcon} alt="" src="/settings2.svg" />
            <div className={styles.home}>Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquineContainer;

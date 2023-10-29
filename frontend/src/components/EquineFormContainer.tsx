import { FunctionComponent } from "react";
import { Link } from "react-router-dom";
import styles from "./EquineFormContainer.module.css";

const EquineFormContainer: FunctionComponent = () => {
  return (
    <nav className={styles.sidebar}>
        <div className={styles.logocontainer}>
          <div className={styles.parent}>
            <img className={styles.icon} alt="" src="/2584800822768.svg" />
            <b className={styles.equine}>Equine</b>
          </div>
        </div>
        <div className={styles.pagebuttonscontainer}>
        <Link to="/home" className={styles.button1}>
            <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.icontylPluslightboldhome}
              alt=""
              src="/icontyl-pluslightboldhome.svg"
            />
            <img className={styles.homeIcon} alt="" src="/home1.svg" />
             <div className={styles.patients}>Home</div>
            </div>
          </Link>
          <Link to="/patients" className={styles.button1}>
            <div className={styles.icontylPluslightboldhomeParent}>
              <img className={styles.usersIcon} alt="" src="/users.svg" />
              <div className={styles.patients}>Patients</div>
            </div>
          </Link>
          <Link to="/wards" className={styles.button1}>
            <div className={styles.icontylPluslightboldhomeParent}>
              <img className={styles.homeIcon} alt="" src="/map.svg" />
              <div className={styles.patients}>Wards</div>
            </div>
          </Link>
        </div>
        <div className={styles.sidebarInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.pagebuttonscontainer}>
          <button className={styles.button}>
            <div className={styles.icontylPluslightboldaddParent}>
              <img
                className={styles.homeIcon}
                alt=""
                src="/icontyl-pluslightboldadd.svg"
              />
              <div className={styles.addPatient}>Add Patient</div>
            </div>
          </button>
          <button className={styles.button}>
            <div className={styles.icontylPluslightboldhomeParent}>
              <img
                className={styles.homeIcon}
                alt=""
                src="/icontyl-pluslightboldadd.svg"
              />
              <div className={styles.addPatient}>Add Ward</div>
            </div>
          </button>
        </div>
        <div className={styles.sidebarInner}>
          <div className={styles.frameChild} />
        </div>
        <div className={styles.pagebuttonscontainer}>
       
          <Link to="/settings" className={styles.button1}>
            <div className={styles.icontylPluslightboldhomeParent}>
              <img
                className={styles.icontylPluslightboldhome}
                alt=""
                src="/user-outline.svg"
              />
              <img className={styles.addPatient} alt="" src="/settings1.svg" />
              <div className={styles.patients}>Settings</div>
            </div>
          </Link>
        </div>
      </nav>
  );
};

export default EquineFormContainer;

import { FunctionComponent } from "react";
import Header from "../components/Header";
import DashboardContainer from "../components/DashboardContainer";
import styles from "./Home.module.css";
import { Link } from "react-router-dom";
import { getAuthUser } from "../auth";

const Home: FunctionComponent = () => {
  let user: any = getAuthUser();
  let name;

  if (user.Role === 'Doctor') {
    const doctorNameParts = user.DoctorName.split(' ');
    name = doctorNameParts[0];
  } else if (user.Role === 'Nurse') {
    const nurseNameParts = user.NurseName.split(' ');
    name = nurseNameParts[0];
  }

  return (
    <div className={styles.home}>
      <nav className={styles.sidebar}>
        <div className={styles.logocontainer}>
          <div className={styles.parent}>
            <img className={styles.icon} alt="" src="/2584800822768.svg" />
            <b className={styles.equine}>Equine</b>
          </div>
        </div>
        <div className={styles.pagebuttonscontainer}>
          <Link to="/home" className={styles.button}>
            <div className={styles.icontylPluslightboldhomeParent}>
              <img
                className={styles.icontylPluslightboldhome}
                alt=""
                src="/icontyl-pluslightboldhome.svg"
              />
              <img className={styles.homeIcon} alt="" src="/home.svg" />
              <div className={styles.home1}>Home</div>
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
              <img className={styles.homeIcon} alt="" src="/settings1.svg" />
              <div className={styles.patients}>Settings</div>
            </div>
          </Link>
        </div>
      </nav>
      <div className={styles.main}>
        <Header iconCode="/search.svg" />
        <div className={styles.greetings}>
          <div className={styles.goodMorningGeorge}>Good Morning, {name}</div>
          <div className={styles.hereAnOverview}>
            Here an overview of actives in the clinic and your account
          </div>
        </div>
        <DashboardContainer />
      </div>
    </div>
  );
};

export default Home;

import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import ScheduleForm from "../components/ScheduleForm";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  return (
    <div className={styles.home}>
      <EquineContainer
        dimensions="/2584800822768.svg"
        imageDimensions="/icontyl-pluslightboldhome.svg"
        imageSize="/home.svg"
        imageDimensionsText="/users.svg"
        imageDimensionsText2="/map.svg"
        imageDimensionsText5="/folders.svg"
        imageDimensions2="/user-outline.svg"
        imageDimensionsText6="/settings.svg"
        frameDivBackgroundColor="unset"
        wardsBtnColor="#050505"
      />
      <div className={styles.main}>
        <Header iconCode="/search.svg" />
        <div className={styles.greetings}>
          <div className={styles.goodMorningGeorge}>Good Morning, George</div>
          <div className={styles.hereAnOverview}>
            Here an overview of actives in the clinic and your account
          </div>
        </div>
        <div className={styles.dashboard}>
          <ScheduleForm />
          <div className={styles.bottomcontaner}>
            <div className={styles.addwardbtn}>
              <div className={styles.icontylPluslightboldaddParent}>
                <img
                  className={styles.icontylPluslightboldadd}
                  alt=""
                  src="/icontyl-pluslightboldadd.svg"
                />
                <div className={styles.goodMorningGeorge}>New Event</div>
              </div>
            </div>
          </div>
          <div className={styles.overviewcontainer}>
            <div className={styles.rectangle} />
            <div className={styles.rectangle} />
            <div className={styles.rectangle} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

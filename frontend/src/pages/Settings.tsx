import { FunctionComponent } from "react";
import EquineContainer from "../components/EquineContainer";
import Header from "../components/Header";
import FormContainer1 from "../components/FormContainer1";
import styles from "./Settings.module.css";

const Settings: FunctionComponent = () => {
  return (
    <div className={styles.settings}>
      <EquineContainer
        dimensions="/2584800822768.svg"
        imageDimensions="/icontyl-pluslightboldhome.svg"
        imageSize="/home.svg"
        imageDimensionsText="/users.svg"
        imageDimensionsText2="/map.svg"
        imageDimensionsText5="/folders.svg"
        imageDimensions2="/user-outline.svg"
        imageDimensionsText6="/settings.svg"
      />
      <div className={styles.main}>
        <Header iconCode="/search.svg" />
        <div className={styles.greetings}>
          <div className={styles.accountSettings}>Settings</div>
        </div>
        <div className={styles.dashboard}>
          <div className={styles.innerHeader}>
            <div className={styles.accountSettings}>Account Settings</div>
            <div className={styles.manageYouInformation}>
              Manage you information, usernames and password
            </div>
          </div>
          <div className={styles.innerHeader}>
            <div className={styles.accountSettings}>Administrator Settings</div>
            <div className={styles.manageYouInformation}>
              Manage user accounts, create and delete users
            </div>
          </div>
          <FormContainer1 />
          <div className={styles.bottomcontaner}>
            <div className={styles.addwardbtn}>
              <div className={styles.icontylPluslightboldaddParent}>
                <img
                  className={styles.icontylPluslightboldadd}
                  alt=""
                  src="/icontyl-pluslightboldadd.svg"
                />
                <div className={styles.accountSettings}>Create User</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;

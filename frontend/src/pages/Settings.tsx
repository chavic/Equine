import { FunctionComponent } from "react";
import FormContainer2 from "../components/FormContainer2";
import MainHeader from "../components/MainHeader";
import AccountSettingsForm from "../components/AccountSettingsForm";
import styles from "./Settings.module.css";

const Settings: FunctionComponent = () => {
  return (
    <div className={styles.settings}>
      <FormContainer2
        iconCode="/users.svg"
        itemCode="/map.svg"
        itemSizeCode="/settings.svg"
      />
      <div className={styles.main}>
        <MainHeader />
        <div className={styles.greetings}>
          <div className={styles.settings1}>Settings</div>
        </div>
        <AccountSettingsForm />
      </div>
    </div>
  );
};

export default Settings;

import { FunctionComponent } from "react";
import FormContainer2 from "../components/FormContainer2";
import AccountSettingsForm from "../components/AccountSettingsForm";
import styles from "./Settings.module.css";
import Header from "../components/Header";

const Settings: FunctionComponent = () => {
  return (
    <div className={styles.settings}>
      <FormContainer2
        iconCode="/users.svg"
        itemCode="/map.svg"
        itemSizeCode="/settings.svg"
      />
      <div className={styles.main}>
        <Header />
        <div className={styles.greetings}>
          <div className={styles.settings1}>Settings</div>
        </div>
        <AccountSettingsForm />
      </div>
    </div>
  );
};

export default Settings;

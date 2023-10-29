import { FunctionComponent } from "react";
import FormContainer1 from "./FormContainer1";
import styles from "./AccountSettingsForm.module.css";

const AccountSettingsForm: FunctionComponent = () => {
  return (
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
        <button className={styles.button}>
          <div className={styles.icontylPluslightboldaddParent}>
            <img
              className={styles.icontylPluslightboldadd}
              alt=""
              src="/icontyl-pluslightboldadd.svg"
            />
            <div className={styles.createUser}>Create User</div>
          </div>
        </button>
      </div>
    </div>
  );
};

export default AccountSettingsForm;

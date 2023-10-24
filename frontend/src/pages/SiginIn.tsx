import { FunctionComponent } from "react";
import styles from "./SiginIn.module.css";

const SiginIn: FunctionComponent = () => {
  return (
    <div className={styles.siginin}>
      <div className={styles.main}>
        <div className={styles.logo}>
          <div className={styles.parent}>
            <img className={styles.icon} alt="" src="/2584800822768.svg" />
            <b className={styles.equine}>Equine</b>
          </div>
        </div>
        <div className={styles.greetingscontanier}>
          <div className={styles.goodMorningWelcome}>Good Morning, Welcome</div>
          <div className={styles.signIntoYour}>
            Sign into your system account or activate your new account by
            contacting the admin
          </div>
        </div>
        <div className={styles.formcontainer}>
          <div className={styles.form}>
            <div className={styles.textInput}>
              <div className={styles.enterYourUsername}>
                Enter Your Username
              </div>
            </div>
            <div className={styles.textInput}>
              <div className={styles.enterYourUsername}>
                Enter Your Password
              </div>
            </div>
          </div>
        </div>
        <div className={styles.actionbtns}>
          <div className={styles.bottomcontaner}>
            <div className={styles.loginbtn}>
              <div className={styles.signInWrapper}>
                <div className={styles.goodMorningWelcome}>Sign In</div>
              </div>
            </div>
            <div className={styles.loginbtn1}>
              <div className={styles.signInWrapper}>
                <div className={styles.goodMorningWelcome}>
                  Activate Account
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiginIn;

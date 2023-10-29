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
            <input
              className={styles.input}
              placeholder="Enter Your Username"
              type="text"
            />
            <input
              className={styles.input}
              placeholder="Enter Your Password"
              type="text"
            />
          </div>
        </div>
        <div className={styles.actionbtns}>
          <div className={styles.bottomcontaner}>
            <button className={styles.button}>
              <div className={styles.signInWrapper}>
                <div className={styles.signIn}>Sign In</div>
              </div>
            </button>
            <button className={styles.button1}>
              <div className={styles.signInWrapper}>
                <div className={styles.signIn}>Activate Account</div>
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SiginIn;

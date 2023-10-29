import { FunctionComponent, useState } from "react";
import { useNavigate } from "react-router";

import { signIn, activateUser } from "../auth";
import styles from "./SiginIn.module.css";

const SiginIn: FunctionComponent = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const token = await signIn(username, password);
      navigate("/home")
    } catch (error: any) {
      setError(`Authorization Failed. Please make sure your username and password are valid`)
    }
  };

  const handleActivateAccount = async () => {
    try {
      await activateUser(username, password);
      navigate("/home")
    } catch (error: any) {
      setError(error.message)
    }
  };

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };


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
            {error ? (
            <span style={{ color: "red" }} >
              {error}
            </span>
            ) :  (
              "Sign into your system account or activate your new account by contacting the admin"
            )}         
          </div>
        </div>
        <div className={styles.formcontainer}>
          <div className={styles.form}>
            <input
              className={styles.input}
              placeholder="Enter Your Username"
              value={username}
              onChange={handleUsernameChange}
              type="text"
            />
            <input
              className={styles.input}
              placeholder="Enter Your Password"
              value={password}
              onChange={handlePasswordChange}
              type="text"
            />
          </div>
        </div>
        <div className={styles.actionbtns}>
          <div className={styles.bottomcontaner}>
            <button className={styles.button} onClick={handleSignIn}>
              <div className={styles.signInWrapper}>
                <div className={styles.signIn}>Authorize</div>
              </div>
            </button>
            <button className={styles.button1} onClick={handleActivateAccount}>
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

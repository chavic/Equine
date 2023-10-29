import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormContainer2.module.css";
import { Link } from "react-router-dom";

type FormContainer2Type = {
  iconCode?: string;
  itemCode?: string;
  itemSizeCode?: string;

  /** Style props */
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  buttonColor?: CSSProperties["color"];
  frameDivBackgroundColor1?: CSSProperties["backgroundColor"];
  frameDivColor?: CSSProperties["color"];
  frameDivBackgroundColor2?: CSSProperties["backgroundColor"];
  propColor?: CSSProperties["color"];
};

const FormContainer2: FunctionComponent<FormContainer2Type> = ({
  iconCode,
  itemCode,
  itemSizeCode,
  frameDivBackgroundColor,
  buttonColor,
  frameDivBackgroundColor1,
  frameDivColor,
  frameDivBackgroundColor2,
  propColor,
}) => {
  const buttonStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const patientsStyle: CSSProperties = useMemo(() => {
    return {
      color: buttonColor,
    };
  }, [buttonColor]);

  const button1Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor1,
    };
  }, [frameDivBackgroundColor1]);

  const wardsStyle: CSSProperties = useMemo(() => {
    return {
      color: frameDivColor,
    };
  }, [frameDivColor]);

  const button2Style: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor2,
    };
  }, [frameDivBackgroundColor2]);

  const settingsStyle: CSSProperties = useMemo(() => {
    return {
      color: propColor,
    };
  }, [propColor]);

  return (
    <div className={styles.sidebar}>
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
            <img className={styles.homeIcon} alt="" src="/home1.svg" />
            <div className={styles.home}>Home</div>
          </div>
        </Link>
        <Link to="/patients" className={styles.button1} style={buttonStyle}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img className={styles.usersIcon} alt="" src={iconCode} />
            <div className={styles.home} style={patientsStyle}>
              Patients
            </div>
          </div>
        </Link>
        <Link to="/wards" className={styles.button1} style={button1Style}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img className={styles.homeIcon} alt="" src={itemCode} />
            <div className={styles.home} style={wardsStyle}>
              Wards
            </div>
          </div>
        </Link>
      </div>
      <div className={styles.sidebarInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.pagebuttonscontainer}>
        <button className={styles.button3}>
          <div className={styles.icontylPluslightboldaddParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src="/icontyl-pluslightboldadd.svg"
            />
            <div className={styles.addPatient}>Add Patient</div>
          </div>
        </button>
        <button className={styles.button3}>
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
        
        <Link to="/settings" className={styles.button3} style={button2Style}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.icontylPluslightboldhome}
              alt=""
              src="/user-outline.svg"
            />
            <img className={styles.homeIcon} alt="" src={itemSizeCode} />
            <div className={styles.addPatient} style={settingsStyle}>
              Settings
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default FormContainer2;

import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./EquineContainer.module.css";

type EquineContainerType = {
  dimensions?: string;
  imageDimensions?: string;
  imageSize?: string;
  imageDimensionsText?: string;
  imageDimensionsText2?: string;
  imageDimensionsText3?: string;
  imageDimensionsText4?: string;
  imageDimensionsText5?: string;
  imageDimensions2?: string;
  imageDimensionsText6?: string;

  /** Style props */
  frameDivBackgroundColor?: CSSProperties["backgroundColor"];
  wardsBtnColor?: CSSProperties["color"];
};

const EquineContainer: FunctionComponent<EquineContainerType> = ({
  dimensions,
  imageDimensions,
  imageSize,
  imageDimensionsText,
  imageDimensionsText2,
  imageDimensionsText3,
  imageDimensionsText4,
  imageDimensionsText5,
  imageDimensions2,
  imageDimensionsText6,
  frameDivBackgroundColor,
  wardsBtnColor,
}) => {
  const largeBtnStyle: CSSProperties = useMemo(() => {
    return {
      backgroundColor: frameDivBackgroundColor,
    };
  }, [frameDivBackgroundColor]);

  const patientsStyle: CSSProperties = useMemo(() => {
    return {
      color: wardsBtnColor,
    };
  }, [wardsBtnColor]);

  return (
    <div className={styles.sidebar}>
      <div className={styles.logocontainer}>
        <div className={styles.parent}>
          <img className={styles.icon} alt="" src={dimensions} />
          <b className={styles.equine}>Equine</b>
        </div>
      </div>
      <div className={styles.pagebuttonscontainer}>
        <div className={styles.largebtn}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.icontylPluslightboldhome}
              alt=""
              src={imageDimensions}
            />
            <img className={styles.homeIcon} alt="" src={imageSize} />
            <div className={styles.home}>Home</div>
          </div>
        </div>
        <div className={styles.largebtn1} style={largeBtnStyle}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.usersIcon}
              alt=""
              src={imageDimensionsText}
            />
            <div className={styles.home} style={patientsStyle}>
              Patients
            </div>
          </div>
        </div>
        <div className={styles.largebtn1}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src={imageDimensionsText2}
            />
            <div className={styles.home}>Wards</div>
          </div>
        </div>
      </div>
      <div className={styles.sidebarInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.actionbuttonscontainer}>
        <div className={styles.largebtn3}>
          <div className={styles.icontylPluslightboldaddParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src="/icontyl-pluslightboldadd.svg"
            />
            <div className={styles.home}>Add Patient</div>
          </div>
        </div>
        <div className={styles.largebtn3}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src="/icontyl-pluslightboldadd.svg"
            />
            <div className={styles.home}>Add Ward</div>
          </div>
        </div>
      </div>
      <div className={styles.sidebarInner}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.pagebuttonscontainer}>
        <div className={styles.largebtn1}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.homeIcon}
              alt=""
              src={imageDimensionsText5}
            />
            <div className={styles.home}>Change History</div>
          </div>
        </div>
        <div className={styles.largebtn1}>
          <div className={styles.icontylPluslightboldhomeParent}>
            <img
              className={styles.icontylPluslightboldhome}
              alt=""
              src={imageDimensions2}
            />
            <img
              className={styles.homeIcon}
              alt=""
              src={imageDimensionsText6}
            />
            <div className={styles.home}>Settings</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EquineContainer;

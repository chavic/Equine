import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FormContainer1.module.css";

type FormContainer1Type = {
  /** Style props */
  propWidth?: CSSProperties["width"];
};

const FormContainer1: FunctionComponent<FormContainer1Type> = ({
  propWidth,
}) => {
  const adminStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  return (
    <div className={styles.wardstable}>
      <div className={styles.tableheader}>
        <div className={styles.textContainer}>
          <div className={styles.id}>
            <div className={styles.username}>Id</div>
          </div>
          <div className={styles.name}>
            <div className={styles.username}>Username</div>
          </div>
          <div className={styles.admissiondate}>
            <div className={styles.username}>Role</div>
          </div>
          <div className={styles.dob}>
            <div className={styles.username}>Action</div>
          </div>
          <div className={styles.ward}>
            <div className={styles.username}>Date</div>
          </div>
        </div>
      </div>
      <div className={styles.tablerow}>
        <div className={styles.textContainer}>
          <div className={styles.id}>
            <div className={styles.username}>5</div>
          </div>
          <div className={styles.name}>
            <div className={styles.username}>St johns</div>
          </div>
          <div className={styles.admissiondate}>
            <div className={styles.admin} style={adminStyle}>
              Admin
            </div>
          </div>
          <div className={styles.dob}>
            <div className={styles.username}>Delete Patient</div>
          </div>
          <div className={styles.ward}>
            <div className={styles.username}>1963-01-21</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer1;

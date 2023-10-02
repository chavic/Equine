import { FunctionComponent } from "react";
import styles from "./FormContainer.module.css";

const FormContainer: FunctionComponent = () => {
  return (
    <div className={styles.wardstable}>
      <div className={styles.tableheader}>
        <div className={styles.textContainer}>
          <div className={styles.id}>
            <div className={styles.nurseInCharge}>Id</div>
          </div>
          <div className={styles.name}>
            <div className={styles.nurseInCharge}>Name</div>
          </div>
          <div className={styles.admissiondate}>
            <div className={styles.nurseInCharge}>Nurse in Charge</div>
          </div>
          <div className={styles.dob}>
            <div className={styles.nurseInCharge}>Total Bed Spaces</div>
          </div>
          <div className={styles.ward}>
            <div className={styles.nurseInCharge}>Remaining</div>
          </div>
        </div>
      </div>
      <div className={styles.tablerow}>
        <div className={styles.textContainer}>
          <div className={styles.id}>
            <div className={styles.nurseInCharge}>w1</div>
          </div>
          <div className={styles.name}>
            <div className={styles.nurseInCharge}>St johns</div>
          </div>
          <div className={styles.admissiondate}>
            <div className={styles.nurseInCharge}>Sister Murphy</div>
          </div>
          <div className={styles.dob}>
            <div className={styles.nurseInCharge}>10</div>
          </div>
          <div className={styles.ward}>
            <div className={styles.nurseInCharge}>6</div>
          </div>
        </div>
      </div>
      <div className={styles.tablerow}>
        <div className={styles.textContainer}>
          <div className={styles.id3}>
            <div className={styles.nurseInCharge}>w2</div>
          </div>
          <div className={styles.name3}>
            <div className={styles.nurseInCharge}>Moody</div>
          </div>
          <div className={styles.admissiondate2}>
            <div className={styles.nurseInCharge}>Sister Sarah</div>
          </div>
          <div className={styles.dob2}>
            <div className={styles.nurseInCharge}>6</div>
          </div>
          <div className={styles.ward2}>
            <div className={styles.nurseInCharge}>2</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormContainer;

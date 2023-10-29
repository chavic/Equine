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
          <input className={styles.input} placeholder="St johns" type="text" />
          <input
            className={styles.input1}
            placeholder="Sister Murphy"
            type="text"
          />
          <input className={styles.input2} placeholder="10" type="text" />
          <input className={styles.input3} placeholder="6" type="text" />
        </div>
      </div>
    </div>
  );
};

export default FormContainer;

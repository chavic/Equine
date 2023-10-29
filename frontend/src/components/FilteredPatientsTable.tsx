import { FunctionComponent } from "react";
import styles from "./FilteredPatientsTable.module.css";

const FilteredPatientsTable: FunctionComponent = () => {
  return (
    <div className={styles.patientstable}>
      <div className={styles.tableheader}>
        <div className={styles.textContainer}>
          <div className={styles.id}>
            <div className={styles.sex}>Id</div>
          </div>
          <div className={styles.name}>
            <div className={styles.sex}>Name</div>
          </div>
          <div className={styles.initials}>
            <div className={styles.sex}>sex</div>
          </div>
          <div className={styles.address}>
            <div className={styles.sex}>Address</div>
          </div>
          <div className={styles.postalcode}>
            <div className={styles.sex}>Postal Code</div>
          </div>
          <div className={styles.admissiondate}>
            <div className={styles.sex}>Admission Date</div>
          </div>
          <div className={styles.dob}>
            <div className={styles.sex}>Date of Birth</div>
          </div>
          <div className={styles.ward}>
            <div className={styles.sex}>Ward</div>
          </div>
        </div>
      </div>
      <div className={styles.tablerow}>
        <div className={styles.textContainer}>
          <div className={styles.id}>
            <div className={styles.sex}>p2</div>
          </div>
          <input className={styles.input} placeholder="JP Knight" type="text" />
          <input className={styles.input1} placeholder="F" type="text" />
          <input className={styles.input2} placeholder="5 Lee Rd" type="text" />
          <input className={styles.input3} placeholder="SE6" type="text" />
          <input
            className={styles.input4}
            placeholder="2001-06-15"
            type="text"
          />
          <input
            className={styles.input5}
            placeholder="1963-01-21"
            type="text"
          />
          <input className={styles.input6} placeholder="St johns" type="text" />
        </div>
      </div>
    </div>
  );
};

export default FilteredPatientsTable;

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
          <div className={styles.name}>
            <div className={styles.sex}>JP Knight</div>
          </div>
          <div className={styles.initials}>
            <div className={styles.sex}>F</div>
          </div>
          <div className={styles.address}>
            <div className={styles.sex}>5 Lee Rd</div>
          </div>
          <div className={styles.postalcode}>
            <div className={styles.sex}>SE6</div>
          </div>
          <div className={styles.admissiondate}>
            <div className={styles.sex}>2001-06-15</div>
          </div>
          <div className={styles.dob}>
            <div className={styles.sex}>1963-01-21</div>
          </div>
          <div className={styles.ward}>
            <div className={styles.sex}>St johns</div>
          </div>
        </div>
      </div>
      <div className={styles.tablerow}>
        <div className={styles.textContainer}>
          <div className={styles.id}>
            <div className={styles.sex}>p2</div>
          </div>
          <div className={styles.name}>
            <div className={styles.sex}>EF Major</div>
          </div>
          <div className={styles.initials}>
            <div className={styles.sex}>F</div>
          </div>
          <div className={styles.address}>
            <div className={styles.sex}>12 High Rd</div>
          </div>
          <div className={styles.postalcode}>
            <div className={styles.sex}>SE5</div>
          </div>
          <div className={styles.admissiondate}>
            <div className={styles.sex}>2001-08-15</div>
          </div>
          <div className={styles.dob}>
            <div className={styles.sex}>1967-01-13</div>
          </div>
          <div className={styles.ward}>
            <div className={styles.sex}>Moody</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilteredPatientsTable;

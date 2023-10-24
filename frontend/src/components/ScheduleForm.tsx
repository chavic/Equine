import { FunctionComponent } from "react";
import styles from "./ScheduleForm.module.css";

const ScheduleForm: FunctionComponent = () => {
  return (
    <div className={styles.schedualcontainer}>
      <div className={styles.daycalender}>
        <div className={styles.monthsselector}>
          <div className={styles.september}>September</div>
          <div className={styles.september}>October</div>
          <div className={styles.november}>November</div>
          <div className={styles.september}>December</div>
          <div className={styles.september}>January</div>
        </div>
        <div className={styles.dayselector}>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>10</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Sun</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>11</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Mon</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>13</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Tue</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>14</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Wed</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>15</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Tue</div>
            </div>
          </div>
          <div className={styles.datetimecontainer5}>
            <div className={styles.date5}>
              <div className={styles.div}>16</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Fri</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>17</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Sat</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>18</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Mon</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date8}>
              <div className={styles.div}>19</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Tue</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>20</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Wed</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>21</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Thu</div>
            </div>
          </div>
          <div className={styles.datetimecontainer}>
            <div className={styles.date}>
              <div className={styles.div}>22</div>
            </div>
            <div className={styles.day}>
              <div className={styles.sun}>Fri</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.schdualviewer}>
        <div className={styles.timeframe}>
          <div className={styles.frameParent}>
            <div className={styles.upcomingEventsWrapper}>
              <div className={styles.sun}>Upcoming Events</div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.parent}>
                  <div className={styles.sun}>9:00</div>
                  <div className={styles.sun}>10:00</div>
                  <div className={styles.sun}>11:00</div>
                  <div className={styles.div15}>12:00</div>
                  <div className={styles.sun}>13:00</div>
                  <div className={styles.sun}>14:00</div>
                  <div className={styles.sun}>15:00</div>
                  <div className={styles.sun}>16:00</div>
                  <div className={styles.sun}>17:00</div>
                  <div className={styles.sun}>18:00</div>
                </div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                  <div className={styles.rectangleDiv} />
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                  <div className={styles.frameChild3} />
                  <div className={styles.frameChild4} />
                  <div className={styles.frameChild5} />
                  <div className={styles.frameChild6} />
                  <div className={styles.frameChild7} />
                  <div className={styles.frameChild8} />
                  <div className={styles.frameChild9} />
                  <div className={styles.frameChild10} />
                  <div className={styles.frameChild11} />
                  <div className={styles.frameChild12} />
                  <div className={styles.frameChild13} />
                  <div className={styles.frameChild14} />
                  <div className={styles.frameChild15} />
                  <div className={styles.frameChild16} />
                  <div className={styles.frameChild17} />
                  <div className={styles.frameChild18} />
                  <div className={styles.frameChild19} />
                  <div className={styles.frameChild20} />
                  <div className={styles.frameChild21} />
                  <div className={styles.frameChild22} />
                  <div className={styles.frameChild23} />
                  <div className={styles.frameChild24} />
                  <div className={styles.frameChild25} />
                  <div className={styles.frameChild26} />
                  <div className={styles.frameChild27} />
                  <div className={styles.frameChild28} />
                  <div className={styles.frameChild29} />
                  <div className={styles.frameChild30} />
                  <div className={styles.frameChild31} />
                  <div className={styles.frameChild32} />
                  <div className={styles.frame} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.events}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.vectorParent}>
                <img
                  className={styles.rectangleIcon}
                  alt=""
                  src="/rectangle-2.svg"
                />
                <div className={styles.cs}>CS</div>
              </div>
              <div className={styles.claytonSSirnameParent}>
                <div className={styles.sun}>Clayton S. Sirname</div>
                <div className={styles.lecturerAtUnza}>Lecturer at UNZA</div>
              </div>
            </div>
            <div className={styles.seeMrSikasote}>
              See Mr Sikasote for he’s consulting about the product.
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.vcWrapper}>
                <div className={styles.sun}>VC</div>
              </div>
              <div className={styles.claytonSSirnameParent}>
                <div className={styles.sun}>Victor C. Sirname</div>
                <div className={styles.lecturerAtUnza}>Founder of Equnine</div>
              </div>
            </div>
            <div className={styles.seeMrSikasote}>
              See Mr Victor for he’s punch enhancement procedure.
            </div>
          </div>
        </div>
        <div className={styles.timesheet}>
          <div className={styles.event}>
            <div className={styles.tile}>
              <div className={styles.sun}>Medical Product Consulting</div>
              <div className={styles.div22}>12:00 - 13:00</div>
            </div>
          </div>
          <div className={styles.event1}>
            <div className={styles.tile}>
              <div className={styles.sun}>Enhancement Procedure</div>
              <div className={styles.div22}>13:00 - 17:00</div>
            </div>
          </div>
          <div className={styles.event2}>
            <div className={styles.tile2}>
              <div className={styles.sun}>Close Meeting</div>
              <div className={styles.div22}>17:00 - 18:30</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleForm;

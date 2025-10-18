import React from "react";
import styles from "./DoctorProfile.module.css";

const DoctorProfile = () => {
  return (
    <div className={styles.body_part}>
      <div className={styles.main_part}>
        {/* Left Section */}
        <div className={styles.left_part}>
          <div className={styles.left_part_main}>
            <span className={styles.left_part_first}>Agamani Banerjee</span>
            <span className={styles.left_part_sec}>CARDIOLOGIST</span>
            <div className={styles.left_part_primary}>
              <div className={styles.left_part_primary_sec}>
                <span className={styles.left_part_third}>Exp</span>
                <span className={styles.left_part_fourth}>4 Yrs</span>
              </div>

              <div className={styles.left_part_primary_sec}>
                <span className={styles.left_part_third}>Rating</span>
                <span className={styles.left_part_fourth}>5k</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right_part}>
          <div className={styles.right_part_upper}>
            <div className={styles.right_part_divs}>
              <span className={styles.right_part_firstspan}>Username</span>
              <span className={styles.right_part_secspan}>@banerjeeagamani</span>
            </div>

            <div className={styles.right_part_divs}>
              <span className={styles.right_part_firstspan}>First Name</span>
              <span className={styles.right_part_secspan}>Agamani</span>
            </div>

            <div className={styles.right_part_divs}>
              <span className={styles.right_part_firstspan}>Last Name</span>
              <span className={styles.right_part_secspan}>Banerjee</span>
            </div>

            <div className={styles.right_part_divs}>
              <span className={styles.right_part_firstspan}>Number</span>
              <span className={styles.right_part_secspan}>+91 9330591139</span>
            </div>

            <div className={styles.right_part_divs}>
              <span className={styles.right_part_firstspan}>Email</span>
              <span className={styles.right_part_secspan}>
                agamanibenerjee@example.com
              </span>
            </div>

            <div className={styles.right_part_divs}>
              <span className={styles.right_part_firstspan}>Speciality</span>
              <span className={styles.right_part_secspan}>Cardiologist</span>
            </div>

            <div className={styles.right_part_divs}>
              <span className={styles.right_part_firstspan}>Experience</span>
              <span className={styles.right_part_secspan}>4 Yrs</span>
            </div>

            <div className={styles.right_part_divs}>
              <span className={styles.right_part_firstspan}>
                IMR Registration No.
              </span>
              <span className={styles.right_part_secspan}>
                WB13DOC6R654444
              </span>
            </div>

            <div className={styles.right_part_divs}>
              <button className={styles.right_part_divs_button}>
                Edit Profile
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

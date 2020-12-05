import React from "react";
import styles from "./styles.module.scss";

export const InfoHeader: React.FC = () => {
  return (
    <div className={styles.info_header}>
      <h3 className={styles.header}>
        What is <span className={styles.title_flair}>GreenStack?</span>
      </h3>
      <h4 className={styles.subheader}>
        Join a Community of Learners, Traders, Memers, and Educators.
      </h4>
    </div>
  );
};

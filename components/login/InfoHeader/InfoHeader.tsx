import React from "react";
import styles from "./styles.module.scss";

export const InfoHeader: React.FC = () => {
  return (
    <div className={styles.info_header}>
      <h3 className={styles.header}>
        What is <span className={styles.title_flair}>GreenStack?</span>
      </h3>
      <h4 className={styles.subheader}>
        Join a community of learners, traders, memers, and educators.
      </h4>
    </div>
  );
};

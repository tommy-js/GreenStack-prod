import React from "react";
import styles from "./styles.module.scss";

export const AboutUs: React.FC = () => {
  return (
    <React.Fragment>
      <h2 className={styles.learn_page_header}>Tutorials</h2>
      <p className={styles.about_paragraph}>
        Go through our tutorials to learn about concepts in the stock market.
        Save your progress as you go so you know where you stopped.
      </p>
    </React.Fragment>
  );
};

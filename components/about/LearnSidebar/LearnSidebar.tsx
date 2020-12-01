import React from "react";
import styles from "./styles.module.scss";

export const LearnSidebar: React.FC = () => {
  return (
    <div className={styles.learn_sidebar}>
      <ul className={styles.learn_sidebar_ul}>
        <li className={styles.learn_sidebar_item}>
          <div className={styles.learn_sidebar_button}></div>Getting Started
        </li>
        <li className={styles.learn_sidebar_item}>
          <div className={styles.learn_sidebar_button}></div>What are options
        </li>
        <li className={styles.learn_sidebar_item}>
          <div className={styles.learn_sidebar_button}></div>What is
          "diversification"
        </li>
      </ul>
    </div>
  );
};

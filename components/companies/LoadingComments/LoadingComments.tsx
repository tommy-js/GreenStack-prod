import React from "react";
import styles from "./styles.module.scss";

export const LoadingComments: React.FC = () => {
  return (
    <div className={styles.loading_comments}>
      <div className={styles.spinning_dial_container}>
        <div className={styles.spinning_dial_general}></div>
      </div>
      <p className={styles.loading}>Loading!</p>
    </div>
  );
};

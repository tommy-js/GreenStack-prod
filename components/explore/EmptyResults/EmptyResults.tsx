import React from "react";
import styles from "./styles.module.scss";
const nothingFound = require("../../../../public/nothing_found.png");

export const EmptyResults: React.FC = () => {
  return (
    <div className={styles.empty_results}>
      <p className={styles.text}>Nothing Found!</p>
      <div className={styles.image_container}>
        <img className={styles.image} src={nothingFound} />
      </div>
    </div>
  );
};

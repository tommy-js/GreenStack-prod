import React from "react";
import styles from "./styles.module.scss";
const empty_vault = require("../../../public/bank_vault.png");

export const NoResults: React.FC = () => {
  return (
    <div className={styles.no_results}>
      <h1 className={styles.text}>Nothing Found</h1>
      <div className={styles.image_block}>
        <img className={styles.image} src={empty_vault} />
      </div>
    </div>
  );
};

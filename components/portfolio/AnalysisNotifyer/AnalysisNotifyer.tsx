import React from "react";
import styles from "./styles.module.scss";
const analysis = require("../../../public/analysis.png");

export const AnalysisNotifyer: React.FC = () => {
  return (
    <div className={styles.analysis_notifyer}>
      <div className={styles.image_block}>
        <img className={styles.image} src={analysis} />
      </div>
      <h1 className={styles.header}>
        Add An Owned Stock to See Your Portfolio Analysis
      </h1>
    </div>
  );
};

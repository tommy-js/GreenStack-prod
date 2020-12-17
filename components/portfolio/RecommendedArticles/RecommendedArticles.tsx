import React from "react";
import styles from "./styles.module.scss";

export const RecommendedArticles: React.FC = () => {
  return (
    <div className={styles.recommended_articles}>
      <h1 className={styles.header}>Your Recommended Tutorials</h1>
      <div className={styles.recommended_block}>
        <div className={styles.recommended}>
          <div className={styles.recommended_inner}>
            <p>Diversification</p>
          </div>
        </div>
        <div className={styles.recommended}>
          <div className={styles.recommended_inner}>
            <p>Options</p>
          </div>
        </div>
        <div className={styles.recommended}>
          <div className={styles.recommended_inner}>
            <p>Dividends</p>
          </div>
        </div>
      </div>
    </div>
  );
};

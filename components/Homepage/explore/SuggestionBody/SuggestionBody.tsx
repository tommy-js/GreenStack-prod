import React from "react";
import styles from "./styles.module.scss";

export const SuggestionBody: React.FC = () => {
  return (
    <div className={styles.suggestion_body}>
      <input className={styles.title} placeholder="Name" />
      <input className={styles.ticker} placeholder="#Ticker" />
    </div>
  );
};

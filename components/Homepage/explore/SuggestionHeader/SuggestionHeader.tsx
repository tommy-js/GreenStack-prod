import React from "react";
import styles from "./styles.module.scss";

export const SuggestionHeader: React.FC = () => {
  return (
    <div className={styles.suggestion_header}>
      <h1 className={styles.header}>Couldn't find what you're looking for?</h1>
      <h2 className={styles.subheader}>Suggest a stock and we'll add it!</h2>
    </div>
  );
};

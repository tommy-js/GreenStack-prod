import React from "react";
import { NavBar } from "../../navigation/NavBar/NavBar";
import styles from "./styles.module.scss";

export const LearnGlossaryPage: React.FC = () => {
  return (
    <div>
      <NavBar />
      <div className={styles.learn_page}>
        <h2 className={styles.glossary_header}>Important Terms</h2>
        <div className={styles.glossary_term}>
          <span className={styles.emphasize}>Share:</span> a tiny portion of a
          company owned by you, the investor.
        </div>
        <div className={styles.glossary_term}>
          <span className={styles.emphasize}>Option:</span> a contract to buy or
          sell shares at a predetermined price by a specific day.
        </div>
        <div className={styles.glossary_term}>
          <span className={styles.emphasize}>Call:</span> an option contract
          betting that the stock price will rise.
        </div>
        <div className={styles.glossary_term}>
          <span className={styles.emphasize}>Put:</span> an option contract
          betting that the stock price will fall.
        </div>
        <div className={styles.glossary_term}>
          <span className={styles.emphasize}>Premium:</span> the price you pay
          when you purchase a call option.
        </div>
        <div className={styles.glossary_term}>
          <span className={styles.emphasize}>:</span>
        </div>
      </div>
    </div>
  );
};

import React from "react";
import styles from "./styles.module.scss";

export const InitialPortfolioWelcome: React.FC = () => {
  return (
    <h2 className={styles.initial_portfolio_welcome_header}>
      Welcome to Your Portfolio!
    </h2>
  );
};

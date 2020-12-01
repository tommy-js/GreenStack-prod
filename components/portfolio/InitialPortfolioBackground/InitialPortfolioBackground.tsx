import React from "react";
const portfolio_background = require("../../../public/portfolio_background.png");
import styles from "./styles.module.scss";

export const InitialPortfolioBackground: React.FC = () => {
  return (
    <div className={styles.portfolio_background_container}>
      <img className={styles.portfolio_background} src={portfolio_background} />
    </div>
  );
};

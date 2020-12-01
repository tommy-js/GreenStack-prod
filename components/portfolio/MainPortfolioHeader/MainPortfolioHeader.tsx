import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
}

export const MainPortfolioHeader: React.FC<Props> = (props) => {
  return <h1 className={styles.main_portfolio_header}>{props.text}</h1>;
};

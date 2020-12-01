import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
}

export const PortfolioHeader: React.FC<Props> = (props) => {
  return <h2 className={styles.portfolio_header}>{props.text}</h2>;
};

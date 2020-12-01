import React, { useEffect, useState } from "react";
import { returnStyles } from "./index";
import styles from "./styles.module.scss";

interface Props {
  showSubContainer: boolean;
}

export const InitialPortfolioSubContainer: React.FC<Props> = (props) => {
  const [blockStyles, setBlockStyles] = useState({ display: "block" });

  useEffect(() => {
    let updatedStyles = returnStyles(props.showSubContainer);
    setBlockStyles(updatedStyles);
  }, [props.showSubContainer]);

  return (
    <div style={blockStyles} className={styles.initial_portfolio_sub_container}>
      <p className={styles.initial_portfolio_sub_container_text}>
        Add a stock to your watchlist to get started
      </p>
    </div>
  );
};

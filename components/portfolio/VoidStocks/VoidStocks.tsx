import React, { useState } from "react";
import { StockSearchBox } from "./../StockSearchBox/StockSearchBox";
import { OwnedStocksDropdown } from "../StocksDropdown/StocksDropdown";
import styles from "./styles.module.scss";
const empty = require("../../../public/bank_vault.png");

export const VoidStocks: React.FC = () => {
  const [results, setResults] = useState([] as any);

  return (
    <div className={styles.void_stocks}>
      <div className={styles.image_block}>
        <img className={styles.image} src={empty} />
      </div>
      <h1 className={styles.header}>Add a stock you own!</h1>
      <StockSearchBox modResults={(res) => setResults(res)} />
      <OwnedStocksDropdown stocks={results} />
    </div>
  );
};

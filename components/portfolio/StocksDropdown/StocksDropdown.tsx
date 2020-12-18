import React from "react";
import { IndividualWatchlistStockDropdown } from "../IndividualWatchlistStockDropdown/IndividualWatchlistStockDropdown";
import { IndividualOwnedStockDropdown } from "../IndividualOwnedStockDropdown/IndividualOwnedStockDropdown";
import styles from "./styles.module.scss";
const list = require("../../../public/list.png");

type Stocks = {
  country: string;
  description: string;
  sector: string;
  shares: number;
  stockId: string;
  ticker: string;
  title: string;
  color: string;
};

interface Props {
  stocks: Stocks[];
}

export const WatchlistStocksDropdown: React.FC<Props> = (props) => {
  function returnStocks() {
    if (props.stocks.length > 0) {
      return (
        <div>
          {props.stocks.map((el: Stocks) => (
            <IndividualWatchlistStockDropdown
              stockId={el.stockId}
              title={el.title}
              ticker={el.ticker}
              sector={el.sector}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <div className={styles.image_block}>
            <img src={list} className={styles.image} />
          </div>
          <p className={styles.image_text}>Search for some stocks...</p>
        </div>
      );
    }
  }

  return (
    <div className={styles.watchlist_stocks_dropdown}>{returnStocks()}</div>
  );
};

export const OwnedStocksDropdown: React.FC<Props> = (props) => {
  function returnStocks() {
    if (props.stocks.length > 0) {
      return (
        <div>
          {props.stocks.map((el: Stocks) => (
            <IndividualOwnedStockDropdown
              stockId={el.stockId}
              title={el.title}
              ticker={el.ticker}
              sector={el.sector}
              color={el.color}
            />
          ))}
        </div>
      );
    } else {
      return (
        <div>
          <div className={styles.image_block}>
            <img src={list} className={styles.image} />
          </div>
          <p className={styles.image_text}>Search for some stocks...</p>
        </div>
      );
    }
  }

  return (
    <div className={styles.watchlist_stocks_dropdown}>{returnStocks()}</div>
  );
};

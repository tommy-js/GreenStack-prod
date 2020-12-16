import React, { useState } from "react";
import { OwnedElement } from "../OwnedElement/OwnedElement";
import { StockSearchBox } from "./../StockSearchBox/StockSearchBox";
import { OwnedStocksDropdown } from "../StocksDropdown/StocksDropdown";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

type StockItem = {
  stockId: string;
  title: string;
  shares: number;
  color: string;
  ticker: string;
};

interface Redux {
  stocks: StockItem[];
}

const OwnedStocksRender: React.FC<Redux> = (props) => {
  const [results, setResults] = useState([] as any);

  return (
    <div className={styles.owned_stocks}>
      {props.stocks.map((el: StockItem) => (
        <OwnedElement
          title={el.title}
          stockId={el.stockId}
          ticker={el.ticker}
          shares={el.shares}
        />
      ))}
      <StockSearchBox modResults={(res) => setResults(res)} />
      <OwnedStocksDropdown stocks={results} />
    </div>
  );
};

export const OwnedStocks = connect(mapStateToProps)(OwnedStocksRender);

import React, { useState, useEffect } from "react";
import { WatchlistElement } from "../WatchlistElement/WatchlistElement";
import { StockSearchBox } from "./../StockSearchBox/StockSearchBox";
import { WatchlistStocksDropdown } from "../StocksDropdown/StocksDropdown";
import { WatchlistStats } from "../WatchlistStats/WatchlistStats";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";

interface Keys {
  keyId: number;
  stockId: string;
  title: string;
  ticker: string;
  sector: string;
}

interface Redux {
  watchlist: Keys[];
}

const WatchStocksRender: React.FC<Redux> = (props) => {
  const industriesObj = [
    { title: "Raw Materials", value: 0 },
    { title: "Agriculture", value: 0 },
    { title: "Manufacturing", value: 0 },
    { title: "Utilities", value: 0 },
    { title: "Construction", value: 0 },
    { title: "Technology", value: 0 },
    { title: "Retail", value: 0 },
    { title: "Medicine", value: 0 },
    { title: "Financial Services", value: 0 },
    { title: "Communication", value: 0 },
    { title: "Transportation", value: 0 },
    { title: "Hospitality", value: 0 },
    { title: "Advertizing", value: 0 },
    { title: "Media", value: 0 },
    { title: "Food Production", value: 0 },
    { title: "Food Services", value: 0 },
    { title: "Real Estate", value: 0 },
  ];
  const [results, setResults] = useState([] as any);
  const [industryCount, setIndustryCount] = useState(0);
  const [industries, setIndustries] = useState(industriesObj);

  useEffect(() => {
    setIndustries(industriesObj);
    setIndustryCount(0);
    for (let i = 0; i < props.watchlist.length; i++) {
      let j = 0;
      let stockObj = props.watchlist[i];
      switch (stockObj.sector) {
        case "Raw Materials":
          j = 0;
          break;
        case "Agriculture":
          j = 1;
          break;
        case "Manufacturing":
          j = 2;
          break;
        case "Utilities":
          j = 3;
          break;
        case "Construction":
          j = 4;
          break;
        case "Technology":
          j = 5;
          break;
        case "Retail":
          j = 6;
          break;
        case "Medical":
          j = 7;
          break;
        case "Financial Services":
          j = 8;
          break;
        case "Communication":
          j = 9;
          break;
        case "Transportation":
          j = 10;
          break;
        case "Hospitality":
          j = 11;
          break;
        case "Advertizing":
          j = 12;
          break;
        case "Media":
          j = 13;
          break;
        case "Food Production":
          j = 14;
          break;
        case "Food Services":
          j = 15;
          break;
        case "Real Estate":
          j = 16;
          break;
      }
      industriesObj[j].value += 1;
    }
    setIndustries(industriesObj);
    setIndustryCount(countIndustries(industriesObj));
  }, [props.watchlist]);

  function countIndustries(array: any) {
    let u = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].value > 0) u++;
    }
    return u;
  }

  return (
    <div className={styles.watchlist}>
      <div className={styles.watchlist_box}>
        {props.watchlist.map((el: Keys) => (
          <WatchlistElement
            stockId={el.stockId}
            key={el.keyId}
            title={el.title}
            ticker={el.ticker}
            sector={el.sector}
          />
        ))}
      </div>
      <div className={styles.stats_box}>
        <WatchlistStats watchlist={industries} />
      </div>
      <StockSearchBox modResults={(res) => setResults(res)} />
      <WatchlistStocksDropdown stocks={results} />
    </div>
  );
};

export const WatchStocks = connect(mapStateToProps)(WatchStocksRender);

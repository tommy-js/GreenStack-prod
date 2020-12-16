import React from "react";
import { Assets } from "../Assets/Assets";
import { WatchStocks } from "../WatchStocks/WatchStocks";
import { MainPortfolioHeader } from "../MainPortfolioHeader/MainPortfolioHeader";
import { PortfolioHeader } from "../PortfolioHeader/PortfolioHeader";
import { OwnedStocks } from "../OwnedStocks/OwnedStocks";
import { PortfolioAnalysis } from "../PortfolioAnalysis/PortfolioAnalysis";
import { AnalysisNotifyer } from "../AnalysisNotifyer/AnalysisNotifyer";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../components/actions/actions";
import styles from "./styles.module.scss";

interface Redux {
  stocks: any;
}

const DefaultPortfolioRedux: React.FC<Redux> = (props) => {
  function returnAnalysis() {
    if (props.stocks.length > 0) {
      return <PortfolioAnalysis stocks={props.stocks} />;
    } else return <AnalysisNotifyer />;
  }

  return (
    <div className={styles.portfolio}>
      <MainPortfolioHeader text="Your Portfolio" />
      <PortfolioHeader text="Your Stocks" />
      <OwnedStocks />
      <PortfolioHeader text="Watchlist" />
      <WatchStocks />
      {returnAnalysis()}
    </div>
  );
};

export const DefaultPortfolio = connect(mapStateToProps)(DefaultPortfolioRedux);

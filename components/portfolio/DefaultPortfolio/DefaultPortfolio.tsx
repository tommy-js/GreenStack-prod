import React from "react";
import { Assets } from "../Assets/Assets";
import { WatchStocks } from "../WatchStocks/WatchStocks";
import { PortfolioData } from "../PortfolioData/PortfolioData";
import { MainPortfolioHeader } from "../MainPortfolioHeader/MainPortfolioHeader";
import { PortfolioHeader } from "../PortfolioHeader/PortfolioHeader";
import { OwnedStocks } from "../OwnedStocks/OwnedStocks";
import { IndustryInvolvementChart } from "../IndustryInvolvementChart/IndustryInvolvementChart";
import styles from "./styles.module.scss";

export const DefaultPortfolio: React.FC = () => {
  return (
    <div className={styles.portfolio}>
      <MainPortfolioHeader text="Your Portfolio" />
      <PortfolioHeader text="Your Stocks" />
      <OwnedStocks />
      <PortfolioHeader text="Watchlist" />
      <WatchStocks />
      <PortfolioData />
      <IndustryInvolvementChart />
    </div>
  );
};

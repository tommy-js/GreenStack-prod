import React from "react";
import { IndustryInvolvementChart } from "../IndustryInvolvementChart/IndustryInvolvementChart";
import { AssetBreakdown } from "../AssetBreakdown/AssetBreakdown";
import { PortfolioAnalysisStats } from "../PortfolioAnalysisStats/PortfolioAnalysisStats";
import styles from "./styles.module.scss";

interface Props {
  stocks: any;
}

export const PortfolioAnalysis: React.FC<Props> = (props) => {
  return (
    <div className={styles.portfolio_analysis}>
      <h1 className={styles.header}>Analysis</h1>
      <PortfolioAnalysisStats stocks={props.stocks} />
      <AssetBreakdown />
      <IndustryInvolvementChart />
    </div>
  );
};

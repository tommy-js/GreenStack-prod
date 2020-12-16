import React, { useState, useEffect } from "react";
import { AssetChart } from "../AssetChart/AssetChart";
import styles from "./styles.module.scss";

interface Props {
  stocks: any;
}

export const PortfolioAnalysisStats: React.FC<Props> = (props) => {
  const [industryCount, setIndustryCount] = useState(0);
  const [industries, setIndustries] = useState([
    { title: "RawMaterials", value: 0 },
    { title: "Agriculture", value: 0 },
    { title: "Manufacturing", value: 0 },
    { title: "Utilities", value: 0 },
    { title: "Construction", value: 0 },
    { title: "Technology", value: 0 },
    { title: "Retail", value: 0 },
    { title: "Medicine", value: 0 },
    { title: "FinancialServices", value: 0 },
    { title: "Communication", value: 0 },
    { title: "Transportation", value: 0 },
    { title: "Hospitality", value: 0 },
    { title: "Advertizing", value: 0 },
    { title: "Media", value: 0 },
    { title: "FoodProduction", value: 0 },
    { title: "FoodServices", value: 0 },
    { title: "RealEstate", value: 0 },
  ]);

  useEffect(() => {
    let industriesObject = [...industries];
    for (let i = 0; i < props.stocks.length; i++) {
      let j = 0;
      let stockObj = props.stocks[i];
      console.log(stockObj);
      switch (stockObj.sector) {
        case "Raw Materials":
          j = 1;
          break;
        case "Agriculture":
          j = 2;
          break;
        case "Manufacturing":
          j = 3;
          break;
        case "Utilities":
          j = 4;
          break;
        case "Construction":
          j = 5;
          break;
        case "Technology":
          j = 6;
          break;
        case "Retail":
          j = 7;
          break;
        case "Medicine":
          j = 8;
          break;
        case "Financial Services":
          j = 9;
          break;
        case "Communication":
          j = 10;
          break;
        case "Transportation":
          j = 11;
          break;
        case "Hospitality":
          j = 12;
          break;
        case "Advertizing":
          j = 13;
          break;
        case "Media":
          j = 14;
          break;
        case "Food Production":
          j = 15;
          break;
        case "Food Services":
          j = 16;
          break;
        case "Real Estate":
          j = 17;
          break;
      }
      industriesObject[j].value += 1;
    }
    setIndustries(industriesObject);
    console.log(industriesObject);
  }, []);

  return (
    <div className={styles.portfolio_analysis_stats}>
      <div className={styles.left_container}>
        <AssetChart />
      </div>
      <div className={styles.right_container}>
        <h2>The Basics</h2>
        <p>You own stock in {props.stocks.length} companies across .</p>
      </div>
    </div>
  );
};

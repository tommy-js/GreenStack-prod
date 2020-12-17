import React, { useState, useEffect } from "react";
import { AssetChart } from "../AssetChart/AssetChart";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  stocks: any;
}

export const PortfolioAnalysisStats: React.FC<Props> = (props) => {
  const [diversificationScore, setDiversificationScore] = useState(0);
  const [industryCount, setIndustryCount] = useState(0);
  const [industries, setIndustries] = useState([
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
  ]);

  useEffect(() => {
    let industriesObject = [...industries];
    for (let i = 0; i < props.stocks.length; i++) {
      let j = 0;
      let stockObj = props.stocks[i];
      console.log(stockObj);
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
        case "Medicine":
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
      industriesObject[j].value += 1;
    }
    setIndustries(industriesObject);
    setIndustryCount(countIndustries(industriesObject));
  }, []);

  function countIndustries(array: any) {
    let u = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].value > 0) u++;
    }
    returnScore(u);
    return u;
  }

  function returnScore(value: number) {
    let score = Math.floor((value / 17) * 100);
    setDiversificationScore(score);
  }

  function returnEmptyIndustries() {
    let nullIndustries = [];
    if (industryCount != 17) {
      for (let i = 0; i < 17; i++) {
        if (industries[i].value === 0) {
          nullIndustries.push(industries[i].title);
        }
      }
      return (
        <div className={styles.null_industries}>
          <p>You do not hold any shares in the following industries:</p>
          {nullIndustries.map((el: any) => (
            <span className={styles.null_element}> {el},</span>
          ))}
        </div>
      );
    } else return null;
  }

  return (
    <div className={styles.portfolio_analysis_stats}>
      <div className={styles.left_container}>
        <AssetChart industries={industries} />
      </div>
      <div className={styles.right_container}>
        <h2 className={styles.header}>The Basics</h2>
        <p className={styles.text}>
          You own stock in {props.stocks.length} companies across{" "}
          {industryCount} industries.
          {returnEmptyIndustries()}
        </p>
        <p className={styles.text}>
          Your diversification score is{" "}
          <Link href="/about/learn/protection">
            <span className={styles.score}>{diversificationScore}%</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

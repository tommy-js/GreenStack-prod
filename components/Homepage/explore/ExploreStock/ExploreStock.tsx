import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Stock {
  stockId: string;
  title: string;
  ticker: string;
  sector: string;
  price: number;
  marketcap: number;
}

export const ExploreStock: React.FC<Stock> = (props) => {
  return (
    <div className={styles.explore_component}>
      <Link href={`/home/stock/${props.stockId}`}>
        <a className={styles.explore_component_link}>{props.title}</a>
      </Link>
      <p>
        {props.title} #{props.ticker}
      </p>
      <p>{props.sector}</p>
      <p>
        price: {props.price}, marketcap: {props.marketcap}
      </p>
    </div>
  );
};

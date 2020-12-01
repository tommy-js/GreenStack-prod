import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  key: number;
  stockId: string;
  title: string;
  ticker: string;
}

export const WatchlistElement: React.FC<Props> = (props) => {
  return (
    <React.Fragment>
      <Link href={`/home/stock/${props.stockId}`}>
        <a>{props.title}</a>
      </Link>
      <p
        key={props.key}
        className={`${styles.watch_listing_link} ${styles.watch_listing}`}
      >
        {props.title}{" "}
        <span className={styles.watch_listing_ticker_span}>
          #{props.ticker}
        </span>
      </p>
    </React.Fragment>
  );
};

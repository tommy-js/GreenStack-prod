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
    <Link href={`/stock/${props.stockId}`}>
      <WatchlistLink
        title={props.title}
        ticker={props.ticker}
        key={props.key}
      />
    </Link>
  );
};

const WatchlistLink = React.forwardRef(
  ({ onClick, href, title, key, ticker }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <p
          key={key}
          className={`${styles.watch_listing_link} ${styles.watch_listing}`}
        >
          {title}{" "}
          <span className={styles.watch_listing_ticker_span}>#{ticker}</span>
        </p>
      </a>
    );
  }
);

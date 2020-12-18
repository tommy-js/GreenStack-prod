import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  key: number;
  stockId: string;
  title: string;
  ticker: string;
  sector: string;
}

export const WatchlistElement: React.FC<Props> = (props) => {
  return (
    <Link href={`/stock/${props.stockId}`}>
      <WatchlistLink
        title={props.title}
        ticker={props.ticker}
        key={props.key}
        sector={props.sector}
      />
    </Link>
  );
};

const WatchlistLink = React.forwardRef(
  ({ onClick, href, title, key, ticker, sector }, ref) => {
    return (
      <a className={styles.link} href={href} onClick={onClick} ref={ref}>
        <p key={key} className={styles.text}>
          {title} <span className={styles.ticker}>#{ticker}</span>
          <span className={styles.sector}>{sector}</span>
        </p>
      </a>
    );
  }
);

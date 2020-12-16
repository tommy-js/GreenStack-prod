import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  ticker: string;
  stockId: string;
  shares: number;
  sector: string;
}

export const OwnedElement: React.FC<Props> = (props) => {
  return (
    <div className={styles.owned_element}>
      <div className={styles.inner_container}>
        <div className={styles.header}>
          <Link href={`/stock/${props.stockId}`}>
            <span className={styles.title}>{props.title}</span>
          </Link>
          <span className={styles.ticker}>#{props.ticker}</span>
        </div>
        <span className={styles.shares}>{props.shares}</span>
      </div>
    </div>
  );
};

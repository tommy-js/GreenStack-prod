import React, { useState } from "react";
import { OwnedStockSpec } from "../OwnedStockSpec/OwnedStockSpec";
import Link from "next/link";
import styles from "./styles.module.scss";

interface Props {
  stockId: string;
  title: string;
  ticker: string;
  sector: string;
  color: string;
}

export const IndividualOwnedStockDropdown: React.FC<Props> = (props) => {
  const [show, setShow] = useState(false);

  return (
    <div className={styles.individual_stock_dropdown}>
      <Link href={`/stock/${props.stockId}`}>
        <p
          className={styles.individual_stock_dropdown_text}
          onClick={() => setShow(!show)}
        >
          {props.title}
        </p>
      </Link>
      <OwnedStockSpec
        stockId={props.stockId}
        title={props.title}
        ticker={props.ticker}
        sector={props.sector}
        color={props.color}
      />
    </div>
  );
};

import React from "react";
import Link from "next/link";
import "./styles.module.scss";

interface Props {
  key: number;
  stockId: string;
  title: string;
  ticker: string;
}

export const WatchlistElement: React.FC<Props> = (props) => {
  return (
    <Link href={`/home/stock/${props.stockId}`}>
      <p key={props.key} className="watch_listing_link watch_listing">
        {props.title}{" "}
        <span className="watch_listing_ticker_span">#{props.ticker}</span>
      </p>
    </Link>
  );
};

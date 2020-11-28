import React from "react";
import { TickerContainer } from "../TickerContainer/TickerContainer";

import "./styles.module.scss";

export const TickerList: React.FC = () => {
  const tickers = [
    {
      ticker: "AAPL",
      image: apple,
      colorImg: apple_color,
    },
    {
      ticker: "V",
      image: visa,
      colorImg: visa_color,
    },
    {
      ticker: "VLVLY",
      image: volvo,
      colorImg: volvo_color,
    },
    {
      ticker: "MSFT",
      image: microsoft,
      colorImg: microsoft_color,
    },
    {
      ticker: "SHOP",
      image: shopify,
      colorImg: shopify_color,
    },
    {
      ticker: "TWTR",
      image: twitter,
      colorImg: twitter_color,
    },
    {
      ticker: "FB",
      image: facebook,
      colorImg: facebook_color,
    },
    {
      ticker: "WMT",
      image: walmart,
      colorImg: walmart_color,
    },
    {
      ticker: "TSCDY",
      image: tesco,
      colorImg: tesco_color,
    },
    {
      ticker: "C",
      image: citigroup,
      colorImg: citigroup_color,
    },
    {
      ticker: "AMZ",
      image: amazon,
      colorImg: amazon_color,
    },
    {
      ticker: "SBUX",
      image: starbucks,
      colorImg: starbucks_color,
    },
    {
      ticker: "MCD",
      image: mcdonalds,
      colorImg: mcdonalds_color,
    },
    {
      ticker: "WORK",
      image: slack,
      colorImg: slack_color,
    },
    {
      ticker: "NFLX",
      image: netflix,
      colorImg: netflix_color,
    },
    {
      ticker: "DBX",
      image: dropbox,
      colorImg: dropbox_color,
    },
  ];

  return (
    <div className="ticker_list">
      {tickers.map((el: any) => (
        <TickerContainer
          ticker={el.ticker}
          image={el.image}
          colorImg={el.colorImg}
        />
      ))}
    </div>
  );
};

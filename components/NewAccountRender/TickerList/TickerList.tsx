import React from "react";
import { TickerContainer } from "../TickerContainer/TickerContainer";
const tech = require("../../../public/tech.png");
const industry = require("../../../public/industry.png");
const service = require("../../../public/tech.png");
const transportation = require("../../../public/tech.png");

import "./styles.module.scss";

export const TickerList: React.FC = () => {
  const tickers = [
    {
      ticker: "AAPL",
      title: "apple",
      img: tech,
    },
    {
      ticker: "V",
      title: "visa",
      img: service,
    },
    {
      ticker: "VLVLY",
      title: "volvo",
      img: transportation,
    },
    {
      ticker: "MSFT",
      title: "microsoft",
      img: tech,
    },
    {
      ticker: "SHOP",
      title: "shopify",
      img: tech,
    },
    {
      ticker: "TWTR",
      title: "twitter",
      img: tech,
    },
    {
      ticker: "FB",
      title: "facebook",
      img: tech,
    },
    {
      ticker: "WMT",
      title: "walmart",
      img: industry,
    },
    {
      ticker: "TSCDY",
      title: "tesco",
      img: industry,
    },
    {
      ticker: "C",
      title: "citigroup",
      img: service,
    },
    {
      ticker: "AMZ",
      title: "amazon",
      img: tech,
    },
    {
      ticker: "SBUX",
      title: "starbucks",
      img: service,
    },
    {
      ticker: "MCD",
      title: "mcdonalds",
      img: service,
    },
    {
      ticker: "WORK",
      title: "slack",
      img: tech,
    },
    {
      ticker: "NFLX",
      title: "netflix",
      img: tech,
    },
    {
      ticker: "DBX",
      title: "dropbox",
      img: tech,
    },
  ];

  return (
    <div className="ticker_list">
      {tickers.map((el: any) => (
        <TickerContainer ticker={el.ticker} title={el.title} img={el.img} />
      ))}
    </div>
  );
};

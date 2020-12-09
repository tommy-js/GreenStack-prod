import React from "react";
import { TickerContainer } from "../TickerContainer/TickerContainer";
const tech = require("../../../public/tech.png");
const filledTech = require("../../../public/tech_filled.png");
const industry = require("../../../public/industry.png");
const filledIndustry = require("../../../public/industry_filled.png");
const service = require("../../../public/service.png");
const filledService = require("../../../public/service_filled.png");
const transportation = require("../../../public/transportation.png");
const filledTransportation = require("../../../public/transportation_filled.png");

interface Props {
  modSelected: (stockId: string) => void;
}

import styles from "./styles.module.scss";

export const TickerList: React.FC<Props> = (props) => {
  const tickers = [
    {
      ticker: "AAPL",
      title: "Apple",
      img: tech,
      filledImg: filledTech,
      stockId: "01",
    },
    {
      ticker: "V",
      title: "Visa",
      img: service,
      filledImg: filledService,
      stockId: "02",
    },
    {
      ticker: "VLVLY",
      title: "Volvo",
      img: transportation,
      filledImg: filledTransportation,
      stockId: "03",
    },
    {
      ticker: "MSFT",
      title: "Microsoft",
      img: tech,
      filledImg: filledTech,
      stockId: "04",
    },
    {
      ticker: "SHOP",
      title: "Shopify",
      img: tech,
      filledImg: filledTech,
      stockId: "05",
    },
    {
      ticker: "TWTR",
      title: "Twitter",
      img: tech,
      filledImg: filledTech,
      stockId: "06",
    },
    {
      ticker: "FB",
      title: "Facebook",
      img: tech,
      filledImg: filledTech,
      stockId: "07",
    },
    {
      ticker: "WMT",
      title: "Walmart",
      img: industry,
      filledImg: filledIndustry,
      stockId: "08",
    },
    {
      ticker: "TSCDY",
      title: "Tesco",
      img: industry,
      filledImg: filledIndustry,
      stockId: "09",
    },
    {
      ticker: "C",
      title: "Citigroup",
      img: service,
      filledImg: filledService,
      stockId: "10",
    },
    {
      ticker: "AMZ",
      title: "Amazon",
      img: tech,
      filledImg: filledTech,
      stockId: "11",
    },
    {
      ticker: "SBUX",
      title: "Starbucks",
      img: service,
      filledImg: filledService,
      stockId: "12",
    },
    {
      ticker: "MCD",
      title: "McDonalds",
      img: service,
      filledImg: filledService,
      stockId: "13",
    },
    {
      ticker: "WORK",
      title: "Slack",
      img: tech,
      filledImg: filledTech,
      stockId: "14",
    },
    {
      ticker: "NFLX",
      title: "Netflix",
      img: tech,
      filledImg: filledTech,
      stockId: "15",
    },
    {
      ticker: "DBX",
      title: "Dropbox",
      img: tech,
      filledImg: filledTech,
      stockId: "16",
    },
  ];

  return (
    <div className={styles.ticker_list}>
      {tickers.map((el: any) => (
        <TickerContainer
          key={el.stockId}
          ticker={el.ticker}
          title={el.title}
          img={el.img}
          filledImg={el.filledImg}
          stockId={el.stockId}
          modSelected={props.modSelected}
        />
      ))}
    </div>
  );
};

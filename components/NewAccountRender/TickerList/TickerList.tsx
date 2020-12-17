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
  modSelected: (passObj: any) => void;
}

import styles from "./styles.module.scss";

export const TickerList: React.FC<Props> = (props) => {
  const tickers = [
    {
      ticker: "AAPL",
      title: "Apple",
      img: tech,
      filledImg: filledTech,
      stockId: "d09a46e3-9edf-4c15-a9c6-fcabca281146",
    },
    {
      ticker: "V",
      title: "Visa",
      img: service,
      filledImg: filledService,
      stockId: "a70640c3-2424-45ab-9021-46b3d57e28c0",
    },
    {
      ticker: "VLVLY",
      title: "Volvo",
      img: transportation,
      filledImg: filledTransportation,
      stockId: "3a6baec0-213a-46c7-ba43-aaaf1d9d105c",
    },
    {
      ticker: "MSFT",
      title: "Microsoft",
      img: tech,
      filledImg: filledTech,
      stockId: "e879e35a-9a81-48d7-8a71-423ef48d6820",
    },
    {
      ticker: "SHOP",
      title: "Shopify",
      img: tech,
      filledImg: filledTech,
      stockId: "f4585e6f-e881-49e2-85f5-8603b365833c",
    },
    {
      ticker: "TWTR",
      title: "Twitter",
      img: tech,
      filledImg: filledTech,
      stockId: "c938777e-9977-448f-8271-ff9a31a2a910",
    },
    {
      ticker: "FB",
      title: "Facebook",
      img: tech,
      filledImg: filledTech,
      stockId: "d5090767-88ea-4c88-b60f-a6b5e27e0b9e",
    },
    {
      ticker: "WMT",
      title: "Walmart",
      img: industry,
      filledImg: filledIndustry,
      stockId: "fc93af0b-8c89-4914-9a07-63cf72e20ca8",
    },
    {
      ticker: "TSCDY",
      title: "Tesco",
      img: industry,
      filledImg: filledIndustry,
      stockId: "c4bca9de-8468-4998-8d74-94cc0e5fb620",
    },
    {
      ticker: "C",
      title: "Citigroup",
      img: service,
      filledImg: filledService,
      stockId: "379d5958-c9ca-4ba8-a2e9-d99e877d5a82",
    },
    {
      ticker: "AMZ",
      title: "Amazon",
      img: service,
      filledImg: filledService,
      stockId: "1df5d397-3295-4a33-94fd-0f5ca3e2d1e6",
    },
    {
      ticker: "SBUX",
      title: "Starbucks",
      img: service,
      filledImg: filledService,
      stockId: "a656e7d5-4c6c-4efb-adb5-561bf4de4d38",
    },
    {
      ticker: "MCD",
      title: "McDonald's",
      img: service,
      filledImg: filledService,
      stockId: "4103ef02-8d24-43fb-aadc-5ec28fda3b30",
    },
    {
      ticker: "WORK",
      title: "Slack",
      img: tech,
      filledImg: filledTech,
      stockId: "850b742f-2716-4710-b7d1-be8923ee7f12",
    },
    {
      ticker: "NFLX",
      title: "Netflix",
      img: tech,
      filledImg: filledTech,
      stockId: "71e6c8ab-4c0c-49d6-94ed-678bfee5080b",
    },
    {
      ticker: "DBX",
      title: "Dropbox",
      img: tech,
      filledImg: filledTech,
      stockId: "8087c6b9-1232-4bba-bfcd-fccc6c0ac8f6",
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

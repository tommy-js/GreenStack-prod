import React from "react";
import { TickerContainer } from "../TickerContainer/TickerContainer";
const apple = require("../../images/apple_logo.png");
const apple_color = require("../../images/apple_logo_color.png");
const microsoft = require("../../images/windows_logo.png");
const microsoft_color = require("../../images/windows_logo_color.png");
const shopify = require("../../images/shopify_logo.png");
const shopify_color = require("../../images/shopify_logo_color.png");
const twitter = require("../../images/twitter_logo.png");
const twitter_color = require("../../images/twitter_logo_color.png");
const amazon = require("../../images/amazon_logo.png");
const amazon_color = require("../../images/amazon_logo_color.png");
const facebook = require("../../images/facebook_logo.png");
const facebook_color = require("../../images/facebook_logo_color.png");
const walmart = require("../../images/walmart_logo.png");
const walmart_color = require("../../images/walmart_logo_color.png");
const tesco = require("../../images/tesco_logo.png");
const tesco_color = require("../../images/tesco_logo_color.png");
const starbucks = require("../../images/starbucks_logo.png");
const starbucks_color = require("../../images/starbucks_logo_color.png");
const mcdonalds = require("../../images/mcdonalds_logo.png");
const mcdonalds_color = require("../../images/mcdonalds_logo_color.png");
const slack = require("../../images/slack_logo.png");
const slack_color = require("../../images/slack_logo_color.png");
const citigroup = require("../../images/citigroup_logo.png");
const citigroup_color = require("../../images/citigroup_logo_color.png");
const visa = require("../../images/visa_logo.png");
const visa_color = require("../../images/visa_logo_color.png");
const volvo = require("../../images/volvo_logo.png");
const volvo_color = require("../../images/volvo_logo_color.png");
const netflix = require("../../images/netflix_logo.png");
const netflix_color = require("../../images/netflix_logo_color.png");
const dropbox = require("../../images/dropbox_logo.png");
const dropbox_color = require("../../images/dropbox_logo_color.png");
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

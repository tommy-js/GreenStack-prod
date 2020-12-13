import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const usaFlag = require("../../../public/usa_flag.png");
const germanFlag = require("../../../public/german_flag.png");
const indiaFlag = require("../../../public/india_flag.png");
const netherlandsFlag = require("../../../public/netherlands.png");
const englandFlag = require("../../../public/england_flag.png");
const chinaFlag = require("../../../public/china_flag.png");
const russiaFlag = require("../../../public/russia_flag.png");
const southKoreaFlag = require("../../../public/south_korea_flag.png");
const swedishFlag = require("../../../public/swedish_flag.png");
const swissFlag = require("../../../public/switzerland.png");
const canadianFlag = require("../../../public/canada_flag.png");
const frenchFlag = require("../../../public/french_flag.png");
const japanFlag = require("../../../public/japan_flag.png");
const brazilFlag = require("../../../public/brazil_flag.png");
const irishFlag = require("../../../public/irish_flag.png");
const mexicoFlag = require("../../../public/mexico_flag.png");
const placeholderFlag = require("../../../public/placeholder_flag.png");

interface User {
  username: string;
  profileImage: string;
  userId: string;
  bio: string;
}

interface Stock {
  title: string;
  ticker: string;
  stockId: string;
  description: string;
  country: string;
  countryCode: number;
  date: string;
  sector: string;
}

export const QueryUserResult: React.FC<User> = (props) => {
  return (
    <Link href={`/user/${props.userId}`} passHref>
      <PushToUser
        username={props.username}
        profileImage={props.profileImage}
        bio={props.bio}
        userId={props.userId}
      />
    </Link>
  );
};

const PushToUser = React.forwardRef(
  ({ onClick, href, username, profileImage, bio, userId }, ref) => {
    return (
      <React.Fragment>
        <a
          className={styles.link}
          href={`/user/${userId}`}
          onClick={onClick}
          ref={ref}
        >
          <div className={styles.container}>
            <div className={styles.header_block}>
              <h2 className={styles.header}>{username}</h2>
              <div className={styles.image_container}>
                <img className={styles.image} src={profileImage} />
              </div>
            </div>
            <h3 className={styles.bio}>{bio}</h3>
          </div>
        </a>
      </React.Fragment>
    );
  }
);

export const QueryStockResult: React.FC<Stock> = (props) => {
  return (
    <Link href={`/stock/${props.stockId}`} passHref>
      <PushToStock
        title={props.title}
        ticker={props.ticker}
        country={props.country}
        description={props.description}
        stockId={props.stockId}
        countryCode={props.countryCode}
        date={props.date}
        sector={props.sector}
      />
    </Link>
  );
};

const PushToStock = React.forwardRef(
  (
    {
      onClick,
      href,
      title,
      ticker,
      country,
      description,
      stockId,
      countryCode,
      date,
      sector,
    },
    ref
  ) => {
    const [flag, setFlag] = useState(placeholderFlag);

    useEffect(() => {
      returnFlag();
    }, [countryCode]);

    function returnFlag() {
      switch (countryCode) {
        case 840:
          setFlag(usaFlag);
          break;
        case 276:
          setFlag(germanFlag);
          break;
        case 752:
          setFlag(swedishFlag);
          break;
        case 124:
          setFlag(canadianFlag);
          break;
        case 826:
          setFlag(englandFlag);
          break;
        case 528:
          setFlag(netherlandsFlag);
          break;
        case 250:
          setFlag(frenchFlag);
          break;
        case 756:
          setFlag(swissFlag);
          break;
        case 392:
          setFlag(japanFlag);
          break;
        case 156:
          setFlag(chinaFlag);
          break;
        case 76:
          setFlag(brazilFlag);
          break;
        case 372:
          setFlag(irishFlag);
          break;
        case 484:
          setFlag(mexicoFlag);
          break;
        case 643:
          setFlag(russiaFlag);
          break;
      }
    }

    return (
      <React.Fragment>
        <a
          className={styles.link}
          href={`/stock/${stockId}`}
          onClick={onClick}
          ref={ref}
        >
          <div className={styles.container}>
            <div className={styles.header_container}>
              <div className={styles.flag_container}>
                <img className={styles.flag} src={flag} />
              </div>
              <h2 className={styles.header}>
                {title} <span className={styles.ticker}>#{ticker}</span>
              </h2>
              <p className={styles.country}>{country}</p>
            </div>
            <p className={styles.bio}>{description}</p>
            <p className={styles.date}>Founded {date}</p>
            <p className={styles.sector}>{sector}</p>
          </div>
        </a>
      </React.Fragment>
    );
  }
);

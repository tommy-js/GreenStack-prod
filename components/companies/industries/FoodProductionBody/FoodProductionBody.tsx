import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const foodProduction = require("../../../../public/food_production.jpg");

export const FoodProductionBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Food Production</h1>
      <p className={styles.subheader}>
        The sector focused on the manufacturing of food products
      </p>
      <p className={styles.text}>
        The food production sector is perhaps one of the oldest in human
        history. In the past, mass production wasn't possible due to limitations
        in technology. Current methods of food manufacturing allows massive
        corporations such as{" "}
        <Link href="/stock/5b380fb1-e7e2-4e69-9c82-3b539946cc59">
          <a className={styles.link}>Tyson</a>
        </Link>{" "}
        to flourish, however.
      </p>
      <div className={styles.image_block}>
        <img src={foodProduction} className={styles.image} />
      </div>
      <p className={styles.text}>
        Food production is different from food services in that the food service
        sector focuses mostly on providing finished food goods to the consumer,
        such as in restaurants. Food production, however, simply focuses on
        creating the raw good. A food service company would be{" "}
        <Link href="/stock/4103ef02-8d24-43fb-aadc-5ec28fda3b30">
          <a className={styles.link}>McDonald's</a>
        </Link>
        , whereas{" "}
        <Link href="/stock/c2b0ddfe-5150-4977-afc2-8f8a90f8e8f1">
          <a className={styles.link}>Kellog's</a>
        </Link>{" "}
        is a food production company.
      </p>
    </div>
  );
};

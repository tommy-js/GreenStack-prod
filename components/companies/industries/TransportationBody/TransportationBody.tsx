import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const transportation = require("../../../../public/transportation.jpg");

export const TransportationBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Transportation</h1>
      <p className={styles.subheader}>
        The transportation sector involves itself with shipping goods and moving
        people
      </p>
      <p className={styles.text}>
        The transportation sector of the economy is focused on the
        transportation of goods and the movement of people. Notable companies
        within this sector include{" "}
        <Link href="/stock/564c8183-bd5c-404c-b268-b7ee73bcb1cf">
          <a className={styles.link}>Old Dominion Freight Line</a>
        </Link>
        ,{" "}
        <Link href="/stock/c1b53114-f1d1-4678-88df-54d1937f4e05">
          <a className={styles.link}>Uber</a>
        </Link>
        , and{" "}
        <Link href="/stock/45142311-adfe-4b1a-8775-10e6554503f2">
          <a className={styles.link}>Southwest Airlines</a>
        </Link>
        . Note that each of these do very different things. Old Dominion Freight
        Line is a shipping company, Uber provides rideshare services, and
        Southwest Airlines is a passenger airline company.
      </p>
      <div className={styles.image_block}>
        <img src={transportation} className={styles.image} />
      </div>
      <p className={styles.text}>
        Because of the broad nature of this sector, there tend to be many
        companies that do well in it during any economic situation.
      </p>
    </div>
  );
};

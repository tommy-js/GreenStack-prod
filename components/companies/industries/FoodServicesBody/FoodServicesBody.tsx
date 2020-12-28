import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const foodServices = require("../../../../public/food_services.jpg");

export const FoodServicesBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Food Services</h1>
      <p className={styles.subheader}>
        Food services is the economic sector focused on providing food to
        customers.
      </p>
      <p className={styles.text}>
        The food services sector is one of the most common and popular sectors.
        Most of the listed companies operate as chains within this sector, such
        as{" "}
        <Link href="/stock/a656e7d5-4c6c-4efb-adb5-561bf4de4d38">
          <a className={styles.link}>Starbucks</a>
        </Link>{" "}
        and{" "}
        <Link href="/stock/f7a05abe-4f3e-400d-a929-32104bb027ce">
          <a className={styles.link}>Domino's Pizza</a>
        </Link>
        .
      </p>
      <p className={styles.text}>
        Aside from restaurants, many of the companies operating in this space do
        so as food contractors for events, corporate or otherwise.
      </p>
      <div className={styles.image_block}>
        <img src={foodServices} className={styles.image} />
      </div>
    </div>
  );
};

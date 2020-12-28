import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const retail = require("../../../../public/retail.jpg");

export const RetailBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Retail</h1>
      <p className={styles.subheader}>
        Retail is the selling of goods directly to consumers
      </p>
      <p className={styles.text}>
        With the growth of online retail over the past few decades, this sector
        of the economy has become a significant portion of total economic
        movement. It's estimated that today retail accounts for about 5.5% of
        total GDP.
      </p>
      <div className={styles.image_block}>
        <img src={retail} className={styles.image} />
      </div>
      <p className={styles.text}>
        Perhaps the most famous retail store in the world,{" "}
        <Link href="/stock/fc93af0b-8c89-4914-9a07-63cf72e20ca8">
          <a className={styles.link}>Walmart</a>
        </Link>{" "}
        is today known for their enormous chain of stores. With 4,756 stores,
        this is one of the most well-known brands worldwide.
      </p>
      <p className={styles.text}>
        Due to the nature of how this space operates, businesses in the retail
        space tend to do much better in good economic times and much worse
        during poor ones.
      </p>
    </div>
  );
};

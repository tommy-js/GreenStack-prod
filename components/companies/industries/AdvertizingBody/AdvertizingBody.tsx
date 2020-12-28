import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

export const AdvertizingBody: React.FC = () => {
  return (
    <div className={styles.advertizing_body}>
      <h1 className={styles.header}>Advertizing</h1>
      <p className={styles.subheader}>
        The practice of getting others to buy your product
      </p>
      <p className={styles.text}>
        Advertizing is the practice of using media to get people to buy your
        product. It has existed as we know it today since around the 1920s, and
        has helped to shape much of the 20th and 21st centuries.
      </p>
      <p className={styles.text}>
        Advertizing companies assist other organizations in outreach; that is,
        they help advertize a brand for a fee. A notable example of an
        advertizing company is{" "}
        <Link href="/stock/55e49384-b399-44b4-8af3-671f691cfc65">
          <a className={styles.link}>Publicis</a>
        </Link>
        , a French company.
      </p>
    </div>
  );
};

import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const realEstate = require("../../../../public/real_estate.jpg");

export const RealEstateBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Real Estate</h1>
      <p className={styles.subheader}>
        The establishment and building of real estate
      </p>
      <p className={styles.text}>
        Companies operating within the real estate sector typically involve
        themselves with the construction or renovating of buildings before
        selling or renting out these spaces to consumers.
      </p>
      <div className={styles.image_block}>
        <img src={realEstate} className={styles.image} />
      </div>
      <p className={styles.text}>
        While many of the companies in the market provide space for average
        consumers, some specialize in offering professional and business spaces.
        For example,{" "}
        <Link href="/stock/79a66490-4db9-4f7b-af11-37a3dc4b64da">
          <a className={styles.link}>Simon Property Group</a>
        </Link>{" "}
        owns and operates many shopping malls throughout the United States.
      </p>
    </div>
  );
};

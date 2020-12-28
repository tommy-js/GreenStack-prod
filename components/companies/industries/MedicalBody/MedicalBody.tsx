import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const medicine = require("../../../../public/medicine.jpg");

export const MedicalBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Medicine</h1>
      <p className={styles.subheader}>
        Medicine is the creation and marketing of medial goods such as drugs and
        prosthetics.
      </p>
      <p className={styles.text}>
        Medical companies typically operate in a business-facing way, preferring
        to sell their products to other large companies and corporations.{" "}
        <Link href="/stock/84f03367-8886-4e83-b2c1-9d1db188fd60">
          <a className={styles.link}>McKesson Corporation</a>
        </Link>{" "}
        is a good example of this, as they provide medical supplies,
        pharmaceuticals, and more to hospitals and patients.
      </p>
      <div className={styles.image_block}>
        <img src={medicine} className={styles.image} />
      </div>
      <p className={styles.text}>
        Of course, this sector is extremely built-up, and so there are many
        companies to choose from when deciding what to invest in. Because
        medicine is a world-wide need, there are also many different countries
        to choose from.
      </p>
    </div>
  );
};

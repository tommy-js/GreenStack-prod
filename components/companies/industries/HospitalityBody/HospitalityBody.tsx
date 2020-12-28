import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const hospitality = require("../../../../public/hospitality.jpg");

export const HospitalityBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Hospitality</h1>
      <p className={styles.subheader}>
        The sector of providing hospitality to guests
      </p>
      <p className={styles.text}>
        The hospitality industry is focused on providing room and services to
        guests. This most commonly includes hotels, but can also consist of
        services such as cruise ships.
      </p>
      <p className={styles.text}>
        Some examples of companies operating within this space include{" "}
        <Link href="/stock/c7095110-aaf1-4cb2-a3ed-f96cfb3f3b1e">
          <a className={styles.link}>Royal Caribbean Group</a>
        </Link>
        , which operates cruise ships, and{" "}
        <Link href="/stock/aaaefa00-f6ac-4d7a-a8cc-b1df23892a46">
          <a className={styles.link}>MGM Resorts International</a>
        </Link>
        , which is a global chain of casinos and hotels.
      </p>
      <div className={styles.image_block}>
        <img src={hospitality} className={styles.image} />
      </div>
      <p className={styles.text}>
        Due to the nature of their sector, these businesses tend to do quite
        well when the economic state is good and do poorly when times are rough.
      </p>
    </div>
  );
};

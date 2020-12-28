import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const media = require("../../../../public/media.jpg");

export const MediaBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Media</h1>
      <p className={styles.subheader}>
        The media sector is focused on the creation of entertainment
      </p>
      <p className={styles.text}>
        Prominent companies within this space include{" "}
        <Link href="/stock/d3e93029-88ec-47f8-ac7a-3f1d350db8f2">
          <a className={styles.link}>Disney</a>
        </Link>{" "}
        and{" "}
        <Link href="/stock/9a08b257-0da3-4c2a-a431-7a30721167ad">
          <a className={styles.link}>Nintendo</a>
        </Link>
        . This industry does well during all periods, but especially when the
        economy is doing well overall. This is because when the economy is doing
        well, ordinary people have more money to spend out seeing movies, buying
        games and songs, and enjoying concerts.
      </p>
      <div className={styles.image_block}>
        <img src={media} className={styles.image} />
      </div>
    </div>
  );
};

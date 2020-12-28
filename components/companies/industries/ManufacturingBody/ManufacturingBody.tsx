import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const manufacturing = require("../../../../public/manufacturing.jpg");

export const ManufacturingBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Manufacturing</h1>
      <p className={styles.subheader}>
        Manufacturing is the economic sector focused on building finished goods
      </p>
      <p className={styles.text}>
        Companies that operate as manufacturers take raw materials and assemble
        finished consumer goods. Examples of corporations in this sector are{" "}
        <Link href="/stock/3d0c4faf-3fa6-4c3f-801a-e6bd03be1373">
          <a className={styles.link}>Daimler</a>
        </Link>
        , which is a large German car manufacturer, and{" "}
        <Link href="/stock/98d28b3a-0dd4-4dba-8c1e-9904a98121e0">
          <a className={styles.link}>Caterpillar</a>
        </Link>
        , a massive construction equipment manufacturer.
      </p>
      <div className={styles.image_block}>
        <img src={manufacturing} className={styles.image} />
      </div>
      <p className={styles.text}></p>
    </div>
  );
};

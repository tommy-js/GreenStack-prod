import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const agriculture = require("../../../../public/agriculture.jpg");

export const AgricultureBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Agriculture</h1>
      <p className={styles.subheader}>Growing and processing food products</p>
      <p className={styles.text}>
        Agriculture is the growth and processing of food products. Large
        companies in this sector focus on the mass production of goods.{" "}
        <Link href="/stock/044bd392-eed3-44ee-9f39-2ce30fa6634a">
          <a className={styles.link}>Corteva</a>
        </Link>{" "}
        is a good example of this, as they are a major producer of plant seeds.
      </p>
      <div className={styles.image_block}>
        <img src={agriculture} className={styles.image} />
      </div>
      <p className={styles.text}>
        Companies classified in the agriculture sector are different from those
        in the food processing category in much the same way raw materials are
        related to the manufacturing sector; agriculture companies produce the
        raw goods but do not typically make them into consumer products.
      </p>
    </div>
  );
};

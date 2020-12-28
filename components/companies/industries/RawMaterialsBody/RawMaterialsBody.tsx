import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const rawMaterials = require("../../../../public/raw_materials.jpg");

export const RawMaterialsBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Raw Materials</h1>
      <p className={styles.subheader}>
        The collection and shipping of base materials for use elsewhere.
      </p>
      <p className={styles.text}>
        Companies operating in the raw materials space collect through various
        methods base materials and ship them for use in other products. An
        example of a raw material might be the mining of iron ore. These
        corporations typically do not refine their materials but rather sell it
        as is.
      </p>
      <div className={styles.image_block}>
        <img src={rawMaterials} className={styles.image} />
      </div>
      <p className={styles.text}>
        Raw materials is more than iron ore, of course. It is the collection and
        refining of oil, the farming of sheep wool for clothes, and deforesting
        for the building of houses. Due to the easily scalable nature of raw
        material harvesting, and the typically low startup costs, this is one of
        the most popular sectors of many economies.
      </p>
      <p className={styles.text}>
        Some notable companies in this area include{" "}
        <Link href="/stock/8060e3ff-42b8-4265-9ffc-44808d144750">
          <a className={styles.link}>ExxonMobil</a>
        </Link>
        , an oil and gas company, and{" "}
        <Link href="/stock/8d245a80-6882-42e3-b21f-4c6512c9d577">
          <a className={styles.link}>Barrick Gold</a>
        </Link>
        , a gold mining and prospecting corporation.
      </p>
    </div>
  );
};

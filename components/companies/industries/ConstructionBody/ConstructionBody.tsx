import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const construction = require("../../../../public/construction.jpg");

export const ConstructionBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Construction</h1>
      <p className={styles.subheader}>
        The process of building structures for individuals and organizations
      </p>
      <p className={styles.text}>
        The construction sector focuses on assembling structures. While most
        listed construction companies tend to focus more on building for large
        companies, there are some that build for individuals.
      </p>
      <div className={styles.image_block}>
        <img src={construction} className={styles.image} />
      </div>
      <p className={styles.text}>
        Some examples of construction companies that build for individuals are{" "}
        <Link href="/stock/3187a5e6-0aa3-4753-ad44-642968cfaa05">
          <a className={styles.link}>D. R. Horton</a>
        </Link>
        , which is the largest homebuilder in the United States today, and{" "}
        <Link href="/stock/dbec64c4-8a05-4587-b698-b2e36c7444d0">
          <a className={styles.link}>Eiffage</a>
        </Link>
        , a large French company that builds for organizations.
      </p>
    </div>
  );
};

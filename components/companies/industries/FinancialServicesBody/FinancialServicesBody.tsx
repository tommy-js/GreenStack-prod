import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";
const banking = require("../../../../public/banking.jpg");

export const FinancialServicesBody: React.FC = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.header}>Financial Services</h1>
      <p className={styles.subheader}>
        The sector focused on providing financial services
      </p>
      <p className={styles.text}>
        The financial services sector is composed mostly of banks, who provide
        services such as investment assistance, loans, and banking. This is a
        very well-established sector with many companies, large and small.
      </p>
      <div className={styles.image_block}>
        <img src={banking} className={styles.image} />
      </div>
      <p className={styles.text}>
        Some examples of companies that operate within this space include{" "}
        <Link href="/stock/a70640c3-2424-45ab-9021-46b3d57e28c0">
          <a className={styles.link}>Visa</a>
        </Link>
        , which is a payment processor, and{" "}
        <Link href="/stock/0fc97dbc-c30c-4587-bfa8-6cd0a8f8c65c">
          <a className={styles.link}>Bank of America</a>
        </Link>
        , a large and well-known bank.
      </p>
    </div>
  );
};

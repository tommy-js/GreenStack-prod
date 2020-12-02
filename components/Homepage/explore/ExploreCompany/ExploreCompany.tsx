import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

type Company = {
  keyId: number;
  stockId: string;
  title: string;
  ticker: string;
  description: string;
};

interface Props {
  company: Company;
}

export const ExploreCompany: React.FC<Props> = ({ company }: Props) => {
  return (
    <div key={company.keyId} className={styles.container}>
      <Link href={`/home/stock/${company.stockId}`}>
        <a>{company.title}</a>
      </Link>
      <p className={styles.link}>
        {company.title} #{company.ticker}
      </p>
      <p>{company.description}</p>
    </div>
  );
};

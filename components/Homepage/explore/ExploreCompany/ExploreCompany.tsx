import React from "react";
import Link from "next/link";
import "./styles.module.scss";

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
    <div key={company.keyId} className="homepage_block_component">
      <Link href={`/home/stock/${company.stockId}`}>
        <a>{company.title}</a>
      </Link>
      <p className="block_link">
        {company.title} #{company.ticker}
      </p>
      <p>{company.description}</p>
    </div>
  );
};

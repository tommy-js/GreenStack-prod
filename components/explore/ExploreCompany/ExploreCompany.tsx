import React from "react";
import Link from "next/link";
import styles from "./styles.module.scss";

type Company = {
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
    <div key={company.stockId}>
      <Link href={`/stock/${company.stockId}`}>
        <CompanyLink
          stockId={company.stockId}
          title={company.title}
          ticker={company.ticker}
          description={company.description}
        />
      </Link>
    </div>
  );
};

const CompanyLink = React.forwardRef(
  ({ onClick, href, title, ticker, description }, ref) => {
    return (
      <a href={href} onClick={onClick} ref={ref}>
        <div className={styles.container}>
          <p className={styles.link}>
            {title} #{ticker}
          </p>
          <p>{description}</p>
        </div>
      </a>
    );
  }
);

import React, { useState, useEffect } from "react";
import { ExploreCompany } from "../ExploreCompany/ExploreCompany";
import { useQuery } from "react-apollo";
import { getStocksQuery } from "../../../queries/queries";
import { companySort } from "./index";
import styles from "./styles.module.scss";

type Company = {
  keyId: number;
  stockId: string;
  title: string;
  ticker: string;
  description: string;
};

export const Explore: React.FC = () => {
  const [technology, setTechnology] = useState([] as any);
  const [manufacturing, setManufacturing] = useState([] as any);
  const [energy, setEnergy] = useState([] as any);
  const { data: companyData } = useQuery(getStocksQuery);

  useEffect(() => {
    if (companyData) {
      let sortedCompanies = companySort(companyData.getStocks);
      setTechnology(sortedCompanies.tech);
      setManufacturing(sortedCompanies.manu);
      setEnergy(sortedCompanies.energ);
    }
  }, [companyData]);

  return (
    <div className={styles.explore_container}>
      <h3 className={styles.explore_header}>You May Be Interested In...</h3>
      <h2 className={styles.explore_company_header}>Technology</h2>
      {technology.map((el: Company) => (
        <div key={el.stockId}>
          <ExploreCompany company={el} />
        </div>
      ))}
      <h2 className={styles.explore_company_header}>Manufacturing</h2>
      {manufacturing.map((el: Company) => (
        <div key={el.stockId}>
          <ExploreCompany company={el} />
        </div>
      ))}
      <h2 className={styles.explore_company_header}>Energy</h2>
      {energy.map((el: Company) => (
        <div key={el.stockId}>
          <ExploreCompany company={el} />
        </div>
      ))}
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { ExploreCompany } from "../ExploreCompany/ExploreCompany";
import { useQuery } from "react-apollo";
import { getStocksQuery } from "../../../queries/queries";
import styles from "./styles.module.scss";

type Company = {
  stockId: string;
  title: string;
  ticker: string;
  description: string;
};

export const Explore: React.FC = () => {
  const { data } = useQuery(getStocksQuery);
  const [stocks, setStocks] = useState([] as any);

  useEffect(() => {
    if (data) setStocks(data.getStocks);
  }, [data]);

  function returnStocks() {
    if (data) {
      return (
        <div>
          {stocks.map((el: Company) => (
            <ExploreCompany key={el.stockId} company={el} />
          ))}
        </div>
      );
    } else return null;
  }

  return (
    <div className={styles.explore_container}>
      <h3 className={styles.explore_header}>Our Listed Companies</h3>
      {returnStocks()}
      <SuggestAStock />
    </div>
  );
};

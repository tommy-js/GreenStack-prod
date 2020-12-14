import React, { useState } from "react";
import { QueryStockResult } from "../../QueryResult/QueryResult";
import { SuggestAStock } from "../SuggestAStock/SuggestAStock";
import { Company } from "../../../types/types";
import { SearchOptions } from "../SearchOptions/SearchOptions";
import { SearchQuery } from "../SearchQuery/SearchQuery";
import { findStocks, findSelectStocks, companyList } from "./index";
import styles from "./styles.module.scss";

export const Explore: React.FC = () => {
  const [stocks, setStocks] = useState(companyList);
  const [returnSpan, setReturnSpan] = useState(false);
  const [companyItems, setCompanyItems] = useState(companyList.length);

  function modifySearchParams(arg: string) {
    let returnedStocks = findStocks(arg);
    setStocks(returnedStocks);
    setCompanyItems(returnedStocks.length);
    setReturnSpan(true);
  }

  function modifySelectParams(paramObj: any) {
    let returnedStocks = findSelectStocks(paramObj);
    setStocks(returnedStocks);
    setCompanyItems(returnedStocks.length);
  }

  function returnStocks() {
    return (
      <div>
        {stocks.map((el: Company) => (
          <QueryStockResult
            title={el.title}
            ticker={el.ticker}
            description={el.description}
            country={el.country}
            countryCode={el.countryCode}
            date={el.date}
            stockId={el.stockId}
            sector={el.sector}
          />
        ))}
      </div>
    );
  }

  function returnYourQuery() {
    if (returnSpan === true) return <SearchQuery />;
    else return null;
  }

  function returnSpanParam() {
    if (companyItems != 1) return "ies";
    else return "y";
  }

  return (
    <div className={styles.explore_container}>
      <h3 className={styles.explore_header}>
        Explore <span className={styles.company_list}>{companyItems}</span>{" "}
        Compan{returnSpanParam()}
      </h3>
      <SearchOptions
        modifySearchParams={modifySearchParams}
        modifySelectParams={modifySelectParams}
      />
      {returnYourQuery()}
      {returnStocks()}
      <SuggestAStock />
    </div>
  );
};

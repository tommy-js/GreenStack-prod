import React, { useState, useEffect } from "react";
import { QueryStockResult } from "../../QueryResult/QueryResult";
import { SuggestAStock } from "../SuggestAStock/SuggestAStock";
import { Company } from "../../../types/types";
import { SearchOptions } from "../SearchOptions/SearchOptions";
import { EmptyResults } from "../EmptyResults/EmptyResults";
import { findStocks, findSelectStocks, companyList } from "./index";
import styles from "./styles.module.scss";

export const Explore: React.FC = () => {
  const [stocks, setStocks] = useState(companyList);
  const [companyItems, setCompanyItems] = useState(companyList.length);
  const [returnedEmpy, setReturnedEmpty] = useState(false);
  const [enteredInput, setEnteredInput] = useState(false);
  const [searchedParam, setSearchedParam] = useState("");
  const [selectedParam, setSelectedParam] = useState({
    select1: "Any",
    select2: "Any",
  });

  function modifySearchParams(arg: string) {
    let returnedStocks = findStocks(arg);
    setStocks(returnedStocks);
    setCompanyItems(returnedStocks.length);
    setSelectedParam({ select1: "Any", select2: "Any" });
    setSearchedParam(arg);
    setEnteredInput(true);
  }

  function modifySelectParams(paramObj: any) {
    let returnedStocks = findSelectStocks(paramObj);
    setStocks(returnedStocks);
    setCompanyItems(returnedStocks.length);
    setEnteredInput(false);
  }

  useEffect(() => {
    if (stocks.length > 0) setReturnedEmpty(false);
    else setReturnedEmpty(true);
  }, [stocks]);

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

  function returnSpanParam() {
    if (companyItems != 1) return "ies";
    else return "y";
  }

  function matchingParam() {
    if (searchedParam.length > 0) {
      if (enteredInput === true) {
        return (
          <span>
            matching <span className={styles.flair}>"{searchedParam}"</span>
          </span>
        );
      } else return null;
    } else return null;
  }

  function renderHeader() {
    if (stocks.length != 0) {
      return (
        <h3 className={styles.explore_header}>
          Explore <span className={styles.company_list}>{companyItems}</span>{" "}
          Compan{returnSpanParam()} {matchingParam()}
        </h3>
      );
    } else return null;
  }

  function renderEmpty() {
    if (returnedEmpy === true) return <EmptyResults />;
    else return null;
  }

  return (
    <div className={styles.explore_container}>
      <SearchOptions
        modifySearchParams={modifySearchParams}
        modifySelectParams={modifySelectParams}
        selectedParam={selectedParam}
      />
      {renderHeader()}
      {renderEmpty()}
      {returnStocks()}
      <SuggestAStock />
    </div>
  );
};

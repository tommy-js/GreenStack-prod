import React, { useState, useEffect } from "react";
import { QueryStockResult } from "../../QueryResult/QueryResult/QueryResult";
import { SuggestAStock } from "../SuggestAStock/SuggestAStock";
import { Company } from "../../../types/types";
import { SearchOptions } from "../SearchOptions/SearchOptions";
import { EmptyResults } from "../EmptyResults/EmptyResults";
import { LoadMore } from "../LoadMore/LoadMore";
import { findStocks, findSelectStocks, companyList } from "./index";
import styles from "./styles.module.scss";

export const Explore: React.FC = () => {
  const [stocks, setStocks] = useState(companyList);
  const [loadedStocks, setLoadedStocks] = useState([] as any);
  const [companyItems, setCompanyItems] = useState(companyList.length);
  const [returnedEmpy, setReturnedEmpty] = useState(false);
  const [enteredInput, setEnteredInput] = useState(false);
  const [searchedParam, setSearchedParam] = useState("");
  const [loadMoreButtonDisplay, setLoadMoreButtonDisplay] = useState("block");
  const [selectedParam, setSelectedParam] = useState({
    select1: "Any",
    select2: "Any",
  });

  useEffect(() => {
    let slicedStocks = companyList.slice(0, 20);
    setLoadedStocks(slicedStocks);
  }, []);

  function loadMoreStocks() {
    let renderLength = loadedStocks.length + 20;
    if (renderLength < stocks.length) {
      let slicedStocks = stocks.slice(0, renderLength);
      setLoadedStocks(slicedStocks);
    } else {
      setLoadMoreButtonDisplay("none");
      setLoadedStocks(stocks);
    }
  }

  function modifySearchParams(arg: string) {
    let returnedStocks = findStocks(arg);
    if (returnedStocks.length > 20) {
      let slicedReturnedStocked = returnedStocks.slice(0, 20);
      setLoadedStocks(slicedReturnedStocked);
      setLoadMoreButtonDisplay("block");
    } else {
      setLoadMoreButtonDisplay("none");
      setLoadedStocks(returnedStocks);
    }
    setStocks(returnedStocks);
    setCompanyItems(returnedStocks.length);
    setSelectedParam({ select1: "Any", select2: "Any" });
    setSearchedParam(arg);
    setEnteredInput(true);
  }

  function modifySelectParams(paramObj: any) {
    let returnedStocks = findSelectStocks(paramObj);
    if (returnedStocks.length > 20) {
      let slicedReturnedStocked = returnedStocks.slice(0, 20);
      setLoadedStocks(slicedReturnedStocked);
      setLoadMoreButtonDisplay("block");
    } else {
      setLoadMoreButtonDisplay("none");
      setLoadedStocks(returnedStocks);
    }
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
      <React.Fragment>
        {loadedStocks.map((el: Company) => (
          <QueryStockResult
            title={el.title}
            ticker={el.ticker}
            description={el.description}
            country={el.country}
            countryCode={el.countryCode}
            date={el.date}
            stockId={el.stockId}
            sector={el.sector}
            color={el.color}
          />
        ))}
        <LoadMore
          loadMoreButtonDisplay={loadMoreButtonDisplay}
          loadMoreStocks={loadMoreStocks}
        />
      </React.Fragment>
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

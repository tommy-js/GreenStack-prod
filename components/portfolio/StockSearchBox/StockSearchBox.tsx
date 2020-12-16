import React, { useEffect, useState } from "react";
import { returnStockSearch } from "./index";
import styles from "./styles.module.scss";

interface Props {
  modResults: (res: any) => void;
  parsingSearchResults?: (argument: boolean) => void;
}

export const StockSearchBox: React.FC<Props> = (props) => {
  const [search, setSearch] = useState("");

  function returnSearch(input: string) {
    setSearch(input);
    if (input.length === 0) {
      props.modResults([]);
      if (props.parsingSearchResults) props.parsingSearchResults(false);
    } else {
      let searchResults = returnStockSearch(input);
      if (searchResults.length > 4) {
        let splicedResults = searchResults.slice(0, 4);
        props.modResults(splicedResults);
      } else props.modResults(searchResults);

      if (props.parsingSearchResults) props.parsingSearchResults(true);
    }
  }

  return (
    <div className={styles.initial_portfolio_input_block}>
      <input
        className={styles.initial_portfolio_input}
        value={search}
        onChange={(e) => returnSearch(e.target.value)}
        placeholder="Apple, AMD, Etc..."
      />
    </div>
  );
};

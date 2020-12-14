import React from "react";
import { SearchByCategory } from "../SearchByCategory/SearchByCategory";
import { SearchBar } from "../SearchBar/SearchBar";
import styles from "./styles.module.scss";

interface Props {
  modifySearchParams: (arg: string) => void;
  modifySelectParams: (paramObj: any) => void;
}

export const SearchOptions: React.FC<Props> = (props) => {
  return (
    <div className={styles.search_options}>
      <SearchByCategory modifySelectParams={props.modifySelectParams} />
      <SearchBar modifySearchParams={props.modifySearchParams} />
    </div>
  );
};

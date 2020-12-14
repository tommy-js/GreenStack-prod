import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  modifySearchParams: (arg: string) => void;
}

export const SearchBar: React.FC<Props> = (props) => {
  const [inputVal, setInputVal] = useState("");

  return (
    <div className={styles.search_bar}>
      <h3 className={styles.header}>Search by Name</h3>
      <input
        className={styles.search}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Search..."
      />
      <button onClick={() => props.modifySearchParams(inputVal)}>Submit</button>
    </div>
  );
};

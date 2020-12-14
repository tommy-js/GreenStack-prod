import React, { useState } from "react";
import styles from "./styles.module.scss";

interface Props {
  modifySearchParams: (arg: string) => void;
}

export const SearchBar: React.FC<Props> = (props) => {
  const [inputVal, setInputVal] = useState("");

  function passSearchParam(keyPress: any) {
    if (keyPress.key === "Enter") {
      props.modifySearchParams(inputVal);
    }
    console.log(inputVal);
  }

  return (
    <div className={styles.search_bar}>
      <h3 className={styles.header}>Search by Name</h3>
      <div className={styles.search_container}>
        <input
          className={styles.search}
          value={inputVal}
          onChange={(e) => setInputVal(e.target.value)}
          onKeyPress={(e) => passSearchParam(e)}
          placeholder="Search..."
        />
        <button
          className={styles.search_button}
          onClick={() => props.modifySearchParams(inputVal)}
        >
          Go
        </button>
      </div>
    </div>
  );
};

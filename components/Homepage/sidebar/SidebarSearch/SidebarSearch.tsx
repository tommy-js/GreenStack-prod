import React from "react";
import styles from "./styles.module.scss";

interface Props {
  search: string;
  modSearch: (input: string) => void;
  submitSearch: (res: string) => void;
}

export const SidebarSearch: React.FC<Props> = (props) => {
  function checkSubmit(key: any) {
    if (key.keyCode === 13) props.submitSearch(props.search);
  }

  return (
    <div className={styles.sidebar_search_container}>
      <input
        className={styles.sidebar_search}
        placeholder="search..."
        value={props.search}
        onChange={(e) => props.modSearch(e.target.value)}
        onKeyDown={(e) => checkSubmit(e)}
      />
    </div>
  );
};

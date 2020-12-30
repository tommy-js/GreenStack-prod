import React from "react";
import styles from "./styles.module.scss";

interface Props {
  display: string;
  loadMoreStocks: () => void;
}

export const LoadMoreStocks: React.FC<Props> = (props) => {
  return (
    <button
      style={{ display: props.display }}
      className={styles.button}
      onClick={() => props.loadMoreStocks()}
    >
      Load More
    </button>
  );
};

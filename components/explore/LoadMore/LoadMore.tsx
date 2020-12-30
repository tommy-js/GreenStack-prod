import React from "react";
import styles from "./styles.module.scss";

interface Props {
  loadMoreButtonDisplay: string;
  loadMoreStocks: () => void;
}

export const LoadMore: React.FC<Props> = (props) => {
  return (
    <button
      style={{ display: props.loadMoreButtonDisplay }}
      className={styles.button}
      onClick={() => props.loadMoreStocks()}
    >
      Load More
    </button>
  );
};

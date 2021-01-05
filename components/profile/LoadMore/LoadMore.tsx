import React from "react";
import styles from "./styles.module.scss";

interface Props {
  loadMore: () => void;
}

export const LoadMore: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={() => props.loadMore()}>
      Load More
    </button>
  );
};

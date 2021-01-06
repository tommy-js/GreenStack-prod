import React from "react";
import styles from "./styles.module.scss";

interface Props {
  loadMore: () => void;
}

export const LoadNew: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={() => props.loadMore()}>
      Load New!
    </button>
  );
};

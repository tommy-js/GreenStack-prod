import React from "react";
import styles from "./styles.module.scss";

interface Props {
  modLoaded: () => void;
}

export const LoadMoreComments: React.FC<Props> = (props) => {
  return (
    <button className={styles.button} onClick={() => props.modLoaded()}>
      Load More
    </button>
  );
};

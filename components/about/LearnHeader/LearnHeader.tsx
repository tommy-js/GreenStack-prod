import React from "react";
import styles from "./styles.module.scss";

interface Props {
  header: string;
}

export const LearnHeader: React.FC<Props> = (props) => {
  return (
    <div className={styles.learn_header}>
      <h3 className={styles.learn_header_span}>{props.header}</h3>
    </div>
  );
};

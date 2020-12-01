import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
}

export const SelectSubheader: React.FC<Props> = (props) => {
  return <p className={styles.select_subheader}>{props.title}</p>;
};

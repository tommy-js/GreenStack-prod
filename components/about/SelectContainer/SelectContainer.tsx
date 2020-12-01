import React from "react";
import styles from "./styles.module.scss";

interface Props {
  id: number;
  bcc: string;
  selectOption: (id: number) => void;
}

export const SelectContainer: React.FC<Props> = (props) => {
  return (
    <div
      className={styles.select_container}
      style={{ backgroundColor: props.bcc }}
      onClick={() => props.selectOption(props.id)}
    ></div>
  );
};

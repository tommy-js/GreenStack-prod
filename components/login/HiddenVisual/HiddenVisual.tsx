import React from "react";
import styles from "./styles.module.scss";

interface Props {
  opac: number;
  text: string;
}

export const HiddenVisual: React.FC<Props> = (props) => {
  return (
    <p className={styles.hidden_visual} style={{ opacity: props.opac }}>
      {props.text}
    </p>
  );
};

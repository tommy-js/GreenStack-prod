import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
}

export const PostLength: React.FC<Props> = (props) => {
  function returnPostLength() {
    if (props.text.length <= 2000) return null;
    else if (props.text.length > 2000 && props.text.length < 4000) {
      return <div>{props.text.length} / 5,000</div>;
    } else {
      return <div style={{ color: "red" }}>{props.text.length} / 5,000</div>;
    }
  }

  return <h3 className={styles.text}>{returnPostLength()}</h3>;
};

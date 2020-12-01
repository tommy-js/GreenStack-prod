import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
  hoverOver?: boolean;
  hoverOverSubtext?: string;
  headerPassIn?: () => void;
}

export const Header: React.FC<Props> = (props) => {
  function headerPassIn() {
    if (props.headerPassIn) props.headerPassIn();
    else return null;
  }

  if (props.hoverOver === true) {
    return (
      <div className={styles.header} onClick={() => headerPassIn()}>
        <h1 className={styles.header_major_text}>{props.text}</h1>
        <h3 className={styles.header_minor_text}>{props.hoverOverSubtext}</h3>
      </div>
    );
  } else {
    return (
      <div className={styles.header}>
        <h1 className={styles.header_simple_text}>{props.text}</h1>
      </div>
    );
  }
};

import React from "react";
import styles from "./styles.module.scss";

interface Props {
  text: string;
}

export const LoginHeader: React.FC<Props> = (props) => {
  return <h3 className={styles.login_header}>{props.text}</h3>;
};

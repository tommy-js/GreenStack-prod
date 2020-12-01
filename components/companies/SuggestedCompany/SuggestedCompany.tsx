import React from "react";
import { Header } from "../../User/Header/Header";
import styles from "./styles.module.scss";

interface Props {
  text: string;
}

export const SuggestedCompany: React.FC<Props> = (props) => {
  return (
    <div className={styles.company_mapper}>
      <Header text={props.text} />
    </div>
  );
};

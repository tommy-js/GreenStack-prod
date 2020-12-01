import React from "react";
import { Header } from "../../User/Header/Header";
import styles from "./styles.module.scss";

interface Props {
  title: string;
}

export const CompanyInformationBlock: React.FC<Props> = (props) => {
  return (
    <div className={styles.company_information_block}>
      <Header text={props.title} />
    </div>
  );
};

import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
}

export const CompanyInformationBlock: React.FC<Props> = (props) => {
  return (
    <div className={styles.company_information_block}>
      <p className={styles.header}>{props.title}</p>
    </div>
  );
};

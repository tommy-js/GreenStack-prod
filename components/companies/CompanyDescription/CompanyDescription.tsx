import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  description: string;
}

export const CompanyDescription: React.FC<Props> = (props) => {
  return (
    <div className={styles.company_description}>
      <h2 className={styles.title}>About {props.title}</h2>
      <p className={styles.description}>{props.description}</p>
    </div>
  );
};

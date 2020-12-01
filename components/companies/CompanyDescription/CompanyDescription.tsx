import React from "react";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  description: string;
}

export const CompanyDescription: React.FC<Props> = (props) => {
  return (
    <div className={styles.company_description_block}>
      <h2>About {props.title}</h2>
      <p>{props.description}</p>
    </div>
  );
};

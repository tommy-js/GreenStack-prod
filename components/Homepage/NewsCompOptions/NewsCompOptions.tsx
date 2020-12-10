import React from "react";
import { SubmitPost } from "../postEntry/SubmitPost/SubmitPost";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  text: string;
  accompaniedURL: string;
}

export const NewsCompOptions: React.FC<Props> = (props) => {
  return (
    <div className={styles.news_comp_options}>
      <div className={styles.news_comp_button}>
        <SubmitPost
          title={props.title}
          text={props.text}
          accompaniedURL={props.accompaniedURL}
          buttonTitle="Post to timeline"
        />
      </div>
    </div>
  );
};

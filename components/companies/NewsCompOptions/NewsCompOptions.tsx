import React from "react";
import { SubmitPost } from "../../Homepage/postEntry/SubmitPost/SubmitPost";
import styles from "./styles.module.scss";

interface Props {
  title: string;
  text: string;
  accompaniedURL: string;
  postOpacity: number;
}

export const NewsCompOptions: React.FC<Props> = (props) => {
  return (
    <div
      className={styles.news_comp_options}
      style={{ opacity: props.postOpacity }}
    >
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

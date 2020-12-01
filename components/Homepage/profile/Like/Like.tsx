import React from "react";
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  title: string;
}

export const Like: React.FC<Props> = (props) => {
  return (
    <h3 key={props.postId} className={styles.profile_like}>
      {props.title}
    </h3>
  );
};

import React from "react";
import { returnDate } from "./index";
import styles from "./styles.module.scss";

interface Props {
  likes: number;
  dislikes: number;
  timestamp: number;
  commentCount: number;
}

export const PostStatus: React.FC<Props> = (props) => {
  return (
    <div className={styles.post_status}>
      <p className={styles.post_status_element}>
        likes: {props.likes}, dislikes: {props.dislikes}
      </p>
      <p className={styles.post_status_element}>
        {returnDate(props.timestamp)}
      </p>
      <p className={styles.post_status_element}>
        Comments: {props.commentCount}
      </p>
    </div>
  );
};

import React from "react";
import { returnDate } from "./index";
import styles from "./styles.module.scss";
const like = require("../../../public/like.png");
const dislike = require("../../../public/dislike.png");
const comment = require("../../../public/comment.png");

interface Props {
  likes: number;
  dislikes: number;
  timestamp: number;
  commentCount: number;
}

export const PostStatus: React.FC<Props> = (props) => {
  return (
    <div className={styles.post_status}>
      <p className={styles.status}>
        <p className={styles.text}>{props.likes}</p>
        <div className={styles.like}>
          <img src={like} className={styles.like_img} />
        </div>
      </p>
      <p className={styles.status}>
        <p className={styles.text}>{props.dislikes}</p>
        <div className={styles.dislike}>
          <img src={dislike} className={styles.dislike_img} />
        </div>
      </p>
      <p className={styles.status}>
        <p className={styles.text}>{props.commentCount}</p>
        <div className={styles.comment}>
          <img src={comment} className={styles.comment_img} />
        </div>
      </p>
      <p className={styles.timestamp}>{returnDate(props.timestamp)}</p>
    </div>
  );
};

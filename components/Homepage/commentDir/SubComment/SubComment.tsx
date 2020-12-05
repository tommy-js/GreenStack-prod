import React from "react";
import { LikeSubComment } from "../LikeSubComment/LikeSubComment";
import { DislikeSubComment } from "../DislikeSubComment/DislikeSubComment";
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  commentId: string;
  username: string;
  text: string;
  likes: number;
  dislikes: number;
  parentCommentId: string;
}

export const SubComment: React.FC<Props> = (props) => {
  return (
    <div className={styles.sub_comment}>
      <div className={styles.sub_comment_head_class}>
        <p>{props.username}</p>
      </div>
      <p className={styles.sub_comment_text}>{props.text}</p>
      <div className={styles.sub_comment_foot_class}>
        {" "}
        {props.likes}
        <LikeSubComment
          postId={props.postId}
          commentId={props.commentId}
          parentCommentId={props.parentCommentId}
        />
        , {props.dislikes}
        <DislikeSubComment
          postId={props.postId}
          commentId={props.commentId}
          parentCommentId={props.parentCommentId}
        />
      </div>
    </div>
  );
};

import React from "react";
import { LikeSubComment } from "../LikeSubComment/LikeSubComment";
import { DislikeSubComment } from "../DislikeSubComment/DislikeSubComment";
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  commentId: string;
  parentCommentId: string;
  likes: number;
  dislikes: number;
}

export const SubCommentInformation: React.FC<Props> = (props) => {
  return (
    <div className={styles.sub_comment_information}>
      <span className={styles.likes}>{props.likes}</span>
      <LikeSubComment
        postId={props.postId}
        commentId={props.commentId}
        parentCommentId={props.parentCommentId}
      />
      <span className={styles.dislikes}>{props.dislikes}</span>
      <DislikeSubComment
        postId={props.postId}
        commentId={props.commentId}
        parentCommentId={props.parentCommentId}
      />
    </div>
  );
};

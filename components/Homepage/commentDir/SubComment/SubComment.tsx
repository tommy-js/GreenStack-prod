import React from "react";
import { SubCommentInformation } from "../SubCommentInformation/SubCommentInformation";
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  commentId: string;
  profileImage: string;
  username: string;
  text: string;
  likes: number;
  dislikes: number;
  parentCommentId: string;
}

export const SubComment: React.FC<Props> = (props) => {
  return (
    <div className={styles.sub_comment}>
      <div className={styles.header}>
        <p className={styles.username}>{props.username}</p>
        <div className={styles.image_block}>
          <img src={props.profileImage} className={styles.image} />
        </div>
      </div>
      <p className={styles.text}>{props.text}</p>

      <SubCommentInformation
        postId={props.postId}
        commentId={props.commentId}
        parentCommentId={props.parentCommentId}
        likes={props.likes}
        dislikes={props.dislikes}
      />
    </div>
  );
};

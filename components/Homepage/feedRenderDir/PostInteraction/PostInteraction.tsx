import React from "react";
import { LikePost } from "../LikePost/LikePost";
import { DislikePost } from "../DislikePost/DislikePost";
const comment = require("../../../../public/comment.png");
import styles from "./styles.module.scss";

interface Props {
  userId: string;
  postId: string;
  likes: number;
  dislikes: number;
  comments: number;
  modLikes: () => void;
  modDislikes: () => void;
}

export const PostInteraction: React.FC<Props> = (props) => {
  return (
    <div className={styles.post_interaction}>
      <div className={styles.likes}>
        <span className={styles.post_value_inner}>{props.likes}</span>
      </div>
      <LikePost
        userId={props.postUserId}
        postId={props.postId}
        modLikes={props.modLikes}
      />
      <div className={styles.dislikes}>
        <span className={styles.post_value_inner}>{props.dislikes}</span>
      </div>
      <DislikePost
        userId={props.postUserId}
        postId={props.postId}
        modDislikes={props.modDislikes}
      />
      <div className={styles.post_values}>
        <span className={styles.post_value_inner}>{props.comments}</span>
      </div>
      <div className={styles.like_button_block}>
        <img className={styles.like_button_image} src={props.comment} />
      </div>
    </div>
  );
};

import React, { useState } from "react";
import { LikePostComment } from "../../post/LikePostComment/LikePostComment";
import { DislikePostComment } from "../../post/DislikePostComment/DislikePostComment";
const comment = require("../../../../public/comment.png");
import styles from "./styles.module.scss";

type SubComments = {
  userId: string;
  commentId: string;
  username: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
  parentCommentId: string;
};

interface Props {
  likes: number;
  dislikes: number;
  postId: string;
  commentId: string;
  subComments: SubComments[];
  modTransfered: () => void;
}

export const CommentInformation: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);

  function likeIncrement() {
    let like = Number(likes);
    like++;
    setLikes(like);
  }

  function dislikeIncrement() {
    let dislike = Number(dislikes);
    dislike++;
    setDislikes(dislike);
  }

  return (
    <div className={styles.comment_information}>
      <div className={styles.likes}>{likes}</div>
      <LikePostComment
        postId={props.postId}
        commentId={props.commentId}
        modLikes={likeIncrement}
      />
      <div className={styles.dislikes}>{dislikes}</div>
      <DislikePostComment
        postId={props.postId}
        commentId={props.commentId}
        modDislikes={dislikeIncrement}
      />
      <div className={styles.comments}>{props.subComments.length}</div>
      <div
        className={styles.comment_image_block}
        onClick={() => props.modTransfered()}
      >
        <img className={styles.comment_image} src={comment} />
      </div>
    </div>
  );
};

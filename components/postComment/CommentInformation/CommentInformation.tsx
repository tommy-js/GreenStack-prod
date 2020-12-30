import React, { useState } from "react";
import { LikePostComment } from "../LikePostComment/LikePostComment";
import { DislikePostComment } from "../DislikePostComment/DislikePostComment";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../components/actions/actions";
import styles from "./styles.module.scss";
const comment = require("../../../public/comment.png");
const reply_icon = require("../../../public/reply_icon.png");

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

interface Redux {
  likes: any;
  dislikes: any;
}

interface Props extends Redux {
  likeCount: number;
  dislikeCount: number;
  postId: string;
  commentId: string;
  subComments: SubComments[];
  modTransfered: () => void;
  modReplying: () => void;
}

const CommentInformationRedux: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.likeCount);
  const [dislikes, setDislikes] = useState(props.dislikeCount);

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
        likes={props.likes}
        modLikes={likeIncrement}
      />
      <div className={styles.dislikes}>{dislikes}</div>
      <DislikePostComment
        postId={props.postId}
        commentId={props.commentId}
        dislikes={props.dislikes}
        modDislikes={dislikeIncrement}
      />
      <div className={styles.comments}>{props.subComments.length}</div>
      <div
        className={styles.comment_image_block}
        onClick={() => props.modTransfered()}
      >
        <img className={styles.comment_image} src={comment} />
      </div>
      <div className={styles.reply} onClick={() => props.modReplying()}>
        <img src={reply_icon} className={styles.reply_image} />
        <span className={styles.reply_subtext}>(Reply)</span>
      </div>
    </div>
  );
};

export const CommentInformation = connect(mapStateToProps)(
  CommentInformationRedux
);

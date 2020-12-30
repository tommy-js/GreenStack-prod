import React, { useEffect, useState } from "react";
import { CommentInformation } from "../CommentInformation/CommentInformation";
import { Comment } from "../Comment/Comment";
import { IndividualCommentSubComments } from "../IndividualCommentSubComments/IndividualCommentSubComments";
import { IndividualCommentReply } from "../IndividualCommentReply/IndividualCommentReply";
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
  postId: string;
  commentId: string;
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  commentUsername: string;
  commentUserId: string;
  subComments: SubComments[];
}

export const IndividualComment: React.FC<Props> = (props) => {
  const [transferedDisp, setTransferedDisp] = useState("none");
  const [show, setShow] = useState(false);
  const [replying, setReplying] = useState(false);

  useEffect(() => {
    if (show === true) setTransferedDisp("block");
    else setTransferedDisp("none");
  }, [show]);

  function modReplying() {
    setReplying(!replying);
  }

  return (
    <div className={styles.comment}>
      <Comment
        commentUsername={props.commentUsername}
        timestamp={props.timestamp}
        text={props.text}
      />
      <CommentInformation
        likes={props.likes}
        dislikes={props.dislikes}
        postId={props.postId}
        commentId={props.commentId}
        subComments={props.subComments}
        modTransfered={() => setShow(!show)}
        modReplying={modReplying}
      />
      <IndividualCommentReply
        postId={props.postId}
        commentId={props.commentId}
        replying={replying}
      />
      <IndividualCommentSubComments
        postId={props.postId}
        transferedDisp={transferedDisp}
        subComments={props.subComments}
      />
    </div>
  );
};

import React, { useState, useEffect } from "react";
import { PushCommentPost } from "../PushCommentPost/PushCommentPost";
import styles from "./styles.module.scss";

interface Post {
  userId: string;
  postId: string;
  allowComments: boolean;
  modComments?: () => void;
}

export const CommentInputPost: React.FC<Post> = (props) => {
  const [text, setText] = useState("");

  function modText(input: string) {
    if (input.length < 180) setText(input);
  }

  function returnHiddenTextarea() {
    if (props.allowComments === false) {
      return (
        <textarea
          className={styles.comment_input}
          value="This user has disabled comment submission."
          disabled={true}
        />
      );
    } else if (props.allowComments === true) {
      return (
        <React.Fragment>
          <textarea
            className={styles.comment_input}
            value={text}
            onChange={(e) => modText(e.target.value)}
          />
          <PushCommentPost
            userId={props.userId}
            postId={props.postId}
            text={text}
            modComments={props.modComments}
          />
        </React.Fragment>
      );
    }
  }

  return (
    <div className={styles.comment_input_div}>{returnHiddenTextarea()}</div>
  );
};

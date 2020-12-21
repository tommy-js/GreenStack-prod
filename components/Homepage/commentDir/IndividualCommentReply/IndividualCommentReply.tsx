import React, { useState } from "react";
import { SubmitSubResponse } from "../SubmitSubResponse/SubmitSubResponse";
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  commentId: string;
  replying: boolean;
}

export const IndividualCommentReply: React.FC<Props> = (props) => {
  const [text, setText] = useState("");

  function renderResponseBox() {
    if (props.replying === true) {
      return (
        <React.Fragment>
          <textarea
            value={text}
            onChange={(e) => setText(e.target.value)}
            className={styles.textarea}
          />
          <SubmitSubResponse
            postId={props.postId}
            commentId={props.commentId}
            text={text}
            successful={() => setText("")}
          />
        </React.Fragment>
      );
    } else return null;
  }

  return (
    <div className={styles.individual_comment_reply}>{renderResponseBox()}</div>
  );
};

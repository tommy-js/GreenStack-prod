import React, { useEffect, useState } from "react";
import { IndividualComment } from "../IndividualComment/IndividualComment";
import { CommentItem } from "../../types/types";
import { returnOrder } from "./index";
import styles from "./styles.module.scss";

interface Props {
  comments: CommentItem[];
}

export const Comments: React.FC<Props> = (props) => {
  const [comments, setComments] = useState(props.comments);
  const [commentLength, setCommentLength] = useState(5);

  useEffect(() => {
    if (props.comments.length > 0) {
      updateComments(commentLength);
    }
  }, [props.comments]);

  function loadMore() {
    let comLen = commentLength;
    if (comLen <= props.comments.length - 10) comLen += 10;
    else comLen = props.comments.length;
    setCommentLength(comLen);
    updateComments(comLen);
  }

  function updateComments(len: number) {
    let orderedComments = returnOrder(props.comments);
    let trimmedComs = orderedComments.slice(0, len);
    setComments(trimmedComs);
  }

  function returnButton() {
    if (props.comments.length === commentLength) {
      return null;
    } else {
      return (
        <button className={styles.button} onClick={() => loadMore()}>
          Load More
        </button>
      );
    }
  }

  function conditionalCommentRender() {
    if (comments.length > 0) {
      return (
        <React.Fragment>
          {comments.map((el: CommentItem) => (
            <IndividualComment
              commentUsername={el.username}
              commentUserId={el.userId}
              text={el.text}
              timestamp={el.timestamp}
            />
          ))}
          {returnButton()}
        </React.Fragment>
      );
    } else {
      return <h3 className={styles.empty}>Apparently nothing... Yet!</h3>;
    }
  }

  return (
    <div className={styles.tutorial_comments}>{conditionalCommentRender()}</div>
  );
};

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
    comLen += 10;
    setCommentLength(comLen);
    updateComments(comLen);
  }

  function updateComments(len: number) {
    let orderedComments = returnOrder(props.comments);
    let trimmedComs = orderedComments.slice(0, len);
    setComments(trimmedComs);
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
          <button className={styles.button} onClick={() => loadMore()}>
            <span className={styles.button_span}>Load More</span>
          </button>
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

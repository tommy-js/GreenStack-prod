import React, { useEffect, useState } from "react";
import { IndividualComment } from "../IndividualComment/IndividualComment";
import { CommentItem } from "../../types/types";
import { returnOrder } from "./index";
import styles from "./styles.module.scss";

interface Props {
  comments: CommentItem[];
}

export const Comments: React.FC<Props> = (props) => {
  const [comments, setComments] = useState([] as any);

  useEffect(() => {
    if (props.comments.length > 0) {
      let orderedComments = returnOrder(props.comments);
      setComments(orderedComments);
    }
  }, [props.comments]);

  function conditionalCommentRender() {
    if (comments.length > 0) {
      return (
        <React.Fragment>
          {comments.map((el: any) => (
            <IndividualComment
              commentUsername={el.username}
              commentUserId={el.userId}
              text={el.text}
              timestamp={el.timestamp}
            />
          ))}
        </React.Fragment>
      );
    } else {
      return <h3>Apparently nothing... Yet!</h3>;
    }
  }

  return (
    <div className={styles.tutorial_comments}>{conditionalCommentRender()}</div>
  );
};

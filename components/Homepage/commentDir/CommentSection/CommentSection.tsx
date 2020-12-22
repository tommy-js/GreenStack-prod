import React, { useState, useEffect } from "react";
import { IndividualComment } from "../IndividualComment/IndividualComment";
import { CommentItem } from "../../types/types";
import { sortComments } from "./index";
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  comments: CommentItem[];
}

export const CommentSection: React.FC<Props> = (props) => {
  const [comments, setComments] = useState([] as any);

  useEffect(() => {
    let sortedComments = sortComments(props.comments);
    setComments(sortedComments);
  }, [props.comments]);

  function returnRender() {
    if (comments.length > 0) {
      return (
        <div className={styles.comment_section}>
          {props.comments.map((el: CommentItem) => (
            <IndividualComment
              postId={props.postId}
              commentId={el.commentId}
              commentUserId={el.userId}
              key={el.timestamp}
              commentUsername={el.username}
              text={el.text}
              timestamp={el.timestamp}
              likes={el.likes}
              dislikes={el.dislikes}
              subComments={el.subComments}
            />
          ))}
        </div>
      );
    } else return null;
  }

  return <React.Fragment>{returnRender()}</React.Fragment>;
};

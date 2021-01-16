import React, { useState, useEffect } from "react";
import { LoadNew } from "../LoadNew/LoadNew";
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
  const [altComms, setAltComms] = useState([] as any);
  const [altered, setAltered] = useState(false);

  useEffect(() => {
    let sortedComments = sortComments(props.comments);
    if (comments.length === 0) setComments(sortedComments);
    else setAltComms(sortedComments);
  }, [props.comments]);

  useEffect(() => {
    if (comments.length === altComms.length) setAltered(false);
    else setAltered(true);
    console.log(comments);
    console.log(altComms);
  }, [altComms]);

  function loadMore() {
    setComments(altComms);
    setAltered(false);
  }

  function returnButtonNew() {
    if (altered === true) {
      return <LoadNew loadMore={loadMore} />;
    } else return null;
  }

  function returnRender() {
    if (comments.length > 0) {
      return (
        <div className={styles.comment_section}>
          {comments.map((el: CommentItem) => (
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

  return (
    <div>
      {returnButtonNew()}
      {returnRender()}
    </div>
  );
};

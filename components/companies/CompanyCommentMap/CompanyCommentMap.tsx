import React, { useState, useEffect } from "react";
import { StockComment } from "../StockComment/StockComment";
import { CommentItem } from "../../types/types";
import { LoadMoreComments } from "../LoadMoreComments/LoadMoreComments";
import styles from "./styles.module.scss";

interface Props {
  comments: CommentItem[];
}

export const CompanyCommentMap: React.FC<Props> = (props) => {
  const [maxComments, setMaxComments] = useState(props.comments);
  const [loadedComments, setLoadedComments] = useState([] as any);

  useEffect(() => {
    setMaxComments(props.comments);
    let commentRange = props.comments.length;
    if (commentRange > 5) {
      let tempArray = [...props.comments];
      let slicedArray = tempArray.slice(0, 5);
      setLoadedComments(slicedArray);
    } else {
      setLoadedComments(props.comments);
    }
  }, [props.comments]);

  useEffect(() => {
    let commentRange = props.comments.length;
    if (commentRange > 5) {
      let tempArray = [...props.comments];
      let slicedArray = tempArray.slice(0, 5);
      setLoadedComments(slicedArray);
    } else {
      setLoadedComments(props.comments);
    }
  }, []);

  function modLoaded() {
    if (maxComments.length >= loadedComments.length + 5) {
      let sliceIndex = loadedComments.length + 5;
      let tempArray = [...maxComments];
      let slicedArray = tempArray.slice(0, sliceIndex);
      setLoadedComments(slicedArray);
    } else {
      setLoadedComments(maxComments);
    }
  }

  function returnLoadMore() {
    if (maxComments.length > loadedComments.length) {
      return <LoadMoreComments modLoaded={modLoaded} />;
    } else return null;
  }

  function returnComments() {
    if (loadedComments.length > 0) {
      return (
        <React.Fragment>
          {loadedComments.map((el: CommentItem) => (
            <div key={el.commentId}>
              <StockComment
                username={el.username}
                userId={el.userId}
                text={el.text}
                commentId={el.commentId}
                timestamp={el.timestamp}
                likes={el.likes}
                dislikes={el.dislikes}
                key={el.commentId}
              />
            </div>
          ))}
          {returnLoadMore()}
        </React.Fragment>
      );
    } else return <h2 className={styles.null_response}>Nothing Here!</h2>;
  }

  return <div>{returnComments()}</div>;
};

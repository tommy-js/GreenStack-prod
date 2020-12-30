import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likeCommentMutation } from "../../queries/queries";
const like = require("../../../public/like.png");
const likeFilled = require("../../../public/like_filled.png");
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  commentId: string;
  likes: any;
  modLikes: () => void;
  likeCommentMutation: (variables: object) => any;
}

const LikePostCommentMutation: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(like);
  const [validCheck, setValidCheck] = useState(true);

  useEffect(() => {
    let checkDislikes = props.likes.find(
      (el: any) => el.reference.id === props.commentId
    );
    if (checkDislikes) {
      setValidCheck(false);
      setImgColor(likeFilled);
    } else {
      setValidCheck(true);
      setImgColor(like);
    }
  }, [props.likes]);

  function passData() {
    if (validCheck === true) {
      props
        .likeCommentMutation({
          variables: {
            token: sessionStorage.getItem("Token"),
            postId: props.postId,
            commentId: props.commentId,
          },
        })
        .then(() => {
          props.modLikes();
          setImgColor(likeFilled);
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }

  return (
    <div className={styles.like_button_block} onClick={() => passData()}>
      <img className={styles.like_button_image} src={imgColor} />
    </div>
  );
};

export const LikePostComment = compose(
  graphql(likeCommentMutation, { name: "likeCommentMutation" })
)(LikePostCommentMutation);

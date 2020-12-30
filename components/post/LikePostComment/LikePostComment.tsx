import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likeCommentMutation } from "../../queries/queries";
const like = require("../../../public/like.png");
const likeFilled = require("../../../public/like_filled.png");
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  commentId: string;
  modLikes: () => void;
  likeCommentMutation: (variables: object) => any;
}

const LikePostCommentMutation: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(like);

  function passData() {
    props
      .likeCommentMutation({
        variables: {
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

  return (
    <div className={styles.like_button_block} onClick={() => passData()}>
      <img className={styles.like_button_image} src={imgColor} />
    </div>
  );
};

export const LikePostComment = compose(
  graphql(likeCommentMutation, { name: "likeCommentMutation" })
)(LikePostCommentMutation);

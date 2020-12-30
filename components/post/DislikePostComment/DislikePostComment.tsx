import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikeCommentMutation } from "../../queries/queries";
const dislike = require("../../../public/dislike.png");
const dislikeFilled = require("../../../public/dislike_filled.png");
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  commentId: string;
  modDislikes: () => void;
  dislikeCommentMutation: (variables: object) => any;
}

const DislikePostCommentMutation: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(dislike);

  function passData() {
    props
      .dislikeCommentMutation({
        variables: {
          postId: props.postId,
          commentId: props.commentId,
        },
      })
      .catch((err: any) => {
        console.log(err);
      })
      .then(() => {
        props.modDislikes();
        setImgColor(dislikeFilled);
      });
  }

  return (
    <div className={styles.like_button_block} onClick={() => passData()}>
      <img className={styles.like_button_image} src={imgColor} />
    </div>
  );
};

export const DislikePostComment = compose(
  graphql(dislikeCommentMutation, { name: "dislikeCommentMutation" })
)(DislikePostCommentMutation);

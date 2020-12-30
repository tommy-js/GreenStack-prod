import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikeSubCommentMutation } from "../../queries/queries";
const dislike = require("../../../public/dislike.png");
const dislikeFilled = require("../../../public/dislike_filled.png");
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  commentId: string;
  parentCommentId: string;
  dislikeSubCommentMutation: (variables: object) => any;
}

const DislikeSubCommentMutation: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(dislike);

  function passData() {
    props
      .dislikeSubCommentMutation({
        variables: {
          postId: props.postId,
          commentId: props.commentId,
          parentCommentId: props.parentCommentId,
        },
      })
      .then((res: any) => {
        console.log(res);
        setImgColor(dislikeFilled);
      })
      .catch((err: any) => {
        console.log(err);
      });
  }

  return (
    <div className={styles.image_container} onClick={() => passData()}>
      <img className={styles.image} src={imgColor} />
    </div>
  );
};

export const DislikeSubComment = compose(
  graphql(dislikeSubCommentMutation, { name: "dislikeSubCommentMutation" })
)(DislikeSubCommentMutation);

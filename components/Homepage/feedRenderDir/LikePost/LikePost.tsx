import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likePostMutation } from "../../../queries/queries";
const like = require("../../../../public/like.png");
const likeFilled = require("../../../../public/like_filled.png");
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  postUsername: string;
  userId: string;
  modLikes?: () => void;
  likePostMutation: (variables: object) => any;
}

const LikePostRender: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(like);

  function passData() {
    let token = sessionStorage.getItem("Token");
    if (token) {
      props
        .likePostMutation({
          variables: {
            token: token,
            userId: props.userId,
            postId: props.postId,
            content: `${props.postUsername} liked your post`,
            likeText: `Liked a post submitted by ${props.postUsername}`,
          },
        })
        .then(() => {
          if (props.modLikes) props.modLikes();
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

export const LikePost = compose(
  graphql(likePostMutation, { name: "likePostMutation" })
)(LikePostRender);

import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { likePostMutation } from "../../queries/queries";
const like = require("../../../public/like.png");
const likeFilled = require("../../../public/like_filled.png");
import styles from "./styles.module.scss";

interface Props {
  postId: string;
  postUsername: string;
  userId: string;
  likes: any;
  state: any;
  modState: (passObj: any) => void;
  likePostMutation: (variables: object) => any;
}

const LikePostRender: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(like);
  const [validCheck, setValidCheck] = useState(true);

  useEffect(() => {
    let checkLikes = props.likes.find(
      (el: any) => el.reference.id === props.postId
    );
    if (checkLikes) {
      setValidCheck(false);
      setImgColor(likeFilled);
    } else {
      setValidCheck(true);
      setImgColor(like);
    }
  }, [props.likes]);

  useEffect(() => {
    if (props.state.dislike === 1) {
      setImgColor(like);
    }
  }, [props.state]);

  function passData() {
    let token = sessionStorage.getItem("Token");

    if (token && props.state.like === 0) {
      props
        .likePostMutation({
          variables: {
            token: token,
            userId: props.userId,
            postId: props.postId,
            postUsername: props.postUsername,
            content: `${props.postUsername} liked your post`,
            likeText: `Liked a post submitted by ${props.postUsername}`,
          },
        })
        .then(() => {
          setImgColor(likeFilled);
          props.modState({ like: 1, dislike: 0 });
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

import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikePostMutation } from "../../queries/queries";
const dislike = require("../../../public/dislike.png");
const dislikeFilled = require("../../../public/dislike_filled.png");
import styles from "./styles.module.scss";

interface Props {
  userId: string;
  postId: string;
  dislikes: any;
  state: any;
  modState: (passObj: any) => void;
  modDislikes?: (value: number) => void;
  dislikePostMutation: (variables: object) => any;
}

const DislikePostRender: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(dislike);
  const [validCheck, setValidCheck] = useState(true);

  useEffect(() => {
    let checkDislikes = props.dislikes.find(
      (el: any) => el.reference.id === props.postId
    );
    if (checkDislikes) {
      setValidCheck(false);
      setImgColor(dislikeFilled);
    } else {
      setValidCheck(true);
      setImgColor(dislike);
    }
  }, [props.dislikes]);

  useEffect(() => {
    if (props.state.like === 1) {
      setImgColor(dislike);
      props.modDislikes(props.state.dislike);
    }
  }, [props.state]);

  function passData() {
    let token = sessionStorage.getItem("Token");

    if (token && props.state.dislike === 0) {
      props
        .dislikePostMutation({
          variables: {
            token: token,
            userId: props.userId,
            postId: props.postId,
            content: "A user disliked your post",
          },
        })
        .then(() => {
          if (props.modDislikes) props.modDislikes(1);
          setImgColor(dislikeFilled);
          props.modState({ like: 0, dislike: 1 });
        })
        .catch((err: any) => {
          console.log(err);
        });
    }
  }

  return (
    <div className={styles.container} onClick={() => passData()}>
      <img className={styles.image} src={imgColor} />
    </div>
  );
};

export const DislikePost = compose(
  graphql(dislikePostMutation, { name: "dislikePostMutation" })
)(DislikePostRender);

import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikePostMutation } from "../../../queries/queries";
const dislike = require("../../../../public/dislike.png");
const dislikeFilled = require("../../../../public/dislike_filled.png");
import styles from "./styles.module.scss";

interface Props {
  userId: string;
  postId: string;
  dislikes: any;
  modDislikes?: () => void;
  dislikePostMutation: (variables: object) => any;
}

const DislikePostRender: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(dislike);

  function passData() {
    let token = sessionStorage.getItem("Token");

    let valid = testValid();

    function testValid() {
      let valid = true;
      for (let i = 0; i < props.dislikes.length; i++) {
        if (props.dislikes[i].reference.postId === props.postId) valid = false;
      }
      return valid;
    }

    if (token && valid === true) {
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
          if (props.modDislikes) props.modDislikes();
          setImgColor(dislikeFilled);
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

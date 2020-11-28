import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import { dislikePostMutation } from "../../../queries/queries";
const dislike = require("../../../../public/dislike.png");
const dislikeFilled = require("../../../../public/dislike_filled.png");
import "./styles.module.scss";

interface Props {
  userId: string;
  postId: string;
  modDislikes?: () => void;
  dislikePostMutation: (variables: object) => any;
}

const DislikePostRender: React.FC<Props> = (props) => {
  const [imgColor, setImgColor] = useState(dislike);

  function passData() {
    props
      .dislikePostMutation({
        variables: {
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

  return (
    <div className="like_button_block" onClick={() => passData()}>
      <img className="like_button_image" src={imgColor} />
    </div>
  );
};

export const DislikePost = compose(
  graphql(dislikePostMutation, { name: "dislikePostMutation" })
)(DislikePostRender);

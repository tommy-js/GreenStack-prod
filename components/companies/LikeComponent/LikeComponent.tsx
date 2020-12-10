import React, { useState } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import {
  likeStockMutation,
  dislikeStockMutation,
} from "../../queries/queries.js";
import styles from "./styles.module.scss";

interface Props {
  likes: number;
  dislikes: number;
  commentId: string;
  likeStockMutation: (variables: object) => any;
  dislikeStockMutation: (variables: object) => any;
}

const LikeComponentRender: React.FC<Props> = (props) => {
  function like() {
    let token = sessionStorage.getItem("Token");
    if (token) {
      props
        .likeStockMutation({
          variables: {
            token: token,
            text: "Liked stock comment",
            style: "Like",
            commentId: props.commentId,
          },
        })
        .catch((err: any) => {
          console.log(err);
        })
        .then((res: any) => {
          console.log(res);
        });
    }
  }

  function dislike() {
    let token = sessionStorage.getItem("Token");
    if (token) {
      props
        .dislikeStockMutation({
          variables: {
            token: token,
            text: "Disliked stock comment",
            style: "Dislike",
            commentId: props.commentId,
          },
        })
        .catch((err: any) => {
          console.log(err);
        })
        .then((res: any) => {
          console.log(res);
        });
    }
  }

  return (
    <div className={styles.like_component}>
      <span className={styles.likes}>{props.likes}</span>
      <div className={styles.likes_block} onClick={() => like()}>
        <img
          className={styles.like}
          src={require("../../../public/like.png")}
        />
      </div>
      <span className={styles.likes}>{props.dislikes}</span>
      <div className={styles.dislikes_block} onClick={() => dislike()}>
        <img
          className={styles.dislike}
          src={require("../../../public/dislike.png")}
        />
      </div>
    </div>
  );
};

const LikeComponentMutation = compose(
  graphql(likeStockMutation, { name: "likeStockMutation" })
)(LikeComponentRender);

export const LikeComponent = compose(
  graphql(dislikeStockMutation, { name: "dislikeStockMutation" })
)(LikeComponentMutation);

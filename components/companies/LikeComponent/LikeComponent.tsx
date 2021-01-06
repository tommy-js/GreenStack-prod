import React, { useState, useEffect } from "react";
import { graphql } from "react-apollo";
import { flowRight as compose } from "lodash";
import {
  likeStockMutation,
  dislikeStockMutation,
} from "../../queries/queries.js";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";
const likeImg = require("../../../public/like.png");
const likeFull = require("../../../public/like_filled.png");
const dislikeImg = require("../../../public/dislike.png");
const dislikeFull = require("../../../public/dislike_filled.png");

interface Redux {
  likes: any;
  dislikes: any;
}

interface Props extends Redux {
  likeCount: number;
  dislikeCount: number;
  commentId: string;
  likeStockMutation: (variables: object) => any;
  dislikeStockMutation: (variables: object) => any;
}

const LikeComponentRender: React.FC<Props> = (props) => {
  const [likeVisual, setLikeVisual] = useState(likeImg);
  const [dislikeVisual, setDislikeVisual] = useState(dislikeImg);
  const [liked, setLiked] = useState(false);
  const [disliked, setDisliked] = useState(false);

  useEffect(() => {
    let likes = [...props.likes];
    let dislikes = [...props.dislikes];
    console.log(likes);

    for (let u = 0; u < likes.length; u++) {
      if (likes[u].reference.id === props.commentId) {
        setLiked(true);
        setLikeVisual(likeFull);
      }
    }

    for (let i = 0; i < dislikes.length; i++) {
      if (dislikes[i].reference.id === props.commentId) {
        setDisliked(true);
        setDislikeVisual(dislikeFull);
      }
    }
  }, []);

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
          if (liked === true) setLikeVisual(likeImg);
          else if (liked === false) setLikeVisual(likeFull);
          setLiked(!liked);
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
          if (disliked === true) setDislikeVisual(dislikeImg);
          else if (disliked === false) setDislikeVisual(dislikeFull);
          setDisliked(!disliked);
        });
    }
  }

  return (
    <div className={styles.like_component}>
      <span className={styles.likes}>{props.likeCount}</span>
      <div className={styles.likes_block} onClick={() => like()}>
        <img src={likeVisual} className={styles.like} />
      </div>
      <span className={styles.likes}>{props.dislikeCount}</span>
      <div className={styles.dislikes_block} onClick={() => dislike()}>
        <img src={dislikeVisual} className={styles.dislike} />
      </div>
    </div>
  );
};

const LikeComponentLikeMutation = compose(
  graphql(likeStockMutation, { name: "likeStockMutation" })
)(LikeComponentRender);

const LikeComponentDislikeMutation = compose(
  graphql(dislikeStockMutation, { name: "dislikeStockMutation" })
)(LikeComponentLikeMutation);

export const LikeComponent = connect(mapStateToProps)(
  LikeComponentDislikeMutation
);

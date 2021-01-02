import React, { useState, useEffect } from "react";
import { LikePost } from "../LikePost/LikePost";
import { DislikePost } from "../DislikePost/DislikePost";
import { EditPost } from "../EditPost/EditPost";
import { connect } from "react-redux";
import { mapStateToProps } from "../../actions/actions";
import styles from "./styles.module.scss";
const comment = require("../../../public/comment.png");

interface Redux {
  likes: any;
  dislikes: any;
  posts: any;
}

interface Props extends Redux {
  postUserId: string;
  postId: string;
  likesCount: number;
  dislikesCount: number;
  commentsCount: number;
  modLikes: (value: number) => void;
  modDislikes: (value: number) => void;
}

const PostInteractionRedux: React.FC<Props> = (props) => {
  const [currentUser, setCurrentUser] = useState(false);
  const [state, setState] = useState({ like: 0, dislike: 0 });

  useEffect(() => {
    let posts = props.posts;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].postId === props.postId) setCurrentUser(true);
    }
    let checkDislikes = props.dislikes.find(
      (el: any) => el.reference.id === props.postId
    );
    let checkLikes = props.likes.find(
      (el: any) => el.reference.id === props.postId
    );
    if (checkDislikes) {
      setState({ like: state.like, dislike: 1 });
    }
    if (checkLikes) {
      setState({ like: 1, dislike: state.dislike });
    }
    if (checkDislikes && checkLikes) {
      setState({ like: 1, dislike: 1 });
    }
  }, []);

  function returnIfCurrentUser() {
    if (currentUser === true) {
      return <EditPost postId={props.postId} />;
    } else return null;
  }

  function modState(passObj: any) {
    setState(passObj);
  }

  return (
    <div className={styles.post_interaction}>
      <div className={styles.likes}>
        <span className={styles.post_value_inner}>{props.likesCount}</span>
      </div>
      <LikePost
        userId={props.postUserId}
        postId={props.postId}
        likes={props.likes}
        modLikes={props.modLikes}
        state={state}
        modState={modState}
      />
      <div className={styles.dislikes}>
        <span className={styles.post_value_inner}>{props.dislikesCount}</span>
      </div>
      <DislikePost
        userId={props.postUserId}
        postId={props.postId}
        dislikes={props.dislikes}
        modDislikes={props.modDislikes}
        state={state}
        modState={modState}
      />
      <div className={styles.post_values}>
        <span className={styles.post_value_inner}>{props.commentsCount}</span>
      </div>
      <div className={styles.like_button_block}>
        <img className={styles.like_button_image} src={comment} />
      </div>
      {returnIfCurrentUser()}
    </div>
  );
};

export const PostInteraction = connect(mapStateToProps)(PostInteractionRedux);

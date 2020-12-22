import React, { useState, useEffect } from "react";
import { LikePost } from "../LikePost/LikePost";
import { DislikePost } from "../DislikePost/DislikePost";
import { EditPost } from "../EditPost/EditPost";
import { connect } from "react-redux";
import { mapStateToProps } from "../../../actions/actions";
import styles from "./styles.module.scss";
const comment = require("../../../../public/comment.png");

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
  modLikes: () => void;
  modDislikes: () => void;
}

const PostInteractionRedux: React.FC<Props> = (props) => {
  const [currentUser, setCurrentUser] = useState(false);

  useEffect(() => {
    let posts = props.posts;
    for (let i = 0; i < posts.length; i++) {
      if (posts[i].postId === props.postId) setCurrentUser(true);
    }
  }, []);

  function returnIfCurrentUser() {
    if (currentUser === true) {
      return <EditPost postId={props.postId} />;
    } else return null;
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
      />
      <div className={styles.dislikes}>
        <span className={styles.post_value_inner}>{props.dislikesCount}</span>
      </div>
      <DislikePost
        userId={props.postUserId}
        postId={props.postId}
        dislikes={props.dislikes}
        modDislikes={props.modDislikes}
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

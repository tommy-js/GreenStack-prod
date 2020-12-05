import React, { useEffect, useState } from "react";
import { LikePostComment } from "../../post/LikePostComment/LikePostComment";
import { DislikePostComment } from "../../post/DislikePostComment/DislikePostComment";
import { Comment } from "../Comment/Comment";
import { IndividualCommentSubComments } from "../IndividualCommentSubComments/IndividualCommentSubComments";
import { IndividualCommentReply } from "../IndividualCommentReply/IndividualCommentReply";
const comment = require("../../../../public/comment.png");
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import styles from "./styles.module.scss";

type Routes = {
  username: string;
  userId: string;
  bio: string;
  profileImage: string;
};

type SubComments = {
  userId: string;
  commentId: string;
  username: string;
  timestamp: number;
  text: string;
  likes: number;
  dislikes: number;
  parentCommentId: string;
};

interface Redux {
  userRoutes: any;
  onUserRouteSet: (userRoutes: any) => void;
}

interface Props extends Redux {
  postId: string;
  commentId: string;
  username: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  commentUsername: string;
  commentUserId: string;
  subComments: SubComments[];
}

const IndividualCommentRender: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);
  const [transferedDisp, setTransferedDisp] = useState("none");
  const [disp, setDisp] = useState(false);

  useEffect(() => {
    let foundInd = props.userRoutes.find(
      (el: Routes) => el.userId === props.commentUserId
    );
    if (!foundInd) {
      let obj = {
        username: props.commentUsername,
        userId: props.commentUserId,
        bio: "",
        profileImage: "",
      };
      let arr = [...props.userRoutes, obj];
      props.onUserRouteSet(arr);
    }
  }, []);

  function likeIncrement() {
    let like = Number(likes);
    like++;
    setLikes(like);
  }

  function dislikeIncrement() {
    let dislike = Number(dislikes);
    dislike++;
    setDislikes(dislike);
  }

  function modDisp() {
    if (disp === true) setTransferedDisp("none");
    else setTransferedDisp("block");
    setDisp(!disp);
  }

  return (
    <div>
      <Comment
        commentUsername={props.commentUsername}
        timestamp={props.timestamp}
        text={props.text}
      />
      <div className={styles.comment_information}>
        {likes}
        <LikePostComment
          postId={props.postId}
          commentId={props.commentId}
          modLikes={likeIncrement}
        />
        , {dislikes}{" "}
        <DislikePostComment
          postId={props.postId}
          commentId={props.commentId}
          modDislikes={dislikeIncrement}
        />
        <div className={styles.post_values}>
          <span className={styles.post_value_inner}>
            {props.subComments.length}
          </span>
        </div>
        <div className={styles.like_button_block} onClick={() => modDisp()}>
          <img className={styles.like_button_image} src={comment} />
        </div>
      </div>
      <IndividualCommentReply
        postId={props.postId}
        commentId={props.commentId}
      />
      <IndividualCommentSubComments
        postId={props.postId}
        transferedDisp={transferedDisp}
        subComments={props.subComments}
      />
    </div>
  );
};

export const IndividualComment = connect(
  mapStateToProps,
  mapDispatchToProps
)(IndividualCommentRender);

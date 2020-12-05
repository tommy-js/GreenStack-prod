import React, { useEffect, useState } from "react";
import { CommentInformation } from "../CommentInformation/CommentInformation";
import { Comment } from "../Comment/Comment";
import { IndividualCommentSubComments } from "../IndividualCommentSubComments/IndividualCommentSubComments";
import { IndividualCommentReply } from "../IndividualCommentReply/IndividualCommentReply";
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
  const [transferedDisp, setTransferedDisp] = useState("none");

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

  return (
    <div>
      <Comment
        commentUsername={props.commentUsername}
        timestamp={props.timestamp}
        text={props.text}
      />
      <CommentInformation
        likes={props.likes}
        dislikes={props.dislikes}
        postId={props.postId}
        commentId={props.commentId}
        subComments={props.subComments}
      />
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

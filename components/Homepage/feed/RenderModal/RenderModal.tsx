import React, { useEffect, useState } from "react";
import { CommentInputPost } from "../../CommentInputPost/CommentInputPost";
import { CommentSection } from "../../CommentSection/CommentSection";
import { LikePost } from "../LikePost/LikePost";
import { DislikePost } from "../DislikePost/DislikePost";
import { UserIndex } from "../../../about/UserIndex/UserIndex";
import Link from "next/link";
import { UserRoute } from "../../../types/types";
const comment = require("../../../../public/comment.png");
import { returnDate, returnTaggedString, returnUserRoutes } from "./index";
import { useLazyQuery } from "react-apollo";
import { userCommentLookup } from "../../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import { enableBodyScroll } from "body-scroll-lock";
import styles from "./styles.module.scss";

interface Mapper {
  tag: string;
}

interface Redux {
  userRoutes: UserRoute[];
  onUserRouteSet: (userRoutes: UserRoute[]) => void;
}

interface Props extends Redux {
  title: string;
  postUserId: string;
  userProfileImage: string;
  postImage: string;
  postId: string;
  postUsername: string;
  text: string;
  timestamp: number;
  likes: number;
  dislikes: number;
  allowComments: boolean;
  allowLikes: boolean;
  comments: {
    userId: string;
    commentId: string;
    username: string;
    timestamp: number;
    text: string;
    likes: number;
    dislikes: number;
    subComments: [
      {
        userId: string;
        commentId: string;
        username: string;
        timestamp: number;
        text: string;
        likes: number;
        dislikes: number;
        parentCommentId: string;
      }
    ];
  }[];
  modPostLoad: (postId: string) => void;
}

const RenderModalPre: React.FC<Props> = (props) => {
  const [likes, setLikes] = useState(props.likes);
  const [dislikes, setDislikes] = useState(props.dislikes);
  const [comments, setComments] = useState(props.comments.length);

  function returnImage() {
    if (props.postImage == "null") return null;
    else {
      return (
        <div className={styles.post_image_block}>
          <img className={styles.post_image} src={props.postImage} />
        </div>
      );
    }
  }

  function modLikes() {
    setLikes(likes + 1);
  }

  function modDislikes() {
    setDislikes(dislikes + 1);
  }

  function modComments() {
    setComments(comments + 1);
  }

  useEffect(() => {
    let returned = returnUserRoutes(
      props.postUsername,
      props.postUserId,
      props.userRoutes
    );
    if (returned) props.onUserRouteSet(returned);
  }, []);

  function returnText() {
    let tag = returnTaggedString(props.text);
    return (
      <React.Fragment>
        {tag.map((el: any) => (
          <IndMapper tag={el} />
        ))}
      </React.Fragment>
    );
  }

  function returnAllowed() {
    if (props.allowLikes === true) {
      return (
        <React.Fragment>
          <div className={styles.post_values}>
            <span className={styles.post_value_inner}>{likes}</span>
          </div>
          <LikePost
            userId={props.postUserId}
            postId={props.postId}
            modLikes={modLikes}
          />
          <div className={styles.post_values}>
            <span className={styles.post_value_inner}>{dislikes}</span>
          </div>
          <DislikePost
            userId={props.postUserId}
            postId={props.postId}
            modDislikes={modDislikes}
          />
          <div className={styles.post_values}>
            <span className={styles.post_value_inner}>{comments}</span>
          </div>
          <div className={styles.like_button_block}>
            <img className={styles.like_button_image} src={comment} />
          </div>
        </React.Fragment>
      );
    } else return null;
  }

  function unlockScrollState() {
    const feed = document.getElementById("feed")!;
    if (feed) enableBodyScroll(feed);
  }

  return (
    <div className={styles.render_modal}>
      <div className={styles.post_upper_block}>
        <h2>{props.title}</h2>
        <Link href={`/home/user/${props.postUserId}`}>
          <a>{props.postUserId}</a>
        </Link>
        <div
          className={`${styles.feed_profile_image_block} ${styles.feed_link}`}
          onClick={() => unlockScrollState()}
        >
          <img
            className={styles.feed_profile_image}
            src={props.userProfileImage}
          />
        </div>
        <h3 className={styles.feed_link_name}>{props.postUsername}</h3>

        {returnImage()}
        <p className={styles.post_text}>{returnText()}</p>
      </div>
      <div className={styles.post_lower_block}>
        <p className={styles.post_return_date}>
          Posted {returnDate(props.timestamp)}
        </p>
        {returnAllowed()}
        <CommentInputPost
          userId={props.postUserId}
          postId={props.postId}
          modComments={modComments}
          allowComments={props.allowComments}
        />
        <CommentSection postId={props.postId} comments={props.comments} />
      </div>
    </div>
  );
};

const IndMapper: React.FC<Mapper> = (props) => {
  const [callUser, { data }] = useLazyQuery(userCommentLookup);
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (props.tag.includes("@"))
      callUser({
        variables: {
          username: getUsername(),
        },
      });
  }, []);

  useEffect(() => {
    if (data) setUserData(data.specUser);
  }, [data]);

  function getUsername() {
    let username = props.tag.slice(1, props.tag.length);
    return username;
  }

  function renderFunc() {
    if (data && userData && data.specUser != null) {
      return (
        <UserIndex
          highlightUsername={userData.username}
          highlightUserId={userData.userId}
          highlightBio={userData.bio}
          highlightProfileImage={userData.profileImage}
        />
      );
    } else {
      return <span className={styles.tag_span}> {props.tag} </span>;
    }
  }

  return renderFunc();
};

export const RenderModal = connect(
  mapStateToProps,
  mapDispatchToProps
)(RenderModalPre);

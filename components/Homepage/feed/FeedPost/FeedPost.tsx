import React, { useState, useEffect } from "react";
import { LikePost } from "../../feedRenderDir/LikePost/LikePost";
import { DislikePost } from "../../feedRenderDir/DislikePost/DislikePost";
import { InlineUnfollow } from "../InlineUnfollow/InlineUnfollow";
import { UserIndex } from "../../../about/UserIndex/UserIndex";
import Link from "next/link";
const comment = require("../../../../public/comment.png");
import { returnDate, returnTaggedString } from "./index";
import { useLazyQuery } from "react-apollo";
import { userCommentLookup } from "../../../queries/queries";
import { connect } from "react-redux";
import { mapStateToProps, mapDispatchToProps } from "../../../actions/actions";
import { enableBodyScroll } from "body-scroll-lock";
import styles from "./styles.module.scss";

interface Mapper {
  tag: string;
  key: any;
  accessKey: any;
}

interface Redux {
  userRoutes: any;
  likes: any;
  dislikes: any;
  onUserRouteSet: (userRoutes: any) => void;
}

interface Props extends Redux {
  title: string;
  postUserId: string;
  postProfileImage: string;
  postImage: string;
  postUsername: string;
  text: string;
  timestamp: number;
  likesCount: number;
  dislikesCount: number;
  comments: any;
  postId: string;
  allowComments: boolean;
  allowLikes: boolean;
  currentIndex: number;
  view: number;
  loadMore: (val: number) => void;
}

const FeedPostRender: React.FC<Props> = (props) => {
  useEffect(() => {
    let postElement = document.getElementById(`id_${props.postId}`);
    if (postElement) {
      const rect = postElement.getBoundingClientRect();
      if (
        rect.top >= 0 &&
        rect.bottom <=
          (window.innerHeight || document.documentElement.clientHeight)
      )
        props.loadMore(props.currentIndex);
    }
  }, [props.view]);

  function returnAllowed() {
    if (props.allowLikes === true) {
      return (
        <React.Fragment>
          <div className={styles.post_values}>
            <span className={styles.post_value_inner}>{props.likesCount}</span>
          </div>
          <LikePost
            userId={props.postUserId}
            postUsername={props.postUsername}
            postId={props.postId}
            likes={props.likes}
          />
          <div className={styles.post_values}>
            <span className={styles.post_value_inner}>
              {props.dislikesCount}
            </span>
          </div>
          <DislikePost
            userId={props.postUserId}
            postUsername={props.postUsername}
            postId={props.postId}
            dislikes={props.dislikes}
          />
          <div className={styles.post_values}>
            <span className={styles.post_value_inner}>
              {props.comments.length}
            </span>
          </div>
          <div className={styles.like_button_block}>
            <img className={styles.like_button_image} src={comment} />
          </div>
        </React.Fragment>
      );
    } else return null;
  }

  return (
    <div id={`id_${props.postId}`}>
      <Link href={`/post/${props.postId}`}>
        <PostLink
          text={props.text}
          postImage={props.postImage}
          postUserId={props.postUserId}
          postUsername={props.postUsername}
          postProfileImage={props.postProfileImage}
          timestamp={props.timestamp}
        />
      </Link>
      <div className={styles.feed_link}>{returnAllowed()}</div>
    </div>
  );
};

export const FeedPost = connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedPostRender);

const PostLink = React.forwardRef(
  (
    {
      onClick,
      href,
      text,
      postImage,
      postUserId,
      postUsername,
      postProfileImage,
      timestamp,
    },
    ref
  ) => {
    const [over, setOver] = useState(false);
    const [styledOpac, setStyledOpac] = useState(0);
    const [tag] = useState(returnTaggedString(text));

    function returnText() {
      if (tag.length > 0) {
        console.log(tag);
        return (
          <React.Fragment>
            {tag.map((el: any) => (
              <div key={el.key}>
                <IndMapper tag={el.text} key={el.key} accessKey={el.key} />
              </div>
            ))}
          </React.Fragment>
        );
      } else return null;
    }

    function returnImage() {
      if (postImage == "null") {
        return null;
      } else {
        return (
          <div className={styles.post_image_block}>
            <img className={styles.post_image} src={postImage} />
          </div>
        );
      }
    }

    return (
      <a href={href} onClick={onClick} ref={ref}>
        <div
          className={styles.feed_link_header}
          onMouseOver={() => setOver(true)}
          onMouseOut={() => setOver(false)}
        >
          <div
            className={`${styles.feed_profile_image_block} ${styles.feed_link}`}
          >
            <img className={styles.feed_profile_image} src={postProfileImage} />
          </div>
          <div className={styles.feed_link_name}>{postUsername}</div>
          <div
            style={{ opacity: styledOpac }}
            className={styles.feed_link_unfollow}
          >
            <InlineUnfollow followerId={postUserId} />
          </div>
          <div>{returnImage()}</div>
          <div>{returnText()}</div>
          <p className={styles.post_return_date}>{returnDate(timestamp)}</p>
        </div>
      </a>
    );
  }
);

const IndMapper: React.FC<Mapper> = (props) => {
  const [callUser, { data }] = useLazyQuery(userCommentLookup);
  const [userData, setUserData] = useState();

  useEffect(() => {
    if (props.tag.includes("@")) {
      callUser({
        variables: {
          username: getUsername(),
        },
      });
    }
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

  return <div key={props.accessKey}>{renderFunc()}</div>;
};
